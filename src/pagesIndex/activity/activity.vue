<script setup lang="ts">
import SearchBox from '@/components/SearchBox.vue'
import ActivityList from './components/ActivityList.vue'
</script>

<template>
  <!-- 搜索框 -->
   <view class="search"><SearchBox/> </view>
   <ActivityList/>
</template>

<style scoped lang="scss">
.search {
  background-color: #20c12b;
  overflow: hidden;
}
</style>