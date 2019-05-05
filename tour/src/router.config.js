import Vue from 'vue';
import VueRouter from 'vue-router'; 
Vue.use(VueRouter);

// 异步路由，懒加载（路由变成一个函数调用模块）
// webpackChunkName: "group-destnation 命名 ：打包后在生产模式下才能看到要先配置webpack出口设置 chunkFilename: utils.assetsPath('js/chunks/[name]-[chunkhash:8].js')
const home = () => import(/*webpackChunkName: "group-home" */ './components/home.vue')
// import home from './components/home.vue';
const user = () => import(/*webpackChunkName: "group-user" */ './components/user.vue')
// import user from './components/user.vue';

import login from './components/login.vue';
import reg from './components/reg.vue';

const card = () => import(/*webpackChunkName: "group-card" */ './components/card.vue')
// import card from './components/card.vue';

// import detail from './components/detail.vue';
const detail = () => import(/*webpackChunkName: "group-detail" */ './components/detail.vue')

import son from './components/son.vue';
import trip from './components/trip.vue';

// import destnation from './components/destnation.vue';
const destnation = () => import(/*webpackChunkName: "group-destnation" */ './components/destnation.vue')

// import collect from './components/collect.vue';
const collect = () => import(/*webpackChunkName: "group-collect" */ './components/collect.vue')
import error from './components/error.vue';


let routes = [
    { path: '/home', component: home },
    { path: '/user', component: user },
    { path: '/trip', component: trip },
    { path: '/login', component: login },
    { path: '/reg', component: reg },
    { path: '/son/:aid', component: son },
    { path: '/card', component: card },
    { path: '/detail', component: detail },
    { path: '/destnation', component: destnation },
    { path: '/collect', component: collect },
    { path: '/', redirect: '/home' },
    { path: '*', component: error },
]

// 导出配置好的组件模块         
export default new VueRouter({
    routes
})