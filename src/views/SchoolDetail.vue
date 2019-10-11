<template>
  <div class="school-detail" v-if="detailList">
    <header class="hh">
      <section class="hh-box w">
          <el-button class="goback" type="success" @click="$router.go(-1)">返回</el-button>
        <section class="school-name">
          <span>{{ detailList.title }}</span>
          <span class="iconfont">&#xe64e;</span>
          <span>666人关注</span>
        </section>
        <section class="school-pro">
          <span>院校隶属：</span>
          <span>浙江省教育厅</span>
          <span>所在地：</span>
          <span>浙江</span>
        </section>
        <section class="school-type">
          <span>院校类型：</span>
          <span>工商院校</span>
        </section>
      </section>
    </header>
    <section class="content-box w">
      <section class="img">
        <img :src="detailList.img" alt />
      </section>
      <section class="info">
        <section class>
          <span class="iconfont">&#xe61c;</span>http://www.ecit.edu.cn
          <span class="iconfont">&#xe60e;</span>
          {{ detailList.phone }}
        </section>
        <section>
          <span class="iconfont">&#xe618;</span>
          {{ detailList.address }}
        </section>
        <p>暂无！</p>
      </section>
      <section class="chart">
        <section class="item">
          <p>综合满意度</p>
          <p>(1242人投票)</p>
          <section class="echart">
            <my-ec ref="one"></my-ec>
          </section>
        </section>
        <section class="item">
          <p>环境满意度</p>
          <p>(1242人投票)</p>
          <section class="echart">
            <my-ec ref="two"></my-ec>
          </section>
        </section>
        <section class="item">
          <p>生活满意度</p>
          <p>(1242人投票)</p>
          <section class="echart">
            <my-ec ref="three"></my-ec>
          </section>
        </section>
      </section>
    </section>
    <section class="question w">
      <h1>精彩问答</h1>
      <ul>
        <li>
          <span>特设类志愿填报</span>
          <span>2019-07-28 10:14</span>
          <span>17***18 (山东)</span>
        </li>
        <li>
          <span>录取，急</span>
          <span>2019-06-11 10:14</span>
          <span>17***18 (江西)</span>
        </li>
        <li>
          <span>报考北京大学医学部</span>
          <span>2019-07-28 11:14</span>
          <span>17***18 (浙江)</span>
        </li>
        <li>
          <span>报考咨询</span>
          <span>2019-06-28 9:14</span>
          <span>17***18 (北京)</span>
        </li>
        <li>
          <span>关于领军计划志愿填报的问题咨询</span>
          <span>2019-07-28 8:14</span>
          <span>17***18 (上海)</span>
        </li>
      </ul>
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
import MyEc from "../components/myec";
export default {
  name: "SchoolDetail",
  data() {
    return {
      id: "",
      detailList: []
    };
  },
  components: {
    MyEc
  },
  mounted() {
    this.getSchoolDetail();
    this.$refs.one.make_pie2_kong(0.66, ["#FFCA3A"]);
    this.$refs.two.make_pie2_kong(0.56, ["#61ABED"]);
    this.$refs.three.make_pie2_kong(0.86, ["#1DB278"]);
  },
  methods: {
    getSchoolDetail() {
      let { id } = this;
      id = this.$route.params.id;
      this.$axios
        .get("http://203.195.219.213:9001/api/findDecById", { params: { id } })
        .then(result => {
          this.detailList = result.data.data;
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.school-detail {
  .hh {
    height: 200px;
    background: url("../../public/images/bg2.png") no-repeat top left,
      url("../../public/images/bg1.png") no-repeat center;
    .hh-box {
      padding: 30px 0px;
      position: relative;
      .goback{
        position: absolute;
        top: 50px;
        right: 50px;
      }
      .school-name {
        padding: 20px 0px;
        span {
          &:nth-of-type(1) {
            font-size: 25px;
            padding: 10px 0px;
            color: #333;
            font-weight: 800;
          }
          &:nth-of-type(2) {
            font-size: 20px;
            margin: 0 20px;
          }
          &:nth-of-type(3) {
            display: inline-block;
            height: 28px;
            line-height: 28px;
            padding: 0 10px;
            border: 1px solid #d5bcab;
            margin-left: 12px;
            background: #ffebdb;
            color: #666;
            vertical-align: top;
            font-size: 14px;
          }
        }
      }
      .school-pro,
      .school-type {
        padding-bottom: 20px;
        span {
          &:nth-of-type(2n) {
            color: #333;
            font-size: 14px;
            margin-right: 20px;
          }
          &:nth-of-type(2n-1) {
            color: #666;
            font-size: 14px;
          }
        }
      }
    }
  }
  .content-box {
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
    .img {
      width: 190px;
      height: 190px;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .info {
      width: 50%;
      color: #333;
      .iconfont {
        color: #409eff;
        margin: 0 13px;
      }
      section {
        &:nth-of-type(1) {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding-bottom: 20px;
        }
        &:nth-of-type(2) {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding-bottom: 20px;
        }
      }
      p {
        padding-left: 20px;
        color: #333;
      }
    }
    .chart {
      width: 400px;
      height: 190px;
      border: 1px solid #e5e5e5;
      display: flex;
      justify-content: center;
      align-items: center;
      .item {
        flex: 1;
        p {
          text-align: center;
          &:nth-of-type(1) {
            color: #000;
            font-weight: 800;
          }
          &:nth-of-type(2) {
            color: #666;
            font-size: 14px;
            padding: 10px 0px;
          }
        }
      }
    }
  }
  .question {
    padding: 20px 0px;
    h1 {
      border-bottom: 1px solid #e5e5e5;
      font-size: 18px;
      color: #333;
      padding: 20px 0px;
      font-weight: 800;
    }
    ul {
      li {
        color: #333;
        height: 45px;
        line-height: 45px;
        border-bottom: 1px solid #e5e5e5;
        span {
          &:nth-of-type(1) {
            float: left;
          }
          &:nth-of-type(2) {
            float: right;
          }
          &:nth-of-type(3) {
            float: right;
            margin-right: 50px;
          }
        }
      }
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
