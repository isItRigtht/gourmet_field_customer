<script setup lang="ts">
import { ref } from "vue";
import { IHomePointsListItem } from "@/types";
import { getHomePointsListAPI } from "@/api";
import { onLoad } from "@dcloudio/uni-app";
const list = ref<IHomePointsListItem[]>([]);
// 获取数据
const getList = async () => {
  const res = await getHomePointsListAPI();
  list.value = res.result;
};

onLoad(()=>{
  getList();
})
</script>

<template>
  <view class="container">
    <view v-for="item in list" :key="item.id" class="item">
      <view class="image">
        <view class="logo">兑</view>
        <image
          :src="item.cover"
          mode="scaleToFill"
        />
      </view>
      <view class="desc">{{ item.title }}</view>
      <view class="footer">
        <view class="price">{{ item.cost }} 积分</view>
        <view class="exchange">兑换</view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.container {
  margin: 20rpx;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  .item {
    overflow: hidden;
    border-radius: 30rpx;
    box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.5);
    .image {
      position: relative;
      .logo {
        position:absolute;
        left: 30rpx;
        font-size: 50rpx;
        color: white;
        padding: 10rpx;
        background-color: #20c12b;
        border-radius: 0 0 30rpx 30rpx;
      }
      image {
        width: 100%;
        height: 270rpx;
      }
    }
    .desc {
      padding: 0 30rpx;
      font-weight: bold;
    }
    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10rpx 30rpx;
      .price {
        font-size: 32rpx;
        color: red;
        font-weight: bold;
      }
      .exchange {
        background-color: #20c12b;
        color: white;
        padding: 10rpx;
        border-radius: 10rpx;
        font-size: 30rpx;
        font-weight: bold;
      }
    }
  }
}
</style>
