<template>
  <div class="kefu-container">
    <div class="d2-container-full">
      <!----><!----><!---->
      <div class="d2-container-full__body">
        <div class="page-recharge by-card-block h-full">
          <div class="layout-wrap">
            <div class="center-wrap">
              <div class="recharge-opts text-center m-t-xl">
                <div class="kf-qr">
                  <div class="el-image qr">
                    <img
                      src="https://cdn.biio.cn/platform/app/base/KF_QRcode.svg"
                      alt="kf-qr"
                      class="el-image__inner"
                    /><!---->
                  </div>
                </div>
                <div class="intro">
                  <p class="text-center">请使用微信扫描二维码，联系客服进行反馈</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!---->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "kefu",
  computed: {
    ...mapGetters(["name"]),
  },
};
</script>

<style lang="scss" scoped>
.page-recharge {
  .center-wrap {
    margin: 0 auto;
    width: 800px;
  }
  .kf-qr {
    width: 240px;
    height: 240px;
    margin: 0 auto;
  }
}
</style>
