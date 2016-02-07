var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope, $http){

	$scope.price4 = 85;
	$scope.price2 = 65;
	$scope.priceEmbroiderFront = 30;
	$scope.priceEmbroiderRear = 10;
	$scope.priceShip;
	$scope.matColor = "";
	$scope.totalCost = 0;
	var shipping = 12;
	var is = "is: ";

	$scope.selectMat = function(numMats){
		id="select-mats-img2"
		if(numMats == 4){
			$scope.matTwo = false;
			$scope.matFour = true;
			$scope.baseMatOption = "is 4pc set = $" + $scope.price4;
			$scope.priceShip = "$" + shipping;
			calcTotal($scope.price4, shipping, null, null);
			$(this).css("border", "3px solid yellow");
		}else if(numMats == 2){
			$scope.matFour = false;
			$scope.matTwo = true;
			$scope.baseMatOption = "is 2pc set = $" + $scope.price2;
			$scope.priceShip = "$" + shipping;
			calcTotal($scope.price2, shipping, null, null);
			
		}else{
			$scope.baseMatOption = "";
			$scope.priceShip = "";

		};
		calcTotal();
	};

	// $scope.addColor = function(setMatColor){
	// 	$scope.matColorOption = "selection is " + matColor;

	// };


	$scope.setColor = function(matColor){
		$scope.matColor = is + matColor;
	};

	$scope.setThreadColor = function(threadColor){
		$scope.threadColor = is + threadColor;
	};

	$scope.setStyle = function(style){
		$scope.optionStyle = is + style;
		$scope.styleCost = " $" + $scope.priceEmbroiderFront;
		calcTotal();		
	};

	// $scope.calcTotal = function(){
	// 	$scope.totalCost = "$" + $scope.baseMatOption+$scope.priceEmbroiderFront;
	// }

	function calcTotal(matCost, shipping, priceEmbroiderFront, priceEmbroiderRear){
		//Get matCost
		var matCost = 0;
		if($scope.matTwo){
			matCost = $scope.price2 + shipping + priceEmbroiderFront + priceEmbroiderRear;
			$scope.totalCost = matCost;
			console.log($scope.totalCost);
		// 	matCost = $scope.price2;
		// 	$scope.totalCost = matCost + 
		// }else if($scope.matFour){
		// 	matCost = $scope.price4;
		// }

		// $scope.totalCost = matCost + $scope.priceEmbroiderFront + $scope.priceEmbroiderRear + $scope.priceShip;
		}
	};


	// $scope.bindThreadColor = function(galant, badge, vr4){
	// 	if(#galant-button){
			
	// 	}
	// }


	// $scope.setActive = function(){
	// 	$(".carpet-sprite").click(function(){
	// 		if($(this).hasClass('active')){
	// 			$(".carpet-sprite").removeClass('active');
	// 		}else{
	// 			$(this).addClass("active");
	// 		}

	// 	})
	// 	console.log("setting active");
	// };

		
	



}); 

























