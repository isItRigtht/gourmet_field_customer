/** 轮播图数组元素数据类型 */
export type IHomeBannerItem = {
  /** 轮播图id */
  id: string;
  /** 图片地址 */
  src: string;
  /** 图片内容描述 */
  desc: string;
};

/** 农场活动数组元素数据类型 */
export type IHomeActivityListItem = {
  /** 活动id */
  id: string;
  /** 活动图片 */
  src: string;
  /** 活动标题 */
  title: string;
  /** 活动描述 */
  desc: string;
  /** 活动时间 */
  time: string;
  /** 活动价格 */
  price: string;
  /** 是否参加 */
  state: boolean;
}

/**
 * 修改报名状态数据类型
 */
export type IHomeActivityChangeStateData = {
  /** 活动id */
  id: string;
  /** 是否参加 */
  state: boolean;
}