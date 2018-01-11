import angular from 'angular';
import uiRouter from 'angular-ui-router';
import newComponentManComponent from './newComponentMan.component';

let newComponentManModule = angular.module('newComponentMan', [
  uiRouter
])

.component('newComponentMan', newComponentManComponent)

.name;

export default newComponentManModule;
