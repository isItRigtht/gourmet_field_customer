<script setup lang="ts">
import { getAdoptListAPI } from '@/api/adopt';
import SearchBox from '@/components/SearchBox.vue';
import { IAdoptList } from '@/types/adopt';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';

// 收货方式
const ways = [null, '到期自提', '野餐加工', '冷链配送'];
// 数据
const list = ref<IAdoptList[]>([]);
// 获取数据
const getAdoptList = async () => {
  const res = await getAdoptListAPI();
  list.value = res.result;
};

onLoad(() => {
  getAdoptList();
});
</script>

<template>
  <view class="viewport">
    <!-- 搜索框 -->
    <view class="search">
      <SearchBox />
    </view>
    <!-- 认养展示内容 -->
    <view v-if="list.length" class="content">
      <!-- 展示商品 -->
      <navigator
        v-for="item in list"
        :key="item.id"
        class="item"
        :url="`/pagesAdopt/adoptDetail/adoptDetail?id=${item.id}&price=${item.price}`"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        <!-- 商品图片 -->
        <view class="image">
          <view class="logo">认</view>
          <image :src="item.cover" mode="scaleToFill" />
        </view>
        <!-- 商品描述 -->
        <view class="desc">
          <view class="title">{{ item.title }}</view>
          <view class="harvest">收货方式：{{ ways[item.ways] }}</view>
          <view class="buy">
            <view class="price">￥{{ item.price }}/只</view>
            <view class="button">立即认养</view>
          </view>
        </view>
      </navigator>
    </view>
  </view>
</template>

<style scoped lang="scss">
.viewport {
  display: flex;
  flex-direction: column;
  .search {
    overflow: hidden;
    height: auto;
    background-color: #20c12b;
  }
  .content {
    flex: 1;
    .item {
      display: flex;
      margin: 20rpx;
      max-height: 280rpx;
      border-radius: 30rpx;
      overflow: hidden;
      background-color: white;
      box-shadow: 5rpx 5rpx 20rpx rgba(142, 140, 140, 0.2);
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
          height: 280rpx;
          width: 280rpx;
        }
      }
      .desc {
        padding: 30rpx;
        .title {
          font-size: 35rpx;
          font-weight: bold;
        }
        .harvest {
          margin-top: 35rpx;
          color: rgb(90, 90, 90);
        }
        .buy {
          margin-top: 20rpx;
          display: flex;
          justify-content: space-between;
          .price {
            color: red;
            font-size: 35rpx;
            font-weight: bold;
          }
          .button {
            background-color: #20c12b;
            color: white;
            border-radius: 20rpx;
            box-sizing: border-box;
            padding: 10rpx;
            font-size: 25rpx;
          }
        }
      }
    }
  }
}
</style>
