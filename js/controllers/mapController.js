(function() {
    'use strict';
    
    angular
    .module('parkalot')
    .controller('mapController', function($state,back,API) {
       var vm = this;
      var mymap = L.map('mapid').setView([39.1031, -84.5120], 14);

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
       {
    	//attribution: '<a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, <a href="http://mapbox.com">Mapbox</a>',
   		maxZoom: 18,
    	id: 'jcknueven.0pa4k9a3',
    	accessToken: 'pk.eyJ1IjoiamNrbnVldmVuIiwiYSI6ImNpcjUxcXJ2eTAxbzNmbm5yMW1naGE3NWoifQ.YhmcfQV-iBNW-rj3XLNzaw#15/39.1025/-84.5197'
		}).addTo(mymap);

      var carPin = L.icon({
                iconUrl: 'images/mapCarPin.png',

                iconSize: [48, 52],
              })

     //  L.marker([39.104405,-84.50781]).addTo(mymap)
    	// .bindPopup('351 E 7th St Cincinnati, OH 45202')
    	// .openPopup();

      var popup = L.popup();

      vm.go = function(){

      	mymap.eachLayer(function(layer){
      		mymap.removeLayer(layer);
      	});

      	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
       {
    	//attribution: '<a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, <a href="http://mapbox.com">Mapbox</a>',
   		maxZoom: 18,
    	id: 'jcknueven.0pa4k9a3',
    	accessToken: 'pk.eyJ1IjoiamNrbnVldmVuIiwiYSI6ImNpcjUxcXJ2eTAxbzNmbm5yMW1naGE3NWoifQ.YhmcfQV-iBNW-rj3XLNzaw#15/39.1025/-84.5197'
		}).addTo(mymap);

    		var search = API.postSearch(vm.form);

        	search.then(function(results){


           		vm.get_locations = results.data.parking_listings;

           		

           		if (typeof vm.get_locations !== "undefined")
           			{
           				vm.get_locations.forEach(function(location){

           			L.marker([location.lat, location.lng], {icon: carPin}).addTo(mymap)
           			.bindPopup('<p>'+location.location_name+'</p>');
           			});
           		}

				vm.destination = results.config.data;
           		var lat = results.data.lat;
           		var lng = results.data.lng;

           		var backAdd = back.searchParking(lat,lng);

           		backAdd.then(function(results){
           			console.log(results);
           			var taco = results.data.data;
           		
           			taco.forEach(function(location){
           			
                 	L.marker([location.Location[0], location.Location[1]], {icon: carPin}).addTo(mymap)
           			.bindPopup('<h5>'+location.title+'</h5>'+'<br>'+'<p>'+location.address+'</p>');
           			})

           		});

           		L.marker([lat, lng]).addTo(mymap)
    				.bindPopup('<p>' +vm.destination.search+'</p>')
        	})

        	vm.form.search = "";
   
    	}    

    });
})();


