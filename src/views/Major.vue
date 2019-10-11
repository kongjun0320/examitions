<template>
  <div class="major-box">
    <section class="top-title">
      <div class="w">
        专业知识库
        <section class="home-btn">
          <el-button type="primary" @click="$router.push('/home')">首页</el-button>
        </section>
      </div>
    </section>
    <section class="search-box w">
      <el-input v-model="inputValue" placeholder="请输入内容" ></el-input>
      <el-button type="primary" @click="searchZhuanYe" >查询</el-button>
    </section>
    <section class="major-list w">
      <section class="btn-box">
        <el-button
          type="primary"
          :class="{active:currentIndex==1}"
          @click="toggleTypeHandle(1,'本科')"
        >本科</el-button>
        <el-button
          type="primary"
          :class="{active:currentIndex==2}"
          @click="toggleTypeHandle(2,'高职专科')"
        >专科</el-button>
      </section>
      <section class="content-box">
        <section class="first item">
          <p
            :class="{active:oneCurrentIndex==index}"
            @click="findTwoAndThree(item,index)"
            v-for="(item, index) in one"
            :key="index"
          >{{ item }}</p>
        </section>
        <section class="second item">
          <p
            :class="{active:twoCurrentIndex==index}"
            @click="findThree(item.type2Name,index)"
            v-for="(item, index) in two"
            :key="index"
          >{{ item.type2Name }}</p>
        </section>
        <section class="con-table">
          <el-table
            :data="majorData"
            :header-cell-style="{color:'#000','fontWeight':'800'}"
            style="width: 100%"
          >
            <el-table-column prop="name" label="专业名称"></el-table-column>
            <el-table-column prop="see" label="开设院校">
              <template slot-scope="scope">
                <el-button @click="handleClick1(scope.row)" type="text" size="small">查看</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="see" label="专业主页">
              <template slot-scope="scope">
                <el-button @click="handleClick2(scope.row)" type="text" size="small">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </section>
      </section>
    </section>
  </div>
</template>
<script>
export default {
  name: "School",
  data() {
    return {
      oneCurrentIndex: "0",
      twoCurrentIndex: "0",
      inputValue: "",
      currentIndex: 1,
      type1Name: "哲学",
      type2Name: "哲学",
      cenci: "本科",
      allMajorData: [],
      page: 1,
      num: 20,
      one: [
        "哲学",
        "经济学",
        "法学",
        "教育学",
        "文学",
        "历史学",
        "理学",
        "工学",
        "农学",
        "医学",
        "军事学",
        "管理学"
      ],
      two: [],
      majorData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  mounted() {
    this.getMajorList();
    this.getSecondHandle()
  },
  methods: {
    searchZhuanYe(){
      let {inputValue} = this
      if(!inputValue.trim()){
        console.log(2222)
      }else{
      window.open(`https://gaokao.chsi.com.cn/zyk/zybk/specialityByName?zymc=${inputValue}`)
      }
    },
    getSecondHandle(){
      let {type1Name} = this
      this.$axios.get('http://203.195.219.213:9001/api/findT2ByT1',{params:{type1Name}}).then(result=>{
         this.two =  result.data.data
      })
    },
    findThree(type2Name, index) {
      this.twoCurrentIndex = index;
      this.type2Name = type2Name
      this.getMajorList()
    },
    handleClick1(item) {
     this.$router.push(`/majorschooldetail/${item.name}`)
    },
    handleClick2(item) {
      // console.log(item.decsId)
      window.open(`https://gaokao.chsi.com.cn/zyk/zybk/specialityDetail.action?specialityId=${item.decsId}`)
      // https://gaokao.chsi.com.cn/zyk/zybk/specialityDetail.action?specialityId=73381059
    },
    findTwoAndThree(item, index) {
      this.oneCurrentIndex = index;
      this.twoCurrentIndex = "0";
      this.type1Name = item;
      this.type2Name = "";
      this.getMajorList();
      this.getSecondHandle()
    },
    getMajorList() {
      let { type1Name,type2Name, cenci, page, num } = this;
      this.$axios
        .get(`http://203.195.219.213:9001/api/findAll`, {
          params: { type1Name, type2Name,cenci, page, num }
        })
        .then(result => {
          this.majorData = result.data.data;
          this.majorData.forEach(item => {
            item.see = "查看";
          });
        });
    },
    toggleTypeHandle(index, cenci) {
      this.currentIndex = index;
      this.cenci = cenci;
      if (this.cenci == "高职专科") {

      this.type1Name = '农林牧渔大类'
      this.type2Name = '农业类'
        this.one = [
          "农林牧渔大类",
          "资源环境与安全大类",
          "能源动力与材料大类",
          "土木建筑大类",
          "水利大类",
          "装备制造大类",
          "生物与化工大类",
          "轻工纺织大类",
          "食品药品与粮食大类",
          "交通运输大类",
          "电子信息大类",
          "医药卫生大类",
          "财经商贸大类",
          "旅游大类",
          "文化艺术大类"
        ];
      } else {

      this.type1Name = '哲学'
      this.type2Name = '哲学'
        this.one = [
          "哲学",
          "经济学",
          "法学",
          "教育学",
          "文学",
          "历史学",
          "理学",
          "工学",
          "农学",
          "医学",
          "军事学",
          "管理学"
        ];
      }

      this.oneCurrentIndex = "0";
      this.twoCurrentIndex = "0";
      this.getSecondHandle()
      this.getMajorList();
    }
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

.major-box {
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
  .search-box {
    padding: 20px 0px;
    .el-input {
      width: 600px;
      margin-right: 20px;
    }
  }
  .major-list {
    .btn-box {
      button {
        padding: 15px 30px;
        margin: !important;
        border-radius: 0 !important;
        font-size: 16px;
        background: #fff;
        border-color: #fff;
        color: #000;
        border-bottom: 3px solid #409eff;
        &.active {
          background: #409eff;
          color: #fff;
          border-color: #409eff;
        }
      }
    }
    .content-box {
      display: flex;
      margin-top: 10px;
      border: 1px solid #e5e5e5;
      .item {
        border-right: 1px solid #e5e5e5;
        color: #333;
        font-size: 14px;
        p {
          padding: 10px 0px 10px 20px;
          &.active {
            border-top: 1px solid #e5e5e5;
            border-bottom: 1px solid #e5e5e5;
            color: #409eff;
          }
        }
      }
      .first {
        width: 160px;
        p {
          cursor: pointer;
          &.active {
            color: #409eff;
          }
        }
      }
      .second {
        width: 200px;
        p {
          cursor: pointer;
        }
      }
      .con-table {
        flex: 1;
      }
    }
  }
}
</style>
