import { mock } from 'angular';

import { AppModule } from './app.module';

describe('AppComponent', () => {
  beforeEach(mock.module(AppModule.name));

  let $ctrl;

  beforeEach(mock.inject(( $componentController, $rootScope ) => {
    const $scope = $rootScope.$new();
    $ctrl = $componentController('app', { $scope });
  }));

  it('should be defined', () => {
    expect($ctrl).toBeDefined();
  });
});
