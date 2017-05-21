import * as webpack from "webpack";
import * as WebpackDevServer from "webpack-dev-server";
import { statsConfig } from '../config/webpack-stats.config';
import { webpackDevServerConfig } from '../config/webpack-server.config';
import { mainConfig } from '../config/main.config';


function task() {
  let compiler = webpack(webpackDevServerConfig);

  let server = new WebpackDevServer(compiler, {
    publicPath: webpackDevServerConfig.output.publicPath,
    stats: statsConfig,
    historyApiFallback: true,
    hot: mainConfig.hot
  });

  server.listen(mainConfig.serverPort);
}

task();
