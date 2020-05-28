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
            //     template: _.template('<h1>Title</h1><div id="first-region"></div>'),
            // },
            el: '#main',
            model: new Backbone.Model({
                name: 'bar'
            }),
            initialize: function () {
                console.log('initialize')
            },
            onBeforeShow: function () {
                console.log('onBeforeShow')
                this.render();
            }

        });

    });