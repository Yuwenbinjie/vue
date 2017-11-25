var vue1 = new Vue({
	el:"#vue-app1",
	data:{
		title:"this is vue1"
	},
	methods:{

	},
	computed:{
		greet:function(){
			return "hello vue1";
		}
	}
});

var vue2 = new Vue({
	el:"#vue-app2",
	data:{
		title:"this is vue2"
	},
	methods:{
       changevue1:function(){
       	  // document.getElementById("vue-app1").innerHTML="123";
       	 
       	  vue1.title = "123";
       }
	},
	computed:{
		greet:function(){
			return "hello vue2";
		}
	}
});
/*
   
*/