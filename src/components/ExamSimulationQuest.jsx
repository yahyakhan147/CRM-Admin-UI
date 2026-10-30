import React, { useState } from "react";

/* ---------- Data (replace with API data) ---------- */
const exam = {
  title: "§34a IHK Übungsprüfung (82 Fragen, Partial-Credit)",
  totalQuestions: 82,
  scoring: "Partial-Credit",
  mode: "Practice Mode",
  nextLessonUrl: "#",
  questions: [
    {
      id: 1,
      subject: "BGB",
      points: 1,
      text: "Was versteht man unter dem 'Hausrecht'?",
      options: [
        "Das Recht, Personen zu verhaften",
        "Das Recht des Besitzers/Eigentümers, Zutritt zu gewähren oder zu verweigern",
        "Das Recht, Waffen zu tragen",
        "Das Recht, Videoüberwachung durchzuführen",
      ],
    },
    {
      id: 2,
      subject: "Strafrecht",
      points: 1,
      text: "Wann liegt Notwehr nach § 32 StGB vor?",
      options: [
        "Bei jeder Beleidigung",
        "Bei einem gegenwärtigen rechtswidrigen Angriff",
        "Nur bei Angriffen auf Polizisten",
        "Bei Sachbeschädigung in der Vergangenheit",
      ],
    },
    {
      id: 3,
      subject: "Gewerberecht",
      points: 1,
      text: "Welche Behörde erteilt die Erlaubnis nach § 34a GewO?",
      options: ["Die zuständige Behörde", "Die Polizei", "Die IHK allein", "Das Finanzamt"],
    },
    {
      id: 4,
      subject: "Datenschutzrecht",
      points: 2,
      text: "Welche Daten sind nach der DSGVO personenbezogen?",
      options: [
        "Nur Name und Adresse",
        "Alle Informationen, die sich auf eine identifizierbare Person beziehen",
        "Nur Gesundheitsdaten",
        "Nur Daten in Papierform",
      ],
    },
    {
      id: 5,
      subject: "Unfallverhütung",
      points: 1,
      text: "Was ist bei einem Brand zuerst zu tun?",
      options: ["Alarm auslösen und Personen warnen", "Türen verriegeln", "Löschen ohne Meldung", "Gebäude verlassen ohne Warnung"],
    },
    {
      id: 6,
      subject: "Umgang mit Menschen",
      points: 1,
      text: "Welches Verhalten wirkt deeskalierend?",
      options: ["Laut sprechen", "Ruhig bleiben und Blickkontakt halten", "Körperlich bedrängen", "Ironisch antworten"],
    },
    {
      id: 7,
      subject: "Sicherheitstechnik",
      points: 1,
      text: "Wozu dient eine Einbruchmeldeanlage?",
      options: [
        "Zur Brandbekämpfung",
        "Zur Meldung unbefugten Eindringens",
        "Zur Zutrittsprotokollierung von Mitarbeitern",
        "Zur Videoaufzeichnung",
      ],
    },
  ],
};

const letters = ["A", "B", "C", "D", "E", "F"];

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
  <Svg {...p}>
    <path d="M5 12h14m-6-6l6 6-6 6" />
  </Svg>
);

/* ---------- Page ---------- */
export default function PracitcesQuestion() {
  const { questions } = exam;
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { [questionId]: optionIndex }

  const q = questions[index];
  const answered = Object.keys(answers).length;
  const totalPoints = questions.reduce((sum, x) => sum + x.points, 0);
  const progress = Math.round((answered / questions.length) * 100);
  const isFirst = index === 0;
  const isLast = index === questions.length - 1;

  const select = (optionIndex) => setAnswers((prev) => ({ ...prev, [q.id]: optionIndex }));

  return (
    <main className="min-h-screen bg-[#f3f6fd] dark:bg-slate-950">
      <section className="mx-auto rounded-[28px] bg-white p-4 shadow-sm sm:p-6 lg:p-8 dark:bg-slate-900">
        {/* Title */}
        <h1 className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">{exam.title}</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          {exam.totalQuestions} Fragen · {exam.scoring} · {exam.mode}
        </p>

        {/* Progress card */}
        <div class="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4
            sm:flex-row sm:items-center sm:gap-8 sm:px-8 sm:py-5
            dark:border-slate-700 dark:bg-slate-900">

  <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
    Question 1 of 7
  </p>

  <div class="flex items-center gap-6 text-sm">
    <p class="whitespace-nowrap font-medium text-slate-900 dark:text-white">0 / 7 answered</p>
    <p class="whitespace-nowrap text-slate-500 dark:text-slate-400">8 pts total</p>
  </div>

  <div class="rounded-lg bg-slate-100 px-4 py-3 text-center text-sm font-semibold text-slate-600
              sm:ml-auto sm:w-72
              dark:bg-slate-800 dark:text-slate-300">
    Time Remaining: <span class="tabular-nums">117:59</span>
  </div>
</div>

        {/* Question navigator */}
        <nav aria-label="Questions" className="mt-5 flex flex-wrap gap-2 sm:gap-3">
          {questions.map((item, i) => {
            const isCurrent = i === index;
            const isDone = answers[item.id] !== undefined;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Question ${i + 1}${isDone ? ", answered" : ""}`}
                aria-current={isCurrent ? "step" : undefined}
                className={`h-11 w-11 rounded-xl border text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 sm:h-[52px] sm:w-[52px] dark:focus-visible:ring-offset-slate-900 ${
                  isCurrent
                    ? "border-[#1e3f6e] bg-[#1e3f6e] text-white dark:border-blue-500 dark:bg-blue-500"
                    : isDone
                    ? "border-blue-200 bg-blue-100 text-blue-700 hover:bg-blue-200 dark:border-blue-500/30 dark:bg-blue-500/20 dark:text-blue-300"
                    : "border-slate-200 bg-slate-100 text-slate-500 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
                }`}
              >
                {i + 1}
              </button>
            );
          })}
        </nav>

        {/* Question card */}
        <article className="mt-5 rounded-3xl border border-slate-200 p-4 sm:p-8 dark:border-slate-700">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-600 dark:bg-blue-500/15 dark:text-blue-300">
              {q.subject}
            </span>
            <span className="rounded-full bg-slate-100 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              {q.points} pt{q.points > 1 ? "s" : ""}
            </span>
          </div>

          <h2 className="mt-6 text-lg font-bold text-slate-900 sm:mt-8 sm:text-2xl dark:text-white">{q.text}</h2>

          <div role="radiogroup" aria-label="Answer options" className="mt-5 space-y-3 sm:mt-6">
            {q.options.map((opt, i) => {
              const selected = answers[q.id] === i;
              return (
                <button
                  key={i}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => select(i)}
                  className={`flex w-full items-center gap-4 rounded-2xl border px-4 py-3.5 text-left text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 sm:px-6 sm:py-4 sm:text-base ${
                    selected
                      ? "border-[#1e3f6e] bg-blue-50 text-slate-900 dark:border-blue-500 dark:bg-blue-500/10 dark:text-white"
                      : "border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                      selected
                        ? "border-[#1e3f6e] bg-[#1e3f6e] text-white dark:border-blue-500 dark:bg-blue-500"
                        : "border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-400"
                    }`}
                  >
                    {letters[i]}
                  </span>
                  <span className="min-w-0 flex-1">{opt}</span>
                </button>
              );
            })}
          </div>
        </article>

        {/* Footer buttons */}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="grid grid-cols-2 gap-3 sm:flex">
            <button
              type="button"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={isFirst}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-sm font-medium text-slate-500 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 disabled:cursor-not-allowed disabled:opacity-50 sm:h-[52px] sm:min-w-[140px] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <ArrowLeftIcon />
              Previous
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => Math.min(questions.length - 1, i + 1))}
              disabled={isLast}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-sm font-medium text-slate-900 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 disabled:cursor-not-allowed disabled:opacity-50 sm:h-[52px] sm:min-w-[108px] dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            >
              Next
              <ArrowRightIcon />
            </button>
          </div>

          <a
            href={exam.nextLessonUrl}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#1e3f6e] px-8 text-sm font-semibold text-secondary transition hover:bg-[#17325a] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 sm:h-[52px] dark:ring-1 dark:ring-white/10 dark:focus-visible:ring-offset-slate-900"
          >
            Next Lesson
            <ArrowRightIcon />
          </a>
        </div>
      </section>
    </main>
  );
}