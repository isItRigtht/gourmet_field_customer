import { IOrderSubmit } from "@/types/order";
import { http } from "@/utils/http";

/**
 * 提交订单
 * @param data
 */
export const postMyOrderSubmitAPI = (data: IOrderSubmit)=>{
  return http({
    url: '/my/order/submit',
    method: 'POST',
    data
  })
}
