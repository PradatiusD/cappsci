module.exports = function (grunt) {
  grunt.initConfig({
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'main.css': 'main.sass',       // 'destination': 'source'
        }
      }
    },
    watch: {
      sass: {
        files: ['main.sass'],
        tasks: ['sass']
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};