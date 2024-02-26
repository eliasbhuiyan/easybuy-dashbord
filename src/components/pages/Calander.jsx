import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Calander = () => {
  return (
    <div className="w-full h-full p-8">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={[
          { title: "event 1", date: "2024-02-26" },
          { title: "event 2", date: "2019-04-02" },
        ]}
      />
    </div>
  );
};
export default Calander;
