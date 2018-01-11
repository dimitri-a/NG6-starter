import NewComponentManModule from './newComponentMan';
import NewComponentManController from './newComponentMan.controller';
import NewComponentManComponent from './newComponentMan.component';
import NewComponentManTemplate from './newComponentMan.html';

describe('NewComponentMan', () => {
  let $rootScope, makeController;

  //load newcomponentmanmodule
  beforeEach(window.module(NewComponentManModule));
  //initialize rootscope and makecontroller
  beforeEach(inject((_$rootScope_) => {
  
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = NewComponentManComponent;

    it('includes the intended template', () => {
    });

    it('invokes the right controller', () => {
    });
  });
});
