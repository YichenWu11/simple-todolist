<template>
    <div style="margin-top:120px" class="main">
        <el-form :rules="rules_for_login" :model="this">
            <el-form-item 
            label="用户名" 
            prop="username">
                <el-input v-model="username" ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="password" type="password"></el-input>
            </el-form-item>
            <el-form>
                <el-button plain @click=Login type="primary">登录</el-button>
                <el-button plain @click=open type="primary" style="margin-left:80px;">注册</el-button>
            </el-form>    
        </el-form>

        

        <!-- 注册用的dialog -->
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%">
        <el-form :rules="rules_re" :model="form">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>
        </el-form>
        
        <span slot="footer" class="dialog-footer">
            <el-button @click=close>取消</el-button>
            <el-button type="primary" @click=Register>注册</el-button>
        </span>
        </el-dialog>    
    </div>

</template>

<script>
import { login, register } from '../api/api'

export default {
    name:'Login',
    data() {
        return {
            dialogVisible: false,
            username:'',
            password:'',
            rules_for_login: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { max: 20,  message: '长度不超过20个字符', }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],         
            },
            rules_re: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],   
                email: [
                    { required: true, message: '请输入邮箱', trigger: 'blur', validator: 'checkEmail'  },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                ]      
            },
            // 注册用的
            form: {
                username:'',
                password: '',
                email:'',
            },
        }
    },
    methods: {
        checkEmail(rule, value, callback) {
            const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
            if (!value) {
            return callback(new Error('邮箱不能为空'))
            }
            setTimeout(() => {
            if (mailReg.test(value)) {
                callback()
            } else {
                callback(new Error('请输入正确的邮箱格式'))
            }
            }, 100)
        },
        Login() {
            login({'username':this.username, 'password':this.password}).then(response => {
                // console.log(response.data)
                sessionStorage.clear()
                localStorage.token = response.data.token
                localStorage.username = response.data.username
                this.$message({
                    message: '欢迎 ' + localStorage.username + ' !',
                    type: 'success'
                })
                this.$router.push('/task-center')
            }).catch((error) => {
                this.$message.error("登陆失败，请检查用户名或密码是否正确")
                console.log(error.response)
            })
        },
        Register() {
            register(this.form).then(response => {
                this.$message({
                    message: '注册成功!',
                    type:'success'
                })
            }).catch(error => {
                this.$message.error("注册失败!")
            })
            this.dialogVisible = false
            this.form = {
                username:'',
                password: '',
                email:'',
            }
        },
        open() {
            this.dialogVisible = true
        },
        close() {
            this.dialogVisible = false
            this.$message({
                message: '已取消注册',
                type: 'info'
            })
            // 清空状态
            this.form = {
                username:'',
                password: '',
                email:'',
            }
        },
    }
}

</script>

<style scoped>
    .main {
        background-color: rgb(248, 247, 247);
        width: 500px;
        height: 400px;
        border: 1px solid lightgray;
        border-radius:5px;
    }

</style>
