'use strict';
angular.module('myApp.routes', ['ngRoute']).config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    });
    $routeProvider.when('/chat', {
      templateUrl: 'partials/chat.html',
      controller: 'ChatCtrl'
    });
    $routeProvider.when('/account', {
      authRequired: true,
      templateUrl: 'partials/account.html',
      controller: 'AccountCtrl'
    });
    $routeProvider.when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    });
    $routeProvider.otherwise({ redirectTo: '/home' });
  }
]);