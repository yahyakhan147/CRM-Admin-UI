import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import AttendanceBoard from "../components/AttendanceBoard";

export default function Attendance({ onMenuClick }) {
  return (
    <>
      <Topbar
              title="Welcome, Fatima"
              subtitle="Student! You’re doing great."
              onMenuClick={onMenuClick}
            />
      <AttendanceBoard />
      <Footer />
    </>
  );
}
