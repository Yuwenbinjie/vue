<template>
  <div class="add-blog container">
    <h2 class="my-5">修改博客</h2>
    <form>
      <div class="form-group">
        <label>博客标题 : </label>
        <input type="text" class="form-control" v-model="blog.title">
      </div>

      <div class="form-group">
        <label>博客内容 : </label>
        <textarea class="form-control" rows="5" v-model="blog.content"></textarea>
      </div>

      <button class="btn btn-success my-3" v-on:click.prevent="editBlog">修改博客</button>
    </form>



  </div>
</template>

<script>
  export default {
    name: 'add-blog',
    data () {
      return {
        blog:{},
      }
    },
    methods:{
      display:function(id){
         this.$http.get("http://localhost:3000/blogs/"+id).then(function(res){
           this.blog = res.body;
         })
      },
      editBlog:function(){
        this.$http.put("http://localhost:3000/blogs/"+this.blog.id,{
          author:this.blog.author,
          sorts:this.blog.sorts,
          title:this.blog.title,
          content:this.blog.content
        }).then(function(){
          this.$router.push({path:"/"})
        })

      }
    },
    created(){
      this.display(this.$route.params.id)
    }
  }
</script>

<style scoped>

</style>
