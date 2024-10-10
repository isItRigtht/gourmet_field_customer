/** 商品列表 */
export type IShopList = {
  /** 商品id */
  id: string;
  /** 商品图片 */
  cover: string;
  /** 商品标题 */
  title: string;
  /** 商品价格 */
  price: string;
};

/** sku */
export type IShopDetailSku = {
  /** 规格id */
  id: string;
  /** 规格名称 */
  specification: string;
  /** 规格价格 */
  price: string;
  /** 库存 */
  stock: number;
};

/** 商品详情 */
export type IShopDetail = {
  /** 轮播图 */
  swiper: {
    /** 轮播图id */
    id: string;
    /** 图片地址 */
    url: string;
  }[];
  /** 最低价格 */
  price: string;
  /** 标题 */
  title: string;
  /** 描述 */
  desc: string;
  sku: IShopDetailSku[];
  detail: {
    /** 详情id */
    id: string;
    /** 详情图片地址 */
    url: string;
  }[];
};

