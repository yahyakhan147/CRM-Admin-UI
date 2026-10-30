import React, { useState } from "react";

/* ---------- Data (replace with API data) ---------- */
const requiredDocs = [
  {
    id: "police",
    title: "Police Clearance",
    hint: "Bitte bis zum Kursende nachreichen",
    status: "pending",
  },
];

const submittedDocs = [
  { id: 1, type: "Bildungsgutschein", status: "submitted", date: "29.8.2026", url: "#" },
  { id: 2, type: "ID Card", status: "verified", date: "25.8.2026", url: "#" },
];

/* ---------- Icons (paste your own SVG paths here) ---------- */
const Svg = ({ children, className = "h-4 w-4", ...rest }) => (
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

const FileIcon = (p) => (
  <Svg {...p}>
    <path d="M14 3H8a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V7l-4-4z" />
    <path d="M14 3v4h4M9 12h6M9 16h6" />
  </Svg>
);
const ClockDotIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </Svg>
);
const CheckCircleIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 12.3l2.4 2.4 4.6-5" />
  </Svg>
);
const ArrowRightIcon = (p) => (
  <Svg strokeWidth="2.5" {...p}>
    <path d="M5 12h14m-6-6l6 6-6 6" />
  </Svg>
);

/* ---------- Status badge ---------- */
const badgeStyles = {
  pending: {
    cls: "bg-[#FFF2C7] text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300",
    label: "Pending",
    Icon: ClockDotIcon,
  },
  submitted: {
    cls: "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300",
    label: "Submitted",
    Icon: CheckCircleIcon,
  },
  verified: {
    cls: "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
    label: "Verified",
    Icon: CheckCircleIcon,
  },
};

const StatusBadge = ({ status, className = "" }) => {
  const { cls, label, Icon } = badgeStyles[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-5 py-1.5 text-base font-semibold ${cls} ${className}`}
    >
      <Icon className="h-4.5 w-4" />
      {label}
    </span>
  );
};

const Panel = ({ children, className = "" }) => (
  <section
    className={`rounded-[28px] bg-white p-4 shadow-sm sm:p-6 dark:bg-slate-900 ${className}`}
  >
    {children}
  </section>
);

/* ---------- Upload request card ---------- */
const RequiredDocCard = ({ doc, onSubmit }) => {
  const [link, setLink] = useState("");
  const inputId = `link-${doc.id}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (link.trim()) onSubmit?.(doc.id, link.trim());
  };

  return (
    <article className="rounded-3xl border border-l-[5px] border-yellow-300 border-l-yellow-300 bg-yellow-50 p-4 sm:p-8 dark:border-amber-500/30 dark:border-l-secondary dark:bg-yellow-500/5">
      <div className="flex items-start gap-3 sm:gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF2C7] text-orange-600 sm:h-14 sm:w-14 dark:bg-yellow-500/20 dark:text-yellow-300">
          <FileIcon className="h-5 w-5 sm:h-6 sm:w-6" />
        </span>

        <div className="min-w-0 flex-1">
          <h3 className="lg:text-2xl font-semibold text-slate-900 sm:text-xl dark:text-white">
            {doc.title}
          </h3>
          <p className="mt-0.5 text-base text-slate-500 dark:text-slate-400">{doc.hint}</p>
        </div>

        <StatusBadge status={doc.status} className="hidden sm:inline-flex sm:px-6 sm:py-4" />
      </div>

      <StatusBadge status={doc.status} className="mt-3 sm:hidden" />

      <form onSubmit={handleSubmit} className="mt-6 sm:mt-8">
        <label htmlFor={inputId} className="mb-2 block text-sm text-slate-800 dark:text-slate-200">
          Document link (Google Drive, Dropbox, etc.) *
        </label>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <input
            id={inputId}
            type="url"
            required
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="https://drive.google.com/…"
            className="h-12 w-full flex-1 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 sm:h-14 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-blue-500/30"
          />
          <button
            type="submit"
            className="h-12 w-full shrink-0 rounded-xl bg-[#1e3f6e] px-8 text-sm font-semibold text-white transition hover:bg-[#17325a] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 sm:h-14 sm:w-40 dark:ring-1 dark:ring-white/10 dark:focus-visible:ring-offset-slate-900"
          >
            Submit
          </button>
        </div>
      </form>
    </article>
  );
};

/* ---------- Submitted documents ---------- */
const ViewLink = ({ href }) => (
  <a
    href={href}
    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1e3f6e] transition hover:underline dark:text-blue-300"
  >
    View document
    <ArrowRightIcon className="h-3.5 w-3.5" />
  </a>
);

const SubmittedDocs = ({ docs }) => (
  <Panel>
    <div className="mb-4 flex items-center gap-3">
      <h2 className="text-lg font-bold text-slate-900 sm:text-xl dark:text-white">
        Submitted documents
      </h2>
      <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-600 dark:bg-blue-500/20 dark:text-blue-300">
        {docs.length}
      </span>
    </div>

    {/* Table: md and up */}
    <div className="hidden overflow-hidden rounded-2xl border border-slate-200 md:block dark:border-slate-700">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-neutral-100 text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            <th className="px-6 py-4">Document type</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Date submitted</th>
            <th className="px-6 py-4">Document</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
          {docs.map((d) => (
            <tr key={d.id} className="text-sm">
              <td className="px-6 py-5 font-semibold text-slate-900 dark:text-white">{d.type}</td>
              <td className="px-6 py-5">
                <StatusBadge status={d.status} />
              </td>
              <td className="px-6 py-5 text-slate-500 dark:text-slate-400">{d.date}</td>
              <td className="px-6 py-5">
                <ViewLink href={d.url} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Cards: below md */}
    <ul className="space-y-3 md:hidden">
      {docs.map((d) => (
        <li
          key={d.id}
          className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700"
        >
          <div className="flex items-start justify-between gap-3">
            <p className="font-semibold text-slate-900 dark:text-white">{d.type}</p>
            <StatusBadge status={d.status} />
          </div>
          <div className="mt-3 flex items-center justify-between text-sm">
            <span className="text-slate-500 dark:text-slate-400">{d.date}</span>
            <ViewLink href={d.url} />
          </div>
        </li>
      ))}
    </ul>
  </Panel>
);

/* ---------- Page ---------- */
export default function Documents() {
  return (
    <main className="min-h-screen bg-[#f3f6fd] py-4 dark:bg-slate-950">
      <div className="mx-auto space-y-6">
        <Panel>
          <h1 className="mb-5 text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
            Documents
          </h1>
          <div className="space-y-4">
            {requiredDocs.map((d) => (
              <RequiredDocCard
                key={d.id}
                doc={d}
                onSubmit={(id, link) => console.log("submit", id, link)}
              />
            ))}
          </div>
        </Panel>

        <SubmittedDocs docs={submittedDocs} />
      </div>
    </main>
  );
}