import angular from 'angular';

angular.module('app', [])

  .controller('ctrl', function($scope){
    console.log('hahahah');
    $scope.text='hello';
  });
