var interval = undefined;

//timing
var structure_p1_build_delay = 500;
var structure_p2_build_delay = structure_p1_build_delay * 4;
var structure_p3_build_delay = structure_p1_build_delay * 8;

$(document).ready(function() {
	
	build('#structure');
	
});

function animation(id) {
	
	var current_floor = 0;
	var floors = 26;
	
	interval = setInterval(function() {
		if(current_floor >= floors) {
			clearInterval(interval);
			return true;
		}
		
		buildp1($(id).children('.stories').children('.story').eq(current_floor));
		
		current_floor++;
	}, structure_p1_build_delay);
	
}

function buildp1(element) {
	
	$(element).addClass('p1');
	
	setTimeout(function() {
		buildp2(element);
	}, structure_p2_build_delay);
	
}

function buildp2(element) {
	
	$(element).addClass('p2');
	
	setTimeout(function() {
		buildp3(element);
	}, structure_p3_build_delay);

}

function buildp3(element) {
	
	$(element).addClass('p3');
	
	var top = -7.5 + parseInt($(element).css('transform').split(',')[5], 10);
	
	console.log(top);
	
	$('#structure .build-deck').css({
		'-webkit-transform': 'translateY(' + top + 'px)'
	});
	
}

function build(id) {
	
	//stories
	var height = 271;
	var stories = (height-5) / 11;
	
	for(var i = 0; i < 26; i++) {
		
		var phase = (i > 26-5) ? 'p1' : 
					(i > 26-6) ? 'p1p2' : 
					(i > 26-20) ? 'p2' : 'p3';
		//var phase = (i > 20-8) ? 'p1' : 'p2';
		
		$(id).children('.stories').append($("<div class = 'story " + phase + "'>\
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
	
	//roof
	for(var i = 0; i < 4; i++) {
		
		$(id).children('.roof').children('.towers').append($("<div class = 'tower'>\
			<div class = 'side'></div>\
			<div class = 'side'></div>\
			<div class = 'side'></div>\
			<div class = 'side'></div>\
			<div class = 'side'></div>\
			<div class = 'side'></div>\
		</div>"));
		
	}
	
	//animation(id);
		
}