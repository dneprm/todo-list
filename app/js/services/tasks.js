app.factory('tasks', ['$http', function($http) {
  return $http.get('tasks.json')
  	.success(function(data) {
    return data;
  	})
  	.error(function(err) {
    return err;
  	});
}]);