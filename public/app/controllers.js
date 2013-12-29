var rabbitApp = angular.module('rabbitApp', []);
 
rabbitApp.controller('RabbitListCtrl', function ($scope) {
  $scope.rabbits = [
    {'name': 'All Star',
     'desc': 'Da pros with Jordan'},
    {'name': 'Monst*r',
     'desc': 'Bad as thing'},
    {'name': 'Ted',
     'desc': 'Big white thing'}
  ];
});