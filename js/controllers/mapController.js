(function() {
    'use strict';
    
    angular
    .module('parkalot')
    .controller('mapController', function($state,back,API) {
       var vm = this;
       
       var mymap = L.map('mapid').setView([39.1031, -0.09], 13);

       L.tileLayer('https://a.tiles.mapbox.com/v4/jcknueven.0pa4k9a3/page.html?access_token=pk.eyJ1IjoiamNrbnVldmVuIiwiYSI6ImNpcjUxcXJ2eTAxbzNmbm5yMW1naGE3NWoifQ.YhmcfQV-iBNW-rj3XLNzaw#15/39.1025/-84.5197', 
       {
    	attribution: '<a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, <a href="http://mapbox.com">Mapbox</a>',
   		maxZoom: 18,
    	id: 'jcknueven.0pa4k9a3',
    	accessToken: 'pk.eyJ1IjoiamNrbnVldmVuIiwiYSI6ImNpcjUxcXJ2eTAxbzNmbm5yMW1naGE3NWoifQ.YhmcfQV-iBNW-rj3XLNzaw#15/39.1025/-84.5197'
		}).addTo(mymap);
      
      
      
    });
})();