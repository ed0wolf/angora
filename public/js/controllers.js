var rabbitControllers = angular.module('rabbitControllers', []);
 
rabbitControllers.controller('RabbitListCtrl', ['$scope', '$http',
  function ($scope, $http) {
		$scope.rabbits = [
			{'name': 'All Star',
			 'desc': 'Da pros with Jordan'},
			{'name': 'Monst*r',
			 'desc': 'Bad as thing'},
			{'name': 'Ted',
			 'desc': 'Big white thing'}
		];
  }]);
