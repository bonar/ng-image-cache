'use strict';

angular
  .module('demo', [
    'ngImageCache'
  ])

  .config(['ImageCacheProvider', function (ImageCacheProvider) {
    ImageCacheProvider.setStorage(window.localStorage);
  }])

  .controller('TestController', ['$scope', function($scope) {
    $scope.url = '//angularjs.org/img/AngularJS-large.png';
  }]);
  
;
