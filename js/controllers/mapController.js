(function() {
    'use strict';
    
    angular
    .module('parkalot')
    .controller('mapController', function($state,back,API) {
       var vm = this;
       
       var mymap = L.map('mapid').setView([39.1031, -0.09], 13);
      
    });
})();