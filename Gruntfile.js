module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        clean: {
            build: {
                src: ['dist']
            }
        }, // End clean

        browserify: {
            options: {
                transform: [ require('grunt-react').browserify ]
            },
            files: {
                src: ['js/**/*.js'],
                dest: 'dist/main.js'
            }
        } // End browserify
    });

    grunt.registerTask('default', ['clean', 'browserify']);
};