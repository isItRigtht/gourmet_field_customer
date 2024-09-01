<script setup lang="ts">
import { ref } from 'vue'

// 默认地址
const activeIndex = ref(0)
</script>

<template>
  <view class="container">
    <view v-for="(item, index) in 4" class="item">
      <view class="name-and-phone"> 小邹,18569785462</view>
      <view class="address"
        >四川省 成都市 郫都区 西源小道 6602号 电子神技大学</view
      >
      <!-- 分割线 -->
      <view class="line"></view>
      <view class="footer">
        <view v-if="index === activeIndex" class="default checked">
          <uni-icons type="checkbox" color="" size="24" />
          <view class="text">已设为默认</view>
        </view>
        <view @tap="activeIndex = index" v-else class="default">
          <uni-icons type="checkbox" color="" size="24" />
          <view class="text">默认</view>
        </view>
        <view class="edit-and-delete">
          <view class="edit btn">编辑</view>
          <view class="delete btn">删除</view>
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.container {
  .item {
    margin: 20rpx;
    padding: 20rpx;
    background-color: white;
    border-radius: 10rpx;
    box-shadow: 0 0 5rpx rgb(0, 0, 0);
    .address {
      margin: 10rpx 5rpx;
    }
    .line {
      height: 1rpx;
      background-color: #cccccca8;
    }
    .footer {
      color: #404040a8;
      margin-top: 10rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .default {
        display: flex;
        .text {
          margin-left: 10rpx;
        }
      }
      .checked {
        color: red;
      }
      .edit-and-delete {
        display: flex;
        .btn {
          border: 1rpx solid #cccccca8;
          margin: 0 10rpx;
          padding: 2rpx 10rpx;
          border-radius: 10rpx;
        }
        .delete {
          color: white;
          background-color: red;
        }
      }
    }
  }
}
</style>
