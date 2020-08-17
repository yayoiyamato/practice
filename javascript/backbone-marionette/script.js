'use strict'

/* 
 * Model
 */

 var MyModel1 = Backbone.Model.extend({
  // コンストラクタを定義する
  constructor: function() {
    console.log('constructor')
  },
  initialize: function() {
    console.log('initialize')
  }
})
var myModel1 = new MyModel1() // constructor

// static メンバーを定義する
var MyModel2 = Backbone.Model.extend({}, {
  staticProperty: 'static property',

  staticMethod: function() {
      console.log('static method')
  }
});
console.log(MyModel2.staticProperty)　// static property
MyModel2.staticMethod() // static method
