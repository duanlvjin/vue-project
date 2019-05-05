<template>
    <footer>
    <router-link activeClass="active" to='/home'>
        <div class="foot">
            <img src="../assets/images/foot/ft_1.png">
            <p>推荐</p>
        </div>
    </router-link>  
    <router-link activeClass="active" to='/destnation'>
        <div class="foot">
            <img src="../assets/images/foot/ft_2.png">
            <p>目标</p>
        </div>
    </router-link>  
    <router-link activeClass="active" to='/card'>
        <div class="foot">
            <img src="../assets/images/foot/ft_3.png">
            <p>帖子</p>
        </div>
    </router-link>    
	<router-link activeClass="active" to='/user'>
        <div class="foot">
            <img src="../assets/images/foot/ft_4.png">
            <p>我的</p>
        </div>
    </router-link>
</footer> 
</template>
<style>
    footer{ position:fixed; bottom:0; width:12.42rem; height:1.58rem; background-color:#f2f2f2; overflow:hidden;}
    footer .foot{ float:left; width:1rem; height:1.2rem; margin:0.15rem 0 0.2rem 1.68rem; text-align:center; overflow:hidden; color:#7ecef4;}
    footer .foot img{ width:0.7rem; height:0.7rem; margin:0 auto; display:block;}
    footer .foot p{ margin-top:0.15rem; font-size:0.3rem;}
    footer .active .foot { color:red;}
</style>

