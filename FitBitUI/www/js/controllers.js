angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ExerciseCtrl', function($scope) {
  
})

.controller('HealthCtrl', function($scope) {})

.controller('NutritionCtrl', function($scope) {})

.controller('CalendarCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {
  $scope.text = null;

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
    if ($scope.text === ""){
      console.log("empty input");
    } else {
      $scope.goals.push(
        {
          "text": $scope.text,
          "checked": false,
          // "category": category
        }
      );
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
