export class AppController {
  public static $inject = [ '$rootScope' ];
  public styles = require('./app.scss');

  constructor(private $rootScope: ng.IScope) {
    this.init();
  }

  private init() {
    console.log(AppController.name);
  }

}
