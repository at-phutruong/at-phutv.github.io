'use strict';

// App module
var wfeApp = angular.module('wfeApp', [
  'ngRoute', // All routing, navigating in the app goes here
  'wfeControllers', // Our beloved controller module collection
  'wfeServices', // Call our custom services
]);

wfeApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/people', {
      templateUrl: 'view/people.html',
      controller: 'PeopleListCtrl',
    })
    // :codeName as going to stand for person identity
    .when('/person/:codeName', {
      templateUrl: 'view/person.html',
      controller: 'PersonDetailCtrl',
    })
    // any link goes beyond defined routes will be redirected to /people route.
    .otherwise({
      redirectTo: '/people',
    });
}]);

wfeApp.controller('HeaderPartialCtrl', ['$scope', function ($scope) {
}]);

wfeApp.controller('FooterPartialCtrl', ['$scope', function ($scope) {
  // Do something...
}]);
