var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope, $http){

	$scope.price4 = 85;
	$scope.price2 = 65;
	$scope.priceEmbroiderFront = 30;
	$scope.priceEmbroiderRear = 10;
	$scope.priceShip = 12;
	$scope.matColor = "";
	$scope.totalCost = ""

	$scope.selectMat = function(numMats){
		id="select-mats-img2"
		if(numMats == 4){
			$scope.matTwo = "false";
			$scope.baseMatOption = "is 4pc set = $" + $scope.price4;
		}else if(numMats == 2){
			$scope.matFour = "false";
			$scope.baseMatOption = "is 2pc set = $" + $scope.price2;
		}else{
			$scope.baseMatOption = "";
		};
		calcTotal();
	};

	// $scope.addColor = function(setMatColor){
	// 	$scope.matColorOption = "selection is " + matColor;

	// };


	$scope.setColor = function(matColor){
		$scope.colorIs = "is: ";
		$scope.matColor = matColor;
		// console.log(matColor);
	};

	$scope.setStyle = function(style){
		$scope.styleIs = "is: ";
		$scope.optionStyle = style;
		$scope.styleCost = " $" + $scope.priceEmbroiderFront;
		calcTotal();		
	};

	// $scope.calcTotal = function(){
	// 	$scope.totalCost = "$" + $scope.baseMatOption+$scope.priceEmbroiderFront;
	// }

	function calcTotal(){
		
		$scope.totalCost = $scope.price4 + $scope.priceEmbroiderFront + $scope.priceShip;
	}


console.log($scope.totalCost);
}); 






























