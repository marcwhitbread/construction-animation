app.factory('Plot', [function() {
	
	//constructor
	var Plot = function(width, depth, height, pallet) {
		this.width = width;
		this.depth = depth;
		this.height = height;
		this.pallet = pallet;
	}
	
	//public methods
	Plot.prototype = {
		
		style: function() {
			return {
				width: this.width + 'px',
				height: this.height + 'px'
			}
		}
		
	}
	
	return Plot;
	
}]);