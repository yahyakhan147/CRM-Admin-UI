import React, { useState } from "react";
import { Link } from "react-router-dom";
/* ---------- Data (replace with API data) ---------- */
const pendingTasks = [
  {
    id: "datenschutz",
    title: "Datenschutz",
    course: "Sachkundeprüfung §34a GewO (IHK-Vorbereitung)",
    teacher: "Klaus Weber",
    due: "Aug 28, 2026",
    prompt: "datenschutz",
  },
  {
    id: "notwehr",
    title: "Fallstudie Notwehr",
    course: "Sachkundeprüfung §34a GewO (IHK-Vorbereitung)",
    teacher: "Klaus Weber",
    due: "Oct 10, 2026",
    prompt: "Bearbeiten Sie den Fall auf Seite 42 und begründen Sie, ob Notwehr nach § 32 StGB vorliegt.",
  },
];

const submittedTasks = [
  {
    id: "s1",
    title: "Gewerberecht Zusammenfassung",
    course: "Sachkundeprüfung §34a GewO (IHK-Vorbereitung)",
    submitted: "8/19/2026",
  },
  {
    id: "s2",
    title: "Zusammenfassung DSGVO",
    course: "Sachkundeprüfung §34a GewO (IHK-Vorbereitung)",
    submitted: "9/24/2026",
    grade: "sehr gut (1,3)",
    feedback: "Sauber zusammengefasst. Bei der Speicherbegrenzung fehlt der Bezug zur Löschfrist.",
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

const FileIcon = (p) => (
  <Svg {...p}>
    <path d="M14 3H8a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V7l-4-4z" />
    <path d="M14 3v4h4M9 12h6M9 16h6" />
  </Svg>
);
const CheckIcon = (p) => (
  <Svg strokeWidth="3" {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </Svg>
);
const CheckCircleIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 12.3l2.4 2.4 4.6-5" />
  </Svg>
);

/* ---------- Small pieces ---------- */
const Panel = ({ children, className = "" }) => (
  <section className={`rounded-[28px] bg-white p-4 shadow-sm sm:p-6 dark:bg-slate-900 ${className}`}>
    {children}
  </section>
);

const CountChip = ({ children, tone }) => {
  const tones = {
    amber: "bg-[#FFF2C7] text-[#B85908] dark:bg-[#FFF2C7] dark:text-orange-800",
    green: "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
  };
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${tones[tone]}`}>{children}</span>
  );
};

const Meta = ({ children }) => (
  <p className="mt-1 lg:text-base text-slate-500 sm:text-sm dark:text-slate-400">{children}</p>
);

/* ---------- Pending task card ---------- */
const PendingCard = ({ task, onSubmit }) => {
  const [answer, setAnswer] = useState("");
  const inputId = `answer-${task.id}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim()) onSubmit?.(task.id, answer.trim());
  };

  return (
    <Link to="/Documents" className="block">
    <article className="rounded-3xl border border-l-[5px] border-yellow-200 border-l-yellow-300 bg-yellow-50/60 p-4 sm:p-8 dark:border-yellow-500/30 dark:border-l-yellow-400 dark:bg-yellow-500/5">
      <div className="flex items-start gap-3 sm:gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-orange-600 sm:h-14 sm:w-14 dark:bg-yellow-500/20 dark:text-yellow-300">
          <FileIcon className="h-5 w-5 sm:h-6 sm:w-6" />
        </span>

        <div className="min-w-0 flex-1">
          <h3 className="lg:text-2xl font-bold text-slate-900 sm:text-xl dark:text-white">{task.title}</h3>
          <Meta>
            {task.course} <span aria-hidden="true">·</span> By {task.teacher}
          </Meta>
        </div>

        <span className="hidden shrink-0 rounded-full bg-red-100 px-6 py-2 text-sm font-semibold text-red-600 sm:inline-block dark:bg-red-500/20 dark:text-red-300">
          Due {task.due}
        </span>
      </div>

      <span className="mt-3 inline-block rounded-full bg-red-100 px-3 py-1.5 text-xs font-semibold text-red-600 sm:hidden dark:bg-red-500/20 dark:text-red-300">
        Due {task.due}
      </span>

      <p className="mt-5 rounded-xl bg-blue-50 px-4 py-3.5 text-sm text-slate-800 dark:bg-slate-800 dark:text-slate-200">
        {task.prompt}
      </p>

      <form onSubmit={handleSubmit} className="mt-5">
        <label htmlFor={inputId} className="mb-2 block text-sm font-medium text-slate-800 dark:text-slate-200">
          Your answer *
        </label>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <input
            id={inputId}
            type="text"
            required
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="What is your answer here…"
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
    </Link>
  );
};

/* ---------- Submitted row ---------- */
const SubmittedRow = ({ task }) => (
  <li className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm sm:gap-4 sm:px-5 sm:py-5 dark:bg-slate-900">
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600 sm:h-12 sm:w-12 dark:bg-green-500/20 dark:text-green-400">
      <CheckIcon className="h-5 w-5" />
    </span>

    <div className="min-w-0 flex-1">
      <h3 className="text-base font-semibold text-slate-900 sm:text-lg dark:text-white">{task.title}</h3>
      <Meta>
        {task.course} <span aria-hidden="true">·</span> Submitted {task.submitted}
      </Meta>
      {task.feedback && (
        <p className="mt-1.5 text-[11px] text-slate-500 sm:text-xs dark:text-slate-400">
          Feedback: {task.feedback}
        </p>
      )}
      {task.grade && (
        <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-[11px] font-semibold text-green-700 sm:hidden dark:bg-green-500/20 dark:text-green-300">
          Grade: {task.grade}
        </span>
      )}
    </div>

    {task.grade && (
      <span className="hidden shrink-0 rounded-full bg-green-100 px-5 py-1.5 text-[11px] font-semibold text-green-700 sm:inline-block dark:bg-green-500/20 dark:text-green-300">
        Grade: {task.grade}
      </span>
    )}

    <CheckCircleIcon className="h-5 w-5 shrink-0 text-green-600 sm:mx-3 dark:text-green-400" aria-label="Submitted" />
  </li>
);

/* ---------- Page ---------- */
export default function HomeWork() {
  return (
    <main className="min-h-screen bg-[#f3f6fd] dark:bg-slate-950">
      <div className="mx-auto space-y-6">
        <Panel>
          <h1 className="mb-6 text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">HomeWork</h1>

          <div className="mb-4 mt-8 flex items-center gap-3 sm:px-3">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl dark:text-white">Pending</h2>
            <CountChip tone="amber">{pendingTasks.length}</CountChip>
          </div>

          <div className="space-y-5">
            {pendingTasks.map((t) => (
              <PendingCard key={t.id} task={t} onSubmit={(id, answer) => console.log("submit", id, answer)} />
            ))}
          </div>
        </Panel>

        <section>
          <div className="mb-3 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400">
              <CheckIcon className="h-4 w-4" />
            </span>
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl dark:text-white">Submitted</h2>
            <CountChip tone="green">{submittedTasks.length}</CountChip>
          </div>

          <ul className="space-y-3">
            {submittedTasks.map((t) => (
              <SubmittedRow key={t.id} task={t} />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}