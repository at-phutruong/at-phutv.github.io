'use strict';

// App module
var myApp = angular.module('myApp', [
  'ngRoute', // All routing, navigating in the app goes here
  'myControllers', // Our beloved controller module collection
]);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'view/home.html',
      controller: 'HomeCtrl',
    })
    // any link goes beyond defined routes will be redirected to /people route.
    .otherwise({
      redirectTo: '/home',
      controller: 'HomeCtrl',
    });
}]);


