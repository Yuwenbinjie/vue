<template>
  <header>
    <h1>{{title}}</h1>
  </header>
</template>

<script>
    export default {
      data(){
        return{
          title:"Vue title"
        }
      },
      methods:{
        
      }
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