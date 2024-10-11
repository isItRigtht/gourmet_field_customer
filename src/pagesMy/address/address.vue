<script setup lang="ts">
import { deleteMyAddressDeleteAPI, getMyAddressListAPI } from '@/api/address';
import { IMyAddressList } from '@/types/address';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
// 抽屉Ref
const drawerRef = ref();
// 默认地址
const activeIndex = ref(0);
const list = ref<IMyAddressList[]>([]);
// 获取地址列表
const getAddressList = async () => {
  const res = await getMyAddressListAPI();
  activeIndex.value = res.result.findIndex((item) => item.isDefault);
  list.value = res.result;
};
// 删除地址
const onDelete = async (id: string) => {
  uni.showModal({
    title: '提示',
    content: '确定删除该地址吗？',
    success: async (res) => {
      if (res.confirm) {
        // 删除
        const res = await deleteMyAddressDeleteAPI(id);
        if (res.msg == '成功') {
          uni.showToast({
            title: '删除成功',
            icon: 'none'
          });
          getAddressList();
        } else {
          uni.showToast({
            title: res.msg,
            icon: 'none'
          });
        }
      }
    }
  });
};
// 添加地址

onLoad(() => {
  getAddressList();
});
</script>

<template>
  <view class="container">
    <view v-for="(item, index) in list" :key="item.id" class="item">
      <view class="name-and-phone">
        {{ item.receiver }} {{ item.contact }}
      </view>
      <view class="address"> {{ item.area }} {{ item.address }} </view>
      <!-- 分割线 -->
      <view class="line"></view>
      <view class="footer">
        <view v-if="index === activeIndex" class="default checked">
          <uni-icons type="checkbox" color="" size="24" />
          <view class="text">已设为默认</view>
        </view>
        <view @tap="activeIndex = index" v-else class="default">
          <uni-icons type="checkbox" color="" size="24" />
          <view class="text">默认</view>
        </view>
        <view class="edit-and-delete">
          <view class="edit btn">编辑</view>
          <view @tap="onDelete(item.id)" class="delete btn">删除</view>
        </view>
      </view>
    </view>
    <view @tap="drawerRef.open()" class="button">添加收货地址</view>
    <view>
      <uni-drawer :width="400" ref="drawerRef">
        
      </uni-drawer>
    </view>
  </view>
</template>

<style scoped lang="scss">
.container {
  .item {
    margin: 20rpx;
    padding: 20rpx;
    background-color: white;
    border-radius: 10rpx;
    box-shadow: 0 0 5rpx rgb(0, 0, 0);
    .address {
      margin: 10rpx 5rpx;
    }
    .line {
      height: 1rpx;
      background-color: #cccccca8;
    }
    .footer {
      color: #404040a8;
      margin-top: 10rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .default {
        display: flex;
        .text {
          margin-left: 10rpx;
        }
      }
      .checked {
        color: red;
      }
      .edit-and-delete {
        display: flex;
        .btn {
          border: 1rpx solid #cccccca8;
          margin: 0 10rpx;
          padding: 2rpx 10rpx;
          border-radius: 10rpx;
        }
        .delete {
          color: white;
          background-color: red;
        }
      }
    }
  }
  .button {
    margin: 50rpx auto;
    padding: 10rpx;
    width: 80%;
    text-align: center;
    background-color: #20c12b;
    color: white;
    font-size: 40rpx;
    border-radius: 20rpx;
  }
}
</style>
