var app = angular.module('myApp', ['ngRoute'])

app.config(function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl: 'home.html',

	})
	.when('/book', {
		templateUrl: 'book.html'
	})
	.when('/reserve', {
		templateUrl: 'reserve.html'
	})
	.when('/thank_you', {
		templateUrl: 'thank_you.html'
	})
	.otherwise({
		redirectTo: '/home'
	})
})