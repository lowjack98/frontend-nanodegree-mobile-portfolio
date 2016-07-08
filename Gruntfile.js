module.exports = function(grunt) {
  grunt.initConfig({
    /* Clear out the dist directory if it exists */
    clean: {
      dev: {
        src: ['dist/css','dist/views/css','dist/js','dist/views/js','dist/img','dist/views/images'],
      },
    },

    /* Generate the dist directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: [
            'dist/css',
            'dist/img',
            'dist/js',
            'dist/views/css',
            'dist/views/images',
            'dist/views/js'
          ]
        },
      },
    },

    /* Copy the "fixed" files that don't go through processing*/
    copy: {
      dev: {
        files: [
          {
            expand: true,
            src: ['*.png','*.jpg'],
            cwd: 'src/img',
            dest: 'dist/img'
          },
          {
            expand: true,
            src: '*.png',
            cwd: 'src/views/images',
            dest: 'dist/views/images'
          }
        ]
      },
    },

    responsive_images: {
      dev: {
        options: {
          engine: 'gm',
          sizes: [{
            width: 360,
            suffix: 'lg',
            quality: 50
          },
          {
            width: 115,
            suffix: 'sm',
            quality: 50
          },
          {
            height: 100,
            suffix: 'mover',
            quality: 50
          }
        ]
      },
      files: [{
        expand: true,
        src: ['pizzeria.jpg','pizza.png'],
        cwd: 'src/views/images/',
        dest: 'dist/views/images/'
      }]
    }
  },

  cssmin: {
    target: {
      files: [
        {
          expand: true,
          cwd: 'src/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.min.css'
        },
        {
          expand: true,
          cwd: 'src/views/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/views/css',
          ext: '.min.css'
        },
      ]
    }
  },

  uglify: {
    first_target: {
      files: {
        'dist/js/perfmatters.min.js': ['src/js/perfmatters.js']
      }
    },
    second_target: {
      files: {
        'dist/views/js/main.min.js': ['src/views/js/main.js']
      }
    }
  }
});


grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-mkdir');
grunt.loadNpmTasks('grunt-responsive-images');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.registerTask('default', ['clean', 'copy', 'cssmin', 'mkdir', 'responsive_images', 'uglify']);
};
