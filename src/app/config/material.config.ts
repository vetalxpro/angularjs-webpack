export function materialConfig( $mdThemingProvider: ng.material.IThemingProvider ) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('red');
}

materialConfig.$inject = [ '$mdThemingProvider' ];


