import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import App from './App'
import Routes from './routers'

Vue.config.productionTip = false
Vue.use(VueResource)//请求
Vue.use(VueRouter)//路由

//自定义指令(钩子函数)－－全局
// Vue.directive('color',{
//   bind(el,binding,vnode){
//     el.style.color = "#" + Math.random().toString(16).slice(2,8)
//   }
// })

//自定义过滤器－－全局
// Vue.filter("upper",function(value){
//   return value.toUpperCase();
// })
Vue.filter("hide",function(value){
  return value.slice(0,100)+"...";
})

//创建路由
const router = new VueRouter({
  routes:Routes,
  mode:"history"
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router:router,
})
