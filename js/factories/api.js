(function () {
	'use strict';
	angular
		.module('parkalot')
		.factory('API', function($http) {

			var postSearch = function(data){

				var data = {
					search: data.search,
					distance: data.distance,
					price: data.price,
				}
				var search = $http({
					method: 'POST',
					data:data,
					url: 'https://paringapiproxy.herokuapp.com/get_locations'
				});
				return search;
			}


		return {
		 	postSearch:postSearch,

		 	}
	});
})();

//get for backand location https://api.backand.com:443/1/objects/Parking


//API Key:48b20e4bbb1a28dae479d0360118e276