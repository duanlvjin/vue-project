<template>
    <div class="collect">
        <p class="goback" @click="goback"><span>《</span>我的收藏</p>
        <dl class="colls" v-for="item in collects" :key='item.id'>
            <router-link :to="'/son/'+item.id+'?dataName='+dataName">
            <dt><img :src=item.src /></dt>
            <dd>
                <p>{{item.title}}</p>
                <p class="price">{{item.price}}</p>
                <p>{{item.detail}}</p>
            </dd>
            </router-link>
        </dl>     
    </div>
</template>
<script>
export default {
    data(){
        return {
            collects:[],
            dataName:'collect'
        }
    },
    methods: {
        goback() {
                this.$router.go(-1);
        }
    },
    created() {
        this.$http({
            url:`/static/data/collect.data`,
        }).then(
            (res)=>{           
                    this.collects = res.data
                }
        )
    }
}
</script>

<style scoped>
    .colls{width: 100%;height: 3rem;font-size: .5rem;background: #ccc;}
    .colls dt img {float: left; height: 3rem;}
    .colls dd p{font-size: .85rem;text-align: start;}
    .colls dd p.price{color: red;}
    .goback{width: 100%;clear: both;overflow: hidden;}
    .goback span{float: left;height: 100%;width: 1rem;text-align: center;}
</style>

