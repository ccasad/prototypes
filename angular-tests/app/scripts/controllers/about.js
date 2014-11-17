'use strict';

/**
 * @ngdoc function
 * @name angularTestsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularTestsApp
 */
angular.module('angularTestsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
