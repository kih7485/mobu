import { useState } from "react";
import Layout from "../components/Layout";
import FullCalendar, { DatesSetArg, EventInput } from "@fullcalendar/react";
import Header from '../components/Header'
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import { Container } from "@mui/material";

const Schedule = () => {
  const [events, setEvents] = useState<EventInput[]>([
    { title: "initial event1", start: new Date() },
  ]);

    return ( 
      <>
        <Header />
        <Container maxWidth="xl">
            <FullCalendar
                plugins={[dayGridPlugin]}
                events={events}
                datesSet={(arg: DatesSetArg) => {
                setEvents([...events, { title: "additional", start: arg.start }]);
                }}
            />
                
        </Container>
    
      </>
  );
};

export default Schedule;