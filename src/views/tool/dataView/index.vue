<template>
  <div class="device-wrap">
    <el-scrollbar style="height: 96%">
      <div class="device" style="width: 432px; height: 768px">
        <!-- 头部 -->
        <div
          class="status-bar"
          style="--icon-height: 28px; --icon-text-size: 14px"
        >
          <div class="icons-wrap" style="padding: 8px 16px; color: white">
            <div class="block left">
              <svg
                viewBox="0 0 48 62"
                xmlns="http://www.w3.org/2000/svg"
                class="icon m-r-xxs"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M37 11a2 2 0 00-2 2v10c0 1.1.9 2 2 2h8a2 2 0 002-2v-7.54a2 2 0 00-.75-1.56l-3.07-2.46a2 2 0 00-1.25-.44H37zm2.85 3.64a5.4 5.4 0 001.17-.92h1.06V23h-1.41v-7.58c-.56.53-1.28.92-2.14 1.17v-1.4c.42-.1.85-.29 1.32-.55zM5 3a4 4 0 00-4 4v12a4 4 0 004 4h22a4 4 0 004-4V7a4 4 0 00-4-4H5zm.12 16V7.58h1.87v4.76h5.8V7.58h1.87V19h-1.88v-5.06H7V19H5.12zm12.42 0V7.58h4.18c1.85 0 3.25.5 4.2 1.53.92.96 1.38 2.35 1.38 4.18 0 1.8-.46 3.2-1.37 4.17-.96 1.03-2.36 1.54-4.21 1.54h-4.18zm3.83-9.82H19.4v8.22h1.96c1.42 0 2.46-.34 3.12-1 .64-.66.96-1.7.96-3.11 0-1.44-.32-2.5-.96-3.14-.66-.65-1.7-.97-3.12-.97zM5 38a4 4 0 00-4 4v12a4 4 0 004 4h22a4 4 0 004-4V42a4 4 0 00-4-4H5zm.12 16V42.58h1.87v4.76h5.8v-4.76h1.87V54h-1.88v-5.06H7V54H5.12zm12.42 0V42.58h4.18c1.85 0 3.25.5 4.2 1.53.92.96 1.38 2.35 1.38 4.18 0 1.8-.46 3.2-1.37 4.17-.96 1.03-2.36 1.54-4.21 1.54h-4.18zm3.83-9.82H19.4v8.22h1.96c1.42 0 2.46-.34 3.12-1 .64-.66.96-1.7.96-3.11 0-1.44-.32-2.5-.96-3.14-.66-.65-1.7-.97-3.12-.97zM37 46a2 2 0 00-2 2v10c0 1.1.9 2 2 2h8a2 2 0 002-2v-7.54a2 2 0 00-.75-1.56l-3.07-2.46a2 2 0 00-1.25-.44H37zm1.65 3.54c.6-.68 1.4-1 2.4-1 .88 0 1.62.24 2.19.76.56.52.84 1.19.84 2s-.3 1.54-.9 2.2c-.37.38-1 .87-1.93 1.5-1 .66-1.6 1.24-1.8 1.75h4.65V58h-6.4c0-.92.3-1.73.92-2.43.34-.4 1.05-.96 2.1-1.7.62-.43 1.06-.78 1.32-1.06.42-.47.64-.97.64-1.52 0-.52-.14-.9-.43-1.17-.28-.26-.71-.39-1.26-.39-.58 0-1.03.2-1.33.6-.3.39-.46.95-.49 1.7h-1.42c.02-1.04.32-1.87.9-2.5z"
                  fill="currentColor"
                ></path></svg
              ><svg
                viewBox="0 0 53 62"
                xmlns="http://www.w3.org/2000/svg"
                class="icon m-r-xxs"
              >
                <path
                  d="M6.95 17.58l-5.63 7.3v1.64h5.57V29h1.66v-2.48h1.73v-1.4H8.55v-7.54h-1.6zm-.11 2.2h.05v5.35H2.74l4.1-5.35zM17.3 17.35c-1.68 0-3.03.58-4.02 1.76a6.27 6.27 0 00-1.4 4.23c0 1.7.46 3.08 1.4 4.16a5.33 5.33 0 004.24 1.72c1 0 1.9-.12 2.74-.38.78-.26 1.47-.6 2.06-1.07v-4.8h-4.9v1.49h3.16v2.48c-.39.24-.8.43-1.28.56-.5.12-1.03.2-1.59.2-1.42 0-2.48-.4-3.15-1.2-.64-.73-.94-1.79-.94-3.16 0-1.41.33-2.52 1.04-3.32a3.28 3.28 0 012.64-1.13c.9 0 1.63.19 2.17.59.55.38.9.96 1.06 1.73h1.76a4.34 4.34 0 00-1.54-2.87c-.84-.67-2-.99-3.45-.99z"
                  fill="currentColor"
                ></path>
                <rect
                  x="20"
                  y="40"
                  width="4"
                  height="8"
                  rx="2"
                  fill="currentColor"
                ></rect>
                <rect
                  x="27"
                  y="35"
                  width="4"
                  height="13"
                  rx="2"
                  fill="currentColor"
                ></rect>
                <rect
                  x="34"
                  y="28"
                  width="4"
                  height="20"
                  rx="2"
                  fill="currentColor"
                ></rect>
                <rect
                  x="41"
                  y="22"
                  width="4"
                  height="26"
                  rx="2"
                  fill="currentColor"
                ></rect>
                <rect
                  x="48"
                  y="16"
                  width="4"
                  height="32"
                  rx="2"
                  fill="currentColor"
                ></rect></svg
              ><svg
                viewBox="0 0 52 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
              >
                <path
                  d="M6.95 17.58l-5.63 7.3v1.64h5.57V29h1.66v-2.48h1.73v-1.4H8.55v-7.54h-1.6zm-.11 2.2h.05v5.35H2.74l4.1-5.35zM17.3 17.35c-1.68 0-3.03.58-4.02 1.76a6.27 6.27 0 00-1.4 4.23c0 1.7.46 3.08 1.4 4.16a5.33 5.33 0 004.24 1.72c1 0 1.9-.12 2.74-.38.78-.26 1.47-.6 2.06-1.07v-4.8h-4.9v1.49h3.16v2.48c-.39.24-.8.43-1.28.56-.5.12-1.03.2-1.59.2-1.42 0-2.48-.4-3.15-1.2-.64-.73-.94-1.79-.94-3.16 0-1.41.33-2.52 1.04-3.32a3.28 3.28 0 012.64-1.13c.9 0 1.63.19 2.17.59.55.38.9.96 1.06 1.73h1.76a4.34 4.34 0 00-1.54-2.87c-.84-.67-2-.99-3.45-.99z"
                  fill="currentColor"
                ></path>
                <rect
                  x="19"
                  y="40"
                  width="4"
                  height="8"
                  rx="2"
                  fill="currentColor"
                ></rect>
                <rect
                  x="26"
                  y="35"
                  width="4"
                  height="13"
                  rx="2"
                  fill="currentColor"
                ></rect>
                <rect
                  x="33"
                  y="28"
                  width="4"
                  height="20"
                  rx="2"
                  fill="currentColor"
                ></rect>
                <rect
                  x="40"
                  y="22"
                  width="4"
                  height="26"
                  rx="2"
                  fill="currentColor"
                ></rect>
                <rect
                  x="47"
                  y="16"
                  width="4"
                  height="32"
                  rx="2"
                  fill="currentColor"
                ></rect>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.75 42H6v4a1 1 0 102 0v-8a1 1 0 00-1-1h-.5a1 1 0 00-.8.4l-2.55 3.4a.75.75 0 00.6 1.2zM14.25 42H12v-4a1 1 0 10-2 0v8a1 1 0 001 1h.5a1 1 0 00.8-.4l2.55-3.4a.75.75 0 00-.6-1.2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div class="block right">
              <svg
                viewBox="0 0 34 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
              >
                <circle
                  cx="17"
                  cy="32"
                  r="11.5"
                  stroke="currentColor"
                  stroke-width="3"
                ></circle>
                <path
                  d="M17 27v5.99l3.51 3.51"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  d="M3 22.54L6.54 19M27.12 19l3.54 3.54"
                ></path></svg
              ><svg
                width="23"
                height="62"
                viewBox="0 0 23 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.426 15.6142C12.9865 15.3821 13.6317 15.5104 14.0607 15.9394L21.5607 23.4394C22.1464 24.0252 22.1464 24.9749 21.5607 25.5607L15.1213 32L21.0607 37.9394C21.6464 38.5252 21.6464 39.4749 21.0607 40.0607L14.0607 47.0607C13.6317 47.4897 12.9865 47.618 12.426 47.3859C11.8655 47.1537 11.5 46.6067 11.5 46V35.6214L4.06066 43.0607C3.47487 43.6465 2.52513 43.6465 1.93934 43.0607C1.35355 42.4749 1.35355 41.5252 1.93934 40.9394L10.8787 32L1.93934 23.0607C1.35355 22.4749 1.35355 21.5252 1.93934 20.9394C2.52513 20.3536 3.47487 20.3536 4.06066 20.9394L11.5 28.3787V17C11.5 16.3934 11.8655 15.8464 12.426 15.6142ZM14.5 35.6214L17.8787 39L14.5 42.3787V35.6214ZM14.5 28.3787V20.6214L18.3787 24.5L14.5 28.3787Z"
                  fill="currentColor"
                ></path></svg
              ><svg
                viewBox="0 0 60 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="icon m-r-xxs"
              >
                <rect
                  x="2"
                  y="19"
                  width="50"
                  height="26"
                  rx="3"
                  stroke="currentColor"
                  stroke-width="2"
                ></rect>
                <rect
                  x="5"
                  y="22"
                  width="19.35"
                  height="20"
                  rx="1"
                  fill="currentColor"
                  opacity="0.4"
                ></rect>
                <rect
                  x="55"
                  y="23"
                  width="4"
                  height="18"
                  rx="2"
                  fill="currentColor"
                ></rect>
                <text x="20" y="38" fill="currentColor">45</text>
              </svg>
              <div class="icon-text"><span>14:11</span></div>
            </div>
          </div>
        </div>
        <!-- 头条 -->
        <div class="toutiao-app">
          <!-- 手机头部 -->
          <div class="header">
            <div class="c">
              <div class="search-input">
                <svg
                  data-v-3b7dbd72=""
                  viewBox="0 0 33 38"
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                >
                  <path
                    data-v-3b7dbd72=""
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M30 16a14 14 0 11-28 0 14 14 0 0128 0zm-5.54 13.59a16 16 0 111.63-1.16l6.49 8.34L31 38l-6.54-8.41z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div class="text"></div>
              </div>
              <div class="put-button">
                <svg
                  data-v-3b7dbd72=""
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                >
                  <path
                    data-v-3b7dbd72=""
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M64 32a32 32 0 11-64 0 32 32 0 0164 0zM32 19a3 3 0 013 3v7h7a3 3 0 110 6h-7v7a3 3 0 11-6 0v-7h-7a3 3 0 110-6h7v-7a3 3 0 013-3z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div class="text">发布</div>
              </div>
            </div>
          </div>
          <!-- 导航栏 -->
          <div class="nav">
            <div class="items">
              <div
                :class="[i == 1 ? 'active' : '', 'item']"
                v-for="(el, i) in [
                  '关注',
                  '推荐',
                  '热榜',
                  '小视频',
                  '抗疫',
                  '音乐',
                  '问答',
                ]"
                :key="i"
              >
                {{ el }}
              </div>
            </div>
            <svg
              data-v-3b7dbd72=""
              viewBox="0 0 40 37"
              xmlns="http://www.w3.org/2000/svg"
              class="menu"
            >
              <path
                data-v-3b7dbd72=""
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 2C0 .9.9 0 2 0h36a2 2 0 110 4H2a2 2 0 01-2-2zM0 18c0-1.1.9-2 2-2h36a2 2 0 110 4H2a2 2 0 01-2-2zM0 35c0-1.1.9-2 2-2h36a2 2 0 110 4H2a2 2 0 01-2-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <!-- 内容 -->
          <div class="content"></div>
          <!-- 底部导航 -->
          <div class="tab">
            <div class="items">
              <div
                :class="[i === 1 ? 'active' : '']"
                v-for="(el, i) in ['首页', '西瓜视频', '放映厅', '我的']"
                :key="i"
              >
                <div class="label">{{ el }}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 网易 -->
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import PhoneHeader from "../phoneHeader/index";
export default {
  components: {
    PhoneHeader,
  },
  data() {
    return {};
  },
  props: {
    phoneData: {},
  },
};
</script>

<style lang="scss" scoped>
.device {
  font-family: PingFang SC, "system-ui", -apple-system, BlinkMacSystemFont,
    Noto Sans SC, sans-serif;
  position: relative;
  background-color: #fff;
  .status-bar,
  .status-bar .icons-wrap,
  .status-bar .icons-wrap .block {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .status-bar,
  .status-bar .icons-wrap {
    width: 100%;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .status-bar {
    position: absolute;
    z-index: 999;
    left: 0;
    top: 0;
  }
  .status-bar .icons-wrap .block {
    width: 33.33333%;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }
  .status-bar .icons-wrap .block.left {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .status-bar .icons-wrap .block.right {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
  .status-bar .icons-wrap .block {
    width: 33.33333%;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }
  .status-bar .icons-wrap .block .icon {
    display: inline-block;
    color: inherit;
    height: 28px;
  }
  .toutiao-app {
    background-color: #fff;
    height: 100%;
    width: 100%;
    font-weight: 400;
    overflow: hidden;
    font-family: Helvetica Neue, PingFang SC, Hiragino Sans GB, Microsoft YaHei,
      SimSun, Arial, sans-serif;
    .header {
      height: 96px;
      background-color: #e44944;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      .c {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-top: auto;
        margin-bottom: 6px;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 0 20px;
      }
      .search-input {
        position: relative;
        background-color: #fff;
        -webkit-box-shadow: 0 0 0.3px #ad5d5e;
        box-shadow: 0 0 0.3px #ad5d5e;
        height: 48px;
        border-radius: 50rem;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        overflow: hidden;
        padding-right: 10px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        .icon {
          width: 14px;
          margin-left: 16px;
          margin-right: 8px;
          -ms-flex-negative: 0;
          flex-shrink: 0;
          height: 20px;
          display: block;
        }
        .text {
          overflow: hidden;
          white-space: nowrap;
          font-size: 17px;
          color: #28292a;
          line-height: 20px;
          &::after {
            content: "";
            position: absolute;
            right: 0;
            top: 50%;
            height: 100%;
            width: 1.8em;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            background-image: -webkit-gradient(
              linear,
              left top,
              right top,
              from(hsla(0, 0%, 100%, 0.2)),
              to(hsla(0, 0%, 100%, 0.8))
            );
            background-image: linear-gradient(
              90deg,
              hsla(0, 0%, 100%, 0.2),
              hsla(0, 0%, 100%, 0.8)
            );
          }
        }
      }
      .put-button {
        color: #fff;
        margin-left: 16px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        padding-top: 2px;
        .icon {
          width: 28px;
        }
        .text {
          margin-top: 1px;
          font-size: 12.5px;
          color: hsla(0, 0%, 100%, 0.9);
        }
      }
    }
    .nav {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding: 0 20px;
      -webkit-box-shadow: 0 1px 1px -1px #cecece;
      box-shadow: 0 1px 1px -1px #cecece;
      .items {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        overflow-x: hidden;
        .item {
          position: relative;
          font-size: 18px;
          white-space: nowrap;
          padding: 8px 0;
          & + .item {
            margin-left: 24px;
          }
        }
        .active {
          color: #eb3e40;
          font-weight: 600;
          font-size: 19px;
          &::after {
            content: "";
            position: absolute;
            left: 50%;
            bottom: 0;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            height: 3px;
            border-radius: 50em;
            width: 60%;
            background-color: #eb3e40;
          }
        }
      }
      .menu {
        color: #949494;
        width: 19px;
      }
    }
  }
  svg,
  img {
    max-width: 100%;
  }
}
</style>