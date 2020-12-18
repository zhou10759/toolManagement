<template>
  <div class="smartRecommend-container">
    <div class="block-page app-recommend intro-step container-component">
      <div class="d2-container-full">
        <div class="d2-container-full__bar">
          <div class="d2-switch-tab-bar">
            <div>
              <el-menu
                :default-active="activeIndex + ''"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
              >
                <el-menu-item
                  :index="i + 1 + ''"
                  v-for="(el, i) in barList"
                  :key="el.name"
                  >{{ el.name }}</el-menu-item
                >
              </el-menu>
            </div>
            <div class="r">
              <div class="flex">
                <div data-intro="7" class="free-editable">
                  <span
                    @click="editor"
                    :class="[editorStatus ? 'active' : '', 'btn']"
                    ><svg
                      t="1605513780571"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="1389"
                      width="16"
                      height="16"
                      v-show="!editorStatus"
                    >
                      <path
                        d="M486.4 0C288 0 115.2 172.8 115.2 384c0 115.2 115.2 288 211.2 422.4 6.4 6.4 12.8 12.8 19.2 12.8l275.2 0c6.4 0 12.8-6.4 19.2-12.8 96-134.4 211.2-307.2 211.2-422.4C851.2 172.8 684.8 0 486.4 0zM608 768 364.8 768c-83.2-121.6-192-288-192-384 0-179.2 147.2-332.8 320-332.8s320 153.6 320 332.8C806.4 480 697.6 646.4 608 768zM595.2 864 371.2 864c-12.8 0-25.6 12.8-25.6 25.6 0 12.8 12.8 25.6 25.6 25.6l224 0c12.8 0 25.6-12.8 25.6-25.6C620.8 876.8 608 864 595.2 864zM595.2 947.2 371.2 947.2c-12.8 0-25.6 12.8-25.6 25.6s12.8 25.6 25.6 25.6l70.4 0C448 1017.6 486.4 1024 486.4 1024s38.4-6.4 38.4-25.6l70.4 0c12.8 0 25.6-12.8 25.6-25.6S608 947.2 595.2 947.2z"
                        p-id="1390"
                        fill="#8c8c8c"
                        data-spm-anchor-id="a313x.7781069.0.i6"
                        class="selected"
                      ></path>
                    </svg>
                    <svg
                      t="1605514918708"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="5771"
                      width="16"
                      height="16"
                      v-show="editorStatus"
                    >
                      <path
                        d="M823.996 328.971L686.09 184.263 311.179 574.581l137.909 144.706zM284.296 602.788L200.39 837.963l220.658-91.649zM918.678 139.715l-55.155-57.876c-22.856-23.952-59.865-23.952-82.724 0l-68.981 72.354L849.725 298.9l68.953-72.323c22.857-23.983 22.857-62.877 0-86.862zM874.557 919.258H149.978c-11.939 0-21.618 8.954-21.618 20 0 11.045 9.679 20 21.618 20h724.579c11.938 0 21.617-8.955 21.617-20 0-11.046-9.679-20-21.617-20z"
                        fill="#722ed1"
                        p-id="5772"
                      ></path>
                    </svg>
                    自由编辑
                  </span>
                </div>
                <div class="make-model">
                  <span
                    @click="toggle(1)"
                    :class="[status === 1 ? 'active' : '', 'model']"
                    ><svg
                      t="1605514047310"
                      class="icon"
                      viewBox="0 0 1189 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="2909"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M988.304 90.125h-816.531c-45.077 0.050-81.605 36.581-81.65 81.654v544.348c0.050 45.073 36.576 81.599 81.644 81.65h381.051v81.659h-136.087c-15.031 0.003-27.216 12.188-27.216 27.219s12.185 27.218 27.215 27.219h326.617c15.031-0.003 27.216-12.188 27.216-27.219s-12.185-27.217-27.215-27.219h-136.087v-81.65h381.045c45.077-0.050 81.605-36.581 81.65-81.654v-544.348c-0.045-45.078-36.572-81.609-81.644-81.659zM171.775 144.565h816.531c15.028 0.011 27.207 12.191 27.219 27.218v462.697h-870.96v-462.695c0.011-15.025 12.186-27.203 27.207-27.219zM988.304 743.348h-816.531c-15.028-0.011-27.207-12.191-27.219-27.218v-27.211h870.96v27.219c-0.017 15.022-12.188 27.193-27.209 27.21z"
                        p-id="2910"
                        :fill="status === 1 ? '#ffffff' : '#8c8c8c'"
                      ></path>
                    </svg>
                    前端图</span
                  >
                  <span
                    @click="toggle(2)"
                    :class="[status === 2 ? 'active' : '', 'model']"
                    ><svg
                      t="1605514118958"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="4647"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M182.527886 99.072578h658.943588c45.823971 0 82.943948 36.991977 82.943948 82.559948V672.00022c0 45.631971-37.119977 82.559948-82.943948 82.559948H182.527886a82.751948 82.751948 0 0 1-82.943948-82.559948V181.696526c0-45.631971 37.119977-82.559948 82.943948-82.559948z m0-99.071938A182.079886 182.079886 0 0 0 0 181.696526V672.00022a182.079886 182.079886 0 0 0 182.527886 181.695886h658.943588A182.079886 182.079886 0 0 0 1023.99936 672.00022V181.696526A182.079886 182.079886 0 0 0 841.471474 0.00064H182.527886zM895.99944 972.224032a50.751968 50.751968 0 0 1-50.623968 50.751969l-666.751584 0.959999a50.559968 50.559968 0 1 1 0-101.311937l666.751584-0.959999a50.559968 50.559968 0 0 1 50.623968 50.559968z"
                        :fill="status === 2 ? '#ffffff' : '#8c8c8c'"
                        p-id="4648"
                      ></path>
                      <path
                        d="M730.687543 256.00048l85.695947 95.103941-285.439822 256.959839-58.815963-65.343959L402.559748 468.096347 277.631826 576.960279 191.99988 481.920339l221.375862-192.95988 81.471949 90.495944 45.055972 48.31997L730.687543 256.00048z"
                        :fill="status === 2 ? '#ffffff' : '#8c8c8c'"
                        p-id="4649"
                      ></path>
                    </svg>
                    数据图</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d2-container-full__body">
          <div class="app-recommend-wrap by-card-block h-100 front">
            <div id="recommend-canvas-wrap-front" class="canvas-wrap">
              <div id="phone-data" class="device-wrap">
                <el-scrollbar style="height: 96%">
                  <div class="device" style="width: 432px; height: 768px">
                    <!-- 头部 -->
                    <div
                      class="status-bar"
                      style="--icon-height: 28px; --icon-text-size: 14px"
                    >
                      <div
                        class="icons-wrap"
                        style="padding: 8px 16px; color: white"
                      >
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
                    <div class="toutiao-app" v-if="activeIndex == 1">
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
                            <div class="text">
                              {{ searchVal || "" }}
                            </div>
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
                            v-for="(el, i) in barList[activeIndex - 1].content
                              .headerTab"
                            :key="i"
                          >
                            {{ el.name }}
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
                      <div class="content">
                        <div class="items">
                          <template v-if="recommendList.length > 0">
                            <div v-for="(el, i) in recommendList" :key="i">
                              <div class="item toutiao-item" v-if="el.defalte">
                                <div class="recommend-placeholder-item">
                                  <span class="recommend-placeholder-title"
                                    >数据模拟区域</span
                                  >
                                </div>
                              </div>
                              <div class="item toutiao-item" v-else>
                                <template v-if="el.has_video">
                                  <div class="toutiao-video-a">
                                    <p class="title">{{ el.title }}</p>
                                    <div class="video">
                                      <div class="icon">
                                        <svg
                                          t="1608021142883"
                                          class="icon video-play"
                                          viewBox="0 0 1024 1024"
                                          version="1.1"
                                          xmlns="http://www.w3.org/2000/svg"
                                          p-id="3153"
                                          width="32"
                                          height="32"
                                        >
                                          <path
                                            d="M264.900046 16.846187l606.765887 387.380928c75.069986 47.869991 75.069986 167.674969 0 215.54596l-606.702887 387.379928c-75.133986 47.870991-168.954969-12.029998-168.954969-107.83598V124.683167c0-95.869982 93.820983-155.706971 168.890969-107.83698z"
                                            p-id="3154"
                                            fill="#ffffff"
                                          ></path>
                                        </svg>
                                      </div>
                                      <div v-loading="loading">
                                        <img
                                          :src="
                                            el.video_detail_info
                                              .detail_video_large_image.url
                                          "
                                          alt=""
                                          style="display: block"
                                        />
                                      </div>
                                      <div class="duration">
                                        {{ el.video_duration | parseVideoTime }}
                                      </div>
                                    </div>
                                    <div class="other">
                                      <div class="l">
                                        <div class="user">{{ el.source }}</div>
                                        <div class="comment">
                                          {{ el.comment_count }}评论
                                        </div>
                                        <div class="time">
                                          {{ el.publish_time | formatReleaseTime }}
                                        </div>
                                      </div>
                                      <div>
                                        <svg
                                          t="1608021653919"
                                          class="icon close-btn"
                                          viewBox="0 0 1024 1024"
                                          version="1.1"
                                          xmlns="http://www.w3.org/2000/svg"
                                          p-id="4116"
                                          width="32"
                                          height="32"
                                        >
                                          <path
                                            d="M544.61428226 512.2890871L716.38458776 340.46622015c8.67261343-8.67261343 8.67261343-22.91672368-1e-8-31.64189811l-0.946103-0.94610343c-8.67261343-8.67261343-22.91672368-8.67261343-31.64189855 0L512.02628071 479.91133046 340.25597523 307.82565717C331.53080036 299.15304417 317.28669012 299.15304417 308.61407668 307.82565717l-0.94610341 0.94610342c-8.88285833 8.67261343-8.88285833 22.91672368 0 31.64189856l171.82286692 171.87542795-171.82286692 171.77030547c-8.67261343 8.67261343-8.67261343 22.91672368 0 31.64189856l0.94610341 0.94610299c8.67261343 8.67261343 22.91672368 8.67261343 31.64189855 0l171.8228665-171.8228665 171.82286694 171.8228665c8.67261343 8.67261343 22.91672368 8.67261343 31.64189855 0l0.94610341-0.94610299c8.67261343-8.67261343 8.67261343-22.91672368 0-31.64189856l-171.87542837-171.77030547z m0 0"
                                            fill="#cdcdcd"
                                            p-id="4117"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </template>
                                <template v-if="el.has_image && el.image_list">
                                  <div class="toutiao-article-b">
                                    <p class="title">{{ el.title }}</p>
                                    <div class="pics">
                                      <div
                                        v-loading="loading"
                                        class="img"
                                        v-for="(c_el, c_i) in el.image_list"
                                        :key="c_i"
                                      >
                                        <img
                                          :src="c_el.url"
                                          alt=""
                                          style="display: block"
                                        />
                                      </div>
                                    </div>
                                    <div class="other">
                                      <div class="l">
                                        <div class="user">{{ el.source }}</div>
                                        <div class="comment">
                                          {{ el.comment_count }}评论
                                        </div>
                                        <div class="time">
                                          {{ el.publish_time }}
                                        </div>
                                      </div>
                                      <div>
                                        <svg
                                          t="1608021653919"
                                          class="icon close-btn"
                                          viewBox="0 0 1024 1024"
                                          version="1.1"
                                          xmlns="http://www.w3.org/2000/svg"
                                          p-id="4116"
                                          width="32"
                                          height="32"
                                        >
                                          <path
                                            d="M544.61428226 512.2890871L716.38458776 340.46622015c8.67261343-8.67261343 8.67261343-22.91672368-1e-8-31.64189811l-0.946103-0.94610343c-8.67261343-8.67261343-22.91672368-8.67261343-31.64189855 0L512.02628071 479.91133046 340.25597523 307.82565717C331.53080036 299.15304417 317.28669012 299.15304417 308.61407668 307.82565717l-0.94610341 0.94610342c-8.88285833 8.67261343-8.88285833 22.91672368 0 31.64189856l171.82286692 171.87542795-171.82286692 171.77030547c-8.67261343 8.67261343-8.67261343 22.91672368 0 31.64189856l0.94610341 0.94610299c8.67261343 8.67261343 22.91672368 8.67261343 31.64189855 0l171.8228665-171.8228665 171.82286694 171.8228665c8.67261343 8.67261343 22.91672368 8.67261343 31.64189855 0l0.94610341-0.94610299c8.67261343-8.67261343 8.67261343-22.91672368 0-31.64189856l-171.87542837-171.77030547z m0 0"
                                            fill="#cdcdcd"
                                            p-id="4117"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </template>
                                <template v-if="el.has_image && !el.image_list">
                                  <div class="toutiao-article-a two">
                                    <div class="info">
                                      <p class="title">{{ el.title }}</p>
                                      <div v-loading="loading" class="pic">
                                        <img
                                          :src="el.middle_image.url"
                                          alt=""
                                          style="display: block"
                                        />
                                      </div>
                                    </div>
                                    <div class="other">
                                      <div class="l">
                                        <div class="user">{{ el.source }}</div>
                                        <div class="comment">
                                          {{ el.comment_count }}评论
                                        </div>
                                        <div class="time">
                                          {{ el.publish_time }}
                                        </div>
                                      </div>
                                      <div>
                                        <svg
                                          t="1608021653919"
                                          class="icon close-btn"
                                          viewBox="0 0 1024 1024"
                                          version="1.1"
                                          xmlns="http://www.w3.org/2000/svg"
                                          p-id="4116"
                                          width="32"
                                          height="32"
                                        >
                                          <path
                                            d="M544.61428226 512.2890871L716.38458776 340.46622015c8.67261343-8.67261343 8.67261343-22.91672368-1e-8-31.64189811l-0.946103-0.94610343c-8.67261343-8.67261343-22.91672368-8.67261343-31.64189855 0L512.02628071 479.91133046 340.25597523 307.82565717C331.53080036 299.15304417 317.28669012 299.15304417 308.61407668 307.82565717l-0.94610341 0.94610342c-8.88285833 8.67261343-8.88285833 22.91672368 0 31.64189856l171.82286692 171.87542795-171.82286692 171.77030547c-8.67261343 8.67261343-8.67261343 22.91672368 0 31.64189856l0.94610341 0.94610299c8.67261343 8.67261343 22.91672368 8.67261343 31.64189855 0l171.8228665-171.8228665 171.82286694 171.8228665c8.67261343 8.67261343 22.91672368 8.67261343 31.64189855 0l0.94610341-0.94610299c8.67261343-8.67261343 8.67261343-22.91672368 0-31.64189856l-171.87542837-171.77030547z m0 0"
                                            fill="#cdcdcd"
                                            p-id="4117"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </template>
                              </div>
                            </div>
                          </template>
                        </div>
                      </div>
                      <!-- 底部导航 -->
                      <div class="tab">
                        <div class="items">
                          <div
                            :class="[i === 0 ? 'active' : '', 'item']"
                            v-for="(el, i) in barList[activeIndex - 1].content
                              .bottomTab"
                            :key="i"
                          >
                            <svg
                              viewBox="0 0 64 64"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              class="icon"
                              v-html="el.icon"
                            ></svg>
                            <div class="label">{{ el.name }}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 网易 -->
                    <div class="wangyi-app" v-if="activeIndex == 2">
                      <div class="header">
                        <div class="logo">
                          <img src="@/assets/wangyi-logo.png" alt="" />
                        </div>
                        <div class="input">
                          <svg-icon icon-class="wangyiinput"></svg-icon>
                          <div class="text"></div>
                        </div>
                        <div class="g">
                          <div class="hot">
                            <svg
                              data-v-d7391482=""
                              viewBox="0 0 73 73"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              class="icon"
                            >
                              <path
                                data-v-d7391482=""
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M34.74 3.78c3.96-1.3 7.63-.7 9.8-.17a2 2 0 011.51 1.94c0 6.76 3.5 10.74 6.23 12.58l.84-3.1a2 2 0 013.12-1.09c9.34 6.87 12.63 20.94 9.7 33.02-1.5 6.12-4.6 11.9-9.5 16.16-4.93 4.28-11.56 6.93-19.89 6.93-7.6 0-13.57-1.9-18.15-5.08a27.14 27.14 0 01-9.57-12.22c-3.83-9.3-3.3-20.17-1.18-26.8a2 2 0 012.8-1.18l2.07 1.03a23 23 0 017.77-15.3 2 2 0 012.58.05l2.07 1.81c2.8-4.88 6.3-7.43 9.8-8.58zM36 7.58c-2.84.93-6.07 3.25-8.62 8.8a2 2 0 01-3.13.68l-2.64-2.3c-2.43 2.59-5.66 7.75-5.06 14.1a2 2 0 01-2.88 1.98l-2.81-1.4c-1.33 5.94-1.33 14.47 1.68 21.8 1.7 4.11 4.32 7.79 8.15 10.44 3.82 2.65 8.97 4.37 15.87 4.37 7.43 0 13.11-2.34 17.26-5.95 4.18-3.63 6.91-8.63 8.24-14.08 2.4-9.87.09-20.66-5.9-26.86l-.67 2.42a2 2 0 01-2.62 1.35c-3.58-1.32-10.07-6.2-10.75-15.74-1.72-.27-3.89-.34-6.12.39z"
                                fill="#fff"
                              ></path>
                              <path
                                data-v-d7391482=""
                                d="M49.66 47.2c.58 0 1.03-.3 1.4-.87.52-.8.87-2.6 1.03-5.41l-2.3-1.15a26.5 26.5 0 01-.22 3.1c-.16.86-.32 1.31-.48 1.31-.2 0-.39-.32-.58-.9-.51-1.3-.74-3.67-.74-7.13v-6.43h-6.52v-3.94h-2.98v3.94h-3.4v2.97h3.4a29.72 29.72 0 01-.48 4.32 27.3 27.3 0 00-2.05-1.28l-1.63 2.37a26.1 26.1 0 012.82 1.83 12.99 12.99 0 01-4.23 5.6l2.24 1.98a15.08 15.08 0 004.42-5.63 35.4 35.4 0 013.26 3.04l1.73-2.6a35.9 35.9 0 00-3.94-3.42c.48-1.85.77-3.9.84-6.2h3.55v3.45c0 4.86.67 8.06 2.01 9.63.77.9 1.7 1.38 2.85 1.41zM22.94 29.6v2.93h4.29v4.9c-1.66.35-3.4.64-5.12.86l.7 2.85c1.5-.25 2.98-.57 4.42-.9v3.11c0 .77-.32 1.18-.96 1.18-.86 0-1.76-.1-2.69-.22l.7 2.91h3.05c1.95 0 2.94-1.05 2.94-3.13V39.5c1.15-.29 2.27-.6 3.42-.93v-2.9c-1.12.37-2.27.7-3.42 1.01v-4.16h3.65V29.6h-3.65v-3.8h-3.04v3.8h-4.29zm3.3 18.4a23.05 23.05 0 01-3.9 5.75l2.49 1.82c1.5-1.79 2.82-3.9 3.97-6.33l-2.56-1.25zm7.68.89l-2.85.57c.6 1.73 1.12 3.71 1.54 6.02l3.04-.7a61.54 61.54 0 00-1.73-5.9zm6.62-.45l-2.85.6c.9 1.83 1.67 3.94 2.28 6.37l3-.7c-.7-2.24-1.5-4.35-2.43-6.27zm6.15-.96l-2.47 1.57a47.1 47.1 0 014.32 6.43l2.53-1.8a50.08 50.08 0 00-4.38-6.2z"
                                fill="#fff"
                              ></path>
                            </svg>
                          </div>
                          <div class="more">
                            <svg
                              data-v-d7391482=""
                              viewBox="0 0 73 73"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              class="icon"
                            >
                              <path
                                data-v-d7391482=""
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.76 43.63c1.06 4.71 3.18 8.58 5.87 10.84a2 2 0 01.33 2.7L11.76 63h30.41c8.15-1.44 13.76-5.44 17.2-10.55 3.49-5.19 4.82-11.64 4.11-17.98C62.07 21.77 52.62 10 36.84 10c-8.11 0-14.1 2.23-18.38 5.6-4.29 3.37-7 8-8.38 13a31.43 31.43 0 00-.32 15.03zm6.23-31.18C21.07 8.45 27.96 6 36.84 6c18.23 0 29.03 13.73 30.62 28.03.8 7.16-.7 14.58-4.77 20.65-4.1 6.1-10.75 10.7-20 12.3a2 2 0 01-.35.02H7.84a2 2 0 01-1.62-3.17l5.48-7.58c-2.83-2.98-4.8-7.17-5.85-11.74-1.2-5.3-1.18-11.3.38-16.98a28.53 28.53 0 019.76-15.08z"
                                fill="#fff"
                              ></path>
                              <circle
                                data-v-d7391482=""
                                cx="23.84"
                                cy="36.5"
                                r="4.5"
                                fill="#fff"
                              ></circle>
                              <circle
                                data-v-d7391482=""
                                cx="36.84"
                                cy="36.5"
                                r="4.5"
                                fill="#fff"
                              ></circle>
                              <circle
                                data-v-d7391482=""
                                cx="49.84"
                                cy="36.5"
                                r="4.5"
                                fill="#fff"
                              ></circle>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div class="nav">
                        <div class="nav-items">
                          <div
                            :class="[i == 1 ? 'active' : '', 'item']"
                            v-for="(el, i) in barList[activeIndex - 1].content
                              .headerTab"
                            :key="i"
                          >
                            {{ el.name }}
                          </div>
                        </div>
                        <div class="menu">
                          <svg
                            data-v-3b7dbd72=""
                            viewBox="0 0 40 37"
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon"
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
                      </div>
                      <div class="content">
                        <div class="items">
                          <div class="item wangyi-item">
                            <div class="recommend-placeholder-item">
                              <span class="recommend-placeholder-title"
                                >数据模拟区域</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab">
                        <div class="tab-items">
                          <div
                            :class="[i === 0 ? 'active' : '', 'item']"
                            v-for="(el, i) in barList[activeIndex - 1].content
                              .bottomTab"
                            :key="i"
                          >
                            <svg
                              viewBox="0 0 64 64"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              class="icon"
                              v-html="el.icon"
                            ></svg>
                            <div class="label">{{ el.name }}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 百度 -->
                    <div class="baidu-app" v-if="activeIndex == 3">
                      <div class="header">
                        <div class="search-input">
                          <svg
                            viewBox="0 0 55 55"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="logo"
                          >
                            <path
                              d="M21.97 4.06a3.5 3.5 0 012.62.59 6.57 6.57 0 012.44 3.42c.7 2.1.66 4.43-.14 6.53a7.06 7.06 0 01-1.81 2.69c-.67.55-1.54.97-2.41.97a3.91 3.91 0 01-2.45-.83 6.67 6.67 0 01-2.23-3.5 9.99 9.99 0 01.17-6.14 6.67 6.67 0 012.17-3 3.36 3.36 0 011.64-.73zm13.3 1.04c.63-.14 1.3.04 1.88.32a5.8 5.8 0 012.06 1.74 7.47 7.47 0 011.5 3.5c.15.87 0 1.77-.24 2.61a9.17 9.17 0 01-1.36 2.9 6.15 6.15 0 01-1.99 1.92 4.1 4.1 0 01-2.48.6 4.49 4.49 0 01-2.9-1.2 5.37 5.37 0 01-1.43-2.79 11 11 0 01-.07-3.38 9.24 9.24 0 013.04-5.13 4 4 0 011.99-1.09zm-23.91 9.5c.97-.18 1.99.03 2.83.49a7.13 7.13 0 012.86 3.14c.24.52.45 1.12.49 1.7.17 1.51.14 3.05-.32 4.48-.28.98-.8 1.92-1.57 2.58a5.52 5.52 0 01-3.49 1.3c-1.05 0-2.1-.4-2.9-1.09a6.65 6.65 0 01-2.02-3.56c-.21-.9-.32-1.85-.18-2.8.21-1.53.67-3.1 1.57-4.4a4.4 4.4 0 012.73-1.84zm31.07 3.45c1.15-.14 2.37 0 3.38.6a5.82 5.82 0 012.2 2.3c.42.8.7 1.68.77 2.59.03 1.29.07 2.58-.21 3.84a5.73 5.73 0 01-1.08 2.44 4.23 4.23 0 01-2.13 1.4 7 7 0 01-2.55.17 5.3 5.3 0 01-2.86-1.05 4.65 4.65 0 01-1.47-2.23 12.36 12.36 0 01-.38-3.6c.03-1.25.2-2.55.7-3.7.38-.87.97-1.67 1.78-2.16a4.6 4.6 0 011.85-.6zm-15.47 4.61a6.4 6.4 0 013.42.56 9.63 9.63 0 013.88 3.7 39.02 39.02 0 004.08 4.85c1.4 1.43 2.9 2.8 4.44 4.09.24.2.52.42.76.66a7.44 7.44 0 012.03 4.5c.17 1.78-.25 3.56-.98 5.17a6.07 6.07 0 01-2.58 2.8c-1.57.87-3.42 1.04-5.17 1a19.3 19.3 0 01-5.06-.9c-2-.56-4.09-.7-6.11-.46-.94.1-1.89.39-2.83.53-2.13.35-4.3.45-6.46.31a6.39 6.39 0 01-4.64-2.37 8.36 8.36 0 01-1.5-2.93 8.1 8.1 0 01.56-6.5c.87-1.6 2.16-2.9 3.6-3.98.41-.31.87-.59 1.18-.97.66-.63 1.36-1.23 2.03-1.85a22.1 22.1 0 003.31-3.91c.28-.42.5-.84.8-1.23a8.1 8.1 0 015.24-3.07zm-3.7 7.37v4.4h-3.1c-.35 0-.7.07-1.02.17-.84.25-1.57.73-2.2 1.33a6.18 6.18 0 00-1.53 2.65c-.14.9-.18 1.85 0 2.72.17.88.49 1.71 1.04 2.41a5.1 5.1 0 002.9 1.92c.56.14 1.12.07 1.68.07h5.23V30c-1 .03-1.99.03-3 .03zm4.57 4.6v7.9c-.03.87.35 1.74.98 2.33.56.53 1.33.8 2.1.88h7.19v-11.1h-2.97v8.55h-3.14c-.35 0-.7-.1-.9-.39-.22-.24-.32-.55-.32-.87V34.6c-.95.04-1.92.04-2.94.04z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M19.98 37.15c.21-.07.42-.21.63-.17h2.65v6.24H20.9c-.8.04-1.6-.38-2.1-1.08-.38-.56-.59-1.29-.59-1.95 0-.56.1-1.16.31-1.68.32-.66.88-1.08 1.47-1.36z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <div class="text"></div>
                          <svg
                            viewBox="0 0 55 55"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="camera"
                          >
                            <path
                              d="M27 39c5.51 0 10-4.49 10-10s-4.49-10-10-10-10 4.49-10 10 4.49 10 10 10zm0-17.41A7.43 7.43 0 0134.41 29 7.43 7.43 0 0127 36.41 7.43 7.43 0 0119.59 29 7.43 7.43 0 0127 21.59z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M45.27 12.67h-6.15C38.82 11.24 37.3 5 32.24 5H21.75c-5.05 0-6.58 6.24-6.87 7.67H8.72A5.78 5.78 0 003 18.51v24.66A5.78 5.78 0 008.72 49h36.55A5.79 5.79 0 0051 43.17V18.5a5.8 5.8 0 00-5.73-5.84zM5.51 18.72a3.4 3.4 0 013.42-3.42h6.5c.97 0 1.79-.99 1.94-1.98 0-.06.97-5.7 4.65-5.7h9.96c3.66 0 4.66 5.65 4.67 5.7.15 1 .96 1.98 1.95 1.98H45c1.89 0 3.42 1.28 3.42 3.2v24.67c0 1.2-1.63 3.2-3.52 3.2H8.92c-1.99 0-3.41-1.83-3.41-3V18.72z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div class="nav">
                        <div class="nav-items">
                          <div
                            :class="[i == 1 ? 'active' : '', 'item']"
                            v-for="(el, i) in barList[activeIndex - 1].content
                              .headerTab"
                            :key="i"
                          >
                            {{ el.name }}
                          </div>
                        </div>
                        <div class="menu">
                          <svg
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6 9c0-1.1.9-2 2-2h32a2 2 0 110 4H8a2 2 0 01-2-2zM6 24c0-1.1.9-2 2-2h32a2 2 0 110 4H8a2 2 0 01-2-2zM6 39c0-1.1.9-2 2-2h32a2 2 0 110 4H8a2 2 0 01-2-2z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        <div class="earphone">
                          <svg
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon"
                          >
                            <path
                              d="M24 3C12.81 3 3 13.06 3 24.52c0 6.68 2.12 9.65 3.51 10.85C7.75 39.4 11.47 45 15.81 45c3.73 0 5.63-4.06 5.63-12.08 0-8-1.9-12.07-5.64-12.07-4.13 0-7.7 5.11-9.1 9.08-.35-1.2-.63-2.93-.63-5.4C6.07 14.9 14.62 6.14 24 6.14c9.38 0 17.93 8.76 17.93 18.38 0 2.47-.28 4.2-.64 5.4-1.4-3.97-4.96-9.08-9.1-9.08-3.73 0-5.63 4.06-5.63 12.07 0 8.02 1.9 12.08 5.64 12.08 4.33 0 8.05-5.6 9.29-9.63C42.88 34.17 45 31.2 45 24.53 45 13.05 35.19 3 24 3zm-8.2 21c1.24 0 2.57 2.34 2.57 8.92 0 6.59-1.33 8.93-2.57 8.93-2.8 0-5.63-6.12-5.63-8.93 0-2.8 2.83-8.92 5.63-8.92zm16.4 17.85c-1.24 0-2.57-2.34-2.57-8.93 0-6.58 1.33-8.92 2.57-8.92 2.8 0 5.63 6.12 5.63 8.92S35 41.85 32.2 41.85z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div class="content">
                        <div class="items">
                          <div class="item baidu-item">
                            <div class="recommend-placeholder-item">
                              <span class="recommend-placeholder-title"
                                >数据模拟区域</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab">
                        <div class="tab-items">
                          <div
                            :class="[
                              i === 0 ? 'active' : '',
                              i === 2 ? 'center' : '',
                              'item',
                            ]"
                            v-for="(el, i) in barList[activeIndex - 1].content
                              .bottomTab"
                            :key="i"
                          >
                            <svg
                              viewBox="0 0 64 64"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              :class="i === 2 ? 'icon-btn' : 'icon'"
                              v-html="el.icon"
                            ></svg>
                            <div class="label">{{ el.name }}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 凤凰 -->
                    <div class="baidu-app" v-if="activeIndex == 4">
                      <div class="header"></div>
                      <div class="nav"></div>
                      <div class="content"></div>
                      <div class="tab"></div>
                    </div>
                    <!-- 一点 -->
                    <div class="baidu-app" v-if="activeIndex == 5">
                      <div class="header"></div>
                      <div class="nav"></div>
                      <div class="content"></div>
                      <div class="tab"></div>
                    </div>
                    <!-- 搜狐 -->
                    <div class="baidu-app" v-if="activeIndex == 6">
                      <div class="header"></div>
                      <div class="nav"></div>
                      <div class="content"></div>
                      <div class="tab"></div>
                    </div>
                    <!-- 腾讯 -->
                    <div class="baidu-app" v-if="activeIndex == 7">
                      <div class="header"></div>
                      <div class="nav"></div>
                      <div class="content"></div>
                      <div class="tab"></div>
                    </div>
                    <!-- 看点 -->
                    <div class="baidu-app" v-if="activeIndex == 8">
                      <div class="header"></div>
                      <div class="nav"></div>
                      <div class="content"></div>
                      <div class="tab"></div>
                    </div>
                    <!-- UC -->
                    <div class="baidu-app" v-if="activeIndex == 9">
                      <div class="header"></div>
                      <div class="nav"></div>
                      <div class="content"></div>
                      <div class="tab"></div>
                    </div>
                    <!-- 新浪 -->
                    <div class="baidu-app" v-if="activeIndex == 10">
                      <div class="header"></div>
                      <div class="nav"></div>
                      <div class="content"></div>
                      <div class="tab"></div>
                    </div>
                    <!-- 简书 -->
                    <div class="baidu-app" v-if="activeIndex == 11">
                      <div class="header"></div>
                      <div class="nav"></div>
                      <div class="content"></div>
                      <div class="tab"></div>
                    </div>
                    <!-- 趣头条 -->
                    <div class="baidu-app" v-if="activeIndex == 12">
                      <div class="header"></div>
                      <div class="nav"></div>
                      <div class="content"></div>
                      <div class="tab"></div>
                    </div>
                  </div>
                </el-scrollbar>
              </div>
            </div>
            <div class="tool-setting-wrap">
              <div class="block block-device">
                <div class="block_header">
                  <div class="title">
                    <svg
                      t="1605598082965"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="1884"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M351.988168 131.844817c-22.174022 0-45.686529 23.411199-45.686529 45.686529l0 639.606283c0 22.37459 24.00267 45.686529 45.686529 45.686529l319.803653 0c20.455891 0 45.685505-23.433712 45.685505-45.686529L717.477326 177.530322c0-22.397103-23.556509-45.686529-45.685505-45.686529M466.203466 177.530322l114.216321 0c12.625552 0 22.596647 5.097088 22.596647 11.432377 0 6.312776-11.912307 11.409864-22.596647 11.409864L443.360202 200.372563c-11.45489 0-22.508643-5.097088-22.508643-11.409864 0-6.335289 11.165294-11.432377 22.508643-11.432377L466.203466 177.530322zM512.06805 817.260425c-12.224416 0-23.155373-10.151197-23.155373-22.954805 0-12.805654 10.930957-23.010063 23.155373-23.010063 12.893658 0 22.833031 10.205433 22.833031 23.010063C534.901081 807.109228 524.961708 817.260425 512.06805 817.260425L512.06805 817.260425zM671.791821 725.764572l-319.803653 0L351.988168 246.059092l319.803653 0L671.791821 725.764572z"
                        p-id="1885"
                      ></path>
                    </svg>
                    <span>设备变量</span>
                  </div>
                </div>
                <div class="block_main">
                  <el-form
                    :model="recommendPhoneAdd"
                    label-width="80px"
                    label-position="top"
                  >
                    <el-form-item label="设备类型">
                      <el-select
                        v-model="equipmentType"
                        placeholder="请选择"
                        style="width: 300px"
                      >
                        <el-option
                          v-for="item in equipmentTypeList"
                          :key="item"
                          :label="item"
                          :value="item"
                        >
                        </el-option>
                      </el-select>
                      <el-button
                        icon="el-icon-refresh"
                        class="m-l-sm"
                      ></el-button>
                    </el-form-item>
                    <el-form-item label="设备电量">
                      <div class="flex">
                        <el-input-number
                          v-model="equipmentElectricity"
                          controls-position="right"
                          :min="1"
                          :max="100"
                          style="width: 300px; text-align: left"
                        ></el-input-number>
                        <el-button
                          icon="el-icon-refresh"
                          class="m-l-sm"
                        ></el-button>
                      </div>
                    </el-form-item>
                    <el-form-item label="设备时间">
                      <div class="flex">
                        <el-input
                          type="text"
                          v-model="equipmentTime"
                          style="width: 300px"
                        ></el-input>
                        <el-button
                          icon="el-icon-refresh"
                          class="m-l-sm"
                        ></el-button>
                      </div>
                    </el-form-item>
                    <el-form-item label="文件名称">
                      <div class="flex">
                        <el-input
                          v-model="fileName"
                          style="width: 300px"
                          clearable
                        >
                        </el-input>
                        <el-button
                          icon="el-icon-refresh"
                          class="m-l-sm"
                        ></el-button>
                      </div>
                    </el-form-item>
                    <el-form-item label="快速操作">
                      <div class="flex">
                        <el-button
                          type="primary"
                          style="width: 49%"
                          @click="generateData()"
                          >一键填充/刷新</el-button
                        >
                        <el-button
                          type="danger"
                          style="width: 49%"
                          plain
                          @click="deleteRecommendData()"
                          >清空所有</el-button
                        >
                      </div>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
              <div class="block block-data">
                <div class="block_header">
                  <div class="title">
                    <svg
                      t="1605604112096"
                      class="icon"
                      viewBox="0 0 1049 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="2764"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M954.313334 328.487676a44.569917 44.569917 0 0 0-44.569917 44.446796V824.912829A109.701094 109.701094 0 0 1 800.288566 934.983287H198.717807A109.824215 109.824215 0 0 1 88.893591 824.912829V221.618372a107.361789 107.361789 0 0 1 107.238668-107.238668h581.255741a44.446796 44.446796 0 0 0 0-88.893591H196.132259A196.255381 196.255381 0 0 0 0 221.618372v603.294457a198.96405 198.96405 0 0 0 198.717807 199.087171H800.288566A198.96405 198.96405 0 0 0 998.76013 824.912829V372.934472a44.446796 44.446796 0 0 0-44.446796-44.446796z"
                        fill="#4D4D4D"
                        p-id="2765"
                      ></path>
                      <path
                        d="M1036.435253 13.173981a44.569917 44.569917 0 0 0-62.914993 0L571.036672 411.717687a44.446796 44.446796 0 0 0 62.668751 63.161236l402.360466-398.91307a43.338704 43.338704 0 0 0 13.173981-31.272815 44.077432 44.077432 0 0 0-12.804617-31.519057zM169.414933 775.664302A42.353733 42.353733 0 0 0 209.30624 819.864855h609.696766a44.693038 44.693038 0 0 0 0-88.893591H209.30624A42.353733 42.353733 0 0 0 169.414933 775.664302zM548.012985 519.571961H209.30624a44.693038 44.693038 0 0 0 0 88.893591h338.706745a44.693038 44.693038 0 0 0 0-88.893591z"
                        fill="#4D4D4D"
                        p-id="2766"
                      ></path>
                    </svg>
                    <span>数据填充</span>
                  </div>
                </div>
                <div class="block_main">
                  <!-- 动态表单 -->
                  <!-- 头条 -->
                  <div class="mock-form toutiao-mock-form">
                    <el-row>
                      <el-col :span="12">
                        <el-form label-width="80px" label-position="top">
                          <el-form-item label="猜你想搜">
                            <div class="flex">
                              <el-input
                                v-model="searchVal"
                                style="width: 310px"
                                clearable
                                @clear="searchVal = ''"
                              >
                              </el-input>
                              <el-button
                                icon="el-icon-refresh"
                                class="m-l-sm"
                                @click="getSearchData()"
                              ></el-button>
                            </div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form label-width="80px" label-position="top">
                          <el-form-item label="添加数据">
                            <el-select
                              v-model="addVal"
                              placeholder="请选择"
                              style="width: 310px"
                            >
                              <el-option
                                v-for="item in addFormList"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                              >
                              </el-option>
                            </el-select>
                            <el-button
                              type="primary"
                              class="m-l-sm"
                              @click="addRecommendData()"
                              >添加</el-button
                            >
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                    <div class="analysis-form">
                      <div class="label-title text-icon">
                        智能分析(仅支持文章链接)
                        <el-popover
                          placement="top"
                          trigger="hover"
                          popper-class="popover-view"
                        >
                          <div class="popover-view-child">
                            <div>https://www.toutiao.com</div>
                            <div>https://m.toutiaocdn.com</div>
                            <div>https://www.toutiao.com/item</div>
                          </div>
                          <svg
                            t="1605605030423"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="3648"
                            width="16"
                            height="16"
                            slot="reference"
                          >
                            <path
                              d="M502.757 960.219c-60.5 0-119.201-11.854-174.474-35.231-53.377-22.576-101.31-54.894-142.466-96.05-41.156-41.153-73.472-89.088-96.049-142.465C66.39 631.201 54.537 572.5 54.537 512S66.39 392.799 89.768 337.526c22.576-53.376 54.893-101.309 96.049-142.465 41.156-41.157 89.089-73.473 142.466-96.049 55.271-23.378 113.973-35.231 174.474-35.231 60.499 0 119.2 11.853 174.474 35.231 53.377 22.577 101.31 54.893 142.466 96.05 41.157 41.155 73.472 89.088 96.048 142.465 23.379 55.27 35.231 113.972 35.231 174.474s-11.854 119.204-35.232 174.473c-22.577 53.38-54.892 101.312-96.047 142.466-41.156 41.155-89.09 73.473-142.465 96.049C621.956 948.365 563.256 960.219 502.757 960.219zM502.757 94.48c-56.369 0-111.047 11.038-162.515 32.806-49.717 21.029-94.369 51.136-132.716 89.482-38.348 38.348-68.453 83-89.482 132.717C96.275 400.952 85.237 455.63 85.237 512c0 56.368 11.038 111.047 32.807 162.512 21.03 49.722 51.135 94.373 89.482 132.717 38.347 38.351 82.999 68.455 132.716 89.482 51.469 21.77 106.146 32.809 162.515 32.809s111.046-11.036 162.516-32.809c49.717-21.029 94.368-51.135 132.715-89.482 38.348-38.344 68.453-82.996 89.48-132.715 21.771-51.465 32.809-106.145 32.809-162.514 0-56.371-11.037-111.049-32.809-162.515-21.028-49.718-51.135-94.371-89.48-132.718-38.348-38.347-82.999-68.453-132.717-89.482C613.804 105.518 559.125 94.48 502.757 94.48zM446.479 719.294l0 74.638 89.476 0 0-74.638L446.479 719.294zM677.814 461.148c13.094-19.66 19.645-41.14 19.645-64.442 0-40.29-18.628-74.642-55.87-103.039-37.253-28.397-87.159-42.599-149.72-42.599-59.074 0-106.578 13.231-142.51 39.685-35.942 26.461-57.545 64.57-64.816 114.325l80.75 8.01c6.979-37.134 21.674-64.443 44.081-81.917 22.407-17.479 50.34-26.216 83.806-26.216 34.628 0 63.873 9.647 87.736 28.943 23.858 19.299 35.795 41.69 35.795 67.178 0 14.08-4.082 27.068-12.226 38.956-8.149 11.897-25.823 27.854-53.032 47.879-27.21 20.024-46.045 35.258-56.526 45.695-14.259 14.323-24.589 28.523-30.986 42.596-8.733 18.695-13.093 40.905-13.093 66.63 0 4.371 0.14 10.923 0.436 19.663l75.509 0c0.578-26.216 2.761-45.153 6.55-56.798 3.775-11.651 9.602-21.969 17.456-30.951 7.859-8.975 24.59-22.938 50.198-41.868C639.109 504.722 664.72 480.814 677.814 461.148L677.814 461.148z"
                              p-id="3649"
                            ></path>
                          </svg>
                        </el-popover>
                      </div>
                      <div class="flex">
                        <el-input
                          placeholder="输入文章链接 (自动分析)"
                          v-model="searchArticle"
                          clearable
                        >
                        </el-input>
                        <el-button type="primary" class="m-l-sm"
                          >分析</el-button
                        >
                      </div>
                    </div>
                    <div class="items-form m-t-md">
                      <div class="label-title">列表设置</div>
                      <div class="feed-items">
                        <vuedraggable v-model="recommendList">
                          <div v-for="(el, i) in recommendList" :key="i">
                            <div class="feed-item editor" v-if="el.defalte">
                              <div class="header">
                                <svg
                                  t="1605685614022"
                                  class="icon handle"
                                  viewBox="0 0 1024 1024"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  p-id="7208"
                                  width="16"
                                  height="16"
                                >
                                  <path
                                    d="M720 960c-21.2 0-41.5-8.3-56.6-23.3-15-15-23.4-35.3-23.4-56.5-0.1-32.4 19.4-61.6 49.3-74s64.3-5.6 87.2 17.2c22.9 22.9 29.8 57.3 17.4 87.2-12.3 29.9-41.5 49.4-73.9 49.4z m0-384c-21.2 0-41.5-8.3-56.6-23.3-15-15-23.4-35.3-23.4-56.5-0.1-32.4 19.4-61.6 49.3-74s64.3-5.6 87.2 17.2c22.9 22.9 29.8 57.3 17.4 87.2-12.3 29.9-41.5 49.4-73.9 49.4z m0-352c-21.2 0-41.5-8.3-56.6-23.3-15-15-23.4-35.3-23.4-56.5-0.1-32.4 19.4-61.6 49.3-74 29.9-12.4 64.3-5.6 87.2 17.2 22.9 22.9 29.8 57.3 17.4 87.2-12.3 29.9-41.5 49.4-73.9 49.4zM336 960c-21.2 0-41.5-8.3-56.6-23.3-15-15-23.4-35.3-23.4-56.5-0.1-32.4 19.4-61.6 49.3-74 29.9-12.4 64.3-5.6 87.2 17.2 22.9 22.9 29.8 57.3 17.4 87.2-12.3 29.9-41.5 49.4-73.9 49.4z m0-384c-21.2 0-41.5-8.3-56.6-23.3-15-15-23.4-35.3-23.4-56.5-0.1-32.4 19.4-61.6 49.3-74 29.9-12.4 64.3-5.6 87.2 17.2 22.9 22.9 29.8 57.3 17.4 87.2-12.3 29.9-41.5 49.4-73.9 49.4z m0-352c-21.2 0-41.5-8.3-56.6-23.3-15-15-23.4-35.3-23.4-56.5-0.1-32.4 19.4-61.6 49.3-74 29.9-12.4 64.3-5.6 87.2 17.2 22.9 22.9 29.8 57.3 17.4 87.2-12.3 29.9-41.5 49.4-73.9 49.4z"
                                    fill="#4A4C5B"
                                    p-id="7209"
                                  ></path>
                                </svg>
                                <span class="title">自定义数据设置</span>
                                <span class="feed-edit-clean">清空</span>
                              </div>
                              <div class="editor-wrap m-t-xs">
                                <el-input
                                  v-model="recommendPhoneAdd.title"
                                  placeholder="标题"
                                ></el-input>
                                <el-row
                                  class="m-t-sm"
                                  style="margin-left: -5px; margin-right: -5px"
                                >
                                  <el-col
                                    :span="8"
                                    style="
                                      padding-left: 5px;
                                      padding-right: 5px;
                                    "
                                  >
                                    <div class="form-item">
                                      <div class="label">媒体名称</div>
                                      <div class="b">
                                        <el-input
                                          v-model="recommendPhoneAdd.source"
                                          placeholder="媒体"
                                          clearable
                                        ></el-input>
                                      </div>
                                    </div>
                                  </el-col>
                                  <el-col
                                    :span="8"
                                    style="
                                      padding-left: 5px;
                                      padding-right: 5px;
                                    "
                                    ><div class="form-item">
                                      <div class="label">评论数</div>
                                      <div class="b">
                                        <el-input
                                          v-model="
                                            recommendPhoneAdd.comment_count
                                          "
                                          placeholder="评论数"
                                          clearable
                                        ></el-input>
                                      </div></div
                                  ></el-col>
                                  <el-col
                                    :span="8"
                                    style="
                                      padding-left: 5px;
                                      padding-right: 5px;
                                    "
                                    ><div class="form-item">
                                      <div class="label">发布时间</div>
                                      <div class="b">
                                        <el-input
                                          v-model="
                                            recommendPhoneAdd.publish_time
                                          "
                                          placeholder="例：2020-09-12 12:00:00"
                                          clearable
                                        ></el-input>
                                      </div></div
                                  ></el-col>
                                </el-row>
                                <div class="type-select m-t-sm">
                                  <el-row
                                    style="
                                      margin-left: -7.5px;
                                      margin-right: -7.5px;
                                    "
                                  >
                                    <el-col
                                      :span="5"
                                      style="
                                        padding-left: 7.5px;
                                        padding-right: 7.5px;
                                      "
                                    >
                                      <div class="options-wrap">
                                        <div class="side-menu">
                                          <div
                                            :class="[
                                              toggleVideoType === 1
                                                ? 'active'
                                                : '',
                                              'item',
                                            ]"
                                            @click="toggleVideoType = 1"
                                          >
                                            文章（单图）
                                          </div>
                                          <div
                                            :class="[
                                              toggleVideoType === 2
                                                ? 'active'
                                                : '',
                                              'item',
                                            ]"
                                            @click="toggleVideoType = 2"
                                          >
                                            文章（多图）
                                          </div>
                                          <div
                                            :class="[
                                              toggleVideoType === 3
                                                ? 'active'
                                                : '',
                                              'item',
                                            ]"
                                            @click="toggleVideoType = 3"
                                          >
                                            视频 / 文章无图
                                          </div>
                                        </div>
                                      </div>
                                    </el-col>
                                    <el-col
                                      :span="19"
                                      style="
                                        padding-left: 7.5px;
                                        padding-right: 7.5px;
                                      "
                                    >
                                      <div class="flex">
                                        <div>
                                          <el-upload
                                            action="https://jsonplaceholder.typicode.com/posts/"
                                            list-type="picture-card"
                                            :on-preview="
                                              handlePictureCardPreview
                                            "
                                            :on-remove="handleRemove"
                                          >
                                            <i class="el-icon-plus"></i>
                                          </el-upload>
                                        </div>
                                        <div
                                          class="video-duration m-l-xs"
                                          v-if="toggleVideoType === 3"
                                        >
                                          <div class="label">视频时长</div>
                                          <div class="b">
                                            <el-input
                                              placeholder="例：12:24"
                                              v-model="
                                                recommendPhoneAdd.video_time
                                              "
                                              clearable
                                            >
                                            </el-input>
                                          </div>
                                        </div>
                                      </div>
                                    </el-col>
                                  </el-row>
                                </div>
                              </div>
                            </div>
                            <div class="feed-item normal" v-else>
                              <div class="l">
                                <svg
                                  t="1605685614022"
                                  class="icon handle"
                                  viewBox="0 0 1024 1024"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  p-id="7208"
                                  width="16"
                                  height="16"
                                >
                                  <path
                                    d="M720 960c-21.2 0-41.5-8.3-56.6-23.3-15-15-23.4-35.3-23.4-56.5-0.1-32.4 19.4-61.6 49.3-74s64.3-5.6 87.2 17.2c22.9 22.9 29.8 57.3 17.4 87.2-12.3 29.9-41.5 49.4-73.9 49.4z m0-384c-21.2 0-41.5-8.3-56.6-23.3-15-15-23.4-35.3-23.4-56.5-0.1-32.4 19.4-61.6 49.3-74s64.3-5.6 87.2 17.2c22.9 22.9 29.8 57.3 17.4 87.2-12.3 29.9-41.5 49.4-73.9 49.4z m0-352c-21.2 0-41.5-8.3-56.6-23.3-15-15-23.4-35.3-23.4-56.5-0.1-32.4 19.4-61.6 49.3-74 29.9-12.4 64.3-5.6 87.2 17.2 22.9 22.9 29.8 57.3 17.4 87.2-12.3 29.9-41.5 49.4-73.9 49.4zM336 960c-21.2 0-41.5-8.3-56.6-23.3-15-15-23.4-35.3-23.4-56.5-0.1-32.4 19.4-61.6 49.3-74 29.9-12.4 64.3-5.6 87.2 17.2 22.9 22.9 29.8 57.3 17.4 87.2-12.3 29.9-41.5 49.4-73.9 49.4z m0-384c-21.2 0-41.5-8.3-56.6-23.3-15-15-23.4-35.3-23.4-56.5-0.1-32.4 19.4-61.6 49.3-74 29.9-12.4 64.3-5.6 87.2 17.2 22.9 22.9 29.8 57.3 17.4 87.2-12.3 29.9-41.5 49.4-73.9 49.4z m0-352c-21.2 0-41.5-8.3-56.6-23.3-15-15-23.4-35.3-23.4-56.5-0.1-32.4 19.4-61.6 49.3-74 29.9-12.4 64.3-5.6 87.2 17.2 22.9 22.9 29.8 57.3 17.4 87.2-12.3 29.9-41.5 49.4-73.9 49.4z"
                                    fill="#4A4C5B"
                                    p-id="7209"
                                  ></path>
                                </svg>
                                <span class="title">{{ el.title }}</span>
                              </div>
                              <div class="r flex">
                                <div
                                  class="button-link"
                                  @click="refreshRecommendItem(i)"
                                >
                                  <svg
                                    t="1605685679082"
                                    class="icon"
                                    viewBox="0 0 1024 1024"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    p-id="8053"
                                    width="16"
                                    height="16"
                                  >
                                    <path
                                      d="M855.93673837 414.24955857c-3.62038672 3.62038672-14.48154688 7.24077344-18.1019336 10.86116016l-173.77856254 0c-14.48154688 0-25.34270704-10.86116016-25.34270704-25.34270704 0-14.48154688 10.86116016-25.34270704 25.34270704-25.34270704l152.05624222 0 0-152.05624222c0-14.48154688 10.86116016-25.34270704 25.34270704-25.34270704s25.34270704 10.86116016 25.34270704 25.34270704l0 173.77856254c-7.24077344 7.24077344-7.24077344 14.48154688-10.86116016 18.1019336z m-445.30756652 264.28823054c-3.62038672 3.62038672-14.48154688 7.24077344-18.1019336 10.86116015l-148.43585551-3.62038672 0 152.05624223c0 14.48154688-10.86116016 25.34270704-25.34270703 25.34270704-14.48154688 0-25.34270704-10.86116016-25.34270704-25.34270704l-3.62038672-177.39894926c0-14.48154688 10.86116016-25.34270704 25.34270704-25.34270704l177.39894926 3.62038672c14.48154688 0 25.34270704 10.86116016 25.34270704 25.34270704 3.62038672 3.62038672 0 7.24077344-7.24077344 14.48154688z"
                                      fill="#2c2c2c"
                                      p-id="8054"
                                    ></path>
                                    <path
                                      d="M747.32513678 783.52900398c-61.54657423 61.54657423-148.43585551 97.75044143-235.32513678 97.75044143-130.33392191 0-249.80668366-76.02812111-304.11248445-195.50088287-7.24077344-7.24077344-3.62038672-25.34270704 10.86116016-32.58348047 10.86116016-3.62038672 28.96309376 0 36.20386719 14.48154688 47.06502736 97.75044143 148.43585551 162.91740239 257.0474571 162.91740238 126.71353519 3.62038672 238.9455235-79.64850783 275.1493907-202.7416563 3.62038672-10.86116016 18.1019336-18.1019336 32.58348047-18.1019336 10.86116016 3.62038672 18.1019336 18.1019336 18.1019336 32.58348048-21.72232032 57.92618751-50.68541408 101.37082815-90.50966799 141.19508207z m97.75044143-387.38137901L837.83480477 403.38839841c-14.48154688 7.24077344-28.96309376 0-32.58348048-10.86116016-47.06502736-97.75044143-148.43585551-162.91740239-257.04745709-162.91740238-123.09314847 0-238.9455235 79.64850783-275.1493907 202.7416563-3.62038672 10.86116016-18.1019336 18.1019336-32.58348048 18.1019336-14.48154688-14.48154688-21.72232032-28.96309376-18.10193359-39.82425392 39.82425392-141.19508207 173.77856254-238.9455235 325.83480477-238.9455235 130.33392191 0 246.18629694 79.64850783 304.11248445 195.50088286 0 7.24077344 0 21.72232032-7.24077344 28.96309376z"
                                      fill="#2c2c2c"
                                      p-id="8055"
                                    ></path>
                                  </svg>
                                </div>
                                <div
                                  class="button-link"
                                  @click="deleteRecommendItem(i)"
                                >
                                  <svg
                                    t="1605685700299"
                                    class="icon"
                                    viewBox="0 0 1024 1024"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    p-id="8856"
                                    width="16"
                                    height="16"
                                  >
                                    <path
                                      d="M891.264 901.248a30.784 30.784 0 0 1-21.76-9.024L128.256 150.976a30.72 30.72 0 1 1 43.52-43.52l741.312 741.312a30.848 30.848 0 0 1-21.824 52.48"
                                      fill="#c43a61"
                                      p-id="8857"
                                    ></path>
                                    <path
                                      d="M150.016 901.248a30.72 30.72 0 0 1-21.76-52.544l741.312-741.248a30.784 30.784 0 0 1 43.456 43.52L171.776 892.224a30.72 30.72 0 0 1-21.76 9.024"
                                      fill="#c43a61"
                                      p-id="8858"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </vuedraggable>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 导出图片 -->
              <div
                class="export-module"
                @mouseover="exportImgStatus = true"
                @mouseleave="exportImgStatus = false"
              >
                <div class="by-consume-button">
                  <div class="consume-wallet">
                    <div class="tip-msg">
                      <div>
                        智能推荐兑换劵不足
                        <span class="route">立即充值</span>
                      </div>
                    </div>
                    <div
                      :class="[exportImgStatus ? 'show' : '', 'consume-choose']"
                    >
                      <div class="option coin-option">
                        <div class="num din-font">0</div>
                        <div class="label">账号积分</div>
                      </div>
                      <div class="option exchange-option active">
                        <div class="num din-font">50</div>
                        <div class="label">智能推荐兑换劵</div>
                      </div>
                    </div>
                  </div>
                  <div class="button">
                    <el-button type="primary" class="w-100" @click="exportJPEG"
                      >导出图片</el-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { generateRandomNum, randomNum ,formatVideoTime,handlePublishTimeDesc} from "@/utils/index";
import { mapGetters } from "vuex";
import { saveAs } from "filesaver.js-npm";
import html2canvas from "html2canvas";
import vuedraggable from "vuedraggable";
import { recommendNav } from "@/utils/staticData";
import { getTouTiaoData, getTouTiaoRecommend } from "@/api/data";

export default {
  name: "smartRecommend",
  computed: {
    ...mapGetters(["name"]),
  },
  components: {
    vuedraggable,
  },
  data() {
    return {
      equipmentTypeList: [
        "小米 6",
        "华为 p30",
        "苹果 6",
        "红米 note4",
        "华为 nova7",
        "vivo 4",
        "vivo 5",
        "一加 5",
        "锤子 t1",
        "华为 mate10pro",
        "华为 麦芒6",
        "华为 畅享7s",
        "小米 10",
        "小米 9",
        "小米 CC9 Pro",
        "小米5C",
        "小米 play",
      ],
      equipmentType: "小米 6",
      equipmentElectricity: 45,
      equipmentTime: "",
      fileName: "",
      searchVal: "",
      addVal: 0,
      searchArticle: "",
      recommendList: [
        {
          defalte: true,
          title: "",
          source: "",
          comment_count: "",
          publish_time: "",
        },
      ],
      recommendData: [],
      searchData: {},
      recommendPhoneAdd: {
        title: "",
        source: "",
        comment_count: "",
        publish_time: "",
        styleType: 1,
        video_list: [],
        video_time: "",
        imgList: [],
      },
      // equipmentForm: {
      //   equipmentType: "小米 6",
      //   equipmentElectricity: 45,
      //   equipmentTime: "",
      //   fileName: "",
      // }, //设备变量
      // lenovoSearchForm: {
      //   searchVal: "",
      // }, //猜你想搜
      // addDataForm: {
      //   addVal: "",
      // }, //添加数据
      addFormList: [
        { label: "任意类型", value: 0 },
        { label: "文档 (单图)", value: 1 },
        { label: "文章 (多图)", value: 2 },
        { label: "视频", value: 3 },
      ],
      // articleForm: {
      //   searchArticle: "",
      // }, //智能分析
      toggleVideoType: 1,
      activeIndex: 1,
      editorStatus: false,
      status: 1,
      barList: recommendNav,
      exportImgStatus: false,
      loading: false,
      indexList: new Array(5).fill(),
      firstNum: 0,
    };
  },
  filters:{
    parseVideoTime(val){
      return formatVideoTime(val)
    },
    formatReleaseTime(val){
      return handlePublishTimeDesc(new Date()-new Date(val))
    }
  },
  created() {
    // this.init();
  },
  methods: {
    //添加推荐数据 单条
    async addRecommendData() {
      let fillData = await this.getFileData();
      let list = this.recommendData.filter((el) => {
        if (this.addVal === 3 && el.has_video) {
          return el;
        } else if (this.addVal === 2 && el.has_image && el.image_list) {
          return el;
        } else if (this.addVal === 1 && el.has_image && !el.image_list) {
          return el;
        }else if(this.addVal === 0){
          return this.recommendData[0]
        }
      });
      this.recommendList.push(list[0])
      //  this.$set(this.recommendList, i, list[0]);
    },
    //删除所有推荐数据
    deleteRecommendData() {
      if (this.recommendList.length > 1) {
        this.recommendList.splice(1, this.recommendList.length);
        this.searchVal = "";
      }
    },
    // 刷新推荐数据（某一个）
    async refreshRecommendItem(i) {
      let fillData = await this.getFileData();
      // 数据类型 1=视频，2=多图，3=单图
      let dataType = null;
      // 数据项
      let item = this.recommendList[i];
      if (item.has_video) {
        dataType = 1;
      } else if (item.has_image && item.image_list) {
        dataType = 2;
      } else if (item.has_image && !item.image_list) {
        dataType = 3;
      }
      let list = this.recommendData.filter((el) => {
        if (dataType === 1 && el.has_video) {
          return el;
        } else if (dataType === 2 && el.has_image && el.image_list) {
          return el;
        } else if (dataType === 3 && el.has_image && !el.image_list) {
          return el;
        }
      });
      this.$set(this.recommendList, i, list[0]);
    },
    // 删除推荐数据（某一个）
    deleteRecommendItem(i) {
      this.recommendList.splice(i, 1);
    },
    async generateData() {
      // debugger
      this.loading = true;
      let fillData = await this.getFileData();
      let searchData = await this.getSearchData();
      this.loading = false;
      if (this.firstNum === 0) {
        this.recommendList.push(...this.recommendData.slice(10, 15));
      } else {
        this.recommendList.splice(1, 6, ...this.recommendData.slice(10, 15));
      }
      this.firstNum++;
    },
    formatFillData() {
      if (Array.from(new Set(this.indexList)).length === 5) {
        this.recommendList = this.indexList.map((el) => this.recommendData[el]);
        this.indexList = new Array(5).fill();
        return;
      }
      this.indexList = this.indexList.map((el) => randomNum(0, 20));
      this.indexList = Array.from(new Set(this.indexList));
      if (this.indexList.length < 5) {
        this.indexList = new Array(5).fill();
        this.formatFillData();
      } else {
        this.recommendList = this.indexList.map((el) => this.recommendData[el]);
        this.indexList = new Array(5).fill();
        return;
      }
    },
    // async init() {
    //   this.loading = true;
    //   await this.fileData();
    //   await this.searchData();
    //   this.loading = false;
    // },
    getFileData() {
      let that = this;
      return new Promise(function (resolve, reject) {
        getTouTiaoData().then((res) => {
          if (res.data.message === "success") {
            that.recommendData = res.data.data
              .map((el) => JSON.parse(el.content))
              .slice(2);
            that.recommendData.unshift();
            resolve(res);
          } else {
            reject("请求错误");
          }
        });
      });
    },
    getSearchData() {
      let that = this;
      return new Promise(function (resolve, reject) {
        getTouTiaoRecommend().then((res) => {
          if (res.data.message === "success") {
            that.searchData = res.data.data;
            that.searchVal = that.searchData.homepage_search_suggest;
            resolve(res);
          } else {
            reject("请求错误");
          }
        });
      });
    },
    handleSelect(key, keyPath) {
      this.activeIndex = key;
    },
    editor() {
      //编辑
      this.editorStatus = !this.editorStatus;
      document.getElementById("phone-data").contentEditable =
        this.editorStatus + "";
    },
    toggle(val) {
      this.status = val;
    },
    handlePictureCardPreview() {
      //上传
    },
    handleRemove() {
      //删除
    },
    // 导出图片
    exportJPEG() {
      console.log("导出图片——————————————————————");
      // html2canvas(document.getElementById("phone-data"), {
      //   onrendered: function (canvas) {
      //     $("#phone-data").html(canvas); // 容器
      //   },
      //   width: 547,
      //   height: 398,
      // });
      let element = document.getElementById("phone-data");
      let filename = generateRandomNum() + ".png";
      // let { height } = getComputedStyle(element, false);
      // let { width } = getComputedStyle(element, false);
      let height = 300;
      let width = 300;
      let canvas = document.createElement("canvas");
      canvas.width = parseInt(width, 10);
      canvas.height = parseInt(height, 10);
      let context = canvas.getContext("2d");
      context.scale(2, 2);
      html2canvas(element, {
        useCORS: true,
      }).then((canvas) => {
        canvas.toBlob((blob) => {
          saveAs(blob, `${filename}`);
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 80rem) {
  .app-recommend-wrap.front .tool-setting-wrap .block-device {
    width: 50%;
  }
}
// 头部导航
.d2-switch-tab-bar {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background-color: #fff;
  padding: 0 20px;
  border-bottom: 1px solid #e9eaf2;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  svg {
    vertical-align: middle;
  }
  .free-editable {
    .btn {
      cursor: pointer;
      color: #8c8c8c;
    }
    .active {
      color: #722ed1;
    }
  }
  .make-model {
    .model {
      padding: 5px 8px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      cursor: pointer;
      border: 1px solid transparent;
      margin-left: 0.75em;
      -webkit-transition: all 0.1s ease-out;
      transition: all 0.1s ease-out;
    }
    .active {
      background-color: #3370ff;
      color: #fff;
    }
  }
  ::v-deep .el-menu--horizontal > .el-menu-item {
    height: 40px;
    line-height: 40px;
  }
}
.d2-container-full__body {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  height: 100%;
  padding: 16px 16px;
  overflow: auto;
  position: relative;
  ::v-deep .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  // 导出图片
  .export-module {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 400px;
    background-color: #fff;
    border-radius: 10px;
    padding: 0.75em;
  }
  .by-consume-button {
    position: relative;
    background-color: #fff;
    width: 100%;
    .consume-wallet {
      position: absolute;
      z-index: 1;
      bottom: 0;
      left: 0;
      width: 100%;
      font-size: 14px;
    }
    .tip-msg {
      display: none;
      background-color: #ff4d4f;
      color: #fff;
      padding: 0.5em 0.75em;
      border-radius: 8px;
      margin-bottom: 0.5em;
      .route {
        cursor: pointer;
        padding-bottom: 2px;
        border-bottom: 1px solid #fff;
      }
    }
    .consume-choose.show {
      height: auto;
      opacity: 1;
      overflow: visible;
      padding-bottom: 36px;
    }
    .consume-choose {
      background-color: #fff;
      border: 3px solid #3370ff;
      border-bottom-width: 8px;
      border-radius: 8px;
      padding: 0.5em;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      cursor: pointer;
      -webkit-transition: all 0.15s ease-in-out;
      transition: all 0.15s ease-in-out;
      opacity: 0;
      height: 36px;
      overflow: hidden;
      .option.active {
        color: #fff;
        background-color: #3370ff;
      }
      .option {
        width: 50%;
        height: 70px;
        border-radius: 6px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        .num {
          font-size: 24px;
          margin-bottom: 0.25em;
        }
      }
    }
    .button {
      position: relative;
      z-index: 2;
    }
  }
  // 手机内容
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
    .wangyi-app .header .logo,
    .wangyi-app .header {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
    .wangyi-app .nav .nav-items,
    .wangyi-app .nav {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
    .close-btn {
      color: #ccc;
      padding: 1px 2px;
      border-radius: 4px;
      height: 14px;
    }
    .toutiao-video-a {
      padding: 17px 0;
      .title {
        font-size: 19.5px;
        line-height: 30px;
        margin: 0 0 10px 0;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .video {
        position: relative;
        .icon {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 1;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          width: 30px;
          height: 30px;
          color: #fff;
        }
        .duration {
          position: absolute;
          right: 14px;
          bottom: 8px;
          font-size: 13px;
          color: #fff;
        }
      }
    }
    .toutiao-item .other,
    .toutiao-item .other .l {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }
    .toutiao-item .other {
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      font-size: 13px;
      margin-top: 10px;
      .l {
        color: #a2a3a4;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        margin-right: 2em;
        .user {
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        .comment,
        .time {
          flex-shrink: 0;
        }
        * + * {
          margin-left: 10px;
        }
      }
      .r {
        -ms-flex-negative: 0;
        flex-shrink: 0;
        margin-left: 10px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
    }
    .toutiao-app {
      background-color: #fff;
      height: 100%;
      width: 100%;
      font-weight: 400;
      overflow: hidden;
      font-family: Helvetica Neue, PingFang SC, Hiragino Sans GB,
        Microsoft YaHei, SimSun, Arial, sans-serif;
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
      .content {
        padding: 0 20px;
        .items {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          .item {
            & + .item {
              -webkit-box-shadow: 0 -1px 1px -1px #cecece;
              box-shadow: 0 -1px 1px -1px #cecece;
            }
          }
        }
      }
      .tab {
        position: absolute;
        z-index: 2;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #f8f8f8;
        -webkit-box-shadow: 0 -1px 1px -1px #cecece;
        box-shadow: 0 -1px 1px -1px #cecece;
        padding: 0 16px;
        .items {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          padding: 6px 0 4px;
          .item {
            width: 20%;
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
            .icon {
              width: 26px;
            }
          }
          .active {
            color: #f04143;
          }
        }
      }
    }
    .wangyi-app {
      .header {
        padding: 36px 16px 8px 16px;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        background-image: -webkit-gradient(
          linear,
          left top,
          left bottom,
          from(#ef4848),
          to(#ef3536)
        );
        background-image: linear-gradient(180deg, #ef4848, #ef3536);
        .logo {
          -ms-flex-negative: 0;
          flex-shrink: 0;
          width: 46px;
          img {
            width: 100%;
            height: auto;
            display: block;
          }
        }
        .input {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.09);
          border-radius: 50em;
          height: 38px;
          -webkit-box-flex: 1;
          -ms-flex-positive: 1;
          flex-grow: 1;
          margin: 0 16px;
          .icon {
            -ms-flex-negative: 0;
            flex-shrink: 0;
            width: 16.5px;
            height: 16.5px;
            margin-left: 14px;
            margin-right: 10px;
          }
          .text {
            margin-right: 14px;
            color: hsla(0, 0%, 100%, 0.9);
            font-size: 16.5px;
            letter-spacing: 0.6px;
            font-weight: 350;
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }
        }
        .g {
          flex-shrink: 0;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          .icon {
            width: 38px;
            height: 38px;
            padding: 6px;
            display: block;
            background-color: rgba(0, 0, 0, 0.09);
            border-radius: 50em;
          }
        }
      }
      .nav {
        padding: 0 16px;
        height: 40px;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        .nav-items {
          position: relative;
          overflow: hidden;
          -webkit-box-flex: 1;
          -ms-flex-positive: 1;
          flex-grow: 1;
          .item {
            position: relative;
            min-width: 2em;
            -ms-flex-negative: 0;
            flex-shrink: 0;
            font-size: 18px;
            color: #5a5a5a;
            & + .item {
              margin-left: 20px;
            }
          }
          .active {
            font-weight: 500;
            color: #171717;
            &::after {
              content: "";
              position: absolute;
              right: -8px;
              top: 0;
              width: 8px;
              height: 8px;
              border: 2.4px solid #e3262a;
              border-radius: 50em;
            }
          }
        }
        .menu {
          margin-left: 8px;
          -ms-flex-negative: 0;
          flex-shrink: 0;
          .icon {
            width: 16.5px;
            height: 16.5px;
            display: block;
            color: #545556;
          }
        }
      }
      .content {
        .items {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          .item {
            padding: 0 16px;
          }
        }
      }
      .tab {
        position: absolute;
        z-index: 2;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 58px;
        background-color: #fff;
        .tab-items {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          height: 100%;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          .item {
            width: 25%;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            color: #595959;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            .icon {
              width: 26px;
            }
          }
          .active {
            color: #ee1b19;
          }
        }
      }
    }
    .baidu-app {
      .header {
        padding: 38px 20px 4px 20px;
        background-color: #fff;
        .search-input {
          border: 1px solid #848586;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          height: 42px;
          border-radius: 12px;
          padding: 0 12px;
          .logo {
            display: block;
            width: 22px;
            line-height: 42px;
            color: #3488ff;
          }
          .text {
            margin: 0 8px;
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            font-size: 17px;
            line-height: 42px;
            color: #929292;
            letter-spacing: 1px;
          }
          .camera {
            width: 22px;
            color: #656667;
          }
        }
      }
      .nav {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 0 20px;
        -webkit-box-shadow: 0 1px 1px -1px #cecece;
        box-shadow: 0 1px 1px -1px #cecece;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        .nav-items {
          position: relative;
          -webkit-box-flex: 1;
          -ms-flex-positive: 1;
          flex-grow: 1;
          overflow-x: hidden;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          .item {
            position: relative;
            padding: 8px 0;
            font-size: 16px;
            color: #5f5f5f;
            white-space: nowrap;
            &::after {
              content: "";
              position: absolute;
              bottom: 0;
              left: 50%;
              height: 4px;
              width: 56%;
              -webkit-transform: translateX(-50%);
              transform: translateX(-50%);
              border-radius: 6px;
            }
            & + .item {
              margin-left: 22px;
            }
          }
          .active {
            color: #000;
            font-weight: 600;
            &::after {
              background-color: #2c7def;
            }
          }
        }
        .menu {
          margin-right: 12px;
          margin-left: 12px;
          -ms-flex-negative: 0;
          flex-shrink: 0;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          .icon {
            width: 20px;
            display: block;
            color: #717273;
          }
        }
        .earphone {
          padding-left: 12px;
          -webkit-box-shadow: -1px 0 1px -1px #949494;
          box-shadow: -1px 0 1px -1px #949494;
          -ms-flex-negative: 0;
          flex-shrink: 0;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          .icon {
            width: 20px;
            color: #666;
            display: block;
          }
        }
      }

      .content {
        .items {
          padding: 0 20px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
        }
      }
      .tab {
        position: absolute;
        z-index: 2;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #fff;
        -webkit-box-shadow: 0 -1px 1px -1px #cecece;
        box-shadow: 0 -1px 1px -1px #cecece;
        padding: 5px 0 4px 0;
        .tab-items {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          .item {
            width: 20%;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            color: #a0a0a0;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            .icon {
              width: 26px;
            }
          }
          .center {
            .icon-btn {
              border-radius: 8px;
              background-color: #4a6cf8;
              padding: 6px 6px;
              width: 46px;
              height: 40px;
            }
          }
          .active {
            color: #323334;
          }
        }
      }
    }
    .baidu-app {
      .header {
      }
      .nav {
      }
      .content {
      }
      .tab {
      }
    }
    svg,
    img {
      max-width: 100%;
    }
  }
  // 右边内容
  .app-recommend-wrap.front,
  .app-recommend-wrap.front .tool-setting-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .app-recommend-wrap.front .canvas-wrap {
    width: 470px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    height: 100%;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
  .app-recommend-wrap.back {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .by-card-block {
    border-radius: 8px;
    -webkit-box-shadow: 0 5px 10px 0 rgba(31, 35, 41, 0.1);
    box-shadow: 0 5px 10px 0 rgba(31, 35, 41, 0.1);
  }
  .by-card-active,
  .by-card-block {
    position: relative;
    background-color: #fff;
  }
  .app-recommend-wrap.front .canvas-wrap {
    width: 470px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    height: 100%;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
  .app-recommend-wrap.front .tool-setting-wrap {
    position: relative;
    background-color: #fff;
    border-radius: 10px;
    border-left: 1px solid #f2f6fc;
    height: 100%;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    display: flex;
  }
  .app-recommend-wrap.front .canvas-wrap .device-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 100%;
  }
  .app-recommend-wrap.front .tool-setting-wrap .block {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }
  .app-recommend-wrap.front .tool-setting-wrap .block-device {
    max-width: 400px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
  .app-recommend-wrap.front .tool-setting-wrap .block {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }
  .app-recommend-wrap.front .tool-setting-wrap .export-module {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 400px;
    background-color: #fff;
    border-radius: 10px;
    padding: 0.75em;
  }
  .app-recommend-wrap.front .tool-setting-wrap .block_header {
    padding: 0.75em;
    border-bottom: 2px solid #3370ff;
  }
  .app-recommend-wrap.front .tool-setting-wrap .block_main {
    padding: 0.75em;
  }
  .mock-form .label-title {
    font-size: 14px;
    margin-bottom: 0.5em;
  }
  .mock-form .feed-items .feed-item {
    background-color: #f7f7f7;
    border-radius: 4px;
    padding: 0.5em 0.375em;
  }
  .mock-form .feed-items .feed-item .header .title {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }
  .mock-form .feed-items .feed-item .header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .mock-form .feed-edit-clean {
    font-size: 14px;
    cursor: pointer;
    color: #ff4d4f;
  }
  .mock-form .feed-items .feed-item.editor .editor-wrap {
    background-color: #fff;
    padding: 0.5em;
    border-radius: 6px;
  }
  .side-menu {
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    background-color: #fff;
    font-size: 14px;
  }
  .side-menu > .item {
    padding: 0.5em 0.75em;
    cursor: pointer;
  }
  .side-menu > .item:first-child {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  .side-menu > .item:last-child {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .side-menu > .item.active {
    background-color: #3370ff;
    color: #fff;
  }
  .side-menu > .item + .item {
    border-top: 1px solid #eaecef;
  }
  .mock-form .form-item .label {
    font-size: 14px;
    margin-bottom: 0.375em;
  }
  .label {
    font-size: 14px;
    margin-bottom: 0.375em;
  }
  .mock-form .feed-items .feed-item.normal {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .mock-form .feed-items .title {
    font-size: 14px;
  }
  .mock-form .feed-items > .feed-item + .feed-item {
    margin-top: 0.375em;
  }
  .mock-form .feed-items .l {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .button-link {
    display: inline-block;
    padding: 0.125em 0.5em;
    border-radius: 4px;
    cursor: pointer;
  }
  .mock-form .feed-items .handle {
    cursor: move;
    margin-right: 0.375em;
    height: 1em;
    line-height: 1;
  }
  ::v-deep .el-upload--picture-card {
    width: 100px;
    height: 100px;
    line-height: 100px;
  }
  ::v-deep .el-form-item__label {
    line-height: 1;
  }
}
.popover-view {
  .popover-view-child {
    // background-color: rgba(0, 0, 0, 1);
    div {
      color: #ffffff;
    }
  }
}
.h-100 {
  height: 100%;
}
.block {
  display: block;
}
.recommend-placeholder-item {
  height: 180px;
  margin: 16px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border: 2px dashed #e2e2e2;
  .recommend-placeholder-title {
    color: rgba(0, 0, 0, 0.4);
    font-size: 20px;
  }
}
.toutiao-article-b {
  padding: 17px 0;
  .title {
    font-size: 19.5px;
    line-height: 30px;
    margin: 0 0 10px 0;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .pics {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 5px;
  }
  .other {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 13px;
    margin-top: 10px;
    .l {
      color: #a2a3a4;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      margin-right: 2em;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      &* + * {
        margin-left: 10px;
      }
      .user {
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      .comment {
        flex-shrink: 0;
      }
      .time {
        flex-shrink: 0;
      }
    }

    .r {
      flex-shrink: 0;
      margin-left: 10px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
  }
}
.toutiao-article-a {
  padding: 17px 0;
  .info {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 2px;
  }
  .title {
    font-size: 19.5px;
    line-height: 30px;
    margin: 0 8px 0 0;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    -ms-flex-item-align: start;
    align-self: start;
  }
  .pic {
    width: 100%;
    img {
      width: 100%;
      height: 90px;
      display: block;
      border-radius: 6px;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }
}
.close-btn {
  background-color: #f8f8f8;
  padding: 1px 2px;
  border-radius: 4px;
  height: 14px;
}
.din-font {
  font-family: suite-admin-din-font !important;
}
</style>
