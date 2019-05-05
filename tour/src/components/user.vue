<template>
    <div class="user">
                <div class="head">
            <div class="head-img">
                <img src="../assets/images/person/head.png">
                <p><router-link class="line" tag='span' to='/login'>登录</router-link><router-link tag='span' to='/reg'>注册</router-link>
                <!-- <span class="line">登录</span>
                <span>注册</span> -->
                </p>
            </div>
            <div class="logo-dbs">
                <div class="dbs-img">
                    <img src="../assets/images/icon/logo.png">
                </div>
                <p>全球低价游，满足你世界梦！</p>
            </div>
            <div class="bt"><p class="bt-lf">0关注</p><p>0粉丝</p></div>
        </div>

        <div class="whe">
            <div class="whe-lt whe-br">
                <p class="lf-tp"><img src="../assets/images/person/flag.png">足迹</p>
                <p class="lf-bt"><span>0国家</span><span>0城市</span></p>
            </div>
            <div class="whe-lt">
                <p class="lf-tp"><img src="../assets/images/icon/heart.png">足迹</p>
                <p class="lf-bt"><span>0国家</span><span>0城市</span></p>
            </div>
        </div>
        <div class="whe">
            <div class="whe-lt whe-br">
                <p class="lf-tp"><img src="../assets/images/person/in.png">足迹</p>
                <p class="lf-bt"><span>0国家</span><span>0城市</span></p>
            </div>
            <div class="whe-lt">
                <p class="lf-tp"><img src="../assets/images/person/out.png">足迹</p>
                <p class="lf-bt"><span>0国家</span><span>0城市</span></p>
            </div>
        </div>
        <div class="person">
            <div class="pn-lt">
                 <router-link tag='p' to='/trip'><img class="img-lf" src="../assets/images/person/lt_1.png">我的行程<img class="img-rt" src="../assets/images/icon/arr_rt.png"></router-link>
            </div>
            <div class="pn-lt">
            <router-link tag='p' to='/card'><img class="img-lf" src="../assets/images/person/lt_2.png">我的帖子<img class="img-rt" src="../assets/images/icon/arr_rt.png"></router-link>
            </div>
            <div class="pn-lt">
                <router-link tag='p' to='/collect'><img class="img-lf" src="../assets/images/person/lt_3.png">我的收藏<img class="img-rt" src="../assets/images/icon/arr_rt.png"></router-link>
            </div>
            <div class="pn-lt">
                 <router-link tag='p' to='/detail'><img class="img-lf" src="../assets/images/person/lt_4.png">我的问答<img class="img-rt" src="../assets/images/icon/arr_rt.png"></router-link>
            </div>
            <div class="pn-lt">
                <p><img class="img-lf" src="../assets/images/person/lt_5.png">我的驴友<img class="img-rt" src="../assets/images/icon/arr_rt.png"></p>
            </div>
            <div class="pn-lt">
                <p><img class="img-lf" src="../assets/images/person/lt_6.png">我的折扣<img class="img-rt" src="../assets/images/icon/arr_rt.png"></p>
            </div>
            <div class="jg"></div>
        </div>

    </div>
</template>

<style>
.user{background: rgba(131, 75, 75, 0.5);color: blue;}
.head{ position:relative; width:12.42rem; height:6.62rem; overflow:hidden; background:url(../assets/images/person/person_top.jpg) no-repeat; background-size:12.42rem 6.62rem; color:#fff;}
.head .head-img{ position:absolute; top:1.15rem; left:5rem; width:2.4rem; height:2.5rem; text-align:center; }
.head .head-img img{ width:1.52rem; height:1.52rem;}
.head .head-img p{ width:2.4rem; height:0.65rem; line-height:0.65rem; overflow:hidden; font-size:0.43rem;}
.head .head-img p span{ width:1.2rem; text-align:center;}
.head .head-img p span.line{ border-right:1px solid #b8b0aa; margin-right:0.25rem; padding-right:0.25rem;}
.logo-dbs{ position:absolute; bottom:1.35rem; left:3.2rem;}
.head .bt{ position:absolute; bottom:0; left:0.4rem; width:11.62rem; height:1.15rem; text-align:center; border-top:1px solid #b8b0aa; overflow:hidden;}
.head .bt p{ float:left; width:5.78rem; height:0.65rem; line-height:0.65rem; text-align:center; margin: 0.3rem 0; font-size:0.42rem;}
.head .bt p.bt-lf{ border-right:1px solid #b8b0aa; }
.whe{ width:12.42rem; height:2.4rem; margin-top:0.25rem; border:1px solid #e5e5e5; border-left:none; border-right:none; overflow:hidden;}
.whe .whe-lt{ float:left; width:6.18rem; height:1.4rem; text-align:center; font-size:0.4rem; margin:0.45rem 0;}
.whe .whe-br{ border-right:1px solid #e1e1e1;}
/* .whe .whe-lt p.lf-tp{} */
.whe .whe-lt p.lf-tp img{ width:0.71rem; height:0.65rem; vertical-align:middle; margin-right:0.3rem;}
.whe .whe-lt p.lf-bt{ margin-top:0.4rem; color:#aeaeae;}
.whe .whe-lt p.lf-bt span{ margin:0 0.18rem;}
.person{ width:12.42rem; height:100%; border-top:1px solid #e5e5e5; margin:0.25rem 0 1rem 0; overflow:hidden;}
.person .pn-lt{ width:12rem; height:1.57rem; margin-left:0.4rem; border-bottom:1px solid #e1e1e1; font-size:0.43rem;}
.person .pn-lt p{ line-height:1.57rem;}
.person .pn-lt p img.img-lf{ width:0.72rem; height:0.68rem; vertical-align:middle; margin-right:0.5rem;}
.person .pn-lt p img.img-rt{ width:0.19rem; height:0.3rem; vertical-align:middle; margin-left:8.1rem;}
.logo-dbs{ height:0.9rem; overflow:hidden;}
.logo-dbs .dbs-img{ float:left; width:1rem; height:0.8rem; border-right:1px solid #fff; text-align:center;}
.logo-dbs .dbs-img img{ width:0.85rem; height:0.8rem; display:block;}
.logo-dbs p{ float:left; margin-left:0.15rem; font-size:0.35rem; line-height:0.8rem; color:#fff;}
.jg{ width:12.42rem; height:1.58rem;}
</style>
