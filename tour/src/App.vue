<template>
  <div id="app">
    <loading v-show='bLoading'></loading>
    <navbar v-show='bNav'></navbar>
    <transition enter-active-class="animated zoomIn">
      <router-view></router-view>
    </transition>
    <!-- <home></home> -->
    <p class="kong"></p>
    <footbar v-show='bFoot'></footbar>
  </div>
</template>

<script>
import navbar from './components/navbar';
import footbar from './components/footbar';
import home from './components/home';

// favicon要在webpack开发模式中配置一下
//  new HtmlWebpackPlugin({
//       filename: 'index.html',
//       template: 'index.html',
//       inject: true,
//       favicon:"static/favicon.ico"     //配置favicon
//     }),
import {mapGetters} from 'vuex';          //从vuex中饭引入mapGetters以取代computed
import * as types from './store/types.js'  //引入状态变量

export default {
  name: 'App',
  components: {
    home,footbar,navbar
  },
  computed: mapGetters([
     'bNav','bFoot','bLoading'
  ]),
  watch:{                                // 数据监听：：：一定要监听
    $route(to){                           //到哪去
      // console.log('变化..',to);
      let path = to.path;
      // console.log(path);
      this.routeCheck(path)               //该怎么显示(调用routeCheck函数)
    }
  },
  methods: {
    // 什么页面该怎么显示（改变store状态数据）
    routeCheck(path){     
        if(/home|destnation/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,true);      //navbar的状态
          this.$store.dispatch(types.VIEW_FOOT,true);      //footbar的状态
        }
        if(/detail|login|reg/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,false);
          this.$store.dispatch(types.VIEW_FOOT,false);
        }
        if(/user|collect|card|son|trip/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,false);
          this.$store.dispatch(types.VIEW_FOOT,true);
        }
    }
  }
}
</script>

<style>
/* html,body{background: silver;} */
#app {
  font-family: '楷体','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background: url(./assets/images/index/shenhai.jpg)left top no-repeat ;
  background-size: 100%;
  background-attachment:fixed;  
  /* 背景图片固定不scroll滚动 ↑ */
  /* margin-top: 60px; */
}
#app .kong{width: 100%;height: 1.6rem;background: rgba(0, 0, 0, .3)}
</style>
