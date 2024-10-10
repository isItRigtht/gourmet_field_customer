<script setup lang="ts">
import { getMyFieldAPI } from '@/api/my';
import { IMyField } from '@/types/my';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';

const list = ref<IMyField[]>([]);

// 获取我的租地
const getMyField = async () => {
  const res = await getMyFieldAPI();
  list.value = res.result;
};

onLoad(() => {
  getMyField();
});
</script>

<template>
  <view class="container">
    <view v-for="item in list" :key="item.id" class="item">
      <view class="title">{{ item.title }}</view>
      <view class="body"
        ><image :src="item.cover" mode="scaleToFill" />
        <view class="content">
          <view class="type">{{ item.area }}</view>
          <view class="period">租赁时长：{{ item.period }}年</view>
          <view class="deadline">
            到期日期：{{
              parseInt(item.startDate.slice(0, 4)) +
              item.period +
              item.startDate.slice(4)
            }}
          </view>
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
