<script setup lang="ts">
// 退出登录处理函数
const logOut = () => {
  uni.showModal({
    title: '提示',
    content: '确定退出登录吗？',
    success: (res) => {
      if (res.confirm) {
        // 清空本地存储
        uni.removeStorageSync('userInfo')
        // 跳转到登录页面
        uni.reLaunch({
          url: '/pages/login/login'
        })
      }
    }
  })
}
</script>

<template>
  <view class="container">
    <view class="item">
      <view class="title">授权管理</view>
      <uni-icons calss="icon" type="right" color="#cdcdcd" size="24" />
    </view>
    <view class="item">
      <view class="title">问题反馈</view>
      <uni-icons calss="icon" type="right" color="#cdcdcd" size="24" />
    </view>
    <view class="item">
      <view class="title">关于我们</view>
      <uni-icons calss="icon" type="right" color="#cdcdcd" size="24" />
    </view>
    <!-- 底部退出登录 -->
    <view @tap="logOut" class="footer">
      <view class="btn">退出登录</view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.container {
  .item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20rpx;
    border-bottom: 1rpx solid #cdcdcd;
  }
  .footer{
    margin: 60rpx 0;
    padding: 20rpx;
    border-top: 1rpx solid #cdcdcd;
    border-bottom: 1rpx solid #cdcdcd;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
