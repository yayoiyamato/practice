'use strict'

/* デフォルト状態
 * this = グローバルオブジェクト
 */

console.log(this) // {}（ブラウザの場合はwindowオブジェクト）
 

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
  console.log(this) // Monster { name: 'マイク', height: 120 }
}
const mike = new Monster('マイク', 120)


/* メソッド内で関数で呼び出した場合
 * this = グローバルオブジェクト
 */

let boo = {
  name: 'ぶー',
  greeting: function() {
    console.log(this.name) // 関数の外では this = メソッドが属しているオブジェクト
    const sayName = function() {
      console.log(`${this.name}だよ`) // 関数内では this = グローバルオブジェクト
    }
    sayName() // undefined
  }
}
boo.greeting()


/* メソッド内の関数で this = メソッドが属しているオブジェクトとして使いたい
 * 方法①：関数の外でthisを別の変数に代入 「self」「that」「_this」が使われる事が多い
 */

boo.greeting = function() {
  const self = this
  const sayName = function() {
    console.log(`${self.name}だよ`)
  }
  sayName() // ぶーだよ
}
boo.greeting()


/* メソッド内で関数で this = メソッドが属しているオブジェクトとして使いたい
 * 方法②：アロー関数つかう（関数が宣言された時点で、thisを確定（＝束縛）させる）
 */

boo = {
  name: 'ぶぅ',
  greeting: function() {
    const sayName = () => {
      console.log(`${this.name}だよ`) 
    }
    sayName() // ぶぅだよ
  }
}
boo.greeting()
