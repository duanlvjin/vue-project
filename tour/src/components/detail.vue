<template>
    <div class="detail">
         <p class="goback" @click="goback"><span>《</span></p>
       <h3>我的问答</h3>
        <list></list>
    </div>
</template>
<style scoped>
.detail{font-size: 1rem;}
 
</style>
<script>
import list from './list.vue';
export default {
    components: {
        list
    },
    methods: {
        goback() {
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
    .goback{width: 100%;clear: both;overflow: hidden;}
    .goback span{float: left;height: 100%;width: 1rem;text-align: center;}
</style>
