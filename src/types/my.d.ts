/** 我的租地 */
export type IMyField = {
  /** 租地id */
  id: string;
  /** 封面图地址 */
  cover: string;
  /** 小块地规格 */
  area: string;
  /** 租赁年限 */
  period: number;
  /** 开始日期 */
  startDate: string;
};

/** 我的认养 */
export type IMyAdopt = {
  /** 认养id */
  id: string;
  /** 封面图地址 */
  cover: string;
  /** 标题 */
  title: string;
  /** 认养周期 */
  period: number;
  /** 认养数量 */
  quantity: number;
};

/** 个人信息 */
export type IMyProfile = {
  /** 头像 */
  avatar?: string;
  /** 昵称 */
  nickname?: string;
  /** 性别 */
  gender?: number;
  /** 省 市 区 */
  area?: string;
  /** 生日 */
  birthday?: string;
  /** token */
  token?: string;
};
