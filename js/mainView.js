(function(){
'use strict';

angular.module('parkalot', ['ui.router', 'backand'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider, BackandProvider){

	BackandProvider.setAppName('parkalot');
    BackandProvider.setSignUpToken('');
    BackandProvider.setAnonymousToken('');

	$urlRouterProvider.otherwise("/");
	$stateProvider
	.state('home', {
		url: '/',
		views: {
			'main': {
				templateUrl: '../views/home.html',
				controller: 'homeController',
				controllerAs: 'controller',
			},
		},
	})
	.state('signUp', {
		url: '/newuser',
		views: {
			'main': {
				templateUrl: '../views/signUp.html',
				controller: 'signUpController',
				controllerAs: 'controller',
			},
		},
	})
	.state('login', {
		url: '/login',
		views: {
			'main': {
				templateUrl: '../views/login.html',
				controller: 'loginController',
				controllerAs: 'controller',
			},
		},
	})
	.state('user', {
		url: '/user/:userid',
		views: {
			'main': {
				templateUrl: '../views/user.html',
				controller: 'userController',
				controllerAs: 'controller',
			},
		},
	})
	.state('map', {
		url: '/map/:searchquery',
		views: {
			'main': {
				templateUrl: '../views/map.html',
				controller: 'mapController',
				controllerAs: 'controller',
			},
		},
	});

});
	
})();