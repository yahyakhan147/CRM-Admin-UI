import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import ScheduleCalendar from "../components/ScheduleCalendar";

export default function MySchedule({ onMenuClick }) {
  return (
    <>
      <Topbar
              title="Welcome, Fatima"
              subtitle="Student! You’re doing great."
              onMenuClick={onMenuClick}
            />
      <ScheduleCalendar />
      <Footer />
    </>
  );
}
