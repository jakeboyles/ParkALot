(function () {
	'use strict';
	angular
		.module('parkalot')
		.factory('API', function($http) {

			var postSearch = function(data){

				var search = $http({
					method: 'POST',
					url: ' https://paringapiproxy.herokuapp.com/get_locations'
				});
				return search;
			}

		return {
		 	postSearch:postSearch,

		 	}
	});
})();


//API Key:48b20e4bbb1a28dae479d0360118e276