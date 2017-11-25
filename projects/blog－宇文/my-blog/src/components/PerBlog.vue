<template>
  <div id="per-blog" class="container">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">
          {{blog.title}}
          <span class="float-right">
            <router-link class="btn btn-success" v-bind:to="/edit/+blog.id">编辑</router-link>
            <button class="btn btn-warning" v-on:click="delPer(blog.id)">删除</button>
          </span>
        </h4>
      </div>
      <div class="card-body">
        <p class="card-text"><strong>内容 : </strong>{{blog.content}}</p>
        <p class="card-text">
          <strong>分类 : </strong>
          <span v-for="sort in blog.sorts">
            {{ sort }} ,
          </span>
        </p>
        <p class="card-text"><strong>作者 : </strong>{{blog.author}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:"per-blog",
    data(){
      return {
         blog:{}
      }
    },
    methods:{
      display:function(id){
        this.$http.get("http://localhost:3000/blogs/"+id).then(function(res){
          this.blog = res.body;
        })
      },
      delPer:function(id){
        this.$http.delete("http://localhost:3000/blogs/"+id).then(function(){
          this.$router.push({path:"/"});
        })
      }
    },
    created(){
//      console.log(this.$route.params.id);
      this.display(this.$route.params.id);
    }
  }
</script>
