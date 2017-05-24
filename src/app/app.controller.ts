export class AppController {
  public toolbarTitle = 'AngularJS(webpack + typescript)';

  constructor(private $rootScope: ng.IScope) {
  }
}

AppController.$inject = [ '$rootScope' ];
