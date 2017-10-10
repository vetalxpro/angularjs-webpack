import { IComponentOptions, IScope } from 'angular';

import './app.scss';

class AppController {
  static $inject = [ '$rootScope' ];

  constructor( private $rootScope: IScope ) {
  }
}


export const AppComponent: IComponentOptions = {
  controller: AppController,
  template: require('./app.html')
};
