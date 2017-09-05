'use strict';

var otto = angular.module('ottomall', []);

otto.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {templateUrl : 'index.html'})
        .when('/main', {templateUrl : './main/main.html'})
        .when('/list', {templateUrl : 'list/list.html'})
        .when('/view', {templateUrl : 'view/view.html'})
        .when('/login', {templateUrl : 'login/login.html'})

        .otherwise({ redirectTo : '/error.html'})
}]);
