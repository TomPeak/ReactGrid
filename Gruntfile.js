module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    watch: {
      jsx: {
        files: ['lib/components/*.jsx'],
        tasks: ['react:components', 'browserify']
      },
      example: {
        files: ['example/scripts/lib/*.jsx'],
        tasks: ['react:example']
      }
    },
    browserify: {
      dist: {
        options: {
          debug: false,
          transform: ['reactify']
        },
        files: {
          'dist/build.js': ['lib/bundle.js']
        }
      }
    },
    react: {
      components: {
        files: [{
          expand: true,
          cwd: 'lib/components',
          src: ['**/*.jsx'],
          dest: 'dist/components',
          ext: '.js'
        }]
      },
      example: {
        files: [{
          expand: true,
          cwd: 'example/scripts/lib',
          src: ['**/*.jsx'],
          dest: 'example/scripts/dist',
          ext: '.js'
        }]
      }
    }
  });

  grunt.registerTask('default', ['watch']);
};
