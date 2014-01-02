module.exports = function (grunt) {

    // Default task(s).
    grunt.registerTask('build', ['requirejs']);
    grunt.registerTask('default', ['build']);

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Project configuration.
    grunt.initConfig({
        
        requirejs: {
            dev: {
                options: {
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