import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import DocumentsCard from "../components/DocumentsCard";

export default function Documents({ onMenuClick }) {
  return (
    <>
      <Topbar
          title="Welcome, Fatima"
          subtitle="Student! You’re doing great."
          onMenuClick={onMenuClick}
      />
      <DocumentsCard />
      <Footer />
    </>
  );
}
