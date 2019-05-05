export default {
    install:function(Vue){
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

    }
  }



// exports.install = function (Vue, options) {
//     // 1. 添加全局方法或属性
//     // Vue.myGlobalMethod = function () {
//       // 逻辑...
//     // }
//       Vue.setCookie = function(name,value){
//           var Days = 30;
//           var exp = new Date();
//           exp.setTime(exp.getTime() + Days*24*60*60*1000);
//           document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
//       };
//       Vue.getCookie = function(name){
//           var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
//           if(arr=document.cookie.match(reg))
//           return unescape(arr[2]);
//           else
//           return null;
//       };
//       Vue.delCookie = function(name){
//           var exp = new Date();
//           exp.setTime(exp.getTime() - 1);
//           var cval=getCookie(name);
//           if(cval!=null)
//           document.cookie= name + "="+cval+";expires="+exp.toGMTString();
//       };
//   }