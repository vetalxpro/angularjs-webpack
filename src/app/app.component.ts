import { AppController } from './app.controller';

export const AppComponent: ng.IComponentOptions = {
  controller: AppController,
  controllerAs: 'app',
  template: require('./app.html')
};
