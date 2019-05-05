<template>
  <div>
    <div class="spinner" ref="div1">
      <slot name="s1"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    title:{
      type:String,
      default:'loading..'
    }
  },
  mounted(){
    this.$refs.div1.onmouseover=function(){
      console.log('交互...');
    }
  }
}
</script>

<style>
.spinner {
  width: 60px;
  height: 60px;
  background-color: #67cf22;

  -webkit-animation: rotateplane 1.2s infinite ease-in-out;
  animation: rotateplane 1.2s infinite ease-in-out;
  position: fixed;
  left:45%;
  top:45%;
}

@-webkit-keyframes rotateplane {
  0% {
    -webkit-transform: perspective(120px);
  }
  50% {
    -webkit-transform: perspective(120px) rotateY(180deg);
  }
  100% {
    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);
  }
}

@keyframes rotateplane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}
</style>
