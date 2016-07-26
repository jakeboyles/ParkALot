 (function() {
  'use strict';

angular.module("parkalot").controller("signUpController", function(back) {

	var vm = this;

	vm.submit = function(){
		var createData = back.postData(vm.form);
		
		 createData.then(function(response){
		 	console.log(response);
		 	vm.form = ""; 

		})
       }
      
    });
})();