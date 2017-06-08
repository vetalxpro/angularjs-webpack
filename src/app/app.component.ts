import { IComponentOptions, IScope } from 'angular';
import './app.scss';

export const appComponentSelector = 'app';

class AppController {
  private static $inject = [ '$rootScope' ];

  constructor( private $rootScope: IScope ) {
  }
}


export const AppComponent: IComponentOptions = {
  controller: AppController,
  template: require('./app.html')
};
