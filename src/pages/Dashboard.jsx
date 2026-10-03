import Topbar from "../components/Topbar";
import ActiveLeads from "../components/ActiveLeads";
import AppointmentsCard from "../components/AppointmentsCard";
import BgsPendingCard from "../components/BgsPendingCard";
import ConfirmedCard from "../components/ConfirmedCard";
import PipelineDistribution from "../components/PipelineDistribution ";
import Trendanalysis from "../components/Trendanalysis";
import Footer from "../components/Footer";
import AppointmentTable from "../components/AppointmentTable";

export default function Dashboard({ onMenuClick }) {
  return (
    <>
      <Topbar
        title="Sales Dashboard"
        subtitle="Monday, 07 Sep 2026"
        actionLabel="New Deal"
        onMenuClick={onMenuClick}
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <ActiveLeads />
          <AppointmentsCard />
          <BgsPendingCard />
          <ConfirmedCard />
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mb-6">
        <PipelineDistribution />
        <Trendanalysis />
      </section>

      <section>
        <AppointmentTable />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
