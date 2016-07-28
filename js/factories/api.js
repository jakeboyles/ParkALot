(function () {
	'use strict';
	angular
		.module('parkalot').factory('API', function($http) {

			var getMap = function(data){

				var call = $http({
					method: 'GET',
					url: 'http://api.parkwhiz.com/search/?lat=41.8857256&lng=-87.6369590&start=1469634364&end=1469645164&key=62d882d8cfe5680004fa849286b6ce20'
				});
				return call;
			}


// http://api.parkwhiz.com/search/?lat=41.8857256&lng=-87.6369590&start=1469634364&end=1469645164&key=62d882d8cfe5680004fa849286b6ce20

		return {
		 	getMap:getMap,

		 	}
	});
})();