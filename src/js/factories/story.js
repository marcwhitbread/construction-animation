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
	
		this.style = this.set_style(2);
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
		
		set_style: function(level) {

			var style = {
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
					height: '0',
					'-webkit-transform': 'translate3d(' + (this.pillar_indent + (this.structure.pillar_p2_width - this.structure.steel_width)/2) + 'px, ' + -this.floor_height + 'px, ' + (-this.structure.width/2 + this.indent + this.structure.pillar_p2_width/2 + this.structure.story_pillar_indent) + 'px)'
				},{
					width: this.structure.steel_width + 'px',
					height: '0',
					'-webkit-transform': 'translate3d(' + (this.pillar_indent + (this.structure.pillar_p2_width - this.structure.steel_width)/2) + 'px, ' + -this.floor_height + 'px, ' + (this.structure.width/2 - this.indent - this.structure.pillar_p2_width/2 - this.structure.story_pillar_indent) + 'px)'
				},{
					width: this.structure.steel_width + 'px',
					height: '0',
					'-webkit-transform': 'translate3d(' + (this.structure.width - this.indent*2 - this.structure.pillar_p2_width - this.pillar_indent + (this.structure.pillar_p2_width - this.structure.steel_width)/2) + 'px, ' + -this.floor_height + 'px, ' + (-this.structure.width/2 + this.indent + this.structure.pillar_p2_width/2 + this.pillar_indent) + 'px)'
				},{
					width: this.structure.steel_width + 'px',
					height: '0',
					'-webkit-transform': 'translate3d(' + (this.structure.width - this.indent*2 - this.structure.pillar_p2_width - this.pillar_indent + (this.structure.pillar_p2_width - this.structure.steel_width)/2) + 'px, ' + -this.floor_height + 'px, ' + (this.structure.width/2 - this.indent - this.structure.pillar_p2_width/2 - this.pillar_indent) + 'px)'
				}]
			}
			
			if(this.is_underground() || this.is_ground()) {
				style.floor.width = (this.structure.width - this.indent) + 'px';
				style.floor.webkitTransform = 'translate3d(' + -this.indent/2 + 'px, 0, 0)';
			}
			
			if(this.is_underground()) {
				style.wall.width = (this.structure.width - this.indent/2) + 'px';
				style.wall.webkitTransform = 'translate3d(' + -this.indent/2 + 'px, ' + -this.floor_height + 'px, 0)'
			}
			
			if(level == 1) {
				style.pillar[0].height = this.height + 'px';
				style.pillar[1].height = this.height + 'px';
				style.pillar[2].height = this.height + 'px';
				style.pillar[3].height = this.height + 'px';
				
				if(this.is_roof()) {
					style.pillar[0].height = (this.structure.roof_height - this.floor_height) + 'px';
					style.pillar[1].height = (this.structure.roof_height - this.floor_height) + 'px';
					style.pillar[2].height = (this.structure.roof_height - this.floor_height) + 'px';
					style.pillar[3].height = (this.structure.roof_height - this.floor_height) + 'px';
				}
			}
			
			if(level == 2) {
				style.pillar[0].width = this.structure.pillar_p2_width + 'px';
				style.pillar[0].height = this.height + 'px';
				style.pillar[0].webkitTransform = 'translate3d(' + this.pillar_indent + 'px, ' + -this.floor_height + 'px, ' + (-this.structure.width/2 + this.indent + this.structure.pillar_p2_width/2 + this.pillar_indent) + 'px)';
				
				style.pillar[1].width = this.structure.pillar_p2_width + 'px';
				style.pillar[1].height = this.height + 'px';
				style.pillar[1].webkitTransform = 'translate3d(' + this.pillar_indent + 'px, ' + -this.floor_height + 'px, ' + (this.structure.width/2 - this.indent - this.structure.pillar_p2_width/2 - this.pillar_indent) + 'px)';
				
				style.pillar[2].width = this.structure.pillar_p2_width + 'px';
				style.pillar[2].height = this.height + 'px';
				style.pillar[2].webkitTransform = 'translate3d(' + (this.structure.width - this.indent*2 - this.structure.pillar_p2_width - this.pillar_indent) + 'px, ' + -this.floor_height + 'px, ' + (-this.structure.width/2 + this.indent + this.structure.pillar_p2_width/2 + this.pillar_indent) + 'px)';
				
				style.pillar[3].width = this.structure.pillar_p2_width + 'px';
				style.pillar[3].height = this.height + 'px';
				style.pillar[3].webkitTransform = 'translate3d(' + (this.structure.width - this.indent*2 - this.structure.pillar_p2_width - this.pillar_indent) + 'px, ' + -this.floor_height + 'px, ' + (this.structure.width/2 - this.indent - this.structure.pillar_p2_width/2 - this.pillar_indent) + 'px)';
				
				if(this.is_roof()) {
					style.wall.width = (this.structure.width - this.indent*2) + 'px';
					style.wall.height = this.structure.roof_height - this.floor_height + 'px';
					style.wall.webkitTransform = 'translate3d(0, ' + -this.floor_height + 'px, 0)';
					
					style.pillar[0].height = this.structure.roof_height - this.floor_height + 'px';
					style.pillar[1].height = this.structure.roof_height - this.floor_height + 'px';
					style.pillar[2].height = this.structure.roof_height - this.floor_height + 'px';
					style.pillar[3].height = this.structure.roof_height - this.floor_height + 'px';
				}
			}
			
			if(level == 3) {
				style.wall.width = (this.structure.width - this.indent*2) + 'px';
				style.wall.height = this.height + 'px';
				style.wall.webkitTransform = 'translate3d(0, ' + -this.floor_height + 'px, 0)';
				
				style.floor.width = (this.structure.width - this.indent*2) + 'px';
				style.floor.height = this.floor_height + 'px';
				
				style.pillar[0].width = this.structure.pillar_p2_width + 'px';
				style.pillar[0].webkitTransform = 'translate3d(' + this.pillar_indent + 'px, ' + -this.floor_height + 'px, ' + (-this.structure.width/2 + this.indent + this.structure.pillar_p2_width/2 + this.pillar_indent) + 'px)';
				
				style.pillar[1].width = this.structure.pillar_p2_width + 'px';
				style.pillar[1].webkitTransform = 'translate3d(' + this.pillar_indent + 'px, ' + -this.floor_height + 'px, ' + (this.structure.width/2 - this.indent - this.structure.pillar_p2_width/2 - this.pillar_indent) + 'px)';
				
				style.pillar[2].width = this.structure.pillar_p2_width + 'px';
				style.pillar[2].webkitTransform = 'translate3d(' + (this.structure.width - this.indent*2 - this.structure.pillar_p2_width - this.pillar_indent) + 'px, ' + -this.floor_height + 'px, ' + (-this.structure.width/2 + this.indent + this.structure.pillar_p2_width/2 + this.pillar_indent) + 'px)';
				
				style.pillar[3].width = this.structure.pillar_p2_width + 'px';
				style.pillar[3].webkitTransform = 'translate3d(' + (this.structure.width - this.indent*2 - this.structure.pillar_p2_width - this.pillar_indent) + 'px, ' + -this.floor_height + 'px, ' + (this.structure.width/2 - this.indent - this.structure.pillar_p2_width/2 - this.pillar_indent) + 'px)';
				
				if(this.is_roof()) {
					style.wall.height = this.structure.roof_height - this.floor_height + 'px';	
				}
				
				if(this.is_underground() || this.is_ground()) {
					style.floor.width = this.structure.width - this.indent + 'px';
					style.floor.webkitTransform = 'translate3d(' + -this.indent/2 + 'px, 0, 0)';
				}
				
				if(this.is_underground()) {
					style.wall.width = this.structure.width - this.indent + 'px';
					style.wall.height = this.height/2 + 'px';
					style.wall.webkitTransform = 'translate3d(' + -this.indent/2 + 'px, ' + -this.floor_height + 'px, 0)';
				}
			}
			
			console.log(style.pillar[0]);
			
			return style;
		}
		
	}
	
	return Story;
	
}]);