(function() {
    'use strict';
    
    angular
    .module('parkalot')
    .controller('userPrefController', function($state, back) {
       var vm = this;

      var call = back.userGet(back.getToken());

       call.then(function(data){
        console.log(data.data.data[0]);
       vm.preference = data.data.data[0];

       });


      vm.submit = function(){

        var edit = back.editUser(vm.preference, vm.preference.id);

        edit.then(function(response){
          console.log(response);
          $state.go('user');
        })
      }

       var call = back.userGet(back.getToken());

       call.then(function(data){
        console.log(data.data.data[0]);
       vm.user = data.data.data[0];

       });
       
       vm.logout = function(){
        back.logout();
        $state.go('home');
       }

      vm.go = function (){

        $state.go('mapAddress', vm.form);
   
      }

      
    });
})();