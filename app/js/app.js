'use strict';

// App module
var myApp = angular.module('myApp', [
  'ngRoute', // All routing, navigating in the app goes here
  'myControllers', // Our beloved controller module collection
  'myServices',
  'ngAnimate'
]);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'view/home.html',
      controller: 'HomeCtrl',
    })
    .when('/rss', {
      templateUrl: 'view/rss.html',
      controller: 'FeedCtrl',
    })
    .when('/bookmark', {
      templateUrl: 'view/bookmarks.html',
      controller: 'BookmarkCtrl',
    })
    // any link goes beyond defined routes will be redirected to /people route.
    .otherwise({
      redirectTo: '/home'
    });
}]);

myApp.controller('HeaderPartialCtrl', ['$scope', function ($scope) {
}]);

myApp.controller('FooterPartialCtrl', ['$scope', function ($scope) {
  // Do something...
}]);

