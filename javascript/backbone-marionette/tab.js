/*　global define */

define([
  'backbone',
  'backbone.marionette',
  'underscore',
],
function (
  Backbone,
  Marionette,
  _,
) {

  'use strict'
  
  var TestItemView = Marionette.View.extend({
    template: '<p>test</p>'
  })

  return Marionette.View.extend({
    regions: {
      test: '.test'
    },
    initialize: function() {
      console.log('initialize')
      this.render()
    },
    onBeforeShow: function() {
      console.log('onBeforeShow')
      this.test.show(new TestItemView())
    }
  })
})