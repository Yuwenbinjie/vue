new Vue({
	el:"#vue-app",
	data:{
	  age:18,
	  x:0,
	  y:0
	},
	methods:{
      addAge:function(inc){
      	// console.log("+1岁");
      	this.age+=inc;
      },
      subtractAge:function(dec){
      	// console.log("-1岁");
      	this.age-=dec;
      },
      moveXY:function(event){
      	// console.log("鼠标正在移动中...");
      	// console.log(event);
      	this.x=event.offsetX;
      	this.y=event.offsetY;
      },
      // js中
      stopPropagation:function(event){
        // event.stopPropagation();
      } ,
      alert:function(){
      	alert("hello world");
      },
      logName:function(){
      	console.log("名字正在打印中!")
      },
      logAge:function(){
      	console.log("年龄正在打印中!")
      }

	}
});
/*
事件:是按钮触发是处理逻辑的方法
v-on:给某个事件<click>绑定到某个元素上
"@":语法糖,跟v-on效果一样
事件值:可以是对应的方法,也可以使具体的属性
优先级:首先找方法,如果没有方法那么找属性
事件修饰符:
stop:阻止冒泡事件
once:事件只生效一次
prevent:阻止默认事件
*/