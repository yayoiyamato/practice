'use strict';

// View
const Contact = Backbone.Marionette.ItemView.extend({
    el: '#contact-region',
    ui: {
        contactRegion: '#contact-region'
    },
    // テンプレート内でChildViewを設置する要素のセレクターを登録
    regions: {
    },
    template: '#contact-template',
    initialize: () => {
        console.log('initializeを実行')
        this.render()
    },
    onBeforeShow: () => {
        console.log('onBeforeShowを実行')
    },
    // Region.showで実行される
    onShow: () => {
        console.log('onShowを実行')
    },
    // renderで実行される
    onRender: () => {
        console.log('onRenderを実行')
    }
});


// Model
const Person = Backbone.Model.extend({
    defaults: {
        name: 'Alice',
        age: 20
    }
});
   
const person = new Person();
const contact = new Contact({
    model: person
});
contact.render();