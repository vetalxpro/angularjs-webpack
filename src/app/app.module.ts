import { module } from 'angular';

import { AppComponent } from './app.component';
import { appRoutes } from './app-routing';
import { materialConfig, routesConfig } from './config';
import { TopbarComponent } from './components';
import { StatesModule } from './states/states.module';

export const AppModule = module('app', [
  'ui.router',
  'ngAnimate',
  'ngMaterial',
  StatesModule.name
]).component('app', AppComponent)
  .component('topBar', TopbarComponent)
  .config(routesConfig)
  .config(appRoutes)
  .config(materialConfig);
