<script setup lang="ts">
// 热点新闻数据 TODO: 调接口
const hotNews = [
  {
    id: 1,
    content: '2024年，中国将进入AI时代',
    time: '2023-01-01'
  },
  {
    id: 2,
    content: '改革开放45周年,见证美好生活',
    time: '2023-01-01'
  },
  {
    id: 3,
    content: '全面迈向小康社会，人民实现幸福生活',
    time: '2023-01-01'
  }
]
</script>

<template>
  <view class="hot-news">
    <view class="hot-news-title"> <text>最新</text> 动态</view>
    <uni-icons type="fire" color="red" size="20" />
    <swiper autoplay circular vertical class="hot-news-content">
      <swiper-item v-for="item in hotNews" :key="item.id">
        {{ item.content }}
      </swiper-item>
    </swiper>
  </view>
</template>

<style scoped lang="scss">
.hot-news {
  display: flex;
  margin: 0 20rpx;
  justify-content: center;
  align-items: center;
  height: 60rpx;
  width: 100%;
  .hot-news-title {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 30rpx;
    font-weight: 700;
    text {
      display: block;
      color: red;
    }
  }
  .hot-news-content{
    display: flex;
    align-items: center;
    padding-left: 10rpx;
    flex: 1;
    height: 100%;
    font-size: 28rpx;
    swiper-item {
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
}
</style>
