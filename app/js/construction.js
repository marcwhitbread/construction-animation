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
app.controller('PlotCtrl', ['$scope', function($scope) {
}]);
app.controller('StructureCtrl', ['$scope', function($scope) {
}]);
app.factory('Structure', ['width', function(width) {
	
	//constructor
	var Structure = function() {
		this.id = id;
	}
	
	//public methods
	Structure.prototype = {
		
		//load data
		load: function(data) {
		}
		
	}
	
	return Structure;
	
}]);