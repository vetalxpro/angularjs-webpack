export const materialConfig = [
  '$mdThemingProvider',
  '$mdIconProvider',
  ($mdThemingProvider: ng.material.IThemingProvider,
   $mdIconProvider: ng.material.IIconProvider) => {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('red');
    $mdIconProvider.icon('mood', require('material-design-icons/social/svg/design/ic_mood_24px.svg'), 24);
  }
];
