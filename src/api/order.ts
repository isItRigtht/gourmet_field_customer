import { IMyOrderList, IOrderSubmit } from '@/types/order';
import { http } from '@/utils/http';

/**
 * 提交订单
 * @param data
 */
export const postMyOrderSubmitAPI = (data: IOrderSubmit) => {
  return http({
    url: '/my/order/submit',
    method: 'POST',
    data
  });
};

/** 获取订单信息 */
export const getMyOrderListAPI = () => {
  return http<IMyOrderList[]>({
    url: '/my/order/list',
    method: 'GET'
  });
};
