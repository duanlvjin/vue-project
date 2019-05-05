<template>
    <div class="login">
        <p class="goback" @click="goback"><span>《</span></p>
        <p class="loginphoto"><img src="../assets/images/person/head.png" /></p>
        <form class="loginpost">
            <strong>账号:</strong><input type="text" v-model="username"><br>    
            <strong>密码:</strong><input type="text" v-model="password"><br>  
            <input type="checkbox" name="" id=""><span class="rmb">记住密码？</span><br>
            <input type="button" value="登录" @click="loging">
        </form> 
        <p class="toreg">没有账号？<router-link to='/reg'>立即注册</router-link></p>
        <p class="other-login">其他登录方式</p>   
        <div class="other">
            <p><img src="../assets/images/menu/nav_1.png" />qq</p>
            <p><img src="../assets/images/menu/nav_2.png" />sina</p>
            <p><img src="../assets/images/menu/nav_3.png" />phone</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            username:'',
            password:''
        }
    },
    methods: {
        goback() {
        this.$router.go(-1);
        },
        loging(){
            let status = this.getCookie('status');
            let arr = JSON.parse(status);
             dance:
            for(let i=0;i<arr.length;i++){
                for(let j in arr[i]){
                    if(this.username == j){
                        if(this.password == arr[i][j]){
                            alert('登陆成功');
                             break dance;
                        }else{
                             alert('用户名或密码不正确');
                              break dance;
                        }
                    }else{
                        alert('用户名或密码不正确');
                         break dance;
                    }
                }
            }
        },
    },
      mounted () {
        //   console.log(this.getCookie('status'))
      }
}
</script>

<style scoped>
    .login{font-size: .8rem;background: #ccc;}
    .goback{width: 100%;clear: both;overflow: hidden;}
    .goback span{float: left;height: 100%;width: 1rem;text-align: center;}
    .loginpost{padding: .3rem 0;}
    .loginpost .rmb{font-size: .5rem;}
    .loginpost input[type=text]{height: 1rem;width: 6rem;}
    .loginpost input[type=button]{height: 1rem;width: 4.6rem;background: #f0c;}
    .login .other{display: flex;justify-content: space-between;}
    .login .other p img{width: 3rem;}
    .other-login{margin: .5rem 0;}
    .toreg{font-size: .8rem;display: flex;justify-content: center;margin: .5rem 0;}
    .toreg a{background: rgb(223, 11, 81);}
</style>
