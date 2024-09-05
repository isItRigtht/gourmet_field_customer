<script setup lang="ts">
const count = defineModel<number>()
</script>

<template>
  <view class="counter-box">
    <view @tap="() => (count > 0 ? count-- : null)" class="sub">-</view>
    <view class="number">{{ count }}</view>
    <view @tap="() => (count < 100 ? count++ : null)" class="add">+</view>
  </view>
</template>

<style scoped lang="scss">
.counter-box {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40rpx;
  .sub,
  .add {
    height: 10rpx;
    width: 10rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20rpx;
    background-color: #20c12b;
  }
  .number {
    margin: 0 10rpx;
    color: black;
  }
}
</style>
