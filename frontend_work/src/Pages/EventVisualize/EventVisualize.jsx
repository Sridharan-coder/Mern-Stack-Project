import { Col, Row, Stack } from "react-bootstrap";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";

// import "@fullcalendar/core/main.";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";

import { useEffect, useRef } from "react"
import {
    ScheduleComponent,
    Day,
    Week,
    WorkWeek,
    Month,
    Agenda,
    Resize,
    DragAndDrop,
    Inject
} from "@syncfusion/ej2-react-schedule"
import CalendarView from "../CalendarView/CalendarView";
import MapView from "../MapView/MapView";
import MapPointer from "../MapPointer/MapPointer";
import axios from "axios";
import OwnCalendarView from "../CalendarView/OwnCalendarView";




const EventVisualize = () => {



    const points = [
        { lat: 51.506, lng: -0.184 },
        { lat: 51.508, lng: -0.175 },
        {  lat: 51.505, lng: -0.164 }
    ];





    useEffect(()=>{
        try{
            // axios.get()
        }
        catch(error){

        }
    },[])

    return (
        <>
            <Row style={{height:"90vh"}}>
                {/* <Col xs={1}></Col> */}
                <Col xs={6} className="visualSpread" style={{paddingLeft:20}}>

                    {/* <MapView /> */}
                    <MapPointer points={points}/>
                </Col>
                {/* <Col xs={6}>
                    <Calendar minDate={new Date()} />
                    <FullCalendar
                defaultView="dayGridMonth"
                themeSystem="Simplex"
                header={{
                  left: "prev,next",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                plugins={[dayGridPlugin]}
                // events={events}
                displayEventEnd="true"
                eventColor={"#" + Math.floor(Math.random() * 16777215).toString(16)}
            />
                </Col> */}
                <Col xs={6} style={{paddingRight:20}}>
                    {/* <CalendarView /> */}
                    <OwnCalendarView />
                </Col>
                {/* <Col xs={1}></Col> */}
            </Row>

        </>
    )


}

export default EventVisualize;