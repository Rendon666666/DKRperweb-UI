<script setup lang="ts">

</script>

<template>

    <el-space wrap>

      <el-card v-for="i in 4" :key="i" class="text item" style=" width: 280px;height: 200px; " shadow="hover">


        <div v-for="o in 4" :key="o" class="text item">
         <el-link href="" type="可以尝试循环展示不同颜色"> {{'文章类型 ' + o }}</el-link>
        </div>

      </el-card>
    </el-space>

  </template>
<style scoped>

</style>