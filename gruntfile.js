module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    concat: {
      controllers: {
        src: ['js/controllers/*.js'],
        dest: 'js/controllers/controllers.js',
      },
      services: {
        src: ['js/services/*.js'],
        dest: 'js/services/services.js',
      },
      lib: {
        src: ['lib/jquery-3.1.1.min.js', 'lib/moment.min.js', 'lib/underscore-min.js','lib/bootstrap/js/bootstrap.min.js','lib/async.min.js',
              'lib/angular/angular.min.js','lib/angular/angular-sanitize.min.js','lib/angular/angular-ui-router.min.js','lib/bootstrap/js/ui-bootstrap-tpls-2.2.0.min.js',
              'lib/ui-grid/ui-grid.min.js','lib/sprintf.min.js','lib/vis/vis.js','lib/ui-select/select.js','lib/fileUpload/ng-file-upload.min.js','lib/fileUpload/ng-file-upload-shim.min.js'],
        dest: 'lib/lib.js',
      },
      css: {
        src: ['lib/bootstrap/css/bootstrap.min.css','css/soiapp.css','lib/vis/vis-network.min.css','lib/ui-select/select.css'],
        dest: 'css/styles.css',
      },
    }    
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['concat']);

};