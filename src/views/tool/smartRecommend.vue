<template>
  <div class="smartRecommend-container">
    <div class="block-page app-recommend intro-step container-component">
      <div class="d2-container-full">
        <div class="d2-container-full__bar">
          <div class="d2-switch-tab-bar">
            <div>
              <el-menu
                :default-active="activeIndex"
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
              <div class="device-wrap">
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
                    <div class="toutiao-app" v-if="activeIndex == '1'">
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
                        <div  class="item toutiao-item">
                          <div class="recommend-placeholder-item">
                            <span class="recommend-placeholder-title"
                              >数据模拟区域</span
                            >
                          </div>
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
                    :model="equipmentForm"
                    label-width="80px"
                    label-position="top"
                  >
                    <el-form-item label="设备类型">
                      <el-select
                        v-model="equipmentForm.equipmentType"
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
                          v-model="equipmentForm.equipmentElectricity"
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
                          v-model="equipmentForm.equipmentTime"
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
                          v-model="equipmentForm.fileName"
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
                        <el-button type="primary" style="width: 49%"
                          >一键填充/刷新</el-button
                        >
                        <el-button type="danger" style="width: 49%" plain
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
                        <el-form
                          :model="lenovoSearchForm"
                          label-width="80px"
                          label-position="top"
                        >
                          <el-form-item label="猜你想搜">
                            <div class="flex">
                              <el-input
                                v-model="lenovoSearchForm.searchVal"
                                style="width: 310px"
                                clearable
                              >
                              </el-input>
                              <el-button
                                icon="el-icon-refresh"
                                class="m-l-sm"
                              ></el-button>
                            </div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="12">
                        <el-form
                          :model="addDataForm"
                          label-width="80px"
                          label-position="top"
                        >
                          <el-form-item label="添加数据">
                            <el-select
                              v-model="addDataForm.addVal"
                              placeholder="请选择"
                              style="width: 310px"
                            >
                              <el-option
                                v-for="item in addFormList"
                                :key="item"
                                :label="item"
                                :value="item"
                              >
                              </el-option>
                            </el-select>
                            <el-button type="primary" class="m-l-sm"
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
                          v-model="articleForm.searchArticle"
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
                        <draggable v-model="list">
                          <div class="feed-item editor">
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
                                v-model="input"
                                placeholder="标题"
                              ></el-input>
                              <el-row
                                class="m-t-sm"
                                style="margin-left: -5px; margin-right: -5px"
                              >
                                <el-col
                                  :span="8"
                                  style="padding-left: 5px; padding-right: 5px"
                                >
                                  <div class="form-item">
                                    <div class="label">媒体名称</div>
                                    <div class="b">
                                      <el-input
                                        v-model="input"
                                        placeholder="媒体"
                                        clearable
                                      ></el-input>
                                    </div>
                                  </div>
                                </el-col>
                                <el-col
                                  :span="8"
                                  style="padding-left: 5px; padding-right: 5px"
                                  ><div class="form-item">
                                    <div class="label">评论数</div>
                                    <div class="b">
                                      <el-input
                                        v-model="input"
                                        placeholder="评论数"
                                        clearable
                                      ></el-input>
                                    </div></div
                                ></el-col>
                                <el-col
                                  :span="8"
                                  style="padding-left: 5px; padding-right: 5px"
                                  ><div class="form-item">
                                    <div class="label">发布时间</div>
                                    <div class="b">
                                      <el-input
                                        v-model="input"
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
                                          :on-preview="handlePictureCardPreview"
                                          :on-remove="handleRemove"
                                        >
                                          <i class="el-icon-plus"></i>
                                        </el-upload>
                                      </div>
                                      <div class="video-duration m-l-xs">
                                        <div class="label">视频时长</div>
                                        <div class="b">
                                          <el-input
                                            placeholder="例：12:24"
                                            v-model="articleForm.searchArticle"
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
                          <block v-for="(el, i) in list" :key="i">
                            <div
                              class="feed-item normal"
                              v-if="el.default !== 1"
                            >
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
                                <span class="title">{{ el.list }}</span>
                              </div>
                              <div class="r flex">
                                <div class="button-link">
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
                                <div class="button-link">
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
                          </block>
                        </draggable>
                      </div>
                    </div>
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
import { mapGetters } from "vuex";
import draggable from "vuedraggable";
import { recommendNav } from "@/utils/staticData";

export default {
  name: "smartRecommend",
  computed: {
    ...mapGetters(["name"]),
  },
  components: {
    draggable,
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
      equipmentForm: {
        equipmentType: "小米 6",
        equipmentElectricity: 45,
        equipmentTime: "",
        fileName: "",
      }, //设备变量
      lenovoSearchForm: {
        searchVal: "",
      }, //猜你想搜
      addDataForm: {
        addVal: "",
      }, //添加数据
      addFormList: ["任意类型", "文档 (单图)", "文章 (多图)", "视频"],
      articleForm: {
        searchArticle: "",
      }, //智能分析
      list: [
        {
          default: 1,
          title: "",
          mediaName: "",
          comments: null,
          releaseTime: "",
          mediaType: 1,
          imgList: [
            "https://cdn.biio.cn/platform/app/never/recommend/record/2020-11-18/20201118152438_TAoI2.png",
          ],
          video:
            "https://cdn.biio.cn/platform/app/never/recommend/record/2020-11-18/20201118152438_TAoI2.png",
          videoTime: "",
        },
      ],
      toggleVideoType: 1,
      activeIndex: "1",
      editorStatus: false,
      status: 1,
      barList: recommendNav,
    };
  },
  methods: {
    handleSelect(key, keyPath) {},
    editor() {
      //编辑
      this.editorStatus = !this.editorStatus;
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
.close-btn {
  background-color: #f8f8f8;
  padding: 1px 2px;
  border-radius: 4px;
  height: 14px;
}
</style>
