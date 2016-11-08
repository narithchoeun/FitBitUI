angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ExerciseCtrl', function($scope) {

})

.controller('HealthCtrl', function($scope) {})

.controller('NutritionCtrl', function($scope) {})

.controller('CalendarCtrl', function($scope) {})

.controller('AccountCtrl', function($scope, $ionicPopup) {
  $scope.goal = {
    "text": "",
    "checked": false,
    "showDelete": false,
    "showReorder": false
  };

  $scope.goals = [
    {
      "text": "Lose 10 pounds",
      "checked": true,
      "showDelete": false,
      "showReorder": false
      // "category": "nutrition"
    },
    {
      "text": "Run 1 Mile",
      "checked": false,
      "showDelete": false,
      "showReorder": false
      // "category": "exercise"
    },
    {
      "text": "Drink 1L of Water",
      "checked": true,
      "showDelete": false,
      "showReorder": false
      // "category": "nutrition"
    }
  ];

  $scope.addGoal = function(text) {
    if ($scope.goal.text === ""){
      console.log("empty input");
    } else {
      $scope.goals.push($scope.goal);
      // $scope.goal.text = "";
    }
  };

  $scope.moveGoal = function(goal, fromIndex, toIndex) {
    console.log("user wants to move goal");
    $scope.goals.splice(fromIndex,1);
    $scope.goals.splice(toIndex,0,goal);
  };

  $scope.onGoalDelete = function(goal, index){
    $scope.goals = $scope.goals.splice(index, 1);
  };

  $scope.showConfirm = function(goal) {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Add a Goal',
      template: 'Are you sure you want to add this goal?'
    });

    confirmPopup.then(function(res) {
      if(res) {
        console.log('You are sure');
        $scope.onGoalDelete(goal, index);
      } else {
        console.log('You are not sure');
      }
    });
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
