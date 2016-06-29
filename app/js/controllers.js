'use strict';

// App controllers, it coming in handy module for DI
var wfeControllers = angular.module('wfeControllers', []);

// PeopleListCtrl for people listing page which detached from index.html in
// previous steps.
wfeControllers.controller('PeopleListCtrl', ['$scope', 'Person',
  function ($scope, Person) {
    // So, we do query and get expected data back
    $scope.people = Person.query(function (data) {
      angular.forEach(data, function (value, key) {
        if (!value.image) {
          value.image = 'http://placehold.it/200?text=' + value.fullName;
        }

        // We get :codeName from username of workEmail
        value.codeName = value.workEmail.split('@')[0];
      });
    });

    $scope.order = 'empCode';

  }
]);

// Controller for person detail page, in additional to Person, we use $routeParams
// which retrieves our :codeName in the url to indecate specified person.
wfeControllers.controller('PersonDetailCtrl', ['$scope', '$routeParams', 'Person',
  function ($scope, $routeParams, Person) {
    $scope.person = Person.get({
      requestParam: 'people/' + $routeParams.codeName
    }, function (person) {
      if (!person.image) {
        person.image = 'http://placehold.it/200?text=' + person.fullName;
      }
    });

  }
]);
