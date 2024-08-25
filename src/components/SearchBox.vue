<script setup lang="ts"></script>

<template>
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
</template>
<style>
/* 搜索框placeholder颜色 */
.search-input-placeholder {
  color: #ffffff;
}
</style>

<style scoped lang="scss">
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
</style>
