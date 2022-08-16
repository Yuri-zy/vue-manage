<template>
  <div>
    <!-- <h1>Home</h1> -->
    <el-container style="height = 100%">
      <el-aside width="auto">
        <commen-aside></commen-aside>
      </el-aside>
      <el-container>
        <el-header>
          <common-header></common-header>
        </el-header>
        <common-tag></common-tag>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommenAside from "@/components/CommenAside.vue"
import CommonHeader from "@/components/CommonHeader.vue"
import CommonTag from "@/components/CommonTag.vue"

export default {
  name: "Main",
  components: {
    CommenAside,
    CommonHeader,
    CommonTag
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
}

.el-main {
  padding-top: 0;
}
</style>