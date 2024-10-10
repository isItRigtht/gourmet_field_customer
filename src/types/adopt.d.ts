/** 认养列表 */
export type IAdoptList = {
  /** 认养id */
  id: string;
  /** 封面图地址 */
  cover: string;
  /** 标题 */
  title: string;
  /** 收货方式 */
  ways: number;
  /** 价格 */
  price: string;
};

/** 认养详情 */
export type IAdoptDetail = {
  /** 轮播图 */
  swiper: {
    id: string;
    url: string;
  }[];
  /** 标题 */
  title: string;
  /** 认养品种 */
  category: string;
  /** 剩余数量 */
  stock: string;
  /** 认养周期 */
  period: number;
  /** 收货方式 */
  ways: number;
  /** 截止日期 */
  deadline: string;
}