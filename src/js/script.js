$(document).ready(function() {
	
	build('#structure');
	
});

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
		
}