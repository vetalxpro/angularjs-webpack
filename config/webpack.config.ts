import * as webpack from 'webpack';
import { mainConfig } from './main.config';
import { loaders } from './webpack-loaders.config';
import { plugins } from './webpack-plugins.config';

export const webpackConfig = (karma: boolean = false): webpack.Configuration => {
  const preparedEntry = karma ? {} : {
    entry: {
      app: mainConfig.entry,
      vendor: mainConfig.vendor,
    },
    devtool: false
  };

  const pluginsObject = plugins(karma);

  return Object.assign({
    module: {
      rules: loaders(karma),
    },
    output: {
      filename: `${mainConfig.serveFilesPath}/js/${mainConfig.distFileName}`,
      path: mainConfig.dist,
      publicPath: '/',
    },
    resolve: {
      extensions: mainConfig.extensions,
    }
  }, preparedEntry, pluginsObject);
};