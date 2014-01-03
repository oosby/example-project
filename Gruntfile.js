module.exports = function (grunt) {

    // Default task(s).
    grunt.registerTask('default', ['build']);

    // builds the project
    grunt.registerTask('build', ['clean', 'requirejs']);

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

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
        },

        less: {
            development: {
                files: {
                    "./src/main/webapp/assets/css/main.css" : "./src/main/webapp/assets/less/main.less"
                },
                options: {
                    sourceMap: true,
                    sourceMapFilename: './src/main/webapp/assets/css/main.css.map',
                    sourceMapURL: '/assets/css/main.css.map'
                }
            }
        },

        watch: {
            files: "./src/main/webapp/assets/less/*",
            tasks: ["less"],
            options: {
                livereload: true
            }
        }

    });

};