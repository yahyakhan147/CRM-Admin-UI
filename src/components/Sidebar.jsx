import { NavLink } from "react-router-dom";
import { X, LogOut } from "lucide-react";
import { useState } from "react";

function DashboardIcon(props) {
  const { size = 24, ...rest } = props;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z" fill="currentColor"/>
    </svg>
  );
}

function CustomerIcon(props) {
  const { size = 24, ...rest } = props;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 11C19.0871 11 20.9253 12.0656 22.0002 13.6825L21.9993 17H14L13.999 18.952L14.0215 20H2V19C2 15.6863 4.68629 13 8 13C9.37834 13 10.6509 13.4657 11.6662 14.2518C12.662 12.3204 14.6768 11 17 11ZM8 15C6.26204 15 4.78296 16.1084 4.23109 17.6569L4.16936 17.8447L4.126 18H11.873L11.8362 17.8625C11.3827 16.3295 10.0355 15.1846 8.4051 15.0203L8.19987 15.0049L8 15ZM17 13C15.6048 13 14.3764 13.7144 13.6606 14.7973L13.535 15H20.464L20.3707 14.845C19.6927 13.7872 18.5304 13.0708 17.2007 13.005L17 13ZM8 4C10.2091 4 12 5.79086 12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4ZM17 4C18.6569 4 20 5.34315 20 7C20 8.65685 18.6569 10 17 10C15.3431 10 14 8.65685 14 7C14 5.34315 15.3431 4 17 4ZM8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6ZM17 6C16.7239 6 16 6 16 6C16 6 16 6.72386 16 7C16 7.27614 16 8 16 8C16 8 16.7239 8 17 8C17.2761 8 18 8 18 8C18 8 18 7.27614 18 7C18 6.86441 18 6 18 6C18 6 17.1356 6 17 6Z" fill="currentColor"/>
</svg>
  );
}

function TargetIcon(props) {
  const { size = 18, ...rest } = props;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_336_25)">
<path d="M12 9C14.21 9 16 7.21 16 5C16 2.79 14.21 1 12 1C9.79 1 8 2.79 8 5C8 7.21 9.79 9 12 9ZM12 3C13.1 3 14 3.9 14 5C14 6.1 13.1 7 12 7C10.9 7 10 6.1 10 5C10 3.9 10.9 3 12 3ZM12 11.55C9.64 9.35 6.48 8 3 8V19C6.48 19 9.64 20.35 12 22.55C14.36 20.36 17.52 19 21 19V8C17.52 8 14.36 9.35 12 11.55ZM19 17.13C16.47 17.47 14.07 18.43 12 19.95C9.94 18.43 7.53 17.46 5 17.12V10.17C7.1 10.55 9.05 11.52 10.64 13L12 14.28L13.36 13.01C14.95 11.53 16.9 10.56 19 10.18V17.13Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_336_25">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
  );
}

function UsersIcon(props) {
  const { size = 18, ...rest } = props;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.393 3.08026C12.6263 3.17944 12.8122 3.36304 12.9126 3.59335L14.9554 8.27719L20.098 8.74815C20.6445 8.79819 21.0464 9.27618 20.9957 9.81576C20.9722 10.0654 20.8529 10.2968 20.6621 10.4623L16.782 13.828L17.9175 18.8029C18.0382 19.3316 17.702 19.8567 17.1666 19.9758C16.9189 20.031 16.6591 19.9904 16.4408 19.8623L12 17.2586L7.55917 19.8623C7.08728 20.139 6.4776 19.9856 6.19741 19.5196C6.06775 19.304 6.02662 19.0476 6.08245 18.8029L7.21798 13.828L3.33788 10.4623C2.92558 10.1046 2.88497 9.48469 3.24717 9.07757C3.41477 8.88918 3.64907 8.77131 3.90194 8.74815L9.04454 8.27719L11.0873 3.59335C11.3044 3.09565 11.889 2.86593 12.393 3.08026ZM13.5968 10.1236L12 6.46162L10.4031 10.1236L6.38164 10.4914L9.41619 13.1228L8.52801 17.0114L12 14.9764L15.4709 17.0114L14.5838 13.1228L17.6173 10.4914L13.5968 10.1236Z" fill="currentColor"/>
</svg>

  );
}

function CalendarIcon(props) {
  const { size = 18, ...rest } = props;
  return (
    <svg width="24" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_36_298)">
<path d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V10H20V21ZM20 8H4V5H20V8Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_36_298">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
  );
}
function ChatIcon(props) {
  const { size = 24, ...rest } = props;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.2L4 17.2V4H20V16ZM17 11H15V9H17V11ZM13 11H11V9H13V11ZM9 11H7V9H9" fill="currentColor"/>
</svg>
  );
}

const defaultLinks = [
  { to: "/", label: "Dashboard", icon: DashboardIcon, end: true },
  { to: "/New Customer", label: "New Customer", icon: CustomerIcon },
  { to: "/Participants", label: "Participants", icon: TargetIcon },
  { to: "/Enrollments", label: "Enrollments", icon: UsersIcon },
  { to: "/calendar", label: "Calendar", icon: CalendarIcon },
  { to: "/chat", label: "Chat", icon: ChatIcon },
];

export default function Sidebar({ open, onClose, links = defaultLinks, onLogout }) {
  const [lang, setLang] = useState("en");
  return (
    <>
      {/* Backdrop — only rendered on mobile when menu is open */}
      {open && (
        <div
          onClick={onClose}
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-ink/50 md:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col w-72 shrink-0 rounded-2xl bg-gradient-to-b from-[#002F65] via-[#064385] to-[#0D58A7] text-white/90 px-8 py-6 shadow-[0_20px_60px_rgba(2,6,23,0.45)] transform transition-transform duration-200 ease-out dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 md:static md:translate-x-0 md:flex md:min-h-screen ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-center px-2 mb-8">
          <div className="flex items-center gap-2">
            <img src="/assets/images/logo.png" alt="Logo" className="w-32 h-auto" />
          </div>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="md:hidden p-1 text-white/60 hover:text-white dark:text-slate-300 dark:hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-4">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "bg-[#D1A41A] text-[#012F65] font-semibold dark:bg-yellow-400 dark:text-slate-950"
                    : "text-white/60 hover:bg-white/5 hover:text-white dark:text-slate-300 dark:hover:bg-slate-700/60 dark:hover:text-white"
                }`
              }
            >
              <Icon size={18} className="shrink-0 text-current" />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Log out */}
        <div className="mt-auto">
      <div className="pb-4">
              <button
                onClick={onLogout}
                className="flex w-full items-center gap-4 px-3 py-3 rounded-lg text-base font-medium text-red-500 hover:bg-red-500/10 transition-colors dark:text-red-400 dark:hover:bg-red-500/10"
              >
                <LogOut size={22} />
                Log Out
              </button>
            </div>

            {/* Divider */}
            <div className="border-t border-white/90 dark:border-slate-700" />

            {/* Language switcher */}
            <div className="flex items-center gap-4 px-0 pt-6">
              <button
                onClick={() => setLang("de")}
                className={`flex items-center gap-2 text-lg transition-colors ${
                  lang === "de" ? "text-sky-400 dark:text-sky-300" : "text-white/50 hover:text-white/80 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                <img
                  src="https://flagcdn.com/w40/de.png"
                  alt="German"
                  className="w-6 h-6 rounded-full object-cover"
                />
                DE
              </button>
              <button
                onClick={() => setLang("en")}
                className={`flex items-center gap-2 text-lg transition-colors ${
                  lang === "en" ? "text-sky-400 dark:text-sky-300" : "text-white/50 hover:text-white/80 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                <img
                  src="https://flagcdn.com/w40/gb.png"
                  alt="English"
                  className="w-6 h-6 rounded-full object-cover"
                />
                EN
              </button>
            </div>

            {/* Promo card */}
            <div className="p-0 pb-2 mt-6">
              <div className="relative overflow-hidden rounded-xl bg-[#00265a] p-6 dark:bg-slate-900/80 dark:ring-1 dark:ring-slate-700">
                <h3 className="text-lg font-bold text-yellow-500 dark:text-yellow-400">Grow Business</h3>
                <p className="mt-2 max-w-[10rem] text-sm leading-snug text-white dark:text-slate-200">
                  Explore our marketing<br></br> solutions
                </p>
                <button className="mt-4 rounded-lg bg-blue-100 px-6 py-3 text-base font-medium text-[#00265a] transition-colors hover:bg-white dark:bg-sky-500/20 dark:text-sky-200 dark:hover:bg-sky-500/30">
                  Read More
                </button>

                {/* Decorative box illustration (right side) */}
                <div className="pointer-events-none absolute -right-12 bottom-9 h-22 w-22">
                  <div className="absolute -top-14 right-8 flex h-12 w-12 items-center justify-center rounded-full bg-blue-700">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-blue-200">
                      <path d="M12 21s-7-4.35-9.5-9C.9 8.6 2.6 5 6 5c2 0 3.4 1.1 4 2.2C10.6 6.1 12 5 14 5c3.4 0 5.1 3.6 3.5 7-2.5 4.65-5.5 9-5.5 9z" />
                    </svg>
                  </div>
                  <div className="h-14 w-24 rounded-md bg-blue-700" />
                  <div className="absolute -top-3 -left-4 h-3 w-28 -skew-x-[30deg] bg-blue-500" />
                </div>
              </div>
              </div>
        </div>
      

      </aside>
    </>
  );
}
