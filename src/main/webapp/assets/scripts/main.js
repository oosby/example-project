(function () {
    'use strict';

    require.config({
        name: "main",
        baseUrl: 'assets/scripts',
        // In the paths, you can specify which version of each module you'd like to use 
        paths: {
            // external but housed in our modules repo for ease of use
            'jquery': 'modules/jquery/jquery-1.10.2',

            // psd created
            'cookie': 'modules/cookie/cookie-1.0.0'
        },
        wrap: true
    });

    define(['jquery','cookie'], function ($, cookie) {

        // project code can start here
        

    });

}());