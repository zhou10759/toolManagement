<template>
  <div class="vouchers-detail-container">
    <div class="d2-container-full">
      <!----><!----><!---->
      <div class="d2-container-full__body">
        <div class="bill-detail-page by-card-block h-full">
          <div class="layout-wrap">
            <div class="center-wrap">
              <div class="bill-detail">
                <div class="bill-base-info">
                  <div class="flex items-center">
                    <div class="bill-id">兑换劵编号 {{ vouchers.id }}</div>
                    <div
                      class="by-status light-pending"
                      v-if="vouchers.status === '待领取'"
                    >
                      <i></i>
                      <span>{{ vouchers.status }}</span>
                    </div>
                    <div
                      class="by-status light-pending"
                      v-if="vouchers.status === '待使用'"
                    >
                      <svg
                        t="1604906603494"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="3106"
                        width="32"
                        height="32"
                      >
                        <path
                          d="M139.88352 420.15744a33.14176 33.14176 0 0 1-10.63424-1.75616 34.64192 34.64192 0 0 1-21.43232-43.57632C164.7104 199.6288 324.49536 81.92 505.4208 81.92c179.968 0 339.4816 116.89472 396.93824 290.87744a34.65728 34.65728 0 0 1-21.21728 43.68896 33.6128 33.6128 0 0 1-42.79296-21.66272c-48.18432-145.92-181.98016-243.94752-332.928-243.94752-151.75168 0-285.7728 98.71872-333.48608 245.64224a33.85856 33.85856 0 0 1-32.0512 23.63904zM505.4208 936.96c-185.61024 0-346.624-121.66656-400.67072-302.75584a34.60608 34.60608 0 0 1 22.46144-43.008 33.67424 33.67424 0 0 1 42.14784 22.9376c45.32736 151.8592 180.3776 253.89056 336.06144 253.89056 155.008 0 293.65248-105.93792 337.14688-257.62304a33.68448 33.68448 0 0 1 41.9072-23.40864 34.60096 34.60096 0 0 1 22.92224 42.76736c-51.84512 180.87424-217.16992 307.2-401.97632 307.2z m-44.8256-250.56768a33.55648 33.55648 0 0 1-31.744-22.73792l-67.584-190.52032-48.04608 57.96864a33.47968 33.47968 0 0 1-25.78432 12.2112H59.392a34.4832 34.4832 0 0 1 0-68.95616h212.35712l75.61216-91.22304a33.41312 33.41312 0 0 1 31.744-11.66848 33.97632 33.97632 0 0 1 25.79456 22.20032l64.79872 182.67648 60.60032-91.92448a33.4848 33.4848 0 0 1 31.744-15.02208 33.90464 33.90464 0 0 1 27.7504 21.76512l16.18944 42.46528 34.17088-51.11808a33.5872 33.5872 0 0 1 27.89888-15.04256H954.368a34.4832 34.4832 0 0 1 0 68.95616h-268.4928l-60.24192 90.112a33.47456 33.47456 0 0 1-59.392-6.92736l-16.00512-41.984-61.62944 93.53728a33.57696 33.57696 0 0 1-28.01152 15.232z"
                          fill="#7f3bf5"
                          p-id="3107"
                        ></path>
                      </svg>
                      <span>{{ vouchers.status }}</span>
                    </div>
                    <div
                      class="by-status light-info"
                      v-if="vouchers.status === '已过期'"
                    >
                      <svg
                        t="1604906659996"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="8223"
                        width="32"
                        height="32"
                      >
                        <path
                          d="M512 102.4a409.6 409.6 0 1 0 409.6 409.6 409.6 409.6 0 0 0-409.6-409.6z m181.248 518.144a51.2 51.2 0 0 1-72.704 72.704L512 584.192l-108.544 109.056a51.2 51.2 0 0 1-72.704-72.704L439.808 512 330.752 403.456a51.2 51.2 0 0 1 72.704-72.704L512 439.808l108.544-109.056a51.2 51.2 0 0 1 72.704 72.704L584.192 512z"
                          fill="#646a73"
                          p-id="8224"
                        ></path>
                      </svg>
                      <span>{{ vouchers.status }}</span>
                    </div>
                    <div
                      class="by-status light-info"
                      v-if="vouchers.status === '已作废'"
                    >
                      <i></i>
                      <span>{{ vouchers.status }}</span>
                    </div>
                    <div
                      class="by-status light-success"
                      v-if="vouchers.status === '已使用'"
                    >
                      <svg
                        t="1604906766166"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="9368"
                        width="32"
                        height="32"
                      >
                        <path
                          d="M512 1024a512 512 0 1 1 0-1024 512 512 0 0 1 0 1024z m-71.318588-361.411765a29.334588 29.334588 0 0 0 20.48-8.252235L774.625882 349.364706a27.708235 27.708235 0 0 0 0-39.936 29.575529 29.575529 0 0 0-41.08047 0l-292.74353 284.912941L290.454588 448.150588a29.575529 29.575529 0 0 0-41.08047 0 27.708235 27.708235 0 0 0 0 39.996236l170.706823 166.128941a29.274353 29.274353 0 0 0 20.540235 8.252235z"
                          fill="#34c724"
                          p-id="9369"
                          data-spm-anchor-id="a313x.7781069.0.i24"
                          class="selected"
                        ></path>
                      </svg>
                      <span>{{ vouchers.status }}</span>
                    </div>
                  </div>
                  <div class="bill-time m-t-xs">
                    日期 {{ vouchers.createTime }}
                  </div>
                </div>
                <div class="bill-card">
                  <div class="title">兑换劵详情</div>
                  <div class="detail-items">
                    <div class="item">
                      <div class="label">兑换劵编号</div>
                      <div class="t">{{ vouchers.id }}</div>
                    </div>
                    <div class="item">
                      <div class="label">描述</div>
                      <div class="t">{{ vouchers.voucherDescribe }}</div>
                    </div>
                    <div class="item">
                      <div class="label">兑换类型</div>
                      <div class="t">{{ vouchers.projectType }}</div>
                    </div>
                    <div class="item">
                      <div class="label">兑换劵发放账号</div>
                      <div class="t">{{ vouchers.phone }}</div>
                    </div>
                    <div class="item">
                      <div class="label">发放方式</div>
                      <div class="t">{{ vouchers.issueType }}</div>
                    </div>
                    <div class="item">
                      <div class="label">起止时间</div>
                      <div class="t">
                        {{ vouchers.createTime }} ~ {{ vouchers.endTime }}
                      </div>
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
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "vouchers-detail",
  computed: {
    ...mapGetters(["name"]),
  },
  data() {
    return {
      vouchers: {
        id: "5fa86a6110f282100a3d7462",
        phone: "18268186295",
        projectType: "智能推荐",
        voucherDescribe: "每日发放兑换劵",
        issueType: "自动",
        status: "待使用",
        statusDescribe: "将在16 小时后失效",
        createTime: "2020/11/09 06:00",
        endTime: "- -",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.by-card-block.h-full {
    min-height: 100%;
    margin-bottom: -16px;
}
.bill-detail-page {
  .center-wrap {
    margin: 0 auto;
    width: 800px;
  }
  .bill-time {
    color: #8691a3;
    font-size: 14px;
  }
  .bill-card {
    margin-top: 2em;
    padding: 1.25em 2em 2em;
    border-radius: 6px;
    border: 1px solid #dee0e3;
    border-bottom-color: transparent;
    position: relative;
    .title {
      font-size: 16px;
      font-weight: 500;
      line-height: 2;
      color: #1f2329;
      margin-right: 8px;
    }
  }
  .detail-items {
      margin-top: 1.25em;
    .item + .item {
      margin-top: 1.25em;
    }
    .item {
      color: #1f2329;
      font-size: 14px;
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
  }
}
</style>
