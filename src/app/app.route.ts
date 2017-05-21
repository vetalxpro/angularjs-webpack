import { AppController } from './app.controller';

export const routes = ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/app');
  $stateProvider.state('app', {
    url: '/app',
    // abstract: true,
    controller: AppController,
    controllerAs: AppController.name,
    template: require('./app.html'),
  });
};
