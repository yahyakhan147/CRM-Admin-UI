import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import PracitcesQuestion from "../components/PracticesQuestion";

export default function PracticeExam({ onMenuClick }) {
  return (
    <>
      <Topbar
          title="Welcome, Fatima"
          subtitle="Student! You’re doing great."
          onMenuClick={onMenuClick}
      />
      <PracitcesQuestion/>
      <Footer />
    </>
  );
}
