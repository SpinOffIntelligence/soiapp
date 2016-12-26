'use strict';

module.exports = function(grunt) {
    // Project Configuration
    grunt.initConfig({
      concat: {
        controllers: {
          src: ['controllers/*.js'],
          dest: 'controllers/controllers.js',
        },
        extras: {
          src: ['services/*.js'],
          dest: 'services/services.js',
        },
      },
    });

    //Load NPM tasks
    //grunt.loadNpmTasks('grunt-git-deploy');

    //Default task(s).
    grunt.registerTask('default', ['concat']);

    //Test task.
};