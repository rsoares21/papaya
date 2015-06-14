angular.module('starter.controllers', ['ionic'])


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

  $scope.details = function (id) {
    $state.go('#/app/playlist/100');
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
   $scope.showAlert = function(text) {
     $scope.alerttext = text;
     var alertPopup = $ionicPopup.alert({
       title: 'Alert',
       template: 'Deseja remover oferta '+ $scope.alerttext + ' por 30 minutos ?' 
     });
     alertPopup.then(function(res) {
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   };  
})

.controller('BuscaCtrl', function($scope, $rootScope) {
  $scope.servicos = [
    { id: 1, rating: '95%', tipo: 'Academia', title: 'Power Academia', image: 'academia.png', endereco: 'Rua 13 de Maio 110 / 2001 - Centro', distancia: 3100},
    { id: 2, rating: '90%', tipo: 'Informatica', title: 'Best Shop BR', image: 'default_servicos.jpg', endereco: 'Rua 13 de Maio 110 / 2001 - Centro', distancia: 3150},
    { id: 3, rating: '85%', tipo: 'Informatica', title: 'Smart Price', image: 'default_servicos.jpg', endereco: 'Rua do Rosario 101 / sl 311 - Centro', distancia: 4050},
    { id: 4, rating: '85%', tipo: 'Telefonia', title: 'Vivo', image: 'vivo.jpg', endereco: 'Av. Rio Branco 156 / 102 - Centro', distancia: 55},
    { id: 5, rating: '85%', tipo: 'Floricultura', title: 'Flora Margarida', image: 'default_servicos.jpg', endereco: 'Rua Senador Vergueiro 218 Loja D - Flamengo', distancia: 55},
    { id: 6, rating: '85%', tipo: 'Academia', title: 'Academia Upper', image: 'upper.jpg', endereco: 'Rua Marquês de Abrantes, 88, 96 e 100, Flamengo  ', distancia: 75},        
    { id: 7, rating: '85%', tipo: 'Autoescola', title: 'Auto E Moto Escola Apollo', image: 'default_servicos.jpg', endereco: 'Rua Marquês de Abrantes, 177 - Loja: C Flamengo', distancia: 705},            
  ];

  $rootScope.ofertas = [
    { id: 1, ratingservico: '95%', followicon:'ion-checkmark-circled', title: 'GeForce GTX 980', preco: '1.423,00', image: 'geforce.jpg', loja: 'Star Info @ Rua 13 de Maio 110 / 2001 - Centro', distancia: 250, info:'', desconto:'5'},
    { id: 2, ratingservico: '90%', followicon:'ion-checkmark-circled', title: 'ATI Radeon R9 290X', preco: '1.100,00', image: 'r9-290x.png', loja: 'Star Info @ Rua 13 de Maio 110 / 2001 - Centro', distancia: 250, info:'', desconto:'10'},
    { id: 3, ratingservico: '85%', followicon:'', title: 'IPhone 6 Plus', preco: '3.499,00', image: 'iphone.jpg', loja: 'Homeprice @ Rua do Rosario 101 / sl 311 - Centro', distancia: 80, info:'', desconto:'15'},
    { id: 4, ratingservico: '85%', followicon:'', title: 'Motorola X', preco: '1.399,00', image: 'motox.jpg', loja: 'Vivo @ Av. Rio Branco 156 / 102 - Centro', distancia: 1500, info: '', desconto:'20'},
    { id: 5, ratingservico: '85%', followicon:'', title: 'Royal Canin 8+ 1kg', preco: '43,50', image: 'Royal_Canin_Mini_Adult_8_large.jpg', loja: 'Homeprice @ Rua do Rosario 101 / sl 311 - Centro', distancia: 80, info:'', desconto:'15'},
    { id: 6, ratingservico: '85%', followicon:'', title: 'Óculos Rayban R1', preco: '599,00', image: 'default_produtos.jpg', loja: 'Vivo @ Av. Rio Branco 156 / 102 - Centro', distancia: 1500, info:'', desconto:'10'},
    { id: 7, ratingservico: '85%', followicon:'', title: 'Smartphone Samsung Galaxy Gran Prime', preco: '499,00', image: 'samsung_galaxygp.jpg', loja: 'Homeprice @ Rua do Rosario 101 / sl 311 - Centro', distancia: 80, info:'Smartphone Samsung Galaxy Gran Prime Dual Chip Desbloqueado Tim Android 4.4 Kit Kat Tela 5 8GB 3G Câmera 8MP - Branco', desconto:'5'},
    { id: 8, ratingservico: '85%', followicon:'', title: 'Motorola X', preco: '1.399,00', image: 'motox.jpg', loja: 'Vivo @ Av. Rio Branco 156 / 102 - Centro', distancia: 1500, info:'', desconto:'20'}

  ];

})

.controller('HomeCtrl', function($scope) {
  $scope.allusers = [
      { id: 1, name: 'Jose Maria da Silva', age: 41},  
      { id: 2, name: 'Maria Jose da Silva', age: 21}
    ];
  })

.controller('PlaylistCtrl', function($scope, $stateParams) {

  $scope.selectedPlaylist = $stateParams.playlistId;

})

.controller('ProdutoCtrl', function($scope, $stateParams, $rootScope) {

  
  var produtoId = $stateParams.produtoId;

  $scope.produto = $rootScope.ofertas[produtoId-1];

})


.controller('SeguindoCtrl', function($scope) {

  $scope.produtos = [
    { id: 1, rating: '95%', followicon:'ion-checkmark-circled', title: 'GeForce GTX 980', preco: 'BR 1.423,00', image: 'geforce.jpg', loja: 'Star Info @ Rua 13 de Maio 110 / 2001 - Centro', distancia: '250m'},
    { id: 2, rating: '90%', followicon:'ion-checkmark-circled', title: 'ATI Radeon R9 290X', preco: 'BR 1.100,10', image: 'r9-290x.png', loja: 'Star Info @ Rua 13 de Maio 110 / 2001 - Centro', distancia: '250m'}
  ];

})

;
