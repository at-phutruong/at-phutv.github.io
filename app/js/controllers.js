'use strict';

// App controllers, it coming in handy module for DI
var myControllers = angular.module('myControllers', []);

myControllers.controller('HomeCtrl', ['$scope', function ($scope) {
}]);

myControllers.controller("FeedCtrl", ['$scope','FeedService', function ($scope,Feed) {    
	$scope.loadBtnText="Load";
	$scope.loadFeed=function(e){        
		Feed.parseFeed($scope.feedSrc).then(function(res){
			$scope.loadBtnText=angular.element(e.target).text();
			$scope.feeds=res.data.responseData.feed.entries;
      console.log($scope.feeds);
		});
	}
}]);