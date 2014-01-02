(function () {
    'use strict';

    require.config({
        name: "main",
        baseUrl: '/assets/scripts',
        // In the paths, you can specify which version of each module you'd like to use to create a shortcut. 
        // Alternatively, you could specify the whole module name any time you needed it
        paths: {
            'jquery': 'modules/jquery/jquery-1.10.2',
        },
        wrap: true
    });

    define(['modules/cookie/psd.cookie'], function (module) {

        console.log(module);

    });

    define(['jquery'], function($) {

        console.log($);

    });

}());