/**
 * Created by Administrator on 2015/12/25.
 */
'use strict'
var app=angular.module('app',['ngRoute']);
app.controller('WelcomeCtrl',function($scope){
    $scope.username='ben';
})
app.controller('step1Ctrl',function($scope){
    $scope.step='First';
})
app.controller('step2Ctrl',function($scope){
    $scope.step='Second';
})
app.controller('step3Ctrl',function($scope){
    $scope.step='Third';
})
app.controller('step4Ctrl',function($scope){
    $scope.step='Fourth';
})
app.config(['$routeProvider',,function($routeProvider){
    $routeProvider.when('/',{templateUrl:'/views/tpl/welcome.html',controller:'WelcomeCtrl'})
        .when('/step1',{templateUrl:'/views/tpl/step1.html',controller:'step1Ctrl'})
        .when('/step2',{templateUrl:'/views/tpl/step2.html',controller:'step2Ctrl'})
        .when('/step3',{templateUrl:'/views/tpl/step3.html',controller:'step3Ctrl'})
        .when('/step4',{templateUrl:'/views/tpl/step4.html',controller:'step4Ctrl'})
}])
