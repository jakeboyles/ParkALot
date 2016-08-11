(function() {
    'use strict';
    
    angular.module('parkalot').controller('mapController', function($state,back,API, $stateParams, $scope) {
      
      var vm = this;

      //set to empty array to filter search
      vm.form = [];
      vm.load = false;

      //setting the map with the area being Cincinnati
      var mymap = L.map('mapid').setView([39.1031, -84.5120], 14);

      //behemoth func for redrawing the map and creating nav points in search
      var createMap = function (address, dist, price){

        vm.load = true;
      //recreating the map by destroying the layers of a previous search
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

        //external API call for search
    		var search = API.postSearch(address, dist, price);

        //promise for API
        	search.then(function(results){

            //setting data JSON
           	vm.get_locations = results.data.parking_listings;

              //if we get an address, filter based on user input.
           		if (typeof vm.get_locations !== "undefined")
           			{
                  var newArray = vm.filterResults(vm.get_locations, dist, price);

                  //this is dumb but works, because it filters out not in
           				newArray.forEach(function(location){

           			    L.marker([location.lat, location.lng], {icon: carPin}).addTo(mymap)
           			    .bindPopup('<p>'+location.location_name+'</p>');
           			    });

           		  }

        //native search data
				vm.destination = results.config.data;
            
            //data that will be passed through
           		var lat = results.data.lat;
           		var lng = results.data.lng;
                           
        //backand call for API
        var backAdd = back.searchParking(lat,lng,dist, price);
              
              //promise for API
           		backAdd.then(function(results){

           			vm.taco = results.data.data;
                var burrito = results.data;

           		 //setting nav points in map for each location that was searched
           			vm.taco.forEach(function(location){
           			
                 	L.marker([location.Location[0], location.Location[1]], {icon: carPin}).addTo(mymap)
           			.bindPopup('<h2 class="lotMarkerTitle">'+location.title+'</h2><br>'+'<a href="http://maps.google.com/?q='+location.address+'" target="_blank"><p class="lotMarkerAdd">'+location.address+'</p></a>'+'<p class="lotMarkerPrice">Price: $'+location.price+'</p>');
           			});

                vm.load = false;

           		});
              //searched location marker
           		L.marker([lat, lng]).addTo(mymap)
    				.bindPopup('<h2 class="destMarkerTitle">Destination</h2> <p class="destMarkerAdd">'+vm.destination.search+'</p>')
        	})
          
          //if we searched something, empty the search input
        	if (vm.form){
        		vm.form.search = "";
            vm.form.distance = "";
            vm.form.price = "";
        	}
        	
    }

      //if we're coming from another state with a search, run the search function here
      if (typeof $stateParams.search !== 'undefined' && $stateParams.search !== ""){
        var dist = "1000";
        var price = "";
        
      	createMap($stateParams,dist,price);
      }

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
       {
    	   //attribution: '<a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, <a href="http://mapbox.com">Mapbox</a>',
   		   maxZoom: 18,
    	   id: 'jcknueven.0pa4k9a3',
    	   accessToken: 'pk.eyJ1IjoiamNrbnVldmVuIiwiYSI6ImNpcjUxcXJ2eTAxbzNmbm5yMW1naGE3NWoifQ.YhmcfQV-iBNW-rj3XLNzaw#15/39.1025/-84.5197'
		    }).addTo(mymap);
      
      //custom marker for parking lots
      var carPin = L.icon({
                iconUrl: 'images/mapCarPin.png',

                iconSize: [48, 52],
              })

      var popup = L.popup();

      //func for search on map state
      vm.go = function(){
        var dist = vm.form.distance;
        var price = vm.form.price;
        //loading icon toggle

      	createMap(vm.form, dist, price);
    	} 

      //function to find geoLocation on map
      function showPosition(position){

          vm.form.search = position.coords.latitude + "," + position.coords.longitude;
          //tells DOM to "reload"
          $scope.$digest();
        }

        vm.getLocation = function(){

           if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(showPosition);
            } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
            }
          }


      vm.filterResults = function(locations, dist, price){
        console.log("ARRAY:",JSON.stringify(locations));
        console.log(dist);

        var newArray = locations.filter(function(item){
            return dist > item.distance;
        });

        //console.log("NEW ARRAY:",newArray);
        
        newArray = newArray.filter(function(item){
            
            return price > item.price;

        });
        console.log("NEW ARRAY:",JSON.stringify(newArray));
        return newArray;
      }

        
    });
})();


