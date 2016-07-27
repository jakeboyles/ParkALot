(function () {
	'use strict';
	angular
		.module('parkalot').factory('back', function($http,Backand) {


		 	function postData(data)
		 	{
		 		var going = $http ({
  					method: 'POST',
  					data: data,
  					url: 'https://api.backand.com:443/1/objects/users',
  					
		 		});
		 		return going;
		 	}

		 	//save to local storage
			 	var saveUserInfo = function(userid)
			 	{
			 		localStorage.setItem('userID',userid);
			 	}

			 	var saveToken = function(token)
			 	{
			 		localStorage.setItem('token',token);
			 	}

		 	//get from local sotrage
			 	var getUserInfo = function()
			 	{
			 		return localStorage.getItem('userID');
			 	}

			 	var getToken = function()
			 	{
			 		return localStorage.getItem('token');
			 	}

		 	return {
		 		postData:postData,
		 		saveUserInfo:saveUserInfo,
		 		getUserInfo:getUserInfo,
		 		saveToken:saveToken,
		 		getToken:getToken,
		 	}
	});
})();