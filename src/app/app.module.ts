import * as angular from 'angular';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { routesConfig, materialConfig } from './config';

export const appModule = angular.module('appModule', [
  'ui.router',
  'ngMaterial'
]).component('app', AppComponent)
  .config(appRoutes)
  .config(routesConfig)
  .config(materialConfig);
