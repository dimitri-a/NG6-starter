import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Com from './components/components'
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common,
    Com
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

  })
  .controller('ctrl',function($scope){
    $scope.text='hello again';
  })

  .component('app', AppComponent);
