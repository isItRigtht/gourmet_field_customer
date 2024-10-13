<script setup lang="ts">
import {
  deleteMyAddressDeleteAPI,
  getMyAddressAPI,
  getMyAddressListAPI,
  postMyAddressSubmitAPI
} from '@/api/address';
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
// 表单数据
const formData = ref<Partial<IMyAddressList>>({
  receiver: '',
  contact: '',
  area: '',
  address: '',
  isDefault: true
});
// Ref对象
const formRef = ref();
// 校验规则
const rules = {
  receiver: {
    rules: [
      {
        required: true,
        errorMessage: '请输入收货人姓名'
      },
      {
        minLength: 2,
        maxLength: 10,
        errorMessage: '收货人姓名长度在2-10个字符'
      }
    ]
  },
  contact: {
    rules: [
      {
        required: true,
        errorMessage: '请输入联系电话'
      },
      {
        // 字符串正则
        pattern: '^1[3456789]\\d{9}$',
        errorMessage: '联系电话格式不正确'
      }
    ]
  },
  address: {
    rules: [
      {
        required: true,
        errorMessage: '请输入详细地址'
      }
    ]
  }
};

// 提交函数
const onSubmit = async () => {
  if (!formData.value.area) {
    // 提示
    uni.showToast({
      title: '请选择地区',
      icon: 'none'
    });
    return;
  }
  await formRef.value.validate();
  const res = await postMyAddressSubmitAPI(formData.value);
  if (res.msg == '成功') {
    uni.showToast({
      title: '成功',
      icon: 'none'
    });
    drawerRef.value.close();
    getAddressList();
  } else {
    uni.showToast({
      title: res.msg,
      icon: 'none'
    });
  }
};

// 编辑地址
const onEdit = async(id:string)=>{
  const res = await getMyAddressAPI(id);
  formData.value = res.result;
  drawerRef.value.open();
}
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
          <view @tap="onEdit(item.id)" class="edit btn">编辑</view>
          <view @tap="onDelete(item.id)" class="delete btn">删除</view>
        </view>
      </view>
    </view>
    <view @tap="drawerRef.open()" class="button">添加收货地址</view>
    <view>
      <uni-drawer :width="360" ref="drawerRef">
        <view class="form">
          <uni-forms
            ref="formRef"
            :model="formData"
            :rules="rules"
            label-width="100"
            action=""
          >
            <view class="form-title">添加收货地址</view>
            <!-- 收货人 -->
            <uni-forms-item required label="收货人" name="receiver">
              <uni-easyinput
                v-model="formData.receiver"
                type="text"
                placeholder="收货人姓名"
                @confirm=""
              />
            </uni-forms-item>
            <uni-forms-item required label="联系电话" name="contact">
              <uni-easyinput
                v-model="formData.contact"
                type="text"
                placeholder="收货人联系电话"
                @confirm=""
              />
            </uni-forms-item>
            <uni-forms-item required label="地区">
              <picker
                mode="region"
                :value="formData.area.split(' ')"
                @change="(e) => (formData.area = e.detail.value.join(' '))"
              >
                {{ formData.area || '点击选择 >' }}
              </picker>
            </uni-forms-item>
            <uni-forms-item required label="详细地址" name="address">
              <uni-easyinput
                v-model="formData.address"
                type="text"
                placeholder="例如街道，小区，乡镇，门牌号"
                @confirm=""
              />
            </uni-forms-item>
            <uni-forms-item label="设为默认" name="isDefault">
              <switch
                :checked="formData.isDefault"
                @change="(e) => (formData.isDefault = e.detail.value)"
              />
            </uni-forms-item>
          </uni-forms>
          <view @tap="onSubmit" class="submit">添加</view>
        </view>
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
  .form {
    margin: 40rpx 20rpx;
    .form-title {
      padding: 20rpx;
      font-size: 40rpx;
      font-weight: bold;
      text-align: center;
    }
  }
  .submit {
    width: 80%;
    margin: 40rpx auto;
    padding: 10rpx;
    background-color: #20c12b;
    color: white;
    border-radius: 20rpx;
    text-align: center;
  }
}
</style>
