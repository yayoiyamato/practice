'use strict'

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

const zero = 0
const string = 'string'
const minusNumber = -1
const plusNumber = 1
const emptyObject = {}
const emptyArray = []
const empty = ''
let undefined

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

function check(element) {
    if (element) {
      return 'true';
    } else {
      return 'false';
    }
}


/* 
 *  配列の空判定
 *  Array.length
 * 
 */ 

console.log('emptyArray は' + check(emptyArray))
console.log('emptyArray.length は' + check(emptyArray.length))
