import { useEffect, useState } from "react";
import FullCalendar, { DatesSetArg, EventInput } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; 
import { Box, Container } from "@mui/material";
import { NextPage } from "next";
import getAptSales, {getAPTLttotPblancDetail} from './api/aptSale';
import { useQuery } from "@tanstack/react-query";
import CalendarStyle from "../components/calendar/CalendarStyle";
import APTLttotPblancDetail from "../types/APTLttotPblancDetail";
import { AxiosError } from "axios";

interface Props {
  type: string,
  data: APTLttotPblancDetail[] 
} 
 
const Home: NextPage = () => { 
  const [events, setEvents] = useState<EventInput[]>([
    { title: "initial event1", start: new Date() }, 
  ]);  
  const { isLoading, isError, data, error } = useQuery<Props, AxiosError, Props>(['getAPTLttotPblancDetail'], getAPTLttotPblancDetail);
   
  if (isLoading) {
    return <span>Loading...</span> 
  } 

  if (isError) {
    return <span>Error: {error.message}</span> 
  }
  // if (data) {
  //   setSalesApt(data.data);
  // }

  console.log(data, "data");
  // const query = useQuery(['home'], getAptSales);  
  // const [aptSales, setAptSales] = useState(data?.data); 
  
    return ( 
      <>
        <Container maxWidth="xl">
          <CalendarStyle>
            <FullCalendar
              plugins={[dayGridPlugin]}
              locale={'ko'}
              events={data.data} 
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