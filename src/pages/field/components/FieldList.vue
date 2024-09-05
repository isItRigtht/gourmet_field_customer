<script setup lang="ts"></script>

<template>
  <view class="container">
    <navigator
      v-for="item in 4"
      class="card"
      url="/pagesField/fieldDetail/fieldDetail"
      open-type="navigate"
      hover-class="navigator-hover"
    >
      <view class="image">
        <view class="logo">租</view>
        <image
          src="https://img1.baidu.com/it/u=3160719274,540765604&fm=253&fmt=auto&app=138&f=JPEG?w=1067&h=800"
          mode="scaleToFill"
        />
      </view>
      <view class="content">
        <view class="title">成都纯正天府绿道田地</view>
        <view class="desc">在喧嚣城市中做一个悠闲的农夫</view>
        <view class="bottom">
          <view class="price">￥100元/平方米/年</view>
          <view class="button">立即租地</view>
        </view>
      </view>
    </navigator>
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
    .image {
      position: relative;
      .logo {
        position: absolute;
        left: 30rpx;
        font-size: 50rpx;
        color: white;
        padding: 10rpx;
        background-color: #20c12b;
        border-radius: 0 0 30rpx 30rpx;
      }
      image {
        width: 100%;
      }
    }
    .content {
      padding: 30rpx;
      padding-top: 10rpx;
      .title {
        font-size: 36rpx;
        font-weight: bold;
      }
      .desc {
        margin-top: 10rpx;
        color: rgb(90, 90, 90);
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
