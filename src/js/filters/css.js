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