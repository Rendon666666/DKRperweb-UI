<script setup lang="ts">

import MenuHead from '../homepage/pagehead/MenuHead.vue';
</script>

<template>
  <div >
    <el-container >
      <el-header>
        <MenuHead/>
      </el-header>
      <el-main class="container">
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>

.container {
  width: 80%;
  margin: 0 auto;
  /* background-color: red; */
}

</style>