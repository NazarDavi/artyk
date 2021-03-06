// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'ngRoute', 'ngCookies', 'ngMaterial', 'app.controllers', 'app.routes', 'app.directives','app.services', 'ngMessages', 'ngResource', 'infinite-scroll'])

.config(function($ionicConfigProvider, $httpProvider, $routeProvider,$locationProvider){
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.delete = {};
  $httpProvider.defaults.headers.patch = {};


    // $routeProvider
    $routeProvider
    .when('menu.gosmak', {
        url: '/page18',
        views: {
            'side-menu21': {
                templateUrl: 'templates/gosmak.html',
                controller: 'gosmakCtrl'
            }
        }
    })
    .when('menu.home', {
            url: '/side-menu21/page1'
        })
    // $routeProvider.when('page4', {
    //         templateUrl: 'templates/login.html',
    //         controller: 'loginCtrl'
    //     })
        // .otherwise({
        //     redirectTo: '/'
        // });


})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})