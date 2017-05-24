import * as webpack from 'webpack';
import { webpackConfig } from './webpack.config';
import { mainConfig } from './main.config';

const webpackServerConfigFnc = (): webpack.Configuration => {
  const devServerConfig = webpackConfig();

  devServerConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  devServerConfig.entry[ 'main' ] = [
    'webpack/hot/dev-server',
    `webpack-dev-server/client?http://localhost:${mainConfig.serverPort}/`,
    devServerConfig.entry[ 'main' ]
  ];

  return devServerConfig;
};

export const webpackDevServerConfig = webpackServerConfigFnc();
