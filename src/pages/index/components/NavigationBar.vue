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
  </view>
</template>
<style scoped lang="scss">
.navbar {
  height: 130rpx;
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
}
</style>
