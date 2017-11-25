<!-- template:是我们需要的模版，有且只有一个根标签 -->
<template>
  <div id="app">
 <!--    <img src="./assets/logo.png"> -->
    <HelloWorld/>
  </div>
</template>
<!--
 script：标签中囊括的是所有的属性和方法
 export default{}：对外公开当前文件可被其他文件引入
 name：给当前组件起名，此名字可以在其他组件中以标签的形势调用
 components：承载所有当前需要组件需要依赖的其它组件
 -->
<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>
