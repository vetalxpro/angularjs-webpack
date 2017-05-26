import * as angular from 'angular';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { routesConfig, materialConfig } from './config';
import { SimpleComponent } from './components';

export const appModule = angular.module('appModule', [
  'ui.router',
  'ngMaterial'
]).component(AppComponent.selector, AppComponent)
  .component(SimpleComponent.selector, SimpleComponent)
  .config(appRoutes)
  .config(routesConfig)
  .config(materialConfig);
