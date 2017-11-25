<!-- template:是我们需要的模版，有且只有一个根标签 -->
<template>
  <div id="app">
      <ul>
        <li><router-link to="/">home</router-link></li>
        <li><router-link to="/test">test</router-link></li>
      </ul>
      <router-view></router-view>
  </div>
</template>

<script>


  export default {
    name: 'app',
    data() {
      return {
      }
    },
    methods: {
      }

  }

</script>

<style scoped>

</style>
