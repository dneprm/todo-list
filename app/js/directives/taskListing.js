
app.directive("taskListing", function() {
	return {
  	restrict: 'E',
    scope: {
    	'task': '='
    },
    templateUrl: 'js/directives/taskListing.html'
  };
});