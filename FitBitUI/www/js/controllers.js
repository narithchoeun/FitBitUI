angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ExerciseCtrl', function($scope) {

})

.controller('HealthCtrl', function($scope) {})

.controller('NutritionCtrl', function($scope) {})

.controller('CalendarCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {
  $scope.goal = {
    "text": "",
    "checked": false
  };

  $scope.goals = [
    {
      "text": "Lose 10 pounds",
      "checked": true,
      // "category": "nutrition"
    },
    {
      "text": "Run 1 Mile",
      "checked": false,
      // "category": "exercise"
    },
    {
      "text": "Drink 1L of Water",
      "checked": true,
      // "category": "nutrition"
    }
  ];

  $scope.addGoal = function(){
    console.log("user wants to add a goal");
    if ($scope.goal.text === ""){
      console.log("empty input");
    } else {
      $scope.goals.push($scope.goal);
    }
  };

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
      "placeholder": "Enter your age",
      "content":""
    },
    {
      "title": "Weight (lbs)",
      "placeholder": "Enter your weight",
      "content":""
    },
    {
      "title": "Goal (lbs)",
      "placeholder": "Enter your goal weight",
      "content":""
    }
  ]
});
