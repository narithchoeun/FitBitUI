// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

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

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })


  //exercise tab and details
  .state('tab.exercise', {
    url: '/exercise',
    views: {
      'tab-exercise': {
        templateUrl: 'templates/tab-exercise.html',
        controller: 'ExerciseCtrl'
      }
    }
  })
  //detail state for walking
  .state('tab.walking', {
    url: '/walking',
    views: {
      //this is the same as exercise because it is the 'parent' view
      'tab-exercise':{
        templateUrl: 'templates/walking-detail.html',
        // controller: 'ExerciseCtrl'
      }
    }
  })
  .state('tab.running', {
    url: '/running',
    views: {
      'tab-exercise':{
        templateUrl: 'templates/running-detail.html',
        // controller: 'ExerciseCtrl'
      }
    }
  })
  .state('tab.weights', {
    url: '/weights',
    views: {
      'tab-exercise':{
        templateUrl: 'templates/weights-detail.html',
        // controller: 'ExerciseCtrl'
      }
    }
  })


  //health tab and details
  .state('tab.health', {
    url: '/health',
    views: {
      'tab-health': {
        templateUrl: 'templates/tab-health.html',
        controller: 'HealthCtrl'
      }
    }
  })
  .state('tab.sleeping', {
    url: '/sleeping',
    views: {
      'tab-health': {
        templateUrl: 'templates/sleeping-detail.html'
        // controller:'HealthCtrl'
      }
    }
  })
  .state('tab.bpm', {
    url: '/bpm',
    views: {
      'tab-health': {
        templateUrl: 'templates/bpm-detail.html'
      }
    }
  })

  .state('tab.nutrition', {
    url: '/nutrition',
    views: {
      'tab-nutrition': {
        templateUrl: 'templates/tab-nutrition.html',
        controller: 'NutritionCtrl'
      }
    }
  })


  .state('tab.group', {
    url: '/group',
    views: {
      'tab-group': {
        templateUrl: 'templates/tab-group.html',
        controller: 'GroupCtrl'
      }
    }
  })
  .state('tab.goal', {
    url: '/goal',
    views: {
      'tab-group': {
        templateUrl: 'templates/goal-detail.html',
        controller: 'GroupCtrl'
      }
    }
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback/default
  $urlRouterProvider.otherwise('/tab/dash');

});
