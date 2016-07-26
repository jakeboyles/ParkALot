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


		 	return {
		 		postData:postData,
		 	}
	});
})();