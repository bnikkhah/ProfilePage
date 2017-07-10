app.controller('ProjectController', ['$scope', '$routeParams', 'projectsService', 
	function($scope, $routeParams, projectsService){
		$scope.allProjects = projectsService.projects;
		$scope.projects = projectsService.projects[$routeParams.id];
}]);