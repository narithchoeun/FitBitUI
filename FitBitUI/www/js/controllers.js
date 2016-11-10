angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.days = [
    {
      "day": 'S',
      "date": 6
    },
    {
      "day": 'M',
      "date": 7
    },
    {
      "day": 'T',
      "date": 8
    },
    {
      "day": 'W',
      "date": 9
    },
    {
      "day": 'T',
      "date": 10
    },
    {
      "day": 'F',
      "date": 11
    },
    {
      "day": 'S',
      "date": 12
    }
  ];
  $scope.type = 'W';
  $scope.setActive = function(event){
    $scope.type = angular.element(event.target);
    console.log($scope.type);
  };
})

.controller('ExerciseCtrl', function($scope) {

})

.controller('HealthCtrl', function($scope) {})



.controller('NutritionCtrl', function($scope, $timeout) {
/**
	console.log('hi@');
	angular.element('accordion'); //get elements by class name
	angular.element('accordion-item'); //get elements by class name

	  $scope.toggleGroup = function(accordion) {
    accordion.show = !accordion.show;
  };
  $scope.isGroupShown = function(accordion) {
    return accordion.show;
  };
  */


    $scope.groups = [];
	for (var i=0; i<4; i++) {
    $scope.groups[i] = {
      name: i,
      items: [],
      show: false
    };


    for (var j=0; j<1; j++) {
      $scope.groups[i].items.push(i + '-' + j);
    }
  }
  angular.element('group');
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    group.show = !group.show;
  };
  $scope.isGroupShown = function(group) {
    return group.show;
  };



   $scope.doRefresh = function() {

    console.log('Refreshing!');
    $timeout( function() {
      //simulate async response
      $scope.accordion.push('New Accordion Item ' + Math.floor(Math.random() * 1000) + 4);

      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');

    }, 1000);

  };

})

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
    if (text === ""){
      console.log("empty input");
    } else {
      $scope.goals.push($scope.goal);
      // $scope.goal.text = "";
    }
  };

  $scope.moveGoal = function(goal, fromIndex, toIndex) {
    console.log("user wants to move goal");
    $scope.goals.splice(fromIndex, 1);
    $scope.goals.splice(toIndex, 0, goal);
  };

  $scope.onGoalDelete = function(goal, index){
    $scope.goals = $scope.goals.splice(index, 1);
  };

  $scope.showAddConfirm = function(goal) {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Add a Goal',
      template: 'Are you sure you want to add this goal?'
    });

    confirmPopup.then(function(res) {
      if(res) {
        console.log('ok');
        $scope.addGoal(goal.text);
      } else {
        console.log('cancel');
      }
    });
  };


  //For nutrition
$scope.test = function()
{
	console.log('test function');
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
