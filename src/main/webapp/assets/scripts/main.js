/*global define, require, $ */
(function () {
    'use strict';

    require.config({
        name: "main",
        insertRequire: ['main'],
        baseUrl: '/assets/scripts',
        /*  we use a map to a blank jquery module here since jquery is already
            included on the page and we want to use that. otherwise, we'd just
            include a path to jquery in the paths defined below.
         */
        map: {
            '*': {
                'jquery': 'jquery.external'
            }
        },
        paths: {
            'backbone': 'vendor/backbone/backbone-1.1.0',
            'backbone-pageable': 'vendor/backbone/backbone-pageable',
            'underscore': 'vendor/backbone/underscore-1.5.2', // required for backbone
            'handlebars': 'vendor/handlebars-1.1.2'
        },
        shim: {
            'vendor/jquery/jquery.ellipsis': ['jquery'],
            'vendor/jquery/jquery.mobile.events': ['jquery'],
            'vendor/jquery/jquery.mousewheel': ['jquery'],
            'vendor/bootstrap/transition': ['jquery'],
            'vendor/bootstrap/carousel': ['jquery','vendor/bootstrap/transition'],
            'vendor/bootstrap/collapse': ['jquery', 'vendor/bootstrap/transition'],
            'vendor/bootstrap/dropdown': ['jquery'],
            'vendor/bootstrap/modal': ['jquery']
        },

        wrap: true
    });

    define(['views/app-view'], function (AppView) {
        
        

    });
}());