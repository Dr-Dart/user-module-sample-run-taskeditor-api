import { useEffect, useState } from 'react';
import {
  Context,
  IModuleChannel,
  IModuleComponentBinder,
  IModuleScreenManager,
  IModuleServiceManager,
  Message,
  ModuleContext,
} from 'dart-api';

let serviceManager: IModuleServiceManager | null = null;
let serviceChannel: IModuleChannel | null = null;
let screenManager: IModuleScreenManager | null = null;

// use service for remote control
const message = new Message({
  action: 'com.dart.module.remotecontrol.action.REMOTE_MODULE',
  category: Message.CATEGORY_SERVICE,
  packageName: 'com.dart.module.taskeditor',
  componentId: 'RemoteControlService',
});

// open Task Editor screen
const screenMessage = new Message({
  action: Message.ACTION_MAIN,
  category: Message.CATEGORY_SCREEN,
  packageName: 'com.dart.module.taskeditor',
});

type Props = {
  moduleContext: ModuleContext;
};

const useTaskList = ({ moduleContext }: Props) => {
  const [taskList, setTaskList] = useState<string[]>([]);

  useEffect(() => {
    serviceManager = moduleContext.getSystemManager(
      Context.MODULE_SERVICE_MANAGER,
    ) as IModuleServiceManager;

    screenManager = moduleContext.getSystemManager(
      Context.MODULE_SCREEN_MANAGER,
    ) as IModuleScreenManager;
  }, []);

  useEffect(() => {
    bindService();

    return () => {
      unbindService();
    };
  }, []);

  const binder: IModuleComponentBinder = {
    onBound: (
      packageName: string,
      componentId: string,
      channel: IModuleChannel,
    ) => {
      serviceChannel = channel;

      channel.receive('get_taskfile', (taskList: string[]) => {
        setTaskList(taskList);
      });

      channel.receive('select_task', (result: string) => {
        console.info(
          `RC-receive: ${moduleContext.componentId}, 'run_program' ${result}`,
        );
      });
    },

    onUnbound: (packageName: string, componentId: string) => {
      serviceChannel = null;
    },
  };

  const bindService = async () => {
    try {
      await serviceManager!.bindModuleService(message, binder);
    } catch (error) {
      console.error('Failed to bind from', message.componentId);
    }
  };

  const unbindService = async () => {
    try {
      await serviceManager!.unbindModuleService(message, binder);
    } catch (error) {
      console.error('Failed to bind from', message.componentId);
    }
  };

  const getTaskList = () => {
    if (serviceChannel) {
      serviceChannel.send('get_taskfile');
    } else {
      console.error('Fail to get task: channel is null');
    }
  };

  const selectProgram = async (task: string) => {
    if (serviceChannel) {
      serviceChannel.send('select_task', task);

      await screenManager?.startModuleScreen(screenMessage);
    } else {
      console.error('Fail to run program: channel is null');
    }
  };

  return { taskList, getTaskList, selectProgram } as const;
};

export default useTaskList;
