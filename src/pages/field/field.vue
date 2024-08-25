<script setup lang="ts">
import SortGoods from '@/components/SortGoods.vue'
import SearchBox from '@/components/SearchBox.vue'

// 土地数据 TODO: 调接口
const fieldList = [
  {
    id: 0,
    name: '土地1',
    cover:
      'https://p4.itc.cn/q_70/images03/20220310/75a042e7b46943178770603dbcfad9bf.png',
    title: '纯正黑土地',
    price: '1000',
    desc: '有山有水有树林，人间仙境'
  },
  {
    id: 1,
    name: '土地1',
    cover:
      'https://p4.itc.cn/q_70/images03/20220310/75a042e7b46943178770603dbcfad9bf.png',
    title: '纯正黑土地',
    price: '1000',
    desc: '有山有水有树林，人间仙境'
  }
]
</script>

<template>
  <!-- 搜索框 -->
  <view class="search"><SearchBox /></view>
  <!-- 排序组件 -->
  <SortGoods />
  <!-- 土地列表 -->
  <uni-card
    v-for="item in fieldList"
    :cover="item.cover"
    :key="item.id"
    :extra="item.desc"
  >
    <navigator :url="'/pagesField/fieldDetail/fieldDetail?id=' + item.id" open-type="navigate" hover-class="navigator-hover">
      <text class="title">{{ item.title }}</text>
      <!-- 底部价格 -->
      <view class="footer">
        <view class="price">￥{{ Number(item.price).toFixed(2) }}/亩/年</view>
        <view class="buy">立即租地</view>
      </view>
    </navigator>
  </uni-card>
</template>

<style scoped lang="scss">
.search {
  overflow: hidden;
  margin-top: 0;
  background-color: #20c12b;
}
.title {
  color: black;
  font-size: 30rpx;
  font-weight: 800;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .price {
    color: red;
    font-weight: 800;
  }
  .buy {
    background-color: #20c12b;
    color: white;
    padding: 10rpx;
    border-radius: 10rpx;
  }
}
</style>
