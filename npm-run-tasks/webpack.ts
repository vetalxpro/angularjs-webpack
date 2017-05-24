import * as webpack from 'webpack';
import { statsConfig } from '../config/webpack-stats.config';
import { webpackProdConfig } from '../config/webpack.prod.config';

function task() {
  const compiler = webpack(webpackProdConfig);

  compiler.run((err, stats) => {
    if (err) {
      return console.error(err);
    }
    console.log(stats.toString(statsConfig));
  });

}

task();
