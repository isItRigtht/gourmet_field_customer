import { http } from '@/utils/http';

type LoginRes = {
  id: string;
  token: string;
};
export const postLoginWxAPI = (code: string) => {
  return http<LoginRes>({
    method: 'POST',
    url: '/login/wx',
    data: { code }
  });
};
