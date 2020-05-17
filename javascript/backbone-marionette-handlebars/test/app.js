'use strict'

define([
    'jquery',
    'underscore',
    'backbone',      
    'backbone.marionette',
    'backbone.marionette.handlebars',          
],
    function ($, _, Backbone, Marionette, MarionetteHandlebars) {
        return Marionette.LayoutView.extend({

            template: {
                type: 'handlebars',
                template: '<p>name: {{ name }}</p>'
            },
            el: '.main',
            initialize: function () {
                console.log('initialize')
            },
            onBeforeShow: function () {
                console.log('onBeforeShow')
                this.render();
            }

        });

    });