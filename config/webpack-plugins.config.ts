import * as webpack from 'webpack';
import { mainConfig } from './main.config';
import { join } from 'path';
import { ProgressPlugin } from 'webpack';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackPluginsFnc = (karma: boolean = false): any => {
  const plugins = [
    new webpack.NoEmitOnErrorsPlugin(),
    new ProgressPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: null, // if no value is provided the sourcemap is inlined
      test: /\.(ts|js)$/i, // process .js and .ts files only
      exclude: [ /vendor/ ]
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(mainConfig.env)
      }
    }),
    /* new webpack.ProvidePlugin({
     $: 'jquery',
     jQuery: 'jquery',
     }),*/
    new ExtractTextPlugin({
      filename: 'style.css',
      // disable: mainConfig.env === 'development1'
    }),
    new HtmlWebpackPlugin({
      template: `${mainConfig.src}/index.html`,
      inject: 'body',
      minify: {}
    }),
    new CopyWebpackPlugin([ {
      from: join(mainConfig.app, 'assets'),
      to: join(mainConfig.dist, mainConfig.serveFilesPath)
    } ])
  ];

  if (!karma) {
    return { plugins };
  } else {
    return {};
  }
};

export const plugins = webpackPluginsFnc;