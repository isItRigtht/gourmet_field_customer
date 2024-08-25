<script setup lang="ts">
import { ref } from 'vue';

// tab数据
const tabData = [
  {
    name: '综合',
    id: 0
  },
  {
    name: '销量',
    id: 1
  },
  {
    name: '价格',
    id: 2
  },
  {
    name: '好评',
    id: 3
  }
]

// 高亮下标
const activeIndex = ref<number>(0)
// 点击处理
const onTapItem = (index: number) => {
  activeIndex.value = index
  if (index === 2) {
    // 价格排序
    priceSortOrder.value = priceSortOrder.value === 'asc' ? 'desc' : 'asc'
  }
}
// 价格升降序
const priceSortOrder = ref<'asc'|'desc'>('asc')
</script>

<template>
  <view class="tab">
    <view
    @tap="onTapItem(index)"
      class="tab-item"
      v-for="(item, index) in tabData"
      :key="index"
      :class="{ active: activeIndex===index }"
    >
      {{ item.name }}
      <!-- 价格升降序符号 -->
      <template v-if="item.name === '价格'">
        <text v-if="priceSortOrder === 'asc'" class="sort-icon">▲</text>
        <text v-else class="sort-icon">▼</text>
      </template>
    </view>
    
  </view>
</template>

<style scoped lang="scss">
.tab {
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  padding: 10rpx 0;
  align-items: center;
  .tab-item {
    text-align: center;
    margin: 0 30rpx;
    padding-bottom: 10rpx;
    width: 100%;
    height: 100%;
    font-size: 30rpx;
    color: #545454;
    .sort-icon {
      font-size: 30rpx;
      color: #1f9e1d;
    }
  }
  .active {
    color: #1f9e1d;
    font-weight: bold;
    border-bottom: 6rpx solid #1f9e1d;
  }
}
</style>
