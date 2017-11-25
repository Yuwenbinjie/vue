<!-- template:是我们需要的模版，有且只有一个根标签 -->
<template>
  <div id="users">
      <ul>
        <li v-for="user in users">
          {{user}}
        </li>
      </ul>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          users:["miaojie","gaojie","binjie"]
        }
      },
      methods:{
        
      }
    }
</script>

<style>

</style>