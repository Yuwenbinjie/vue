<template>
  <div id="app">
    <!--<Add></Add>-->
    <!--<Show></Show>-->
    <BlogHeader></BlogHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import Add from './components/AddBlog'
import Show from './components/Show'
import BlogHeader from './components/BlogHeader'
import Per from './components/PerBlog'

export default {
  name: 'app',
  components: {
    Add,Show,BlogHeader,Per
  }
}
</script>

<style>

</style>
