var rabbitControllers = angular.module('rabbitControllers', []);
 
rabbitControllers.controller("MainCtrl", ['$scope', '$location', '$route',
  function ($scope, $location, $route) {
		$scope.activePath = null;
    $scope.$on('$routeChangeSuccess', function(){
      $scope.activePath = $location.path();
      console.log( $location.path() );
    });
  }])
.controller('RabbitListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('rabbits').success(function(data) {
      $scope.rabbits = data;
    });
  }])
.controller('RabbitDetailCtrl', ['$scope', '$http', '$routeParams',
  function ($scope, $http, $routeParams) {
    $http.get('rabbits/' + $routeParams.rabbitName).success(function(data) {
      $scope.rabbit = data;
    });
  }]);
