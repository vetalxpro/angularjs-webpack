import { mainConfig } from './main.config';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

export const loaders = (karma: boolean = false) => {

  const styleUseArray = [
    {
      loader: 'css-loader',
      options: {
        modules: true,
        importLoaders: 1,
        localIdentName: '[local]__[hash:base64:5]'
      }
    },
    { loader: 'autoprefixer-loader' },
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
          mainConfig.src
        ]
      }
    }
  ];

  return [
    {
      test: /\.ts$/,
      exclude: mainConfig.exclude,
      use: [
        {
          loader: 'awesome-typescript-loader',
        },
        // { loader: 'tslint-loader' }
      ]

    },
    {
      test: /\.(css|scss)$/,
      include: mainConfig.app,
      use: karma ? styleUseArray : ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: styleUseArray
      })
    },
    {
      test: /\.json$/,
      loader: 'json-loader',
      exclude: mainConfig.exclude,
    },
    {
      test: /\.(eot|svg)$/,
      loader: 'file-loader',
      options: {
        name: `${mainConfig.serveFilesPath}/[name].[hash:20].[ext]`
      }
    },
    {
      test: /\.(jpg|png|gif|otf|cur|ani|ttf|eot|svg|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: `${mainConfig.serveFilesPath}/[name].[hash:20].[ext]`
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