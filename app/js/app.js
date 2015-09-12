var app = angular.module('Todo-list', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
  .when('/tasks', {
    controller: 'TasksController', 
    templateUrl: 'views/tasks.html' 
  })
  .when('/tasks/:taskId', {
    controller: 'TaskController', 
    templateUrl: 'views/task.html'
  })
  .otherwise({
    redirectTo: '/tasks'
  });
});