'use strict';
// App controllers, it coming in handy module for DI
var myControllers = angular.module('myControllers', []);

myControllers.controller('HomeCtrl', ['$scope', function ($scope) {
}]);
myControllers.controller("FeedCtrl", ['$scope','FeedService', function ($scope,Feed) {    
	$scope.loadBtnText="Load RSS";
	$scope.loadFeed=function (e) {        
		Feed.parseFeed($scope.feedSrc).then(function (res) {
			$scope.loadBtnText=angular.element(e.target).text();
			$scope.feeds=res.data.responseData.feed.entries;
      console.log($scope.feeds);
		});
	}
  $scope.goLink=function (url) {
    $window.open(url);
  }
}]);

myControllers.controller('BookmarkCtrl', ['$scope', 'BookmarkService' ,
	function ($scope, BookmarkService) {
    $scope.names = ["Choose Category","News", "Community", "Web Design"];
    $scope.stars = ["Choose number of stars",1,2,3,4,5];
    // So, we do query and get expected data back
    $scope.bookmarks = BookmarkService.query(function (data) {

    });
    $scope.increment = function ($index) {
      $scope.likes++;
    };
    $scope.addBookmark = function () {
      var image;
      var noOfStar;
      switch($scope.category){
        case 'News':
          image="img/news.png";
          break;
        case 'Community':
          image="img/forum.png";
          break;
        case 'Web Design':
          image="img/social.png";
          break;
      }
      switch($scope.star){
        case 1:
          noOfStar=1;
          break;
        case 2:
          noOfStar=2;
          break;
        case 3:
          noOfStar=3;
          break;
        case 4:
          noOfStar=4;
          break;
        case 5:
          noOfStar=5;
          break;
      }
      if($scope.category!="Choose Category" && $scope.star!="Choose number of stars"){
        $scope.bookmarks.push({
        title: $scope.name,
        url: $scope.url,
        category: $scope.category,
        img:image,
        star: noOfStar
      });
      }
      $scope.name = '';
      $scope.url = '';

    },
    
    $scope.deleteBookmark = function (id) {
        var bookmark = $scope.bookmarks[id];
        $scope.bookmarks.splice(id, 1);
    };
    $scope.chooseStar = function (star) {
      switch(star){
        case 1:
          return 'img/1star.jpg';
          break;
        case 2:
          return 'img/2star.jpg';
          break;
        case 3:
          return 'img/3star.jpg';
          break;
        case 4:
          return 'img/4star.jpg';
          break;
        case 5:
          return 'img/5star.jpg';
          break;
      };
    }
  }
]);


myControllers.controller('SlideCtrl',[ '$scope', 'ImageSourceService' ,
  function ($scope,ImageSourceService) {
  $scope.links = ImageSourceService.query(function (data) {
  });
  }
]);
myControllers.controller('MapCtrl', ['$scope', function ($scope) {
}]);