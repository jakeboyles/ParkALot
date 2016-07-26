  'use strict';

angular.module("parkalot").controller("signUpController", function(API) {

	var vm = this;

	vm.submit = function(){
		var postData = API.postUInfo(vm.form);
		
		 postData.then(function(response){

		 });

	}
	

});