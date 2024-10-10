<script setup lang="ts">
import { getFieldDetailAPI, postFieldRentAPI } from '@/api/field';
import FooterBar from '@/components/FooterBar.vue';
import { IFieldCategory, IFieldDetail } from '@/types/field';
import { onLoad } from '@dcloudio/uni-app';
import { PickerViewOnChangeEvent } from '@uni-helper/uni-types';
import { ref } from 'vue';
// 租赁周期数据
const period = ref(['一年', '两年', '三年']);
// 显示下标
const index = ref();
// 组件高度
const componentHeight = ref(0);
// 选择小块地
const selectedId = ref('');
const onSelect = (item: IFieldCategory) => {
  if (item.state) {
    uni.showToast({
      title: '该土地已出租',
      icon: 'none'
    });
  } else {
    selectedId.value = item.subId;
  }
};
// 租赁按钮点击事件
const id = ref();
const onLease = async () => {
  if (!selectedId.value) {
    uni.showToast({
      title: '请选择小块地',
      icon: 'none'
    });
    return;
  }
  if (!index.value) {
    uni.showToast({
      title: '请选择租赁期限',
      icon: 'none'
    });
    return;
  }
  const res = await postFieldRentAPI({
    id: id.value,
    subId: selectedId.value,
    period: parseInt(index.value) + 1
  });
  if (res.msg === '成功') {
    uni.showToast({
      title: '租赁成功',
      icon: 'none'
    });
    setTimeout(() => {
      uni.navigateTo({
        url: '/pagesMy/myField/myField'
      });
    }, 1000);
  }
};

// 详情数据
const result = ref<IFieldDetail>();
// 单价
const price = ref();
// 获取详情
const getFieldDetail = async (id: string) => {
  const res = await getFieldDetailAPI(id);
  result.value = res.result;
};

onLoad((options) => {
  getFieldDetail(options.id);
  id.value = options.id;
  price.value = options.price;
});
</script>

<template>
  <view
    v-if="result"
    class="container"
    :style="{ height: componentHeight + 10 + 'px' }"
  >
    <!-- 轮播图 -->
    <swiper indicator-dots autoplay circular>
      <swiper-item v-for="item in result.swiper" :key="item.id">
        <image :src="item.url" mode="scaleToFill" />
      </swiper-item>
    </swiper>
    <!-- 介绍 -->
    <view class="introduction">
      <view class="price">￥{{ price }} /平方米/年</view>
      <view class="title">{{ result.title }}</view>
      <view class="desc">{{ result.desc }}</view>
    </view>
    <!-- 定位 -->
    <view class="location">
      <view class="symbol"></view>
      <uni-icons type="location" color="" size="24" />
      <view class="address">{{ result.location }}</view>
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
      <view v-for="item in result.category" :key="item.subId" class="item">
        <view
          @tap="onSelect(item)"
          class="img"
          :class="{ busy: item.state, selected: selectedId === item.subId }"
        >
          {{ item.area }}
        </view>
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
        v-for="item in result.detail"
        :key="item.id"
        :src="item.url"
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
      .selected {
        background-color: #6e4306;
      }
      .busy {
        background-color: #ad9484;
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
