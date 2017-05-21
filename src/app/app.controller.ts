const styles = require('./app.scss');

export class AppController {
  static $inject = [ "$rootScope" ];
  styles = styles;

  constructor(private $rootScope: ng.IScope) {
    this.connectToServer();
  }

  private connectToServer() {
    console.log('connected');
  }

  private findCoordinatesAndSaveToUser() {
  }

  private auth() {
  }

  private signOut() {
  }
}
