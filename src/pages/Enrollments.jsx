import Topbar from "../components/Topbar";
import EnrollmentList from "../components/EnrollmentList";
import Footer from "../components/Footer";
export default function Enrollments({ onMenuClick }) {
  return (
    <>
      <Topbar
        title="Enrollments"
        subtitle="Participants who have been enrolled"
        actionLabel="New Enrollment"
        onMenuClick={onMenuClick}
      />
      <EnrollmentList />
        <Footer />
    </>
  );
}
