<script setup lang="ts">
import SearchBox from '@/components/SearchBox.vue'
import FieldList from './components/FieldList.vue'
</script>

<template>
  <!-- 搜索框 -->
  <view class="search"><SearchBox /></view>
  <!-- 土地列表 -->
  <FieldList/>
</template>

<style scoped lang="scss">
.search {
  overflow: hidden;
  background-color: #20c12b;
}
</style>
