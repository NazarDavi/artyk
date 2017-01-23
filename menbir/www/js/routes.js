angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  
    .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/page4',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('registrasiA', {
    url: '/page5',
    templateUrl: 'templates/registrasiA.html',
    controller: 'registrasiACtrl'
  })

  .state('registrasiA2', {
    url: '/page6',
    templateUrl: 'templates/registrasiA2.html',
    controller: 'registrasiA2Ctrl'
  })

  .state('menu.bolumler', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bolumler.html',
        controller: 'bolumlerCtrl'
      }
    }
  })

  .state('menu.bLMlerBLMi', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bLMlerBLMi.html',
        controller: 'bLMlerBLMiCtrl'
      }
    }
  })

  .state('menu.welaAtlar', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/welaAtlar.html',
        controller: 'welaAtlarCtrl'
      }
    }
  })

  .state('menu.etraplarMaryWelaAty', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/etraplarMaryWelaAty.html',
        controller: 'etraplarMaryWelaAtyCtrl'
      }
    }
  })

  .state('menu.daHanBirleIkler', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/daHanBirleIkler.html',
        controller: 'daHanBirleIklerCtrl'
      }
    }
  })

  .state('menu.bildiri', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bildiri.html',
        controller: 'bildiriCtrl'
      }
    }
  })

  .state('menu.meWakansiAlam', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/meWakansiAlam.html',
        controller: 'meWakansiAlamCtrl'
      }
    }
  })

  .state('menu.gWnNZeAranHarytlar', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gWnNZeAranHarytlar.html',
        controller: 'gWnNZeAranHarytlarCtrl'
      }
    }
  })

  .state('menu.awtoryHemmeSergileri', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/awtoryHemmeSergileri.html',
        controller: 'awtoryHemmeSergileriCtrl'
      }
    }
  })

  .state('menu.gelenHatlar', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gelenHatlar.html',
        controller: 'gelenHatlarCtrl'
      }
    }
  })

  .state('menu.sMS', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sMS.html',
        controller: 'sMSCtrl'
      }
    }
  })

  .state('menu.ulanmagyDZgNleri', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ulanmagyDZgNleri.html',
        controller: 'ulanmagyDZgNleriCtrl'
      }
    }
  })

  .state('menu.habarlaMakIn', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/habarlaMakIn.html',
        controller: 'habarlaMakInCtrl'
      }
    }
  })

  .state('menu.filter', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/filter.html',
        controller: 'filterCtrl'
      }
    }
  })

  .state('menu.gosmak', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gosmak.html',
        controller: 'gosmakCtrl'
      }
    }
  })

  .state('menu.slideShow', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/slideShow.html',
        controller: 'slideShowCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});