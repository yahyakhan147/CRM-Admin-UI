import React from "react";

/* ---------- Data (replace with API data) ---------- */
const vouchers = [
  {
    id: 1,
    subtitle: "Sachkundeprüfung §34a GewO (IHK-Vorbereitung)",
    title: "Sachkundeprüfung §34a GewO (IHK-Vorbereitung)",
    status: "Verified",
    voucherNumber: "BGS-2026-77421",
    measureNumber: "955/384/2024",
    from: "14.8.2026",
    validUntil: "27.12.2026",
    note: "Verified and recorded",
    detailsUrl: "#",
  },
  {
    id: 2,
    subtitle: "Sachkundeprüfung §34a GewO (IHK-Vorbereitung)",
    title: "Sachkundeprüfung §34a GewO (IHK-Vorbereitung)",
    status: "Verified",
    voucherNumber: "BGS-2026-77421",
    measureNumber: "955/384/2024",
    from: "14.8.2026",
    validUntil: "27.12.2026",
    note: "Verified and recorded",
    detailsUrl: "#",
  },
];

/* ---------- Icons (paste your own SVG paths here) ---------- */
const SparkleIcon = ({ className = "h-8 w-8" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12 2c.5 5.5 4.5 9.5 10 10-5.5.5-9.5 4.5-10 10-.5-5.5-4.5-9.5-10-10 5.5-.5 9.5-4.5 10-10z" />
  </svg>
);

const ArrowRightIcon = ({ className = "h-3.5 w-3.5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M5 12h14m-6-6l6 6-6 6" />
  </svg>
);

/* ---------- Pieces ---------- */
const Field = ({ label, value, align = "left" }) => (
  <div className={align === "right" ? "sm:text-right" : ""}>
    <dt className="text-[11px] font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
      {label}
    </dt>
    <dd className="mt-1 text-[15px] font-semibold text-slate-900 sm:mt-2 sm:text-base dark:text-white">
      {value}
    </dd>
  </div>
);

const VoucherCard = ({ v }) => (
  <article className="rounded-3xl bg-neutral-100 p-4 sm:p-5 dark:bg-slate-800 transition duration-200 ease-out hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:scale-[0.99] motion-reduce:transition-none motion-reduce:hover:transform-none cursor-pointer dark:hover:shadow-black/40">
    {/* Header */}
    <div className="flex items-start gap-3 sm:gap-4">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-500 dark:bg-blue-500/20 dark:text-blue-400">
        <SparkleIcon />
      </span>

      <div className="min-w-0 flex-1 pt-0.5">
        <p className="text-sm text-slate-600 sm:text-sm dark:text-slate-300">{v.subtitle}</p>
        <h3 className="mt-1.5 text-base font-medium leading-snug text-slate-900 sm:text-base dark:text-white">
          {v.title}
        </h3>
      </div>

      <span className="shrink-0 rounded-full bg-green-200 px-3 py-1 text-[11px] font-medium text-green-800 dark:bg-green-500/20 dark:text-green-300">
        {v.status}
      </span>
    </div>

    <hr className="my-4 border-slate-300 sm:mx-1 sm:my-5 dark:border-slate-600" />

    {/* Details */}
    <dl className="grid grid-cols-2 gap-x-4 gap-y-4 px-0 sm:grid-cols-4 sm:px-1">
      <Field label="Voucher number" value={v.voucherNumber} />
      <Field label="Maßnahme number" value={v.measureNumber} />
      <Field label="Von" value={v.from} />
      <Field label="Valid until" value={v.validUntil} align="right" />
    </dl>

    {/* Footer bar */}
    <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-lg bg-blue-100 px-3 py-2 text-xs dark:bg-blue-500/15">
      <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
        <span className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400" />
        {v.note}
      </span>
      <a
        href={v.detailsUrl}
        className="inline-flex items-center gap-1.5 font-semibold text-blue-600 transition hover:text-blue-800 focus:outline-none focus-visible:underline dark:text-blue-400 dark:hover:text-blue-300"
      >
        Voucher details
        <ArrowRightIcon />
      </a>
    </div>
  </article>
);

/* ---------- Page ---------- */
export default function Funding() {
  return (
    <main className="min-h-screen bg-[#f3f6fd] dark:bg-slate-950">
      <section className="mx-auto rounded-[28px] bg-white p-4 shadow-sm sm:p-6 dark:bg-slate-900">
        <h1 className="mb-5 text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
          Funding
        </h1>

        {vouchers.length ? (
          <div className="space-y-5">
            {vouchers.map((v) => (
              <VoucherCard key={v.id} v={v} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-slate-500 dark:text-slate-400">No funding vouchers yet.</p>
        )}
      </section>
    </main>
  );
}