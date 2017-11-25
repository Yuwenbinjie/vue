new Vue({
	el:"#vue-app",
	data:{
	     a:0,
        b:0,
        age:20
	},
	methods:{
            // 调用这个的时候 B也调用 点一个 所有的方法都会执行
            // addToA:function(){
            //    console.log("addToA");
            //    return this.a+this.age;
            // },
            // addToB:function(){
            //    console.log("addToB");
            //    return this.b+this.age; 
            // }
            // 方法是事件触发的 用的更多
	},
      // computed 是属性
      computed:{
            addToA:function(){
               console.log("addToA");
               return this.a+this.age;
            },
            addToB:function(){
               console.log("addToB");
               return this.b+this.age; 
            }
      }
});
/*
computed 计算属性
computed:计算属性和方法Methods使用方式极度相似
   使用场景:处理频繁调用方法的时候(eg:搜索),建议使用计算属性
   使用规则:计算属性,在调用的时候,不能加方法()
 用computed点谁谁动
*/