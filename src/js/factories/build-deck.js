app.factory('BuildDeck', [function() {
	
	//constructor
	var BuildDeck = function(id, panel_unindent, height, wrap_indent, wrap_floors, story, structure) {
		this.id = id;
		this.panel_unindent = panel_unindent;
		this.height = height;
		this.wrap_indent = wrap_indent;
		this.wrap_floors = wrap_floors;
		this.story = story;
		this.structure = structure;
		
		this.style = this.style();
	}
	
	//public methods
	BuildDeck.prototype = {
		
		wrap_height: function() {
			return this.wrap_floors * (this.story.height + this.story.floor_height);
		},
		
		panel_height: function() {
			return (this.story.height + this.story.floor_height)*1.5;
		},
		
		style: function() {
			
			var style = {
				base: {
					width: this.structure.width + 'px',
					height: this.height + 'px',
					webkitTransform: 'translate3d(0, ' + (-this.panel_height()/2 - this.structure.plot.height/2 - 100) + 'px, 0)'
				},
				panel: {
					width: this.structure.width + 'px',
					height: this.panel_height() + 'px',
					webkitTransform: 'translate3d(0, ' + (-(this.height - this.panel_height())/2 - this.height + this.panel_height()/2) + 'px, 0)'
				},
				sheet: {					
					width: this.structure.width - this.wrap_indent*2 + 'px',
					height: this.wrap_height() + 'px',
					maxHeight: this.wrap_height() + 'px',
					webkitTransform: 'translate3d(' + this.wrap_indent + 'px, ' + (-this.height/2 + this.panel_height()/2) + 'px, 0)'
				}
			}
			
			return style;
			
		}
		
	}
	
	return BuildDeck;
	
}]);