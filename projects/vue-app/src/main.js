import Vue from 'vue'
//引入路由模块，路由相当于a标签作用
import VueRouter from 'vue-router'
import App from './App'
import Routes from './routes'
import VueResource from 'vue-resource'
// import Users from './components/users'

Vue.config.productionTip = false
// 使用路由及请求模块
Vue.use(VueRouter)
Vue.use(VueResource)
//配置路由
const router = new VueRouter({
  routes:Routes,
  mode:"history"
})
/*注册全局组件*/
// Vue.component("users",Users);
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})

/*
  main.js:整个项目的逻辑主文件，
  index.html：整个项目的入口文件
  vue实例：vue的实例化对象，包含：el / iem / com
  temp:模版中可以写html／调用其他组件
  <App/>：代表模版要执行的组件文件，跟App.vue中的name属性有关
  comp：组件组中要包含需要调用的组件名，例如上面模版调用了<App/>
  ，那么组件组中就一定要包含App组件
  import:用于导入需要依赖的文件，例如上方组件组中，想要引入App组件，那么首先使用import引入这个组件文件
  import .. from ..:impot后面是自己起的名字，from后面是组件名字
*/
