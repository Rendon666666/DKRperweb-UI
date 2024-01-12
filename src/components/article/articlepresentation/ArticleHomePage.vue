<script setup lang="ts">

import Navigation from "@/components/article/articlepresentation/navigation/Navigation.vue";
</script>

<template >
  <div class="common-layout" >
    <el-container style="border: 1px solid red; ">
      <el-aside id="sidebar" >
        <Navigation></Navigation>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<style >
#sidebar{
  height: 600px;
  width: 240px;
  margin: 0px 5px 0px 10px;
  border: 1px solid red;
}
</style>