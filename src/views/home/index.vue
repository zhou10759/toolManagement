<template>
  <div class="home-container">
    <div class="home-header">
      <el-row style="min-width: 800px">
        <el-col :span="10">
          <div class="card-wrap flex flex-column">
            <div class="h flex items-center">
              <div class="user-avatar">
                <img
                  src="https://www.biio.cn/img/logo.3b953b60.png"
                  alt="user-avatar"
                />
              </div>
              <div class="user-info flex items-center">
                <div class="user-name text-truncate m-r-md">18268186295</div>
                <div class="user-role">游客</div>
              </div>
            </div>
            <div class="c flex-grow">
              <p class="spm text-icon">
                <i class="m-r-xxs by by-yinhangka"></i
                ><span> 积分数： <span class="point din-font">0</span></span>
              </p>
              <p class="spm text-icon">
                <i class="m-r-xxs by by-youhuiquan"></i
                ><span> 兑换劵： <span class="point din-font">50</span></span>
              </p>
            </div>
            <div class="f m-t-auto">
              <div class="quick-button-group">
                <div class="button-item text-icon">
                  <i class="icon by by-RectangleCopy121"></i
                  ><span>积分充值 </span>
                </div>
                <div class="button-item text-icon">
                  <i class="icon by by-RectangleCopy64"></i
                  ><span>消费记录 </span>
                </div>
                <div class="button-item text-icon">
                  <i class="icon by by-RectangleCopy124"></i
                  ><span>客服中心 </span>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="card-wrap flex flex-column">
            <div class="carousel el-carousel el-carousel--horizontal">
              <el-carousel indicator-position="none" height="260px">
                <el-carousel-item
                  v-for="item in [
                    'https://cdn.biio.cn/platform/app/material/ad/recommend-banner.png',
                    'https://cdn.biio.cn/platform/app/material/ad/browser-support.png',
                    'https://cdn.biio.cn/platform/app/material/ad/fl-exchange.png',
                  ]"
                  :key="item"
                >
                  <el-image :src="item"></el-image>
                </el-carousel-item>
              </el-carousel>
            </div>
            <div
              class="platform-notice flex justify-between items-center m-t-auto"
            >
              <i class="icon by by-gonggao"></i>
              <p class="title flex-grow m-x-xl text-truncate">
                <span class="time m-r-xs">10-10</span
                ><span
                  >官方通知｜建议使用
                  <a
                    class="text-underline"
                    href="https://www.google.cn/chrome/"
                    target="_blank"
                    >谷歌</a
                  >，<a
                    class="text-underline"
                    href="http://www.firefox.com.cn/"
                    target="_blank"
                    >火狐</a
                  >，<a
                    class="text-underline"
                    href="https://browser.360.cn/ee/"
                    target="_blank"
                    >360极速浏览器</a
                  >打开本网站</span
                >
              </p>
              <div class="more">更多</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="home-bottom quick-wrap m-t-md">
      <div class="title">我的常用入口</div>
      <div class="apps-wrap">
        <div class="app-item">
          <div class="el-image app-icon">
            <img
              src="https://cdn.biio.cn/platform/app/material/quick-app/recommend-quick-icon.svg"
              alt="智能推荐模拟"
              class="el-image__inner"
            /><!---->
          </div>
          <div class="app-label">智能推荐模拟</div>
        </div>
        <div class="app-item">
          <div class="el-image app-icon">
            <img
              src="https://cdn.biio.cn/platform/app/material/quick-app/bill-history-icon.svg"
              alt="消费记录"
              class="el-image__inner"
            /><!---->
          </div>
          <div class="app-label">消费记录</div>
        </div>
        <div class="app-item">
          <div class="el-image app-icon">
            <img
              src="https://cdn.biio.cn/platform/app/material/quick-app/kf-quick-icon.svg"
              alt="问题反馈"
              class="el-image__inner"
            /><!---->
          </div>
          <div class="app-label">问题反馈</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapGetters(["name"]),
  },
};
</script>

<style lang="scss" scoped>
.home {
  &-container {
    margin: 30px;
    min-width: 800px;
  }
  &-header {
    border-radius: 10px;
    background-color: #fff;
    -webkit-box-shadow: 0 4px 10px 0 rgba(26, 20, 61, 0.08);
    box-shadow: 0 4px 10px 0 rgba(26, 20, 61, 0.08);
    height: 400px;
    .card-wrap {
      padding: 2em;
      height: 400px;
      .h {
        height: 50px;
        margin-bottom: 1.25em;
        .user-info {
          color: #212121;
          font-weight: 500;
          font-size: 20px;
          margin-left: 12px;
        }
        .user-role {
          color: #b38300;
          font-weight: 500;
          background: #ffe852;
          padding: 0 8px;
          font-size: 12px;
          border-top-left-radius: 10px;
          border-bottom-right-radius: 10px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      }
      .c {
        margin-left: 62px;
      }
      .f {
        .quick-button-group {
          height: 50px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-shadow: 0 0 2px rgba(97, 98, 100, 0.1);
          box-shadow: 0 0 2px rgba(97, 98, 100, 0.1);
          border-radius: 8px;
          .button-item {
            &:hover {
              color: #3370ff;
            }
            padding: 0 1.25em;
            height: 50px;
            line-height: 50px;
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            cursor: pointer;
            color: #262626;
            -webkit-transition: all 0.15s ease-in-out;
            transition: all 0.15s ease-in-out;
            font-size: 14px;
            .icon {
              margin-right: 0.5em;
            }
          }
        }
      }
      .user-avatar {
        width: 50px;
        height: 50px;
        display: block;
        border-radius: 50em;
        overflow: hidden;
      }
      .spm {
        color: #646a73;
        font-size: 14px;
        .point {
          margin-left: 0.375em;
          font-weight: 500;
          color: #2152d9;
          cursor: pointer;
        }
      }
      .text-icon {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
    }
    .carousel {
      height: 260px;
      border-radius: 8px;
      -webkit-box-shadow: 0 0 2px rgba(97, 98, 100, 0.1);
      box-shadow: 0 0 2px rgba(97, 98, 100, 0.1);
    }
    .platform-notice {
      -webkit-box-shadow: 0 0 2px rgba(97, 98, 100, 0.1);
      box-shadow: 0 0 2px rgba(97, 98, 100, 0.1);
      padding: 1.25em;
      border-radius: 8px;
      color: #222;
      font-size: 14px;
      height: 50px;
      .icon,
      .more {
        color: #8c8c8c;
      }
    }
  }
  &-bottom {
    .apps-wrap {
      padding-top: 1.25em;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      .app-item {
        padding-top: 24px;
        text-align: center;
        width: 192px;
        height: 172px;
        cursor: pointer;
        &:hover .app-icon {
          transform: translateY(-15px);
        }
      }
    }
    .title {
      font-weight: 500;
      color: #262626;
      font-size: 16px;
      line-height: 32px;
    }
    .app-icon {
      display: inline-block;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      border-radius: 16px;
      -webkit-box-shadow: 0 8px 10px 0 rgba(68, 137, 255, 0.14);
      box-shadow: 0 8px 10px 0 rgba(68, 137, 255, 0.14);
      width: 74px;
      height: 74px;
      line-height: 74px;
      font-size: 18px;
      -o-object-fit: cover;
      object-fit: cover;
    }
    .app-label {
      margin-top: 0.75em;
      color: #262626;
    }
  }
}
</style>
