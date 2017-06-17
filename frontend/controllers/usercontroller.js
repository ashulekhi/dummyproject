angular.module('dummyproject') //angular ka module

.controller('userController' , function($scope,$http){

$scope.showLoader = false;


$scope.signUp = function(){
	$scope.showLoader = true;
	$http({
		method:'POST',
		url:'/signUp',
		params:{
			username : $scope.uname,
			password : $scope.upassword
		}
	})
	.then(function(response){
     $scope.showLoader = false;
	})
}




})