<script setup lang="ts">

import { RegionPickerOnChangeEvent } from '@uni-helper/uni-types';
import { ref } from 'vue'

// 修改头像
const tempFilePath = ref('')
const onAvatarChange = () => {
  uni.chooseMedia({
    count: 1,
    mediaType: ['image'],
    // 选择成功回调函数
    success: (success) => {
      // 本地路径
      tempFilePath.value = success.tempFiles[0].tempFilePath
    }
  })
}
// 测试地区数据
const area = ref(['广东省', '深圳市', '南山区'])
</script>

<template>
  <view class="container">
    <!-- 头像 -->
    <view @tap="onAvatarChange" class="avatar item">
      <view class="text">头像</view>
      <image
        class="content"
        :src="
          tempFilePath ||
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp515017572.jpg&refer=http%3A%2F%2Fimg3.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1727586039&t=2b4b407efac4f2a41e9d9dcdc2864c55'
        "
        mode="scaleToFill"
      />
    </view>
    <!-- 昵称 -->
    <view class="nick-name item">
      <view class="text">昵称</view>
      <view class="content">法内狂徒罗翔</view>
    </view>
    <!-- 性别 -->
    <view class="gender item">
      <view class="text">性别</view>
      <view class="content">男</view>
    </view>
    <!-- 地区 -->
    <view class="area item">
      <view class="text">地区</view>
      <picker
        mode="region"
        :value="area"
        @change="
          (e: RegionPickerOnChangeEvent) => {
            area = e.detail.value
          }
        "
      >
        {{ area.join(' ') }}
      </picker>
    </view>
    <!-- 生日 -->
    <view class="birthday item">
      <view class="text">生日</view>
      <view class="content">1999-01-01</view>
    </view>
  </view>
</template>
<style>
page {
  background-color: #e7e6e6;
}
</style>
<style scoped lang="scss">
.container {
  background: white;
  .avatar {
    .content {
      width: 100rpx;
      height: 100rpx;
      border-radius: 50%;
    }
  }
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 30rpx;
    padding: 20rpx 0;
    border-bottom: 1rpx solid rgba(0, 0, 0, 0.1);
  }
}
</style>
