<template>
  <div class="intell">
    <section class="top-title">
      <div class="w">
        院校库
        <section class="home-btn">
          <el-button type="primary" @click="$router.push('/home')">首页</el-button>
        </section>
      </div>
    </section>
    <section class="content-box w">
      <h1 class="title">智能推荐</h1>
      <section class="select-box">
        <el-select v-model="cenci" placeholder="请选择批次">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select v-model="direction" placeholder="请选择文/理科">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select v-model="address" placeholder="请选择">
          <el-option
            v-for="item in options3"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-input placeholder="请输入分数" v-model="score" clearable></el-input>
        <el-button type="primary" @click="getSchoolList">查询</el-button>
      </section>
      <section class="school-list">
        <section>
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
            <el-table-column prop="major" label="专业"></el-table-column>
            <el-table-column prop="address" label="院校所在地"></el-table-column>
            <el-table-column prop="scNumber" label="院校代码"></el-table-column>
            <el-table-column prop="minScore" label="最低分"></el-table-column>
            <el-table-column prop="maxScore" label="最高分"></el-table-column>
            <el-table-column prop="schools.pro" label="院校隶属"></el-table-column>
            <el-table-column prop="schools.type" label="院校类型"></el-table-column>
            <el-table-column prop="cenci" label="学历层次"></el-table-column>
            <el-table-column prop="majorNumber" label="招生人数"></el-table-column>
            <el-table-column prop="majorNumber" label="专业代码"></el-table-column>
            <el-table-column prop="num" label="填报"></el-table-column>
          </el-table>
        </section>
      </section>
    </section>
    <section class="pagination w">
      <el-pagination
        @current-change="handleCurrentChange"
        background
        layout="prev, pager, next"
        :total="pageCount"
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
  name: "Intell",
  data() {
    return {
      page:1,
      num:10,
      loading:'true',
      schoolList: [],
      pageCount: 100,
      score: "550",
      options1: [
        {
          value: "本科一批",
          label: "本科一批"
        },
        {
          value: "本科二批",
          label: "本科二批"
        },
        {
          value: "高职高专",
          label: "高职专科"
        }
      ],
      cenci: "本科一批",
      options2: [
        {
          value: "文科",
          label: "文科"
        },
        {
          value: "理科",
          label: "理科"
        }
      ],
      direction: "理科",
      options3: [
        {value:null,label:'全部'},
        { value: "河北", label: "河北" },
        { value: "山西", label: "山西" },
        { value: "吉林", label: "吉林" },
        { value: "辽宁", label: "辽宁" },
        { value: "黑龙江", label: "黑龙江" },
        { value: "陕西", label: "陕西" },
        { value: "甘肃", label: "甘肃" },
        { value: "青海", label: "青海" },
        { value: "山东", label: "山东" },
        { value: "福建", label: "福建" },
        { value: "浙江", label: "浙江" },
        { value: "台湾", label: "台湾" },
        { value: "河南", label: "河南" },
        { value: "湖北", label: "湖北" },
        { value: "湖南", label: "湖南" },
        { value: "江西", label: "江西" },
        { value: "江苏", label: "江苏" },
        { value: "安徽", label: "安徽" },
        { value: "广东", label: "广东" },
        { value: "海南", label: "海南" },
        { value: "四川", label: "四川" },
        { value: "贵州", label: "贵州" },
        { value: "云南", label: "云南" },
        { value: "内蒙古", label: "内蒙古" },
        { value: "广西", label: "广西" },
        { value: "西藏", label: "西藏" },
        { value: "宁夏", label: "宁夏" },
        {
          value: "新疆",
          label: "新疆"
        },
        { value: "北京", label: "北京" },
        { value: "上海", label: "上海" },
        { value: "天津", label: "天津" },
        { value: "重庆", label: "重庆" },
        { value: "香港", label: "香港" },
        { value: "澳门", label: "澳门" }
      ],
      address: null
    };
  },
  methods: {
    handleCurrentChange(value) {
      this.page = value
      this.getSchoolList()
    },
    goDetail(item) {
      console.log(item.schools.decId)
        this.$router.push("/schooldetail/" + item.schools.decid);
    },
    getSchoolList(){
        this.loading  = true
      let {page,num,cenci,address,direction,score} = this
      this.$axios.get('http://203.195.219.213:9001/api/findMajorWithExtend',{params:{page,num,cenci,address,direction,score}}).then(result=>{
        this.schoolList = result.data.data
        this.pageCount = (result.data.count)
        this.loading = false
      })
    }
  },
  mounted(){
    this.getSchoolList()
  }
};
</script>
<style lang="scss">
.intell {
  .top-title {
    font-size: 30px;
    color: #409eff;
    border-bottom: 3px solid #409eff;
    padding: 20px;
    .home-btn {
      position: absolute;
      top: 15px;
      right: 100px;
    }
  }
  .content-box {
    margin-top: 30px;
    min-height: 335px;
    border: 1px solid #e5e5e5;
    padding-left: 30px;
    padding-bottom: 30px;
    padding-right: 20px;
    .title {
      padding: 16px 0;
      font-size: 20px;
      color: #409eff;
    }
    .select-box {
      border-bottom: 1px solid #e5e5e5;
      padding-bottom: 20px;
      .el-input {
        width: 220px;
        margin-right: 30px;
      }
    }
    .school-list {
      margin-top: 30px;
    }
  }
  .pagination {
    padding: 30px 0;
    .el-pagination {
      text-align: right;
    }
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
}
</style>
