// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.busca', {
    url: "/busca",
    views: {
      'menuContent': {
        templateUrl: "templates/busca.html",
        controller: 'BuscaCtrl'
      }
    }
  })

  .state('app.ofertaslive', {
    url: "/ofertaslive",
    views: {
      'menuContent': {
        templateUrl: "templates/ofertaslive.html",
        controller: 'OfertasLive'
      }
    }
  })

  .state('app.result', {
    url: "/result",
    views: {
      'menuContent': {
        templateUrl: "templates/result.html",
        controller: 'PlaylistsCtrl'
      }
    }
  })

  .state('app.seguindo', {
    url: "/seguindo",
    views: {
      'menuContent': {
        templateUrl: "templates/seguindo.html",
        controller: 'SeguindoCtrl'
      }
    }
  })

  .state('app.enderecos', {
    url: "/enderecos",
    views: {
      'menuContent': {
        templateUrl: "templates/enderecos.html",
        controller: 'EnderecosCtrl'
      }
    }
  })

  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html",
        controller: 'HomeCtrl'
      }
    }
  })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.produto', {
    url: "/produto/:produtoId",
    views: {
      'menuContent': {
        templateUrl: "templates/produto.html",
        controller: 'ProdutoCtrl'
      }
    }
  });




  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/busca');

})


;