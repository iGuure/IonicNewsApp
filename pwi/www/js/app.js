// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'backand', 'starter.controllers', 'starter.services'])

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

.config(function(BackandProvider, $stateProvider, $urlRouterProvider, $httpProvider, $ionicConfigProvider) {

  // connecting to Backand server
  BackandProvider.setAppName('ionicstarter'); // change here to your app name
  BackandProvider.setSignUpToken('8b6dad15-59a9-433a-8983-67684a9e47c9'); //token that enable sign up. see http://docs.backand.com/en/latest/apidocs/security/index.html#sign-up
  BackandProvider.setAnonymousToken('c11f7dd4-d31e-4b65-bf28-c4f871330e5a'); // token is for anonymous login. see http://docs.backand.com/en/latest/apidocs/security/index.html#anonymous-access

  // putting tabs into the bottom
  $ionicConfigProvider.platform.ios.tabs.style('standard'); 
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');

  $ionicConfigProvider.platform.ios.navBar.alignTitle('center'); 
  $ionicConfigProvider.platform.android.navBar.alignTitle('left');

  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');        

  $ionicConfigProvider.platform.ios.views.transition('ios'); 
  $ionicConfigProvider.platform.android.views.transition('android');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('intro', {
    url: '/',
    templateUrl: 'templates/intro.html',
    controller: 'IntroCtrl'
  })

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

  .state('tab.news', {
    url: '/news',
    views: {
      'tab-news': {
        templateUrl: 'templates/tab-news.html',
        controller: 'NewsCtrl'
      }
    }
  })
    .state('tab.news.WWE', {
      url: '/WWE',
      views: {
        'tab-news-WWE': {
          templateUrl: 'templates/tab-news-list.html',
          controller: 'NewsListCtrl as nlc'
        }
      },
      resolve: {
        mode: function() {
            return 'WWE';
        }
      }
    })
      .state('tab.news.WWE-detail', {
        url: '/WWE/:newsId',
        views: {
            'tab-news-WWE': {
                templateUrl: 'templates/news-detail.html',
                controller: 'NewsDetailCtrl as ndc'
            }
        }
      })
    .state('tab.news.NJPW', {
      url: '/NJPW',
      views: {
        'tab-news-NJPW': {
          templateUrl: 'templates/tab-news-list.html',
          controller: 'NewsListCtrl as nlc'
        }
      },
      resolve: {
        mode: function() {
            return 'NJPW';
        }
      }
    })
      .state('tab.news.NJPW-detail', {
        url: '/NJPW/:newsId',
        views: {
            'tab-news-NJPW': {
                templateUrl: 'templates/news-detail.html',
                controller: 'NewsDetailCtrl as ndc'
            }
        }
      })
    .state('tab.news.PWG', {
      url: '/PWG',
      views: {
        'tab-news-PWG': {
          templateUrl: 'templates/tab-news-list.html',
          controller: 'NewsListCtrl as nlc'
        }
      },
      resolve: {
        mode: function() {
            return 'PWG';
        }
      }
    })
      .state('tab.news.PWG-detail', {
        url: '/PWG/:newsId',
        views: {
            'tab-news-PWG': {
                templateUrl: 'templates/news-detail.html',
                controller: 'NewsDetailCtrl as ndc'
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

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});
