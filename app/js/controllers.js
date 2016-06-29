'use strict';

// App controllers, it coming in handy module for DI
var myControllers = angular.module('myControllers', [
  'ngRoute'
]);

myControllers.controller('HomeCtrl', ['$scope', function ($scope) {
}]);

myControllers.controller('HeaderPartialCtrl', ['$scope', function ($scope) {
}]);

myControllers.controller('FooterPartialCtrl', ['$scope', function ($scope) {
  // Do something...
}]);