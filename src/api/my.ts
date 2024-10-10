import { IMyAdopt, IMyField } from '@/types/my';
import { http } from '@/utils/http';

/**
 * 获取我的租地
 */
export const getMyFieldAPI = () => {
  return http<IMyField[]>({
    url: '/my/field'
  });
};

/**
 * 获取我的认养
 */
export const getMyAdoptAPI = () => {
  return http<IMyAdopt[]>({
    url: '/my/adopt'
  });
};