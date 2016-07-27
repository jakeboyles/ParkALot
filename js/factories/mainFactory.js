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

		 	var saveUserInfo = function(userid)
		 	{
		 		localStorage.setItem('userID',userid);
		 	}

		 	var getUserInfo = function()
		 	{
		 		return localStorage.getItem('userID');
		 	}

		 	var saveToken = function(token)
		 	{
		 		localStorage.setItem('token',token);
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