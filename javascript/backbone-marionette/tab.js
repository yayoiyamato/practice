
define([
  'backbone',
  'marionette',
  'underscore'
],
function (
  Backbone,
  Marionette,
  _
) {

  // FIXME: Uncaught Error: Mismatched anonymous define() module
  
  'use strict'

  var TestItemView = Marionette.ItemVIew.extends({
    template: 'aaa'
  })

  return Marionette.LayoutView.extend({
    regions: {
      test: '.test'
    },
    onBeforeShow: function() {
      console.log('ok')
      this.test.show(new TestItemView())
    }
  })
})