app.controller('homeController', ['$scope', '$http', 'Cart', function($scope, $http, Cart){
  $http.get('teas.json').then(function(response){
    $scope.teaData = response.data
  })

  $scope.quantity = 1;

  $scope.addToCart = function(obj, quantity) {
  	Cart.shoppingCart.push({tea: obj, amount: quantity})
  	$scope.teasInCart = Cart.shoppingCart.length;
  }


  $scope.caffeineAmount = function(tea){
  	console.log("is this running?")
  	$scope.caffeine = tea.caffeineScale
  		setInterval(function() {
  			$('.gauge--3 .semi-circle--mask').attr({
    			style: '-webkit-transform: rotate(' + $scope.caffeine + 'deg);' +
    			'-moz-transform: rotate(' + $scope.caffeine + 'deg);' +
    		'	transform: rotate(' + $scope.caffeine	 + 'deg);'
   			});				
			}, 1000);
  }


}])
	.directive('caffeinemeter', function(){
		return {
			templateUrl: 'partials/caffeinemeter.html',
			scope: {
				caffeine: '=caffeinemg'
			}
		}

	})


app.controller('cartController', ['$scope', 'Cart', function($scope, Cart){
	$scope.shoppingCart = Cart.shoppingCart;

	$scope.editCart = function(){
		$scope.edit = true;
	}

	$scope.removeFromCart = function(teaObj){
		var name = teaObj.tea.name;
		var removeIndex = Cart.shoppingCart.map(function(obj) {return obj['tea'].name}).indexOf(teaObj['tea'].name)
    Cart.shoppingCart.splice(removeIndex, 1)
  }

}])
