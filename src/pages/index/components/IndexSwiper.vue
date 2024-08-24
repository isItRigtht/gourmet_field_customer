<script setup lang="ts">
// 轮播图数据 TODO: 以后调接口获取数据
const banners = [
  {
    id: 1,
    src: 'https://img1.baidu.com/it/u=3969446681,2262541280&fm=253&fmt=auto&app=138&f=JPEG?w=992&h=500',
    description: '田间动漫'
  },
  {
    id: 2,
    src: 'https://pic.rmb.bdstatic.com/4d001b90620edbbe8ae9e540a8387c97.jpeg',
    description: '田间动漫'
  },
  {
    id: 3,
    src: 'https://img1.baidu.com/it/u=683493311,1993330607&fm=253&fmt=auto&app=138&f=JPEG?w=755&h=500',
    description: '田间动漫'
  },
  {
    id: 4,
    src: 'https://www.gov.cn/xinwen/2017-08/12/5217427/images/4b110ab531054646bbbccd7f0985eb47.jpg',
    description: '田间动漫'
  }
]
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
