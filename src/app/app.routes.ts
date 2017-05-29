import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router';

import { AppComponent } from './app.component';

export function appRoutes( $stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider ) {
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('app', {
    url: '/',
    component: AppComponent.selector
  });
}
appRoutes.$inject = [ '$stateProvider', '$urlRouterProvider' ];
