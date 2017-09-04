;'use strict';

var otto = angular.module('ottomall', []);

otto.config(function($routeProvider){
    $routeProvider
        .when('/', {templateUrl : 'index.html'})
        .when('/main', {templateUrl : '../../main.html'})
        .when('/list', {templateUrl : 'list.html'})
        .when('/view', {templateUrl : 'view.html'})
        .when('/login', {templateUrl : 'login.html'})
        
        .otherwise({ redirectTo : '/error.html'})
});

otto.controller('main', function($scope){
    $scope.titles = "main title";
});

otto.controller('list', function($scope){
    $scope.titles = "list title";
});

otto.controller('view', function($scope){
    $scope.titles = "view title";
});

otto.controller('login', function($scope){
    $scope.titles = "login title";
});

console.log('ottomall js');