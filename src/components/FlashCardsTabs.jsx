import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Clock3, Flag, Table2 } from "lucide-react";

const DEFAULT_CARDS = [
  { id: 1, topic: "Datenschutz", level: "easy", due: true, q: "DSGVO Art. 5 – Grundsätze der Datenverarbeitung?", a: "Rechtmäßigkeit, Treu und Glauben, Transparenz, Zweckbindung, Datenminimierung, Richtigkeit, Speicherbegrenzung, Integrität und Vertraulichkeit sowie Rechenschaftspflicht." },
  { id: 2, topic: "Gewerberecht", level: "medium", due: true, q: "Wofür benötigt man eine Erlaubnis nach §34a GewO?", a: "Für das gewerbsmäßige Bewachen fremden Lebens oder fremden Eigentums (Bewachungsgewerbe)." },
  { id: 3, topic: "Strafrecht", level: "difficult", due: true, q: "Was regelt § 32 StGB (Notwehr)?", a: "Eine Tat, die durch Notwehr geboten ist, ist nicht rechtswidrig. Notwehr ist die Verteidigung, die erforderlich ist, um einen gegenwärtigen rechtswidrigen Angriff abzuwenden." },
  { id: 4, topic: "Strafrecht", level: "easy", due: false, q: "Was erlaubt § 127 Abs. 1 StPO?", a: "Die vorläufige Festnahme (Jedermannsrecht) bei frischer Tat, wenn Fluchtverdacht besteht oder die Identität nicht sofort festgestellt werden kann." },
  { id: 5, topic: "BGB", level: "easy", due: false, q: "Unterschied zwischen Besitz und Eigentum?", a: "Eigentum ist die rechtliche Herrschaft über eine Sache, Besitz die tatsächliche Herrschaft darüber." },
];

// Full class names (no string building) so Tailwind can detect them at build time.
const LEVELS = {
  easy: {
    label: "Easy",
    dot: "bg-[#17386f] dark:bg-blue-400",
    segment: "bg-[#0a3a7a] dark:bg-blue-500",
    chip: "bg-[#d8f7e3] text-green-700 dark:bg-green-500/20 dark:text-green-300",
  },
  medium: {
    label: "Medium",
    dot: "bg-amber-500",
    segment: "bg-amber-500",
    chip: "bg-amber-100 text-amber-800 dark:bg-amber-400/20 dark:text-amber-300",
  },
  difficult: {
    label: "Difficult",
    dot: "bg-[#ff5a64]",
    segment: "bg-[#ff5a64]",
    chip: "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300",
  },
};

const TABS = [
  { id: "due", label: "Due Today", icon: Clock3, filter: (c) => c.due },
  { id: "all", label: "All Cards", icon: Table2, filter: () => true },
  { id: "hard", label: "Study Difficult", icon: Flag, filter: (c) => c.level === "difficult", danger: true },
];

/* ------------------------------------------------------------------ */
/* Small pieces                                                       */
/* ------------------------------------------------------------------ */
function FilterTabs({ cards, active, onChange }) {
  return (
    <div role="tablist" aria-label="Card filter" className="mt-4 flex flex-wrap gap-3">
      {TABS.map(({ id, label, icon: Icon, filter, danger }) => {
        const isActive = id === active;
        return (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(id)}
            className={`inline-flex items-center gap-3 rounded-2xl border px-5 py-3 text-sm font-medium transition duration-150 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 dark:focus-visible:ring-blue-500/60 ${
              isActive
                ? "border-[#17386f] bg-[#17386f] text-white dark:border-[#1c3a85] dark:bg-[#1c3a85]"
                : `border-slate-200 bg-white hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10 ${
                    danger ? "text-red-500 dark:text-red-400" : "text-[#0f1f4d] dark:text-slate-100"
                  }`
            }`}
          >
            <Icon size={16} className="shrink-0" aria-hidden="true" />
            {label} ({cards.filter(filter).length})
          </button>
        );
      })}
    </div>
  );
}

function RatingsPanel({ items }) {
  const total = items.length || 1;
  const counts = Object.fromEntries(
    Object.keys(LEVELS).map((key) => [key, items.filter((c) => c.level === key).length])
  );

  return (
    <div className="mt-4 rounded-3xl bg-[#f4f4f4] p-4 sm:p-5 dark:bg-[#18213f]">
      <p className="text-sm text-[#6f82a8] sm:text-base dark:text-slate-400">Your difficulty ratings</p>

      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-[11px] text-[#6f82a8] sm:text-xs dark:text-slate-400">
        {Object.entries(LEVELS).map(([key, level]) => (
          <span key={key} className="inline-flex items-center gap-1.5">
            <span className={`h-2 w-2 rounded-full ${level.dot}`} />
            {level.label}: {counts[key]}
          </span>
        ))}
      </div>

      <div
        role="img"
        aria-label={Object.entries(counts).map(([k, v]) => `${LEVELS[k].label} ${v}`).join(", ")}
        className="mt-2 flex h-2.5 overflow-hidden rounded-full bg-[#e6ecf8] dark:bg-white/10"
      >
        {Object.entries(LEVELS).map(([key, level]) =>
          counts[key] ? (
            <span key={key} className={level.segment} style={{ width: `${(counts[key] / total) * 100}%` }} />
          ) : null
        )}
      </div>
    </div>
  );
}

function CardFace({ card, revealed }) {
  const level = LEVELS[card.level];
  return (
    <div
      aria-live="polite"
      className="mt-4 flex min-h-[260px] flex-col rounded-3xl bg-[#f4f4f4] p-4 sm:p-5 dark:bg-[#18213f]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-[#cfe0f7] px-4 py-1.5 text-xs font-medium text-slate-600 dark:bg-blue-400/20 dark:text-blue-200">
            {card.topic}
          </span>
          <span className={`rounded-full px-4 py-1.5 text-xs font-semibold ${level.chip}`}>{level.label}</span>
        </div>
        <span className="shrink-0 pt-1.5 text-[11px] text-[#6f82a8] dark:text-slate-400">
          {revealed ? "↑ Answer" : "↓ Question"}
        </span>
      </div>

      <div className="mt-auto pt-10">
        <div className="flex items-start gap-3">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-[#e3ebff] text-xs font-bold text-blue-600 dark:bg-blue-500/20 dark:text-blue-300">
            ?
          </span>
          <p className="text-sm font-semibold leading-snug text-[#0f1f4d] sm:text-base dark:text-white">{card.q}</p>
        </div>

        {revealed && (
          <div className="mt-4 flex items-start gap-3 border-t border-slate-200 pt-4 dark:border-white/10">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-[#d8f7e3] text-xs font-bold text-green-700 dark:bg-green-500/20 dark:text-green-300">
              A
            </span>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-200">{card.a}</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main component                                                     */
/* ------------------------------------------------------------------ */
export default function Flashcards({ cards = DEFAULT_CARDS }) {
  const [tab, setTab] = useState("due");
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const items = useMemo(() => cards.filter(TABS.find((t) => t.id === tab).filter), [cards, tab]);
  const current = items[index];

  const go = (step) => {
    const next = index + step;
    if (next < 0 || next >= items.length) return;
    setIndex(next);
    setRevealed(false);
  };

  const changeTab = (id) => {
    setTab(id);
    setIndex(0);
    setRevealed(false);
  };

  // Left / right arrow keys
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <div className="mx-auto w-full space-y-4 text-[#0f1f4d] dark:text-slate-100">
      <section className="rounded-3xl w-full bg-white p-4 shadow-sm sm:p-6 dark:bg-[#121a33] dark:shadow-none">
        <div className="max-w-3xl">
        <h1 className="text-xl font-bold text-[#0d0d1f] sm:text-2xl dark:text-white">Flashcards</h1>

        <FilterTabs cards={cards} active={tab} onChange={changeTab} />
        <RatingsPanel items={items} />

        {current ? (
          <CardFace card={current} revealed={revealed} />
        ) : (
          <div className="mt-4 rounded-3xl bg-[#f4f4f4] p-8 text-center text-sm text-[#6f82a8] dark:bg-[#18213f] dark:text-slate-400">
            No cards in this list yet.
          </div>
        )}
        </div>
      </section>

      <button
        type="button"
        disabled={!current}
        onClick={() => setRevealed((r) => !r)}
        className="w-full rounded-2xl bg-white py-5 text-sm font-medium text-[#6f82a8] shadow-sm transition duration-150 hover:bg-slate-50 hover:text-[#0f1f4d] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none dark:bg-[#121a33] dark:text-slate-300 dark:shadow-none dark:hover:bg-[#18213f] dark:hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 dark:focus-visible:ring-blue-500/60"
      >
        {revealed ? "Hide Answer" : "Show Answer"}
      </button>

      <div className="flex items-center justify-between gap-3 px-1">
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={index === 0}
          className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-[#6f82a8] transition hover:text-[#0f1f4d] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:text-[#6f82a8] dark:text-slate-400 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <ArrowLeft size={16} aria-hidden="true" /> Previous
        </button>

        <span className="text-xs text-[#6f82a8] dark:text-slate-400">
          {items.length ? `${index + 1} / ${items.length}` : "0 / 0"}
        </span>

        <button
          type="button"
          onClick={() => go(1)}
          disabled={index >= items.length - 1}
          className="inline-flex items-center gap-2 rounded-xl bg-[#17386f] px-8 py-3 text-sm font-semibold text-white shadow-sm transition duration-150 ease-out hover:-translate-y-0.5 hover:bg-[#1f4a90] hover:shadow-lg active:translate-y-0 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-sm motion-reduce:transition-none dark:bg-[#1c3a85] dark:hover:bg-[#2748a3] focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 dark:focus-visible:ring-blue-500/60"
        >
          Next <ArrowRight size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

