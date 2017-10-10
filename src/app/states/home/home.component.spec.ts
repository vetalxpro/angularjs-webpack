import { mock } from 'angular';

import { HomeModule } from './home.module';

describe('HomeComponent', () => {
  beforeEach(mock.module('ui.router', HomeModule.name));

  let $ctrl;

  beforeEach(mock.inject(( $componentController, $rootScope ) => {
    const $scope = $rootScope.$new();
    $ctrl = $componentController('home', { $scope });
  }));

  it('should be defined', () => {
    expect($ctrl).toBeDefined();
  });

  it('should containt title', () => {
    const title = 'Home Component Works!';
    expect($ctrl.title).toEqual(title);
  });

});
