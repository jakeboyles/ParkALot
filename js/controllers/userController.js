(function() {
    'use strict';
    
    angular
    .module('parkalot')
    .controller('userController', function($state, back) {
       var vm = this;
      
       var call = back.userGet(back.getToken());

       call.then(function(data){
       	console.log(data.data.data[0]);
       vm.user = data.data.data[0];

       });
      
    });
})();