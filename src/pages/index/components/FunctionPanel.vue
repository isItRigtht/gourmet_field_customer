<script setup lang="ts"></script>

<template>
  <view class="function-panel">
    <navigator url="/pagesIndex/activity/activity" class="function-item">
      <view class="iconfont icon-nongchanming"></view>
      <view class="text">农场活动</view>
    </navigator>
    <navigator url="/pagesIndex/camera/camera" class="function-item">
      <view class="iconfont icon-a-camerashexiangtou"></view>
      <view class="text">农场监控</view>
    </navigator>
    <navigator url="/pagesIndex/signIn/signIn" class="function-item">
      <view class="iconfont icon-qiandao"></view>
      <view class="text">每日签到</view>
    </navigator>
    <navigator url="/pagesIndex/exchange/exchange" class="function-item">
      <view class="iconfont icon-jifenduihuan"></view>
      <view class="text">积分兑换</view>
    </navigator>
  </view>
</template>

<style scoped lang="scss">
.function-panel {
  display: flex;
  height: 200rpx;
  justify-content: space-around;
  align-items: center;
  .function-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    .iconfont{
      font-size: 100rpx;
    }
    .text{
      color: rgb(122, 122, 120);
    }
  }
}
</style>
