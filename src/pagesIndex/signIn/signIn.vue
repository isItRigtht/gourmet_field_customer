<script setup lang="ts">
import type { UniCalendarSelectedElement } from '@uni-helper/uni-types';
import { ref } from 'vue';
import dayjs from 'dayjs';
import { getHomeAttendanceInfoAPI, putHomeAttendanceSignAPI } from '@/api';
import { onLoad } from '@dcloudio/uni-app';
// 签到数据响应式数组
const signInData = ref<UniCalendarSelectedElement[]>([]);
// 积分响应式数据
const score = ref(0);
// 每日获取积分数
const dailyGainPoints = 10;
// 获取签到数据
const getData = async () => {
  const res = await getHomeAttendanceInfoAPI();
  signInData.value = res.result.selectedDate.map((item) => ({
    date: item,
    info: '已签到'
  }));
  score.value = res.result.points;
};
// 点击签到事件
const onSignIn = async () => {
  // 获取当前格式化日期
  const date = dayjs().format('YYYY-MM-DD');
  // 判断今日是否已经签到
  if (signInData.value.some((item) => item.date === date)) {
    uni.showToast({
      title: '今日已签到',
      icon: 'none'
    });
    return;
  } else {
    // 发送签到请求
    const res = await putHomeAttendanceSignAPI(dailyGainPoints);
    console.log(res);
    if (res.msg === '成功') {
      // 提示签到成功
      uni.showToast({
        title: `积分+${dailyGainPoints}`,
        icon: 'success'
      });
      getData();
    } else {
      // 提示错误
      uni.showToast({
        title: res.msg,
        icon: 'none'
      });
    }
  }
};
onLoad(() => {
  getData();
});
</script>

<template>
  <view class="title">签到赚积分,积分兑大奖</view>
  <view class="my-and-exchang">
    <view class="my item">
      <view class="desc">我的积分</view>
      <view class="number">{{ score }}</view>
    </view>
    <navigator url="/pagesIndex/exchange/exchange" class="exchange item">
      <view class="desc">积分兑换</view>
      <view class="iconfont icon-jifenduihuan"></view>
    </navigator>
  </view>
  <!-- 日历组件 -->
  <view class="calendar"><uni-calendar :selected="signInData" /></view>
  <!-- 点击签到 -->
  <view class="sign-in">
    <view @tap="onSignIn" class="button">点击签到</view>
  </view>
</template>

<style scoped lang="scss">
.title {
  margin-top: 20rpx;
  font-size: 60rpx;
  font-weight: bold;
  color: #20c12b;
  text-align: center;
}
.my-and-exchang {
  display: flex;
  justify-content: space-around;
  margin-top: 40rpx;
  .item {
    display: flex;
    padding: 10rpx 30rpx;
    border-radius: 20rpx;
    width: 200rpx;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #20c12ba7;
    box-shadow: 0 0 5rpx rgba(0, 0, 0, 0.5);
    .desc {
      color: white;
      font-size: 25rpx;
      font-weight: bold;
    }
  }
  .my {
    .number {
      color: white;
      font-size: 50rpx;
      font-weight: bold;
    }
  }
  .exchange {
    .iconfont {
      font-size: 70rpx;
    }
  }
}
.calendar {
  margin-top: 30rpx;
}
.sign-in {
  display: flex;
  margin-top: 10rpx;
  justify-content: center;
  .button {
    background-color: #20c12b;
    font-size: 40rpx;
    color: white;
    padding: 10rpx;
    border-radius: 10rpx;
    font-weight: bold;
  }
}
</style>
