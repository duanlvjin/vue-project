<template>
    <div class="banner">
        <router-link to='/collect'>
        <div class="bannernav play">
            <img class="lunbo" src="../assets/images/index/banner3.jpg">
            <img class="lunbo" src="../assets/images/index/banner2.jpg">      
            <img class="lunbo" src="../assets/images/index/banner1.jpg">
            <img class="lunbo" src="../assets/images/index/banner.png">
        </div>
        </router-link>
        <div class="logo-dbs">
            <div class="dbs-img">
                <img src="../assets/images/icon/logo.png">
            </div>
            <p>全球低价游，满足你世界梦！</p>
        </div>
    </div>
</template>
<style>
    .banner{ position:relative; width:12.42rem; height:6.6rem; overflow:hidden;}
    .bannernav {position: absolute;z-index:9;  width: calc(12.42rem * 4);}
    .active{background: #fff;}
    .banner img{ width:12.42rem; height:6.6rem;float: left;}
    .banner .logo-dbs{position: absolute;top: 48%;left: 32%;}

    .play{ animation: ma 12s ease-out infinite alternate;}
    @keyframes ma {
          0%,25% {        margin-left: 0;       }
         30%,50% {       margin-left: -12.42rem;    }
         55%,75% {       margin-left: -24.84rem;    }
         80%,100% {       margin-left: -37.26rem;    }
     }
</style>
