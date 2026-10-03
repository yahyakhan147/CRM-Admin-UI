import Topbar from "../components/Topbar";
import CalendarAppointment from "../components/CalendarAppointment";
import { tasks } from "../data/mockData";
import Footer from "../components/Footer";

export default function Calendar({ onMenuClick }) {
  return (
    <>
      <Topbar
        title="Calendar"
        onMenuClick={onMenuClick}
      />
      <CalendarAppointment tasks={tasks} />
      <Footer />
    </>
  );
}
