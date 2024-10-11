/** 收货地址列表 */
export type IMyAddressList = {
  /** 收货地址id */
  id: string;
  /** 收货人姓名 */
  receiver: string;
  /** 收货人电话 */
  contact: string;
  /** 省市区 */
  area: string;
  /** 详细地址 */
  address: string;
  /** 是否默认地址 */
  isDefault: boolean;
};
