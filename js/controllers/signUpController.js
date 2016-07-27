 (function() {
  'use strict';

angular.module("parkalot").controller("signUpController", function($state,back) {

	var vm = this;

	vm.submit = function(){
		var createData = back.postData(vm.form);
		
		 createData.then(function(response){
		 	back.saveUserInfo(response.data.__metadata.id);
		 	back.saveToken(response.data.token);
		 	// console.log(response);
		 	 $state.go('user');

		})
       }
      
    });
})();