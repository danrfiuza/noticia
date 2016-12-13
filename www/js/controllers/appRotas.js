// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('noticia', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
  .state('listagem',{
    url: '/listagem',
    views: {
      'view-conteudo':{
        templateUrl: 'templates/listagem.html',
        controller: 'newsCtrl'
      }
    }
  })
  .state('detalhe',{
    url: '/detalhe',
    views: {
      'view-conteudo':{
        templateUrl: 'templates/detalhe.html',
        controller: 'newsCtrl'
      }
    }
  })
  .state('formulario',{
    url: '/formulario',
    views: {
      'view-conteudo':{
        templateUrl: 'templates/formulario.html',
        controller: 'newsCtrl'
      }
    }
  })
  .state('noticias',{
    url: '/noticias',
    views: {
      'view-conteudo':{
        templateUrl: 'templates/noticias.html',
        controller: 'noticiaCtrl',
      }
    }
  })

  $urlRouterProvider.otherwise('/listagem');
});
