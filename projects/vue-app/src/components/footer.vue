<template>
  <footer>
    <h1>{{title1}}{{zdytitle}}</h1>
  </footer>
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
          title1:"Vue footer"
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