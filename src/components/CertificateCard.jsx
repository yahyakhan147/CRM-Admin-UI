import React from "react";

/* ---------- Data (replace with API data) ---------- */
const certificates = [
  {
    id: "MAB-2026-0001-FA",
    title: "Sachkundeprüfung §34a GewO (IHK-Vorbereitung)",
    issuedOn: "23.9.2026",
    pdfStatus: "pending", // "pending" | "ready"
    verifyUrl: "#",
  },
];

/* ---------- Icons (copy & paste your own SVGs here) ---------- */
const Svg = ({ children, className = "h-5 w-5", fill = "none", ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill={fill}
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

const SparkleIcon = (props) => (
  <Svg fill="currentColor" strokeWidth="1" {...props}>
    <path d="M12 2c.5 5.5 4.5 9.5 10 10-5.5.5-9.5 4.5-10 10-.5-5.5-4.5-9.5-10-10 5.5-.5 9.5-4.5 10-10z" />
  </Svg>
);

const ShieldCheckIcon = (props) => (
  <Svg {...props}>
    <path d="M12 3l7 3v5.5c0 4.4-2.9 8.1-7 9.5-4.1-1.4-7-5.1-7-9.5V6l7-3z" />
    <path d="M8.8 12.2l2.2 2.2 4.2-4.4" />
  </Svg>
);

const CalendarListIcon = (props) => (
  <Svg {...props}>
    <rect x="4" y="4.5" width="16" height="16" rx="3" />
    <path d="M9 3v3m6-3v3M8 11h8M8 15h8" />
  </Svg>
);

const ArrowRightIcon = (props) => (
  <Svg strokeWidth="2.5" {...props}>
    <path d="M5 12h14m-6-6l6 6-6 6" />
  </Svg>
);

/* ---------- Card ---------- */
const statusStyles = {
  pending:
    "bg-orange-200 text-orange-900 dark:bg-orange-500/25 dark:text-orange-200",
  ready:
    "bg-green-200 text-green-900 dark:bg-green-500/25 dark:text-green-200",
};

const CertificateCard = ({ cert }) => (
  <article className="rounded-3xl bg-neutral-100 p-4 sm:p-5 dark:bg-slate-800 transition duration-200 ease-out hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:scale-[0.99] motion-reduce:transition-none motion-reduce:hover:transform-none cursor-pointer dark:hover:shadow-black/40">
    {/* Top */}
    <div className="flex items-start gap-3 sm:gap-4">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-500 sm:h-[60px] sm:w-[60px] dark:bg-blue-500/20 dark:text-blue-400">
        <SparkleIcon className="h-6 w-6" />
      </span>

      <div className="min-w-0 flex-1">
        <h3 className="text-base font-bold leading-snug text-slate-900 sm:text-base dark:text-white">
          {cert.title}
        </h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
          <CalendarListIcon className="h-5 w-6 text-slate-800 dark:text-slate-200" />
          Issued on {cert.issuedOn}
        </p>
      </div>

      <ShieldCheckIcon
        className="mt-2 h-14 w-8 shrink-0 text-blue-600 dark:text-blue-400"
        aria-label="Verified"
      />
    </div>

    <hr className="my-4 border-indigo-200 dark:border-slate-600" />

    {/* Bottom */}
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Certificate ID
        </p>
        <p className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white">{cert.id}</p>
        <span
          className={`mt-3 inline-block rounded-full px-3 py-1 text-xs ${statusStyles[cert.pdfStatus]}`}
        >
          {cert.pdfStatus === "pending" ? "PDF pending" : "PDF ready"}
        </span>
      </div>

      <a
        href={cert.verifyUrl}
        className="inline-flex w-full items-center justify-center gap-2.5 rounded-md bg-[#00275b] px-5 py-3.5 text-sm font-medium text-secondary transition hover:bg-[#003273] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 sm:w-auto sm:min-w-[226px] dark:ring-1 dark:ring-white/10 dark:focus-visible:ring-offset-slate-800"
      >
        <ShieldCheckIcon className="h-5 w-5" />
        Verify certificate
        <ArrowRightIcon className="h-5 w-5" />
      </a>
    </div>
  </article>
);

/* ---------- Page ---------- */
export default function Certificates() {
  return (
    <main className="min-h-screen bg-[#f3f6fd] dark:bg-slate-950 ">
      <section className="mx-auto min-h-[60vh] rounded-[28px] bg-white p-4 shadow-sm sm:p-6 dark:bg-slate-900">
        <h1 className="mb-5 text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
          Certificates
        </h1>

        {certificates.length ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
            {certificates.map((c) => (
              <CertificateCard key={c.id} cert={c} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-slate-500 dark:text-slate-400">No certificates yet.</p>
        )}
      </section>
    </main>
  );
}