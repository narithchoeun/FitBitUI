angular.module('ionicApp', ['ionic'])

.controller('MyCtrl', function($scope) {
  $scope.items = [{
      title: 'Calorie Intake',
      text: '...'
    },{
      title: 'Macros',
      text: '...'
    },{
      title: 'Water',
      text: '...'
    },{
      title: 'Alcohol',
      text: '...'
    }];

  $scope.toggleItem= function(item) {
    if ($scope.isItemShown(item)) {
      $scope.shownItem = null;
    } else {
      $scope.shownItem = item;
    }
  };
  $scope.isItemShown = function(item) {
    return $scope.shownItem === item;
  };

});
