(function() {
    'use strict';
    
    angular
    .module('parkalot')
    .controller('loginController', function($state,back) {
       var vm = this;
       vm.showAlert = false;

       if(back.getToken() !== null)
       {
        $state.go('user');
       }

       vm.submit = function(){
        var loginProm = back.login(vm.form);

        loginProm.then(function(results){
          console.log(results);
          if(results.data.data[0])
          {
            console.log(results);
            back.saveToken(results.data.data[0].token);
            back.saveUserInfo(results.data.data[0].id);
            vm.showAlert = false;
            $state.go('user');
          }
          else
          {
            vm.showAlert = true;
          }
        })
       }
      
    });
})();