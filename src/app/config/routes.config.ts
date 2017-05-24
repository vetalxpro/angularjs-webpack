export function routesConfig($locationProvider: ng.ILocationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}

routesConfig.$inject = [ '$locationProvider' ];
