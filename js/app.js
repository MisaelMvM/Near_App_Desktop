var myApp = angular.module("nearBot", ['ngMaterial', 'ngAnimate', 'ngMessages', 'ngAria']);

myApp.controller('chatCtrl', ["$scope", function($scope) {
	$scope.botFace = "assets/img/Maya.jpg";
}]);

