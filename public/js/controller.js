var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope, $http){

	$scope.selectMat = function(numMats){
		$scope.baseMatOption = numMats;  // Instead of numMats, add if statement to say 
		// "if numMats = 4... add string of HTML..."
	};


	

});