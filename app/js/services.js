'use strict';

// App services
var wfeServices = angular.module('wfeServices', ['ngResource']);

// The service use $resource which take the power of RESTful, consider this as
// high-level service leave us intact of low-level $http
wfeServices.factory('Person', ['$resource', function ($resource) {
  return $resource('data/:requestParam.json', {}, {
    query: {
      method: 'GET',
      params: {
        requestParam: 'people'
      },
      isArray: true,
    }
  });
}]);
