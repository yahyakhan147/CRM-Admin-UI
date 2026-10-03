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
          <Route path="/New Customer" element={<NewCustomer onMenuClick={() => setMenuOpen(true)} />} />
          <Route path="/Participants" element={<Participants onMenuClick={() => setMenuOpen(true)} />} />
          <Route path="/Enrollments" element={<Enrollments onMenuClick={() => setMenuOpen(true)} />} />
          <Route path="/EnrollmentLeads" element={<EnrollmentsLeads onMenuClick={() => setMenuOpen(true)} />} />
          <Route path="/calendar" element={<Calendar onMenuClick={() => setMenuOpen(true)} />} />
          <Route path="/chat" element={<Chat onMenuClick={() => setMenuOpen(true)} />} />
          <Route path="/profile-settings" element={<ProfileSetting onMenuClick={() => setMenuOpen(true)} />} />
        </Routes>
      </main>
    </div>
  );
}
