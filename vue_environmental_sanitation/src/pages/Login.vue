<template>
  <div class="login">
    <div class="head">
      
    </div>
    <div class="content">

    </div>
    <div class="container">
       <div style="font-size:38px;color:#425570;">用户登录    
            <!-- <span style="font-size:20px;color:#999">Login User</span> -->
        </div>
       <div class="text"><span>————</span> <span style="font-size:20px;color:#666">欢迎登录智慧城市管理系统</span> <span>————</span></div>
       <div class="userName">
           <img src="../assets/img/login/userImg.png" style="margin-bottom:-19.5px;background-color:#1e4365" alt="">
           <input type="text" placeholder="请输入用户名" v-model="userName" style="font-size:16px;height:46px;width:290px;margin-left:-5.5px;margin-top:8px;outline:none">
       </div>
       <div class="password">
           <img src="../assets/img/login/pwd.png" alt="" style="margin-bottom:-19.6px;background-color:#1e4365;height:49.7px">
           <input type="password" placeholder="请输入密码" v-model="psw" style=" font-size:16px;height:46px;width:290px;margin-left:-5.5px;margin-top:8px;outline:none">
       </div>
       <div class="other">
           <el-checkbox v-model="checked" class="rember">记住密码</el-checkbox>
           <el-link type="info" class="regiest">注册</el-link>
           <el-link type="primary" class="forget">忘记密码?</el-link>
       </div>
       <div class="btn">
           <el-button type="#1e4365" class="loginBtn" @click="login"><b>登录系统</b></el-button>
       </div>
    </div>

  </div>
</template>

<script>
export default {
name:"Login",
data(){
    return{
        checked: true,
        userName:'admin',
        psw:'123456'
    }
},
methods:{
    login(){
        // this.$router.push('/info')
        this.$router.push('/sixbtn')
    }
}
}
</script>

<style scoped>
body{
    height: 100%;
    width: 100%;
}
input{
    padding-left: 13px;;
}
.head{
    height: 50px;
    /* width: 100%; 
   background-image: linear-gradient(to right, #30b9cc , #76c4bc);
*/  background-image:linear-gradient(to right, #1D4264 , #000D37);
    } 
.content{
   /* height: 85vh;
     width: 100%; */
     height: 98vh;
    background: url('../assets/img/login/blue.jpg');
    background-size: 120%;
}
.container{
    height: 450px;
    width: 430px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.userName{
    margin-top: 50px;
}
.password{
    margin-top: 20px;
}
.other{
    display: flex;
    margin-top: 20px;
    /* justify-content:space-between */
    color: #1e4365;
}
.rember{
margin-left: 50px;
}
.regiest{
margin-left: 150px;
}
.forget{
margin-left: 15px;
color: #1e4365;

}
.btn{
    margin-top: 50px;
    color: #fff;
    /* font-size: 34.7px; */
}
.loginBtn{
    width: 300px;
    height: 50px;
    background-color: #1e4365;
    font: 26px;
    color: #ffff;
}
.text{
    margin-top: 20px;
}
</style>