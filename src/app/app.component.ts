import { IScope } from 'angular';

class AppController {
  private static $inject = [ '$rootScope' ];

  constructor( private $rootScope: IScope ) {
  }
}

export const AppComponent = {
  selector: 'app',
  controller: AppController,
  template: require('./app.html')
};
