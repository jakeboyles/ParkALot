(function() {
    'use strict';
    
    angular
    .module('parkalot')
    .controller('homeController', function($state,back,API,$scope) {
       var vm = this;

       vm.form = {};

       vm.form.search = "";

       vm.go = function (){

       	$state.go('mapAddress', vm.form);
   
    	}


      //function to find geoLocation on map

         function showPosition(position){

       		vm.form.search = position.coords.latitude + "," + position.coords.longitude;
       		//tells DOM to "reload"
       		$scope.$digest();
       }


       if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(showPosition);
        } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
        }

       // function showPosition(position){

       // 		vm.form.search = position.coords.latitude + "," + position.coords.longitude;
       // }


    });
})();