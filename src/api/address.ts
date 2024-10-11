import { IMyAddressList } from '@/types/address';
import { http } from '@/utils/http';

/**
 * 获取地址列表
 */
export const getMyAddressListAPI = () => {
  return http<IMyAddressList[]>({
    url: '/my/address/list',
    method: 'GET'
  });
};

/**
 * 删除地址
 */
export const deleteMyAddressDeleteAPI = (id: string) => {
  return http<{ id: string }>({
    url: `/my/address/delete/${id}`,
    method: 'DELETE'
  });
};

/**
 * 新增地址
 */
export const postMyAddressSubmitAPI = (data: IMyAddressList) => {
  return http({
    url: '/my/address/submit',
    method: 'POST',
    data
  });
};
