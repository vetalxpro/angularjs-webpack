export const routesConfig = [
  '$locationProvider',
  ($locationProvider: ng.ILocationProvider) => {
    $locationProvider.html5Mode(true);
  }
];
