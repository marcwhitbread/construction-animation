module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			compile: {
				files: {
					'app/css/style.css' : 'src/less/*.less'
				}
			}
		},
		watch: {
			less: {
				files: 'src/less/*.less',
				tasks: ['less:compile']
			}
		}
	});

	//load tasks
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	//register tasks
	grunt.registerTask('default', ['watch']);
	
};