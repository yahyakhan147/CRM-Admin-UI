import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import ExamSimulationQuest from "../components/ExamSimulationQuest"

export default function ExamSimulationRun({ onMenuClick }) {
  return (
    <>
      <Topbar
          title="Welcome, Fatima"
          subtitle="Student! You’re doing great."
          onMenuClick={onMenuClick}
      />
      <ExamSimulationQuest/>
      <Footer />
    </>
  );
}
