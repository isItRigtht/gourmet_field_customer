/**
 * TODO:
 * 1. 非http开头的url需要拼接地址
 * 2. 请求超时
 * 3. 添加小程序端请求头标识
 * 4. 添加 token 请求头标识
 */

import { useUserStore } from '@/stores';
// 基地址
const baseURL = 'https://113.54.196.103';
// 拦截器
const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 1. 拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url;
    }
    // 2. 请求超时
    options.timeout = 10000;
    // 3. 添加小程序端请求头标识
    options.header = {
      ...options.header,
      'source-client': 'uni-app'
    };
    // 4. 添加token 请求头标识
    const userStore = useUserStore();
    const token = userStore.userInfo?.token;
    if (token) {
      options.header.Authorization = token;
    }
  }
};
// 添加拦截器
uni.addInterceptor('request', httpInterceptor);
uni.addInterceptor('uploadFile', httpInterceptor);

/**
 * 请求函数
 * @param UniApp.RequestOptions
 * @returns Promise
 * 1. 返回Promise对象
 * 2. 请求成功
 *    2.1 提取核心数据res.data
 *    2.2 添加类型，支持泛型
 * 3. 请求失败
 *    3.1 网络错误： 提示用户更换网络
 *    3.2 401错误： 清理用户信息，跳转到登录页
 *    3.3 其他错误： 根据后端错误信息轻提示
 */
// 返回值接口
interface Data<T> {
  msg: string;
  result: T;
}
export const http = <T>(options: UniApp.RequestOptions) => {
  // 1. 返回Promise对象
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      // 2. 请求成功
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 获取数据成功，调用resolve
          resolve(res.data as Data<T>);
        } else if (res.statusCode === 401) {
          // 401 错误，清理用户信息，跳转到登录页
          const userStore = useUserStore();
          userStore.clearUserInfo();
          uni.navigateTo({
            url: '/pages/login/login'
          });
          reject(res);
        } else {
          // 其他错误，根据后端错误信息轻提示
          uni.showToast({
            title: (res.data as Data<T>).msg || '请求失败',
            icon: 'none'
          });
          reject(res);
        }
      },
      // 响应失败
      fail(err) {
        // 网络错误，调用reject
        uni.showToast({
          title: '网络错误，换个网络试试',
          icon: 'none'
        });
        reject(err);
      }
    });
  });
};
