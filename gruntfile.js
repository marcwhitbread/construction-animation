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
		uglify: {
			minify: {
				files: {
					'app/js/script.min.js': 'src/js/*.js'
				}
			}
		},
		watch: {
			less: {
				files: 'src/less/*.less',
				tasks: ['less:compile']
			},
			js: {
				files: 'src/js/*.js',
				tasks: ['uglify:minify']
			}
		}
	});

	//load tasks
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	//register tasks
	grunt.registerTask('default', ['watch']);
	
};