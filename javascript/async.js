'use strict'

/* 
 *  async/awaitの練習
 */

// async ------------------------------------------------------------
// 非同期関数を定義する関数宣言のこと。
// async function は呼び出されると Promise を返す。
// async function が値を return した場合、Promiseは戻り値を resolve する。
// async function が例外や何らかの値を throw した場合はその値を reject する。

// await ------------------------------------------------------------
// async function 内で Promise の結果が返されるまで待機する演算子のこと。
// 結果が返されたら async function 内の処理を再開する。
// await は async function 内でないと利用できない。

async function asyncSample(arg) {

  // 非同期処理を定義
  const hidouki = () => {
    return new Promise((resolve, reject)=> {
      setTimeout(() => {
        if (arg) {
          resolve("done!")
        } else {
          reject("fail!")
        }
      }, 2000)
    })
  }

  // メイン処理
  await hidouki().then((result) => {
    console.log(result)
    return result
  }).catch((result) => {
    console.log(result)
    throw new Error(result)
  })
}

asyncSample('xxx') // done!

asyncSample() 
// fail!
// UnhandledPromiseRejectionWarning: Error: fail!
// UnhandledPromiseRejectionWarning: Unhandled promise rejection. ...
// DeprecationWarning: Unhandled promise rejections are deprecated. ...