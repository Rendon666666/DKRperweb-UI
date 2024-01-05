<script setup lang="ts">

import MenuHead from '../homepage/pagehead/MenuHead.vue';
</script>

<template>
  <div>
    <el-container >
      <el-header>
        <MenuHead/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>

</style>