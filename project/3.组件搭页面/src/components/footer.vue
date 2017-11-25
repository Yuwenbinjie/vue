<template>
  <footer>
    <h1>{{title}}</h1>
  </footer>
</template>

<script>
    export default {
      data(){
        return{
          title:"Vue footer"
        }
      },
      methods:{
        
      }
    }
</script>

<style scoped>
footer{
  background: hotpink;
  padding:10px;
}
h1{
  color: pink;
  text-align: center;
}
</style>