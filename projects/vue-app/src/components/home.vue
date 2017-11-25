<!-- template:是我们需要的模版，有且只有一个根标签 -->
<template>
  <div id="app">
    <app-header v-bind:zdytitle="title" v-on:titleChange="updateTitle($event)"></app-header>
    <app-users v-bind:zdyusers="users"></app-users>
    <app-footer v-bind:zdytitle="title"></app-footer>
  </div>
</template>

<script>
  import Header from './header'//引入组件
  import Footer from './footer'
  import Users from './users'

  export default {
    name: 'home',
    components: {
      "app-header": Header,//注册组件
      "app-footer": Footer,
      "app-users": Users
    },
    data() {
      return {
        users: [],
        title: "Angularjs"
      }
    },
    methods: {
      updateTitle: function (title) {
        this.title = title;
        console.log(title);
      }
    },
    created(){
      this.$http.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
        console.log(res);
        this.users = res.body;
      })
    }
  }

</script>

<style scoped>

</style>
