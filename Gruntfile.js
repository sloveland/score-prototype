module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: 4100,
          base: '../',
          livereload: true
        }
      }
    },

    jekyll: {
      build: {}
    },

    less: {
      development: {
        options: {
          paths: ["assets/css"]
        },
        files: {
          "assets/css/style.css": "_less/style.less"
        }
      }
    },

    watch: {
      less: {
        files: ["_less/**/*.less"],
        tasks: ['less']
      },

      jekyll: {
        files: ['assets/**/*', '**/*.html'],
        tasks: ['jekyll'],
        options: { livereload: true }
      }

    },
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');

  grunt.registerTask('default', ['less', 'jekyll', 'connect', 'watch']);

};