import { remove } from 'fs-extra';
import { mainConfig } from '../config/main.config';

remove(mainConfig.distDir, (err) => {
  if (err) {
    throw err;
  }
  console.log('Dist Directory cleaned');
});
