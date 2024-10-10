import { IMyField } from '@/types/my';
import { http } from '@/utils/http';

/**
 * 获取我的租地
 */
export const getMyFieldAPI = () => {
  return http<IMyField[]>({
    url: '/my/field'
  });
};
