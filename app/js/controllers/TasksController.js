app.controller('TasksController', ['$scope', 'tasks', function($scope, tasks) {
	$scope.line="Helllllo";
	tasks.success(function(data) {
		$scope.tasks = data;
		$scope.activeTasks = [];
		for(var i=0; i<$scope.tasks.length; i++) {
			if($scope.tasks[i]['obj_status']==="active") {
				$scope.activeTasks.push($scope.tasks[i])
			}
		}

		for(var i=0; i<$scope.activeTasks.length; i++) {
			if($scope.activeTasks[i]['tags']) {
				var tagsList = $scope.activeTasks[i]['tags'].join(', ');
				$scope.activeTasks[i]['tags'] = tagsList;
			}
			$scope.activeTasks[i]['index'] = i;
		}

	});
}]);

