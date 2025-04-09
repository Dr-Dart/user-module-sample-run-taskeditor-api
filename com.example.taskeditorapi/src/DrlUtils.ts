/*
    BSD 3-Clause License    
    Copyright (c) 2023, Doosan Robotics Inc.
*/
import {
  Context,
  IDartFileSystem,
  IProgramManager,
  ModuleContext,
  SubProgram,
  MonitoringVariable,
} from 'dart-api';

export default class DrlUtils {
  private fieldDataMap: Map<string, string | number | boolean>;
  private static instance: DrlUtils | null;

  // Get instance
  public static getInstance(): DrlUtils {
    if (!DrlUtils.instance) {
      DrlUtils.instance = new DrlUtils();
    }
    return DrlUtils.instance;
  }

  // Remove the DrlUtils instance before closing the module
  public static deleteInstance() {
    if (DrlUtils.instance) {
      DrlUtils.instance.clearFieldData();
      DrlUtils.instance = null;
    }
  }

  // private constructor
  private constructor() {
    this.fieldDataMap = new Map();
  }
  public setFieldValue(key: string, value: string | number | boolean) {
    this.fieldDataMap.set(key, value);
  }
  public getFieldValue(key: string): string | number | boolean | undefined {
    return this.fieldDataMap.get(key);
  }
  public getFieldData(): Map<string, string | number | boolean> {
    return this.fieldDataMap;
  }
  public deleteField(key: string): boolean {
    return this.fieldDataMap.delete(key);
  }
  public clearFieldData() {
    this.fieldDataMap.clear();
  }
  public async runProgram(
    moduleContext: ModuleContext,
    mainProgramFilePath: string,
    subProgramFilePaths: string[],
    monitoringVariables: MonitoringVariable[] | null,
    useDebug: boolean,
  ) {
    const fileSystem = moduleContext.getSystemLibrary(
      Context.DART_FILE_SYSTEM,
    ) as IDartFileSystem;
    const rootFilePath = fileSystem.getModuleRootDirPath(moduleContext);
    const regex = new RegExp(`.*(${rootFilePath})`);
    const appData = Object.fromEntries(this.fieldDataMap);
    let subPrograms: SubProgram[] | null = null;
    const mainAbsolutePath = decodeURI(mainProgramFilePath).replace(
      regex,
      `$1`,
    );
    const mainProgram = await this.createDRLContent(
      moduleContext,
      fileSystem,
      mainAbsolutePath,
      appData,
    );
    if (mainProgram === '') {
      return false;
    }

    if (subProgramFilePaths.length > 0) {
      const promises = subProgramFilePaths.map(
        (path: string) =>
          new Promise<SubProgram>((resolve, reject) => {
            const absolutePath = path.replace(regex, `$1`);
            this.createDRLContent(
              moduleContext,
              fileSystem,
              absolutePath,
              appData,
            )
              .then((content: string) => {
                // ryu
                resolve({
                  fileName:
                    moduleContext.packageName.replaceAll('.', '_') +
                      '_' +
                      absolutePath.match(/([^/]+)\.[^/.]+$/)?.[1] || '',
                  script: `from DRCF import *\r\n` + content,
                });
              })
              .catch((error) => {
                reject(error);
              });
          }),
      );
      subPrograms = await Promise.all(promises);
      //ryu
    }

    const programManager = moduleContext.getSystemManager(
      Context.PROGRAM_MANAGER,
    ) as IProgramManager;
    return await programManager.runProgram(
      mainProgram,
      subPrograms,
      monitoringVariables,
      useDebug,
    );
  }
  private async createDRLContent(
    moduleContext: ModuleContext,
    fileSystem: IDartFileSystem,
    path: string,
    appData: { [k: string]: string | number | boolean },
  ) {
    let result = '';
    if (await fileSystem.exists(path)) {
      result = await fileSystem.readFile(moduleContext, path);
      result = `app_data = '${JSON.stringify(appData)}'\r\n` + result;
    }
    return result;
  }
}
