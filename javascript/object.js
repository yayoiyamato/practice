'use strict'

/* 
 *  スプレッド構文
 */

const box = { width: 50, height: 25, color: 'pink' };
const cloneBox = { ...box }
console.log(cloneBox) //{ width: 50, height: 25, color: 'pink' }

const size = { width: 50, height: 25 }
const color = { color: 'pink' }
const pinkBox = { ...color, size: { ...size } }
console.log(pinkBox) // { color: 'pink', size: { width: 50, height: 25 } }

// TODO: const color = 'pink'にしたらこうなる↓の何でかしらべる
// { '0': 'p', '1': 'i', '2': 'n', '3': 'k', size: { width: 50, height: 25 }}


const numbers = [1, 2, 3]

// 関数の引数にも使える
function sum(a, b, c) {
    return a + b + c
}
console.log(sum(...numbers)) // 6

// 関数の引数のどこでも使える
function multiply (a, b, c, d, e) {
    return a * b * c * d * e
}
console.log(multiply(-1, ...numbers, 5)) // -30


/* 
 * 分割代入
 */

let {x, y} = {x: 111, y: 222};
console.log(x, y) // 111 222

// 対応するプロパティがない変数には undefined が入る
let {f, g, h} = {f: 'fff', gg: 'ggg', h: 'hhh'}
console.log(f, g, h) // fff undefined hhh

// 初期値も指定できる（対応するプロパティがない場合のため）
let {i, j, k = 'kkk'} = {i: 'iii', j: 'jjj'}
console.log(i, j, k) // iii jjj kkk


function sayHello({name, favorite: {...favorite}}) {
    // favoriteの中身を分割代入
    const {food, character} = favorite
    return 'やっぴ！' + name + 'だよ ' + food + 'と' + character + 'がだいすきだよ'

}
console.log(sayHello({
    name: 'やい',
    favorite: {food: 'ごはん', character: 'まいく'}
}));  // やっぴ！やいだよ ごはんとまいくがだいすきだよ