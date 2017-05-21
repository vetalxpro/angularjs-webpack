import * as angular from 'angular';
import { AppController } from './app.controller';

export const appModule = angular.module('appModule', [
  'ui.router'
]).component('app', {
  controller: AppController,
  template: require('./app.html')
});
