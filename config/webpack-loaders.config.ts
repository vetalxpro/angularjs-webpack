import { Rule } from 'webpack';
import { env, srcDir, appDir, outputFilesName } from './main.config';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';


export function loadersConfig( karma: boolean = false ): Rule[] {

  const styleLoaders = [
    {
      loader: 'css-loader'
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins: () => {
          return [
            require('autoprefixer')({
              browsers: [ 'last 2 versions', 'ie 9' ]
            })
          ];
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
          srcDir
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
    {
      test: /\.ts$/,
      include: srcDir,
      loaders: karma ? [
        'istanbul-instrumenter-loader',
        'awesome-typescript-loader'
      ] : [ 'awesome-typescript-loader' ]

    },
    /*{
     test: /\.ts$/,
     include: mainConfig.srcDir,
     enforce: 'pre',
     use: [
     { loader: 'tslint-loader' }
     ]
     },*/
    {
      test: /\.(css|scss|sass)$/,
      include: appDir,
      use: karma ? styleModuleLoaders : ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: styleModuleLoaders
      })
    },
    {
      test: /\.(css|scss|sass)$/,
      exclude: appDir,
      use: karma ? styleLoaders : ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: styleLoaders
      })
    },
    {
      test: /\.json$/,
      loader: 'json-loader',
      include: srcDir
    },
    {
      test: /\.(jpg|png|gif|otf|cur|ani|ttf|eot|svg|woff|woff2)$/,
      include: srcDir,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: outputFilesName
      }
    },
    {
      test: /\.html$/,
      include: srcDir,
      use: [
        {
          loader: 'html-loader',
          options: {
            minimize: env === 'production'
          }
        }
      ]
    },
    {
      test: /\.pug$/,
      use: [
        {
          loader: 'pug-loader',
          options: {
            pretty: env !== 'production'
          }
        }
      ]
    }
  ];
}
