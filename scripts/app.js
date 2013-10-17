'use strict';

angular.module('arena2App', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/arenaData', {
        templateUrl: 'views/arenaData.html',
        controller: 'ArenaData'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
