<template>
  <div class="login-container">
    <!-- 选择登录身份 -->
    <div class="auth-container">
      <div class="auth-container_header">
        <div class="auth-container_header-logo">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzM2IiBoZWlnaHQ9IjMzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjIyLjk5NCUiIHkxPSIzLjcxMSUiIHgyPSI3OS4yMzMlIiB5Mj0iMTA1LjExNiUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMEJFNkZGIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzgzMjdFRCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTc4IDUuNzc0bDEyNS40OTIgNzIuNDUyYTIwIDIwIDAgMDExMCAxNy4zMjF2MTQ0LjkwNmEyMCAyMCAwIDAxLTEwIDE3LjMyTDE3OCAzMzAuMjI3YTIwIDIwIDAgMDEtMjAgMEwzMi41MDggMjU3Ljc3NGEyMCAyMCAwIDAxLTEwLTE3LjMyMVY5NS41NDdhMjAgMjAgMCAwMTEwLTE3LjMyTDE1OCA1Ljc3M2EyMCAyMCAwIDAxMjAgMHoiIGZpbGw9InVybCgjYSkiLz48ZyBmaWxsPSIjRkZGIj48cGF0aCBkPSJNNTcuNzU0IDEzNy44NGwyNy42NC0yMy4xOTMgNjcuMTM1IDgwLjAxIDIxLjA5NC0xNy43IDMwLjQ2NSAyMS41MzYtNTYuMDA2IDQ2Ljk5NS05MC4zMjgtMTA3LjY0OXpNMjc4LjI0NiAxOTguMjQxbC0yNy42NCAyMy4xOTMtNjcuMTM1LTgwLjAxLTIxLjA5NCAxNy43LTMwLjQ2NS0yMS41MzYgNTYuMDA2LTQ2Ljk5NSA5MC4zMjggMTA3LjY0OHoiLz48L2c+PC9nPjwvc3ZnPg=="
            alt=""
            class="logo"
          />
          <div class="name">百易</div>
        </div>
      </div>
      <div class="auth-container_main">
        <div class="auth-form-wrap">
          <div class="card">
            <div class="header">
              <div class="switch-button button-link" @click="toggleNav()">
                <i class="icon by by-qiehuan"></i>
                <span>{{ type === 3 ? "返回" : "切换角色" }}</span>
              </div>
            </div>
            <div class="main">
              <!-- 账号登录 -->
              <div
                v-if="type !=3"
                class="from-block"
              >
                <div class="title text-center" v-if="type === 1 || type === 2">
                  用户登录
                </div>
                <div class="title text-center m-b-md" v-else-if="type === 4">
                  用户注册
                </div>
                 <div class="title text-center m-b-md" v-else-if="type === 5">
                  重置密码
                </div>
                 <div class="title text-center m-b-md" v-else-if="type === 6">
                  管理员登录
                </div>
                <div class="switch-bar" v-if="type === 1 || type === 2">
                  <p
                    :class="[type === 1 ? 'active' : '', 'switch-bar_item']"
                    @click="toggleType(1)"
                  >
                    账号登录
                  </p>
                  <p class="separate">｜</p>
                  <p
                    :class="[type === 2 ? 'active' : '', 'switch-bar_item']"
                    @click="toggleType(2)"
                  >
                    手机登录
                  </p>
                  <!---->
                </div>
                <el-form
                  ref="loginForm"
                  :model="loginForm"
                  :rules="loginRules"
                  class="login-form"
                  auto-complete="on"
                  label-position="left"
                  v-if="type !== 3"
                >
                   <el-form-item prop="phone" >
                    <span class="svg-container">
                      <svg-icon icon-class="user" />
                    </span>
                    <el-input
                      ref="phone"
                      v-model="loginForm.phone"
                      placeholder="手机号"
                      name="phone"
                      type="text"
                      tabindex="1"
                      auto-complete="on"
                    />
                  </el-form-item>
                  <el-form-item prop="password" v-if="type===1||type===4||type===5">
                    <span class="svg-container">
                      <svg-icon icon-class="password" />
                    </span>
                    <el-input
                      :key="passwordType"
                      ref="password"
                      v-model="loginForm.password"
                      :type="passwordType"
                      :placeholder="type===5?'新密码': '密码'"
                      name="password"
                      tabindex="2"
                      auto-complete="on"
                      @keyup.enter.native="handleLogin"
                    />
                    <span class="show-pwd" @click="showPwd">
                      <svg-icon
                        :icon-class="
                          passwordType === 'password' ? 'eye' : 'eye-open'
                        "
                      />
                    </span>
                  </el-form-item>
                  <el-form-item prop="uPassword" v-if="type===4||type===5">
                    <span class="svg-container">
                      <svg-icon icon-class="password" />
                    </span>
                    <el-input
                      :key="passwordType"
                      ref="uPassword"
                      v-model="loginForm.uPassword"
                      :type="passwordType"
                      placeholder="密码"
                      name="uPassword"
                      tabindex="2"
                      auto-complete="on"
                      @keyup.enter.native="handleLogin"
                    />
                    <span class="show-pwd" @click="showPwd">
                      <svg-icon
                        :icon-class="
                          passwordType === 'password' ? 'eye' : 'eye-open'
                        "
                      />
                    </span>
                  </el-form-item>
                  <el-form-item prop="code" v-if="type!==1">
                    <span class="svg-container">
                      <svg-icon icon-class="password" />
                    </span>
                    <el-input
                      ref="code"
                      v-model="loginForm.code"
                      type="text"
                      placeholder="验证码"
                      name="code"
                      tabindex="2"
                      auto-complete="on"
                      maxlength="6"
                      @keyup.enter.native="handleLogin"
                    />
                    <span class="show-pwd code" @click="getCode">
                      <el-button :disabled="Boolean(timer)">{{
                        timer ? seconds + "秒" : "发送验证码"
                      }}</el-button>
                    </span>
                  </el-form-item>
                  <p class="agreement text-center" v-if="type===1||type===2||type===4">
                    <span v-if="type===4">注册即表示同意</span>
                    <span v-else>登录即表示同意</span
                    ><a href="https://www.biio.cn/protocol.html" class="link m-l-xxxs">用户协议</a>
                  </p>
                  <el-button
                    :loading="loading"
                    type="primary"
                    style="width: 100%; margin-top: 3.25em"
                    @click.native.prevent="handleLogin"
                    >{{type===4?'注册':'登录'}}</el-button
                  >
                </el-form>
              </div>
              <!-- 切换身份 -->
              <div class="choose-role-block" v-else>
                <div class="title text-center m-b-md">选择您的登录身份</div>
                <div class="choose-core">
                  <div class="item" @click="toggleType(1)">
                    <div class="item-container">
                      <img
                        src="https://www.biio.cn/img/user-role.c76633c9.png"
                        alt=""
                        class="icon"
                      />
                      <div class="info">
                        <div class="label">用户</div>
                        <div class="description">普通注册用户或会员用户</div>
                      </div>
                    </div>
                  </div>
                  <div class="item" @click="toggleType(6)">
                    <div class="item-container">
                      <img
                        src="https://www.biio.cn/img/manager-role.1a74dd99.png"
                        alt=""
                        class="icon"
                      />
                      <div class="info">
                        <div class="label">管理</div>
                        <div class="description">运营、客服及数据管理用户</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer" v-if="type === 1 || type === 2 || type === 4||type === 5">
              <!---->
              <div class="link active" @click="type = 1" v-if="type === 4||type === 5">
                立即登录
              </div>
              <div class="link active" @click="type = 4" v-else>立即注册</div>
              <div class="link" v-if="type === 1" @click="toggleType(5)">
                忘记密码?
              </div>
              <div
                class="link"
                v-if="type === 2 || type === 4|| type === 5"
                @click="dialogVisible = true"
              >
                收不到验证码?
              </div>
              <!---->
            </div>
          </div>
        </div>
      </div>
      <div class="auth-container_footer">
        <div class="auth-container_footer-copyright">
          Copyright © 2020 百易工具
        </div>
      </div>
    </div>
    <div class="side-slogan">
      <div class="slogan-container">
        <p class="slogan-text">
          整合SEO优化、数据模拟生成、数据分析等功能于一体，打造高效商业交付工具
        </p>
        <img
          src="https://www.biio.cn/img/side-slogan-pic.05e81f79.png"
          alt=""
        />
        <div class="kf-qr">
          <div class="el-image qr">
            <img
              src="https://cdn.biio.cn/platform/app/base/KF_QRcode.svg"
              class="el-image__inner"
              alt=""
            />
          </div>
          <div class="label text-center">在线客服</div>
        </div>
      </div>
    </div>
    <el-dialog
      title="验证码无法收到？"
      :visible.sync="dialogVisible"
      width="35%"
      top="40vh"
    >
      <p># 请检查手机号是否正确</p>
      <p># 请检查手机号是否通信正常</p>
      <p># 请扫码右侧客服二维码进行反馈</p>
    </el-dialog>
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate";

export default {
  name: "Login",
  data() {
    const validatePhone = (rule, value, callback) => {
      if (!( /^[1][3,4,5,7,8,9][0-9]{9}$/.test(value))) {
        callback(new Error("未知的手机号格式"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码长度应大于6位"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        phone: "18268186295",
        username: "admin",
        password: "111111",
        uPassword: "",
        code: "",
      },
      loginRules: {
        username: [{ required: true, trigger: "blur" }],
        phone: [{ required: true, trigger: "blur", validator: validatePhone }],
        password: [
          { required: true, trigger: "blur", validator: validatePassword },
        ],
        upassword: [
          { required: true, trigger: "blur", validator: validatePassword },
        ],
        code: [{ required: true, trigger: "blur" }],
      },
      loading: false,
      passwordType: "password",
      redirect: undefined,
      type: 1, // 1：账号登录 ，2：手机号登录，3：切换身份，4：注册，5：重置密码，6：管理员登录
      typeBofore: 1,
      userLoginType: 1,
      timer: null,
      seconds: 60,
      dialogVisible: false,
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  computed: {
    getHeaderTitle() {
      let title = "";
      switch (this.type) {
        case 1:
          title = "用户登录";
          break;
        case 2:
          title = "用户登录";
          break;
        case 3:
          title = "选择您的登录身份";
          break;
        case 4:
          title = "用户注册";
          break;
        case 5:
          title = "重置密码";
          break;
        case 6:
          title = "管理员登录";
          break;
      }
      return title;
    },
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    getCode() {
      let that = this;
      if (this.timer) return;
      that.timer = setInterval(() => {
        that.seconds = --that.seconds;
        if (that.seconds === 0) {
          clearInterval(that.timer);
          that.timer = null;
          that.seconds = 60;
          return;
        }
      }, 1000);
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || "/" });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    toggleType(logo) {
      this.type = logo;
      this.loginForm = {
        username: "admin",
        password: "111111",
        uPassword: "",
        code: "",
      };
    },
    toggleNav() {
      if (this.type === 3) {
        this.type = this.typeBofore;
        // this.typeBofore = this.type;
      } else {
        this.typeBofore = this.type;
        this.type = 3;
      }
    },
  },
};
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #ffffff;
$light_gray: #333;
$cursor: #333;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .login-model {
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 440px;
    min-height: 500px;
    background-color: #fff;
    border-radius: 12px;
    -webkit-box-shadow: 0 4px 14px 0 rgba(206, 207, 209, 0.28);
    box-shadow: 0 4px 14px 0 rgba(206, 207, 209, 0.28);
  }

  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;
    }
  }

  .el-form-item {
    border: 1px solid rgba(0, 0, 0, 0.1);
    // background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
.el-image {
  position: relative;
  display: inline-block;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.el-image__inner {
  vertical-align: top;
}
.text-center {
  text-align: center;
}
.m-b-md {
  margin-bottom: 1.25em;
}
img,
svg,
video {
  max-width: 100%;
}
.el-image__inner {
  width: 100%;
  height: 100%;
}
.button-link {
  display: inline-block;
  padding: 0.125em 0.5em;
  border-radius: 4px;
  cursor: pointer;
}
.by {
  font-family: by !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.by-qiehuan:before {
  content: "⇌";
}
.m-l-xxxs {
  margin-left: 0.25em;
}
.code .el-button {
  background-color: transparent;
  border-color: transparent;
  &:hover {
    background-color: transparent;
    border-color: transparent;
  }
}
</style>

<style lang="scss" scoped>
$bg: #ffffff;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  background-color: $bg;
  width: 100vw;
  height: 100vh;
  display: flex;
  .auth-container {
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    .auth-container_header {
      padding: 18px 20px;
      &-logo {
        -webkit-columns: #262626;
        -moz-columns: #262626;
        columns: #262626;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        .logo {
          display: block;
          width: 30px;
          height: 30px;
        }
        .name {
          margin-left: 0.375em;
          font-size: 20px;
        }
      }
    }
    .auth-container_main {
      .auth-form-wrap {
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        .switch-button {
          &:hover {
            color: #1d1d1d;
            background-color: #eff0f1;
          }
          color: #646a73;
          font-size: 14px;
          .icon {
            margin-right: 0.375em;
          }
        }
        .card {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          width: 440px;
          min-height: 500px;
          background-color: #fff;
          border-radius: 12px;
          -webkit-box-shadow: 0 4px 14px 0 rgba(206, 207, 209, 0.28);
          box-shadow: 0 4px 14px 0 rgba(206, 207, 209, 0.28);
          .link {
            color: #434343;
            cursor: pointer;
            &:hover {
              color: #3370ff;
            }
          }
          .active {
            color: #3370ff;
          }
          .header {
            padding: 0.75em;
          }
          .main {
            .choose-role-block {
              margin: 0.75em 0;
              .title {
                font-size: 1.8em;
              }
              .choose-core {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
                .item {
                  &:hover {
                    background-color: rgba(51, 112, 255, 0.06);
                  }
                  padding: 1.25em 0;
                  cursor: pointer;
                  .item-container {
                    width: 300px;
                    margin-left: auto;
                    margin-right: auto;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    .icon {
                      display: block;
                      width: 45px;
                      height: 50px;
                    }
                    .info {
                      -webkit-box-flex: 1;
                      -ms-flex-positive: 1;
                      flex-grow: 1;
                      margin-left: 2em;
                      .label {
                        font-size: 24px;
                      }
                      .description {
                        color: #646a73;
                        margin-top: 0.375em;
                      }
                    }
                  }
                }
              }
            }
            .from-block {
              width: 380px;
              margin: 0.75em auto;
              .from-core .agreement {
                font-size: 14px;
                color: #646a73;
                .link {
                  color: #1d1d1d;
                }
              }
              .title {
                font-size: 1.8em;
              }
              .switch-bar {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-pack: distribute;
                justify-content: space-around;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                width: 240px;
                margin: 1.25em auto;
                .separate {
                  color: #dadbdb;
                }
                .switch-bar_item {
                  cursor: pointer;
                  // .active {
                  //   color: #3370ff;
                  // }
                }
              }
            }
          }
          .footer {
            width: 380px;
            margin: 0.5em auto 1.25em auto;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            font-size: 14px;
          }
        }
      }
    }
    .auth-container_footer {
      padding: 18px 20px;
      &-copyright {
        color: #8c8c8c;
        font-size: 13px;
      }
    }
  }
  .side-slogan {
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
    height: 100%;
    width: 520px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA4IiBoZWlnaHQ9IjEwMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMCAwaDUwOHYxMDI0SDB6Ii8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHVzZSBmaWxsPSIjMjM1QkRBIiB4bGluazpocmVmPSIjYSIvPjxnIG1hc2s9InVybCgjYikiPjxwYXRoIGZpbGw9IiMyMDZFRTEiIGQ9Ik0tMTcgMTAyLjI4Nmg2OS4xMTNsMzguODk1LTcyLjE5Mkw3MS44NS02LjM5SC0xN3oiLz48cGF0aCBmaWxsPSIjMDA2OUZGIiBkPSJNLTI0IDQ3Ljk0N0g4MS4yNGwtNDMuNTMgODEuODR6Ii8+PC9nPjxnIG1hc2s9InVybCgjYikiIHN0cm9rZT0iIzI4NjFFNSIgc3Ryb2tlLXdpZHRoPSIxMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjcwIC01NCkiPjxjaXJjbGUgY3g9IjE4NCIgY3k9IjE4NCIgcj0iMzguNSIvPjxjaXJjbGUgY3g9IjE4NCIgY3k9IjE4NCIgcj0iNzMuNSIvPjxjaXJjbGUgY3g9IjE4NCIgY3k9IjE4NCIgcj0iMTA4LjUiLz48Y2lyY2xlIGN4PSIxODQiIGN5PSIxODQiIHI9IjE0My41Ii8+PGNpcmNsZSBjeD0iMTg0IiBjeT0iMTg0IiByPSIxNzguNSIvPjwvZz48L2c+PGcgbWFzaz0idXJsKCNiKSIgc3Ryb2tlPSIjMjg2MUU1IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjExIj48cGF0aCBkPSJNLTM3LjUgOTE1LjVsMjkxIDExNm0tMjkxLTg2bDI5MSAxMTZtLTI5MS04NmwyOTEgMTE2bS0yOTEtODZsMjkxIDExNiIvPjwvZz48L2c+PC9zdmc+);
    background-repeat: no-repeat;
    background-size: cover;
    .slogan-container {
      width: 350px;
      .slogan-text {
        color: #fff;
        font-size: 22px;
        line-height: 36px;
        margin-bottom: 2em;
      }
      .kf-qr {
        margin: 3.25em auto 0;
        width: 220px;
        height: 220px;
        background-color: #fff;
        .label {
          padding: 3px 0;
          background-color: #fff;
        }
      }
    }
  }
  // min-height: 100%;
  // width: 100%;
  // background-color: $bg;
  // overflow: hidden;

  // .login-form {
  //   position: relative;
  //   width: 520px;
  //   max-width: 100%;
  //   padding: 160px 35px 0;
  //   margin: 0 auto;
  //   overflow: hidden;
  // }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
