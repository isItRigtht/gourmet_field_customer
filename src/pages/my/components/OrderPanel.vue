<script setup lang="ts"></script>

<template>
  <view class="order">
    <view class="title-and-all">
      <view class="title">我的订单</view>
      <navigator url="/pagesMy/order/order?type=0" class="all">
        全部订单>
      </navigator>
    </view>
    <view class="category">
      <navigator url="/pagesMy/order/order?type=0" class="to-pay todo">
        <uni-icons type="wallet" color="" size="40" /> 待付款
      </navigator>
      <navigator url="/pagesMy/order/order?type=0" class="to-send todo">
        <uni-icons type="shop" color="" size="40" /> 代发货
      </navigator>
      <navigator url="/pagesMy/order/order?type=0" class="to-receive todo">
        <uni-icons type="paperplane" color="" size="40" /> 待收货
      </navigator>
      <navigator url="/pagesMy/order/order?type=0" class="to-comment todo">
        <uni-icons type="chat" color="" size="40" /> 待评价
      </navigator>
    </view>
  </view>
</template>

<style scoped lang="scss">
.order {
  margin: 20rpx;
  padding: 30rpx;
  color: rgb(102, 102, 102);
  background-color: #fff;
  border-radius: 30rpx;
  box-shadow: 5rpx 5rpx 20rpx rgba(104, 104, 104, 0.1);
  .title-and-all {
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 30rpx;
      font-weight: bold;
      color: black;
    }
  }
  .category {
    margin-top: 10rpx;
    display: flex;
    justify-content: space-between;
    .todo {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
