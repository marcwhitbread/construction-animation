app.controller('PlotCtrl', ['$scope', 'Plot', 'Pallet', function($scope, Plot, Pallet) {
	
	var data = {
		width: 140,
		depth: 140,
		height: 2,
		colors: {
			dirt: '#6d574c'
		}
	}
	
	var pallet = new Pallet(data.colors.dirt);
	
	$scope.shape = {
		sides: [1,2,3,4,5,6]
	}
	$scope.plot = new Plot(data.width, data.depth, data.height, pallet);
	
}]);