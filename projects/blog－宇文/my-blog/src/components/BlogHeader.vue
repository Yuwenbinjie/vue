<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-primary mb-3" id="blog-header">
    <div class="container">
      <a href="#" class="navbar-brand">导航</a>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">主页</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">添加博客</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
   export default{
     name:"blog-header"
   }
</script>
<style>

</style>
