<script setup lang="ts">
import CounterBox from '@/components/CounterBox.vue'
import FooterBar from '@/components/FooterBar.vue'
import { onMounted, ref } from 'vue'
const count = ref(0)
// 是否同意协议
const isAgreed = ref(false)
// 组件高度
const componentHeight = ref(0)
</script>

<template>
  <view
    class="container"
    :style="{ paddingBottom: componentHeight + 10 + 'px' }"
  >
    <!-- 轮播图 -->
    <swiper indicator-dots autoplay circular>
      <swiper-item>
        <image
          src="https://t9.baidu.com/it/u=1470780388,2064832163&fm=193"
          mode="scaleToFill"
        />
      </swiper-item>
    </swiper>
    <view class="price">￥1000/头</view>
    <view class="desc">认养一只小黑猪，过年吃土猪</view>
    <!-- 项目特点 -->
    <view class="feature">
      <view class="title">项目特点</view>
      <view class="content">
        <view class="item">
          <uni-icons type="paperclip" color="#20c12b" size="40" />
          <view class="sub-title">CDHZ</view>
          <view class="tex">认养品种</view>
        </view>
        <view class="item">
          <uni-icons type="list" color="#20c12b" size="40" />
          <view class="sub-title">141头</view>
          <view class="tex">剩余数量</view>
        </view>
        <view class="item">
          <uni-icons type="reload" color="#20c12b" size="40" />
          <view class="sub-title">1年</view>
          <view class="tex">认养周期</view>
        </view>
        <view class="item">
          <uni-icons type="paperplane" color="#20c12b" size="40" />
          <view class="sub-title">到期配送实物</view>
          <view class="tex">认养收获</view>
        </view>
      </view>
    </view>
    <view class="procedure">
      <view class="title">认养流程</view>
      <view class="item">
        <uni-icons type="wallet" color="#20c12b" size="40" />
        <view class="desc">
          <view class="sub-title">认养下单</view>
          <view class="content">认养下单并支付成功</view>
        </view>
      </view>
      <view class="item">
        <uni-icons type="camera" color="#20c12b" size="40" />
        <view class="desc">
          <view class="sub-title">认养过程</view>
          <view class="content"
            >认养过程可以实时观看基地视频监控及物联网实时数据</view
          >
        </view>
      </view>
      <view class="item">
        <uni-icons type="gift" color="#20c12b" size="40" />
        <view class="desc">
          <view class="sub-title">认养收货</view>
          <view class="content">
            认养成熟后可以自提，可以在农场野餐区加工品尝，也可以冷链配送到家
          </view>
        </view>
      </view>
    </view>
    <view class="others">
      <view class="deadline">
        <view class="title">截止日期</view>
        <view class="time">2024-09-29</view>
      </view>
      <view class="number">
        <view class="title">购买数量</view>
        <!-- 计数器 -->
        <view class="counter"><CounterBox v-model="count" /></view>
      </view>
      <view class="agreement">
        <radio
          :checked="isAgreed"
          @tap="isAgreed = !isAgreed"
          style="transform: scale(0.6)"
        />
        <view class="content">
          阅读并同意<text class="link">《用户协议》</text>
        </view>
      </view>
    </view>

    <FooterBar
      title="立即认养"
      @getHeight="(height) => (componentHeight = height)"
    />
  </view>
</template>

<style scoped lang="scss">
.container {
  // 轮播图
  swiper {
    height: 500rpx;
    image {
      width: 100%;
      height: 100%;
    }
  }
  // 价格描述
  .price {
    margin: 20rpx;
    font-size: 30rpx;
    font-weight: bold;
    color: red;
  }
  .desc {
    margin: 20rpx;
    padding-bottom: 10rpx;
    border-bottom: 1rpx solid #00000010;
  }
  // 项目特点
  .feature {
    border-bottom: 1rpx solid #00000010;
    .title {
      margin: 20rpx;
    }
    .content {
      display: flex;
      justify-content: space-around;
      .item {
        padding: 10rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        font-size: 25rpx;
        .sub-title {
          margin: 10rpx 0;
        }
        .tex {
          font-size: 20rpx;
          color: #666666;
        }
      }
    }
  }
  // 认养流程
  .procedure {
    margin: 20rpx;
    border-bottom: 1rpx solid #00000010;
    .title {
      margin-bottom: 20rpx;
    }
    .item {
      display: flex;
      align-items: center;
      font-size: 25rpx;
      .desc {
        flex: 1;
        .content {
          font-size: 20rpx;
          color: #666666;
        }
      }
    }
  }
  // 其他
  .others {
    padding: 20rpx;
    font-size: 30rpx;
    color: #666;
    .title {
      color: #000;
      margin-right: 40rpx;
    }
    .deadline {
      display: flex;
      align-items: center;
      padding-bottom: 10rpx;
      border-bottom: 1rpx solid #00000010;
    }
    .number {
      display: flex;
      align-items: center;
      padding: 10rpx 0;
      border-bottom: 1rpx solid #00000010;
    }
    .agreement {
      display: flex;
      align-items: center;
      .link {
        color: #20c12b;
      }
    }
  }
}
</style>
