(function(){
'use strict';

angular.module('parkalot', ['ui.router', 'backand'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider, BackandProvider){

	BackandProvider.setAppName('parkalot1');
    BackandProvider.setSignUpToken('e00c2312-a29b-42fe-8969-5d25082ba74b');
    BackandProvider.setAnonymousToken('26c9ccdc-78a0-45b5-b13f-159b6fbe4930');

	$urlRouterProvider.otherwise("/");
	$stateProvider
	.state('home', {
		url: '/',
		views: {
			'main': {
				templateUrl: '../views/home.html',
				//controller: 'homeController',
				//controllerAs: 'controller',
			},
			'mobileMenu': {
		        templateUrl: '../views/partials/mobileMenu.html',
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
			'mobileMenu': {
		        templateUrl: '../views/partials/mobileMenu.html',
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
			'mobileMenu': {
		        templateUrl: '../views/partials/mobileMenu.html',
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
			'mobileMenu': {
		        templateUrl: '../views/partials/mobileMenu.html',
		      },
		},
	})
	.state('map', {
		url: '/map',
		views: {
			'main': {
				templateUrl: '../views/map.html',
				controller: 'mapController',
				controllerAs: 'controller',
			},
			'mobileMenu': {
		        templateUrl: '../views/partials/mobileMenu.html',
		      },
		},
	})
	.state('preference', {
		url: '/preference',
		views: {
			'main': {
				templateUrl: '../views/preference.html',
				controller: 'prefController',
				controllerAs: 'controller',
			},
			'mobileMenu': {
		        templateUrl: '../views/partials/mobileMenu.html',
		      },
		},
	});

});
	
})();