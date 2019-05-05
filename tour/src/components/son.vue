<template>
    <div class="son">
        <p class="goback" @click="goback"><span>《</span>子详情页</p>
        <div class="son-content">
            <div class="son-head">
                <h2 v-cloak><img width=120 :src="son.author_face?son.author_face:'../assets/images/person/head.png'" alt=""/></h2>
                <p v-cloak>作者名字:{{$route.params.aid}}/{{$route.query.dataName}}</p>
                </div>
            <div class="son-cont">
                <h3 v-cloak>{{son.title}}</h3>
                <div class="son-time"><p v-cloak>{{son.time | date}}<span><img src="../assets/images/index/zan1.png" alt=""/></span></p></div>
                <div v-cloak class="son-text" v-html="son.content"></div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return {
            son:{},
            data:null
        }
    },
    methods: {
        goback() {
          this.$router.go(-1);
        }
    },
    mounted(){
    let id=this.$route.params.aid;
    let dataName=this.$route.query.dataName;
    this.$http({
      url:`/static/data/article_${dataName}.data`,
    }).then(
      (res)=>{
        this.son = res.data[id-1]
        }
    )
  }
}
</script>
<style>
    /* 配合v-cloak指令能在网速慢时，隐藏来不及编译的{{item.xx}},等到数据来时编译好了自动显示 */
    /* 一般加在最顶层上#如app */
    [v-cloak] {display: none;}   

    .son{font-size: .75rem;background: rgba(0, 0, 0, .3)}
    .son-head{width: 100%;}
    .son-head p{text-align: start;}
    .son-head h2{width: 100%;overflow: hidden;}
    .son-head h2 img{float: left;}
    .son-time p{text-align:start;}
    .son-text {height: 15rem;overflow: hidden;}
    .goback{width: 100%;clear: both;overflow: hidden;}
    .goback span{float: left;height: 100%;width: 1rem;text-align: center;}
</style>
