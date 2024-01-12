<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template style="height: 100%; ">
  <el-row class="tac">
    <el-col :span="24">

      <el-menu
          router
          :default-active="$route.path"
          class="el-menu-vertical-demo "
          @open="handleOpen"
          @close="handleClose"
          border-right-width="0"

      > <!--    border-right-width="0" 去除掉子菜单1px的超出     -->

        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location/>
            </el-icon>
            <span>文章</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="/articlebody">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>


      </el-menu>
    </el-col>
  </el-row>
</template>

<style lang="ts" setup>


</style>