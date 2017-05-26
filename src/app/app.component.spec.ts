import { mock } from 'angular';
import { appModule } from './app.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(mock.module(appModule.name));

  let $ctrl;

  beforeEach(mock.inject(( $componentController, $rootScope ) => {
    const $scope = $rootScope.$new();
    $ctrl = $componentController(AppComponent.selector, { $scope });
  }));

  it('should be defined', () => {
    expect($ctrl).toBeDefined();
  });
});
