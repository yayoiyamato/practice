<template lang="pug">
  #app
    img(alt="Vue logo" src="./assets/logo.png")
    h2 ｛｛ ｝｝
    p DOM要素の内側をテキストノードとして部分的に書き換える
    p 名前： {{ name }}
    hr
    h2= 'v-text'
    p DOM要素の内側をテキストノードとして全部書き換える
    p(v-text="name")
    hr
    h2 v-html
    p 要素の innerHTML を書き換える
    p ※ HTML を Web サイト上で動的に描画するセキュリティ上危険なため注意
    p ※ 単一ファイルコンポーネントでは、scoped スタイルは v-html 内のコンテンツには適用されない
    p(v-html='tag')
    hr
    h2 v-show
    p 式の値の真偽に応じて、要素の CSS プロパティ display をトグルし、表示／非表示を切り替える
    p(v-show='isShow') isShowがtrueのとき表示
    button(@click='isShow = !isShow') true / false 切替
    hr
    h2 v-if, v-else, v-else-if
    p 初期表示において条件が最初に true になったときに描画（false の場合描画しない）
    p v-show：初期条件に関わらず常に描画され、要素を表示／非表示をCSSベースで切り替える
    p 
      strong v-for と一緒に使用した場合は、v-forが優先される
    p
      span(v-if="color === 'green'") colorが「green」のとき表示
      span(v-else-if="color === 'yellow'") colorが「yellow」のとき表示
      span(v-else) colorがその他のとき表示
      span （color = {{ color }}）
    button(@click='color = colors[ Math.floor( Math.random() * 3 ) + 1 ]') color の値を変更
    hr
    h2 v-for
    p 要素またはテンプレートブロックをループして描画する
    p 
      strong 配列の場合：
      br 
      | v-for="item in items"
      br 
      | v-for="(item, index) in items"
    p 
      srtong オブジェクトの場合：
      br
      | v-for="(val, key) in object"
      br
      | v-for="(val, name, index) in object"
    ul
      li(v-for='(val, name, index) in monster') {{ index }}：{{ name }} = {{ val }}
    hr
    h2 v-bind
    p HTML の属性を動的に指定できる
      br
      | ｛｛ ｝｝はhtmlのタグの中に書くことはができないからv-bind使う
    p :value="formData（やっぴ）"
      br
      input(type="text" :value="formData")
    hr

</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: function () {
    return {
      name: 'やい',
      tag: '<span style="color:pink">pタグのinnerHTMLを文字色pinkのspanタグに置き換え</span>',
      isShow: true,
      color: 'green',
      colors: [
        'green',
        'yellow',
        'pink',
        'blue'
      ],
      monster: {
        name: 'mike',
        color: 'lightgreen',
        friends: [
          'sally',
          'boo'
        ]
      },
      formData: 'やっぴ'
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
  ul
    padding 0
    li
      list-style none
</style>
