var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope, $http){

	$scope.price4 = 85;
	$scope.price2 = 65;

	$scope.selectMat = function(numMats){
		id="select-mats-img2"
		if(numMats == 4){
			ng-value = "true";
			$scope.baseMatOption = "is 4pc set = $" + $scope.price4;
		}else if(numMats == 2){
			$scope.baseMatOption = "is 2pc set = $" + $scope.price2;
		}else{
			$scope.baseMatOption = "";
		};

		// $scope.baseMatOption = numMats;  
		// Instead of numMats, add if statement to say 
		// "if numMats = 4... add string of HTML..."
		//if numMats = 0, clear out the 
	};

	$scope.addColor = function(matColor){
		$scope.matColorOption = "selection is " + matColor;

	};

}); 