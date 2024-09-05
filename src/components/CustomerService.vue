<script setup lang="ts"></script>

<template>
  <button open-type="contact">
    <uni-icons type="phone" color="" size="20" />
    <view class="text" open-type="contact">客服</view>
  </button>
</template>

<style scoped lang="scss">
button {
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  font-size: 20rpx;
  border-radius: 0;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1;
  outline: none;
  box-shadow: 0 0 0 0 transparent;
  &::after {
    border: none;
  }
  .text {
    margin: 0;
    padding: 0;
  }
}
</style>
