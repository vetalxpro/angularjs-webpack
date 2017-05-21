import * as webpack from 'webpack';
import { mainConfig } from './main.config';
import { webpackConfig } from './webpack.config';
import { join } from 'path';

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpackProdConf = (): webpack.Configuration => {

  const productionPlugins = [
    new CleanWebpackPlugin(mainConfig.dist, {
      root: mainConfig.rootDir,
      verbose: true,
      dry: false,
      exclude: []
    }),
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    }),
    new CopyWebpackPlugin([
      {
        from: join(mainConfig.assets, 'fonts/bootstrap'),
        to: join(mainConfig.dist, mainConfig.serveFilesPath, 'fonts/bootstrap')
      },
      {
        from: join(mainConfig.assets, 'fonts/Ubuntu_Condensed'),
        to: join(mainConfig.dist, mainConfig.serveFilesPath, 'fonts/Ubuntu_Condensed')
      },
      {
        from: join(mainConfig.assets, 'images'),
        to: join(mainConfig.dist, mainConfig.serveFilesPath, 'images')
      },
      {
        from: join(mainConfig.assets, 'audio'),
        to: join(mainConfig.dist, mainConfig.serveFilesPath, 'assets/audio')
      }
      ,
    ])
  ];

  const preparedWebpackConfig: webpack.Configuration = webpackConfig();

  preparedWebpackConfig.output.publicPath = '';

  preparedWebpackConfig.plugins.unshift(...productionPlugins);

  return preparedWebpackConfig;
};

export const webpackProdConfig = webpackProdConf();