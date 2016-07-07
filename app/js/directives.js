'use strict';
var myDirectives = angular.module('myDirectives', []);
myDirectives.directive('carousel', function($timeout) {
  return {
    restrict: 'E',
    scope: {
      links: '=' 
    },
    templateUrl: 'view/carousel.html',
    link: function(scope, element) {
      $timeout(function() {
        $('.carousel-indicators li',element).first().addClass('active');
        $('.carousel-inner .item',element).first().addClass('active');
      });
    }
  }
});

myDirectives.directive('map', function () {
  return {
    restrict: 'E',
    replace: true,
    template: '<div></div>',
    link: function ($scope, element, attrs) {
      var center = new google.maps.LatLng(16.071727, 108.149293);
      var map_options = {
        zoom: 17,
        center: center,
        mapTypeId: google.maps.MapTypeId.SATELLITE
      };
      // create map
      var map = new google.maps.Map(document.getElementById(attrs.id), map_options);
      // configure marker
      var marker_options = {
        map: map,
        position: center
      };
      // create marker
      var marker = new google.maps.Marker(marker_options);
      $scope.$watch('selected', function () {
        window.setTimeout(function(){
          google.maps.event.trigger(map, 'resize');
        },100);
      });
    }
  }
});