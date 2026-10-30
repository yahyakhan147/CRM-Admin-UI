import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import PracticeExerciseBoard from "../components/PracticeExerBoard";

export default function PracticeExercise({ onMenuClick }) {
  return (
    <>
      <Topbar
              title="Welcome, Fatima"
              subtitle="Student! You’re doing great."
              onMenuClick={onMenuClick}
            />
      <PracticeExerciseBoard />
      <Footer />
    </>
  );
}
