import {
  IHomeActivityChangeStateData,
  IHomeActivityListItem,
  IHomeAttendanceInfo,
  IHomeBannerItem,
  IHomePointsListItem
} from '@/types';
import { http } from '@/utils/http';

/**
 * 获取首页轮播图数据
 */
export const getHomeBannerAPI = () => {
  return http<IHomeBannerItem[]>({
    url: '/home/banner'
  });
};

/**
 * 获取热点新闻数据
 */
export const getHomeNewsAPI = () => {
  return http<string[]>({
    url: '/home/news'
  });
};

/**
 * 获取活动列表数据
 */
export const getHomeActivityListAPI = () => {
  return http<IHomeActivityListItem[]>({
    url: '/home/activity/list'
  });
};

/**
 * 修改活动报名状态
 * @param id 活动id
 */
export const putHomeActivityChangeStateAPI = (id: string) => {
  return http<IHomeActivityChangeStateData>({
    url: `/home/activity/changeState/${id}`,
    method: 'PUT'
  });
};

/**
 * 获取签到数据
 */
export const getHomeAttendanceInfoAPI = () => {
  return http<IHomeAttendanceInfo>({
    url: '/home/attendance/info'
  });
};

/**
 * 提交今日签到获得积分数
 */
export const putHomeAttendanceSignAPI = (gainPoints: number) => {
  return http({
    url: '/home/attendance/sign',
    method: 'PUT',
    data: { gainPoints }
  });
}

/**
 * 获取积分兑换列表
 */
export const getHomePointsListAPI = () => {
  return http<IHomePointsListItem[]>({
    url: '/home/points/list'
  });
}