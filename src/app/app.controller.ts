export class AppController {
  public static $inject = [ '$rootScope' ];
  public toolbarTitle = 'AngularJS(webpack + typescript)';

  constructor(private $rootScope: ng.IScope) {
  }

}
