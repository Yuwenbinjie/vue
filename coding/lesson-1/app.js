new Vue({
	el:"#vue-app",
	data:{
		name:"henry",
		job:"web开发",
		website:"http://www.thenewstep.com",
		websiteTag:"<a href='http://www.thenewstep.com'>thenewstep</a>"
	},
	methods:{
       greet:function(time){
       	// 接收形参
       	 return "Good"+" "+time+" "+this.name+"!";
       }
	}
});
/*

new 里面 的东西都能到了DOM里面
el:element- 需要控制的标签元素(操作DOM)
data:对象(函数是对象也是数据) key->value 里面存的是各个类型的数据(array object number string) 属性
method:用于存储各种方法 方法直接用
v-bind:用于绑定某个属性(指令)
v-html:用于给某个标签绑定值为标签的属性
":":是v-bind的语法糖,和v-bind相同的效果 
*/