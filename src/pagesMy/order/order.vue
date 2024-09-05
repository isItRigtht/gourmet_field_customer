<script setup lang="ts">
import { ref } from 'vue'

// 获取屏幕安全距离
const { safeAreaInsets } = uni.getSystemInfoSync()
// tab数据
const orderTabs = ref([
  { orderState: 0, title: '全部' },
  { orderState: 1, title: '待付款' },
  { orderState: 2, title: '待发货' },
  { orderState: 3, title: '待收货' },
  { orderState: 4, title: '待评价' }
])
// 当前下标
const currentIndex = ref(0)
</script>

<template>
  <view class="container">
    <!-- 导航栏 -->
    <view class="tabs">
      <view
        @tap="currentIndex = item.orderState"
        class="item"
        v-for="item in orderTabs"
        :key="item.title"
        :style="{
          color: currentIndex === item.orderState ? '#20c12b' : '#000'
        }"
        >{{ item.title }}
      </view>
      <!-- 游标 -->
      <view class="cursor" :style="{ left: currentIndex * 20 + '%' }"></view>
    </view>
    <!-- 滑动容器 -->
    <swiper
      @change="currentIndex = $event.detail.current"
      class="swiper"
      :current="currentIndex"
    >
      <swiper-item v-for="item in orderTabs" :key="item.title">
        <view class="order" v-for="order in 4" :key="order">
          <view class="title-and-state">
            <view class="shop">成都小苹果销售店</view>
            <view class="state">待发货</view>
          </view>
          <view class="content">
            <view class="img">
              <image
                src="https://img0.baidu.com/it/u=1735024561,2929805548&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333"
                mode="scaleToFill"
              />
            </view>
            <view class="info">
              <view class="title">成都小苹果</view>
              <view class="protection">退货包运费保障中</view>
            </view>
            <view class="price-and-count"
              ><view class="price">￥98</view
              ><view class="count">x1</view></view
            >
          </view>
          <view class="total-price">实付：￥98 <text>(免运费)</text></view>
          <view class="action"><view class="btn">确认收货</view></view>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>
<style>
page {
  height: 100%;
  background-color: #f3f3f3;
}
</style>
<style scoped lang="scss">
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  .tabs {
    display: flex;
    justify-content: space-around;
    line-height: 60rpx;
    margin: 0 10rpx;
    background-color: #fff;
    box-shadow: 0 4rpx 6rpx rgba(240, 240, 240, 0.6);
    position: relative;
    z-index: 9;

    .item {
      flex: 1;
      text-align: center;
      padding: 20rpx;
      font-size: 28rpx;
      color: #262626;
    }
    .cursor {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 20%;
      height: 6rpx;
      background-color: #20c12b;
      /* 过渡效果 */
      transition: all 0.4s;
    }
  }
  .swiper {
    flex: 1;
    swiper-item {
      overflow: scroll;
      background-color: #f3f3f3;
      .order {
        margin: 20rpx 0;
        padding: 20rpx;
        background-color: #fff;
        .title-and-state {
          display: flex;
          justify-content: space-between;
          .state {
            color: red;
          }
        }
        .content {
          padding: 10rpx;
          display: flex;
          .img {
            height: 200rpx;
            width: 200rpx;
            image {
              width: 100%;
              height: 100%;
            }
          }
          .info {
            flex: 1;
            margin: 0 20rpx;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .protection {
              padding: 2rpx 5rpx;
              width: fit-content;
              color: white;
              background-color: #20c12b;
              border-radius: 5rpx;
            }
          }
          .price-and-count {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            .count {
              color: #666;
            }
          }
        }
        .total-price {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          text {
            font-size: 25rpx;
          }
        }
        .action {
          margin-top: 20rpx;
          display: flex;
          justify-content: flex-end;
          .btn {
            padding: 10rpx 20rpx;
            background-color: #20c12b;
            color: white;
            border-radius: 20rpx;
          }
        }
      }
    }
  }
}
</style>
