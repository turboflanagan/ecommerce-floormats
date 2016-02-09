var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope, $http){

	$scope.price = 0;
	$scope.matPrice = "";
	$scope.priceEmbroiderFront = 0;
	$scope.priceEmbroiderRear = 0;
	$scope.priceShip = 0;
	$scope.matColor = "";
	$scope.totalCost = 0;
	var price4 = 85;
	var price2 = 65;
	var shipping = 15;
	var is = "is: ";
	var frontEmbroidery = 0;
	var rearEmbroidery = 0;

	$scope.selectMat = function(numMats){
		id="select-mats-img2"
		if(numMats == 4){
			$scope.matTwo = false;
			$scope.matFour = true;
			$scope.baseMatOption = "is 4pc set";
			$scope.price = price4;
			$scope.matPrice = "$" + $scope.price;
			calcTotal(price4);
		}else if(numMats == 2){
			$scope.matFour = false;
			$scope.matTwo = true;
			$scope.baseMatOption = "is 2pc set";
			$scope.price = price2;
			$scope.matPrice = "$" + $scope.price;
			calcTotal(price2);
			
		}else{
			$scope.baseMatOption = "";
			$scope.priceShip = 0;
			$scope.matPrice = "";
			$scope.totalCost = 0;

		};
	};

	function calcTotal(cost){
		$scope.totalCost =  $scope.price + 	$scope.priceEmbroiderFront + rearEmbroidery + shipping;
		$scope.priceShip = "$" + shipping;
	};








		// //Get matCost
		// $scope.matCost = 0;
		// if($scope.matTwo){
		// 	$scope.matCost = $scope.price2 + shipping;
		// 	$scope.totalCost = $scope.matCost;
		// }else if($scope.matFour){
		// 	$scope.matCost = $scope.price4 + shipping;
		// 	$scope.totalCost = $scope.matCost;
		// }





	$scope.setColor = function(matColor){
		$scope.matColor = is + matColor;
	};

	$scope.setThreadColor = function(threadColor){
		$scope.messageThreadColor = "";
		if($scope.thread == "galant"){
			$scope.galantThreadColor = is + threadColor;
		}else if($scope.thread == "background"){
			$scope.backgroundThreadColor = is + threadColor;
		}else if($scope.thread == "vr4"){
			$scope.vr4ThreadColor = is + threadColor;
		}else if($scope.thread == "carNumber"){
			$scope.carNumberThreadColor = is + threadColor;
		}else{
			$scope.messageThreadColor = "Please select a button to apply your embroidery color.";
		}

		$scope.threadColor = is + threadColor;
	};

	$scope.setStyle = function(style){
		$scope.optionStyle = is + style;
		frontEmbroidery = 25;
		$scope.priceEmbroiderFront = frontEmbroidery;
		$scope.styleCost = " $" + $scope.priceEmbroiderFront;
		calcTotal(frontEmbroidery);
	};

	$scope.addCarNumber = function(){
		if($scope.carNumberNone){
			$scope.addedCarNumber = 'None';
			$scope.priceEmbroiderRear = "";
			rearEmbroidery = 0;
			calcTotal(rearEmbroidery);
		}else{
			$scope.addedCarNumber = $scope.carNumber;
			rearEmbroidery = 10;
			$scope.priceEmbroiderRear = "$" + rearEmbroidery;
			calcTotal(rearEmbroidery);
		}
		event.preventDefault();
	}


	


	// $scope.bindThreadColor = function(galant, badge, vr4){
	// 	if(#galant-button){
			
	// 	}
	// }



		
	



}); 

























