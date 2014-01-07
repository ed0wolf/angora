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
      when('/rabbits/:rabbitName', {
        templateUrl: 'partials/rabbit-detail.html',
        controller: 'RabbitDetailCtrl'
      }).
      when('/about', {
        templateUrl: 'partials/about.html'
      }).
      otherwise({
        redirectTo: '/rabbits'
      });
  }]);