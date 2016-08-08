(function() {
    'use strict';
    
    angular
    .module('parkalot')
    .controller('userPrefController', function($state, back) {
       var vm = this;

       //search for token when user page clicked. if no token found, reroute to login/signup page
       if(back.getToken() === null)
       {
        $state.go('login');
       }

       
      var call = back.userGet(back.getToken());

       call.then(function(data){
        console.log(data.data.data[0]);
       vm.preference = data.data.data[0];

       });

       //function for updating user preferences
      vm.submit = function(){

        var edit = back.editUser(vm.preference, vm.preference.id);

        edit.then(function(response){
          //refresh page on save of pref
          $state.reload();
        })
      };


       var call = back.userGet(back.getToken());

       call.then(function(data){
        console.log(data.data.data[0]);
       vm.user = data.data.data[0];

       });
       
    
       //function for search by address. routes to map
      vm.go = function (){

        $state.go('mapAddress', vm.form);
   
      }
      
    });
})();