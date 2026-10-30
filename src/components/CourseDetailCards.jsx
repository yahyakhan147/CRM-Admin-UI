import React, { useState } from "react";
import LessonView from "../pages/LessonView";

/* ---------- Data (replace with API data) ---------- */
const course = {
  title: "Sachkundeprüfung §34a GewO (IHK-Vorbereitung)",
  description:
    "Intensivvorbereitung auf die IHK-Sachkundeprüfung §34a GewO. Schriftliche Prüfung: 82 Multiple-Choice-Fragen (Partial-Credit), mündliche Prüfung ca. 15 Min.",
};

const onlineSessions = [
  { id: 1, day: "MON, AUG 10", time: "09:00–17:00", title: "Datenschutzrecht & DSGVO – Online", url: "#" },
  { id: 2, day: "MON, AUG 24", time: "10:00–18:00", title: "Prüfungsvorbereitung – Online Q&A", url: "#" },
];

const inPersonSessions = [
  { id: 1, day: "MON, AUG 03", time: "08:00–16:00", room: "Raum A1", title: "Einführung Gewerberecht §34a" },
  { id: 2, day: "MON, AUG 17", time: "08:00–16:00", room: "Raum A1", title: "Strafrecht & Notwehr" },
];

const topics = [
  {
    id: "t1",
    title: "Recht der öffentlichen Sicherheit und Ordnung & Gewerberecht",
    lessons: [
      { id: 1, title: "Grundlagen des Gewerberechts", type: "Text", done: true },
      { id: 2, title: "Behördliche Erlaubnispflicht und Anforderungen", type: "Text", done: true },
    ],
  },
  {
    id: "t2",
    title: "Datenschutzrecht",
    lessons: [{ id: 3, title: "DSGVO Grundlagen für Sicherheitspersonal", type: "Text", done: true }],
  },
  {
    id: "t3",
    title: "Strafrecht und Notwehr",
    lessons: [
      { id: 4, title: "Notwehr und Nothilfe nach § 32 StGB", type: "Text", done: true },
      { id: 5, title: "Notstand und Festnahmerecht", type: "Text", done: true },
      { id: 6, title: "Straftaten gegen die Person", type: "Text", done: true },
    ],
  },
  {
    id: "t4",
    title: "Umgang mit Menschen und Deeskalation",
    lessons: [
      { id: 7, title: "Grundlagen der Kommunikation", type: "Text", done: true },
      { id: 8, title: "Deeskalationstechniken", type: "Text", done: true },
      { id: 9, title: "Interkulturelle Kompetenz", type: "Text", done: false },
    ],
  },
  {
    id: "t5",
    title: "Sicherheitstechnik und Unfallverhütung",
    lessons: [
      { id: 10, title: "Mechanische Sicherungstechnik", type: "Text", done: false },
      { id: 11, title: "Brandschutz und Erste Hilfe", type: "Text", done: false },
      { id: 12, title: "Unfallverhütungsvorschriften (DGUV)", type: "Text", done: false },
    ],
  },
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

const MonitorIcon = (p) => (
  <Svg {...p}>
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M8 20h8M12 16v4" />
  </Svg>
);
const PinIcon = (p) => (
  <Svg {...p}>
    <path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Svg>
);
const ExternalIcon = (p) => (
  <Svg {...p}>
    <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5" />
  </Svg>
);
const CheckCircleIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 12.3l2.4 2.4 4.6-5" />
  </Svg>
);
const CircleIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
  </Svg>
);
const ChevronRightIcon = (p) => (
  <Svg {...p}>
    <path d="M9 6l6 6-6 6" />
  </Svg>
);

/* ---------- Pieces ---------- */
const SectionTitle = ({ children, sub }) => (
  <div className="mb-3">
    <h2 className="text-lg font-bold text-slate-900 dark:text-white">{children}</h2>
    {sub && <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{sub}</p>}
  </div>
);

const ProgressCard = ({ done, total }) => {
  const pct = Math.round((done / total) * 100);
  return (
    <div className="rounded-2xl border border-slate-200 p-4 sm:p-5 dark:border-slate-700">
      <div className="mb-3 flex items-center justify-between gap-3 text-xs">
        <span className="text-slate-500 dark:text-slate-400">Course Progress</span>
        <span className="font-semibold text-slate-900 dark:text-white">
          {done}/{total} lessons · {pct}%
        </span>
      </div>
      <div
        className="h-2 rounded-full bg-slate-100 dark:bg-slate-800"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="h-2 rounded-full bg-[#1e3f6e] dark:bg-blue-500" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
};

const SessionBox = ({ children, tone, title, Icon }) => {
  const tones = {
    blue: "border-blue-100 bg-blue-50 text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300",
    green: "border-green-100 bg-green-50 text-green-700 dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-300",
  };
  return (
    <div className={`min-h-[190px] rounded-2xl border p-4 sm:p-5 ${tones[tone]}`}>
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
        <Icon className="h-4 w-4" />
        {title}
      </h3>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
};

const sessionItemCls =
  "rounded-lg bg-white px-3 py-2.5 text-[11px] dark:bg-slate-900";

const OnlineSessions = ({ sessions }) => (
  <SessionBox tone="blue" title={`Online Sessions (${sessions.length})`} Icon={MonitorIcon}>
    {sessions.map((s) => (
      <li key={s.id} className={`${sessionItemCls} flex items-center justify-between gap-3`}>
        <div className="min-w-0">
          <p className="uppercase text-slate-500 dark:text-slate-400">{s.day}</p>
          <p className="mt-0.5 text-blue-600 dark:text-blue-300">
            {s.time} <span aria-hidden="true">·</span> {s.title}
          </p>
        </div>
        <a
          href={s.url}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-blue-600 px-4 py-2 text-[11px] font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
        >
          <ExternalIcon className="h-3 w-3" />
          Join
        </a>
      </li>
    ))}
  </SessionBox>
);

const InPersonSessions = ({ sessions }) => (
  <SessionBox tone="green" title={`In-Person Sessions (${sessions.length})`} Icon={PinIcon}>
    {sessions.map((s) => (
      <li key={s.id} className={sessionItemCls}>
        <p className="uppercase text-slate-500 dark:text-slate-400">{s.day}</p>
        <p className="mt-0.5 text-green-700 dark:text-green-300">
          {s.time} <span aria-hidden="true">·</span> {s.room} <span aria-hidden="true">·</span> {s.title}
        </p>
      </li>
    ))}
  </SessionBox>
);

const TopicCard = ({ topic, onToggle }) => {
  const done = topic.lessons.filter((l) => l.done).length;
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">
      <header className="bg-slate-100/80 px-4 py-3 dark:bg-slate-800">
        <h3 className="text-[13px] font-semibold text-slate-900 dark:text-white">{topic.title}</h3>
        <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
          {done}/{topic.lessons.length} lessons
        </p>
      </header>

      <ul className="divide-y divide-slate-100 dark:divide-slate-800">
        {topic.lessons.map((l) => (
          <li
            key={l.id}
            className="flex items-center gap-3 px-4 py-3 text-[13px] transition hover:bg-slate-50 dark:hover:bg-slate-800/60"
          >
            {/* Radio-style completion button (click to mark done / not done) */}
            <button
              type="button"
              aria-pressed={l.done}
              aria-label={`${l.title}: ${l.done ? "completed, click to mark as not completed" : "not completed, click to mark as completed"}`}
              onClick={() => onToggle(topic.id, l.id)}
              className="shrink-0 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
            >
              {l.done ? (
                <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400" />
              ) : (
                <CircleIcon className="h-5 w-5 text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400" />
              )}
            </button>

            {/* Lesson title: hyperlink */}
            <a
              href={l.href || "/lesson-view"}
              className={`min-w-0 flex-1 hover:underline focus:outline-none focus-visible:underline $
                l.done ? "text-slate-500 dark:text-slate-400" : "font-medium text-slate-900 dark:text-white"
              }`}
            >
              {l.title}
            </a>

            <span className="shrink-0 rounded bg-slate-100 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-slate-500 dark:bg-slate-800 dark:text-slate-400">
              {l.type}
            </span>

            {/* Arrow: hyperlink */}
            <a
              href={l.href || "/lesson-view"}
              aria-label={`Open lesson: ${l.title}`}
              className="shrink-0 rounded p-1 text-slate-400 transition hover:text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 dark:hover:text-slate-200"
            >
              <ChevronRightIcon className="h-3.5 w-3.5" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

/* ---------- Page ---------- */
export default function CourseDetail() {
  const [topicList, setTopicList] = useState(topics);

  const toggleLesson = (topicId, lessonId) =>
    setTopicList((prev) =>
      prev.map((t) =>
        t.id === topicId
          ? { ...t, lessons: t.lessons.map((l) => (l.id === lessonId ? { ...l, done: !l.done } : l)) }
          : t
      )
    );

  const total = topicList.reduce((n, t) => n + t.lessons.length, 0);
  const done = topicList.reduce((n, t) => n + t.lessons.filter((l) => l.done).length, 0);

  return (
    <main className="min-h-screen bg-[#f3f6fd] dark:bg-slate-950">
      <div className="mx-auto rounded-[28px] bg-white p-4 shadow-sm sm:p-6 lg:p-8 dark:bg-slate-900">
        <h1 className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">Course Detail</h1>

        <h2 className="mt-6 text-lg font-semibold text-slate-900 sm:text-xl dark:text-white">{course.title}</h2>
        <p className="mt-3 text-xs leading-relaxed text-slate-500 sm:text-[13px] dark:text-slate-400">
          {course.description}
        </p>

        <div className="mt-5">
          <ProgressCard done={done} total={total} />
        </div>

        <div className="mt-8">
          <SectionTitle>Course Sessions</SectionTitle>
          <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
            <OnlineSessions sessions={onlineSessions} />
            <InPersonSessions sessions={inPersonSessions} />
          </div>
        </div>

        <div className="mt-8">
          <SectionTitle sub="Track your progress topic by topic">Course Curriculum</SectionTitle>
          <div className="space-y-4">
            {topicList.map((t) => (
              <TopicCard key={t.id} topic={t} onToggle={toggleLesson} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}