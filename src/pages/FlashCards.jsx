import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import FlashCardsTabs from "../components/FlashCardsTabs";

export default function FlashCards({ onMenuClick }) {
  return (
    <>
      <Topbar
              title="Welcome, Fatima"
              subtitle="Student! You’re doing great."
              onMenuClick={onMenuClick}
            />
      <FlashCardsTabs />
      <Footer />
    </>
  );
}
