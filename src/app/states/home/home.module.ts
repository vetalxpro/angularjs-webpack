import { module } from 'angular';

import { homeRoutes } from './home-routing';
import { HomeComponent } from './home.component';


export const HomeModule = module('app.states.home', [])
  .component('home', HomeComponent)
  .config(homeRoutes);
