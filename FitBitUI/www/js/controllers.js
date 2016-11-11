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

  /*Date function*/
  var myDate = new Date();

  $scope.monthDayYearSelected = myDate;
  $scope.dateSelected = myDate;

  $scope.changeMonthDayYear = function(monthDayYearSelected) {
    console.log(monthDayYearSelected);
    $scope.dateSelected = monthDayYearSelected;
  }

  $scope.changeDate = function(newdate) {
    console.log(newdate);
    $scope.monthDayYearSelected = newdate;
  }
})

.controller('ExerciseCtrl', function($scope) {})

.controller('HealthCtrl', function($scope) {})

.controller('NutritionCtrl', function($scope, $ionicPopup) {

    $scope.groups = [];
  	for (var i=0; i<1; i++)
	{
      $scope.groups[i] =
	  {
        name: i,
        items: [],
        show: false
    };

    for (var j=0; j<1; j++)
		{
      $scope.groups[i].items.push(i + j);
		}
	};

	$scope.groups2 = [];
    for (var a=0; a<1; a++)
	{
        $scope.groups2[a] =
		{
          name: a,
          items: [],
          show: false
        };
    for (var b=0; b<1; b++)
		{
          $scope.groups2[a].items.push(a + '-' + b);
		}
    };

	$scope.groups3 = [];
    for (var c=0; c<1; c++)
	{
        $scope.groups3[c] =
		{
          name: c,
          items: [],
          show: false
        };
    for (var d=0; d<1; d++)
		{
          $scope.groups3[c].items.push(c + '-' + d);
		}
    };




    // angular.element('group');

    $scope.toggleGroup = function(group)
	{
      group.show = !group.show;
    };
    $scope.isGroupShown = function(group)
	{
      return group.show;
    };


	$scope.day =['Day 1'];
     $scope.doRefresh = function()
	 {

      console.log('Refreshing!');
      $timeout( function()
	  {
		var x=0
        //simulate async response
        $scope.accordion.push('Day' + x);
		x++;
        //Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');

      }, 1000);

    };

	/*Date function*/
	var myDate = new Date();

  $scope.monthDayYearSelected = myDate;
  $scope.dateSelected = myDate;

  $scope.changeMonthDayYear = function(monthDayYearSelected) {
    console.log(monthDayYearSelected);
    $scope.dateSelected = monthDayYearSelected;
  }

  $scope.changeDate = function(newdate) {
    console.log(newdate);
    $scope.monthDayYearSelected = newdate;
  }



/*Test Graph*/
$scope.graph = {};
  $scope.labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  $scope.series = ['Current', 'Goal'];
    $scope.data = [
    //Current
    [23.7, 23.2, 23.5, 22.9, 29.7, 29.2, 28.8],
    //Goal
    [15, 15, 15, 15, 15, 15, 15]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

$scope.input="";
$scope.food = {
  "text": ""
}
$scope.addFood = function(text) {
  if (text === ""){
    console.log("empty input");
  } else {
    // $scope.push({
    //   "text": text,
    //   "checked": false,
    //   "showDelete": false,
    //   "showReorder": false
    // });
    console.log(text)
    $scope.input = "";
  }
};
$scope.showAddConfirm = function(text) {
  if (text === ''){
    $ionicPopup.alert({
      title: 'Empty text field',
      template: 'Please input a food'
    });
  } else {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Add a Food',
      template: 'Are you sure you want to add this food?'
    });

    confirmPopup.then(function(res) {
      if(res) {
        console.log('ok');
        $scope.addFood(text);
        // console.log(text);
      } else {
        console.log('cancel');
      }
    });
  }
};

})

.controller('CalendarCtrl', function($scope, $ionicPopup) {
  $scope.query = "";
  $scope.friends = [
    {
      "name": "Alex",
      "goal": "Lose 10 lbs"
    },
    {
      "name": "Katarina",
      "goal": "Lose 10 lbs"
    },
    {
      "name": "Bella",
      "goal": "Walk 1000 steps"
    }
  ];

  $scope.groupGoal = function() {

  }

  $scope.invite = function(){

  }
})

.controller('AccountCtrl', function($scope, $ionicPopup) {
  $scope.input = "";
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
      $scope.goals.push({
        "text": text,
        "checked": false,
        "showDelete": false,
        "showReorder": false
      });
      $scope.input = "";
    }
  };

  $scope.moveGoal = function(goal, fromIndex, toIndex) {
    $scope.goals.splice(fromIndex, 1);
    $scope.goals.splice(toIndex, 0, goal);
  };

  $scope.onGoalDelete = function(goal, index){
    $scope.goals = $scope.goals.splice(index, 1);
  };

  $scope.showAddConfirm = function(text) {
    if (text === ''){
      $ionicPopup.alert({
        title: 'Empty text field',
        template: 'Please input a goal'
      });
    } else {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Add a Goal',
        template: 'Are you sure you want to add this goal?'
      });

      confirmPopup.then(function(res) {
        if(res) {
          console.log('ok adding');
          $scope.addGoal(text);
          console.log(text);
        } else {
          console.log('cancel');
        }
      });
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
