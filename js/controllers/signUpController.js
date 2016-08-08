 (function() {
  'use strict';

angular.module("parkalot").controller("signUpController", function($state,back) {

	var vm = this;

	vm.submit = function(){
		var token = randomString(64, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
		var createData = back.postData(vm.form,token);
		
		 createData.then(function(response){
		 	back.saveUserInfo(response.data.__metadata.id);
		 	back.saveToken(token);
		 	console.log(token);
		 	//console.log(response);
		 	$state.go('userPref');

		})
       }

       //create random string for token to be returned
			function randomString(length,charac) {
				var results = '';

				for(var i = length; i > 0; --i) results += charac[Math.floor(Math.random() * charac.length)];

				return results;
			} 	
      
    });
})();