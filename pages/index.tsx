import { useEffect, useState } from "react";
import FullCalendar, { DatesSetArg, EventInput } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; 
import { Box, Container } from "@mui/material";
import { NextPage } from "next";
import getAptSales, {getAPTLttotPblancDetail, getRemndrLttotPblancDetail} from './api/aptSale';
import { useQuery, useQueries } from "@tanstack/react-query";
import CalendarStyle from "../components/calendar/CalendarStyle";
import APTLttotPblancDetail from "../types/APTLttotPblancDetail";
import { AxiosError } from "axios";
import getUrbtyOfctlLttotPblancDetail from "./api/officetels";
import UrbtyOfctlLttotPblancDetail from "../types/UrbtyOfctlLttotPblancDetail";
import RemndrLttotPblancDetail from "../types/RemndrLttotPblancDetail";

interface Props {
  type: string,
  data: APTLttotPblancDetail[] | UrbtyOfctlLttotPblancDetail[] | RemndrLttotPblancDetail[]
} 
 
const Home: NextPage = () => { 
  const [events, setEvents] = useState<EventInput[]>([
    { title: "initial event1", start: new Date() }, 
  ]);  
  const aptLotto = useQuery<Props, AxiosError, Props>(['getAPTLttotPblancDetail'], getAPTLttotPblancDetail);
  const aptRemindLotto = useQuery<Props, AxiosError, Props>(['getRemndrLttotPblancDetail'], getRemndrLttotPblancDetail());
  const officetelsLotto = useQuery<Props, AxiosError, Props>(['getUrbtyOfctlLttotPblancDetail'], getUrbtyOfctlLttotPblancDetail);
  // const dsss = [
  //   ...aptLotto.data?.data,
  //   ...aptRemindLotto.data?.data,
  //   ...officetelsLotto.data?.data
  // ]
// const results = useQueries({
//   queries: [
//     { queryKey: ['post', 1], queryFn: getAPTLttotPblancDetail(), staleTime: Infinity},
//     { queryKey: ['post', 2], queryFn: getUrbtyOfctlLttotPblancDetail(), staleTime: Infinity}
//   ] 
// })

  const results = useQueries({
    queries: [
      { queryKey: ['apart', 1], queryFn: getAPTLttotPblancDetail, staleTime: Infinity },
      { queryKey: ['apart', 2], queryFn: getUrbtyOfctlLttotPblancDetail, staleTime: Infinity }
    ]
  });

  console.log(results, "results");
  
    return ( 
      <>
        <Container maxWidth="xl">
          <CalendarStyle>
            <FullCalendar
              plugins={[dayGridPlugin]}
              locale={'ko'}
              events={officetelsLotto.data?.data} 
              contentHeight={700}
              datesSet={(arg: DatesSetArg) => {
                  setEvents([...events, { title: "additional", start: arg.start }]);
                  }}
              />

          </CalendarStyle>
        </Container>
    
      </>
  );
};

export default Home;