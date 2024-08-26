<script setup lang="ts">
import SortGoods from '@/components/SortGoods.vue'
import SearchBox from '@/components/SearchBox.vue'
import FieldList from './components/FieldList.vue'

// 土地数据 TODO: 调接口

</script>

<template>
  <!-- 搜索框 -->
  <view class="search"><SearchBox /></view>
  <!-- 排序组件 -->
  <SortGoods />
  <!-- 土地列表 -->
  <FieldList/>
</template>

<style scoped lang="scss">
.search {
  overflow: hidden;
  background-color: #20c12b;
}
</style>
