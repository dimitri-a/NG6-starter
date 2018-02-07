import angular from 'angular';
import _ from 'lodash';

angular.module('app', [])

  .controller('ctrl', function($scope){
    console.log('hahahah');
    let t ="blaat";

    //$scope.text="hello";
    $scope.text=_.upperCase(t);
  });
