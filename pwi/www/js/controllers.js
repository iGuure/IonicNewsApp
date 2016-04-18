angular.module('starter.controllers', [])

.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
 
  // Called to navigate to the main app
  $scope.startApp = function() {
    $state.go('tab.dash');
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
})

.controller('DashCtrl', function($scope) {})

.controller('NewsCtrl', function($scope) {})

.controller('NewsListCtrl', function($scope, mode, NewsModel) {
  $scope.promotion = mode;

  var nlc = this;

  function getAll(promotion) {
    NewsModel.getAll(promotion)
      .then(function(result) {
        nlc.data = result.data;
      });
  }

  nlc.getAll = getAll;

  getAll($scope.promotion);

  $scope.doRefresh = function() {
    getAll($scope.promotion);
    // 停止广播ion-refresher
    $scope.$broadcast('scroll.refreshComplete');
  };
})

.controller('NewsDetailCtrl', function($scope, $stateParams, NewsDetailModel) {
  var ndc = this;

  function fetch(id) {
    NewsDetailModel.fetch(id)
      .then(function(result) {
        ndc.data = result.data;
      });
  }

  ndc.fetch = fetch;

  fetch($stateParams.newsId);
})

.controller('AccountCtrl', function($scope) {
  $scope.nightMode = {
    nightModeOn: false
  };
});
