import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import ContactBoxTabs from "../components/ContactBoxTabs";

export default function ContactBox({ onMenuClick }) {
  return (
    <>
      <Topbar
          title="Welcome, Fatima"
          subtitle="Student! You’re doing great."
          onMenuClick={onMenuClick}
      />
      <ContactBoxTabs />
      <Footer />
    </>
  );
}
