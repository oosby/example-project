(function () {
    'use strict';

    require.config({
        name: 'main',
        insertRequire: ['main'],
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

        // loading our own jquery with no conflict. Inside of here $ is 10.2, outside, it's whatever was global before
        $ = $.noConflict(true);

        console.log('jQuery 1.10.2 is only available within your module scope');
        console.log('$ inside of our module');
        console.log($.fn.jquery);
        console.log('but window.$ is still 1.8.2, as loaded by test page');
        console.log(window.$.fn.jquery);

        console.log('The cookie module, likewise, available to us');
        console.log(cookie);
        console.log('but won\'t mess up global scope as window.cookie is undefined');
        console.log(window.cookie);

    });

}());