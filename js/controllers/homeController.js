(function() {
    'use strict';
    
    angular
    .module('parkalot')
    .controller('homeController', function($state,back,API) {
       var vm = this;

       vm.go = function (){

       	$state.go('mapAddress', vm.form);
   
    	}

    });
})();