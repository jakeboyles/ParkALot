(function(){
'use strict';

angular
.module('parkalot', ['ui.router', 'backand','ngMaterial'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider, BackandProvider, $mdGestureProvider){
	
	$mdGestureProvider.skipClickHijack();
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
				controller: 'homeController',
				controllerAs: 'controller',
			},
			'mobileMenu': {
		        templateUrl: '../views/partials/mobileMenu.html',
		        controller: 'mobileMenuController',
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
			'mobileMenu': {
		        templateUrl: '../views/partials/mobileMenu.html',
		        controller: 'mobileMenuController',
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
			'mobileMenu': {
		        templateUrl: '../views/partials/mobileMenu.html',
		        controller: 'mobileMenuController',
				controllerAs: 'controller',
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
		        controller: 'mobileMenuController',
				controllerAs: 'controller',
		      },
		},
	})
	.state('mapAddress', {
		url: '/map/:address',
		params: {
			search : null,
		},
		views: {
			'main': {
				templateUrl: '../views/map.html',
				controller: 'mapController',
				controllerAs: 'controller',
			},
			'mobileMenu': {
		        templateUrl: '../views/partials/mobileMenu.html',
		        controller: 'mobileMenuController',
				controllerAs: 'controller',
		      },
		},
	})
	.state('userPref', {
		url: '/userPref',
		views: {
			'main': {
				templateUrl: '../views/userPref.html',
				controller: 'userPrefController',
				controllerAs: 'controller',
			},
			'mobileMenu': {
		        templateUrl: '../views/partials/mobileMenu.html',
		        controller: 'mobileMenuController',
				controllerAs: 'controller',
		      },
		},
	});

});
	
})();