<script setup lang="ts">
import { getHomeBannerAPI } from '@/api';
import { IHomeBannerItem } from '@/types';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';

// 轮播图数据 TODO: 以后调接口获取数据
const banners = ref<IHomeBannerItem[]>([]);
onLoad(async()=>{
  const res = await getHomeBannerAPI();
  banners.value = res.result;
})
</script>

<template>
  <swiper class="swiper" indicator-dots autoplay circular>
    <swiper-item class="swiper-item" v-for="item in banners" :key="item.id">
      <image :src="item.src" mode="scaleToFill" />
    </swiper-item>
  </swiper>
</template>

<style scoped lang="scss">
.swiper {
  height: 430rpx;
  image {
    width: 100%;
    height: 100%;
  }
}
</style>
