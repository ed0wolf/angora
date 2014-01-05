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
    $http.get('rabbits.json').success(function(data) {
      $scope.rabbits = data;
    });
  }])
.controller('RabbitDetailCtrl', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
    console.log($routeParams.rabbitId)
  }]);
