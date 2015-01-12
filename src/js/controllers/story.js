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