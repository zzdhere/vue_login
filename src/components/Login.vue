<template>
<div class = "note" :style = "note">
<div class = "loginFrame">
    <el-form ref = "AccountForm" :model = "account"   rules = "rules" label-position = "left" label-width = "0px" class = "demo-ruleForm login-container">
    <el-tabs v-model = "activeName" @tab-click = "handleClick" class = "users">
        <el-tab-pane label = "UserOne" name = "students">UserOne</el-tab-pane>
        <el-tab-pane label = "UserFirst" name = "teacher">UserFirst</el-tab-pane>
    </el-tabs>
 
<el-form-item prop = "username">
    <el-input type = "text" v-model = "account_username" auto-complete = "off" placeholder = "UserName"></el-input></el-form-item> 
<el-form-item prop = "password">
    <el-input type = "password" v-model = "account_password" auto-complete = "off" placeholder = "Password"></el-input></el-form-item>
<el-checkbox v-model = "checked" checked class = "remember">remember the password </el-checkbox>
<div><br/></div>
<el-form-item style = "width:100%;">
    <el-button type = "primary" style = "width:100%;" >Login</el-button>
</el-form-item>
    </el-form>
    </div>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data() {
        return {
            logining : false,
            note: {
                position:"absolute",
                top:"0px",
                left:"0px",
                width: "100%",
                height:"100%",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat" 
            },
            account : {
                username:'',
                password:'',
            },
            rules: {
                username :[
                    {required: true, message: 'UserName',trigger: 'blur'},
                ],
                password: [
                    {required: true,message: 'Password', trigger: 'blur'},
                ]
            },
            checked: false
           
        };
        
    }
}</script>
 
<style>
.login-container {
    box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff
    ;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6; 
}</style>
