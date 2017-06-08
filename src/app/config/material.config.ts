import { material } from 'angular';

export function materialConfig( $mdThemingProvider: material.IThemingProvider, $mdIconProvider: material.IIconProvider ) {
  $mdThemingProvider
    .theme('default')
    .primaryPalette('blue')
    .accentPalette('red');

  $mdIconProvider
    .icon('angularjs', require('../assets/svg/angularjs.svg'), 512);
}

materialConfig.$inject = [ '$mdThemingProvider', '$mdIconProvider' ];


