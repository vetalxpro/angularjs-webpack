import { mock } from 'angular';

describe('AppController', () => {
  beforeEach(mock.module('appModule'));

  let componentController: ng.IComponentControllerService;
  let $scope: ng.IRootScopeService;

  beforeEach(mock.inject(($componentController, $rootScope) => {
    componentController = $componentController;
    $scope = $rootScope;
  }));

  it('should be defined', () => {
    const ctrl: any = componentController('app', { $scope });
    expect(ctrl).toBeDefined();
  });

  it('should containt toolbar title', () => {
    const ctrl: any = componentController('app', { $scope });
    expect(<any>ctrl.toolbarTitle).toEqual('AngularJS(webpack + typescript)');
  });

});
