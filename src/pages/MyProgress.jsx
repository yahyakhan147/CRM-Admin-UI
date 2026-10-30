import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import ProgressBoard from "../components/ProgressBoard";

export default function MyProgress({ onMenuClick }) {
  return (
    <>
      <Topbar
          title="Welcome, Fatima"
          subtitle="Student! You’re doing great."
          onMenuClick={onMenuClick}
      />
      <ProgressBoard/>
      <Footer />
    </>
  );
}
