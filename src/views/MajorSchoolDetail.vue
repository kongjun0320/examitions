<template>
  <div class="majorSchoolDetail">
    <section class="top-title">
      <div class="w">
        专业知识库
        <section class="home-btn">
      <el-button type="primary" @click="$router.go(-1)" >返回</el-button>
          <el-button type="primary" @click="$router.push('/home')">首页</el-button>
        </section>
      </div>
    </section>
    <section class="list w">
      <el-table
        v-loading="loading"
        border
        :cell-style="{'border-right':'none'}"
        :header-cell-style="{'border-right':'none',color:'#000','fontWeight':'800'}"
        :data="majorSchoolList"
        style="width: 100%"
      >
        <el-table-column prop="name" label="院校名称"></el-table-column>
        <el-table-column prop="address" label="院校所在地"></el-table-column>
        <el-table-column prop="schools.pro" label="院校隶属"></el-table-column>
        <el-table-column prop="schools.type" label="院校类型"></el-table-column>
        <el-table-column prop="cenci" label="学历层次"></el-table-column>
      </el-table>
    </section>
  </div>
</template>
<script>
export default {
  name: "MajorSchoolDetail",
  data() {
    return {
      majorSchoolList: [],
      loading: true
    };
  },
  mounted() {
    this.getMajorDetailSchool();
  },
  methods: {
    getMajorDetailSchool() {
      this.loading = true;
      let name = this.$route.params.id;
      this.$axios
        .get("http://203.195.219.213:9001/api/findByMajorName", {
          params: { name,page:1,num:100 }
        })
        .then(result => {
          this.majorSchoolList = result.data.data;
          this.loading = false;
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.majorSchoolDetail {
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
  .list{
    margin-top: 30px;
  }
}
</style>
