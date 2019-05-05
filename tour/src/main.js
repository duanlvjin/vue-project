// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router.config.js'

Vue.config.productionTip = false

import filters from './filters';         //引入过滤器模块
Object.keys(filters).forEach(key=>Vue.filter(key,filters[key])); //绑定全局过滤器

import loading from './loading';//引入插件
Vue.use(loading);//安装

import axios from 'axios';                    //引入axios插件
Vue.prototype.$http=axios;                        //绑定到全局
//绑定loading组件到axios请求状态中，只要用了axios都有loading组件是否显示功能（加载中显示，加载完隐藏）
// 请求中.........
axios.interceptors.request.use(function (config) {
  store.dispatch('VIEW_LOADING',true);    //loading的状态（只改这里，其他不动）
  return config;
}, function (error) {
  return Promise.reject(error);
});
// 请求完成
axios.interceptors.response.use(function (response) {
  store.dispatch('VIEW_LOADING',false);     //loading的状态（只改这里，其他不动）
  return response;
}, function (error) {
  return Promise.reject(error);
});


import './assets/css/style.css';
import './assets/js/Adaptive.js';

import store from './store';

// ``````````````全局方法
Vue.prototype.setCookie = function(name,value){
  var Days = 30;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days*24*60*60*1000);
  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
};
Vue.prototype.getCookie = function(name){
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg))
  return unescape(arr[2]);
  else
  return null;
};
Vue.prototype.delCookie = function(name){
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval=getCookie(name);
  if(cval!=null)
  document.cookie= name + "="+cval+";expires="+exp.toGMTString();
};


import 'animate.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,store
})
