import { mock } from 'angular';

describe('AppController', () => {
  beforeEach(mock.module('appModule'));

  // let componentController: ng.IComponentControllerService;
  let $ctrl;

  beforeEach(mock.inject(($componentController: ng.IComponentControllerService, $rootScope: ng.IRootScopeService) => {
    const $scope = $rootScope.$new();
    $ctrl = $componentController('app', { $scope });
  }));

  it('should be defined', () => {
    expect($ctrl).toBeDefined();
  });

  it('should containt toolbar title', () => {
    expect($ctrl.toolbarTitle).toEqual('AngularJS(webpack + typescript)');
  });

  it('should containt value counter=0', () => {
    expect($ctrl.counter).toEqual(0);
  });
  it('should increment counter', () => {
    $ctrl.increment();
    expect($ctrl.counter).toEqual(1);
  });

});
