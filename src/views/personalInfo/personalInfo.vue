<template>
  <div class="personalInfo-container">
    <div class="block-page container-component">
      <div class="d2-container-full">
        <!----><!----><!---->
        <div class="d2-container-full__body">
          <div class="by-card-block h-full">
            <div class="layout-wrap">
              <div class="user-info-wrap">
                <div class="side-menu">
                  <div
                    :class="[navType === 1 ? 'active' : '', 'item']"
                    @click="toggleType(1)"
                  >
                    基础信息
                  </div>
                  <div
                    :class="[navType === 2 ? 'active' : '', 'item']"
                    @click="toggleType(2)"
                  >
                    修改密码
                  </div>
                </div>
                <div class="user-info-block-wrap">
                  <div class="user-info-block" v-if="navType == 1">
                    <div class="header">
                      <span class="title">基本信息</span>
                    </div>
                    <div class="main flex items-start">
                      <div class="form-wrap flex-grow" style="max-width: 480px">
                        <el-form ref="form" :model="form" label-position="top">
                          <el-form-item label="登录账号">
                            <el-input
                              v-model="form.userName"
                              disabled
                            ></el-input>
                          </el-form-item>
                          <el-form-item label="用户昵称">
                            <el-input
                              v-model="form.nickName"
                              maxlength="10"
                              clearable
                            ></el-input>
                          </el-form-item>
                          <el-form-item size="small">
                            <el-button
                              type="primary"
                              @click="onSubmit"
                              :disabled="!form.nickName"
                              >保存</el-button
                            >
                          </el-form-item>
                        </el-form>
                      </div>
                      <div class="avatar-wrap">
                        <div class="el-image avatar">
                          <img
                            src="https://cdn.biio.cn/platform/app/base/logo.png"
                            alt="avatar"
                            class="el-image__inner"
                          /><!---->
                        </div>
                        <div>
                          <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload"
                          >
                            <div class="editor-cover flex flex-center">
                              <i class="icon el-icon-edit"></i>
                            </div>
                          </el-upload>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="user-info-block" v-if="navType == 2">
                    <div class="header">
                      <span class="title">密码修改</span>
                    </div>
                    <div class="main flex items-start">
                      <div class="form-wrap flex-grow" style="max-width: 480px">
                        <el-form
                          ref="form"
                          :model="pwdForm"
                          label-position="top"
                        >
                          <el-form-item label="旧密码">
                            <el-input v-model="pwdForm.oldPwd"></el-input>
                          </el-form-item>
                          <el-form-item label="新密码">
                            <el-input
                              v-model="pwdForm.newPwd"
                              maxlength="10"
                              clearable
                            ></el-input>
                          </el-form-item>
                          <el-form-item label="确认密码">
                            <el-input
                              v-model="pwdForm.confirmPwd"
                              maxlength="10"
                              clearable
                            ></el-input>
                          </el-form-item>
                          <el-form-item size="small">
                            <el-button
                              type="primary"
                              @click="onSubmit"
                              :disabled="
                                !(
                                  pwdForm.confirmPwd &&
                                  pwdForm.newPwd &&
                                  pwdForm.oldPwd
                                )
                              "
                              >保存</el-button
                            >
                          </el-form-item>
                        </el-form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!---->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "personalInfo",
  computed: {
    ...mapGetters(["name"]),
  },
  data() {
    return {
      navType: 1, //1：基础信息，2：修改密码
      form: {
        userName: "18268186295",
        nickname: "",
        imageUrl: "https://cdn.biio.cn/platform/app/base/logo.png",
      },
      pwdForm: {
        oldPwd: "",
        newPwd: "",
        confirmPwd: "",
      },
    };
  },
  methods: {
    toggleType(type) {
      console.log(type);
      this.navType = type;
      this.form = {
        userName: "18268186295",
        nickname: "",
      };
      this.pwdForm = {
        oldPwd: "",
        newPwd: "",
        confirmPwd: "",
      };
    },
    onSubmit() {},
    handleAvatarSuccess() {},
    beforeAvatarUpload() {},
  },
};
</script>

<style lang="scss" scoped>
.personalInfo-container {
  .container-component {
    overflow: hidden;
    .d2-container-full {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      overflow: hidden;
      .d2-container-full__body {
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        height: 100%;
        padding: 16px 16px;
        overflow: auto;
        position: relative;
        background: transparent;
      }
    }
  }
  .by-card-block {
    border-radius: 8px;
    -webkit-box-shadow: 0 5px 10px 0 rgba(31, 35, 41, 0.1);
    box-shadow: 0 5px 10px 0 rgba(31, 35, 41, 0.1);
  }
  .h-full {
    min-height: 100%;
    margin-bottom: -16px;
  }
  .user-info-wrap {
    padding: 2em 0.75em;
    max-width: 940px;
    margin-left: auto;
    margin-right: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    .side-menu {
      width: 200px;
      border: 1px solid #e1e4e8;
      border-radius: 6px;
      background-color: #fff;
      font-size: 14px;
      .item {
        padding: 0.75em 1.25em;
        cursor: pointer;
        border-left: 3px solid transparent;
        + .item {
          border-top: 1px solid #eaecef;
        }
      }
      .active {
        border-left-color: #3370ff;
      }
    }
    .user-info-block-wrap {
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      margin-left: 2em;
      .avatar-wrap {
        position: relative;
        margin: 1.25em 2em;
        width: 140px;
        height: 140px;
        background-color: #87ceeb;
        border-radius: 50em;
        overflow: hidden;
        cursor: pointer;
        .editor-cover {
          position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.1);
          opacity: 0;
          -webkit-transition: opacity 0.2s ease-in-out;
          transition: opacity 0.2s ease-in-out;
          .icon {
            font-size: 22px;
            padding: 0.5em;
            border-radius: 6px;
            background-color: hsla(0, 0%, 100%, 0.8);
          }
          &:hover {
            opacity: 1;
          }
        }
      }
      .header {
        margin-bottom: 1.25em;
        border-bottom: 1px solid #e1e4e8;
        padding: 0.75em 0;
        .title {
          font-weight: 500;
        }
      }
    }
  }
}
</style>
