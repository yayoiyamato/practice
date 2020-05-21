'use strict'

function check(element) {
    if (element) {
      return 'true';
    } else {
      return 'false';
    }
}

const string = 'string'
const minusNumber = -1
const plusNumber = 1
const floatNumber = 0.1
const emptyObject = {}
const emptyArray = []
const zero = 0

/* 
 *  存在チェック
 * 
 *  # true
 *  - 'string': 文字列
 *  - 1, -1 : 整数（正・負）
 *  - 0.1 : 少数
 *  - {} : 空のオブジェクト
 *  - [] : 空の配列
 * 
 *  # false
 *  - '' : 空
 *  - 0
 *  - NaN
 *  - undefined
 *  - null
 */

console.log('string は' + check(string))
console.log('minusNumber は' + check(minusNumber))
console.log('plusNumber は' + check(plusNumber))
console.log('floatNumber は' + check(floatNumber))
console.log('emptyObject は' + check(emptyObject))
console.log('emptyArray は' + check(emptyArray))
console.log('* * * * * * * * * * * *')
console.log('empty は' + check(''))
console.log('zero は' + check(zero))
console.log('NaN は' + check(NaN))
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
console.log('* * * * * * * * * * * *')


/* 
 *  非数（数値型でない）判定
 *
 *  isNaNは 引数が数値型ではない場合、まず数値型へと型変換された上で比較される
 *  型変換を意図しない場合は Number.isNaN()を使用する
 */ 

console.log('isNaN(zero) は' + check(isNaN(zero)))  // false
console.log('isNaN(minusNumber)  は' + check(isNaN(minusNumber)))  // false
console.log('isNaN(plusNumber)  は' + check(isNaN(plusNumber)))  // false
console.log('isNaN(floatNumber) は' + check(isNaN(floatNumber)))  // false
console.log("isNaN('') は" + check(isNaN('')))  // false
console.log('isNaN(null) は' + check(isNaN(null)))  // false
console.log('isNaN(undefined) は' + check(isNaN(undefined)))  // true
console.log('* * * * * * * * * * * *')
console.log('Number.isNaN(zero) は' + check(Number.isNaN(zero)))  // false
console.log('Number.isNaN(minusNumber)  は' + check(Number.isNaN(minusNumber)))  // false
console.log('Number.isNaN(plusNumber)  は' + check(Number.isNaN(plusNumber)))  // false
console.log('Number.isNaN(floatNumber) は' + check(Number.isNaN(floatNumber)))  // false
console.log("Number.isNaN('') は" + check(Number.isNaN('')))  // false
console.log('Number.isNaN(null) は' + check(Number.isNaN(null)))  // false
console.log('Number.isNaN(undefined) は' + check(Number.isNaN(undefined)))  // false
console.log('* * * * * * * * * * * *')
