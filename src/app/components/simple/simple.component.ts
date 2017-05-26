class SimpleController {
  public title = 'Simple Component Works!';
}


export const SimpleComponent = {
  selector: 'appSimple',
  controller: SimpleController,
  template: require('./simple.html')
};
