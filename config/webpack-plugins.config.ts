import * as webpack from 'webpack';
import { mainConfig } from './main.config';
import { ProgressPlugin } from 'webpack';
import ExtractTextPlugin = require('extract-text-webpack-plugin');
import CopyWebpackPlugin = require('copy-webpack-plugin');
import HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackPluginsFnc = (karma: boolean = false): { plugins: webpack.Plugin[] } => {
  const plugins = [
    new webpack.NoEmitOnErrorsPlugin(),
    new ProgressPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: null, // if no value is provided the sourcemap is inlined
      test: /\.(ts|js)$/i, // process .js and .ts files only
      exclude: [ /node_modules/ ]
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => module.resource && (/node_modules/).test(module.resource),
      chunks: [
        'main'
      ]
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(mainConfig.env)
      }
    }),
    new webpack.ProvidePlugin({}),
    new ExtractTextPlugin({
      filename: 'assets/styles/styles.css',
      disable: mainConfig.env === 'development'
    }),
    new HtmlWebpackPlugin({
      template: mainConfig.html,
      inject: 'body',
      chunksSortMode: (left, right) => {
        const leftIndex = mainConfig.entryPoints.indexOf(left.names[ 0 ]);
        const rightIndex = mainConfig.entryPoints.indexOf(right.names[ 0 ]);
        return leftIndex - rightIndex;
      }
    }),
    new CopyWebpackPlugin([
      {
        from: mainConfig.assetsDir.srcPath,
        to: mainConfig.assetsDir.distPath
      },
      {
        from: mainConfig.favicon,
        to: mainConfig.distDir
      },
    ])
  ];

  if (!karma) {
    return { plugins };
  } else {
    return { plugins: [] };
  }
};

export const plugins = webpackPluginsFnc;
