angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ExerciseCtrl', function($scope) {
})

.controller('HealthCtrl', function($scope) {})

.controller('NutritionCtrl', function($scope) {})

.controller('CalendarCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {
  $scope.goals = [
    {
      "text": "Lose 10 pounds",
      "checked": true
    },
    {
      "text": "Run 1 Mile",
      "checked": false
    },
    {
      "text": "Drink 1L of Water",
      "checked": true
    }
  ];

  $scope.checkGoal = function(){
    // for(int i = 0; i < goals.length; i++){
    //
    // }
  }
  // $scope.addGoal = function(){
  //   console.log("user wants to add a goal");
  //
  // }

  $scope.infoLabels = [
    // {
    //   "title": "First Name",
    //   "content":""
    // },
    // {
    //   "title": "Last Name",
    //   "content":""
    // },
    {
      "title": "Age",
      "content":""
    },
    {
      "title": "Current Weight",
      "content":""
    },
    {
      "title": "Goal Weight",
      "content":""
    }
  ]
});
