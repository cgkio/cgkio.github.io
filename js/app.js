angular.module('starter', ['ionic', 'starter.controllers', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.personalintro', {
    url: "/personalintro",
    views: {
      'menuContent': {
        templateUrl: "templates/personalintro.html",
        controller: 'ResumeCtrl'
      }
    }
  })

  .state('app.professionalobjects', {
    url: "/professionalobjects",
    views: {
      'menuContent': {
        templateUrl: "templates/professionalobjects.html",
        controller: 'ResumeCtrl'
      }
    }
  })

  .state('app.interactivedesign', {
    url: "/interactivedesign",
    views: {
      'menuContent': {
        templateUrl: "templates/interactivedesign.html",
        controller: 'ResumeCtrl'
      }
    }
  })

  .state('app.emergtech', {
    url: "/emergtech",
    views: {
      'menuContent': {
        templateUrl: "templates/emergtech.html",
        controller: 'ResumeCtrl'
      }
    }
  })

  .state('app.mobile', {
    url: "/mobile",
    views: {
      'menuContent': {
        templateUrl: "templates/mobile.html",
        controller: 'ResumeCtrl'
      }
    }
  })

  .state('app.mvp', {
    url: "/mvp",
    views: {
      'menuContent': {
        templateUrl: "templates/mvp.html",
        controller: 'ResumeCtrl'
      }
    }
  })

  .state('app.skills', {
    url: "/skills",
    views: {
      'menuContent': {
        templateUrl: "templates/skills.html",
        controller: 'ResumeCtrl'
      }
    }
  })

  .state('app.aoc', {
    url: "/aoc",
    views: {
      'menuContent': {
        templateUrl: "templates/aoc.html",
        controller: 'ResumeCtrl'
      }
    }
  })

  .state('app.ceb', {
    url: "/ceb",
    views: {
      'menuContent': {
        templateUrl: "templates/ceb.html",
        controller: 'ResumeCtrl'
      }
    }
  })

  .state('app.mcintosh', {
    url: "/mcintosh",
    views: {
      'menuContent': {
        templateUrl: "templates/mcintosh.html",
        controller: 'ResumeCtrl'
      }
    }
  })

  .state('app.univoflondon', {
    url: "/univoflondon",
    views: {
      'menuContent': {
        templateUrl: "templates/univoflondon.html",
        controller: 'ResumeCtrl'
      }
    }
  })

  .state('app.univofpristina', {
    url: "/univofpristina",
    views: {
      'menuContent': {
        templateUrl: "templates/univofpristina.html",
        controller: 'ResumeCtrl'
      }
    }
  })

  .state('app.univofokla', {
    url: "/univofokla",
    views: {
      'menuContent': {
        templateUrl: "templates/univofokla.html",
        controller: 'ResumeCtrl'
      }
    }
  })

  .state('app.3dprinting', {
    url: "/3dprinting",
    views: {
      'menuContent': {
        templateUrl: "templates/3dprinting.html",
        controller: 'ResumeCtrl'
      }
    }
  })

  .state('app.gadgeteconomics', {
    url: "/gadgeteconomics",
    views: {
      'menuContent': {
        templateUrl: "templates/gadgeteconomics.html",
        controller: 'ResumeCtrl'
      }
    }
  })

  .state('app.mobileization', {
    url: "/mobileization",
    views: {
      'menuContent': {
        templateUrl: "templates/mobileization.html",
        controller: 'ResumeCtrl'
      }
    }
  })

  .state('app.diyelectronics', {
    url: "/diyelectronics",
    views: {
      'menuContent': {
        templateUrl: "templates/diyelectronics.html",
        controller: 'ResumeCtrl'
      }
    }
  })

  .state('app.airports', {
    url: "/airports",
    views: {
      'menuContent': {
        templateUrl: "templates/airports.html",
        controller: 'ResumeCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/personalintro');

});
