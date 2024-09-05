<script setup lang="ts">
import CustomerService from '@/components/CustomerService.vue'
</script>

<template>
  <view class="profile">
    <navigator
      class="avatar"
      url="/pagesMy/profile/profile"
      open-type="navigate"
      hover-class="navigator-hover"
    >
      <image
        src="https://i0.hdslb.com/bfs/archive/520da431da83bc79373e15888ed2cfeb20307b2e.jpg"
        mode="scaleToFill"
      />
    </navigator>
    <view class="information">
      <navigator
        class="name"
        url="/pagesMy/profile/profile"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        法内狂徒罗翔
      </navigator>
      <navigator
        class="address"
        url="/pagesMy/address/address"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        <uni-icons type="location" color="#787777" size="20" /> 收货地址
      </navigator>
    </view>
    <view class="config">
      <!-- 客服 -->
      <view class="customer-service">
        <CustomerService />
      </view>
      <navigator
        class="setting"
        url="/pagesMy/setting/setting"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        <uni-icons type="settings" color="" size="20" />
        <view class="text">设置</view>
      </navigator>
    </view>
  </view>
</template>

<style scoped lang="scss">
.profile {
  padding: 20rpx;
  display: flex;
  box-shadow: 5rpx 5rpx 20rpx rgba(142, 140, 140, 0.2);
  .avatar {
    width: 150rpx;
    height: 150rpx;
    border-radius: 50%;
    overflow: hidden;
    image {
      width: 100%;
      height: 100%;
    }
  }
  .information {
    flex: 1;
    display: flex;
    margin: 0 20rpx;
    flex-direction: column;
    justify-content: center;
    .name {
      font-size: 35rpx;
      font-weight: bold;
    }
    .address {
      display: flex;
      margin-top: 10rpx;
      align-items: center;
      color: rgb(120, 119, 119);
    }
  }
  .config {
    width: 120rpx;
    margin-right: 30rpx;
    margin-top: 20rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20rpx;
  }
}
</style>
