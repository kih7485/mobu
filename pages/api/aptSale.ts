// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios, { AxiosPromise, AxiosResponse } from 'axios';
import APTLttotPblancDetail from '../../types/APTLttotPblancDetail';
import { API_URL, AUTHORIZATION, COLOR_OPTIONS } from './common';


interface Props{
  type: string,
  data: APTLttotPblancDetail[]
}

/**
 * 한국부동산원_청약홈 아파트 분양정보 상세조회
 */
export function getAPTLttotPblancDetail() {
  return axios.get<Props>(API_URL+"getAPTLttotPblancDetail",
    {
      params: {
        page: 1,
        perPage: 999
      },
      headers: AUTHORIZATION
    }).then((response)=> {
      return {
        type: "아파트 분양정보",
        data: response.data.data.map((apt: APTLttotPblancDetail) => {
          return {
            ...apt,
            title: apt.HOUSE_NM,
            start: apt.RCEPT_BGNDE,
            end: apt.RCEPT_ENDDE,
            textColor: COLOR_OPTIONS[1]
          } 
        })
      }
    }).catch(error => {
      console.error(error);
    })
}

export default getAPTLttotPblancDetail;