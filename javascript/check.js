'use strict'

function check(element) {
    if (element) {
      return 'true';
    } else {
      return 'false';
    }
}

const zero = 0
const string = 'string'
const minusNumber = -1
const plusNumber = 1
const emptyObject = {}
const emptyArray = []
const empty = ''
let undefined

/* 
 *  存在チェック
 * 
 *  # true
 *  - 'aaa': 文字列
 *  - {} : 空のオブジェクト
 *  - [] : 空の配列
 *  - 1, -1 : 数字（正・負）
 * 
 *  # false
 *  - 0
 *  - '' : 空
 *  - null
 *  - undefined
 */

console.log('string は' + check(string))
console.log('minusNumber は' + check(minusNumber))
console.log('plusNumber は' + check(plusNumber))
console.log('emptyObject は' + check(emptyObject))
console.log('emptyArray は' + check(emptyArray))
console.log('* * * * * * * * * * * *')
console.log('empty は' + check(empty))
console.log('zero は' + check(zero))
console.log('undefined は' + check(undefined))
console.log('null は' + check(null))
console.log('* * * * * * * * * * * *')


/* 
 *  配列の空判定
 *  Array.length
 */ 

console.log('emptyArray は' + check(emptyArray)) // true
console.log('emptyArray.length は' + check(emptyArray.length)) // false
console.log('* * * * * * * * * * * *')


/* 
 *  オブジェクトの空判定
 *  Object.keys({}).length
 */ 

console.log('emptyObject は' + check(emptyObject)) // true
console.log('Object.keys(emptyObject) は' + check(Object.keys(emptyObject))) // true
console.log('Object.keys(emptyObject).length は' + check(Object.keys(emptyObject).length)) // false
