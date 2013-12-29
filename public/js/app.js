var rabbitApp = angular.module('rabbitApp', [
  'ngRoute',
  'rabbitControllers'
]);
 
rabbitApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/rabbits', {
        templateUrl: 'partials/rabbit-list.html',
        controller: 'RabbitListCtrl'
      }).
      /*when('/rabbits/:rabbitId', {
        templateUrl: 'partials/rabbit-detail.html',
        controller: 'RabbitDetailCtrl'
      }).*/
      otherwise({
        redirectTo: '/rabbits'
      });
  }]);