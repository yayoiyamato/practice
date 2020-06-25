'use strict'

/* Q1
 * const a = { a: 'a' } と const b = { b: 'b' } をマージした c を出力してください e.g{ a:'a', b:'b' }
 */
const a = { a: 'a' }
const b = { b: 'b' }
const c = { ...a, ...b}
console.log(c) // { a:'a', b:'b' }


/* Q2
 * const arry = ['aa','bb','cc','dd','ee','ff','gg']; のdd,ee,ffを新たな配列として返してください
 */
const arry = ['aa','bb','cc','dd','ee','ff','gg']
const newArry = arry.slice(3, 6)
console.log(newArry) // [ 'dd', 'ee', 'ff' ]

// やいの解答：×
// const newArry = [arry[4], arry[5], arry[6]]


/* Q3
 * ['a','b’] の要素をconsole出力してください e.g 'a'と'b'
 */
const q3 = ['a', 'b']
q3.forEach((e) => console.log(e)) // a b


/* Q4
 * ['a', 'b']の各要素にindex値を足した文字列を出力してくださいe.g 'a0'と'b1'
 */
const q4 = ['a', 'b'] 
q4.forEach((e, i) => console.log(e + i)) // a0 b1


/* Q5
 * 任意の変数名の[1,2]を定義して配列かどうかを評価してください e.g trues
 */
const q5 = [1,2]
console.log(Array.isArray(q5))

// object instanceof constructor 継承しているオブジェクトのインスタンス比較
// console.log(q5 instanceof Array)でも true になる
