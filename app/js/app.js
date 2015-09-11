var app = angular.module('Todo-list', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
  .when('/tasks', {
    controller: 'TasksController', 
    templateUrl: 'views/tasks.html' 
  })
  .when('/tasks/:taskId', {
    controller: 'TasksController', 
    templateUrl: 'views/task.html'
  })
  .otherwise({
    redirectTo: '/tasks'
  });
});