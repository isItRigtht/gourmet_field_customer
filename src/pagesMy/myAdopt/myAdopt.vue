<script setup lang="ts">
import { getMyAdoptAPI } from '@/api/my';
import { IMyAdopt } from '@/types/my';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';

const list = ref<IMyAdopt[]>([]);

// 获取我的认养
const getMyAdopt = async () => {
  const res = await getMyAdoptAPI();
  list.value = res.result;
};

onLoad(() => {
  getMyAdopt();
});
</script>

<template>
  <view class="container">
    <view v-for="item in list" :key="item.id" class="item">
      <view class="title">{{ item.title }}</view>
      <view class="body"
        ><image :src="item.cover" mode="scaleToFill" />
        <view class="content">
          <view class="period">认养数目：{{ item.quantity }}头</view>
          <view class="deadline">认养周期：{{ item.period }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.container {
  padding: 30rpx;
  .item {
    box-shadow: 0 0 10rpx rgba(125, 125, 125, 0.836);
    border-radius: 30rpx;
    padding: 20rpx 0;
    .title {
      padding: 10rpx 20rpx;
      font-size: 30rpx;
      font-weight: bold;
      border-bottom: 1rpx solid rgba(92, 92, 92, 0.173);
    }
    .body {
      display: flex;
      padding: 20rpx 20rpx;
      border-bottom: 1rpx solid rgba(92, 92, 92, 0.173);
      image {
        width: 200rpx;
        height: 150rpx;
        border-radius: 30rpx;
        margin-right: 20rpx;
      }
      .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: #666666;
        .type {
          color: black;
        }
      }
    }
  }
}
</style>
