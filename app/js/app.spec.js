describe("Todo-list app", function() {
	beforeEach(module('Todo-list'));

	var $scope, controller1, controller2, $httpBackend;
	beforeEach(inject(function($rootScope, _$controller_, _$httpBackend_) {
		$scope = $rootScope.$new();
		controller1 = _$controller_('TasksController', {$scope: $scope});
		controller2 = _$controller_('TaskController', {$scope: $scope});
		$httpBackend = _$httpBackend_;
		$httpBackend.expectGET('tasks.json')
			.respond([{name: 'Make breakfast', obj_status: 'active', tags: ["Cerri","task"]},
			 {name: 'Check the notes', obj_status: 'trashed'}]);
	}));

	it('TasksController exists', function() {
		expect(controller1).toBeDefined();
	});
	it('TaskController exists', function() {
		expect(controller2).toBeDefined();
	});

	it('TasksController has no list of tasks without the server response', function() {
		expect($scope.tasks).toBeUndefined();
	})

	describe('If server responded', function() {
		beforeEach(function() {
			$httpBackend.flush();
		});
		it('data for TasksController was loaded and $scope.tasks.tags were modified', function() {
			expect($scope.tasks).toEqual([
				{name: 'Make breakfast', obj_status: 'active', tags: "Cerri, task"},
				{name: 'Check the notes', obj_status: 'trashed'}
			]);
		});
		it('data for $scope.activeTasks was filtered (only with status active were chosen)', function() {
			expect($scope.activeTasks).toEqual([
				{name: 'Make breakfast', obj_status: 'active', tags: "Cerri, task"}
			]);
		});

	});

	
});
