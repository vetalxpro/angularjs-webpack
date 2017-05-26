import { join } from 'path';

function configFnc() {
  const env = process.env.NODE_ENV || 'development';
  const rootDir = process.cwd();
  const configDir = join(rootDir, 'config');
  const srcDir = join(rootDir, 'src');
  const appDir = join(srcDir, 'app');
  const docsDir = join(rootDir, 'docs');
  const distDir = join(rootDir, 'dist');
  const reportsDir = join(rootDir, 'reports');
  // ===== Entries =====
  const mainEntry = './main.ts';
  const polyfillsEntry = './polyfills.ts';
  // ==========
  const html = join(srcDir, 'index.html');
  const exclude = [ /node_modules/, /\.spec\.ts$/ ];
  const distFileName = '[name].bundle.js';
  const assetsPathPattern = '[name].[ext]';
  const entryPoints = [ 'polyfills', 'vendor', 'main' ];
  const extensions = [ '.ts', '.tsx', '.js', '.json', '.sass', '.scss', '.css' ];
  const hot = true;

  const assetsDir = {
    srcPath: join(srcDir, 'assets'),
    distPath: join(distDir, 'assets')
  };
  const favicon = join(srcDir, 'favicon.ico');
  const serveFilesPath = 'assets';
  const serverPort = 3000;
  const publicPath = '';

  return {
    env,
    rootDir,
    configDir,
    srcDir,
    appDir,
    assetsDir,
    mainEntry,
    polyfillsEntry,
    docsDir,
    reportsDir,
    exclude,
    distDir,
    distFileName,
    assetsPathPattern,
    entryPoints,
    extensions,
    html,
    favicon,
    serveFilesPath,
    serverPort,
    hot,
    publicPath
  };
}

export const mainConfig = configFnc();
