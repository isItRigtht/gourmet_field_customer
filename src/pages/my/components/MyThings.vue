<script setup lang="ts"></script>

<template>
  <view class="myThings">
    <navigator
      class="field item"
      url="/pagesMy/myField/myField"
      open-type="navigate"
      hover-class="navigator-hover"
    >
    <view class="iconfont icon-field_selected"></view>
    <view class="text">我的租地</view>
    </navigator>
    <navigator
      class="adopt item"
      url="/pagesMy/myAdopt/myAdopt"
      open-type="navigate"
      hover-class="navigator-hover"
    >
    <view class="iconfont icon-adopt_selected"></view>
    <view class="text">我的认养</view>
    </navigator>
  </view>
</template>

<style scoped lang="scss">
.myThings {
  display: flex;
  margin: 20rpx;
  justify-content: space-between;
  .item {
    display: flex;
    align-items: center;
    padding: 10rpx 20rpx;
    font-size: 35rpx;
    background-color: #fff;
    border-radius: 30rpx;
    .iconfont {
      font-size: 150rpx;
      margin-right: 20rpx;
    }
  }
}
</style>
