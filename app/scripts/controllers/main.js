'use strict';

/**
 * @ngdoc function
 * @name freeCodeCampProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the freeCodeCampProjectApp
 */
app.controller('MainCtrl', function($scope, $http) {



  $scope.fetch = function() {
    $http.get("http://api.icndb.com/jokes/random")
      .success(function(response) {
        $scope.lala = response;
      });
  };

});
