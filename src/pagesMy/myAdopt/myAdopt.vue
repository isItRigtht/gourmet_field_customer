<script setup lang="ts"></script>

<template>
  <view class="container">
    <view class="item">
      <view class="title">成都小黑猪</view>
      <view class="body"
        ><image
          src="https://t9.baidu.com/it/u=1470780388,2064832163&fm=193"
          mode="scaleToFill"
        />
        <view class="content">
          <view class="type">认养一只小黑猪，过年吃土猪</view>
          <view class="period">认养数目：2头</view>
          <view class="deadline">收货日期：2025-06-02</view>
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.container {
  padding: 30rpx;
  .item {
    box-shadow: 0 0 10rpx rgba(125, 125, 125, 0.836);
    border-radius: 30rpx;
    padding: 20rpx 0;
    .title {
      padding: 10rpx 20rpx;
      font-size: 30rpx;
      font-weight: bold;
      border-bottom: 1rpx solid rgba(92, 92, 92, 0.173);
    }
    .body {
      display: flex;
      padding: 20rpx 20rpx;
      border-bottom: 1rpx solid rgba(92, 92, 92, 0.173);
      image {
        width: 200rpx;
        height: 150rpx;
        border-radius: 30rpx;
        margin-right: 20rpx;
      }
      .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: #666666;
        .type {
          color: black;
        }
      }
    }
  }
}
</style>
