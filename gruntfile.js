module.exports = function(grunt) {
	
    grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),
    	concat: {
	    	compile: {
		    	src: ['src/js/*.js', 'src/js/controllers/*.js', 'src/js/services/*.js', 'src/js/factories/*.js', 'src/js/filters/*.js'],
		    	dest: 'app/js/construction.js'
	    	}
    	},
    	uglify: {
	    	compile: {
		    	files: {
			    	'app/js/construction.min.js': 'app/js/construction.js'
		    	}
	    	}
    	},
    	less: {
	    	compile: {
				files: {
					'app/css/style.css' : 'src/less/style.less'
				}
			}
		},
		htmlmin: {
			compile: {
				files: [{
					expand: true,
					cwd: 'src/view',
					src: '**/*.html',
					dest: 'app/partials'
				}]
			}
		},
    	watch: {
	    	html: {
		    	files: 'src/view/**/*.html',
				tasks: ['htmlmin:compile']
	    	},
			css: {
				files: 'src/less/*.less',
				tasks: ['less:compile']
			},
			js: {
				files: ['src/js/*.js', 'src/js/controllers/*.js', 'src/js/services/*.js', 'src/js/factories/*.js', 'src/js/filters/*.js'],
				tasks: ['concat:compile', 'uglify:compile']
			}
		},
		jshint: {
			all: ['src/js/*.js']
		}
    });
    
    //load tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    //register tasks
    grunt.registerTask('default', ['watch']);
    
};