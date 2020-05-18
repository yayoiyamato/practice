'use strict'

/* 
 *  スプレッド構文
 */

const box = { width: 50, height: 25, color: 'pink' };
const cloneBox = {...box}
console.log(cloneBox) //{ width: 50, height: 25, color: 'pink' }

const size = { width: 50, height: 25 }
const color = { color: 'pink'}
const pinkBox = { ...color, size: { ...size } }
console.log(pinkBox) // { color: 'pink', size: { width: 50, height: 25 } }

// TODO: const color = 'pink'にしたらこうなる↓の何でかしらべる
// { '0': 'p', '1': 'i', '2': 'n', '3': 'k', size: { width: 50, height: 25 }}
