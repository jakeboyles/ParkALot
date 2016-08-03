(function() {
    'use strict';
    
    angular
    .module('parkalot')
    .controller('mobileMenuController', function($state, back) {
       var vm = this;

		vm.logout = function(){
	        back.logout();
	        $state.go('home');
	    }

	});
})();
			