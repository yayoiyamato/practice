'use strict'
define([
    'jquery',
    'underscore',
    'backbone',      
    'backbone.marionette',
    'backbone/backbone.marionette.handlebars',          
    'hbs!Template/category',       
],
    function ($, _, Backbone, Marionette, MarionetteHandlebars, categoryTpl) {
        return Backbone.Marionette.ItemView.extend({

            template: {
                type: 'handlebars',
                template: categoryTpl
            }

        });

    });