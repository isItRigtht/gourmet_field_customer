<script setup lang="ts">
// 获取屏幕安全距离
const { safeAreaInsets } = uni.getSystemInfoSync()
console.log(typeof(safeAreaInsets.bottom))
// 处理登录事件
const onLogin = () => {
  uni.switchTab({ url: '/pages/index/index' })
  uni.showToast({ title: '登录成功', icon: 'success' })
}
</script>

<template>
  <view class="container">
    <image src="@/static/logo.png" mode="scaleToFill" />
    <view @tap="onLogin" class="login">微信一键登录</view>
    <view
      class="info"
      :style="{ paddingBottom: safeAreaInsets?.bottom + 20 + 'px' }"
      >登录/注册即视您同意《服务条款》和《食尚田园隐私协议》</view
    >
  </view>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  image {
    width: 100%;
    height: 800rpx;
  }
  .login {
    margin: 0 80rpx;
    padding: 10rpx 0;
    text-align: center;
    font-size: 40rpx;
    color: #fff;
    border-radius: 50rpx;
    background-color: #20c12b;
  }
  .info {
    text-align: center;
    font-size: 25rpx;
    color: #666666;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
