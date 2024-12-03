import { Col, Row, Stack } from "react-bootstrap";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";

// import "@fullcalendar/core/main.";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";

import { useRef } from "react"
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




const EventVisualize = () => {

    return (
        <>
            <Row>
                <Col xs={1}></Col>
                <Col xs={5} className="visualSpread">

                    {/* <MapView /> */}
                    <MapPointer />
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
                <Col xs={5}>
                    <CalendarView />
                </Col>
                <Col xs={1}></Col>
            </Row>

        </>
    )


}

export default EventVisualize;