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

myControllers.controller('BookmarkCtrl', ['$scope', 'Bookmark' ,
	function ($scope, Bookmark) {
    // So, we do query and get expected data back
    $scope.bookmarks = Bookmark.query(function (data) {
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
      $scope.bookmarks.push({
        title: $scope.name,
        url: $scope.url,
        category: $scope.category,
        likes: 0
      });
      $scope.name = '';
      $scope.url = '';
      $scope.category = '';
    },
    
    $scope.deleteBookmark = function (id) {
        var bookmark = $scope.bookmarks[id];
        $scope.bookmarks.splice(id, 1);
    }
  }
]);


myControllers.controller('GalleryController',[ '$scope', 'DataSource' ,
  function($scope,DataSource) {

      $scope.links =[
     { src:"http://www.conceptcarz.com/images/Suzuki/suzuki-concept-kizashi-3-2008-01-800.jpg", alt:"", caption:"ssss"},
     { src:"http://www.conceptcarz.com/images/Volvo/2009_Volvo_S60_Concept-Image-01-800.jpg", alt:"", caption:"sssss"},
     { src:"http://www.sleepzone.ie/uploads/images/PanelImages800x400/TheBurren/General/sleepzone_hostels_burren_800x400_14.jpg", alt:"", caption:"sssssss"},
  ];
  }
]);