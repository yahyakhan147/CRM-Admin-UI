import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import HomeWorkCards from "../components/HomeWorkCards";

export default function HomeWork({ onMenuClick }) {
  return (
    <>
      <Topbar
          title="Welcome, Fatima"
          subtitle="Student! You’re doing great."
          onMenuClick={onMenuClick}
      />
      <HomeWorkCards />
      <Footer />
    </>
  );
}
