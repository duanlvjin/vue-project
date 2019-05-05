<template>
    <div class="card">
          <p class="goback" @click="goback"><span>《</span>我的帖子</p>
       <div class="mymsg" v-for='item of card' :key='item.id'>
           <router-link :to="'/son/'+item.id+'?dataName='+dataName"> <p class="mytitle"><span class="cardtitle">{{item.title}}</span><span class="myauth">{{item.title}}</span></p>
            <p class="mycontent" v-html='item.content'></p></router-link>
        </div>
        
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            card:[],
            dataName:'card'
        }
    },
    methods: {
        goback() {
                this.$router.go(-1);
        }
    },
    mounted () {
        this.$http({
            url:`/static/data/card.data`,
        }).then(
            (res)=>{           
                    this.card = res.data
                }
        )
    }
}
</script>

<style>
    .card{width: 100%;font-size:0.8rem;}
    .card .mymsg{overflow: auto;width: 100%;height:4.2rem; background: rgba(255, 144, 215, .5);margin-bottom: 0.1rem;color: #000;}
    .card .mymsg .mytitle{display: flex;justify-content: space-around;border-bottom: 1px #ccc solid;padding: 0.1rem 0;}
    .card .mymsg .mycontent{font-size: 0.6rem;padding: 0.1rem;text-align: start;}
    .goback{width: 100%;clear: both;overflow: hidden;}
    .goback span{float: left;height: 100%;width: 1rem;text-align: center;}
</style>
