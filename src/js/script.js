$(document).ready(function() {
	
	build('#structure');
	
});

function build(id) {
	
	//stories
	var height = 245;
	var stories = (height-5) / 10;
	
	for(var i = 0; i < stories; i++) {
		
		$(id).children('.stories').append($("<div class = 'story'>\
			<div class = 'side'></div>\
			<div class = 'side'></div>\
			<div class = 'side'></div>\
			<div class = 'side'></div>\
			<div class = 'side'></div>\
			<div class = 'side'></div>\
			\
			<div class = 'level'>\
				<div class = 'side'></div>\
				<div class = 'side'></div>\
				<div class = 'side'></div>\
				<div class = 'side'></div>\
				<div class = 'side'></div>\
				<div class = 'side'></div>\
			</div>
			\
			<div class = 'balcony b1 open-front'>\
				<div class = 'side'></div>\
				<div class = 'side'></div>\
				<div class = 'side'></div>\
				<div class = 'side'></div>\
				<div class = 'side'></div>\
				<div class = 'side'></div>\
				\
				<div class = 'railing open-top open-bottom open-left'>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
				</div>
			</div>\
			\
			<div class = 'balcony b2'>\
				<div class = 'side'></div>\
				<div class = 'side'></div>\
				<div class = 'side'></div>\
				<div class = 'side'></div>\
				<div class = 'side'></div>\
				<div class = 'side'></div>\
				\
				<div class = 'railing open-top open-bottom open-right'>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
					<div class = 'side'></div>\
				</div>
			</div>
		</div>"));
		
	}
	
	//top build panel
	for(var i = 0; i < 16; i++) {
		
		$(id).children('.top-build-panels').append($("<div class = 'panel'>\
			<div class = 'side'></div>\
			<div class = 'side'></div>\
			<div class = 'side'></div>\
			<div class = 'side'></div>\
			<div class = 'side'></div>\
			<div class = 'side'></div>\
		</div>"));
		
	}
		
}