import { Rule } from 'webpack';
import { mainConfig } from './main.config';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

export const loaders = (karma: boolean = false): Rule[] => {

  const styleLoaders = [
    {
      loader: 'css-loader'
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins: function () {
          return [
            require('autoprefixer')({
              browsers: [ 'last 2 versions', 'ie 9' ]
            })
          ]
        },
        sourceMap: true
      }
    },
    {
      loader: 'resolve-url-loader',
      options: {
        keepQuery: true
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        includePaths: [
          mainConfig.srcDir
        ]
      }
    }
  ];

  const styleModuleLoaders = styleLoaders.slice();
  styleModuleLoaders[ 0 ] = {
    loader: 'css-loader',
    options: {
      modules: true,
      importLoaders: 1,
      localIdentName: '[local]__[hash:base64:5]'
    }
  };

  return [
    /*{
     test: /\.ts$/,
     include: mainConfig.srcDir,
     enforce: 'pre',
     use: [
     { loader: 'tslint-loader' }
     ]
     },*/
    {
      test: /\.ts$/,
      exclude: mainConfig.exclude,
      use: [
        { loader: 'awesome-typescript-loader' }
      ]

    },
    {
      test: /\.(css|scss|sass)$/,
      include: mainConfig.appDir,
      use: karma ? styleModuleLoaders : ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: styleModuleLoaders
      })
    },
    {
      test: /\.(css|scss|sass)$/,
      exclude: mainConfig.appDir,
      use: karma ? styleLoaders : ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: styleLoaders
      })
    },
    {
      test: /\.json$/,
      loader: 'json-loader',
      exclude: mainConfig.exclude,
    },
    {
      test: /\.(jpg|png|gif|otf|cur|ani|ttf|eot|svg|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: `${mainConfig.serveFilesPath}/[name].[hash:8].[ext]`
      }
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader',
          options: {
            minimize: mainConfig.env === 'production'
          }
        }
      ],
      exclude: mainConfig.exclude
    }
  ]

};