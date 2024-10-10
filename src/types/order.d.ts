/** 提交订单类型 */
export type IOrderSubmit = {
  /**商品id */
  id: string;
  /** skuid */
  skuId: string;
  /** sku数量 */
  quantity: number;
}