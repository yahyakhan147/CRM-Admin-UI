import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import CertificateCard from "../components/CertificateCard";

export default function Certificates({ onMenuClick }) {
  return (
    <>
      <Topbar
          title="Welcome, Fatima"
          subtitle="Student! You’re doing great."
          onMenuClick={onMenuClick}
      />
      <CertificateCard/>
      <Footer />
    </>
  );
}
