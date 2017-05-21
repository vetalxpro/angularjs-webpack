import * as webpack from 'webpack';
import { webpackConfig } from './webpack.config';
import { devServerConfig } from './webpack-dev-server.config';
import { mainConfig } from './main.config';

const webpackServerConfigFnc = (): webpack.Configuration => {
  let newConfig = Object.assign(webpackConfig(), {
    devServer: devServerConfig
  });
  newConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  newConfig.entry[ 'app' ] = [ 'webpack/hot/dev-server', `webpack-dev-server/client?http://localhost:${mainConfig.serverPort}/`, newConfig.entry[ 'app' ] ];

  return newConfig;
};

export const webpackDevServerConfig = webpackServerConfigFnc();
