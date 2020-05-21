'use strict'

function check(element) {
    if (element) {
      return 'true';
    } else {
      return 'false';
    }
}

/* 
 *  存在チェック
 * 
 *  # true
 *  - 文字列
 *  - 整数（正・負）
 *  - 少数
 *  - 空のオブジェクト {}
 *  - 空の配列 []
 *  - 無限大 ±Infinity
 * 
 *  # false
 *  - 空
 *  - 0
 *  - NaN(Number.NaN)
 *  - undefined
 *  - null
 */

console.log('string は' + check('string'))
console.log('-1 は' + check(-1))
console.log('1 は' + check(1))
console.log('0.1 は' + check(0.1))
console.log('{} は' + check({}))
console.log('[] は' + check([]))
console.log('Infinity は' + check(Infinity))
console.log('-Infinity は' + check(-Infinity))
console.log('* * * * * * * * * * * *')
console.log('空 は' + check(''))
console.log('0 は' + check(0))
console.log('NaN は' + check(NaN))
console.log('undefined は' + check(undefined))
console.log('null は' + check(null))
console.log('* * * * * * * * * * * *')


/* 
 *  配列の空判定
 *  Array.length
 */ 

console.log('[] は' + check([])) // true
console.log('[].length は' + check([].length)) // false
console.log('* * * * * * * * * * * *')


/* 
 *  オブジェクトの空判定
 *  Object.keys({}).length
 */ 

console.log('{} は' + check({})) // true
console.log('Object.keys({}) は' + check(Object.keys({}))) // true
console.log('Object.keys({}).length は' + check(Object.keys({}).length)) // false
console.log('* * * * * * * * * * * *')


/* 
 *  非数（数値型でない）判定
 *
 *  isNaNは 引数が数値型ではない場合、まず数値型へと型変換された上で比較される
 *  型変換を意図しない場合は Number.isNaN()を使用する
 */ 

console.log('isNaN(0) は' + check(isNaN(0)))  // false
console.log('isNaN(-1) は' + check(isNaN(-1)))  // false
console.log('isNaN(1) は' + check(isNaN(1)))  // false
console.log('isNaN(0.1) は' + check(isNaN(0.1)))  // false
console.log("isNaN('') は" + check(isNaN('')))  // false
console.log('isNaN(null) は' + check(isNaN(null)))  // false
console.log('isNaN(undefined) は' + check(isNaN(undefined)))  // true
console.log('* * * * * * * * * * * *')
console.log('Number.isNaN(0) は' + check(Number.isNaN(0)))  // false
console.log('Number.isNaN(-1) は' + check(Number.isNaN(-1)))  // false
console.log('Number.isNaN(1) は' + check(Number.isNaN(1)))  // false
console.log('Number.isNaN(0.1) は' + check(Number.isNaN(0.1)))  // false
console.log("Number.isNaN('') は" + check(Number.isNaN('')))  // false
console.log('Number.isNaN(null) は' + check(Number.isNaN(null)))  // false
console.log('Number.isNaN(undefined) は' + check(Number.isNaN(undefined)))  // false
console.log('* * * * * * * * * * * *')


/* 
 *  有限数（無限大でない）判定
 *
 *  isFiniteは 引数が数値型ではない場合、まず数値型へと型変換された上で比較される
 *  型変換を意図しない場合は Number.isFiniteは()を使用する
 *  ※ Infinityに対して行った計算はInfinityになるが、Infinityで割った値は0になる
 */ 

console.log('isFinite(0) は' + check(isFinite(0)))  // true
console.log('isFinite(-1) は' + check(isFinite(-1)))  // true
console.log('isFinite(1) は' + check(isFinite(1)))  // true
console.log('isFinite(0.1) は' + check(isFinite(0.1)))  // true
console.log("isFinite('') は" + check(isFinite('')))  // true
console.log('isFinite(null) は' + check(isFinite(null)))  // true
console.log('isFinite(undefined) は' + check(isFinite(undefined)))  // false
console.log('* * * * * * * * * * * *')
console.log('Number.isFinite(0) は' + check(Number.isFinite(0)))  // true
console.log('Number.isFinite(-1)  は' + check(Number.isFinite(-1)))  // true
console.log('Number.isFinite(1)  は' + check(Number.isFinite(1)))  // true
console.log('Number.isFinite(0.1) は' + check(Number.isFinite(0.1)))  // true
console.log("Number.isFinite('') は" + check(Number.isFinite('')))  // false
console.log('Number.isFinite(null) は' + check(Number.isFinite(null)))  // false
console.log('Number.isFinite(undefined) は' + check(Number.isFinite(undefined)))  // false
console.log('* * * * * * * * * * * *')


/* 
 *  整数判定
 *  isFiniteとの使い分けは小数を含むかどうか
 */ 

console.log('Number.isInteger(0) は' + check(Number.isInteger(0)))  // true
console.log('Number.isInteger(-1)  は' + check(Number.isInteger(-1)))  // true
console.log('Number.isInteger(1)  は' + check(Number.isInteger(1)))  // true
console.log('Number.isInteger(0.1) は' + check(Number.isInteger(0.1)))  // false
console.log("Number.isInteger('') は" + check(Number.isInteger('')))  // false
console.log('Number.isInteger(null) は' + check(Number.isInteger(null)))  // false
console.log('Number.isInteger(undefined) は' + check(Number.isInteger(undefined)))  // false
console.log('* * * * * * * * * * * *')
