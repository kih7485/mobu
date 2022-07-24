import { useEffect, useState } from "react";
import FullCalendar, { DatesSetArg, EventInput } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import { Box, Container } from "@mui/material";
import { NextPage } from "next";
import getAptSales from './api/aptSale';
import { useQuery } from "@tanstack/react-query";
// import CalendarStyle from "../components/calendar/CalendarStyle";
 
const Home: NextPage = () => {
  const [events, setEvents] = useState<EventInput[]>([
    { title: "initial event1", start: new Date() }, 
  ]);  
  const { isLoading, isError, data, error }: any = useQuery(['aptSales'], getAptSales);
  
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
          <FullCalendar
            plugins={[dayGridPlugin]}
            events={data} 
            contentHeight={700}
            datesSet={(arg: DatesSetArg) => {
                setEvents([...events, { title: "additional", start: arg.start }]);
                }}
            />
        </Container>
    
      </>
  );
};

export default Home;