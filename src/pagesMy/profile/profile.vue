<script setup lang="ts">
import { getMyProfileAPI, putMyEditProfileAPI } from '@/api/my';
import { useUserStore } from '@/stores';
import {
  DatePickerOnChangeEvent,
  RegionPickerOnChangeEvent
} from '@uni-helper/uni-types';
import { ref } from 'vue';

// 修改头像
const onAvatarChange = () => {
  uni.chooseMedia({
    count: 1,
    mediaType: ['image'],
    // 选择成功回调函数
    success: (success) => {
      uni.uploadFile({
        url: '/my/avatar',
        filePath: success.tempFiles[0].tempFilePath,
        name: 'file',
        success: async (res) => {
          if (res.statusCode === 200) {
            getMyProfile();
            // 提示
            uni.showToast({
              title: '头像修改成功',
              icon: 'success'
            });
          } else {
            uni.showToast({
              title: '修改失败',
              icon: 'none'
            });
          }
        }
      });
    }
  });
};
// 昵称输入框
const inputRef = ref();
// 获取用户状态
const userStore = useUserStore();

// 获取个人信息
const getMyProfile = async () => {
  const res = await getMyProfileAPI();
  userStore.setUserInfo(res.result);
};
// 提交昵称
const onPutNickname = async (value) => {
  const res = await putMyEditProfileAPI({ nickname: value });
  if (res.msg === '成功') {
    uni.showToast({
      title: '昵称修改成功',
      icon: 'success'
    });
    getMyProfile();
  } else {
    uni.showToast({
      title: res.msg,
      icon: 'none'
    });
  }
};
// 提交性别
const onPutGender = async (value) => {
  const res = await putMyEditProfileAPI({ gender: value });
  if (res.msg === '成功') {
    getMyProfile();
  } else {
    uni.showToast({
      title: res.msg,
      icon: 'none'
    });
  }
};
// 提交地址
const onPutArea = async (e: RegionPickerOnChangeEvent) => {
  const res = await putMyEditProfileAPI({ area: e.detail.value.join(' ') });
  if (res.msg === '成功') {
    getMyProfile();
  } else {
    uni.showToast({
      title: res.msg,
      icon: 'none'
    });
  }
};

// 提交生日
const onPutDate = async (e: DatePickerOnChangeEvent) => {
  console.log(e.detail.value);
  const res = await putMyEditProfileAPI({ birthday: e.detail.value });
  if (res.msg === '成功') {
    getMyProfile();
  } else {
    uni.showToast({
      title: res.msg,
      icon: 'none'
    });
  }
};
</script>

<template>
  <view v-if="userStore.userInfo" class="container">
    <!-- 头像 -->
    <view @tap="onAvatarChange" class="avatar item">
      <view class="text">头像</view>
      <image
        class="content"
        :src="userStore.userInfo.avatar"
        mode="scaleToFill"
      />
    </view>
    <!-- 昵称 -->
    <view @tap="inputRef.popup.open()" class="nick-name item">
      <view class="text">昵称</view>
      <view class="content">{{ userStore.userInfo.nickname }}</view>
    </view>
    <uni-popup ref="inputDialog" type="dialog">
      <uni-popup-dialog
        ref="inputRef"
        mode="input"
        title="修改昵称"
        value="对话框预置提示内容!"
        :placeholder="userStore.userInfo.nickname || '请输入昵称'"
        @confirm="onPutNickname"
      ></uni-popup-dialog>
    </uni-popup>
    <!-- 性别 -->
    <view class="gender item">
      <view class="text">性别</view>
      <picker
        mode="selector"
        :value="userStore.userInfo.gender"
        :range="['女', '男']"
        @change="onPutGender"
      >
        <view class="nativeView" style="padding-left: 200rpx">
          {{ userStore.userInfo.gender ? '男' : '女' }}
        </view>
      </picker>
    </view>
    <!-- 地区 -->
    <view class="area item">
      <view class="text">地区</view>
      <picker
        mode="region"
        :value="userStore.userInfo.area.split(' ')"
        @change="onPutArea"
      >
        {{ userStore.userInfo.area }}
      </picker>
    </view>
    <!-- 生日 -->
    <view class="birthday item">
      <view class="text">生日</view>
      <picker
        mode="date"
        :value="userStore.userInfo.birthday"
        @change="onPutDate"
      >
        {{ userStore.userInfo.birthday }}
      </picker>
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
