<template>
  <header>
    <div class="l-content">
      <el-button @click="handleMenu" plain icon="el-icon-menu" size="mini"></el-button>
      <!-- <h3 style="color: #fff">首页</h3> -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item class="tags-style" v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span>
          <img class="user" :src="userImg" alt="">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "CommonHeader",
  data() {
    return {
      userImg: require("@/assets/images/user.png")
    }
  },
  methods: {
    handleMenu() {
      this.$store.commit("isCollapse")
    },
    logout() {
      this.$store.commit("clearToken")
      // 写了个锤子的clearMenu
      // this.$store.commit("clearMenu")
      this.$router.push("/login")
    }
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tabsList
    })
  }
}
</script>

<style lang="less" scoped>
header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}

.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
  // .tags-style /deep/ .el-breadcrumb__inner {
  //   color: #606266;
  // }
  // .tags-style /deep/ .el-breadcrumb__inner:hover {
  //   cursor: pointer;
  //   color: #fff;
  // }
  // .el-breadcrumb ::v-deep .el-breadcrumb__inner {
  //   color: #fff;
  // }
  // .el-breadcrumb ::v-deep .el-breadcrumb__inner:hover {
  //   color: #fff;
  // }
  :deep(.el-breadcrumb__inner) {
    color: #fff;
  }
}

.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>