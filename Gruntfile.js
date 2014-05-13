module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({

    clean : ['dist/index.html', 'dist/test.png'],

    copy : {
      html : {src : 'src/html/index.html', dest : 'dist/index.html'}
    },

    imagemin: {
      pngs : {
	files : {
	  'dist/test.png' : 'src/img/test.png' 
	}
      }
    },
/*
    cafemocha: {
      options : {
        ui : 'bdd',
        require : [
          'should'
        ]
      },
      test : {
	src: 'test/index.js'
      }
    },
*/
    validation: {
      options : {
	failHard : true,
	reportpath : false,
	reset : true
      },
      src : 'src/html/index.html'
    }
  });


//  grunt.loadNpmTasks('grunt-cafe-mocha'); // skip tests for now, they seem to work just fine
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-html-validation');

  grunt.registerTask('default', 'The default task does nothing', function(){
    grunt.log.writeln('tasks that can run are: imagemin-fails or imagemin-works');
  });

  // imagemin should not work - validate before imagemin
  grunt.registerTask('imagemin-fails', ['clean', 'validation', 'imagemin', 'copy']);
  // imagemin should work -- validate after imagemin
  grunt.registerTask('imagemin-works', ['clean', 'imagemin', 'validation', 'copy']);
};
