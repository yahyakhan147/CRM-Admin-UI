import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import React from "react";

/* ---------- Data (replace with API data) ---------- */
const lesson = {
  title: "Grundlagen des Gewerberechts",
  topic: "Recht der öffentlichen Sicherheit und Ordnung & Gewerberecht",
  type: "TEXT",
  content:
    "Die §§34a GewO regelt das Bewachungsgewerbe in Deutschland. Wer gewerbsmäßig fremdes Eigentum oder Personen bewacht, bedarf einer Erlaubnis der zuständigen Behörde…",
  completed: true,
  courseUrl: "#",
  nextUrl: "#",
};

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

const ArrowLeftIcon = (p) => (
  <Svg {...p}>
    <path d="M19 12H5m6-6l-6 6 6 6" />
  </Svg>
);
const ArrowRightIcon = (p) => (
  <Svg strokeWidth="2.5" {...p}>
    <path d="M5 12h14m-6-6l6 6-6 6" />
  </Svg>
);
const CheckIcon = (p) => (
  <Svg strokeWidth="2.5" {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </Svg>
);

export default function LessonView({ onMenuClick }) {
  return (
    <>
      <Topbar
        title="Welcome, Fatima"
        subtitle="Student! You’re doing great."
        onMenuClick={onMenuClick}
      />

    <main className="min-h-screen bg-[#f3f6fd] dark:bg-slate-950">
      <section className="mx-auto rounded-[28px] bg-white p-4 shadow-sm sm:p-6 lg:p-8 dark:bg-slate-900">
        <h1 className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">Lesson View</h1>

        <a
          href={"/course-details"}
          className="mt-6 inline-flex items-center gap-1.5 text-sm text-slate-500 transition hover:text-slate-800 focus:outline-none focus-visible:underline dark:text-slate-400 dark:hover:text-slate-200"
        >
          <ArrowLeftIcon />
          Back to Course
        </a>

        <h2 className="mt-5 text-lg font-semibold text-slate-900 sm:text-xl dark:text-white">{lesson.title}</h2>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
          {lesson.topic} <span aria-hidden="true">·</span> {lesson.type}
        </p>

        <article className="mt-6 min-h-[144px] rounded-3xl border border-slate-200 p-4 sm:p-6 dark:border-slate-700">
          <p className="max-w-2xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">{lesson.content}</p>
        </article>

        {lesson.completed && (
          <p
            role="status"
            className="mt-5 inline-flex items-center gap-2 text-sm text-green-600 dark:text-green-400"
          >
            <CheckIcon className="h-4 w-4" />
            Lesson marked as complete!
          </p>
        )}

        <div className="mt-10 border-t border-slate-200 pt-4 sm:mt-14 dark:border-slate-700">
          <div className="flex sm:justify-end">
            <a
              href={lesson.nextUrl}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#1e3f6e] px-8 text-sm font-semibold text-white transition hover:bg-[#17325a] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 sm:w-auto dark:ring-1 dark:ring-white/10 dark:focus-visible:ring-offset-slate-900"
            >
              Next Lesson
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </section>
    </main>
      <Footer />
    </>
  );
}
