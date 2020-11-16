<template>
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
          :key="el"
          >{{ el }}</el-menu-item
        >
      </el-menu>
    </div>
    <div class="r">
      <div class="flex">
        <div data-intro="7" class="free-editable">
          <span @click="editor" :class="[editorStatus ? 'active' : '', 'btn']"
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
              ></path></svg
            > 前端图</span
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
              ></path></svg
            > 数据图</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendHeader",
  props: {},
  data() {
    return {
      activeIndex: "1",
      editorStatus: false,
      status: 1,
      barList: [
        "头条",
        "网易",
        "百度",
        "凤凰",
        "一点",
        "搜狐",
        "腾讯",
        "看点",
        "UC",
        "新浪",
        "简书",
        "趣头条",
      ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$emit("bar", key);
    },
    editor() {
      //编辑
      this.editorStatus = !this.editorStatus;
      this.$emit("editor", !this.editorStatus);
    },
    toggle(val) {
      this.status = val;
      this.$emit("toggle", val);
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>