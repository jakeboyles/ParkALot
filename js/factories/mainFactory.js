(function () {
	'use strict';
	angular
		.module('parkalot').factory('API', function($http) {


		 	function postData(data)
		 	{
		 		var going = $http ({
  					method: 'POST',
  					data: data,
  					url: 'https://api.backand.com:443/1/objects/user',
  					
		 		});
		 		return going;
		 	}


		 	return {
		 		postData:postData,
		 	}
	});
})();