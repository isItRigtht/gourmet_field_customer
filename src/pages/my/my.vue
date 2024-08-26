<script setup lang="ts">
import ProfileInfo from './components/ProfileInfo.vue'
import OrderPanel from './components/OrderPanel.vue'
import MyThings from './components/MyThings.vue'
</script>

<template>
  <!-- 个人信息 -->
  <ProfileInfo />
  <!-- 订单列表 -->
  <OrderPanel />
  <!-- 我的东西 -->
  <MyThings />
</template>

<style>
page {
  background-color: #f4f4f4;
}
</style>
<style scoped lang="scss"></style>
