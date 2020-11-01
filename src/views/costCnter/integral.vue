<template>
  <div class="integral-container">
    <div class="d2-container-full">
      <!----><!----><!---->
      <div class="d2-container-full__body">
        <div class="page-recharge by-card-block h-full">
          <div class="layout-wrap">
            <div class="center-wrap">
              <div class="assets-wrap">
                <div class="title">当前积分</div>
                <div class="num din-font">0</div>
              </div>
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
                  <p>当前积分充值系统暂不支持自动充值</p>
                  <p>请使用微信扫描二维码，联系客服进行充值</p>
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
  name: "integral",
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
  .assets-wrap {
    background-image: url(https://cdn.biio.cn/platform/app/base/logo-watermark.svg);
    background-repeat: no-repeat;
    background-color: #457bfa;
    background-size: 540px;
    background-position: 100%;
    color: #fff;
    padding: 1.25em 2em;
    border-radius: 8px;
    height: 200px;
    .num {
      text-align: center;
      margin-top: 0.5em;
      font-size: 66px;
      font-weight: 600;
    }
  }
}
</style>
