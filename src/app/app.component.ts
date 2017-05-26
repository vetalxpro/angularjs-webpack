class AppController {
  private static $inject = [ '$rootScope' ];
  public toolbarTitle = 'AngularJS(webpack + typescript)';

  constructor( private $rootScope: ng.IScope ) {
  }
}

export const AppComponent = {
  selector: 'app',
  controller: AppController,
  template: require('./app.html')
};
