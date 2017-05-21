import { root } from '../lib/root';
import { join } from 'path';

const configFnc = () => {
  const rootDir = root();
  const src = root('src');
  const assets = root('src', 'assets');
  const components = root('src', 'components');
  const configRoot = root('config');
  const srcRelative = '/';
  const app = root('src', 'app');
  const docs = root('docs');
  const reports = root('reports');
  const exclude = [ /node_modules/, /\.spec.ts$/ ];
  const distFileName = '[name].bundle.js';
  const assetsPathPattern = '[name].[ext]';
  const entry = join(src, 'main.ts');
  const dist = root('dist');
  const vendor = [
    join(src, 'vendor.ts'),
  ];
  const env = process.env.NODE_ENV || 'development';

  const extensions = [ '.ts', '.tsx', '.js', '.scss', '.json', 'css' ];


  const serveFilesPath = 'assets';
  const serverPort = 3000;
  const cssPath = '/static/сss/';
  const fontsPath = '/static/fonts';

  const htmls = [
    'index.html',
  ];

  return {
    rootDir,
    src,
    env,
    app,
    dist,
    docs,
    htmls,
    entry,
    vendor,
    assets,
    reports,
    exclude,
    cssPath,
    fontsPath,
    configRoot,
    components,
    serverPort,
    extensions,
    srcRelative,
    distFileName,
    serveFilesPath,
    assetsPathPattern,
  }
};

export const mainConfig = configFnc();