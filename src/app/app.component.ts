class AppController {
  private static $inject = [ '$rootScope' ];

  constructor( private $rootScope: ng.IScope ) {
  }
}

export const AppComponent = {
  selector: 'app',
  controller: AppController,
  template: require('./app.html')
};
