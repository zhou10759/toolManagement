<template>
  <div class="vouchers-container">
    <div class="d2-container-full">
      <!----><!----><!---->
      <div class="d2-container-full__body">
        <div class="by-card-block h-full">
          <div class="block-table-header p-md">
            <div class="getter flex">
              <div class="d2-search-group">
                <el-date-picker
                  v-model="screening.date"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  size="small"
                >
                </el-date-picker>
              </div>
              <div class="d2-filter-group m-l-xs">
                <div class="item">
                  <el-select
                    v-model="screening.voucherType"
                    placeholder="兑换券类型"
                    size="small"
                  >
                    <el-option
                      v-for="item in typeList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </div>
                <div class="item">
                  <el-select
                    v-model="screening.voucherStatus"
                    placeholder="兑换券状态"
                    size="small"
                  >
                    <el-option
                      v-for="item in statusList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div class="d2-confirm-group m-l-xs">
                <el-button type="primary" size="small" @click="conditionQuery()"
                  >查询</el-button
                >
                <el-button size="small" @click="emptyCondit()">清空</el-button>
              </div>
            </div>
            <div class="controller"></div>
          </div>
          <div class="block-table-main p-x-md">
            <div class="d2-crud">
              <div class="d2-crud-body">
                <el-table :data="tableData" style="width: 100%" height="710">
                  <el-table-column label="项目类型" width="240">
                    <template slot-scope="scope">
                      <div>{{ typeList[scope.row.type].label }}</div>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="description"
                    label="兑换券描述"
                    width="240"
                  >
                  </el-table-column>
                  <el-table-column label="发放方式" width="240" align="center">
                    <template slot-scope="scope">
                      <div>
                        <div v-if="scope.row.mode == 0">自动</div>
                        <div v-if="scope.row.mode == 1">手动</div>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column label="状态" width="240" align="center">
                    <template slot-scope="scope">
                      <div>
                        <div
                          class="by-status light-pending"
                          v-if="scope.row.state === 4"
                        >
                          <i></i>
                          <span>待领取</span>
                        </div>
                        <div
                          class="by-status light-pending"
                          v-if="scope.row.status === 4"
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
                          <span>待领取</span>
                        </div>
                        <div
                          class="by-status light-info"
                          v-if="scope.row.state === 2"
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
                          <span>已过期</span>
                        </div>
                        <div
                          class="by-status light-info"
                          v-if="scope.row.state === 3"
                        >
                          <i></i>
                          <span>已作废</span>
                        </div>
                        <div
                          class="by-status light-success"
                          v-if="scope.row.state === 1"
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
                          <span>已使用</span>
                        </div>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="difference"
                    label="状态描述"
                    width="240"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="createTime"
                    label="创建时间"
                    width="150"
                    align="center"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="expiredateTime"
                    label="结束时间"
                    width="150"
                    align="center"
                  ></el-table-column>
                  <el-table-column label="操作" width="100" align="right">
                    <template slot-scope="scope">
                      <div>
                        <el-button
                          type="primary"
                          size="small"
                          @click="
                            $router.push({
                              path:
                                '/costCnter/vouchers-detail/' + scope.row.exchangeId,
                            })
                          "
                          >详情</el-button
                        >
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
              <div class="d2-crud-pagination">
                <el-pagination
                  style="float: right"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[20,40,80,100]"
                  :page-size="pageSize"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="total"
                >
                </el-pagination>
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
import { findCouponList } from "@/api/list";
import { parseTime } from "@/utils/index";
export default {
  name: "vouchers",
  computed: {
    ...mapGetters(["userInfo", "token"]),
  },
  data() {
    return {
      typeList: [
        {
          value: 1,
          label: "通用",
        },
        {
          value: 0,
          label: "智能推荐",
        },
      ],
      statusList: [
        {
          value: 4,
          label: "待领取",
        },
        {
          value: 0,
          label: "待使用",
        },
        {
          value: 2,
          label: "已过期",
        },
        {
          value: 3,
          label: "已作废",
        },
        {
          value: 1,
          label: "已使用",
        },
      ],
      screening: {
        date: "",
        voucherType: "",
        voucherStatus: "",
      },
      tableData: [],
      currentPage: 1,
      pageSize: 20,
      total: 0,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    //条件查询
    conditionQuery() {
      this.getList();
    },
    //清空查询
    emptyCondit() {
      this.screening = {
        date: "",
        voucherType: "",
        voucherStatus: "",
      };
    },
    getList() {
      findCouponList({
        userId: this.userInfo.userId,
        token: this.token,
        page: this.currentPage,
        pageSize: this.pageSize,
        startTime: this.screening.date[0]
          ? parseTime(this.screening.date[0])
          : null,
        endTime: this.screening.date[1]
          ? parseTime(this.screening.date[1])
          : null,
        type:
          this.screening.voucherType != "" ? this.screening.voucherType : null,
        status:
          this.screening.voucherStatus != ""
            ? this.screening.voucherStatus
            : null,
      }).then((res) => {
        console.log("***********123*******", res);
        res.data.map((el) => {
          el.createTime = parseTime(new Date(el.createTime));
          el.expiredateTime = parseTime(new Date(el.expiredateTime));
        });
        this.total = res.count;
        this.tableData = res.data;
      });
    },
    handleSizeChange(size) {
      //页大小变化
       this.pageSize = size;
       this.getList()
    },
    handleCurrentChange(current) {
      //当前页变化
      this.currentPage = current;
       this.getList()
    },
  },
};
</script>

<style lang="scss" scoped>
.vouchers {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
