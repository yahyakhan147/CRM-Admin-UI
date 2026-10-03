import Topbar from "../components/Topbar";
import InterestedLeads from "../components/InterestedLeads";
import Footer from "../components/Footer";

export default function Participants({ onMenuClick }) {
  return (
    <>
      <Topbar
        title="Customers"
        subtitle="13 Total, 15% Conversion."
        actionLabel="New Lead"
        onMenuClick={onMenuClick}
      />
      <InterestedLeads />
      <Footer />
    </>
  );
}
