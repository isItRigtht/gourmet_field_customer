/** 土地列表 */
export type IFieldList = {
  /** 土地id */
  id: string;
  /** 封面图地址 */
  cover: string;
  /** 标题 */
  title: string;
  /** 描述 */
  desc: string;
  /** 价格 */
  price: string;
};

/**
 * 小块地种类
 */
export type IFieldCategory = {
  /** 种类id */
  subId: string;
  /** 小块地规格 */
  area: string;
  /** 状态：出租否？ */
  state: boolean;
};

/** 土地详情 */
export type IFieldDetail = {
  /** 土地id */
  id: string;
  /** 轮播图数组 */
  swiper: {
    id: string;
    url: string;
  }[];
  /** 标题 */
  title: string;
  /** 描述 */
  desc: string;
  /** 位置 */
  location: string;
  /** 小块地种类*/
  category: IFieldCategory[];
  /** 详情 */
  detail: {
    id: string;
    url: string;
  }[]; 
};

/** 租地订单 */
export type IFieldRent = {
  /** 土地id */
  id: string;
  /** 小块地id */
  subId: string;
  /** 租赁年限 */
  period: number;
}