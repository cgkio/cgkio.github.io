'use strict';

angular.module('myApp')

.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

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
        templateUrl: 'partials/goals.html'
    })

    // PROJECTS STATES AND NESTED VIEWS ========================================
    .state('projects', {
        url: '/projects',
        templateUrl: 'partials/projects.html'
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
