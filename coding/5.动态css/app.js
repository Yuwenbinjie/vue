new Vue({
	el:"#vue-app",
	data:{
	  lock:false,
    locklen:false
	},
	methods:{
          
	},
   computed:{
      compClasses:function(){
         return{
            changeColor:this.lock,
            changelength:this.locklen
         }
      }
   }
     
});
/*
动态CSS样式
v-bind:class 用于绑定对用的样式对象(**一定是对象{}*)
class对象值:有两个值,分别是true&false
注意:在对象中,key值是样式,Value值是属性
经常改变样式,最好使用computed计算样式
*/