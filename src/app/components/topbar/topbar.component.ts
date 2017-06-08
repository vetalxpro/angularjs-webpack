import { IComponentOptions } from 'angular';

export const topBarComponentSelector = 'topBar';

class TopbarController {
  public title = 'Angularjs + Typescript + Webpack';
}


export const TopbarComponent: IComponentOptions = {
  controller: TopbarController,
  template: require('./topbar.html')
};
