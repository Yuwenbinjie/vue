<template>
  <header>
     <h1 v-on:click="change">{{zdytitle}}</h1>
  </header>
</template>

<script>
    export default {
      props:{
        zdytitle:{
          type:String,
          required:true
        }
      },
      data(){
        return{
          // title:"Vue title"
        }
      },
      methods:{
         change:function(){
          // this.zdytitle = "Vue.js"}
          //第一个参数是自定义事件名，第二个参数是数据
          this.$emit("titleChange","yuwen");}

      },
      //生命周期钩子函数
      // beforeCreate(){
      //   alert("在页面创建之前，也就是还没有创建");
      // },
      // created(){
      //   alert("开始在页面创建，但页面还没有显示");
      // },
      // beforeMount(){
      //   alert("页面创建完毕，页面还没有显示");
      // },
      // mounted(){
      //   alert("在页面创建之前，页面显示");
      // },
      // beforeUpdate(){
      //   alert("在页面更改之前");
      // },
      // updated(){
      //   alert("页面更改");
      //   this.change();
      // }
    
  }
</script>

<style scoped>
header{
  background: skyblue;
  padding:10px;
}
h1{
  color: #fff;
  text-align: center;
}
</style>