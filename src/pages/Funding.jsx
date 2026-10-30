import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import FundingCards from "../components/FundingCards";

export default function Funding({ onMenuClick }) {
  return (
    <>
      <Topbar
          title="Welcome, Fatima"
          subtitle="Student! You’re doing great."
          onMenuClick={onMenuClick}
      />
      <FundingCards/>
      <Footer />
    </>
  );
}
