<script setup lang="ts">
import FooterBar from '@/components/FooterBar.vue'
import { PickerViewOnChangeEvent } from '@uni-helper/uni-types'
import { ref } from 'vue'
// 租赁周期数据
const period = ref(['一年', '两年', '三年'])
// 显示下标
const index = ref()
// 组件高度
const componentHeight = ref(0)
// 租赁按钮点击事件
const onLease = async () => {
  await uni.showToast({
    title: '模拟支付成功',
    icon: 'success'
  })
  // 跳转到我的租地页面
  setTimeout(() => {
    uni.navigateTo({
      url: '/pagesMy/myField/myField'
    })
  }, 500)
}
</script>

<template>
  <view class="container" :style="{ height: componentHeight + 10 + 'px' }">
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
    <!-- 租赁周期 -->
    <picker
      :range="period"
      :value="index"
      @change="(e: PickerViewOnChangeEvent) => (index = e.detail.value)"
    >
      <view class="period">
        <view class="left">
          <view class="symbol"></view>
          <view class="title">租赁周期</view>
        </view>
        <view class="right"
          >{{ period[index] || '请选择租赁周期' }}
          <uni-icons type="right" color="red" size="15" />
        </view>
      </view>
    </picker>
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
  </view>
  <!-- 底部操作栏 -->
  <FooterBar
    @tapButton="onLease"
    @getHeight="(height) => (componentHeight = height)"
    title="立即租赁"
  />
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
    align-items: center;
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
  .period {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10rpx 20rpx;
    .left {
      display: flex;
      align-items: center;
    }
    .right {
      color: red;
    }
  }
  .detail {
    .head {
      display: flex;
      margin: 10rpx 20rpx;
    }
  }
  .img {
    padding-bottom: 100rpx;
    image {
      width: 100%;
    }
  }
}
</style>
