angular.module('starter', ['ionic', 'starter.controllers', 'firebase'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // // setup an abstract state for the tabs directive
  // .state('tab', {
  //   url: "/tab",
  //   abstract: true,
  //   templateUrl: "templates/tabs.html"
  // })
  //
  // // the pet tab has its own child nav-view and history
  // .state('tab.pet-index', {
  //   url: '/pets',
  //   views: {
  //     'pets-tab': {
  //       templateUrl: 'templates/pet-index.html',
  //       controller: 'PetIndexCtrl'
  //     }
  //   }
  // })

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // the pet tab has its own child nav-view and history
  .state('tab.pet-index', {
    url: '/pets',
    views: {
      'pets-tab': {
        templateUrl: 'templates/pet-index.html',
        controller: 'PetIndexCtrl'
      }
    }
  })

  .state('tab.pet-detail', {
    url: '/pet/:petId',
    views: {
      'pets-tab': {
        templateUrl: 'templates/pet-detail.html',
        controller: 'PetDetailCtrl'
      }
    }
  })

  .state('tab.adopt', {
    url: '/adopt',
    views: {
      'adopt-tab': {
        templateUrl: 'templates/adopt.html',
        controller: 'AdoptCtrl'
      }
    }
  })

  .state('tab.about', {
    url: '/about',
    views: {
      'about-tab': {
        templateUrl: 'templates/about.html'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/pets');

});
