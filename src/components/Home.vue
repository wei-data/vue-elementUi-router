<template>
  <div class="index">
    <el-aside width="">
    <div class="slide">
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :router="true">
        <el-menu-item class="background">
          <i><img src="../assets/logo.png" alt=""></i>
          <span slot="title" class="white">朋友圈助手</span>
        </el-menu-item>
        <el-menu-item index="/Home/content">
          <i class="el-icon-location"></i>
          <span slot="title">私有素材库</span>
        </el-menu-item>
        <el-menu-item index="/Home/LibraryPage">
          <i class="el-icon-menu"></i>
          <span slot="title">页面管理文库页</span>
        </el-menu-item>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>报表</span>
          </template>
          <el-menu-item key="1" index="/Home/Statement">文章使用统计表</el-menu-item>
<!--          <el-menu-item key="2" index="/Home/Statement">机构使用统计表</el-menu-item>-->
<!--          <el-menu-item key="3" index="/Home/Table">业务人员使用统计报表</el-menu-item>-->
          <el-menu-item key="4" index="/Home/Table">导出报表列表</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    </el-aside>
    <el-container>
    <div class="content">
      <el-header>
      <div class="top">
        <el-radio-group v-model="isCollapse" @change="toggleName">
          <el-radio-button v-if="display"   :label="false" ><i class="el-icon-s-unfold"></i></el-radio-button>
          <el-radio-button v-else  :label="true" ><i class="el-icon-s-fold"></i></el-radio-button>
        </el-radio-group>
        <div class="right">
          <span class="el-icon-zoom-in"></span>
          <span class="el-icon-bell"></span>
          <div class="user">
            <img src="../assets/logo.png" alt="">
            <p>{{uname}}</p>
          </div>
          <span @click="exit">退出</span>
        </div>
      </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </div>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      isCollapse: true,
      display: true
    }
  },
  methods: {
    exit () {
      this.$router.replace({
        name: 'logIn'
      })
      localStorage.removeItem('token')
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    Collapse (val) {
      console.log(val)
      this.isCollapse = val
    },
    toggleName: function () {
      this.display = this.display !== true
      this.$emit('isCollapse', this.isCollapse)
    }
  },
  created () {
    this.uname = localStorage.getItem('token')
  }
}
</script>

<style scoped lang="less">
  .index {
    width: 100%;
    margin: 0 auto;
    //background: #eeeeee;
    display: flex;
    justify-content: left;
    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .slide {
      position: relative;
      height: 100%;

      .title {
        height: 42px;
        width: 100%;
        font-size: 20px;
        font-weight: 600;
        color: white;
        background: #2b2f3a;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 30px;
          width: 30px;
        }
      }

      .el-radio-group {
        position: absolute;
        top: 50%;
        margin-top: -20px;
        height: 40px;
        width: 60px;
        right: -40px;
        background: orange;
      }
    }
  }
  .el-menu{
    background: #304156;
    height: 100vh;
  }
  .el-card__body, .el-main{
    padding: 0;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 170px;
    height: 100vh;
  }
  /deep/.el-menu-item, .el-submenu__title {
    height: 42px;
  }
  /deep/.el-menu-item, .el-submenu__title{
    line-height: 42px;
  }
  /deep/.el-menu-item i img {
    height: 20px;
    width: 20px;
  }
  .white {
    font-size: 16px;
    margin-left: 10px;
    font-weight: 500;
    color: white;
  }
  i{
    color: white;
  }
  /deep/.el-icon-s-unfold,.el-icon-s-fold{
    color: black;
  }
  /deep/.el-menu-item{
    color: white;
  }
  /deep/.el-menu-item.is-active{
    color: #3986df;
  }
  .background{
    background: #1c2939;
    /deep/.el-menu-item:focus, .el-menu-item:hover{
      background: none;
    }
  }
  .top {
    height: 42px;
    width: 100%;
    background: white;
    display: flex;
    justify-content: space-between;

    .el-radio-button {
      background: white;
      padding: 0;
      height: 42px;
    }

    /deep/ .el-radio-button__inner {
      padding: 9px 15px;
      border: 0;
    }

    i {
      font-size: 25px;
    }

    .right {
      //padding: 0 20px;
      display: flex;
      align-items: center;
      font-size: 16px;
      font-family: 清茶楷体预览版;

      .user {
        display: flex;
        align-items: center;

        img {
          height: 30px;
          width: 30px;
        }

        p {
          margin-left: 10px;
        }
      }

      span {
        margin: 0 10px;
      }
    }
  }
 .active1{
   color: #409eff;
 }
 /deep/[data-v-8dc7cce2].el-menu-item.is-active {
   background: #1c2939;
   min-width: 0;
 }
 /deep/.el-submenu__title{
  color: #ffffff;
  }
 /deep/.el-submenu .el-menu-item {
   min-width: 0;
   background: #1c2939;
 }
 /deep/.el-menu-item:focus, .el-menu-item:hover {
   background: #1c2939;
   color: #409eff;
 }
  /deep/.el-submenu .el-menu-item{
    padding: 0!important;
  }
</style>
