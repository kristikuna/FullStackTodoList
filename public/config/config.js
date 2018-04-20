(function() {

  angular.module("App")
    .config(function($routeProvider){
      $routeProvider
        .when("/taskForm",{
          template:"<task-form></task-form>"
        })
        .when("/welcomeForm",{
          template:"<welcome-form></welcome-form>"
        })
        .otherwise({
          template:"<welcome-form></welcome-form>"
        });
    });

}());
