import axios from "axios";
import UrbtyOfctlLttotPblancDetail from "../../types/UrbtyOfctlLttotPblancDetail";
import { API_URL, AUTHORIZATION, COLOR_OPTIONS } from "./common";

interface Props {
  type: string,
  data: UrbtyOfctlLttotPblancDetail[]
}

export default function getUrbtyOfctlLttotPblancDetail() {
  return axios.get<Props>(API_URL+"getUrbtyOfctlLttotPblancDetail",
    {
      params: {
        page: 1,
        perPage: 999
      },
      headers: AUTHORIZATION
    }).then((response)=> {
      return {
        type: "오피스텔/도시형/민간임대 분양정보",
        data: response.data.data.map((apt) => {
          return {
            ...apt,
            title: apt.HOUSE_NM,
            start: apt.SUBSCRPT_RCEPT_BGNDE,
            end: apt.SUBSCRPT_RCEPT_ENDDE,
            textColor: COLOR_OPTIONS[3]
          }
        })
      }
    }).catch(error => {
      console.error(error);
    })
}
