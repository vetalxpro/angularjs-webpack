import * as angular from 'angular';
import { routes } from './app.route';

angular.module('app', [
  'ui.router'
]).config(routes);

angular.bootstrap(document.getElementById('app'), [ 'app' ]);


