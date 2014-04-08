'use strict';

angular.module('myApp')

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/goals');

  $stateProvider

  // GOALS STATES AND NESTED VIEWS ========================================
  .state('goals', {
    url: '/goals',
    templateUrl: 'partials/goals.html',
    controller: 'goalsCtrl'
  })

  // nested list with custom controller
  .state('goals.inbed', {
    url: '/inbed',
    templateUrl: 'partials/goals-inbed.html',
    controller: function($scope) {
      $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
    }
  })

  // PROJECTS STATES AND NESTED VIEWS ========================================
  .state('projects', {
    url: '/projects',
    templateUrl: 'partials/projects.html'
  })

});
