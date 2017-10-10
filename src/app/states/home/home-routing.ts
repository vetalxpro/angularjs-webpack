import { IStateProvider } from 'angular-ui-router';

export function homeRoutes( $stateProvider: IStateProvider ) {
  $stateProvider.state('home', {
    url: '/home',
    component: 'home'
  });
}

homeRoutes.$inject = [ '$stateProvider' ];
