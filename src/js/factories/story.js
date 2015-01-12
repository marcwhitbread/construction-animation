app.factory('Story', [function() {
	
	//constructor
	var Story = function(level, indent, height, railing_height, floor_height, pillar_indent, floors, basement_floors, structure) {
		this.level = level;
		this.indent = indent,
		this.height = height;
		this.railing_height = railing_height;
		this.floor_height = floor_height;
		this.pillar_indent = pillar_indent;
		this.floors = floors;
		this.basement_floors = basement_floors;
		this.structure = structure;
	
		this.style = this.set_style('def');
	}
	
	//public methods
	Story.prototype = {
		
		is_ground: function() {
			return (this.level == this.basement_floors) ? true : false;
		},
		
		is_underground: function() {
			return (this.level < this.basement_floors) ? true : false;
		},
		
		is_roof: function() {
			return (this.level == this.floors-1) ? true : false;
		},
		
		set_style: function(style) {
			switch(style) {
				case 'def':
					return {
						base: {					
							width: (this.structure.width - this.indent*2) + 'px',
							height: this.height + this.floor_height + 'px',
							'-webkit-transform': 'translate3d(' + this.indent + 'px, ' + (-this.level * (this.height + this.floor_height) + (this.structure.basement_floors-1) * (this.height + this.floor_height)) + 'px, 0)'
						},
						wall: {
							width: (this.structure.width - this.indent*2 - this.structure.fence_indent*2) + 'px',
							height: this.height/2 + 'px',
							'-webkit-transform': 'translate3d(' + this.structure.fence_indent + 'px, ' + -this.floor_height + 'px, 0)'
						},
						floor: {
							width: (this.structure.width - this.indent*2) + 'px',
							height: this.floor_height + 'px',
							'-webkit-transform': 'translate3d(0, 0, 0)'
						},
						girder: [{
							width: (this.structure.width - this.indent*2 - this.structure.story_pillar_indent*2 - this.structure.pillar_p2_width + this.structure.steel_width) + 'px',
							height: this.floor_height + 'px',
							'-webkit-transform': 'translate3d(' + (this.pillar_indent + (this.structure.pillar_p2_width - this.structure.steel_width)/2) + 'px, 0, ' + (-this.structure.width/2 + this.indent + this.structure.pillar_p2_width/2 + this.pillar_indent) + 'px)'
						}, {
							width: (this.structure.width - this.indent*2 - this.structure.story_pillar_indent*2 - this.structure.pillar_p2_width + this.structure.steel_width) + 'px',
							height: this.floor_height + 'px',
							'-webkit-transform': 'translate3d(' + (this.pillar_indent + (this.structure.pillar_p2_width - this.structure.steel_width)/2) + 'px, 0, ' + (this.structure.width/2 - this.indent - this.structure.pillar_p2_width/2 - this.pillar_indent) + 'px)'
						}, {
							width: this.structure.steel_width + 'px',
							height: this.floor_height + 'px',
							'-webkit-transform': 'translate3d(' + this.indent + 'px, 0, 0)'
						}, {
							width: this.structure.steel_width + 'px',
							height: this.floor_height + 'px',
							'-webkit-transform': 'translate3d(' + (this.structure.width - this.indent*2 - this.structure.pillar_p2_width/2 - this.pillar_indent - this.structure.steel_width/2) + 'px, 0, 0)'
						}],
						pillar: [{
							width: this.structure.steel_width + 'px',
							height: '0px'
						},{
							width: this.structure.steel_width + 'px',
							height: '0px'
						},{
							width: this.structure.steel_width + 'px',
							height: '0px'
						},{
							width: this.structure.steel_width + 'px',
							height: '0px'
						}]
					}
			}
		}
		
	}
	
	return Story;
	
}]);

/*

*/