import { IFieldDetail, IFieldList, IFieldRent } from '@/types/field';
import { http } from '@/utils/http';

/**
 * 获取土地列表
 */
export const getFieldListAPI = () => {
  return http<IFieldList[]>({
    url: '/field/list'
  });
};

/**
 * 获取土地详情
 * @param id
 */
export const getFieldDetailAPI = (id: string) => {
  return http<IFieldDetail>({
    url: `/field/detail/${id}`
  });
};

/** 创建租地 */
export const postFieldRentAPI = (data: IFieldRent) => {
  return http({
    url: '/field/rent',
    method: 'POST',
    data
  });
};
