'use strict';
// App module
var myApp = angular.module('myApp', [
  'ngRoute', // All routing, navigating in the app goes here
  'myControllers', // Our beloved controller module collection
  'myServices',
  'myDirectives',
  'ngAnimate',
  'ui.router'
]);

myApp.config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'view/home.html',
    controller: 'HomeCtrl',
  })
  .state('rss', {
    url: '/rss',
    templateUrl: 'view/rss.html',
    controller: 'FeedCtrl',
  })
  .state('bookmark', {
    url: '/bookmark',
    templateUrl: 'view/bookmarks.html',
    controller: 'BookmarkCtrl',
  })
  .state('slide', {
    url: '/slide',
    templateUrl: 'view/slide.html',
    controller: 'SlideCtrl',
  })
  .state('map', {
    url: '/map',
    templateUrl: 'view/map.html',
    controller: 'MapCtrl',
  });
  // any link goes beyond defined routes will be redirected to /people route.
  $urlRouterProvider.otherwise('/home');
}]);

myApp.controller('HeaderPartialCtrl', ['$scope', function ($scope) {
}]);
myApp.controller('IconBarPartialCtrl', ['$scope', function ($scope) {
}]);
myApp.controller('FooterPartialCtrl', ['$scope', function ($scope) {
}]);


