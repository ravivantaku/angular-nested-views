angular.module("shopping-cart", ["ui.router"])
        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("home");
            $stateProvider.state("home", {
                url: "/home",
                templateUrl: "home.html" 
            }) .state("home.list", {
                url: "/list",
                templateUrl: "home-list.html",
                controller: "ListController"
            }).state("home.anotherlist", {
                url: "/anotherlist",
                templateUrl: "home-anotherlist.html",
                controller: "AboutController"
            })  
            .state("home.anotherlist.child", {
                templateUrl: "anotherlist-child.html",
                controller:function($scope){
                    $scope.child = "This is child view of another list view"
                }
            }).state("about", {
                url: "/about",
                views: {
                    "": {templateUrl: "about.html"},
                    "viewOne@about":{
                        templateUrl: "about-viewOne.html",
                        controller: "AboutController"
                    },
                    "viewTwo@about": {
                        templateUrl: "about-viewTwo.html",
                        controller: "ListController"
                    }
                }
            });
            
        });
        
angular.module("shopping-cart")
        .controller("AboutController", function($scope){
            $scope.name = "Angular ui-router";
        });
angular.module("shopping-cart")
        .controller("ListController", function($scope){
            $scope.employees =  [{name: "employee1", id: 100, sal: 20000, dep: "IME"},
  {name: "js", id: 101, sal: 30000, dep: "IME"},
  {name: "scala", id: 102, sal: 20000, dep: "DEP"},
  {name: "html", id: 103, sal: 40000, dep: "IME"},
  {name: "employee5", id: 104, sal: 10000, dep: "IME"},
  {name: "java", id: 105, sal: 30000, dep: "DEP"},
  {name: "C#", id: 106, sal: 40000, dep: "IME"}]; 
        });

