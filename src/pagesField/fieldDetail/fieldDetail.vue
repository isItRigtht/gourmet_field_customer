<script setup lang="ts">
// 获取屏幕安全区域
const { safeAreaInsets } = uni.getSystemInfoSync()
// 跳转首页
const onTapIndex = () => {
  uni.switchTab({ url: '/pages/index/index' })
}
</script>

<template>
  <view class="container">
    <!-- 轮播图 -->
    <swiper indicator-dots autoplay circular>
      <swiper-item v-for="item in 4">
        <image
          src="https://img1.baidu.com/it/u=3160719274,540765604&fm=253&fmt=auto&app=138&f=JPEG?w=1067&h=800"
          mode="scaleToFill"
        />
      </swiper-item>
    </swiper>
    <!-- 介绍 -->
    <view class="introduction">
      <view class="price">￥100/平方米/年</view>
      <view class="title">天府绿道纯正土地</view>
      <view class="desc">当一个农夫</view>
    </view>
    <!-- 定位 -->
    <view class="location">
      <view class="symbol"></view>
      <uni-icons type="location" color="" size="24" />
      <view class="address">成都市郫都区电子科技大学</view>
    </view>
    <!-- 选择土地 -->
    <view class="select">
      <view class="symbol"></view>
      <view class="title">选择土地</view>
    </view>
    <!-- 图例 -->
    <view class="legend">
      <view class="item">
        <view class="color available"></view>
        <view class="text">可选</view>
      </view>
      <view class="item">
        <view class="color selected"></view>
        <view class="text">选中</view>
      </view>
      <view class="item">
        <view class="color busy"></view>
        <view class="text">已租</view>
      </view>
    </view>
    <!-- 种类选择 -->
    <view class="category">
      <view v-for="item in 8" class="item">
        <view class="img">2㎡迷你菜地</view>
        <uni-icons type="checkbox" color="#af551e" size="24" />
      </view>
    </view>
    <!-- 土地详情 -->
    <view class="detail">
      <view class="head">
        <view class="symbol"></view>
        <view class="title">土地详情</view>
      </view>
    </view>
    <view class="img">
      <image
        v-for="item in 4"
        src="https://p1.itc.cn/q_70/images03/20231118/37fd136e843e4739b777522174a7e270.jpeg"
        mode="scaleToFill"
      />
    </view>
    <view
      class="footer"
      :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }"
    >
      <view class="icons">
        <view @tap="onTapIndex" class="item">
          <uni-icons type="home" color="#666666" size="24" />
          <view class="text">首页</view>
        </view>
        <view class="item">
          <uni-icons type="redo" color="#666666" size="24" />
          <view class="text">分享</view>
        </view>
        <view class="item">
          <uni-icons type="headphones" color="#666666" size="24" />
          <view class="text">客服</view>
        </view>
      </view>
      <view class="btn">立即租赁</view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  swiper {
    height: 500rpx;
    image {
      width: 100%;
      height: 100%;
    }
  }
  .introduction {
    margin: 20rpx;
    .price {
      font-size: 30rpx;
      font-weight: bold;
      color: red;
    }
    .title {
      margin: 10rpx 0;
    }
    .desc {
      font-size: 24rpx;
      color: #666666;
    }
  }
  .symbol {
    margin-right: 20rpx;
    width: 15rpx;
    height: 45rpx;
    background: #20c12b;
  }
  .location {
    margin: 5rpx 20rpx;
    display: flex;
    align-items: center;
    font-size: 24rpx;
    color: #666666;
  }
  .select {
    margin: 20rpx;
    display: flex;
    font-size: 24rpx;
    color: #666666;
  }
  .legend {
    display: flex;
    justify-content: space-around;
    .color {
      width: 30rpx;
      height: 30rpx;
      margin-right: 5rpx;
      border-radius: 5rpx;
      background-color: #af551e;
    }
    .item {
      display: flex;
      align-items: center;
      .selected {
        background-color: #6e4306;
      }
      .busy {
        background-color: #ad9484;
      }
    }
  }
  .category {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 30rpx 10rpx;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      .img {
        writing-mode: vertical-lr;
        background-color: #af551e;
        color: white;
        padding: 40rpx 20rpx;
        margin-bottom: 10rpx;
        border-radius: 10rpx;
        font-size: 24rpx;
      }
    }
  }
  .detail {
    .head {
      display: flex;
      margin: 10rpx 20rpx;
    }
  }
  .img {
    background: pink;
    padding-bottom: 100rpx;
    image {
      width: 100%;
    }
  }
  .footer {
    position: fixed;
    padding: 10rpx 80rpx;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffffe7;
    font-size: 24rpx;
    box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.836);
    .icons {
      display: flex;
      flex: 1;
      justify-content: space-between;
      margin-right: 100rpx;
    }
    .btn {
      padding: 20rpx 40rpx;
      background-color: #20c12b;
      color: white;
      border-radius: 20rpx;
    }
  }
}
</style>
