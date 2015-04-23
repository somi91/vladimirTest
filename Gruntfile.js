
'use strict';
module.exports = function (grunt) {
	/**
	 * Default task
	 * Run `grunt` on the command line
	 */
	grunt.registerTask('default', [
	  'sass:dev',
	  'watch'
	]);

    grunt.initConfig({

    	/**
		 * Set project object
		 */
		project: {
		  assets: 'assets',
		  src: '<%= project.assets %>/src',
		  css: [
		    '<%= project.src %>/scss/style.scss'
		  ],
		  js: [
		    '<%= project.src %>/js/*.js'
		  ]
		},

		/**
		 * Sass
		 */
		sass: {
		  dev: {
		    options: {
		      style: 'expanded'
		      // banner: '<%= tag.banner %>',
		      // compass: true
		    },
		    files: {
		      '<%= project.assets %>/css/style.css': '<%= project.css %>'
		    }
		  },
		  dist: {
		    options: {
		      style: 'compressed'
		      // compass: true
		    },
		    files: {
		      '<%= project.assets %>/css/style.css': '<%= project.css %>'
		    }
		  }
		},

		/**
		 * Watch
		 */
		watch: {
		  sass: {
		    files: '<%= project.src %>/scss/{,*/}*.{scss,sass}',
		    tasks: ['sass:dev']
		  }
		},
    	
		bowerInstall: {
	 
		    target: {
			    src: [
			    	'index.html'
			    ],   // .html support... 
			      // '/*.jade',   // .jade support... 
			      // 'app/styles/main.scss',  // .scss & .sass support... 
			      // 'app/config.yml'         // and .yml & .yaml support out of the box! 
			    // Optional: 
			    // --------- 
			    cwd: '',
			    dependencies: true,
			    devDependencies: false,
			    exclude: [],
			    fileTypes: {},
			    ignorePath: '',
			    overrides: {}
		    }
		}

	});

    grunt.loadNpmTasks('grunt-bower-install');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
};

