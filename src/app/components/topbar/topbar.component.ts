class TopbarController {
  public title = 'AngularJS + Typescript + Webpack';
}

export const TopbarComponent = {
  selector: 'appTopbar',
  controller: TopbarController,
  template: require('./topbar.html')
};
