'use strict'

console.log(this) // {}

var obj = {
  value: 1,
  show: function() {
  
    console.log(this.value); // 1

  /*
  function show() {
    console.log(this.value); // グローバル変数のvalueを呼ぶので undefined になる
  }
  */

  /* 対処法①：thisを別の変数で持っておく
   *「self」, 「that」, 「_this」が使われる事が多い
   */
  /*
   const self = this
  function show() {
    console.log(self.value); // 1
  }
  */


  /* 対処法②：アロー関数式を使う
     アロー関数式で宣言された関数は、宣言された時点で、thisを確定（＝束縛）させる
  */
  
  const show = () => {
    // この時点の this(= obj)を確定させる
    console.log(this.value); // 1
  }
    show();
  }
};
obj.show();
