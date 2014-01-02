module.exports = function (grunt) {

    // Default task(s).
    grunt.registerTask('default', ['build']);

    // builds the project
    grunt.registerTask('build', ['clean', 'requirejs']);

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Project configuration.
    grunt.initConfig({

        // cleans up the compiled JS file
        clean: {
            all: [
                '.grunt',
                'src/main/webapp/assets/scripts/example.js'
            ]
        },
        
        requirejs: {
            all: {
                options: {
                    name: 'modules/almond/almond-0.2.6',
                    include: 'main',
                    baseUrl: "src/main/webapp/assets/scripts",
                    mainConfigFile: "src/main/webapp/assets/scripts/main.js",
                    out: 'src/main/webapp/assets/scripts/example.js',
                    preserveLicenseComments: false
                }
            }
        }

    });

};