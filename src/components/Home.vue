<template>
  <div class="home">
    <Header></Header>
    <el-container class="content">
      <Menu></Menu>
      <el-container class="content">
      <el-main>Main</el-main>
    <el-footer><Footer></Footer></el-footer>
    </el-container>
  </el-container>

  </div>
</template>

<script>
import Header from './common/Header.vue';
import Footer from './common/Footer.vue';
import Menu from './common/Menu.vue';

export default {
  name: 'Home',
  components:{
    Header,
    Footer,
    Menu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.home{
  width: 100%;
  height: 100%;
  .content {
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;
  }
}
</style>
