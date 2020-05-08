<template lang="pug">
  #app
    img(alt="Vue logo" src="./assets/logo.png")
    HelloWorld(msg="Welcome to Your Vue.js App")
    p {{ name }}
    div(v-html="htmlTag")
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
      htmlTag: '<strong>やい！</strong>'
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
