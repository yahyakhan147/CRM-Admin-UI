import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import EnrollmentEntries from "../components/EnrollmentEntries";
export default function EnrollmentsLeads({ onMenuClick }) {
  return (
    <>
      <Topbar
        title="Enrollments"
        subtitle="Participants who have been enrolled"
        actionLabel="New Enrollment"
        onMenuClick={onMenuClick}
      />
      <EnrollmentEntries />
        <Footer />
    </>
  );
}
