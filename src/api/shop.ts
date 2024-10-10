import { IShopDetail, IShopList } from '@/types/shop';
import { http } from '@/utils/http';

/**
 * 获取商品列表
 * @param category
 */
export const getShopListAPI = (category: number) => {
  return http<IShopList[]>({
    url: `/shop/list/${category}`
  });
};

/** 获取商品详情 */
export const getShopDetailAPI = (id: string) => {
  return http<IShopDetail>({
    url: `/shop/detail/${id}`
  });
};

/**  */