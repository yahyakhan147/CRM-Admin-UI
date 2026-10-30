const WEAK = [
  "Unfallverhütung – 0%",
  "Sicherheitstechnik – 0%",
  "Umgang mit Menschen – 0%",
];

const ICONS = {
  law: <span className="text-lg font-bold leading-none text-blue-600 dark:text-blue-400">§</span>,
  scale: (
    <svg className="h-5 w-5 text-slate-500 dark:text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 4v16M8 20h8M5 7h14M5 7l-3 7a3.500 3.500 0 0 0 6 0L5 7zm14 0-3 7a3.500 3.500 0 0 0 6 0l-3-7z" />
    </svg>
  ),
  table: (
    <svg className="h-5 w-5 text-teal-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 9h8M8 12h8M8 15h8" />
    </svg>
  ),
  shield: (
    <svg className="h-5 w-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 3 9 9-9 9-9-9z" />
      <path d="m12 8 4 4-4 4-4-4z" fill="currentColor" />
    </svg>
  ),
};

const TONES = {
  orange: { bar: "bg-orange-500", text: "text-orange-500" },
  yellow: { bar: "bg-yellow-400", text: "text-yellow-500" },
  green: { bar: "bg-green-500", text: "text-green-500" },
  red: { bar: "bg-red-500", text: "text-red-500" },
};

const SUBJECTS = [
  { name: "BGB", sub: "Civil law", done: 50, total: 200, pct: 17, tone: "orange", icon: "law" },
  { name: "Strafrecht", sub: "Criminal law", done: 50, total: 170, pct: 34, tone: "yellow", icon: "scale" },
  { name: "Gewerberecht", sub: "Trade regulations", done: 50, total: 170, pct: 51, tone: "green", icon: "table" },
  { name: "Datenschutzrecht", sub: "Data protection", done: 50, total: 170, pct: 2, tone: "red", icon: "shield" },
  { name: "Strafrecht", sub: "Criminal law", done: 50, total: 170, pct: 34, tone: "yellow", icon: "scale" },
  { name: "Gewerberecht", sub: "Trade regulations", done: 50, total: 170, pct: 51, tone: "green", icon: "table" },
  { name: "Datenschutzrecht", sub: "Data protection", done: 50, total: 170, pct: 2, tone: "red", icon: "shield" },
];

export default function PracticeExerBoard() {
  return (
    <>
    <main className="mx-auto space-y-5">
  <section className="rounded-3xl bg-white p-5 sm:p-7 shadow-sm dark:bg-[#121a33] dark:shadow-none">
    <h1 className="text-xl sm:text-2xl font-bold text-[#0d0d1f] dark:text-white">Practice Exercises</h1>
    <p className="mt-0.5 text-xs sm:text-sm text-slate2 dark:text-slate-400">Practice at your own pace, no time pressure, per-subject feedback to identify weak areas.</p>

    <div className="mt-6 flex items-center gap-4">
      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#e3ebff] text-blue-600 dark:bg-blue-500/15 dark:text-blue-400">
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2c.6 4.800 3.200 7.400 8 8-4.800.6-7.400 3.200-8 8-.6-4.800-3.200-7.400-8-8 4.800-.6 7.400-3.200 8-8z"/></svg>
      </span>
      <div className="min-w-0">
        <h2 className="text-xl sm:text-2xl font-bold leading-tight text-navy dark:text-white">§34a IHK Übungsprüfung</h2>
        <p className="mt-1 text-sm sm:text-base text-slate2 dark:text-slate-400">Sachkundeprüfung §34a GewO &nbsp;·&nbsp; IHK-Vorbereitung</p>
      </div>
    </div>

    <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-slate2 sm:flex sm:flex-wrap sm:gap-x-10 dark:text-slate-400">
      <li className="flex items-center gap-2"><svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.500" fill="currentColor"/></svg>No time limit</li>
      <li className="flex items-center gap-2"><svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 10 10-10 10L2 12z"/></svg>Immediate feedback per answer</li>
      <li className="flex items-center gap-2"><svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.500-5.800M20 4v4h-4"/></svg>2 attempts</li>
    </ul>

  
    <div className="mt-6 flex items-start gap-3 rounded-2xl border border-red-300 bg-[#fbe4e4] p-3 sm:p-4 lg:max-w-[85%] dark:border-red-400/30 dark:bg-red-500/10" role="note">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-red-200 text-red-600 dark:bg-red-500/20 dark:text-red-300">
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg>
      </span>
      <div className="min-w-0">
        <p className="text-xs font-bold text-red-600 dark:text-red-300">Areas needing improvement:</p>
        <div className="mt-1.5 flex flex-wrap gap-2">
          {WEAK.map((area) => (
            <span key={area} className="rounded-full bg-red-200 px-3 py-1 text-[11px] font-medium text-red-600 dark:bg-red-500/20 dark:text-red-300">{area}</span>
          ))}
        </div>
      </div>
    </div>
  </section>

  <section className="overflow-hidden rounded-3xl border border-slate-300 bg-white shadow-sm dark:border-white/10 dark:bg-[#121a33] dark:shadow-none">
    <header className="border-b border-slate-200 px-5 py-4 sm:px-7 dark:border-white/10">
      <h2 className="text-sm font-semibold text-navy dark:text-white">Last Attempt – results by subject</h2>
    </header>
    <ul className="space-y-4 px-4 py-5 sm:px-6">
      {SUBJECTS.map((subject, index) => {
        const tone = TONES[subject.tone];
        return (
          <li key={`${subject.name}-${index}`} className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#eef1fa] dark:bg-white/10">{ICONS[subject.icon]}</span>
            <div className="min-w-0 flex-1">
              <div className="flex items-end justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-base font-semibold leading-tight text-navy dark:text-white">{subject.name}</p>
                  <p className="text-xs text-slate2 dark:text-slate-400">{subject.sub}</p>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-0.5 sm:flex-row sm:items-baseline sm:gap-4">
                  <span className="text-[11px] font-semibold text-slate2 dark:text-slate-400 sm:text-xs">{subject.done} / {subject.total} Completed</span>
                  <span className={`text-sm font-bold ${tone.text}`}>{subject.pct}%</span>
                </div>
              </div>
              <div className="mt-1.5 h-2 rounded-full bg-[#e6ecf8] dark:bg-white/10" role="progressbar" aria-label={`${subject.name} progress`} aria-valuemin="0" aria-valuemax="100" aria-valuenow={subject.pct}>
                <div className={`h-full rounded-full ${tone.bar}`} style={{ width: `${subject.pct}%` }} />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
    <div className="px-4 pb-6 sm:px-6">
      <a href="#" className="ml-12 inline-flex items-center gap-2 rounded text-sm font-semibold text-blue-600 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:ml-[3.25rem] dark:text-blue-400">Full answer review <span aria-hidden="true">→</span></a>
    </div>
  </section>

</main>
    </>
  );
}
