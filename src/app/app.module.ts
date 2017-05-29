import { module } from 'angular';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { routesConfig, materialConfig } from './config';
import { SimpleComponent, TopbarComponent } from './components';

export const appModule = module('appModule', [
  'ui.router',
  'ngAnimate',
  'ngMaterial'
]).component(AppComponent.selector, AppComponent)
  .component(TopbarComponent.selector, TopbarComponent)
  .component(SimpleComponent.selector, SimpleComponent)
  .config(appRoutes)
  .config(routesConfig)
  .config(materialConfig);
