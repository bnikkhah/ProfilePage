var app = angular.module('ProfileApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller:'HomeController',
		templateUrl:'views/home.html'
	})
	/*.when('/:id', {
		controller:'ProjectController',
		templateUrl:'views/project.html'
	})*/
	.otherwise({
		redirectTo: '/'
	});
});