<template>
    <div class="dest">
        <div class="part" v-for='item in destnation' :key="item.id">
            <router-link :to="'/son/'+item.id+'?dataName='+dataName"><img :src=item.src /></router-link>
            <p class="partname"><span>{{item.title}}{{item.price}}</span><span>{{item.detail}}</span></p>
        </div>
        
       
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            destnation:[],
            dataName:'destnation'
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
                    this.destnation = res.data
                }
        )
    }

}
</script>

<style>
    .dest{font-size: 0.8rem;}
    .dest .part{position: relative;height: 5.2rem;}
    .dest .part img{display: block; height: 100%;width: 100%;}
     .dest .part .partname{width: 100%; position: absolute;bottom: 0;background:rgba(0, 0, 0, .4);color: #fff;display: flex;justify-content:space-around;}
</style>

