<template>
  <div class="smartRecommend-container">
    <div class="block-page app-recommend intro-step container-component">
      <div class="d2-container-full">
        <div class="d2-container-full__bar">
          <recommend-header
            @bar="toggleBar"
            @editor="editorChange"
            @toggle="toggleChange"
          ></recommend-header>
        </div>
        <div class="d2-container-full__body">
          <div class="app-recommend-wrap by-card-block h-100 front">
            <div id="recommend-canvas-wrap-front" class="canvas-wrap"></div>
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
                            <div class="feed-item normal" v-if="el.default!==1">
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
import RecommendHeader from "./Header/index";
export default {
  name: "smartRecommend",
  computed: {
    ...mapGetters(["name"]),
  },
  components: {
    RecommendHeader,
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
    };
  },
  methods: {
    toggleBar(val) {
      //切换导航
      console.log("切换导航", val);
    },
    editorChange(val) {
      //切换编辑状态
      console.log("切换编辑状态", val);
    },
    toggleChange(val) {
      //切换编辑类型
      console.log("切换编辑类型", val);
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
.d2-container-full__body {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  height: 100%;
  padding: 16px 16px;
  overflow: auto;
  position: relative;
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
</style>
