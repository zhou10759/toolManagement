<template>
  <div class="smartRecommend-container">
    <div class="block-page app-recommend intro-step container-component">
      <div class="d2-container-full">
        <div class="d2-container-full__bar">
          <recommend-header @bar="toggleBar" @editor="editorChange" @toggle="toggleChange"></recommend-header>
        </div>
        <div class="d2-container-full__body"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import  RecommendHeader  from "./Header/index";
export default {
  name: "smartRecommend",
  computed: {
    ...mapGetters(["name"]),
  },
  components: {
    RecommendHeader
  },
  methods:{
    toggleBar(val){
      //切换导航
      console.log("切换导航",val)
    },
    editorChange(val){
      //切换编辑状态
      console.log("切换编辑状态",val)
    },
    toggleChange(val){
      //切换编辑类型
      console.log("切换编辑类型",val)
    }
  }
};
</script>

<style lang="scss" scoped>
.smartRecommend {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
