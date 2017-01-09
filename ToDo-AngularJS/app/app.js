'use strict';

// Declare app level module which depends on views, and components
angular.module('toDoSystem', [
  'ngRoute',
  'validation.match',
  'toDoSystem.home',
  'toDoSystem.app-services.taskService'
])
    .config(['$routeProvider','$httpProvider', function($routeProvider,$httpProvider) {
      $routeProvider.otherwise({redirectTo: '/'})
      $httpProvider.defaults.headers.common = {}
      $httpProvider.defaults.headers.post = {}
      $httpProvider.defaults.headers.put = {}
      $httpProvider.defaults.headers.patch = {}
    }])
    .constant('BASE_URL','http://localhost:1337/task/')
