/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs-extra');
const AdmZip = require('adm-zip');
const { EsbuildPlugin } = require('esbuild-loader');
const WebpackObfuscator = require('webpack-obfuscator');

// initialize manifest.json for root
const rootManifestFileName = 'manifest.json';
const rootManifest = require(`../${rootManifestFileName}`);
const packageJson = require(`./package.json`);
const packageName = rootManifest.packageName;
const assetDir = 'assets';
const drscModulePkgFileName = rootManifest.drscModulePackageFile;
const drcfModulePkgFileName = rootManifest.drcfModulePackageFile;

// initialize manifest.json for DART-Platform
const manifestFileName = 'manifest.json';
const manifest = require(`./${manifestFileName}`);

// initialize misc.
const rootDir = path.join(__dirname, '../');
const buildDir = path.join(__dirname, 'build');
const buildPkgDir = path.join(buildDir, packageName);
const outputDir = path.join(__dirname, 'output');
const outputPkgDir = path.join(outputDir, packageName);
function move(fileName, fromDir, toDir) {
  if (
    fileName &&
    fileName.trim().length > 0 &&
    fs.existsSync(path.join(fromDir, fileName))
  ) {
    fs.moveSync(path.join(fromDir, fileName), path.join(toDir, fileName));
  }
}

function copy(fileName, fromDir, toDir) {
  if (
    fileName &&
    fileName.trim().length > 0 &&
    fs.existsSync(path.join(fromDir, fileName))
  ) {
    fs.copySync(path.join(fromDir, fileName), path.join(toDir, fileName));
  }
}

function copyToDirPath(fileName, fromDir, toDirPath) {
  if (
    fileName &&
    fileName.trim().length > 0 &&
    fs.existsSync(path.join(fromDir, fileName))
  ) {
    fs.copySync(path.join(fromDir, fileName), toDirPath);
  }
}

function remove(fileName, fromDir) {
  if (
    fileName &&
    fileName.trim().length > 0 &&
    fs.existsSync(path.join(fromDir, fileName))
  ) {
    fs.removeSync(path.join(fromDir, fileName));
  }
}

class PackagingModulePackage {
  async packDrscModulePackage() {
    // Add udrf to module - Start
    if (packageJson.dependencies && packageJson.dependencies['dart-sdk']) {
      const sdkPathMatchResult =
        packageJson.dependencies['dart-sdk'].match('(?<=file:/).+');
      if (sdkPathMatchResult) {
        copyToDirPath(
          '/src/urdf',
          sdkPathMatchResult[0],
          path.join(buildPkgDir, 'urdf'),
        );
      }
    }
    // Add udrf to module - End
    copyToDirPath('src/assets', __dirname, path.join(buildPkgDir, 'assets'));
    copy(manifestFileName, __dirname, buildPkgDir);

    const zip = new AdmZip();
    zip.addLocalFolder(buildPkgDir);
    const dstName = path.join(buildDir, drscModulePkgFileName);
    await zip
      .writeZipPromise(dstName, null)
      .then(() => {
        console.log(`Successfully compress ${buildPkgDir} to ${dstName}.`);
      })
      .catch((e) => {
        console.error(e);
      });
  }

  async packTotalModulePackage() {
    copy(assetDir, rootDir, outputPkgDir);
    copy(rootManifestFileName, rootDir, outputPkgDir);
    copy(drscModulePkgFileName, buildDir, outputPkgDir);
    copy(drcfModulePkgFileName, rootDir, outputPkgDir);

    const zip = new AdmZip();
    zip.addLocalFolder(outputPkgDir);
    const dstName = path.join(
      outputDir,
      `${packageName}_${rootManifest.version}.dm`,
    );
    await zip
      .writeZipPromise(dstName, null)
      .then(() => {
        remove(packageName, outputDir);
        move(`${packageName}.dm`, outputDir, outputPkgDir);
        console.log(`Successfully compress ${outputPkgDir} to ${dstName}.`);
      })
      .catch((e) => {
        console.error(e);
      });
  }

  apply(compiler) {
    compiler.hooks.beforeCompile.tap('PackagingModulePackage', (_) => {
      // remove(packageName, buildDir);
      remove(packageName, outputDir);
      remove(`${packageName}.dm`, outputDir);
    });
    compiler.hooks.done.tap('PackagingModulePackage', async (_) => {
      await this.packDrscModulePackage()
        .then(async () => await this.packTotalModulePackage())
        .catch((e) => console.error(e));
    });
  }
}

module.exports = {
  entry: {
    bundle: './src/index.tsx',
  },
  output: {
    path: buildPkgDir,
    filename: manifest.main,
  },
  resolve: {
    extensions: [
      '.js',
      'jsx',
      '.ts',
      '.tsx',
      'mjs',
      'mjsx',
      'css',
      'scss',
      'sass',
      'svg',
      'json',
    ],
  },
  plugins: [
    new PackagingModulePackage(),
    new WebpackObfuscator({ rotateStringArray: true }),
  ],
  optimization: {
    minimizer: [
      new EsbuildPlugin({
        target: 'es2015', // Syntax to transpile to (see options below for possible values)
      }),
    ],
  },
  module: {
    rules: [
      // {
      //   test: /\.(m?jsx?)|(tsx?)$/,
      //   use: [
      //     {
      //       loader: 'babel-loader',
      //       options: {
      //         presets: [
      //           '@babel/preset-env',
      //           '@babel/preset-react',
      //           '@babel/preset-typescript',
      //         ],
      //       },
      //     },
      //   ],
      //   exclude: /((node_modules\/(?!(dart-api)\/).*)|(bower_components))/,
      // },
      {
        test: /\.[t]sx?$/,
        loader: 'esbuild-loader',
        options: {
          target: 'es2015',
        },
      },
      {
        test: /\.(c|sc|sa)ss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              attributes: {
                id: `module_${packageName}`,
              },
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentHashSalt: `module_${packageName}`,
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ['@svgr/webpack'],
      },
      {
        test: /\.json$/,
        use: ['json-loader'],
        type: 'javascript/auto',
      },
      {
        test: /\.*$/i,
        type: 'asset/resource',
        exclude: /\.((m?jsx?)|(tsx?)|(c|sc|sa)ss|(svg)|(json))$/,
        generator: {
          filename: `assets/[path][name][ext]`,
        },
      },
    ],
  },
};
