<script setup lang="ts">
import { onReady } from '@dcloudio/uni-app'
import { onMounted, getCurrentInstance, ref } from 'vue'

// 获取屏幕安全距离
const { safeAreaInsets } = uni.getSystemInfoSync()
// 跳转首页
const onTapIndex = () => {
  uni.switchTab({ url: '/pages/index/index' })
}
// 获取父组件传来的数据
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
// 向父组件暴露方法
const emit = defineEmits<{
  tapButton: []
  getHeight: [height: number]
}>()
// 获取组件高度
const instance = getCurrentInstance()
onMounted(() => {
  const query = uni.createSelectorQuery().in(instance)
  query
    .select('.footer')
    .boundingClientRect((data: { height: number }) => {
      emit('getHeight', data.height)
    })
    .exec()
})
</script>

<template>
  <view
    class="footer"
    :style="{
      paddingBottom: safeAreaInsets?.bottom + 'px'
    }"
  >
    <view class="icons">
      <view @tap="onTapIndex" class="item">
        <uni-icons type="home" color="#666666" size="24" />
        <view class="text">首页</view>
      </view>
      <view class="item">
        <uni-icons type="redo" color="#666666" size="24" />
        <view class="text">分享</view>
      </view>
      <view class="item">
        <uni-icons type="headphones" color="#666666" size="24" />
        <view class="text">客服</view>
      </view>
    </view>
    <view @tap="emit('tapButton')" class="btn">{{ props.title }}</view>
  </view>
</template>

<style scoped lang="scss">
.footer {
  position: fixed;
  padding: 10rpx 50rpx;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffffe7;
  font-size: 24rpx;
  box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.836);
  .icons {
    display: flex;
    width: 200rpx;
    justify-content: space-between;
    margin-right: 80rpx;
  }
  .btn {
    text-align: center;
    padding: 20rpx 40rpx;
    background-color: #20c12b;
    color: white;
    border-radius: 40rpx;
  }
}
</style>
