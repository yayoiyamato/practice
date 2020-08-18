'use strict'

/* 
 * Model
 */

var staticModel = Backbone.Model.extend({}, {
  // static メンバーを定義する
  property: 'static property',
  method: function() {
    console.log('static method')
  }
});
console.log(staticModel.property) // static property
staticModel.method() // static method

/* ----------------------------------------- */

var MyModel = Backbone.Model.extend({
  // コンストラクタを定義する
  // constructorあったらdefaultsきかない？
  // constructor: function() {
  //   console.log('constructor')
  // },
  initialize: function(arg) {
    console.log('initialize')
    console.log(arg) // { name: 'yai' }
  },
  // default値を設定する
  defaults: {
    value: 'default value'
  },
  method: function() {
    console.log('method')
  }
})
var myModel = new MyModel() // constructor
console.log(myModel.get('value')); // default value
myModel.set('value', 'updated value');
console.log(myModel.get('value')) // updated value


// コンストラクタの引数でプロパティを設定
var constructorModel = new MyModel({ name: 'yai'})
console.log(constructorModel.get('name'))

// プロパティを持ってるかを調べる
console.log(myModel.has('value')) // true
console.log(myModel.has('name')) // false
console.log(constructorModel.has('name')) // true
console.log(constructorModel.has('method')) // false

// プロパティを削除する
constructorModel.unset('name')
console.log(constructorModel.get('name')) // undefined


/* ----------------------------------------- */

