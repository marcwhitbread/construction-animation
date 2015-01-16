'use strict';

var app = angular.module('ConstructionApp', []);
var interval = undefined;
var floors = 26;
var basement_floors = 4;



//timing
var p1_p2_floor_distance = 4;
var start_at_floor = 5;
var structure_p1_build_delay = 2000;
var p2_build_done_delay = structure_p1_build_delay * 0;

var structure_p2_build_delay = structure_p1_build_delay * p1_p2_floor_distance;
var structure_crane_build_delay = structure_p1_build_delay * basement_floors;
var structure_bd1_build_delay = structure_p1_build_delay * 3.5;
var structure_bd2_sheet_build_delay = structure_p1_build_delay * 8.5;
var structure_p3_build_delay = structure_p1_build_delay * 1;
var structure_bd2_build_delay = structure_p1_build_delay * basement_floors - structure_p1_build_delay/2;

/* plot */
var plot_width = 140;
var plot_depth = 140;
var plot_height = 2;

/* crane */
var crane_width = 8;

/* structure */
var structure_width = 100;
var structure_depth = 100;
var structure_story_indent = 6;
var structure_story_height = 11;
var structure_story_railing_height = 3;
var structure_story_floor_height = 1;
var structure_story_pillar_indent = 4;
var structure_roof_height = 5;
var structure_build_panel_unindent = 2;
var structure_height = (floors * (structure_story_height + structure_story_floor_height)) + 5;
var structure_build_deck_height = 5;
var structure_build_deck_panel_1_height = (structure_story_height + structure_story_floor_height)*1.5;
var structure_build_deck_panel_2_height = (structure_story_height + structure_story_floor_height)*1.5;
var structure_wrap_1_height = 30;
var structure_wrap_2_floors = 5;
var structure_wrap_2_height = structure_wrap_2_floors * (structure_story_height + structure_story_floor_height);
var structure_wrap_indent = 5;
/*
$(document).ready(function() {
	
	build('#structure');
	
});

function animation(id) {
	
	var current_floor = 0;
	var delay = 0;
	
	interval = setInterval(function() {
		if(current_floor >= floors) {
			clearInterval(interval);
			return true;
		}
		
		build_p1(current_floor, $(id).children('.stories').children('.story').eq(current_floor));
		
		current_floor++;
	}, structure_p1_build_delay);
	
}

function build_p1(floor, element) {
	
	$(element).addClass('p1');

	setTimeout(function() {
		build_p2(floor, element);
	}, structure_p2_build_delay);
	
	setTimeout(function() {
		build_crane(floor, element);
	}, structure_crane_build_delay);
	
}

function build_p2(floor, element) {
	
	$(element).removeClass('p1').addClass('p2');
	
	if($(element).hasClass('roof')) {
		setTimeout(function() {
			remove_crane();
		}, p2_build_done_delay);
	}
	
}

function build_crane(floor, element) {

	if(!$('#structure .crane').hasClass('show'))
		$('#structure .crane').addClass('show')
			
	if(floor+1 == floors-basement_floors) {
		
		var top = parseInt($(element).css('transform').split(',')[5], 10) - basement_floors * (structure_story_height + structure_story_floor_height) + (structure_story_floor_height + structure_roof_height);
		
		$('#structure .crane').css({
			'-webkit-transform': 'translateX(' + (structure_story_pillar_indent + structure_story_indent) + 'px) translateY(' + top + 'px) translateZ(' + (-structure_width/2 + structure_story_indent + crane_width/2 + structure_story_pillar_indent) + 'px)'
		});

	} else if(floor < floors-basement_floors) {
			
		var top = parseInt($(element).css('transform').split(',')[5], 10) - basement_floors * (structure_story_height + structure_story_floor_height);
		
		$('#structure .crane').css({
			'-webkit-transform': 'translateX(' + (structure_story_pillar_indent + structure_story_indent) + 'px) translateY(' + top + 'px) translateZ(' + (-structure_width/2 + structure_story_indent + crane_width/2 + structure_story_pillar_indent) + 'px)'
		});
		
	}
	
	if(floor > floors-5) {
		
	}
	
	setTimeout(function() {
		build_bd1(floor, element);
	}, structure_bd1_build_delay);
	
}

function remove_crane() {
	
	$('#structure .crane').removeClass('show');
	
}

function build_bd1(floor, element) {
	
	if(floor+1 == floors-basement_floors) {
		
		var top = parseInt($(element).css('transform').split(',')[5], 10) - basement_floors * (structure_story_height + structure_story_floor_height) + (structure_story_floor_height + structure_roof_height);
		
		$('#structure .build-deck-1').css({
			'-webkit-transform': 'translateY(' + (top + 3) + 'px)'
		});

	} else if(floor < floors-basement_floors) {
		if(!$('#structure .build-deck-1').hasClass('show'))
			$('#structure .build-deck-1').addClass('show')
			
		var top = parseInt($(element).css('transform').split(',')[5], 10) - basement_floors * (structure_story_height + structure_story_floor_height);
		
		$('#structure .build-deck-1').css({
			'-webkit-transform': 'translateY(' + (top + 3) + 'px)'
		});	
		
		$('#structure .build-deck-1 .sheet').css({
			height: (floor * (structure_story_height + structure_story_floor_height) + structure_build_deck_height) + 'px'
		});
	}
		
	setTimeout(function() {
		build_bd2_sheet(floor, element);
	}, structure_bd2_sheet_build_delay);
	
}

function remove_bd1() {
	
	$('#structure .build-deck-1').removeClass('show');
	
}

function build_bd2_sheet(floor, element) {
	
	if(floor <= structure_wrap_2_floors) {
		if(!$('#structure .build-deck-2').hasClass('show'))
			$('#structure .build-deck-2').addClass('show')
		
		$('#structure .build-deck-2 .sheet').css({
			height: (floor * (structure_story_height + structure_story_floor_height)) + 'px'
		});
	}
	
	setTimeout(function() {
		build_p3(floor, element);
	}, structure_p3_build_delay);
	
	
}

function build_p3(floor, element) {
	
	$(element).addClass('p3').removeClass('p2');
	
	setTimeout(function() {
		build_bd2(floor, element);
	}, structure_bd2_build_delay);
	
	if($(element).hasClass('roof')) {
		setTimeout(function() {
			remove_bd1();
			remove_bd2();
		}, 0);
	}
	
}

function build_bd2(floor, element) {
	
	console.log(floor, floors, basement_floors);
	
	if(floor+1 == floors-basement_floors) {
		
		var top = parseInt($(element).css('transform').split(',')[5], 10) - basement_floors * (structure_story_height + structure_story_floor_height) + (structure_story_floor_height + structure_roof_height);
		
		$('#structure .build-deck-2').css({
			'-webkit-transform': 'translateY(' + (top + 3) + 'px)'
		});

	} else if(floor < floors-basement_floors) {

		var top = parseInt($(element).css('transform').split(',')[5], 10) - basement_floors * (structure_story_height + structure_story_floor_height);
		
		$('#structure .build-deck-2').css({
			'-webkit-transform': 'translateY(' + (top + 3) + 'px)'
		});
		
	}
	
	if(floor+structure_wrap_2_floors+basement_floors+2 >= floors) {
		
		$('#structure .build-deck-2 .sheet').css({
			height: ((floors-floor-structure_wrap_2_floors-2) * (structure_story_height + structure_story_floor_height)) + 'px'
		});
		
	}
	
}

function remove_bd2() {
	
	$('#structure .build-deck-2').removeClass('show');
	
}

function build(id) {
	
	for(var i = 0; i < floors; i++) {
		
		var phase = (i > floors-5) ? 'p1' : 
					(i > floors-6) ? 'p1p2' : 
					(i > floors-20) ? 'p2' : 'p3';
		var is_basement = (i < basement_floors) ? ' ug' : (i == basement_floors) ? ' ground' : (i == floors-1) ? ' roof' : '';
		var p1_built = (i < basement_floors-1) ? ' p1' : '';
		var p2_built = (i < start_at_floor-basement_floors) ? ' p2' : '';
		
		$(id).children('.stories').append($("<div class = 'story"+is_basement+p1_built+p2_built+"'>\
			<div class = 'side'></div>\
			<div class = 'side'></div>\
			<div class = 'side'></div>\
			<div class = 'side'></div>\
			<div class = 'side'></div>\
			<div class = 'side'></div>\
			\
			<div class = 'girders'>\
				<div class = 'girder'>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
				</div>\
				\
				<div class = 'girder'>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
				</div>\
				
				<div class = 'girder'>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
				</div>\
				\
				<div class = 'girder'>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
				</div>\
			</div>\
			\
			<div class = 'floor'>\
				<div class = 'side'></div>\
				<div class = 'side'></div>\
				<div class = 'side'></div>\
				<div class = 'side'></div>\
				<div class = 'side'></div>\
				<div class = 'side'></div>\
			</div>\
			\
			<div class = 'wall open-top open-bottom'>\
				<div class = 'side'></div>\
				<div class = 'side'></div>\
				<div class = 'side'></div>\
				<div class = 'side'></div>\
				<div class = 'side'></div>\
				<div class = 'side'></div>\
			</div>\
			\
			<div class = 'pillars'>\
				<div class = 'pillar'>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
				</div>\
				\
				<div class = 'pillar'>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
				</div>\
				\
				<div class = 'pillar'>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
				</div>\
				\
				<div class = 'pillar'>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
				</div>\
			</div>\
		</div>"));
		
	}
	
	var number_of_tiles = plot_width/((plot_width-structure_width)/2);
	
	//base
	for(var i = 0; i < number_of_tiles; i++) {
		for(var j = 0; j < number_of_tiles; j++) {
		
			if((i == 0) || (i == number_of_tiles-1) || (j == 0) || (j == number_of_tiles-1)) {
				
				$(id).children('.base-tiles').append($("<div class = 'tile'>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
				</div>"));
				
			}
		
		}
	}
	
	animation(id);
		
}

function create_block() {
	
	
	
}
*/
app.factory('Pallet', [function() {
	
	//constructor
	var Pallet = function(dirt) {
		this.dirt = dirt;
	}
	
	//public methods
	Pallet.prototype = {
	}
	
	return Pallet;
	
}]);
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
	
	$scope.plot = new Plot(data.width, data.depth, data.height, pallet);
	
	/*$scope.style = {
		width: $scope.plot.width + 'px',
		height: $scope.plot.height + 'px'
	}*/
	
}]);
app.controller('StoryCtrl', ['$scope', function($scope) {
	
	//$scope.level = $scope.story;
	//$scope.story = $scope.plot.structure.story;
	//$scope.is_underground = ($scope.story < $scope.plot.structure.basement_floors) ? true : false;
	//$scope.is_ground = ($scope.story == $scope.plot.structure.basement_floors) ? true : false;
	
	/*if(i < basement_floors) ? ' ug' : (i == basement_floors) ? ' ground' : (i == floors-1) ? ' roof' : '';
	var p1_built = (i < basement_floors-1) ? ' p1' : '';
	var p2_built = (i < start_at_floor-basement_floors) ? ' p2' : '';*/
	
	/*$scope.styles = {
		def: {
			width: ($scope.structure.width - $scope.story.indent*2) + 'px',
			height: $scope.story.height + $scope.story.floor_height + 'px',
			'-webkit-transform': 'translate3d(' + $scope.story.indent + 'px, ' + -$scope.level * ($scope.story.height + $scope.story.floor_height) + $scope.structure.basement_floors * ($scope.story.height + $scope.story.floor_height) + 'px, 0)'
		},
		p1: {
			
		},
		p2: {
			
		},
		p3: {
			
		}
	}
	
	$scope.style = $scope.styles.def;*/
	
}]);

//translateX(@structure_story_indent)
//translateY()
app.controller('StructureCtrl', ['$scope', '$filter', 'Structure', 'Story', function($scope, $filter, Structure, Story) {
	
	var data = {
		floors: 26,
		basement_floors: 4,
		width: 100,
		depth: 100,
		roof_height: 5,
		base_indent: 4,
		build_panel_unindent: 2,
		build_deck_height: 5,
		wrap_1_height: 30,
		wrap_2_floors: 5,
		wrap_indent: 5,
		steel_width: 4,
		fence_indent: 2,
		pillar_p2_width: 8,
		story_indent: 6,
		story_height: 11,
		story_railing_height:  3,
		story_floor_height: 1,
		story_pillar_indent: 4
	}
	
	$scope.structure = new Structure(data.floors, data.basement_floors, data.width, data.depth, data.roof_height, data.base_indent, data.build_panel_unindent, data.build_deck_height, data.wrap_1_height,data. wrap_2_floors, data.wrap_indent, data.steel_width, data.fence_indent, data.pillar_p2_width, data.story_indent, data.story_height, data.story_railing_height, data.story_floor_height, data.story_pillar_indent, $scope.plot);
	
	$scope.stories = [];
	for(var i = 0; i < $scope.structure.floors; i++)
		$scope.stories.push(new Story(i, data.story_indent, data.story_height, data.story_railing_height, data.story_floor_height, $scope.structure.story_pillar_indent, $scope.structure.floors, $scope.structure.basement_floors, $scope.structure));
	
}]);
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
					style.wall.height = this.roof_height - this.floor_height + 'px';
					style.wall.webkitTransform = 'translate3d(0, ' + -this.floor_height + 'px, 0)';
					
					style.pillar[0].height = this.roof_height - this.floor_height + 'px';
					style.pillar[1].height = this.roof_height - this.floor_height + 'px';
					style.pillar[2].height = this.roof_height - this.floor_height + 'px';
					style.pillar[3].height = this.roof_height - this.floor_height + 'px';
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
					style.wall.height = this.roof_height - this.floor_height + 'px';	
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
//convert seconds to mm:ss format
var transform = function() {
	return function(transform) {
		
		var str = '';
			str += '-webkit-transform: ' + transform + ';';
			str += '-moz-transform: ' + transform + ';';
			str += '-ms-transform: ' + transform + ';';
			str += '-o-transform: ' + transform + ';';
			str += 'transform: ' + transform + ';';
		
		return str;
		
	}
}

app.filter('transform', transform);