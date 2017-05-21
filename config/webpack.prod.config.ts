import * as webpack from 'webpack';
import { mainConfig } from './main.config';
import { webpackConfig } from './webpack.config';

const CleanWebpackPlugin = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpackProdConf = (): webpack.Configuration => {

  const productionPlugins = [
    new CleanWebpackPlugin(mainConfig.distDir, {
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
    })
  ];

  const preparedWebpackConfig: webpack.Configuration = webpackConfig();

  preparedWebpackConfig.plugins.unshift(...productionPlugins);

  return preparedWebpackConfig;
};

export const webpackProdConfig = webpackProdConf();