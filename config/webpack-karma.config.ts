// import { loaders } from './webpack-loaders.config';
import { webpackConfig } from './webpack.config';

const karmaWebpackConf = () => {
  const webpackConfigObject: any = webpackConfig(true);

  webpackConfigObject.module.rules[ 0 ].use.unshift({
    loader: 'istanbul-instrumenter-loader'
  });

  return webpackConfigObject;
};

export const karmaWebpackConfig = karmaWebpackConf();
