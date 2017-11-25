<!-- template:是我们需要的模版，有且只有一个根标签 -->
<template>
  <div id="users">
    <div v-for="user in users" v-on:click="user.show = !user.show" class="per">
         <h2>{{user.name}}</h2>
         <p v-show="user.show">{{user.job}}</p>
    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          users:[
          {name:"jacob",job:"程序员",show:false},
          {name:"jacob",job:"程序员",show:false},
          {name:"jacob",job:"程序员",show:false},
          {name:"jacob",job:"程序员",show:false},
          {name:"jacob",job:"程序员",show:false},
          {name:"jacob",job:"程序员",show:false}
          ]
        }
      },
      methods:{
        
      }
    }
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