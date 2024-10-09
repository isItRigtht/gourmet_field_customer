<script setup lang="ts">
import { getHomeActivityListAPI, putHomeActivityChangeStateAPI } from '@/api';
import { IHomeActivityListItem } from '@/types';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
const list = ref<IHomeActivityListItem[]>([]);
const getList = async () => {
  const res = await getHomeActivityListAPI();
  list.value = res.result;
};
onLoad(() => {
  getList();
});
// 报名
const onSignIn = async(id:string)=>{
  const res = await putHomeActivityChangeStateAPI(id);
  if(res.msg === '成功') {
    // 这里前端不用修改数据，发送给后端，数据库中修改成功后直接重新加载数据即可
    // list.value.find(item => item.id === id).state = res.result.state;
    uni.showToast({
      title: '报名成功',
      icon: 'success'
    });
  }else {
    uni.showToast({
      title: res.msg,
     icon: 'none'
    })
  }
  getList();
}
// 取消报名
const onQuit = async (id: string) => {
  // 确认弹窗
  uni.showModal({
    title: '提示',
    content: '确定取消报名吗？',
    showCancel: true,
    confirmText: '确定',
    cancelText: '取消',
    success: async (success) => {
      if (success.confirm) {
        const res = await putHomeActivityChangeStateAPI(id);
        if(res.msg === '成功') {
          // 这里前端不用修改数据，发送给后端，数据库中修改成功后直接重新加载数据即可
          // list.value.find(item => item.id === id).state = res.result.state;
          uni.showToast({
            title: '取消报名成功',
            icon: 'none'
          });
        }else {
          uni.showToast({
            title: res.msg,
            icon: 'none'
          });
        }
      }
      getList();
    }
  });
};
</script>

<template>
  <view class="container">
    <view
      v-for="item in list"
      :key="item.id"
      class="card"
      open-type="navigate"
      hover-class="navigator-hover"
    >
      <image :src="item.src" mode="scaleToFill" />
      <view class="content">
        <view class="title">{{ item.title }}</view>
        <view class="desc-and-time">
          <view class="desc">{{ item.desc }}</view>
          <view class="time">{{ item.time }}</view>
        </view>
        <view class="bottom">
          <view class="price">￥{{ item.price }}/人/次</view>
          <view @tap="onQuit(item.id)" v-if="item.state" class="button-ban"
            >取消报名</view
          >
          <view @tap="onSignIn(item.id)" v-else class="button">立即报名</view>
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.container {
  overflow: hidden;
  .card {
    margin: 30rpx;
    overflow: hidden;
    border-radius: 50rpx;
    box-shadow: 0 0 20rpx rgba(74, 74, 74, 0.2);
    background-color: white;
    image {
      width: 100%;
    }
    .content {
      padding: 30rpx;
      padding-top: 10rpx;
      .title {
        font-size: 36rpx;
        font-weight: bold;
      }
      .desc-and-time {
        display: flex;
        padding-right: 20rpx;
        justify-content: space-between;
        .desc {
          margin-top: 10rpx;
          color: rgb(90, 90, 90);
        }
      }
      .bottom {
        margin-top: 10rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .price {
          color: red;
          font-size: 30rpx;
          font-weight: bold;
        }
        .button {
          margin-right: 10rpx;
          padding: 10rpx;
          color: white;
          background-color: #20c12b;
          border-radius: 10rpx;
        }
        .button-ban {
          margin-right: 10rpx;
          padding: 10rpx;
          color: white;
          background-color: rgb(245, 60, 60);
          border-radius: 10rpx;
        }
      }
    }
  }
}
</style>
