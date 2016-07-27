(function () {
	'use strict';
	angular
		.module('parkalot').factory('back', function($http,Backand) {


		 	function postData(data)
		 	{
				data.token = randomString(64, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
		 		
		 		return $http ({
  					method: 'POST',
  					data: data,
  					url: 'https://api.backand.com:443/1/objects/user',
  					
		 		});
		 	}

		 	var login = function(data){
		 		var loginArray = [
		 		{
		 			"fieldName" : "email",
		 			"operator" : "equals",
		 			"value" : data.email,
		 		},
		 		{
		 			"fieldName" : "password",
		 			"operator" : "equals",
		 			"value" : data.password,
		 		}
		 		]

		 		return $http (
		 		{
		 			method: 'GET',
		 			data: data,
		 			url:'https://api.backand.com:443/1/objects/user',
		 			params: {
		 				filter:loginArray,
		 			}
		 		});
		 	}

		 	var userGet= function(data){
		 		var tokenArray = [
		 		{
		 			"fieldName" : "token", 
		 			"operator" : "equals",
		 			"value" : data,
		 		}]
		 		var single = $http({
		 			method: 'GET',
		 			url: 'https://api.backand.com:443/1/objects/user',
		 			params: {
		 				filter:tokenArray,
		 			}
		 		});
		 		return single;

		 	}
		 
		 	//save id to local storage
			 	var saveUserInfo = function(userid)
			 	{
			 		localStorage.setItem('userID',userid);
			 	}
			//get id from local storage 	
			 	var getUserInfo = function()
			 	{
			 		return localStorage.getItem('userID');
			 	}
			 //save token to local storage	
			 	var saveToken = function(token)
			 	{
			 		localStorage.setItem('token',token);
			 	}
			//get token from local storage 	
			 	var getToken = function()
			 	{
			 		return localStorage.getItem('token');
			 	}

			//function for loging out of app
			var logout = function(){
				localStorage.removeItem('userID');
				localStorage.removeItem('token');
				return true;
			} 	

			//create random string for token to be returned
			function randomString(length,charac) {
				var results = '';

				for(var i = length; i > 0; --i) results += charac[Math.floor(Math.random() * charac.length)];

				return results;
			} 	


		 	return {
		 		postData:postData,
		 		saveUserInfo:saveUserInfo,
		 		getUserInfo:getUserInfo,
		 		saveToken:saveToken,
		 		getToken:getToken,
		 		login:login,
		 		userGet:userGet,
		 		logout:logout,

		 	}
	});
})();