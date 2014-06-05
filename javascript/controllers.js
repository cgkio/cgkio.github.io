angular.module('starter.controllers', [])

// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function($scope, $firebase) {
  // "Pets" is a service returning mock data (services.js)
  var ref = new Firebase('https://cgkio.firebaseio.com/laura');
  $scope.pets = $firebase(ref);
})

// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, $firebase) {
  // "Pets" is a service returning mock data (services.js)
  var ref = new Firebase('https://cgkio.firebaseio.com/pets/' + $stateParams.petId);
  $scope.pet = $firebase(ref);
})

// A simple controller which adds a new Adopter
.controller('AdoptCtrl', function($scope, $stateParams, $firebase, $log, $location) {

  var ref = new Firebase('https://cgkio.firebaseio.com/adopt/');
  $scope.adopters = $firebase(ref);

  $scope.createAdopter = function (adopter) {
      var ref = $scope.adopters.$add(adopter);
      $scope.adopter = {};
      $log.info("Your data has been saved to https://cgkio.firebaseio.com/adopt/" + ref.name() + ".json");
      alert("Saved!");
      $location.path("/");
  };
});
