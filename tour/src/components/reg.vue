<template>
     <div class="reg">
        <p class="goback" @click="goback"><span>《</span></p>
        <p class="regphoto"><img src="../assets/images/menu/nav_4.png" /></p>
        <form class="regpost">
            <strong>账号:</strong><input type="text" v-model="username"><br>    
            <strong>密码:</strong><input type="text" v-model="password"><br>  
            <strong>邮箱:</strong><input type="email"><br>  
            <input type="button" value="注册" @click="reging">
        </form> 
        <p class="tologin">已经有账号？<router-link to='/login'>立即登录</router-link></p>
        <p class="other-reg">其他登录方式</p>   
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
        reging(){
            let status = this.getCookie('status')  
            if(this.username == '' || this.password ==''){
                alert('请输入用户名和密码')
                return null;
            }
            if(status == null){
                let arr = [];
                arr.push({[this.username]:this.password})
                this.setCookie('status',JSON.stringify(arr));
                this.username = this.password = '';
                return null;
            }else{
                let str = this.getCookie('status');
                let arr1 = JSON.parse(str);
                let a = 0;
                dance:
                for(let i=0;i<arr1.length;i++){
                    for(let j in arr1[i]){
                        if(this.username == j){
                            alert('用户名重名');
                            a++;
                            break dance;
                        }
                    }
                }
                if(a == 1){
                    console.log('有重名')
                }
                if(a == 0){
                    arr1.push({[this.username]:this.password})
                    console.log(arr1)
                    let str1 = JSON.stringify(arr1);
                    this.setCookie('status',str1) 
                    alert('注册成功')
                    this.username = this.password = '';
                }
            }
                // let status = this.getCookie('status');
                // let arr = [];
                // if(status == null){
                //     arr.push({[this.username]:this.password})
                //     let str = JSON.stringify(arr);
                //     this.setCookie('status',str);
                //     this.username = this.password = '';
                // }else{
                //     let b = JSON.parse(status);
                //     console.log(b)
                //     for(let i=0;i<b.length;i++){
                        
                //         for(let j in b[i]){
                //             console.log(j=='123')
                //         }
                //     }
                // }   
        }   
    },
    mounted () {
        console.log(this.getCookie('status'))
    }
}
</script>
<style scoped>
    .reg{font-size: .8rem;background: rgba(240, 71, 226, 0.4);color: #00f;}
    .goback{width: 100%;clear: both;overflow: hidden;}
    .goback span{float: left;height: 100%;width: 1rem;text-align: center;}
    .regpost{padding: .3rem 0;}
    .regpost .rmb{font-size: .5rem;}
    .regpost input[type=text]{height: 1rem;width: 6rem;}
    .regpost input[type=email]{height: 1rem;width: 6rem;}
    .regpost input[type=button]{height: 1rem;width: 4.6rem;background: #f0c;}
    .reg .other{display: flex;justify-content: space-between;padding: .5rem 0;}
    .reg .other p img{width: 3rem;}
    .other-reg{margin: .5rem 0;}
    .tologin{font-size: .8rem;display: flex;justify-content: center;margin: .5rem 0;}
    .tologin a{background: rgb(223, 11, 81);}
</style>