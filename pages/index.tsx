import { useEffect, useState } from "react";
import FullCalendar, { DatesSetArg, EventInput } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; 
import { Box, Container } from "@mui/material";
import { NextPage } from "next";
import getAPTLttotPblancDetail from './api/aptSale';
import { useQuery, useQueries } from "@tanstack/react-query";
import CalendarStyle from "../components/calendar/CalendarStyle";
import APTLttotPblancDetail from "../types/APTLttotPblancDetail";

import { Axios, AxiosError } from "axios";
import getUrbtyOfctlLttotPblancDetail from "./api/officetels";
import getRemndrLttotPblancDetail from "./api/reminders";
import UrbtyOfctlLttotPblancDetail from "../types/UrbtyOfctlLttotPblancDetail";
import RemndrLttotPblancDetail from "../types/RemndrLttotPblancDetail";
import Category from "../components/calendar/Category";
import estatesSubscription from './api/index';

interface Props {
  type: string,
  data: APTLttotPblancDetail[] & UrbtyOfctlLttotPblancDetail[] & RemndrLttotPblancDetail[]
} 

const Home: NextPage = () => { 
  const [events, setEvents] = useState<any[]>([]);  
  const {data: aptData, isLoading: aptLoading} = useQuery(['getEstatesSubscription'], estatesSubscription);
  // const {data: aptRemindData, isLoading: remindLoading} = useQuery(['getRemndrLttotPblancDetail'], getRemndrLttotPblancDetail);
  const {data: officetelsData, isLoading: officetelsLoading} = useQuery(['getUrbtyOfctlLttotPblancDetail'], getUrbtyOfctlLttotPblancDetail);
  
  if (aptLoading) return "로딩중...";
  if (!aptLoading) {
    console.log(aptData, "aptData"); 
    const list: any = [];
    aptData?.map(({ data }) => {
      data.map(obj => {
        list.push(obj);
      })
    })
    return (
      <>      <Container maxWidth="xl">
          <Category/>
      <CalendarStyle> 
            <FullCalendar
              plugins={[dayGridPlugin]}
              locale={'ko'}
              events={list} 
              contentHeight={700}
              datesSet={(arg: DatesSetArg) => {
                  setEvents([...events, { title: "additional", start: arg.start }]);
                  }}
              />

        </CalendarStyle>
        
      </Container>
        </>
    )
    // console.log(list, "list");
  }
  return (
    <>
      <div>
        dd
      </div>
    </>
  )
};

export default Home;