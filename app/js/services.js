'use strict';

var myServices = angular.module('myServices', ['ngResource']);

myServices.factory('FeedService',['$http',function($http){
	return {
		parseFeed : function(url){
			return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
		}
	}
}]);

myServices.factory('BookmarkService', ['$resource', function ($resource) {
  return $resource('data/:requestParam.json', {}, {
    query: {
      method: 'GET',
      params: {
        requestParam: 'bookmarks'
      },
      isArray: true,
    }
  });
}]);

myServices.factory('ImageSourceService', ['$resource', function ($resource) {
  return $resource('data/:requestParam.json', {}, {
    query: {
      method: 'GET',
      params: {
        requestParam: 'images'
      },
      isArray: true,
    }
  });
}]);