<template>
    <div class="more" @click="more">
        <p>查看更多<img src="../assets/images/icon/arr-right.png"></p>
    </div>  
</template>
<style>
.more{ width:12.42rem; height:1.37rem; line-height:1.37rem; text-align:center; cursor:pointer;margin-bottom: 1.35rem;}
.more p{ font-size:0.4rem; color:#7ecef4;}
.more p img{ width:0.2rem; height:0.33rem; margin-left:0.2rem;}
</style>
<script>
import '../assets/js/jquery-1.7.1.min.js'
export default {
    methods: {
        more(){
            console.log(12)
          for(let i=0;i<4;i++){
			$(".favorable").append('<div class="fb">'
									+'<div class="fb-lt">'
									+'<img src="'+ '/static/img/scenic_4.10bbfe0.png'+'"/>'
									+'<p class="fb-name">体验全球最长的过山车15天超爽旅游</p>'
									+'<p class="price">'+'<span class="discount">2.8折</span>'
									+'<span class="num"><big>2889</big>元起</span>'
									+'</p></div></div>');
		    }  
        }
    }
}
</script>
