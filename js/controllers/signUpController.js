 (function() {
  'use strict';

angular.module("parkalot").controller("signUpController", function($state,back) {

	var vm = this;

	vm.showAlert = false;

	//create new user information and token
	vm.submit = function(){
		var token = randomString(64, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

		var createData = back.postData(vm.form,token);
		
		 createData.then(function(response){
		 	back.saveUserInfo(response.data.__metadata.id);
		 	back.saveToken(token);
		 	
		 	$state.go('userPref');

		})
       }

       //create random string for token to be returned
			function randomString(length,charac) {
				var results = '';

				for(var i = length; i > 0; --i) results += charac[Math.floor(Math.random() * charac.length)];

				return results;
			} 	

			//  regex for checking password "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$" 
      
    });
})();