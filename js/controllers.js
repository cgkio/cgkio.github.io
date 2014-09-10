angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {})

.controller("ResumeCtrl", function($scope, $firebase) {
  var ref = new Firebase("https://cgk-io.firebaseio.com/resume");
  var sync = $firebase(ref);

  // download the data into a local object
  var syncObject = sync.$asObject();

  // synchronize the object with a three-way data binding
  syncObject.$bindTo($scope, "resume");

});
