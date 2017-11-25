<!-- template:是我们需要的模版，有且只有一个根标签 -->
<template>
  <div id="app">
     <app-header></app-header>
     <app-users></app-users>
     <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/header'//引入组件
import Footer from './components/footer'
import Users from './components/users'
    export default {
      name: 'app',
      components:{
        "app-header":Header,//注册组件
        "app-footer":Footer,
        "app-users":Users
      },
      data(){
        return{
          
        }
      },
      methods:{
        
      }
    }
</script>
    
<style scoped>

</style>
