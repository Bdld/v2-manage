<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>通用后台管理系统</span>
            </div>
            <el-form label-width="80px" :model="form" ref="form" :rules="rules">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username" ></el-input>
                </el-form-item>
                <el-form-item type="password" label="密码" prop="password">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
                <el-button type="primary" @click="login('form')">登录</el-button>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { nameRule,passRule } from '../untils/valodate.js'
import { setToken } from '../untils/setToken'
import { login } from '@/api/api.js'

export default {
    data() {
        return {
            form:{
                username:'',
                password:'',

            },
            rules:{
                username:[{validator:nameRule,trigger:'blur'}],
                password:[{validator:passRule,trigger:'blur'}],
            }
        }
    },
    methods: {
        login(form){
            this.$refs[form].validate((valid) => {
                if(valid) {
                    console.log(this.form)
                    // this.service.post('/login',this.form)
                    // .then((res) => {
                    //     if(res.status === 200){
                    //         setToken('username',res.data.username)
                    //         setToken('token',res.data.token)
                    //         this.$message({message:res.data.message,type:'success'})
                    //         this.$router.push('/home')
                    //     }
                    //     console.log(res);
                    // })
                    login(this.form).then((res) => {
                        if(res.status === 200){
                            setToken('username',res.data.username)
                            setToken('token',res.data.token)
                            this.$message({message:res.data.message,type:'success'})
                            this.$router.push('/home')
                        }
                    })
                }else {
                    console.error(this.form);
                }
            })

        }
    },
}
</script>

<style lang="less">
.login{
    width:100%;
    height:100%;
    position: absolute;
    background: url(../assets/pic1.jpg) center no-repeat;
    .el-form .el-form-item__label{
        width: 100px;
        color: #fff;
    }
    .el-card {
        background: #65768557;
    }
    .box-card{
        width: 400px;
        margin:200px auto;
        .el-card__header{
            font-size:34px;
        }
        .el-button{
            width: 100%;
        }
    }
}
</style>