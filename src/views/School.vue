<template>
  <div class="school-box">
    <section class="top-title">
      <div class="w">
        院校库
        <section class="home-btn">
          <el-button type="primary" @click="$router.push('/home')">首页</el-button>
        </section>
      </div>
    </section>
    <div class="school w">
      <section class="top-header">
        <h1 class="title">按院校查询</h1>
        <el-autocomplete
          class="inline-input"
          v-model="inputValue"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          :trigger-on-focus="false"
          @select="handleSelect"
          @input="changeHandle"
        ></el-autocomplete>
        <el-button type="primary" class="my-btn">查询</el-button>
        <section class="condition1 condition">
          <h2>
            院校所在地
            <span class="iconfont">&#xe74b;</span>
          </h2>
          <section class="con">
            <span
              class="one-con"
              :class="{active:currentIndex===''}"
              @click="toggleActiveHandle('')"
            >全部</span>
            <section class="others-con">
              <span
                v-for="(item, index) in con1"
                :class="{active:currentIndex===index}"
                :key="index"
                @click="toggleActiveHandle(index,item)"
              >{{ item }}</span>
            </section>
          </section>
        </section>
        <section class="condition2 condition">
          <h2>
            院校隶属
            <span class="iconfont">&#xe74b;</span>
          </h2>
          <section class="con">
            <span
              class="one-con"
              :class="{active:currentIndex2===''}"
              @click="toggleActiveHandle2('')"
            >全部</span>
            <section class="others-con">
              <span
                v-for="(item, index) in con2"
                :class="{active:currentIndex2===index}"
                :key="index"
                @click="toggleActiveHandle2(index,item)"
              >{{ item }}</span>
            </section>
          </section>
        </section>

        <section class="condition3 condition">
          <h2>
            院校类型
            <span class="iconfont">&#xe74b;</span>
          </h2>
          <section class="con">
            <span
              class="one-con"
              :class="{active:currentIndex3===''}"
              @click="toggleActiveHandle3('')"
            >全部</span>
            <section class="others-con">
              <span
                v-for="(item, index) in con3"
                :class="{active:currentIndex3===index}"
                :key="index"
                @click="toggleActiveHandle3(index,item)"
              >{{ item }}</span>
            </section>
          </section>
        </section>

        <section class="condition4 condition">
          <h2>
            学历层次
            <span class="iconfont">&#xe74b;</span>
          </h2>
          <section class="con">
            <span
              class="one-con"
              :class="{active:currentIndex4===''}"
              @click="toggleActiveHandle4('')"
            >全部</span>
            <section class="others-con">
              <span
                v-for="(item, index) in con4"
                :class="{active:currentIndex4===index}"
                :key="index"
                @click="toggleActiveHandle4(index,item)"
              >{{ item }}</span>
            </section>
          </section>
        </section>
      </section>
      <section class="top-list">
        <el-table
          v-loading="loading"
          border
          :cell-style="{'border-right':'none'}"
          :header-cell-style="{'border-right':'none',color:'#000','fontWeight':'800'}"
          :data="schoolList"
          @cell-click="goDetail"
          style="width: 100%"
        >
          <el-table-column prop="name" label="院校名称"></el-table-column>
          <el-table-column prop="address" label="院校所在地"></el-table-column>
          <el-table-column prop="pro" label="院校隶属"></el-table-column>
          <el-table-column prop="type" label="院校类型"></el-table-column>
          <el-table-column prop="cenci" label="学历层次"></el-table-column>
        </el-table>
      </section>
    </div>
    <section class="pagination w">
      <el-pagination
        @current-change="handleCurrentChange"
        background
        layout="prev, pager, next"
        :page-count="pageCount"
      ></el-pagination>
    </section>
    <footer class="ff">
      <section class="ff-box w">
        <section class="left">
          <ul>
            <li>学信网</li>
            <li>中心简介</li>
            <li>联系我们</li>
            <li>版本声明</li>
            <li>网站地图</li>
            <li>帮助中心</li>
            <li>网站广告</li>
          </ul>
          <p>主办单位：全国高等学校学生信息咨询与就业指导中心</p>
          <p>Copyright © 2003-2019 学信网 All Rights Reserved</p>
        </section>
        <section class="right">
          <p>
            <span>官方微信</span>
            <span>官网微博</span>
          </p>
          <p>服务热线：010-82199588</p>
          <p>客服邮箱：kefu#chsi.com.cn（将#替换为@）</p>
        </section>
      </section>
    </footer>
  </div>
</template>
<script>
export default {
  name: "School",
  data() {
    return {
      loading: true,
      page: 1,
      num: 20,
      name: "",
      address: "",
      type: "",
      pro: "",
      cenci: "",
      zhuangye: "",
      pageCount: 0,
      schoolList: [],
      con1: [
        "北京",
        "天津",
        "河北",
        "山西",
        "内蒙古",
        "辽宁",
        "吉林",
        "黑龙江",
        "上海",
        "江苏",
        "浙江",
        "安徽",
        "福建",
        "江西",
        "山东",
        "河南",
        "湖北",
        "湖南",
        "广东",
        "广西",
        "海南",
        "重庆",
        "四川",
        "贵州",
        "云南",
        "西藏",
        "陕西",
        "甘肃",
        "青海",
        "宁夏",
        "新疆",
        "香港",
        "澳门",
        "台湾"
      ],
      con2: ["教育部", "教育厅", "委员会", "其他部委", "地方", "军校"],
      con3: [
        "综合",
        "工科",
        "农业",
        "医药",
        "师范",
        "语言",
        "财经",
        "政法",
        "体育",
        "艺术",
        "名族"
      ],
      con4: ["本科", "高职专科"],
      restaurants: [],
      inputValue: "",
      currentIndex: "",
      currentIndex2: "",
      currentIndex3: "",
      currentIndex4: ""
    };
  },
  watch: {
    inputValue(value) {
        this.name = value;
      this.getSchoolList();
    }
  },
  methods: {
    goDetail(item) {
      // console.log(item.decId);
      // this.$router.push("/schooldetail/" + item.decId);
      window.open(`https://gaokao.chsi.com.cn/sch/schoolInfoMain--schId-${item.id}.dhtml`)
    },
    changeHandle() {},
    getSchoolList() {
      this.loading = true;
      let { page, num, name, address, type, pro, cenci, zhuangye } = this;
      this.$axios
        .get("http://203.195.219.213:9001/api/findAllSchool", {
          params: { page, num, name, address, type, pro, cenci, zhuangye }
        })
        .then(result => {
          this.loading = false;
          this.pageCount = Math.ceil(result.data.count / this.num);
          // console.log(this.pageCount)
          this.schoolList = result.data.data;
          this.restaurants = this.schoolList;
          if (this.restaurants) {
            this.restaurants.forEach(item => {
              item.value = item.name;
            });
          }
        });
    },
    handleCurrentChange(index) {
      console.log(index);
      this.page = index;
      this.getSchoolList();
    },
    toggleActiveHandle(index, item) {
        this.page = 1;
      this.currentIndex = index;
      this.address = item;
      this.getSchoolList();
    },
    toggleActiveHandle2(index, item) {
       this.page = 1;
      this.currentIndex2 = index;
      this.pro = item;
      this.getSchoolList();
    },
    toggleActiveHandle3(index, item) {
       this.page = 1;
      this.currentIndex3 = index;
      this.type = item;
      this.getSchoolList();
    },
    toggleActiveHandle4(index, item) {
       this.page = 1;
      this.currentIndex4 = index;
      this.cenci = item;
      this.getSchoolList();
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    handleSelect(item) {
      this.inputValue = item.value;
    }
  },
  mounted() {
    this.getSchoolList();
  }
};
</script>
<style lang="scss">
.el-table .cell,
.el-table th div,
.el-table--border td:first-child .cell,
.el-table--border th:first-child .cell {
  cursor: pointer !important;
}
.ff {
  background: #282828;
  padding: 40px 0px;
  overflow: hidden;
  .left {
    float: left;
    color: #ababab;
    ul {
      overflow: hidden;
      li {
        float: left;
        margin-right: 16px;
      }
    }
    p {
      margin: 20px 0px;
    }
  }
  .right {
    float: right;
    color: #ababab;
    p {
      margin-bottom: 20px;
      span {
        margin-right: 30px;
      }
    }
  }
}
.pagination {
  padding: 30px 0;
  .el-pagination {
    text-align: right;
  }
}
.top-title {
  font-size: 30px;
  color: #409eff;
  border-bottom: 3px solid #409eff;
  padding: 20px;
  position: relative;
  .home-btn {
    position: absolute;
    top: 15px;
    right: 100px;
  }
}
.el-autocomplete {
  width: 300px;
}
.school {
  .top-header {
    margin: 30px auto;
    padding: 20px 30px 30px 30px;
    border: 1px solid #e5e5e5;
    .title {
      padding: 16px 0;
      font-size: 20px;
      color: #409eff;
    }
    .my-btn {
      margin-left: 30px;
    }
    .condition {
      display: flex;
      padding: 20px 0 5px;
      color: #333;
      &:nth-of-type(1) {
        padding-top: 30px;
      }
      h2 {
        width: 130px;
        font-size: 18px;
        .iconfont {
          color: #9a9a9a;
          padding-right: 8px;
          padding-left: 4px;
          font-weight: 800;
        }
      }
      .con {
        flex: 1;
        font-size: 16px;
        color: #666;
        display: flex;
        .one-con {
          display: inline-block;
          width: 33px;
          height: 20px;
          padding: 4px 10px;
        }
        .others-con {
          flex: 1;
          margin-top: -2px;
        }
        span {
          cursor: pointer;
          display: inline-block;
          padding: 6px 10px;
          margin-bottom: 5px;
          &.active {
            color: #fff;
            background: #409eff;
          }
        }
      }
    }
  }
}
</style>
