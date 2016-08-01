(function() {
    'use strict';
    
    angular
    .module('parkalot')
    .controller('mapController', function($state,back,API) {
       var vm = this;
      var mymap = L.map('mapid').setView([39.1031, -84.5120], 13);

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
       {
    	//attribution: '<a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, <a href="http://mapbox.com">Mapbox</a>',
   		maxZoom: 18,
    	id: 'jcknueven.0pa4k9a3',
    	accessToken: 'pk.eyJ1IjoiamNrbnVldmVuIiwiYSI6ImNpcjUxcXJ2eTAxbzNmbm5yMW1naGE3NWoifQ.YhmcfQV-iBNW-rj3XLNzaw#15/39.1025/-84.5197'
		}).addTo(mymap);

      L.marker([39.104405,-84.50781]).addTo(mymap)
    	.bindPopup('351 E 7th St Cincinnati, OH 45202')
    	.openPopup();

      vm.go = function(){

    		var search = API.postSearch(vm.form);

        	search.then(function(results){
         	 console.log(results);
           vm.get_locations = results.data.parking_listings;
        	})
    	}    

    });
})();