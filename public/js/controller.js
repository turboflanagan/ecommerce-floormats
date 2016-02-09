var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope, $http){

	$scope.price4 = 85;
	$scope.price2 = 65;
	$scope.priceEmbroiderFront = "";
	$scope.priceEmbroiderRear = "";
	$scope.priceShip;
	$scope.matColor = "";
	$scope.totalCost = 0;
	var shipping = 12;
	var is = "is: ";
	var frontEmbroidery = 30;
	var rearEmbroidery = 10;

	$scope.selectMat = function(numMats){
		id="select-mats-img2"
		if(numMats == 4){
			$scope.matTwo = false;
			$scope.matFour = true;
			$scope.baseMatOption = "is 4pc set = $" + $scope.price4;
			$scope.priceShip = "$" + shipping;
			calcTotal($scope.price4, shipping, frontEmbroidery, null);
			$(this).css("border", "3px solid yellow");
		}else if(numMats == 2){
			$scope.matFour = false;
			$scope.matTwo = true;
			$scope.baseMatOption = "is 2pc set = $" + $scope.price2;
			$scope.priceShip = "$" + shipping;
			calcTotal($scope.price2, shipping, frontEmbroidery, null);
			
		}else{
			$scope.baseMatOption = "";
			$scope.priceShip = "";

		};
	};

	function calcTotal(matCost, shipping, priceEmbroiderFront, priceEmbroiderRear){
		//Get matCost
		$scope.matCost = 0;
		if($scope.matTwo){
			$scope.matCost = $scope.price2 + shipping + frontEmbroidery;
			$scope.totalCost = $scope.matCost;
		}else if($scope.matFour){
			$scope.matCost = $scope.price4 + shipping + frontEmbroidery + rearEmbroidery;
			$scope.totalCost = $scope.matCost;
		}
	};




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

		console.log($scope.thread);
	};

	$scope.setStyle = function(style){
		$scope.optionStyle = is + style;
		$scope.priceEmbroiderFront = frontEmbroidery;
		$scope.styleCost = " $" + $scope.priceEmbroiderFront;
	};

	$scope.addCarNumber = function(){
		if($scope.carNumberNone){
			$scope.addedCarNumber = 'None';
			$scope.priceEmbroiderRear = 0;
		}else{
			$scope.addedCarNumber = $scope.carNumber;
			$scope.priceEmbroiderRear = rearEmbroidery;
		}
		event.preventDefault();
	}


	


	// $scope.bindThreadColor = function(galant, badge, vr4){
	// 	if(#galant-button){
			
	// 	}
	// }



		
	



}); 

























