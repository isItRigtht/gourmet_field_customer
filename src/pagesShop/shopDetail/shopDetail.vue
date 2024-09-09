<script setup lang="ts">
import FooterBar from '@/components/FooterBar.vue'
import { ref } from 'vue'
// sku组件配置参数
// 开关响应式数据
const isShow = ref(false)
// 点击打开sku组件
const openSku = () => {
  isShow.value = true
  console.log('点击了')
}
// 组件高度
const componentHeight = ref(0)
// sku模拟数据
const skuData = ref({
  _id: '002',
  name: '成都西红柿',
  goods_thumb:
    'https://img2.baidu.com/it/u=2699463816,353268376&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=1120',
  sku_list: [
    {
      _id: '004',
      goods_id: '002',
      goods_name: '成都西红柿',
      image:
        'https://img2.baidu.com/it/u=302335861,1966518666&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667',
      price: 1100,
      sku_name_arr: ['精品小果一斤'],
      stock: 100
    },
    {
      _id: '005',
      goods_id: '002',
      goods_name: '成都西红柿',
      image:
        'https://img2.baidu.com/it/u=2699463816,353268376&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=1120',
      price: 2100,
      sku_name_arr: ['香甜大果一斤'],
      stock: 80
    }
  ],
  spec_list: [
    {
      name: '规格',
      list: [
        {
          name: '精品小果一斤'
        },
        {
          name: '香甜大果一斤'
        }
      ]
    }
  ]
})
</script>

<template>
  <view
    class="container"
    :style="{ paddingBottom: componentHeight + 10 + 'px' }"
  >
    <swiper indicator-dots autoplay circular>
      <swiper-item>
        <image
          v-for="item in 4"
          src="https://img0.baidu.com/it/u=3912263632,2759588619&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=566"
          mode="scaleToFill"
        />
      </swiper-item>
    </swiper>
    <view class="price">￥99.00</view>
    <view class="desc">
      <view class="title">你电正宗红苹果</view>
      <view class="detail">好吃不上火,你值得拥有的好苹果</view>
    </view>
    <view class="service"
      ><view class="head">服务</view
      ><view class="content">无忧退 快速退款 免费包邮</view></view
    >
    <view class="more">商品详情</view>
    <view class="img">
      <image
        v-for="item in 4"
        src="https://img0.baidu.com/it/u=1340947294,743907301&fm=253&fmt=auto&app=138&f=JPEG?w=755&h=500"
        mode="scaleToFill"
      />
    </view>
  </view>
  <!-- 底部操作栏 -->
  <FooterBar
    @tapButton="openSku"
    @getHeight="(height) => (componentHeight = height)"
    title="立即购买"
  />
  <!-- sku组件弹窗 -->
  <vk-data-goods-sku-popup
    v-model="isShow"
    mode="3"
    theme="green"
    :localdata="skuData"
  >
  </vk-data-goods-sku-popup>
</template>

<style scoped lang="scss">
.container {
  swiper {
    height: 600rpx;
    swiper-item {
      image {
        width: 100%;
        height: 100%;
      }
    }
  }
  .price {
    padding: 20rpx 40rpx;
    font-size: 50rpx;
    color: white;
    background-color: #20c12b;
  }
  .desc {
    padding: 10rpx 20rpx;
    border-bottom: 1rpx solid rgba(0, 0, 0, 0.1);
    .title {
      margin-bottom: 10rpx;
    }
    .detail {
      font-size: 25rpx;
      color: red;
    }
  }
  .service {
    display: flex;
    padding: 10rpx 20rpx;
    font-size: 25rpx;
    border-bottom: 1rpx solid rgba(0, 0, 0, 0.1);
    .head {
      color: #666666;
      margin-right: 20rpx;
    }
  }
  .more {
    margin: 10rpx 0;
    text-align: center;
  }
  .img {
    image {
      width: 100%;
      height: 600rpx;
    }
  }
}
</style>
