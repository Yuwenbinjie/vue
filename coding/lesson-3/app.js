new Vue({
	el:"#vue-app",
	data:{
	  age:18,
        name:"Henry"
	},
	methods:{
            logName:function(){
                  this.name=document.getElementById('name').value;  //直接操作DOM
                  console.log(this.$refs.name.value);
             //      this.name=this.$refs.name.value;
            	// console.log("名字正在打印中!");
            },
            logAge:function(){
            	console.log("年龄正在打印中!");
                  this.age=this.$refs.age.value;
                  // this.age=document.getElementById('age').value;
            }

	}
});
/*
双向数据绑定
v-model:双向数据绑定的指令,应用于input/textarea/select (其他的不用)
ref:用于设置元素唯一标识,通过$refs获取属性值
*/