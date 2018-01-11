import NewComponentManModule from './newComponentMan';
import NewComponentManController from './newComponentMan.controller';
import NewComponentManComponent from './newComponentMan.component';
import NewComponentManTemplate from './newComponentMan.html';

describe('NewComponentMan', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NewComponentManModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NewComponentManController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(NewComponentManTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = NewComponentManComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(NewComponentManTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(NewComponentManController);
    });
  });
});
