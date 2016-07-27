(function() {
    'use strict';
    
    angular
    .module('parkalot')
    .controller('loginController', function($state,back) {
       var vm = this;
       vm.showAlert = false;

       if(back.getToken() !== null)
       {
        // $state.go('admin');
       }

       vm.submit = function(){
        var loginPromise = back.login(vm.form);

        loginPromise.then(function(results){
          console.log(results);
          if(results.data.data[0])
          {
            back.saveToken(results.data.data[0].token);
            back.saveUserId(results.data.data[0].id);
            vm.showAlert = false;
            // $state.go('admin');
          }
          else
          {
            vm.showAlert = true;
          }
        })
       }
      
    });
})();