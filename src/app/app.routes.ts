export const appRoutes = [
  '$stateProvider',
  '$urlRouterProvider',
  ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('app', {
      url: '/',
      component: 'app'
    });
  }
];
