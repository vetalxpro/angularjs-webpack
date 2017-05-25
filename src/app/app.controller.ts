export class AppController {
  public toolbarTitle = 'AngularJS(webpack + typescript)';
  private counter = 0;

  constructor(private $rootScope: ng.IScope) {
  }

  public increment() {
    this.counter += 1;
  }
}

AppController.$inject = [ '$rootScope' ];
