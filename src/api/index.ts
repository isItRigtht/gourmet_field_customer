import { IHomeActivityChangeStateData, IHomeActivityListItem, IHomeBannerItem } from "@/types"
import { http } from "@/utils/http"

/**
 * 获取首页轮播图数据
 */
export const getHomeBannerAPI = () => {
  return http<IHomeBannerItem[]>({
    url: '/home/banner',
  })
}

/**
 * 获取热点新闻数据
 */
export const getHomeNewsAPI = () => {
  return http<string[]>({
    url: '/home/news',
  })
}

/**
 * 获取活动列表数据
 */
export const getHomeActivityListAPI = () => {
  return http<IHomeActivityListItem[]>({
    url: '/home/activity/list',
  })
}

/**
 * 修改活动报名状态
 * @param id 活动id
 */
export const putHomeActivityChangeStateAPI = (id: string) => {
  return http<IHomeActivityChangeStateData>({
    url: `/home/activity/changeState/${id}`,
    method: 'PUT',
  })
}