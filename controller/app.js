
var app = angular.module('myApp', ['ng-fusioncharts']);

app.controller('ngRepeatCtrl',
		  function ngRepeatCtrl ($scope) {
		  $scope.myFun = function(index){
			  return index;
		  }
		  $scope.collection =[
		                      {
		                    	"id" :1,
		                    	"name" : "satish",
		                    	"age" : 25,
		                    	"salary" : 2340
		                      }, 
		                      {
			                    	"id" :0,
			                    	"name" : "satty",
			                    	"age" : 27,
			                    	"salary" : 1000
			                      }
		                      ]; 
		  
		  $scope.myFunCollection = function(collection){
			  return collection.age;
		  }
		});


app.controller('ParentCtrl',
		  function ParentCtrl ($scope) {
		  $scope.name ='';
		  $scope.post ='';
		  $scope.handleClick = function (msg) {
			  $scope.$broadcast('parent', { message: msg });
			  };
		  $scope.$on('fromSCtr1', function(event, args)
				  {
			  			$scope.name =args.name;
				  });
		  $scope.$on('fromSCtr2', function(event, args)
				  {
			  			$scope.post =args.post;
				  });
		});
app.controller('SiblingOneCtrl',
		  function SiblingOneCtrl ($scope) {
		  $scope.message = '';	
		  $scope.$on('parent', function (event, data) {
		    console.log(data); // 'Some data'
		    $scope.message = data.message;
		  });
		  
		  $scope.handleClick1 = function (msg) {
			  $scope.$emit('fromSCtr1', { name: msg });
			  };
		});
app.controller('SiblingTwoCtrl',
		  function SiblingTwoCtrl ($scope) {
		 $scope.message = '';
		  $scope.$on('parent', function (event, data) {
		    console.log(data); // 'Some data'
		    $scope.message = data.message;
		  });
		  
		  $scope.handleClick2 = function (msg) {
			  $scope.$emit('fromSCtr2', { post: msg });
			  };
		});

app.controller("myController", function ($scope) {
    $scope.title = "binding";
    $scope.st ="sd";
    $scope.changePt = function(){
      	 $scope.st ="googel";
      };
    $scope.changeSt = function(){
    	 $scope.st ="yahoo";
    };
    
});

app.directive("jmFind", function () {

    return {
        replace: true,
        restrict: 'C',
        transclude: true,
        scope: {
            title1: "=",
            title2: "@",
            title3: "@",
            title4: "&"
        },
        template: "<div><p>{{title1}} / {{title2}} / {{title3}}</p><div><br/><input type='button' ng-click='title4()' value='Change item4'/></div></div>"
    };

});



app.controller("Ctrl1",function($scope){
	$scope.name = "Harry";
    $scope.color = "#333333";
    $scope.reverseName = function(){
    $scope.name = $scope.name.split("").reverse().join("");
    };
    $scope.randomColor = function(){
        $scope.color = '#'+Math.floor(Math.random()*16777215).toString(16);
    };
});
app.directive("myDirective", function(){
    return {
        restrict: "EA",
        scope: false,   // use parent's scope
        template: "<div>Your name is : {{name}}</div>"+
        "Change your name : <input type='text' ng-model='name' />"
    };
});

app.directive("myDirectiveScope", function(){
    return {
        restrict: "EA",
        scope: true,	// Directive gets a new scope, here initially it will use parent's value(harry), but if u change value it will
        				// reflect in directive not in parent's model value
        templateNamespace: 'html',  // either html or svg or math
        template: "<div>Your name is : {{name}}</div>"+
        "Change your name : <input type='text' ng-model='name' />",
        compile: function compile(tElement, tAttrs, transclude) {
            return {
              pre: function preLink(scope, iElement, iAttrs, controller) { },
              post: function postLink(scope, iElement, iAttrs, controller) { }
            }
        },
        bindToController: false,
       /*When an isolate scope is used for a component (see above), and controllerAs is used, bindToController: true will allow a component to have
        its properties bound to the controller, rather than to scope.
        When the controller is instantiated, the initial values of the isolate scope bindings are already available.*/
       // require: 'myDirectiveIsolatedScope', // or // ['^parentDirectiveName', '?optionalDirectiveName', '?^optionalParent'],
        
        
    };
});

app.directive("myDirectiveIsolatedScope", function(){
    return {
        restrict: "EA",
        scope: {},		// Directive even not referencing the value of parent's scope (harry)
        templateNamespace: 'html',
        template: "<div>Your name is : {{name}}</div>"+
        "Change your name : <input type='text' ng-model='name'/>",
        link: function(scope, element, attributes){
        	 
        },
    };
});

app.directive("myDirectiveAllScope", function(){
    return {
        restrict: "EA",
        scope: {
            name: "@",
            color: "=",
            reverse: "&"
        },
        template: [
            "<div class='line'>",
            "Name : <strong>{{name}}</strong>;  Change name:<input type='text' ng-model='name' /><br/>",
            "</div><div class='line'>",
            "Color : <strong style='color:{{color}}'>{{color|uppercase}}</strong>;  Change color:<input type='text' ng-model='color' /><br/></div>",
            "<br/><input type='button' ng-click='reverse()' value='Reverse Name'/>"
        ].join("")    
    };
});


app.controller("AppCtrl", function ($scope) {
	  $scope.callHome = function (message) {
	    alert(message);
	  };
	});

app.directive("phone", function () {
	  return {
	    scope: {
	      dial: "&"
	    	  
	    },
	    template: "<input type='text' ng-model='value'>" +
	      "<div class='button' ng-click='dial({message:value})' style='border: 2px solid #efeddd; padding: 5px; bg-color: #ffeedd; width: 200px;'> on-hover:'bg-color:" +
	      "Call home! {{value}}</div>"
	  };
	});

app.controller("ngShowCtrl", function ($scope, $interval, $timeout) {
	  $scope.time = 0;
	  $scope.value=0;
	  $scope.startTimeout = function(){
		  $timeout(function(){
			  alert("Hello Pinging you... aah.")
		  }, 2000);
	  }
	  
	  $scope.startInterval = function(){
		  $interval(function(){
			  $scope.value++;
		  }, 2000, 5, ["Hi, "+$scope.value]);
	  }
	  
	});

app.directive("welcome", function() {
	return {
		  restrict: "E",
		  scope: {},
		  transclude: false,
		  template: "<div>This is the welcome component</div>"
		}
});

app.directive("welcomewithTransclude", function() {
	return {
		  restrict: "E",
		  scope: {},
		  transclude: true,
		  template: "<div>This is the welcome component</div><ng-transclude></ng-transclude>"
		}
});

app.controller("fusionChartController", function ($scope, $interval, $timeout) {
	$scope.myDataSource = {
		    chart: {
		        caption: "Harry's SuperMart",
		        subCaption: "Top 5 stores in last month by revenue",
		        numberPrefix: "$",
		        theme:"mySampleTheme"   /*"ocean"*/ 
		    },
		    data: [{
		        label: "Bakersfield Central",
		        value: "880000"
		    }, {
		        label: "Garden Groove harbour",
		        value: "730000"
		    }, {
		        label: "Los Angeles Topanga",
		        value: "590000"
		    }, {
		        label: "Compton-Rancho Dom",
		        value: "520000"
		    }, {
		        label: "Daly City Serramonte",
		        value: "1330000"
		    }]
		};
	  
	});


