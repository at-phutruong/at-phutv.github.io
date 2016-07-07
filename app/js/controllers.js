'use strict';

// App controllers, it coming in handy module for DI
var myControllers = angular.module('myControllers', []);

myControllers.controller('HomeCtrl', ['$scope', function ($scope) {
}]);

myControllers.controller("FeedCtrl", ['$scope','FeedService', function ($scope,Feed) {    
	$scope.loadBtnText="Load RSS";
	$scope.loadFeed=function(e){        
		Feed.parseFeed($scope.feedSrc).then(function(res){
			$scope.loadBtnText=angular.element(e.target).text();
			$scope.feeds=res.data.responseData.feed.entries;
      console.log($scope.feeds);
		});
	}
  $scope.goLink=function(url){
    $window.open(url);
  }
}]);

myControllers.controller('BookmarkCtrl', ['$scope', 'BookmarkService' ,
	function ($scope, BookmarkService) {
    $scope.names = ["News", "Community", "Web Design"];
    // So, we do query and get expected data back
    $scope.bookmarks = BookmarkService.query(function (data) {
      // angular.forEach(data, function (value, key) {
      //   if (!value.image) {
      //     value.image = 'http://placehold.it/200?text=' + value.fullName;
      //   }
      //   // We get :codeName from username of workEmail
      //   value.codeName = value.workEmail.split('@')[0];
      // });
    });
    $scope.increment = function ($index) {
      $scope.likes++;
    };
  
    $scope.addBookmark = function () {
      var image;
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
        default:
          image='http://placehold.it/200?text='+$scope.category;

      }
   

      $scope.bookmarks.push({
        title: $scope.name,
        url: $scope.url,
        category: $scope.category,
        img:image,
        likes: 0
      });
      $scope.name = '';
      $scope.url = '';

    },
    
    $scope.deleteBookmark = function (id) {
        var bookmark = $scope.bookmarks[id];
        $scope.bookmarks.splice(id, 1);
    }
  }
]);


myControllers.controller('GalleryCtrl',[ '$scope', 'ImageSourceService' ,
  function($scope,ImageSourceService) {
  $scope.links = ImageSourceService.query(function (data) {
  });
  }
]);


myControllers.controller('MapCtrl', ['$scope', function ($scope) {
}]);