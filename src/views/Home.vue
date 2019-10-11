<template>
  <div class="home w">
    <router-link to="/school" tag="section" class="first item">
      <img src="../../public/images/4.png" alt />
      <span>院校查询</span>
    </router-link>
    <router-link to="/major" tag="section" class="second item">
      <img src="../../public/images/5.png" alt />
      <span>专业查询</span>
    </router-link>
    <router-link to="/intell" tag="section" class="third item">
      <img src="../../public/images/6.png" alt />
      <span>智能查询</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Home"
};
</script>
<style lang="scss" scoped>
.home {
  .item {
    cursor: pointer;
    position: relative;
    line-height: 200px;
    text-align: center;
    color: #fff;
    font-size: 50px;
    img {
      position: absolute;
      top: 80px;
      left: 419px;
    }
  }
  .first {
    margin-top: 40px;
    height: 200px;
    margin-bottom: 30px;
    background: url("../../public/images/1.png") no-repeat top center;
  }
  .second {
    margin-bottom: 30px;
    height: 200px;
    background: url("../../public/images/2.png") no-repeat top center;
  }
  .third {
    height: 200px;
    margin-bottom: 30px;
    background: url("../../public/images/3.png") no-repeat top center;
  }
}
</style>
