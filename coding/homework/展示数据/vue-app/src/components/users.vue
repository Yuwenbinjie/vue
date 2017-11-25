<!-- template:是我们需要的模版，有且只有一个根标签 -->
<template>
  <div class="container">
      <h3 class="bg-primary p-3 text-white">展示数据</h3>
      <table class="table table-bordered table-hover">
        <thead>
           <tr>
             <th>姓名</th>
             <th>职位</th>
             <th>电话</th>
             <th>删除</th>
           </tr>
        </thead>
        <tbody>
          <tr v-for="(user,index) in users">
             <td>{{user.name}}</td>
             <td>{{user.job}}</td>
             <td>{{user.phone}}</td>
             <td v-on:click="del(index)">&times;</td>
           </tr>
        </tbody>
         
      </table>
      <h3 class="bg-primary p-3 text-white">添加数据</h3>
      <div>
         <div class="form-group bg-light ">
           <label>姓名</label>
           <input type="text" class="form-control" v-model="name">
         </div>
         <div class="form-group">
           <label>工作</label>
           <input type="text" class="form-control" v-model="job">
         </div>
         <div class="form-group">
           <label>电话</label>
           <input type="text" class="form-control" v-model="phone">
         </div>
         <button class="btn btn-primary btn-block" v-on:click="add()">提交</button>
      </div>
  
    
  </div>
</template>

<script>
    export default {
      data(){
        return{
          name:"",
          job:"",
          phone:"",
          users:[
          {name:"jacob",job:"程序员",phone:110123},
          {name:"job",job:"程序员",phone:110345},
          {name:"marry",job:"程序员",phone:15710896},
          {name:"yuwen",job:"程序员",phone:11880},
          {name:"binjie",job:"程序员",phone:118880},
          {name:"jacob",job:"程序员",phone:110544},
          ]
        }
      },
      methods:{
        del:function(index){
           this.users.splice(index,1);
        },
        add:function(){
           var str = {name:this.name,job:this.job,phone:this.phone};
           this.users.push(str);
           // console.log(this.users);
        }
      }
    }
</script>

<style scoped>

</style>