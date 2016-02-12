var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope, $http){

	$scope.price = 0;
	$scope.matPrice2 = "";
	$scope.matPrice4 = "";
	$scope.priceEmbroiderFront = 0;
	$scope.priceEmbroiderRear = "";
	$scope.priceShip = "";
	$scope.matColor = "";
	$scope.totalCost = 0;
	$scope.stripeTotal = 0;
	$scope.orderNumber = "";
	var price4 = 85;
	var price2 = 65;
	$scope.shipping = 15;
	var is = "is: ";
	var frontEmbroidery = 0;
	var rearEmbroidery = 0;
	var isSelected = false;


	$scope.selectMat = function(numMats){
		id="select-mats-img2"
		if(numMats == 4){
			$scope.matTwo = false;
			$scope.matFour = true;
			$scope.matOptionMessage = "is 4pc set";
			$scope.baseMatOption = "4pc set";
			$scope.price = price4;
			$scope.matPrice4 = "$" + $scope.price;
			$scope.matPrice2 = "";
			$scope.matPrice = price4;
			calcTotal(price4);
			console.log("ng-click works");
		}else if(numMats == 2){
			$scope.matFour = false;
			$scope.matTwo = true;
			$scope.matOptionMessage = "is 2pc set";
			$scope.baseMatOption = "2pc set";
			$scope.price = price2;
			$scope.matPrice2 = "$" + $scope.price;
			$scope.matPrice4 = "";
			$scope.matPrice = price2;
			calcTotal(price2);
			console.log("ng-click works");
			
		}else{
			$scope.matOptionMessage = "";
			$scope.baseMatOption = "";
			$scope.priceShip = 0;
			$scope.matPrice = "";
			$scope.matPrice2 = "";
			$scope.matPrice4 = "";
			$scope.totalCost = 0;

		};
	};

	function calcTotal(cost){
		$scope.totalCost = ($scope.price + $scope.priceEmbroiderFront + rearEmbroidery + $scope.shipping);
		$scope.stripeTotal = $scope.totalCost * 100;
		$scope.shownTotalCost = "$ " + $scope.totalCost;
		$scope.priceShip = " $" + $scope.shipping;
	};

	$scope.setColor = function(matColor){
		$scope.setCarpetColor = is + matColor;
		$scope.matColor = matColor;
	};

	$scope.setThreadColor = function(threadColor){
		$scope.messageThreadColor = "";
		if($scope.thread == "galant"){
			$scope.setGalantThreadColor = is + threadColor;
			$scope.galantThreadColor = threadColor;
		}else if($scope.thread == "background"){
			$scope.setBackgroundThreadColor = is + threadColor;
			$scope.backgroundThreadColor = threadColor;
		}else if($scope.thread == "vr4"){
			$scope.setVr4ThreadColor = is + threadColor;
			$scope.vr4ThreadColor = threadColor;
		}else if($scope.thread == "carNumber"){
			$scope.setCarNumberThreadColor = is + threadColor;
			$scope.carNumberThreadColor = threadColor;
		}else{
			$scope.messageThreadColor = "Please select a button to apply your embroidery color.";
		}

		$scope.threadColor = threadColor;
	};

	$scope.setStyle = function(style){
		$scope.optionStyle = style;
		$scope.setOptionStyle = is + style;
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




}); 

























