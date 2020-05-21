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
// const nuru = document.getElementById("yai") // 存在しない要素
let undefined

console.log('string は' + (string ? 'true' : 'false'))
console.log('minusNumber は' + (minusNumber ? 'true' : 'false'))
console.log('plusNumber は' + (plusNumber ? 'true' : 'false'))
console.log('emptyObject は' + (emptyObject ? 'true' : 'false'))
console.log('emptyArray は' + (emptyArray ? 'true' : 'false'))
console.log('* * * * * * * * * * * *')
console.log('empty は' + (empty ? 'true' : 'false'))
console.log('zero は' + (zero ? 'true' : 'false'))
console.log('undefined は' + (undefined ? 'true' : 'false'))
// console.log('nuru は' + (nuru ? 'true' : 'false'))

