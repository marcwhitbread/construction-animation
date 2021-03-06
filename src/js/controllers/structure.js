app.controller('StructureCtrl', ['$scope', '$filter', 'Structure', 'BuildDeck', 'Story', function($scope, $filter, Structure, BuildDeck, Story) {
	
	var data = {
		floors: 24,
		basement_floors: 4,
		width: 100,
		depth: 100,
		roof_height: 5,
		base_indent: 4,
		build_panel_unindent: 2,
		build_deck_height: 5,
		wrap_1_floors: 2.5,
		wrap_2_floors: 6,
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
	
	$scope.structure = new Structure(data.floors, data.basement_floors, data.width, data.depth, data.roof_height, data.base_indent, data.steel_width, data.fence_indent, data.pillar_p2_width, data.story_indent, data.story_height, data.story_railing_height, data.story_floor_height, data.story_pillar_indent, $scope.plot);
	
	$scope.stories = [];
	for(var i = 0; i < $scope.structure.floors; i++)
		$scope.stories.push(new Story(i, data.story_indent, data.story_height, data.story_railing_height, data.story_floor_height, $scope.structure.story_pillar_indent, $scope.structure.floors, $scope.structure.basement_floors, $scope.structure));
		
	$scope.build_decks = [];
	$scope.build_decks.push(new BuildDeck(1, data.build_panel_unindent, data.build_deck_height, data.wrap_indent, data.wrap_1_floors, $scope.stories[0], $scope.structure));
	$scope.build_decks.push(new BuildDeck(2, data.build_panel_unindent, data.build_deck_height, data.wrap_indent, data.wrap_2_floors, $scope.stories[0], $scope.structure));
	
}]);