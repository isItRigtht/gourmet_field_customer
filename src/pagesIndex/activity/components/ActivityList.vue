<script setup lang="ts"></script>

<template>
  <view class="container">
    <view
      v-for="item in 4"
      class="card"
      open-type="navigate"
      hover-class="navigator-hover"
    >
      <image
        src="https://img0.baidu.com/it/u=98749298,2586514689&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
        mode="scaleToFill"
      />
      <view class="content">
        <view class="title">都江堰枇杷采摘活动</view>
        <view class="desc-and-time">
          <view class="desc">让孩子体验采摘的快乐</view>
          <view class="time">2024-9-1</view>
        </view>
        <view class="bottom">
          <view class="price">￥100/人/次</view>
          <view class="button">立即报名</view>
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.container {
  overflow: hidden;
  .card {
    margin: 30rpx;
    overflow: hidden;
    border-radius: 50rpx;
    box-shadow: 0 0 20rpx rgba(74, 74, 74, 0.2);
    background-color: white;
    image {
      width: 100%;
    }
    .content {
      padding: 30rpx;
      padding-top: 10rpx;
      .title {
        font-size: 36rpx;
        font-weight: bold;
      }
      .desc-and-time{
        display: flex;
        padding-right: 20rpx;
        justify-content: space-between;
        .desc {
        margin-top: 10rpx;
        color: rgb(90, 90, 90);
      }
      }
      .bottom {
        margin-top: 10rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .price {
          color: red;
          font-size: 30rpx;
          font-weight: bold;
        }
        .button {
          margin-right: 10rpx;
          padding: 10rpx;
          color: white;
          background-color: #20c12b;
          border-radius: 10rpx;
        }
      }
    }
  }
}
</style>
