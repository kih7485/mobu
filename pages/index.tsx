import { useEffect, useState } from "react";
import FullCalendar, { DatesSetArg, EventInput } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; 
import { Box, Container } from "@mui/material";
import { NextPage } from "next";
import getAptSales, {getAPTLttotPblancDetail} from './api/aptSale';
import { useQuery, useQueries } from "@tanstack/react-query";
import CalendarStyle from "../components/calendar/CalendarStyle";
import APTLttotPblancDetail from "../types/APTLttotPblancDetail";
import { AxiosError } from "axios";
import getUrbtyOfctlLttotPblancDetail from "./api/officetels";
import UrbtyOfctlLttotPblancDetail from "../types/UrbtyOfctlLttotPblancDetail";

interface Props {
  type: string,
  data: APTLttotPblancDetail[] | UrbtyOfctlLttotPblancDetail[]
} 
 
const Home: NextPage = () => { 
  const [events, setEvents] = useState<EventInput[]>([
    { title: "initial event1", start: new Date() }, 
  ]);  
  const { isLoading, isError, data, error } = useQuery<Props, AxiosError, Props>(['getAPTLttotPblancDetail'], getAPTLttotPblancDetail);
  
// const results = useQueries({
//   queries: [
//     { queryKey: ['post', 1], queryFn: getAPTLttotPblancDetail(), staleTime: Infinity},
//     { queryKey: ['post', 2], queryFn: getUrbtyOfctlLttotPblancDetail(), staleTime: Infinity}
//   ] 
// })

// const results = useQueries({
//   queries: [
//     { queryKey: ['apart', 1], queryFn: getAPTLttotPblancDetail(), staleTime: Infinity},
//     { queryKey: ['apart', 2], queryFn: getUrbtyOfctlLttotPblancDetail(), staleTime: Infinity}
//   ]
// })

  // console.log(results, "results");
  
    return ( 
      <>
        <Container maxWidth="xl">
          <CalendarStyle>
            <FullCalendar
              plugins={[dayGridPlugin]}
              locale={'ko'}
              events={data?.data} 
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