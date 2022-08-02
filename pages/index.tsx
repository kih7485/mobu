import { useEffect, useState } from "react";
import FullCalendar, { DatesSetArg, EventInput } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; 
import { Box, Container } from "@mui/material";
import { NextPage } from "next";
import getAptSales, {getAPTLttotPblancDetail} from './api/aptSale';
import { useQuery, useQueries } from "@tanstack/react-query";
import CalendarStyle from "../components/calendar/CalendarStyle";
import APTLttotPblancDetail from "../types/APTLttotPblancDetail";
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
  const [events2, setEvents2] = useState<any[]>([]);
  
  const results = useQueries({
    queries: [
      { queryKey: ['getAPTLttotPblancDetail'], queryFn: getAPTLttotPblancDetail},
      { queryKey: ['getUrbtyOfctlLttotPblancDetail'], queryFn: getUrbtyOfctlLttotPblancDetail}
    ] 
  })

  const eventList = results.map(result => result.data)
  // console.log(eventList, "eventList"); 
  // useEffect(() => {
  //   setEvents2(eventList);
  
  // }, []);
  
    return ( 
      <>
        <Container maxWidth="xl">
          <CalendarStyle>
            <FullCalendar
              plugins={[dayGridPlugin]}
              locale={'ko'}
              // events={events2} 
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