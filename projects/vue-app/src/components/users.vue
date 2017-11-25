<!-- template:是我们需要的模版，有且只有一个根标签 -->
<template>
  <div id="users">
    <div v-for="user in zdyusers" v-on:click="user.show = !user.show" class="per">
         <h2>{{user.name}}</h2>
         <p>{{user.phone}}</p>
    </div>
    <button v-on:click="del">删除</button>

  </div>
</template>

<script>
    export default {
      // props:["zdyusers"],
      props:{
        zdyusers:{
          type:Array,
          required:true
        }
      },
      data(){
        return{
        }
      },
      methods:{
        del:function(){
          this.zdyusers.pop();
        }
      }
    }
     /*
      属性传值：从父组件传值到子组件
      1.属性绑定
      2.自定义属性
      3.props
      传值 & 传引用
      引用：Object，Array
      传值：String，Number，Boolean


      事件传值：从子组件传值到父组件
      1.注册事件<$emit>
      2.绑定事件<v-on:自定义事件>
      3.实现方法及逻辑
    */
</script>

<style scoped>
#users{
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
.per{
  background: lightgreen;
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
