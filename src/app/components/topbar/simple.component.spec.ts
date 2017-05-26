import { mock } from 'angular';
import { appModule } from '../../app.module';
import { TopbarComponent } from './topbar.component';

describe('TopbarComponent', () => {
  beforeEach(mock.module(appModule.name));

  let $ctrl;

  beforeEach(mock.inject(( $componentController, $rootScope ) => {
    const $scope = $rootScope.$new();
    $ctrl = $componentController(TopbarComponent.selector, { $scope });
  }));

  it('should be defined', () => {
    expect($ctrl).toBeDefined();
  });

  it('should containt title', () => {
    const title = 'AngularJS + Typescript + Webpack';
    expect($ctrl.title).toEqual(title);
  });

});
