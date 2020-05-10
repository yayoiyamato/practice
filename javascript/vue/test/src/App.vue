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
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: function () {
    return {
      name: 'やい',
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
