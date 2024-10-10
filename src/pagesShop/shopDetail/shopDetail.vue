<script setup lang="ts">
import { postMyOrderSubmitAPI } from '@/api/order';
import { getShopDetailAPI } from '@/api/shop';
import FooterBar from '@/components/FooterBar.vue';
import { IShopDetail } from '@/types/shop';
import { onLoad, resolveEasycom } from '@dcloudio/uni-app';
import { ref, render } from 'vue';
// sku组件配置参数
// 开关响应式数据
const isShow = ref(false);
const id = ref();
// 组件高度
const componentHeight = ref(0);
// sku数据模板
const skuData = ref({
  _id: '',
  name: '',
  goods_thumb: '',
  sku_list: [],
  spec_list: [
    {
      name: '规格',
      list: []
    }
  ]
});
// 获取结果
const result = ref<IShopDetail>();
// 获取数据
const getShopDetail = async (id: string) => {
  const res = await getShopDetailAPI(id);
  result.value = res.result;
};
// 渲染sku
const renderSku = () => {
  skuData.value._id = id.value;
  skuData.value.name = result.value.title;
  skuData.value.goods_thumb = result.value.swiper[0].url;
  skuData.value.sku_list = result.value.sku.map((item) => ({
    _id: item.id,
    goods_id: id.value,
    goods_name: result.value.title,
    image: result.value.detail[0].url,
    price: 100 * parseInt(result.value.price),
    sku_name_arr: item.specification.split(' '),
    stock: item.stock
  }));
  skuData.value.spec_list[0].list = result.value.sku.map((item) => ({
    name: item.specification
  }));
};
// 立即购买
const onBuy = async (ev) => {
  const res = await postMyOrderSubmitAPI({
    id: id.value,
    skuId: ev._id,
    quantity: ev.buy_num
  });
  console.log(res);
};

onLoad(async (options) => {
  id.value = options.id;
  await getShopDetail(options.id);
  renderSku();
});
</script>

<template>
  <view
    v-if="result"
    class="container"
    :style="{ paddingBottom: componentHeight + 10 + 'px' }"
  >
    <swiper indicator-dots autoplay circular>
      <swiper-item>
        <image
          v-for="item in result.swiper"
          :key="item.id"
          :src="item.url"
          mode="scaleToFill"
        />
      </swiper-item>
    </swiper>
    <view class="price">￥{{ result.price }}</view>
    <view class="desc">
      <view class="title">{{ result.title }}</view>
      <view class="detail">{{ result.desc }}</view>
    </view>
    <view class="service"
      ><view class="head">服务</view
      ><view class="content">无忧退 快速退款 免费包邮</view></view
    >
    <view class="more">商品详情</view>
    <view class="img">
      <image
        v-for="item in result.detail"
        :key="item.id"
        :src="item.url"
        mode="scaleToFill"
      />
    </view>
  </view>
  <!-- 底部操作栏 -->
  <FooterBar
    @tapButton="isShow = true"
    @getHeight="(height) => (componentHeight = height)"
    title="立即购买"
  />
  <!-- sku组件弹窗 -->
  <vk-data-goods-sku-popup
    v-model="isShow"
    mode="3"
    theme="green"
    :localdata="skuData"
    @buy="onBuy"
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
