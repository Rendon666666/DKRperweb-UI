<template>
  <el-menu
      router
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
  >
    <el-menu-item index="/index">
      <img
          style="width: 150px;"
          src="@/images/DKR_logo.png"
          alt="DKR logo"
      />
    </el-menu-item>
    <div style="width: 20px" />
    <el-menu-item index="/body">首页</el-menu-item>
    <el-menu-item index="/login">文章</el-menu-item>
    <div class="flex-grow" />
    <el-sub-menu index="/login">
      <template #title>
        <el-avatar> 登录 </el-avatar>
      </template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
.el-menu-demo .el-menu-item:first-child {
  background-color: transparent !important;
  color: inherit !important;
  border: none !important;
}
</style>
