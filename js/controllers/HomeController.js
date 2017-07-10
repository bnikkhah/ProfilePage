app.controller('HomeController', ['$scope', 'projectsService', 
	function($scope, projectsService){
		$scope.projects = projectsService.projects;
}]);