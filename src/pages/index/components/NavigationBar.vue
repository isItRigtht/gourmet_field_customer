<script setup lang="ts">
import { ref } from 'vue'
import { BiSearch } from 'vue-icons-plus/bi'
const logoText = ref('')
logoText.value = '认养农业 · 食尚田园'
</script>

<template>
  <view class="navbar">
    <!-- logo文字 -->
    <view class="logo">
      <image class="logo-image" src="@/static/logo无背景.png"></image>
      <text class="logo-text">{{ logoText }}</text>
    </view>
    <!-- 搜索条 -->
    <view class="search">
      <!-- 搜索图标 -->
      <BiSearch  />
      <input class="search-input" type="text" placeholder="请输入搜索内容" />
    </view>
  </view>
</template>

<style scoped lang="scss"></style>
