import { module } from 'angular';

import { homeRoutes } from './home.routes';
import { HomeComponent, homeComponentSelector } from './home.component';


export const HomeModule = module('app.states.home', [])
  .component(homeComponentSelector, HomeComponent)
  .config(homeRoutes);
