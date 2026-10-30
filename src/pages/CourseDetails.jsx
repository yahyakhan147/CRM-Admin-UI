import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import CourseDetailsCards from "../components/CourseDetailCards";

export default function CourseDetails({ onMenuClick }) {
  return (
    <>
      <Topbar
          title="Welcome, Fatima"
          subtitle="Student! You’re doing great."
          onMenuClick={onMenuClick}
      />
      <CourseDetailsCards/>
      <Footer />
    </>
  );
}
