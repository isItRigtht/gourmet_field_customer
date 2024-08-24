<script setup lang="ts">
import { ref } from 'vue'
// 定义logo文字
const logoText = ref('')
logoText.value = '认养一田绿，收获四季鲜。'

// 获取屏幕安全距离
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<template>
  <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <!-- logo文字 -->
    <view class="logo">
      <!-- logo图片 -->
      <image class="logo-image" src="@/static/logo无背景.png"></image>
      <!-- logo文字 -->
      <text class="logo-text">{{ logoText }}</text>
    </view>
    <!-- 搜索条 -->
    <view class="search">
      <input
        class="search-input"
        placeholder-class="search-input-placeholder"
        type="text"
        placeholder="请输入搜索内容"
        cursor-color="#ffffff"
      />
      <!-- 搜索图标 -->
      <uni-icons class="search-icon" type="search" color="#ffffff" size="24" />
    </view>
  </view>
</template>
<style>
/* 搜索框placeholder颜色 */
.search-input-placeholder {
  color: #ffffff;
}
</style>
<style scoped lang="scss">
.navbar {
  height: 200rpx;
  background-image: url('@/static/index/image.png');
  .logo {
    display: flex;
    align-items: baseline;
    padding: 0 20rpx;
    height: 100rpx;
    .logo-image {
      height: 100rpx;
      width: 300rpx;
    }
    .logo-text {
      flex: 1;
      font-size: 30rpx;
      color: #fff;
      text-align: center;
    }
  }
  .search {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    margin: 20rpx 30rpx;
    padding: 0 30rpx;
    height: 60rpx;
    border-radius: 30rpx;
    background-color: rgba(252, 249, 251, 0.663);
    .search-input {
      flex: 1;
      color: #fff;
    }
  }
}
</style>
