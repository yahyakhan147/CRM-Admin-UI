import React, { useState } from "react";

/* ---------- Data (replace with API data) ---------- */
const tabs = [
  { id: "teacher", label: "Contact with Teacher" },
  { id: "admin", label: "Contact with Administrator" },
  { id: "complaint", label: "Write a complaint" },
];

const complaints = [
  {
    id: 1,
    title: "The Role of Technology & Innovation in Operations Management",
    submitted: "8/19/2026",
    category: "Operations",
    status: "open", // "open" | "resolved"
  },
  {
    id: 2,
    title: "Room temperature issue in Raum A1",
    submitted: "8/19/2026",
    category: "Facilities",
    status: "open",
  },
];

/* ---------- Icons (paste your own SVG paths here) ---------- */
const Svg = ({ children, className = "h-5 w-5", ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...rest}
  >
    {children}
  </svg>
);

const ChatIcon = (p) => (
  <Svg {...p}>
    <path d="M12 4c4.7 0 8.5 3.1 8.5 7s-3.8 7-8.5 7c-1 0-2-.1-2.9-.4L5 19.5l1-3.4C4.5 14.9 3.5 13.1 3.5 11c0-3.9 3.8-7 8.5-7z" />
    <path d="M8.5 10.5h7M8.5 13.5h4" />
  </Svg>
);
const ArrowRightIcon = (p) => (
  <Svg strokeWidth="2.5" {...p}>
    <path d="M5 12h14m-6-6l6 6-6 6" />
  </Svg>
);

/* ---------- Shared styles ---------- */
const fieldCls =
  "w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-blue-500/30";

const statusStyles = {
  open: {
    cls: "bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-300",
    dot: "bg-red-600 dark:bg-red-400",
    label: "Open",
  },
  resolved: {
    cls: "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
    dot: "bg-green-600 dark:bg-green-400",
    label: "Resolved",
  },
};

const StatusPill = ({ status, className = "" }) => {
  const s = statusStyles[status];
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold ${s.cls} ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
};

/* ---------- Tabs ---------- */
const Tabs = ({ active, onChange }) => (
  <div
    role="tablist"
    className="flex gap-1 overflow-x-auto rounded-md border border-slate-200 bg-slate-50 p-1 sm:gap-4 dark:border-slate-700 dark:bg-slate-800"
  >
    {tabs.map((t) => {
      const isActive = active === t.id;
      return (
        <button
          key={t.id}
          role="tab"
          type="button"
          aria-selected={isActive}
          onClick={() => onChange(t.id)}
          className={`shrink-0 whitespace-nowrap rounded-md border px-4 py-2.5 text-base font-medium transition sm:px-6 ${
            isActive
              ? "border-yellow-600/40 bg-yellow-500 text-[#0b2a5b] dark:border-yellow-400/40 dark:bg-yellow-500 dark:text-slate-900"
              : "border-transparent text-[#0b2a5b] hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700"
          }`}
        >
          {t.label}
        </button>
      );
    })}
  </div>
);

/* ---------- Forms ---------- */
const ComplaintForm = ({ onSubmit }) => {
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");
  const [anonymous, setAnonymous] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.({ subject: subject.trim(), details: details.trim(), anonymous });
    setSubject("");
    setDetails("");
    setAnonymous(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white">Submit a Complaint</h3>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Tell us what happened. Your feedback helps us improve.
      </p>

      <label htmlFor="subject" className="mb-2 mt-5 block text-sm font-semibold text-slate-900 dark:text-slate-100">
        Subject *
      </label>
      <input
        id="subject"
        type="text"
        required
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Enter a clear, short subject"
        className={`${fieldCls} h-12`}
      />

      <label htmlFor="details" className="mb-2 mt-5 block text-sm font-semibold text-slate-900 dark:text-slate-100">
        Details *
      </label>
      <textarea
        id="details"
        required
        rows={4}
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder="Describe your concern and include any helpful details…"
        className={`${fieldCls} min-h-[108px] resize-y py-3`}
      />

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={anonymous}
            onChange={(e) => setAnonymous(e.target.checked)}
            className="mt-0.5 h-5 w-5 shrink-0 rounded border-slate-300 text-[#1e3f6e] focus:ring-2 focus:ring-blue-300 dark:border-slate-600 dark:bg-slate-900"
          />
          <span>
            <span className="block text-sm font-medium text-slate-900 dark:text-white">Submit anonymously</span>
            <span className="block text-[11px] text-slate-500 dark:text-slate-400">
              Your name will not be visible to reviewers
            </span>
          </span>
        </label>

        <button
          type="submit"
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#1e3f6e] px-8 text-sm font-semibold text-secondary transition hover:bg-[#17325a] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 sm:w-auto sm:min-w-[210px] dark:ring-1 dark:ring-white/10 dark:focus-visible:ring-offset-slate-900"
        >
          Submit Complaint
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
};

const Placeholder = ({ text }) => (
  <p className="mt-6 rounded-xl bg-slate-50 p-6 text-sm text-slate-500 dark:bg-slate-800 dark:text-slate-400">
    {text}
  </p>
);

/* ---------- Complaint list ---------- */
const ComplaintItem = ({ c }) => (
  <li className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:gap-4 sm:px-5 dark:border-slate-700 dark:bg-slate-900">
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 sm:h-14 sm:w-14 dark:bg-blue-500/20 dark:text-blue-300">
      <ChatIcon className="h-5 w-5 sm:h-6 sm:w-6" />
    </span>

    <div className="min-w-0 flex-1">
      <h4 className="text-[15px] font-semibold leading-snug text-slate-900 sm:text-base dark:text-white">
        {c.title}
      </h4>
      <p className="mt-1 text-xs text-slate-500 sm:text-sm dark:text-slate-400">Submitted {c.submitted}</p>
      <span className="mt-1.5 inline-block rounded-full bg-blue-50 px-3 py-0.5 text-[11px] text-slate-500 dark:bg-slate-800 dark:text-slate-300">
        {c.category}
      </span>
      <div className="mt-3 sm:hidden">
        <StatusPill status={c.status} />
      </div>
    </div>

    <StatusPill status={c.status} className="hidden shrink-0 sm:inline-flex" />
  </li>
);

/* ---------- Page ---------- */
export default function ContactBox() {
  const [tab, setTab] = useState("complaint");

  return (
    <main className="min-h-screen bg-[#f3f6fd] dark:bg-slate-950">
      <section className="mx-auto rounded-[28px] bg-white p-4 shadow-sm sm:p-8 dark:bg-slate-900">
        <h1 className="lg:text-2xl font-bold text-slate-900 sm:text-xl dark:text-white">Contact Box</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Your complaint goes directly to the Owner, Shift Coordinator, and Quality Manager.
        </p>

        {/* Form card */}
        <div className="mt-6 overflow-hidden rounded-3xl border border-t-4 border-slate-200 border-t-[#1e3f6e] bg-white p-4 sm:p-7 dark:border-slate-700 dark:border-t-blue-500 dark:bg-slate-900">
          <Tabs active={tab} onChange={setTab} />

          {tab === "complaint" && (
            <ComplaintForm onSubmit={(data) => console.log("complaint", data)} />
          )}
          {tab === "teacher" && <Placeholder text="Message form for your teacher goes here." />}
          {tab === "admin" && <Placeholder text="Message form for the administrator goes here." />}
        </div>

        {/* Submitted complaints */}
        <h2 className="mb-4 mt-8 text-xl font-bold text-slate-900 dark:text-white">My Submitted Complaints</h2>
        <ul className="space-y-3">
          {complaints.map((c) => (
            <ComplaintItem key={c.id} c={c} />
          ))}
        </ul>
      </section>
    </main>
  );
}