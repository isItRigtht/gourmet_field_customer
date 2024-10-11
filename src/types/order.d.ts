/** 提交订单类型 */
export type IOrderSubmit = {
  /**商品id */
  id: string;
  /** skuid */
  skuId: string;
  /** sku数量 */
  quantity: number;
}

/**
 * 订单列表项类型
 */
export type IMyOrderList = {
  /** 订单id */
  id: string;
  /** 订单状态 1.待付款 2.代发货 3.待收货 4.待评价*/
  state: number;
  /** 订单封面图 */
  cover: string;
  /** 订单标题 */
  title: string;
  /** 订单描述 */
  desc: string;
  /** 订单规格 */
  specification: string;
  /** 商品数量 */
  quantity: number;
  /** 商品单价 */
  price: number;
}