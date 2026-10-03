import { useState } from "react";

// 35 cells in the order shown in the design.
const DAYS = [
  29, 30, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26,
  27, 28, 29, 30, 31, 1, 2,
];
const WEEKDAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const VIEWS = ["Month", "Week", "Day", "List"];

// Keyed by cell index (0-34), not by day number.
const EVENTS = {
  1: [["cyan", "13:00 (60 min)"]],
  9: [["green", "9:00 (2 hours)"], ["green", "13:00 (60 min)"]],
  12: [["orange", "13:00 (info here)"], ["orange", "13:00 (info here)"]],
  18: [["orange", "21:00 (30 min)"]],
  19: [["green", "13:00 (Team Mtg)"], ["orange", "19:00 (60 min)"]],
  22: [["orange", "13:00 (info here)"], ["orange", "13:00 (info here)"]],
  25: [["green", "13:00 (60 min)"]],
};
const DIMMED = new Set([1]);
const HOLIDAY = 8;

// Full class names so Tailwind can detect them at build time.
const EVENT_COLORS = {
  cyan: "bg-cyan-500",
  green: "bg-green-600",
  orange: "bg-orange-500",
};

const CalendarIcon = () => (
  <svg
    className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="4.5" width="18" height="16" rx="3" />
    <path d="M3 9.5h18M8 3v3M16 3v3M8 13.5h.01M12 13.5h.01M16 13.5h.01M8 17h.01M12 17h.01M16 17h.01" />
  </svg>
);

const ChevronIcon = () => (
  <svg
    className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 8l5 5 5-5" />
  </svg>
);

function DateField({ id, label, borderClass, ringClass }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm text-slate-500">{label}</label>
      <div className="relative mt-1">
        <input
          id={id}
          type="date"
          className={`h-10 w-full rounded border bg-white px-4 pr-4 placeholder:text-gray-400 focus:outline-none focus:ring-2 ${borderClass} ${ringClass}`}
        />
      </div>
    </div>
  );
}

function TimeSelect({ id }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm text-slate-500">Time</label>
      <div className="relative mt-1">
        <select
          id={id}
          className="h-10 w-full appearance-none rounded border border-line bg-white px-4 pr-11 text-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/20"
        >
          <option>GMT +02:00</option>
          <option>GMT +01:00</option>
          <option>GMT +00:00</option>
        </select>
        <ChevronIcon />
      </div>
    </div>
  );
}

export default function TaskList() {
  const [view, setView] = useState("Month");
  const [selected, setSelected] = useState(10);

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      {/* Calendar card */}
      <section className="rounded-3xl bg-white p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3 px-1 pb-6 pt-1">
          <h1 className="text-xl font-semibold">September 2026</h1>
          <div
            className="flex rounded-lg bg-gray-100 p-0.5 text-sm"
            role="tablist"
            aria-label="Calendar view"
          >
            {VIEWS.map((v) => (
              <button
                key={v}
                type="button"
                role="tab"
                aria-selected={view === v}
                onClick={() => setView(v)}
                className={
                  view === v
                    ? "rounded-lg border border-slate-200 bg-white px-4 py-2 font-medium text-slate-900 shadow-sm"
                    : "px-4 py-2 text-slate-500 hover:text-slate-900"
                }
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[640px] border border-slate-200">
            <div className="grid grid-cols-7 bg-gray-50 text-sm text-slate-500">
              {WEEKDAYS.map((d, i) => (
                <div key={d} className={`px-3 py-2 ${i ? "border-l border-slate-200" : ""}`}>
                  {d}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7">
              {DAYS.map((day, i) => {
                const isHoliday = i === HOLIDAY;
                const isSelected = i === selected;
                const state = [
                  isHoliday ? "bg-[#D3AF34] text-white" : isSelected ? "bg-blue-50" : "",
                  isSelected ? "ring-2 ring-inset ring-blue-600" : "",
                ].filter(Boolean).join(" ");

                return (
                  <button
                    key={i}
                    type="button"
                    aria-label={String(day)}
                    aria-pressed={isSelected}
                    onClick={() => setSelected(i)}
                    className={`relative flex h-[125px] cursor-pointer flex-col justify-between border-t border-slate-200 p-3 text-left transition-colors hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                      i % 7 ? "border-l border-slate-200" : ""
                    } ${state}`}
                  >
                    <span
                      className={`text-2xl font-medium leading-none ${
                        DIMMED.has(i) ? "text-gray-500" : ""
                      }`}
                    >
                      {day}
                    </span>

                    {isHoliday ? (
                      <span className="text-sm">Holiday</span>
                    ) : (
                      <div className="space-y-1">
                        {(EVENTS[i] || []).map(([color, text], n) => (
                          <div
                            key={n}
                            className={`truncate rounded px-2 py-1 text-sm text-white ${EVENT_COLORS[color]}`}
                          >
                            {text}
                          </div>
                        ))}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Create appointments card */}
      <section className="rounded-3xl bg-white p-6 sm:p-8">
        <h2 className="text-base font-semibold">Create Appointments</h2>

        <div className="mt-6 grid gap-x-6 gap-y-4 md:grid-cols-2">
          <DateField
            id="agency-date"
            label="Agency Appointment"
            borderClass="border-emerald-500"
            ringClass="focus:ring-emerald-500/30"
          />
          <TimeSelect id="agency-time" />

          <DateField
            id="kids-date"
            label="Kids Appointment"
            borderClass="border-orange-500"
            ringClass="focus:ring-orange-500/30"
          />
          <TimeSelect id="kids-time" />

          <div className="md:col-span-2">
            <label htmlFor="notes" className="text-sm text-slate-500">Notes</label>
            <textarea
              id="notes"
              rows={3}
              placeholder="Add notes about customer"
              className="mt-1 w-full resize-none rounded border border-slate-200 px-4 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button type="submit" className="rounded-md bg-[#022658] px-8 py-3 text-base font-medium text-[#D3AF34] hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">Save</button>
        </div>
      </section>
    </div>
  );
}