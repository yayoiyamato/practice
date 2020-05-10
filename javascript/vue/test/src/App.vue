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
</style>
