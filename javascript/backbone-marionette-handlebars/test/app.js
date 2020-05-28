'use strict'

define([
    'jquery',
    'underscore',
    'backbone',      
    'backbone.marionette',
    'backbone.marionette.handlebars',          
],
    
    /* TODO: Uncaught TypeError: Cannot read property 'extend' of undefined
     */
    function ($, _, Backbone, Marionette, Handlebars) {
        return Marionette.ItemView.extend({ 

            // template: {
            //     type: 'handlebars',
            //     template: Handlebars.compile('<p>name: {{ name }}</p>')
            // },
            // el: '.main',
            initialize: function () {
                console.log('initialize')
            },
            // onBeforeShow: function () {
            //     console.log('onBeforeShow')
            //     this.render();
            // }

        });

    });