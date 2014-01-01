var rabbitControllers = angular.module('rabbitControllers', []);
 
rabbitControllers.controller('RabbitListCtrl', ['$scope', '$http',
  function ($scope, $http) {
		$scope.rabbits = [
			{'name': 'All Star',
			 'desc': 'Da pros with Jordan',
			 'imgUrl': 'http://www.alexandgregory.com/images/arctic_hares.boxing.jpg'},
			{'name': 'Monst*r',
			 'desc': 'Bad as thing',
			 'imgUrl': 'http://www.alexandgregory.com/images/arctic_hares.boxing.jpg'},
			{'name': 'Ted',
			 'desc': 'Big white thing',
			 'imgUrl': 'http://www.alexandgregory.com/images/arctic_hares.boxing.jpg'},
			{'name': 'Ted',
			 'desc': 'Big white thing',
			 'imgUrl': 'http://www.alexandgregory.com/images/arctic_hares.boxing.jpg'}
		];
  }])
.controller("MainCtrl", ['$scope', '$location', '$route',
  function ($scope, $location, $route) {
		$scope.activePath = null;
    $scope.$on('$routeChangeSuccess', function(){
      $scope.activePath = $location.path();
      console.log( $location.path() );
    });
  }]);
