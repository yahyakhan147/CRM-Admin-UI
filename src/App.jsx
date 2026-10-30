import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import NewCustomer from "./pages/NewCustomer";
import Participants from "./pages/Participants";
import Enrollments from "./pages/Enrollments";
import EnrollmentsLeads from "./pages/EnrollmentsLeads";
import Calendar from "./pages/Calendar";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import ProfileSetting from "./pages/ProfileSetting";
import StudentDashboard from "./pages/StudentDashboard";
import MyCourse from "./pages/MyCourse";
import LearningAreaPage from "./pages/LearningAreaPage";
import MySchedule from "./pages/MySchedule";
import Attendance from "./pages/Attendance";
import ExamSimulation from "./pages/ExamSimulation";
import PracticeExercise from "./pages/PracticeExercise";
import FlashCards from "./pages/FlashCards";
import MyProgress from "./pages/MyProgress";
import Certificates from "./pages/Certificates";
import Funding from "./pages/Funding";
import Documents from "./pages/Documents";
import HomeWork from "./pages/HomeWork";
import ContactBox from "./pages/ContactBox";
import CourseDetails from "./pages/CourseDetails";
import LessonView from "./pages/LessonView";
import PracticeExam from "./pages/PracticeExam";
import ExamSimulationRun from "./pages/ExamSimulationRun";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const syncDarkMode = (event) => {
      document.documentElement.classList.toggle("dark", event.matches);
    };

    syncDarkMode(mediaQuery);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", syncDarkMode);
      return () => mediaQuery.removeEventListener("change", syncDarkMode);
    }

    mediaQuery.addListener(syncDarkMode);
    return () => mediaQuery.removeListener(syncDarkMode);
  }, []);

  return (
    <div
      className={
        isLoginPage
          ? "min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100"
          : "flex min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100"
      }
    >
      {!isLoginPage && <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />}
      <main className={isLoginPage ? "min-h-screen w-full bg-slate-100 dark:bg-slate-950" : "flex-1 min-w-0 bg-slate-100 px-6 py-8 dark:bg-slate-950 md:px-10 lg:px-6 xl:px-8"}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard onMenuClick={() => setMenuOpen(true)} />} />   
            <Route path="/student-dashboard" element={<StudentDashboard onMenuClick={() => setMenuOpen(true)} />} />
              <Route path="/my-course" element={<MyCourse onMenuClick={() => setMenuOpen(true)} />} />
              <Route path="/my-schedule" element={<MySchedule onMenuClick={() => setMenuOpen(true)} />} />
              <Route path="/Attendance" element={<Attendance onMenuClick={() => setMenuOpen(true)} />} />
              <Route path="/exam-simulation" element={<ExamSimulation title="Exam Simulation" onMenuClick={() => setMenuOpen(true)} />} />
              <Route path="/practice-exercises" element={<PracticeExercise title="Practices Exercises" onMenuClick={() => setMenuOpen(true)} />} />
              <Route path="/my-progress" element={<MyProgress title="My Progress" onMenuClick={() => setMenuOpen(true)} />} />
              <Route path="/flash-cards" element={<FlashCards title="Flashcards" onMenuClick={() => setMenuOpen(true)} />} />
          <Route path="/certificates" element={<Certificates onMenuClick={() => setMenuOpen(true)} />} />
          <Route path="/documents" element={<Documents onMenuClick={() => setMenuOpen(true)} />} />
          <Route path="/homework" element={<HomeWork onMenuClick={() => setMenuOpen(true)} />} />
          <Route path="/learning-area" element={<LearningAreaPage onMenuClick={() => setMenuOpen(true)} />} />
          <Route path="/funding" element={<Funding onMenuClick={() => setMenuOpen(true)} />} />
          <Route path="/New Customer" element={<NewCustomer onMenuClick={() => setMenuOpen(true)} />} />
          <Route path="/Participants" element={<Participants onMenuClick={() => setMenuOpen(true)} />} />
          <Route path="/Enrollments" element={<Enrollments onMenuClick={() => setMenuOpen(true)} />} />
          <Route path="/EnrollmentLeads" element={<EnrollmentsLeads onMenuClick={() => setMenuOpen(true)} />} />
          <Route path="/calendar" element={<Calendar onMenuClick={() => setMenuOpen(true)} />} />
          <Route path="/chat" element={<Chat onMenuClick={() => setMenuOpen(true)} />} />
            <Route path="/practice-exam" element={<PracticeExam onMenuClick={() => setMenuOpen(true)} />} />
            <Route path="/exam-simulation-run" element={<ExamSimulationRun onMenuClick={() => setMenuOpen(true)} />} />
          <Route path="/profile-settings" element={<ProfileSetting onMenuClick={() => setMenuOpen(true)} />} />
          <Route path="/ContactBox" element={<ContactBox onMenuClick={() => setMenuOpen(true)} />} />
            <Route path="/course-details" element={<CourseDetails onMenuClick={() => setMenuOpen(true)} />} />
            <Route path="/lesson-view/" element={<LessonView onMenuClick={() => setMenuOpen(true)} />} />
        </Routes>
      </main>
    </div>
  );
}
