<template>
  <div class="show container">
    <div class="d-flex justify-content-between my-5">
      <h2 class="w-25">博客总览</h2>
      <div class="input-group w-50">
        <span class="input-group-addon bg-primary text-white">搜索</span>
        <input type="text" placeholder="请输入关键字..." v-model="search" class="form-control" >
      </div>
    </div>

    <div v-for="blog in filterBlog" class="card my-3">
       <router-link v-bind:to="/per/+blog.id">
         <p class="card-header" >{{blog.title | upper}}</p>
       </router-link>

       <div class="card-body">
         <P class="card-title">作者 ： {{blog.author}}</P>
         <div class="card-text">内容 ： {{blog.content | hide}}</div>
       </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'show',
    data () {
      return {
         blogs:[],
         search:""
      }
    },
    created(){
      this.$http.get("http://localhost:3000/blogs").then(function(res){
//        console.log(res);
         this.blogs = res.body;
      })
    },
    computed:{
      filterBlog:function(){
        return this.blogs.filter((blog)=>{
          return blog.title.match(this.search);
        })
      }
    },
    //局部过滤器
    filters:{
      upper(value){
        return value.toUpperCase();
      }
    },
    //局部自定义指令
    directives:{
      "color":{
        bind(el,binding,vnode){
          el.style.color = "#" + Math.random().toString(16).slice(2,8);
        }
      }

    }
  }
</script>

<style scoped>
  .card a{
    text-decoration: none;
  }
</style>
