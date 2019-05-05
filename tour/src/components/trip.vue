<template>
    <div class="trip">
        <div class="trip-box">
            <img src="../assets/images/scenics/scenic_6.png" alt="">      
            <p>行程安排</p>
        </div>
        <ul class="trip-msg">
            <li v-for="item in trip" :key="item.id"><span>{{item.name}}</span>
                <ul>
                    <li v-for="mins of item.context" :key="mins.id">{{mins.plan}}:{{mins.content}}</li>
                </ul>
            </li>
        </ul>

    </div>
</template>
<script>
export default {
    data(){
        return {
            trip:[]
        }
    },
   mounted () {
       this.$http({
            url:`/static/data/trip.data`,
        }).then(
            (res)=>{           
                    this.trip = res.data;
                   
            }
        )
   }
}
</script>

<style>
    .trip{font-size: .75rem;background: rgba(0, 0, 0, .3);}
    .trip .trip-box{position: relative;width: 100%}
    .trip .trip-box p{position: absolute;left: 30%;top:40%;z-index: 11;color: #fff;font-size: 1.3rem;}
    .trip img{display: block;width: 100%}
    .trip .trip-msg{color:#fff;text-align: start}
    .trip .trip-msg li span{background: springgreen;padding: .2rem}
    .trip .trip-msg li ul li{background:rgba(255, 255, 255, .3);}
</style>
