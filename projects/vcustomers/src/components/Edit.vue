<template>
  <div id="edit" class="container">
    <h1 class="text-muted">修改信息</h1>
    <br>
    <form v-on:submit="editCustomer">
      <div class="form-group">
        <label>姓名</label>
        <input type="text" class="form-control"  v-model="customer.name">
      </div>
      <div class="form-group">
        <label>电话</label>
        <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
      </div>
      <div class="form-group">
        <label>邮箱</label>
        <input type="text" class="form-control" placeholder="email" v-model="customer.email">
      </div>
      <div class="form-group">
        <label>个人简介</label>
        <textarea class="form-control" rows="10" v-model="customer.profile"></textarea>

      </div>
      <button class="btn btn-primary btn-block">修改</button>
    </form>
  </div>
</template>

<script>


  export default {
    name: 'edit',
    data(){
      return{
        customer:{}
      }
    },
    methods:{
      fetchCustomers:function(id){
        this.$http.get("http://localhost:3000/users/"+id).then((res)=>{
          console.log(res.body);
          this.customer = res.body;
        })
      },
      editCustomer:function(e){
//        console.log(123);
        e.preventDefault();
        if(!this.customer.name || !this.customer.phone ||!this.customer.email){
          console.log("请输入对应的内容！");
        }else{
          let newCustomer = {
            name:this.customer.name,
            phone:this.customer.phone,
            email:this.customer.email,
            profile:this.customer.profile
          }
          this.$http.put("http://localhost:3000/users/"+this.customer.id,newCustomer).then((res) => {
//            console.log(res);
            //路由跳转
            this.$router.push({path:"/",query:{alert:"用户修改成功"}});
          })
        }
      }

    },
    created(){
      this.fetchCustomers(this.$route.params.id);
    }
  }
</script>

<style>

</style>
