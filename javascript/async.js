'use strict'

/* 
 *  async/awaitの練習
 */

// async ------------------------------------------------------------
// 非同期関数を定義する関数宣言のこと。
// async function は呼び出されると Promise を返す。
// async は await とセットで使う必要はない。
// async function が値を return した場合、Promiseは戻り値を resolve する。
// async function が例外や何らかの値を throw した場合はその値を reject する。

// await ------------------------------------------------------------
// async function 内で Promise の結果が返されるまで待機する演算子のこと。
// 結果が返されたら async function 内の処理を再開する。
// await は async function 内でないと利用できない。

/* 普通の関数 */
function normal() {
  return 841;
}

let num = normal()
console.log(num) // 123


/* async関数 */
async function asyncFunc() {
  return 841;
}
console.log(asyncFunc()) // Promise { 841 }：returnした値でresolveされるPromiseが返る

asyncFunc().then(result => {
  num = result
  console.log(num) // 841
})
