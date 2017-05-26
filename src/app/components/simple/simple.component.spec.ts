import { mock } from 'angular';
import { appModule } from '../../app.module';
import { SimpleComponent } from './simple.component';

describe('SimpleComponent', () => {
  beforeEach(mock.module(appModule.name));

  let $ctrl;

  beforeEach(mock.inject(( $componentController, $rootScope ) => {
    const $scope = $rootScope.$new();
    $ctrl = $componentController(SimpleComponent.selector, { $scope });
  }));

  it('should be defined', () => {
    expect($ctrl).toBeDefined();
  });

  it('should containt title', () => {
    const title = 'Simple Component Works!';
    expect($ctrl.title).toEqual(title);
  });

});
