/** 积分兑换sku  */
export type IPointsSku = {
  /** 规格id */
  id: string;
  /** 具体规格 */
  specification: string;
  /** 对应规格积分数 */
  cost: string;
  /** 库存 */
  stock: number;
};

/**
 * 组件sku 列表
 */
export type ISkuList = {
  /** 规格id */
  _id: string;
  /** 对应商品id */
  goods_id: string;
  /** 对应商品名称 */
  goods_name: string;
  /** 对应规格图片 */
  image: string;
  /** 规格价格 */
  price: number;
  /** 对应规格名称 */
  sku_name_arr: string[];
  /** 库存 */
  stock: number;
};

/**
 * 分类标准
 */
export type ISpecList = {
  /** 分类标准名称 */
  name: string;
  /** 分类标准数组 */
  list: { name: string }[];
};

/** 组件skuData */
export type ISkuData = {
  /** 商品_id */
  _id: string;
  /** 商品名称 */
  name: string;
  /** 商品图片 */
  goods_thumb: string;
  /** sku数组 */
  sku_list: ISkuList[];
  /** 分类 */
  spec_list: ISpecList[];
};
