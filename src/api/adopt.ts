import { IAdoptDetail, IAdoptList } from '@/types/adopt';
import { http } from '@/utils/http';

/**
 * 获取认养列表
 */
export const getAdoptListAPI = () => {
  return http<IAdoptList[]>({
    url: '/adopt/list'
  });
};

/**
 * 获取认养详情
 */
export const getAdoptDetailAPI = (id: string) => {
  return http<IAdoptDetail>({
    url: `/adopt/detail/${id}`
  });
};

/**
 * 提交认养
 */
export const postAdoptSubmitAPI = (data: { id: string; quantity: number }) => {
  return http({
    url: '/adopt/submit',
    method: 'POST',
    data
  });
};
