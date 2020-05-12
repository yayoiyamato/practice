'use strict';

// View
var Contact = Backbone.Marionette.ItemView.extend({
    el: '#contact-region',
    template: '#contact-template',
});


// Model
var Person = Backbone.Model.extend({
    defaults: {
        name: 'Alice',
        age: 20
    }
});
   
var person = new Person();
var contact = new Contact({
    model: person
});

contact.render();