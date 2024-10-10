<script setup lang="ts">
import { getFieldListAPI } from '@/api/field';
import { IFieldList } from '@/types/field';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
const list = ref<IFieldList[]>([]);
// 获取土地列表
const getFieldList = async () => {
  const res = await getFieldListAPI();
  list.value = res.result;
};

onLoad(()=>{
  getFieldList();
})
</script>

<template>
  <view class="container">
    <navigator
      v-for="item in list"
      :key="item.id"
      class="card"
      :url="`/pagesField/fieldDetail/fieldDetail?id=${item.id}&price=${item.price}`"
      open-type="navigate"
      hover-class="navigator-hover"
    >
      <view class="image">
        <view class="logo">租</view>
        <image
          :src="item.cover"
          mode="scaleToFill"
        />
      </view>
      <view class="content">
        <view class="title">{{item.title}}</view>
        <view class="desc">{{ item.desc }}</view>
        <view class="bottom">
          <view class="price">￥{{item.price}}元/平方米/年</view>
          <view class="button">立即租地</view>
        </view>
      </view>
    </navigator>
  </view>
</template>

<style scoped lang="scss">
.container {
  overflow: hidden;
  .card {
    margin: 30rpx;
    overflow: hidden;
    border-radius: 50rpx;
    box-shadow: 0 0 20rpx rgba(74, 74, 74, 0.2);
    background-color: white;
    .image {
      position: relative;
      .logo {
        position: absolute;
        left: 30rpx;
        font-size: 50rpx;
        color: white;
        padding: 10rpx;
        background-color: #20c12b;
        border-radius: 0 0 30rpx 30rpx;
      }
      image {
        width: 100%;
      }
    }
    .content {
      padding: 30rpx;
      padding-top: 10rpx;
      .title {
        font-size: 36rpx;
        font-weight: bold;
      }
      .desc {
        margin-top: 10rpx;
        color: rgb(90, 90, 90);
      }
      .bottom {
        margin-top: 10rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .price {
          color: red;
          font-size: 30rpx;
          font-weight: bold;
        }
        .button {
          margin-right: 10rpx;
          padding: 10rpx;
          color: white;
          background-color: #20c12b;
          border-radius: 10rpx;
        }
      }
    }
  }
}
</style>
