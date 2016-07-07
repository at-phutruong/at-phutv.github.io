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