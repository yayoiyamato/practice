'use strict'

/* デフォルト状態
 * this = グローバルオブジェクト
 */

console.log(this) // {}
 

/* 関数で呼び出した場合
 * this = グローバルオブジェクト
 */

function printThis() {
  console.log(this)
}
printThis() // undefied ←なんで？{}じゃないの？


/* メソッドで呼び出した場合
 * this = メソッドが属しているオブジェクト
 */

const obj = {
  name: 'obj',
  printThis: printThis
}
obj.printThis() // { name: 'obj', test: [Function: test] }


/* コンストラクタで呼び出した場合
 * this = new演算子を使って生成したインスタンス
 */

function Monster(name, height) {
  console.log(this) // Monster {}
  this.name = name
  this.height = height
}
const mike = new Monster('マイク', 120)

