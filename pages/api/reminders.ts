// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios, { AxiosPromise, AxiosResponse } from 'axios';
import RemndrLttotPblancDetail from '../../types/RemndrLttotPblancDetail';
import { API_URL, AUTHORIZATION, COLOR_OPTIONS } from './common';


interface Props {
  type: string,
  data: RemndrLttotPblancDetail[]
}

/**
 * APT 무순위/잔여세대 분양정보 상세조회
 */
export function getRemndrLttotPblancDetail() {
  return axios.get<Props>(API_URL+"getRemndrLttotPblancDetail",
    {
      params: {
        page: 1,
        perPage: 999
      },
      headers: AUTHORIZATION
    }).then((response)=> {
      return {
        type: "아파트 무순위/잔여세대",
        data: response.data.data.map((apt) => {
          return {
            ...apt,
            title: apt.HOUSE_NM,
            start: apt.SUBSCRPT_RCEPT_BGNDE,
            end: apt.SUBSCRPT_RCEPT_ENDDE,
            textColor: COLOR_OPTIONS[2]
          }
        })
      }
    }).catch(error => {
      console.error(error);
    })
}

export default getRemndrLttotPblancDetail;