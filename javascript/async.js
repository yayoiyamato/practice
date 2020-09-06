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


/* 普通の関数 --------------------------------------------------------- */
function getNum() {
  return 841;
}

let num = getNum()
console.log(num) // 841

/* async関数 --------------------------------------------------------- */
async function getNum2() {
  return 841;
}

// 同じ意味 ↓
// function asyncFunc() {
//   return new Promise((resolve) => {
//     resolve(841)
//   });
// }

console.log(getNum2()) // Promise { 841 }：returnした値でresolveされるPromiseが返る

getNum2().then(result => {
  num = result
  console.log(num) // 841
})

/* async関数 + await ------------------------------------------------- */

async function sayNum() {
  num = await getNum2();
  await getNum2().then(result=> {
    console.log(num);
  })
}

sayNum() // 841


/* async関数 + await ためし ------------------------------------------- */

// 2秒後に2乗した数値を返す関数
function square(arg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arg * arg)
    }, 2000)
  })
}

async function calc1() {
  const a = await square(10)
  const b = await square(20)
  return a + b // a, bは同期処理
}

calc1().then((res) => {
  console.log(res) // 4秒後に500
})

async function calc2() {
  const a = square(10)
  const b = square(20)
  return await a + await b // a, bは非同期処理
}

calc2().then((res) => {
  console.log(res) // 2秒後に500
})