app.factory('Side', [function() {
	
	//constructor
	var Side = function(position, width, depth, height, color, pattern, flex) {
		this.position = position;
		this.width = width;
		this.depth = depth;
		this.height = height;
		this.color = color;
		this.pattern = pattern;
		this.flex = flex;
		
		this.style = this.style(this.position);
	}
	
	//public methods
	Side.prototype = {
		
		style: function(position) {
			
			var style = {
				color: this.color
				//style.webkitTransform = 'rotateY(0deg) translate3d()';
			}
			
			switch(position) {
				case 0: 
					style.webkitTransform = 'rotateY(0deg) translate3d(0, 0, ' + this.depth/2 + 'px)';
					break;
			}
			
			if(!this.flex) {
				
				
				
			}
			
			/*
			//front
			&:nth-child(1) {
				transform:  translateZ();
				//background: lighten(@color, 10%);
			}
			
			//back
			&:nth-child(2) {
				transform: rotateX(-180deg) rotateZ(180deg) translateZ(this.depth/2);
				//background: lighten(@color, 10%);
			}
			
			//right
			&:nth-child(3) {
				left: (this.width - this.depth)/2;
				transform: rotateY(90deg) translateZ(this.width/2);
				//background: darken(@color, 10%);
			}
			
			//left
			&:nth-child(4) { 
				left: (this.width - this.depth)/2;
				transform: rotateY(-90deg) translateZ(this.width/2);
				//background: darken(@color, 10%);
			}
			
			//top
			&:nth-child(5) { 
				top: (this.height - this.depth)/2;
				height: this.depth;
				transform: rotateX(90deg) translateZ(this.height/2);
			}
			
			//bottom
			&:nth-child(6) {
				bottom: (this.height - this.depth)/2;
				height: this.depth;
				transform: rotateX(-90deg) translateZ(this.height/2);
			}
			*/
			
			return style;
		}
		
	}
	
	return Side;
	
}]);