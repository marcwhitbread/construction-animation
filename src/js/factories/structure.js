app.factory('Structure', [function() {
	
	//constructor
	var Structure = function(floors, basement_floors, width, depth, roof_height, base_indent, build_panel_unindent, build_deck_height, wrap_1_height, wrap_2_floors, wrap_indent, steel_width, fence_indent, pillar_p2_width, story_indent, story_height, story_railing_height, story_floor_height, story_pillar_indent, plot) {
		this.floors = floors;
		this.basement_floors = basement_floors;
		this.width = width;
		this.depth = depth;
		this.roof_height = roof_height;
		this.base_indent = base_indent;
		this.build_panel_unindent = build_panel_unindent;
		this.build_deck_height = build_deck_height;
		this.wrap_1_height = wrap_1_height;
		this.wrap_2_floors = wrap_2_floors;
		this.wrap_indent = wrap_indent;
		this.steel_width = steel_width;
		this.fence_indent = fence_indent;
		this.pillar_p2_width = pillar_p2_width;
		this.story_indent = story_indent;
		this.story_height = story_height;
		this.story_railing_height = story_railing_height;
		this.story_floor_height = story_floor_height;
		this.story_pillar_indent = story_pillar_indent;
		this.plot = plot;
	}
	
	//public methods
	Structure.prototype = {
		
		height: function() {
			return (this.floors * (this.story_height + this.story_floor_height)) + 5;
		},
		
		build_deck_panel_1_height: function() { 
			return (this.story_height + this.story_floor_height)*1.5;
		},
		
		build_deck_panel_2_height: function() {
			return (this.story_height + this.story_floor_height)*1.5;
		},
		
		wrap_2_height: function() {
			return this.wrap_2_floors * (this.story_height + this.story_floor_height);
		},
		
		style_base: function() {
			return {
				width: this.width + 'px',
				'-webkit-transform': 'translate3d(' + (this.plot.width - this.width)/2 + 'px, -2px, 0)'
			}
		},
			
		style_basement: function() {
			return {
				width: this.width - this.story_indent + this.base_indent/2 + 'px',
				height: this.basement_floors * (this.story_height + this.story_floor_height) + 'px',
				'-webkit-transform': 'translate3d(' + (this.story_indent/2 - this.base_indent/4) + 'px, 0, 0)'
			}
		},
			
		style_base_tile: function() {
			return {
				width: this.width - this.base_indent + 'px',
				height: this.width - this.base_indent + 'px',
				border: (this.plot.width - (this.width - this.base_indent))/2 + 'px solid ' + this.plot.pallet.dirt,
				'-webkit-transform': 'translate3d(' + -(this.plot.width - this.width)/2 + 'px, ' + -this.plot.width/2 + 'px, 1px) rotateX(90deg)'
			}
		}
		
	}
	
	return Structure;
	
}]);