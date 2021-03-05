<template>
  <div>
      <div :style="`transform: rotate(-20deg);
    position: absolute;
    left: ${(index+1)%2==0?'250px':'20px'};
    top:  ${index<2?44:Math.ceil((index+1)/2)*152-152}px;
    overflow: hidden;
    z-index: 9999999;
    opacity: 0.12;
    font-size: 20px;
    font-family: Arial;
    color: rgb(160, 133, 60);
    text-align: center;
    width: 200px;
    height: 112px;
    display: block;`" v-for="(el,index) in 10" :key="index">biio.cn</div>
  </div>
</template>

<script>
export default {
    name: "watermark",
    mounted(){
        console.log("子组件的加载")
        this.$emit("mounted");
    }
}
</script>

<style>

</style>