<template>
  <div class="add-blog container">
     <h2 class="my-5">添加博客</h2>
    <form>
       <div class="form-group">
         <label>博客标题 : </label>
         <input type="text" class="form-control" v-model="blog.title">
       </div>

      <div class="form-group">
        <label>博客内容 : </label>
        <textarea class="form-control" rows="5" v-model="blog.content"></textarea>
      </div>

      <div class="form-check">
        <label>博客分类 : </label>
        <label class="form-check-label ml-3">
          <input class="form-check-input" type="checkbox" value="Node.js" v-model="blog.sorts"> Node.js
        </label>
        <label class="form-check-label ml-3">
          <input class="form-check-input" type="checkbox" value="Vue.js" v-model="blog.sorts"> Vue.js
        </label>
        <label class="form-check-label ml-3">
          <input class="form-check-input" type="checkbox" value="Angular4" v-model="blog.sorts"> Angular4
        </label>
      </div>

      <div class="d-flex">
        <label>博客作者 : </label>
        <select class="form-control w-25 ml-3" v-model="blog.author">
          <option v-for="author in authors">
            {{author}}
          </option>
        </select>
      </div>

      <button class="btn btn-success my-3" v-on:click.prevent="addBlog">添加博客</button>
    </form>

    <hr>

    <div class="card">
      <div class="card-header">
        <h4 class="card-title">博客预览</h4>
      </div>
      <div class="card-body">
        <p class="card-text"><strong>博客标题 : </strong>{{blog.title}}</p>
        <p class="card-text"><strong>博客内容 : </strong>{{blog.content}}</p>
        <p class="card-text">
          <strong>博客分类 : </strong>
          <span v-for="sort in blog.sorts">
            {{ sort }} ,
          </span>
        </p>
        <p class="card-text"><strong>博客作者 : </strong>{{blog.author}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'add-blog',
    data () {
      return {
        blog:{
          title:"",
          content:"",
          sorts:[],
          author:""
        },
        authors:["宇文彬杰","苗杰","张乐"]

      }
    },
    methods:{
      addBlog:function(){
        this.$http.post("http://localhost:3000/blogs",{
          author:this.blog.author,
          sorts:this.blog.sorts,
          title:this.blog.title,
          content:this.blog.content
        }).then(function(res){
           this.$router.push({path:"/"})
        })

      }
    }
  }
</script>

<style scoped>

</style>
