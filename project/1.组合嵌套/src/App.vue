<!-- template:是我们需要的模版，有且只有一个根标签 -->
<template>
  <div id="app">
    <sbqusers></sbqusers>
  </div>
</template>

<script>
import Users from './components/users'
    export default {
      name: 'app',
      components:{
         "sbqusers":Users,
         // Users
      },
      data(){
        return{
          
        }
      },
      methods:{
        
      }
    }
</script>
    
<style>

</style>
<!-- 
组件嵌套：至少有两个组件（包括根组件）
全局组件：需要在main.js注册，注册后可以在任何关联组件中使用
局部组件：哪个组件引入就在哪个组件使用

嵌套流程：
    1.设计组件内容，
    2.在引入组件中<app.vue>，script里import上方组件
    3.在引入组件中<app.vue>，export里components进行注册
    4.在引入组件template中<app.vue>，进行使用<users></users> 气一样的名字不会有问题
 -->
