import { IMyAdopt, IMyField, IMyProfile } from '@/types/my';
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

/**
 * 获取个人信息
 */
export const getMyProfileAPI = () => {
  return http<IMyProfile>({
    url: '/my/profile'
  });
};

/** 修改个人信息 */
export const putMyEditProfileAPI = (data: Partial<IMyProfile>) => {
  return http({
    url: '/my/editProfile',
    method: 'PUT',
    data
  });
};

