<script setup lang="ts">
import { getShopListAPI } from '@/api/shop';
import SearchBox from '@/components/SearchBox.vue';
import { IShopList } from '@/types/shop';
import { onLoad } from '@dcloudio/uni-app';
import { ref, watch } from 'vue';
// 商品种类数据
const shopType = ref([
  {
    id: 1,
    name: '水果'
  },
  {
    id: 2,
    name: '蔬菜'
  },
  {
    id: 3,
    name: '肉禽'
  },
  {
    id: 4,
    name: '水产'
  },
  {
    id: 5,
    name: '粮油'
  }
]);
// 当前种类
const currentCategory = ref(1);
// 商品列表
const list = ref<IShopList[]>([]);

// 获取商品列表
const getShopList = async (category: number) => {
  const res = await getShopListAPI(category);
  list.value = res.result;
};

onLoad(() => {
  getShopList(currentCategory.value);
});

watch(currentCategory,()=>{
  getShopList(currentCategory.value);
})
</script>

<template>
  <view class="view-port">
    <view class="search"><SearchBox /></view>
    <view class="container">
      <view class="tab">
        <view
          @tap="currentCategory = item.id"
          v-for="item in shopType"
          :key="item.id"
          class="category"
          :class="{ active: currentCategory === item.id }"
        >
          {{ item.name }}
        </view>
      </view>
      <scroll-view scroll-y>
        <view class="content">
          <!-- TODO: 动态跳转 -->
          <navigator
            v-for="item in list"
            :key="item.id"
            class="goods"
            :url="`/pagesShop/shopDetail/shopDetail?id=${item.id}`"
            open-type="navigate"
            hover-class="navigator-hover"
          >
            <image :src="item.cover" mode="scaleToFill" />
            <!-- 只截取前10个字符 -->
            <view class="desc">{{ item.title }}</view>
            <view class="price">￥{{ item.price }}</view>
          </navigator>
        </view>
      </scroll-view>
    </view>
  </view>
</template>
<style>
page {
  height: 100%;
  overflow: hidden;
}
</style>
<style scoped lang="scss">
.view-port {
  height: 100%;
  display: flex;
  flex-direction: column;
  .search {
    background-color: #20c12b;
  }
  .container {
    flex: 1;
    min-height: 400rpx;
    padding-top: 10rpx;
    display: flex;
    .tab {
      width: 180rpx;
      background-color: rgb(246, 242, 242);
      .category {
        display: flex;
        height: 80rpx;
        color: rgb(111, 111, 111);
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
      }
      .active {
        background-color: white;
        border-left: 8rpx solid #20c12b;
      }
    }
    .content {
      padding: 10rpx;
      background-color: rgb(234, 233, 233);
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20rpx;
      .goods {
        display: flex;
        overflow: hidden;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        border-radius: 30rpx;
        background-color: white;
        box-shadow: 5rpx 5rpx 10rpx rgba(142, 140, 140, 0.2);
        image {
          height: 260rpx;
          width: 100%;
        }
        .desc {
          padding: 5rpx 15rpx;
          font-size: 24rpx;
          color: black;
        }
        .price {
          padding: 10rpx 20rpx;
          align-self: start;
          font-size: 24rpx;
          font-weight: bold;
          color: red;
        }
      }
    }
  }
}
</style>
