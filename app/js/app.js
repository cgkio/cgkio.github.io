var app = angular.module("resumeApp", ["firebase"]);

app.controller("ResumeCtrl", function($scope, $firebase) {
  var ref = new Firebase("https://cgk-io.firebaseio.com/resume");
  var sync = $firebase(ref);

  // download the data into a local object
  var syncObject = sync.$asObject();

  // // synchronize the object with a two-way data binding
  // $scope.data = syncObject;

  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "resume");

});
