app.controller('HomeController', ['$scope', 'projectsService', 
	function($scope, projectsService){
		$scope.projects = projectsService.projects;
		
		/*$scope.open = function(){
			console.log("hello");
		}*/
		
		$scope.mouseOver = function(index){
			//return projectsService.projects[index].img;
			//return index;
			$scope.selectedIndex = index;
		}

}]);