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

app.directive("mySrc", function() {
return {
  link: function(scope, element, attrs) {
	var img, loadImage;
	img = null;

	loadImage = function() {

	  element[0].src = "img/icons/Spinner.svg";

	  img = new Image();
	  img.src = attrs.mySrc;

	  img.onload = function() {
		element[0].src = attrs.mySrc;
	  };
	};

	scope.$watch((function() {
	  return attrs.mySrc;
	}), function(newVal, oldVal) {
	  if (oldVal !== newVal) {
		loadImage();
	  }
	});
  }
};
});