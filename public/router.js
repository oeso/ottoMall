'use strict';

var otto = angular.module('ottomall', ['ngRoute']);

otto.config(['$routeProvider','$logProvider', function($routeProvider, $logProvider){
    $routeProvider
        .when('/', {templateUrl : 'index.html', controller : ''})
        .when('/main', {templateUrl : '/user/main/main.html', controller : 'mainCtrl'})
        .when('/list', {templateUrl : 'user/list/list.html', controller : 'listCtrl'})
        .when('/view', {templateUrl : 'user/view/view.html', controller : 'viewCtrl'})
        .when('/login', {templateUrl : 'user/login/login.html', controller : 'loginCtrl'})
        .otherwise({ redirectTo : 'user/error/error.html'})
}]);
