import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import ExamSimulationBoard from "../components/ExamSimulationBoard";

export default function ExamSimulation({ onMenuClick }) {
  return (
    <>
      <Topbar
              title="Welcome, Fatima"
              subtitle="Student! You’re doing great."
              onMenuClick={onMenuClick}
            />
      <ExamSimulationBoard />
      <Footer />
    </>
  );
}
