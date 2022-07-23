// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

const AUTHORIZATION = {
  Authorization:'Infuser 0UhvGJKnNhf5UR8xN8X3K/0EoZ/o3q6UrjE+61PeDDKtwGG4uAG4dnVyXhuKb9lBgZnGM2bjApu3rCy9SwL0Hg=='
}
const URL = "https://api.odcloud.kr/api/15101046/v1/uddi:14a46595-03dd-47d3-a418-d64e52820598";
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
          end: apt.청약접수종료일
        }
      })
      return resultList;
    }).catch(error => {
      console.error(error);
    })
}

export default getApartmentSalesData;