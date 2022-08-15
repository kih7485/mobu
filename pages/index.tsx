import { useEffect, useState } from "react";
import FullCalendar, { DatesSetArg, EventApi, EventInput } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; 
import { Container } from "@mui/material";
import { NextPage } from "next";
import { useQuery, useQueries } from "@tanstack/react-query";
import CalendarStyle from "../components/calendar/CalendarStyle";
import APTLttotPblancDetail from "../types/APTLttotPblancDetail";

import UrbtyOfctlLttotPblancDetail from "../types/UrbtyOfctlLttotPblancDetail";
import RemndrLttotPblancDetail from "../types/RemndrLttotPblancDetail";
import Category from "../components/calendar/Category";
// import Modal from "../components/Modal"
import estatesSubscription from './api/index';

interface Props {
  type: string,
  data: APTLttotPblancDetail[] & UrbtyOfctlLttotPblancDetail[] & RemndrLttotPblancDetail[]
} 

const Home: NextPage = () => { 
  const [events, setEvents] = useState<any[]>([]);  
  const [isModal, setIsModal] = useState<boolean>();
  const { data: aptData, isLoading: aptLoading } = useQuery(['getEstatesSubscription'], estatesSubscription);
  // const {data: aptRemindData, isLoading: remindLoading} = useQuery(['getRemndrLttotPblancDetail'], getRemndrLttotPblancDetail);
  // const {data: officetelsData, isLoading: officetelsLoading} = useQuery(['getUrbtyOfctlLttotPblancDetail'], getUrbtyOfctlLttotPblancDetail);
    const list: any = [];
    const types = [];
    aptData?.map(({ data, type }) => {
      types.push(type);
      data.map(obj => {
        list.push(obj);
      })
    })
  
    // 클릭 시 이벤트 정보 받아옴
  const handleEventClick = (event : EventApi) => {
    console.log(event._def);
  }
  if (aptLoading) return <div>로딩중...</div>;
    return (
      <>
        <Container maxWidth="xl">
          <Category types={types} />
          <CalendarStyle>
            <FullCalendar
              plugins={[dayGridPlugin]}
              locale={'ko'}
              events={list} 
              contentHeight={700}
              datesSet={(arg: DatesSetArg) => {
                setEvents([...events, { title: "additional", start: arg.start }]);
              }}
              eventClick={({ el, event }) => {
                setIsModal(true);
                handleEventClick(event);
              }}
            />
          </CalendarStyle> 
          {/* {isModal && <Modal/>} */}
        </Container>
      </>
    )
    // console.log(list, "list");

};

export default Home;