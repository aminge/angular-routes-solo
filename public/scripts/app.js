var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/harry', {
            templateUrl: '/views/templates/harry.html',
            controller: 'HarryController'
        })
        .when('/storm', {
            templateUrl: '/views/templates/storm.html',
            controller: 'StormController'
        })
        .when('/samus', {
            templateUrl: '/views/templates/samus.html',
            controller: 'SamusController'
        })
        .otherwise({
            redirectTo: 'harry'
        });
}]);