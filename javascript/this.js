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
obj.printThis() // { name: 'obj', printThis: [Function: printThis] }


/* クラスのコンストラクタで呼び出した場合
 * this = new演算子を使って生成したインスタンス
 */

function Monster(name, height) {
  console.log(this) // Monster {}
  this.name = name
  this.height = height
  console.log(this) // Monster { name: 'マイク', height: 120 }
}
const mike = new Monster('マイク', 120)


/* apply / callで呼び出した場合
 * thisの中身を任意のオブジェクトに変更できる
 *
 * 関数名.apply(関数の処理の対象となる要素,関数で使う引数(配列のみ))
 * 関数名.call(関数の処理の対象となる要素,関数で使う引数,関数で使う引数,関数で使う引数… )
 */

const sally = { name: 'サリー' }

const sayBodyColor = function() {
  // arguments = { '0': '水色', '1': '紫', '2': 'グレー' }
  console.log(`${this.name}だよ、体の色は、${Object.values(arguments).join('と')}だよ`)
}
sayBodyColor.apply(sally, ['水色', '紫', 'グレー']) // サリーだよ、体の色は、水色と紫とグレーだよ
sayBodyColor.call(sally, '水色', '紫', 'グレー') // サリーだよ、体の色は、水色と紫とグレーだよ


/////////////////////////////////////////////////////////////////


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
