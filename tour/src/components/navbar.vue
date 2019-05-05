<template>
    <header class="header">
        <div>
            <i class="logo"><img src="../assets/images/icon/logo.png" /></i>
            <input type="text" placeholder="搜索目的地,帖子,景点">
        </div>
    </header>
</template>
<style>
    .header{position: relative;top: 0;left: 0; width:100%; height:1.8rem; background:#7ecef4;z-index: 11;}
    .header div {display: flex;justify-content: center;align-items: center;padding-right: .2rem;}
    .header div .logo {height: 1.5rem;width: 1.5rem;padding: .2rem;}
    .header div .logo img{width: 100%;height: 100%; display: block;}
    .header div input{flex: 1;height: 1rem;width:8rem;margin: 0;padding: 0;text-align: center;background: url(../assets/images/icon/sch.png)center left no-repeat;background-size:.7rem;background-position:.2rem;}
</style>

