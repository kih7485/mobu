// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios, { AxiosPromise, AxiosResponse } from 'axios';
import APTLttotPblancDetail from '../../types/APTLttotPblancDetail';
import RemndrLttotPblancDetail from '../../types/RemndrLttotPblancDetail';


interface Props {
  type: string,
  data: APTLttotPblancDetail[]
}
const AUTHORIZATION = {
  Authorization: "Infuser 0UhvGJKnNhf5UR8xN8X3K/0EoZ/o3q6UrjE+61PeDDKtwGG4uAG4dnVyXhuKb9lBgZnGM2bjApu3rCy9SwL0Hg=="
}
const URL = "https://api.odcloud.kr/api/15101046/v1/uddi:14a46595-03dd-47d3-a418-d64e52820598";
const API_URL = "https://api.odcloud.kr/api/ApplyhomeInfoDetailSvc/v1/";

const COLOR_OPTIONS = [
  '#00AB55', // theme.palette.primary.main,
  '#1890FF', // theme.palette.info.main,
  '#94D82D', // theme.palette.success.main,
  '#FFC107', // theme.palette.warning.main,
  '#FF4842', // theme.palette.error.main
  '#04297A', // theme.palette.info.darker
  '#7A0C2E' // theme.palette.error.darker
];

function getApartmentSalesData() {
  return axios.get(URL,
    {
      params: {
        page: 1,
        perPage: 200
      },
      headers: AUTHORIZATION
    }).then(response => {
    
      const resultList = response.data.data.map((apt: any) => {
        return {
          ...apt,
          title: apt.주택명,
          start: apt.청약접수시작일,
          end: apt.청약접수종료일,
          textColor:COLOR_OPTIONS[1]
        }
      })
      return resultList;
    }).catch(error => {
      console.error(error);
    })
}

/**
 * 한국부동산원_청약홈 아파트 분양정보 상세조회
 */
export function getAPTLttotPblancDetail(): Props | any {
  return axios.get(API_URL+"getAPTLttotPblancDetail",
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



/**
 * APT 무순위/잔여세대 분양정보 상세조회
 */
export function getRemndrLttotPblancDetail(): Props | any {
  return axios.get(API_URL+"getRemndrLttotPblancDetail",
    {
      params: {
        page: 1,
        perPage: 999
      },
      headers: AUTHORIZATION
    }).then((response)=> {
      return {
        type: "아파트 분양정보",
        data: response.data.data.map((apt: RemndrLttotPblancDetail) => {
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

export default getApartmentSalesData;