(function() {
    'use strict';
    
    angular
    .module('parkalot')
    .controller('homeController', function($state,back,API) {
       var vm = this;

       vm.go = function (){

       	$state.go('map');

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