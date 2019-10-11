<template>
  <div class="major-detail">
    <section class="top-title">
      <div class="w">
        专业知识库
        <section class="home-btn">
          <el-button type="primary" @click="$router.push('/home')">首页</el-button>
        </section>
      </div>
    </section>
    <section class="content-box w">
      <h1>哲学</h1>
      <h3>基本信息</h3>
    </section>
  </div>
</template>
<script>
export default {
  name: "MajorDetail"
};
</script>
<style lang="scss" scpoed>
.major-detail {
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
  .content-box{
    h1{
      font-size: 26px;
      font-weight: 700;
      padding: 20px 0px;
    }
  }
}
</style>
