import FullCalendar from "@fullcalendar/react";
import { useRef } from "react";

import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import multiMonthPlugin from "@fullcalendar/multimonth"
import events from "./events";
import CustomModal from "./CustomModal";

const OwnCalendarView = () => {
    const calendarRef = useRef(null);


    return (
        <>
            <FullCalendar
                ref={calendarRef}
                initialView="multiMonthYear"

                multiMonthMinWidth={340}
                displayEventTime={true}
                plugins={[multiMonthPlugin, dayGridPlugin, timeGridPlugin, interactionPlugin]}
                editable={true}
                events={events}
                // droppable={true}
                headerToolbar={{
                    left: "prev,today,next",
                    center: "title",
                    right: "multiMonthYear,dayGridMonth,timeGridWeek,timeGridDay"
                }}

                buttonText={{
                    today: "current",
                    year: "Year",
                    month: "month",
                    week: "week",
                    day: "day",
                    list: "list"
                }}

                eventInteractive={true}
                height={"90vh"}
            />

        </>
    )


}

export default OwnCalendarView;