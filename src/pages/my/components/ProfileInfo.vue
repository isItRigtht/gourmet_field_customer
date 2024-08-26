<script setup lang="ts"></script>

<template>
  <view class="profile">
    <image
      class="avatar"
      src="https://i0.hdslb.com/bfs/archive/520da431da83bc79373e15888ed2cfeb20307b2e.jpg"
      mode="scaleToFill"
    />
    <view class="information">
      <view class="name">法外狂徒张三</view>
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
      <navigator
        class="customer-service"
        url="/pagesMy/customerService/customerService"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        <uni-icons type="phone" color="" size="20" />
        <view class="text">官方客服</view>
      </navigator>
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
    width: 150rpx;
    margin-right: 30rpx;
    margin-top: 20rpx;
    display: flex;
    justify-content: space-between;
    font-size: 20rpx;
    .customer-service{
      text-align: center;
    }
  }
}
</style>
