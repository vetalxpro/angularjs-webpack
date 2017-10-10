import { mock } from 'angular';

import { AppModule } from '../../app.module';

describe('TopbarComponent', () => {
  beforeEach(mock.module(AppModule.name));

  let $ctrl;

  beforeEach(mock.inject(( $componentController, $rootScope ) => {
    const $scope = $rootScope.$new();
    $ctrl = $componentController('topBar', { $scope });
  }));

  it('should be defined', () => {
    expect($ctrl).toBeDefined();
  });

  it('should containt title', () => {
    const title = 'Angularjs + Typescript + Webpack';
    expect($ctrl.title).toEqual(title);
  });

});
