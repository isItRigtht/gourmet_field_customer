import { IMyProfile } from '@/types/my';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore(
  'user',
  () => {
    // 用户信息
    const userInfo = ref<IMyProfile>();
    // 保存用户信息，登录时使用
    const setUserInfo = (info: IMyProfile) => {
      userInfo.value = {
        ...userInfo.value,
        ...info
      };
    };
    // 清空用户信息，退出时使用
    const clearUserInfo = () => {
      userInfo.value = undefined;
    };
    return { userInfo, setUserInfo, clearUserInfo };
  },
  // 配置持久化
  {
    persist: {
      // 调整为多端兼容的API
      storage: {
        // 存储API
        setItem(key, value) {
          uni.setStorageSync(key, value);
        },
        // 获取API
        getItem(key) {
          return uni.getStorageSync(key);
        }
      }
    }
  }
);
