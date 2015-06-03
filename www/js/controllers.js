angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopup, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  
  
 // Triggered on a button click, or some other target
 $scope.showPopup = function() {
   $scope.data = {}

   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
     template: '<input type="password" ng-model="data.wifi">',
     title: 'Enter Wi-Fi Password',
     subTitle: 'Please use normal things',
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
           if (!$scope.data.wifi) {
             //don't allow the user to close unless he enters wifi password
             e.preventDefault();
           } else {
             return $scope.data.wifi;
           }
         }
       },
     ]
   });
   myPopup.then(function(res) {
     console.log('Tapped!', res);
   });
   $timeout(function() {
      myPopup.close(); //close the popup after 3 seconds for some reason
   }, 3000);
  };
   // A confirm dialog
   $scope.showConfirm = function() {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Consume Ice Cream',
       template: 'Are you sure you want to eat this ice cream?'
     });
     confirmPopup.then(function(res) {
       if(res) {
         console.log('You are sure');
       } else {
         console.log('You are not sure');
       }
     });
   };

   // An alert dialog
   $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Localização atual',
       template: 'São Conrado, Barra da Tijuca, Recreio e Proximidades'
     });
     alertPopup.then(function(res) {
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   };  
  
  
  
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { id: 1, title: 'GeForce GTX 980', preco: 'R$ 1.423,00', image: '../img/geforce.jpg', loja: 'Star Info @ Rua 13 de Maio 110 / 2001 - Centro', distancia: '250m'},
    { id: 2, title: 'ATI Radeon R9 290X', preco: 'R$ 1.100,10', image: '../img/radeon.jpg', loja: 'Star Info @ Rua 13 de Maio 110 / 2001 - Centro', distancia: '250m'},
    { id: 2, title: 'IPhone 6 Plus', preco: 'R$ 3.431,12', image: '../img/iphone.jpg', loja: 'Homeprice @ Rua do Rosario 101 / sl 311 - Centro', distancia: '800m'},
    { id: 3, title: 'Motorola X', preco: 'R$ 1.399,00', image: '../img/motox.jpg', loja: 'Vivo @ Av. Rio Branco 156 / 102 - Centro', distancia: '1.5km'},
  ];
})


.controller('PlaylistCtrl', function($scope, $stateParams) {

  $scope.selectedPlaylist = $stateParams.playlistId;

})

;
