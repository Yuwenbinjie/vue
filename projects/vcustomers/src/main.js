import Vue from 'vue'
import VueRouter from 'vue-router'//引入路由
import VueResource from 'vue-resource'

import App from './App'
import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import CustomerDetail from './components/CustomerDetail'
import Edit from './components/Edit'

Vue.config.productionTip = false
Vue.use(VueRouter)//使用路由
Vue.use(VueResource)//使用路由

const router = new VueRouter({
  routes:[
    {path:"/",component:Customers},
    {path:"/about",component:About},
    {path:"/add",component:Add},
    {path:"/customerDetail/:id",component:CustomerDetail},
    {path:"/edit/:id",component:Edit}
  ],
  mode:"history",
  base:__dirname
})

new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
