var app = angular.module('apps', ['firebase']);

app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://triala.firebaseio.com");
    return $firebaseAuth(ref);
  }
]);

app.controller("AuthCtrl", ["$scope", "Auth",

  function($scope, Auth) {
    $scope.login = function() {
      $scope.message = null;
      $scope.error = null;

    Auth.$authWithPassword({
      email: $scope.email,
      password: $scope.password
    }).then(function(authData) {
      $scope.message= "Logged in as:" + authData.uid;
    }).catch(function(error) {
      $scope.error = "Authentication failed: " +error;
    });
  }}
]);