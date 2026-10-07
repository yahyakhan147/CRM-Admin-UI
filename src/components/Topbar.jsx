import { useEffect, useRef, useState } from "react";
import { Search, Bell, Plus, Menu, ChevronDown, User, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";


/** Closes the dropdown when you click outside its wrapper, or press Escape */
function useClickOutside(onClose) {
  const ref = useRef(null);
  useEffect(() => {
    function handle(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    }
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("mousedown", handle);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handle);
      document.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);
  return ref;
}



export default function Topbar({
  notifications = 5,
  time = "08:47AM",
  status = "Clocked In",
  avatar = "/assets/images/avatar.png",
  userName = "Yahya Khan",
  notificationItems = [
    { id: 1, text: "New lead assigned: Sarah K.", time: "2m ago" },
    { id: 2, text: "Appointment confirmed for 10:00", time: "1h ago" },
    { id: 3, text: "BGS #482 is now overdue", time: "3h ago" },
  ],
  title = "Dashboard",
  subtitle = "Monday, 07 Sep 2026",
  onMenuClick,
}) {
  const navigate = useNavigate();
  const [bellOpen, setBellOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [clockStatus, setClockStatus] = useState(status);

  const bellRef = useClickOutside(() => setBellOpen(false));
  const menuRef = useClickOutside(() => setMenuOpen(false));

  const toggleClockStatus = () => {
    setClockStatus((current) =>
      current === "Clocked In" ? "Clocked Out" : "Clocked In"
    );
  };

  return (
    <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={onMenuClick}
          aria-label="Open menu"
          className="min-[1025px]:hidden shrink-0 rounded-lg border border-slate-200 bg-white p-2 text-slate-600 shadow-card hover:text-ink dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-white"
        >
          <Menu size={18} />
        </button>
        <div className="min-w-0">
          {userName && (
            <p className="text-sm font-semibold text-[#707EAE] dark:text-slate-300">Welcome back, <span className="text-ink dark:text-slate-100">{userName}</span></p>
          )}
          <h1 className="font-display text-3xl font-semibold text-ink truncate dark:text-slate-100">{title}</h1>
          {subtitle && <p className="mt-1 truncate text-sm font-semibold text-[#707EAE] dark:text-slate-300">{subtitle}</p>}
        </div>
      </div>

      <div className="flex w-full items-center gap-6 rounded-full bg-white p-2 shadow-[0_10px_40px_-10px_rgba(30,64,175,0.15)] dark:bg-slate-900 dark:shadow-[0_10px_40px_-10px_rgba(2,6,23,0.8)] lg:w-auto lg:min-w-[34rem] lg:justify-end">
      {/* Search */}
      <div className="flex h-10 flex-1 items-center gap-3 rounded-full bg-[#f3f6ff] px-7 dark:bg-slate-800">
        <Search size={16} className="shrink-0 text-[#0a2258] dark:text-slate-200" />
        <input
          type="text"
          placeholder="Search"
          className="h-full w-full bg-transparent text-sm text-slate-700 placeholder:text-indigo-300 focus:outline-none dark:text-slate-100 dark:placeholder:text-slate-400"
        />
      </div>

      {/* Notification bell + dropdown */}
      <div ref={bellRef} className="relative shrink-0 items-center justify-center flex">
        <button
          aria-label="Notifications"
          aria-expanded={bellOpen}
          onClick={() => {
            setBellOpen((v) => !v);
            setMenuOpen(false);
          }}
          className="relative text-indigo-400 transition-colors hover:text-indigo-600"
        >
          <Bell size={18} />
          {notifications > 0 && (
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white ring-2 ring-white">
              {notifications}
            </span>
          )}
        </button>

        {bellOpen && (
          <div className="absolute right-0 top-full z-50 mt-3 w-80 overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_-12px_rgba(30,64,175,0.25)] ring-1 ring-slate-100 dark:bg-slate-900 dark:shadow-[0_20px_50px_-12px_rgba(2,6,23,0.7)] dark:ring-slate-700">
            <div className="flex items-center justify-between px-5 py-4">
              <p className="text-sm font-semibold text-[#0a2258] dark:text-slate-100">Notifications</p>
              <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                {notifications} new
              </span>
            </div>
            <div className="max-h-72 overflow-y-auto">
              {notificationItems.map((n) => (
                <button
                  key={n.id}
                  className="flex w-full flex-col items-start gap-0.5 border-t border-slate-50 px-5 py-3 text-left transition-colors hover:bg-[#f3f6ff] dark:border-slate-700 dark:hover:bg-slate-800"
                >
                  <p className="text-sm text-slate-700 dark:text-slate-200">{n.text}</p>
                  <p className="text-xs text-indigo-300 dark:text-slate-400">{n.time}</p>
                </button>
              ))}
            </div>
            <button className="w-full border-t border-slate-50 py-3 text-center text-sm font-medium text-blue-600 hover:bg-[#f3f6ff] dark:border-slate-700 dark:text-blue-300 dark:hover:bg-slate-800">
              View all
            </button>
          </div>
        )}
      </div>

      {/* Clock in status */}
      <div
        className="hidden shrink-0 cursor-pointer leading-tight sm:block"
        onClick={toggleClockStatus}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleClockStatus();
          }
        }}
        role="button"
        tabIndex={0}
      >
        <p className="text-xs font-medium text-[#0a2258] dark:text-slate-200">{time}</p>
        <p
          className={`text-xs font-medium ${
            clockStatus === "Clocked Out" ? "text-red-500" : "text-indigo-400"
          }`}
        >
          {clockStatus}
        </p>
      </div>

      {/* Avatar + dropdown */}
      <div ref={menuRef} className="relative mr-2 shrink-0">
        <button
          className="relative"
          aria-label="Account menu"
          aria-expanded={menuOpen}
          onClick={() => {
            setMenuOpen((v) => !v);
            setBellOpen(false);
          }}
        >
          <img
            src={avatar}
            alt={userName}
            className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
          />
          <span className="absolute -left-1 -top-1 h-[14px] w-[14px] rounded-full bg-green-500 ring-2 ring-white" />
          <span className="absolute -bottom-1 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-indigo-400 shadow-md ring-1 ring-slate-100">
            <ChevronDown size={10} strokeWidth={3} />
          </span>
        </button>

        {menuOpen && (
          <div className="absolute right-0 top-full z-50 mt-3 w-56 overflow-hidden rounded-2xl bg-white py-2 shadow-[0_20px_50px_-12px_rgba(30,64,175,0.25)] ring-1 ring-slate-100 dark:bg-slate-900 dark:shadow-[0_20px_50px_-12px_rgba(2,6,23,0.7)] dark:ring-slate-700">
            <div className="border-b border-slate-50 px-4 py-3 dark:border-slate-700">
              <p className="text-sm font-semibold text-[#0a2258] dark:text-slate-100">{userName}</p>
              <p className="text-xs text-indigo-300 dark:text-slate-400">{status}</p>
            </div>
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/profile-settings");
              }}
              className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-slate-600 transition-colors hover:bg-[#f3f6ff] dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <User size={16} className="text-indigo-400" />
              Profile Settings
            </button>
            <button className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-slate-600 transition-colors hover:bg-[#f3f6ff] dark:text-slate-200 dark:hover:bg-slate-800">
              <Settings size={16} className="text-indigo-400" />
              Settings
            </button>
            <button className="flex w-full items-center gap-3 border-t border-slate-50 px-4 py-2.5 text-sm font-medium text-red-500 transition-colors hover:bg-red-50 dark:border-slate-700 dark:hover:bg-red-500/10">
              <LogOut size={16} />
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
    </header>
  );
}
