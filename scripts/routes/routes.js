'use strict';

angular.module('myApp')

.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/goals');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
        url: '/home',
        templateUrl: 'partials/home.html'
    })

    // nested list with custom controller
    .state('home.list', {
        url: '/list',
        templateUrl: 'partials/home-list.html',
        controller: function($scope) {
            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }
    })

    // nested list with just some random string data
    .state('home.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a drink right now.'
    })

    // BIO STATES AND NESTED VIEWS ========================================
    .state('bio', {
        url: '/',
        templateUrl: 'partials/bio.html'
    })

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

    // PROJECTS-DETAILS STATES AND NESTED VIEWS ========================================
    .state('projects/', {
        url: '/projects',
        templateUrl: 'partials/projects.html'
    })

    // TASKS STATES AND NESTED VIEWS ========================================
    .state('tasks', {
        url: '/tasks',
        templateUrl: 'partials/tasks.html',
        controller: 'TasksCtrl'
    })

    // ISSUES STATES AND NESTED VIEWS ========================================
    .state('issues', {
        url: '/issues',
        templateUrl: 'partials/issues.html',
        controller: 'GithubCtrl'
    })

    // IDEAS PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('ideas', {
        url: '/ideas',
        views: {
            '': {
                templateUrl: 'partials/ideas.html'
            },
            'columnOne@ideas': {
                template: 'Look I am a column!'
            },
            'columnTwo@ideas': {
                templateUrl: 'partials/ideas-table.html',
                controller: 'scotchController'
            }
        }

    });

});
