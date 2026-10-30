import React from "react";

/* ---------- Data (replace with API data) ---------- */
const stats = [
  { label: "Lessons Done", value: "8/9", gradient: "from-blue-600 to-violet-600", icon: "book" },
  { label: "Simulation Passed", value: "1", gradient: "from-emerald-500 to-teal-700", icon: "check" },
  { label: "Practice Sessions", value: "2", gradient: "from-rose-500 to-pink-600", icon: "cards" },
];

const subjects = [
  { name: "BGB", pct: 17, bar: "bg-orange-500", chip: "orange" },
  { name: "Strafrecht", pct: 34, bar: "bg-yellow-400", chip: "yellow" },
  { name: "Gewerberecht", pct: 51, bar: "bg-green-500", chip: "green" },
  { name: "Datenschutzrecht", pct: 21, bar: "bg-red-500", chip: "red" },
  { name: "Unfallerhütung", pct: 47, bar: "bg-cyan-500", chip: "red" },
  { name: "Sicherheitstechnik", pct: 0, bar: "bg-slate-400", chip: "red" },
  { name: "Umgang mit Menschen", pct: 0, bar: "bg-slate-400", chip: "red" },
];

const exams = [
  { date: "Aug 24, 2026", exam: "§34a IHK Übungsprüfung (82 Fragen, Partial)", score: "120 / 8", pct: 24, time: "61m 0s", result: "fail" },
  { date: "Sep 10, 2026", exam: "§34a IHK Übungsprüfung (82 Fragen, Partial)", score: "120 / 8", pct: 90, time: "74m 0s", result: "pass" },
  { date: "Jul 03, 2026", exam: "§34a IHK Übungsprüfung (82 Fragen, Partial)", score: "120 / 8", pct: 88, time: "54m 5s", result: "pass" },
  { date: "Aug 24, 2026", exam: "§34a IHK Übungsprüfung (82 Fragen, Partial)", score: "120 / 8", pct: 24, time: "61m 0s", result: "fail" },
  { date: "Aug 24, 2026", exam: "§34a IHK Übungsprüfung (82 Fragen, Partial)", score: "120 / 8", pct: 24, time: "61m 0s", result: "fail" },
];

const practice = [
  { date: "Aug 24, 2026", exam: "§34a IHK Übungsprüfung (82 Fragen, Partial)", score: "120 / 8", pct: 24, time: "61m 0s" },
  { date: "Sep 10, 2026", exam: "§34a IHK Übungsprüfung (82 Fragen, Partial)", score: "120 / 8", pct: 90, time: "74m 0s" },
];

const courses = [
  { name: "Recht der öffentlichen Sicherheit und Ordnung & Gewerberecht", done: 2, total: 2 },
  { name: "Datenschutzrecht", done: 1, total: 1 },
  { name: "Strafrecht und Notwehr", done: 3, total: 3 },
  { name: "Umgang mit Menschen und Deeskalation", done: 2, total: 3 },
  { name: "Sicherheitstechnik und Unfallverhütung", done: 0, total: 3 },
];

/* ---------- Style helpers ---------- */
const chipStyles = {
  orange: "bg-orange-100 text-orange-600 border-orange-200 dark:bg-orange-500/15 dark:text-orange-300 dark:border-orange-500/30",
  yellow: "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-500/15 dark:text-yellow-300 dark:border-yellow-500/30",
  green: "bg-green-100 text-green-700 border-green-200 dark:bg-green-500/15 dark:text-green-300 dark:border-green-500/30",
  red: "bg-red-100 text-red-600 border-red-200 dark:bg-red-500/15 dark:text-red-300 dark:border-red-500/30",
};

const pctColor = (p) =>
  p >= 50 ? "text-green-600 dark:text-green-400" : "text-red-500 dark:text-red-400";

const Card = ({ title, children, className = "" }) => (
  <section
    className={`rounded-xl border border-slate-200 bg-white p-0 shadow-sm sm:p-0 dark:border-slate-800 dark:bg-slate-900 ${className}`}
  >
    {title && (
      <h2 className="text-base font-bold p-5 text-slate-800 dark:text-slate-100">{title}</h2>
    )}
    {children}
  </section>
);

const Icon = ({ name }) => {
  const paths = {
    book: "M11.25 4.37808C9.13095 2.92228 6.18953 2.25933 3.99433 2.01127C2.89642 1.88721 2 2.80402 2 3.93518V15.2C2 16.3311 2.89642 17.2483 3.99433 17.3723C6.18953 17.6204 9.13095 18.2833 11.25 19.7391V4.37808ZM12.75 19.7391C14.869 18.2833 17.8105 17.6204 20.0057 17.3723C21.1036 17.2483 22 16.3311 22 15.2V3.93518C22 2.80402 21.1036 1.88721 20.0057 2.01127C17.8105 2.25933 14.869 2.92228 12.75 4.37808V19.7391ZM4.25882 7.13996C4.32221 6.73063 4.70543 6.45019 5.11477 6.51358C6.41754 6.71534 7.88469 7.05257 9.27049 7.58846C9.65682 7.73786 9.8489 8.17215 9.6995 8.55849C9.55011 8.94482 9.11581 9.1369 8.72948 8.9875C7.47083 8.50078 6.11398 8.18621 4.8852 7.99591C4.47587 7.93252 4.19543 7.5493 4.25882 7.13996ZM5.11477 10.5136C4.70543 10.4502 4.32221 10.7306 4.25882 11.14C4.19543 11.5493 4.47587 11.9325 4.8852 11.9959C5.50444 12.0918 6.15812 12.2196 6.81651 12.3857C7.21814 12.487 7.62587 12.2436 7.7272 11.8419C7.82853 11.4403 7.58509 11.0326 7.18346 10.9313C6.47445 10.7524 5.7745 10.6158 5.11477 10.5136Z",
    check: "M5 12l5 5 9-10",
    cards: "M6 4V10C6 11.1046 6.89543 12 8 12H20C21.1046 12 22 11.1046 22 10V4C22 2.89543 21.1046 2 20 2H8C6.89543 2 6 2.89543 6 4ZM17.427 8.38342C17.7676 8.6192 17.8525 9.08641 17.6167 9.42698L12.6898 15.5436L11.4565 14.6898L16.3835 8.57316C16.6192 8.2326 17.0864 8.14765 17.427 8.38342ZM5 7C6.10457 7 7 7.89543 7 9C7 10.1046 6.10457 11 5 11C3.89543 11 3 10.1046 3 9C3 7.89543 3.89543 7 5 7ZM8 15V15.5L11.2428 13.8C11.9317 13.3616 12.8466 13.5776 13.2667 14.2778C13.6738 14.9564 13.4624 15.836 12.7913 16.2554L8.76426 18.3973C8.52344 18.5478 8.2634 18.6407 8 18.68V21C8 21.5523 7.55228 22 7 22H3C2.44772 22 2 21.5523 2 21V15C2 13.3431 3.34315 12 5 12C6.65685 12 8 13.3431 8 15ZM9.25 6C9.25 5.58579 9.58579 5.25 10 5.25L18 5.25C18.4142 5.25 18.75 5.58579 18.75 6C18.75 6.41421 18.4142 6.75 18 6.75L10 6.75C9.58579 6.75 9.25 6.41421 9.25 6ZM9.25 9C9.25 8.58579 9.58579 8.25 10 8.25L14 8.25C14.4142 8.25 14.75 8.58579 14.75 9C14.75 9.41421 14.4142 9.75 14 9.75L10 9.75C9.58579 9.75 9.25 9.41421 9.25 9Z",
  };
  return (
    <span className="flex h-11 w-11 items-center justify-center border border-white-50 rounded-full absolute left-3 top-3 bg-white/20">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={paths[name]} />
      </svg>
    </span>
  );
};

const ResultBadge = ({ result }) =>
  result === "pass" ? (
    <span className="inline-flex items-center rounded-full border border-green-300 bg-green-100 p-1 gap-1 text-xs font-medium text-green-700 dark:border-green-500/40 dark:bg-green-500/15 dark:text-green-300">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_48_1960)">
<path d="M6.66675 10.0001L8.77898 11.9011C9.13857 12.2247 9.69724 12.1752 9.99425 11.7933L13.3334 7.50008M10.0001 18.3334C14.6025 18.3334 18.3334 14.6025 18.3334 10.0001C18.3334 5.39771 14.6025 1.66675 10.0001 1.66675C5.39771 1.66675 1.66675 5.39771 1.66675 10.0001C1.66675 14.6025 5.39771 18.3334 10.0001 18.3334Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#089152"/>
</g>
<defs>
<clipPath id="clip0_48_1960">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
  Passed
    </span>
  ) : (
    <span className="inline-flex items-center rounded-full border border-red-300 bg-red-100 p-1 gap-1 text-xs font-medium text-red-600 dark:border-red-500/40 dark:bg-red-500/15 dark:text-red-300">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3571 12.3571L7.64306 7.64306M7.64306 12.3571L12.3571 7.64306M10.0001 18.3334C14.6025 18.3334 18.3334 14.6025 18.3334 10.0001C18.3334 5.39771 14.6025 1.66675 10.0001 1.66675C5.39771 1.66675 1.66675 5.39771 1.66675 10.0001C1.66675 14.6025 5.39771 18.3334 10.0001 18.3334Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#EB1D1D"/>
</svg>
  Not Passed
    </span>
  );

/* ---------- Sections ---------- */
const StatCards = () => (
 <section className="rounded-3xl bg-white p-4 shadow-sm sm:p-6 dark:bg-slate-900 ">
    <h1 className="mb-5 font-['Poppins',ui-sans-serif,system-ui,sans-serif] text-2xl font-bold text-slate-900 dark:text-white">
      My Progress
    </h1>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
      {stats.map((s) => (
        <div
          key={s.label}
          className={`relative flex min-h-[140px] flex-col items-center justify-center overflow-hidden rounded-3xl border bg-gradient-to-br ${s.gradient} ${s.border} px-6 py-5 text-center text-white transition duration-200 ease-out hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:scale-[0.99] motion-reduce:transition-none motion-reduce:hover:transform-none dark:bg-[#18213f] dark:hover:shadow-black/40 cursor-pointer`}
        >
          {/* concentric decoration, bottom-right */}
          <div className="pointer-events-none absolute -bottom-16 -right-1 h-36 w-36 rounded-full border-2 border-white/25" />
          <div className="pointer-events-none absolute -bottom-12 right-3 h-28 w-28 rounded-full border border-white/20" />
          <Icon name={s.icon} />
          <p className="max-w-[9rem] text-base font-medium leading-snug sm:text-lg">{s.label}</p>
          <p className="mt-1 text-4xl font-bold leading-none sm:text-5xl">{s.value}</p>
        </div>
      ))}
    </div>
  </section>
);

const SubjectResults = () => (
  <Card title="Results by subject area (all attempts)">
    <ul className="space-y-5 px-10 py-4 border-t border-slate-200">
      {subjects.map((s) => (
        <li key={s.name}>
          <div className="mb-1.5 flex items-center justify-between gap-2">
            <div className="flex min-w-0 flex-wrap items-center gap-2">
              <span className="text-base font-semibold text-slate-700 dark:text-slate-200">{s.name}</span>
              <span className={`rounded-full border px-1.5 py-0.5 text-[10px] ${chipStyles[s.chip]}`}>
                Needs work
              </span>
            </div>
            <span className="text-base font-medium text-slate-700 dark:text-slate-200">{s.pct}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800">
            <div
              className={`h-2 rounded-full ${s.bar}`}
              style={{ width: `${Math.max(s.pct, 2)}%` }}
              role="progressbar"
              aria-valuenow={s.pct}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={s.name}
            />
          </div>
        </li>
      ))}
    </ul>
  </Card>
);

const ExamHistory = () => (
  <Card title="Exam Simulation History">
    {/* Table on md+, stacked cards on mobile */}
    <div className="hidden overflow-x-auto md:block">
      <table className="w-full min-w-[640px] text-left text-xs">
        <thead>
          <tr className="bg-[#F4F4F4] text-slate-500 dark:bg-slate-800/60 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
            {["Date", "Exam", "Score", "%", "Time", "Result"].map((h, i) => (
              <th key={h} className={`px-4 py-6 text-base font-semibold ${i === 5 ? "text-right" : ""}`}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
          {exams.map((e, i) => (
            <tr key={i} className="text-slate-600 dark:text-slate-300">
              <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                <span className={`mr-2 inline-block h-2 w-2 rounded-full ${e.result === "pass" ? "bg-green-500" : "bg-red-500"}`} />
                {e.date}
              </td>
              <td className="px-4 py-3 text-sm text-[#637594]">{e.exam}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-[#637594]">{e.score}</td>
              <td className={`px-4 py-3 font-medium text-sm ${pctColor(e.pct)}`}>{e.pct}%</td>
              <td className="px-4 py-3 whitespace-nowrap text-base flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99992 7.99992H7.24992C7.24992 8.32274 7.45649 8.60934 7.76275 8.71143L7.99992 7.99992ZM8.74992 4.66658C8.74992 4.25237 8.41413 3.91658 7.99992 3.91658C7.5857 3.91658 7.24992 4.25237 7.24992 4.66658H7.99992H8.74992ZM9.76275 9.3781C10.1557 9.50908 10.5804 9.29671 10.7114 8.90376C10.8424 8.5108 10.63 8.08606 10.2371 7.95507L9.99992 8.66658L9.76275 9.3781ZM7.99992 7.99992H8.74992V4.66658H7.99992H7.24992V7.99992H7.99992ZM7.99992 7.99992L7.76275 8.71143L9.76275 9.3781L9.99992 8.66658L10.2371 7.95507L8.23709 7.28841L7.99992 7.99992ZM14.6666 7.99992H13.9166C13.9166 11.2676 11.2676 13.9166 7.99992 13.9166V14.6666V15.4166C12.096 15.4166 15.4166 12.096 15.4166 7.99992H14.6666ZM7.99992 14.6666V13.9166C4.73223 13.9166 2.08325 11.2676 2.08325 7.99992H1.33325H0.583252C0.583252 12.096 3.90381 15.4166 7.99992 15.4166V14.6666ZM1.33325 7.99992H2.08325C2.08325 4.73223 4.73223 2.08325 7.99992 2.08325V1.33325V0.583252C3.90381 0.583252 0.583252 3.90381 0.583252 7.99992H1.33325ZM7.99992 1.33325V2.08325C11.2676 2.08325 13.9166 4.73223 13.9166 7.99992H14.6666H15.4166C15.4166 3.90381 12.096 0.583252 7.99992 0.583252V1.33325Z" fill="#617596"/>
</svg>
{e.time}</td>
              <td className="px-4 py-3 text-right"><ResultBadge result={e.result} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <ul className="space-y-3 md:hidden">
      {exams.map((e, i) => (
        <li key={i} className="rounded-lg border border-slate-200 p-3 text-xs dark:border-slate-800">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-medium text-slate-700 dark:text-slate-200">{e.date}</span>
            <ResultBadge result={e.result} />
          </div>
          <p className="mb-2 text-slate-500 dark:text-slate-400">{e.exam}</p>
          <div className="flex justify-between text-slate-600 dark:text-slate-300">
            <span className="text-sm">{e.score}</span>
            <span className={`font-medium text-sm ${pctColor(e.pct)}`}>{e.pct}%</span>
            <span className="text-sm">{e.time}</span>
          </div>
        </li>
      ))}
    </ul>
  </Card>
);

const PracticeHistory = () => (
  <Card title="Practice Exercise History">
    <div className="overflow-x-auto">
      <table className="w-full min-w-[520px] text-left text-xs">
        <thead>
          <tr className="bg-[#F4F4F4] text-slate-500 dark:bg-slate-800/60 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
            {["Date", "Exam", "Score", "%", "Time"].map((h) => (
              <th key={h} className="px-4 py-6 text-base font-semibold ">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
          {practice.map((p, i) => (
            <tr key={i} className="text-slate-600 dark:text-slate-300">
              <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                <span className={`mr-2 inline-block h-2 w-2 rounded-full ${p.pct >= 50 ? "bg-green-500" : "bg-red-500"}`} />
                {p.date}
              </td>
              <td className="px-4 py-3 text-sm">{p.exam}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm">{p.score}</td>
              <td className={`px-4 py-3 font-medium text-sm ${pctColor(p.pct)}`}>{p.pct}%</td>
              <td className="px-4 py-3 whitespace-nowrap text-base flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99992 7.99992H7.24992C7.24992 8.32274 7.45649 8.60934 7.76275 8.71143L7.99992 7.99992ZM8.74992 4.66658C8.74992 4.25237 8.41413 3.91658 7.99992 3.91658C7.5857 3.91658 7.24992 4.25237 7.24992 4.66658H7.99992H8.74992ZM9.76275 9.3781C10.1557 9.50908 10.5804 9.29671 10.7114 8.90376C10.8424 8.5108 10.63 8.08606 10.2371 7.95507L9.99992 8.66658L9.76275 9.3781ZM7.99992 7.99992H8.74992V4.66658H7.99992H7.24992V7.99992H7.99992ZM7.99992 7.99992L7.76275 8.71143L9.76275 9.3781L9.99992 8.66658L10.2371 7.95507L8.23709 7.28841L7.99992 7.99992ZM14.6666 7.99992H13.9166C13.9166 11.2676 11.2676 13.9166 7.99992 13.9166V14.6666V15.4166C12.096 15.4166 15.4166 12.096 15.4166 7.99992H14.6666ZM7.99992 14.6666V13.9166C4.73223 13.9166 2.08325 11.2676 2.08325 7.99992H1.33325H0.583252C0.583252 12.096 3.90381 15.4166 7.99992 15.4166V14.6666ZM1.33325 7.99992H2.08325C2.08325 4.73223 4.73223 2.08325 7.99992 2.08325V1.33325V0.583252C3.90381 0.583252 0.583252 3.90381 0.583252 7.99992H1.33325ZM7.99992 1.33325V2.08325C11.2676 2.08325 13.9166 4.73223 13.9166 7.99992H14.6666H15.4166C15.4166 3.90381 12.096 0.583252 7.99992 0.583252V1.33325Z" fill="#617596"/>
</svg>
{p.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card>
);

const Flashcards = () => (
  <Card title="Flashcards difficulty overview">
    <div className="mb-4 text-sm text-slate-600 dark:text-slate-300 p-6 pt-2">
    <div className="max-w-lg rounded-2xl bg-slate-100 p-6 dark:bg-slate-800/70">
      <p className="mb-3 text-base font-medium text-slate-600 dark:text-slate-300">Your difficulty ratings</p>
      <div className="my-2 flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-600 dark:text-slate-300">
        <span className="flex items-center gap-1"><i className="h-2 w-2 rounded-full bg-blue-900 dark:bg-blue-500" />Easy: 1</span>
        <span className="flex items-center gap-1"><i className="h-2 w-2 rounded-full bg-secondary" />Medium: 1</span>
        <span className="flex items-center gap-1"><i className="h-2 w-2 rounded-full bg-rose-400" />Difficult: 1</span>
      </div>
      <div className="flex h-3 overflow-hidden rounded-full">
        <div className="w-1/3 bg-primary dark:bg-blue-500" />
        <div className="w-1/3 bg-secondary" />
        <div className="w-1/3 bg-red-500" />
      </div>
      
    </div>
    <div className="mt-4">
      <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">Difficult cards by subject:</p>
      <span className={`rounded-full border px-2 py-0.5 text-[11px] ${chipStyles.red}`}>Strafrecht: 1</span>
    </div>
    </div>
  </Card>
);

const CoursesProgress = () => {
  const done = courses.reduce((a, c) => a + c.done, 0);
  const total = 12;
  const pct = Math.round((done / total) * 100);
  return (
    <Card title="Courses Progress">
      <div className="p-6 pt-2 border-t border-slate-200 dark:border-slate-800">
      <div className="mb-1 mt-2 flex justify-between text-[12px] text-slate-500 dark:text-slate-400">
        <span>Lesson Completed</span>
        <span>{done}/{total}</span>
      </div>
      <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800">
        <div className="h-2 rounded-full bg-blue-900 dark:bg-blue-500" style={{ width: `${pct}%` }} />
      </div>
      <p className="mt-1 text-right text-[12px] text-slate-500 dark:text-slate-400">{pct}%</p>

      <ul className="mt-4 space-y-3">
        {courses.map((c) => (
          <li key={c.name} className="flex items-start justify-between gap-3 text-base text-slate-600 dark:text-slate-300">
            <span className="flex items-start gap-2">
              <i className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${c.done === c.total ? "bg-blue-900 dark:bg-blue-400" : "bg-slate-400"}`} />
              {c.name}
            </span>
            <span className="shrink-0 font-semibold text-slate-800 dark:text-slate-100">{c.done}/{c.total}</span>
          </li>
        ))}
      </ul>
    </div>
    </Card>
  );
};

/* ---------- Page ---------- */
export default function ProgressBoard() {
  return (
    <main className="min-h-screen text-slate-800 dark:bg-slate-950 dark:text-slate-100 ">
      <div className="mx-auto space-y-6">

        <StatCards />
        <SubjectResults />
        <ExamHistory />
        <PracticeHistory />

        <div className="grid gap-6 lg:grid-cols-1">
          <Flashcards />
          <CoursesProgress />
        </div>
      </div>
    </main>
  );
}
