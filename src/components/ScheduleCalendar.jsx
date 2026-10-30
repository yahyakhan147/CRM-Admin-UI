import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

// 35 cells in the order shown in the design.
const DAYS = [
  29, 30, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26,
  27, 28, 29, 30, 31, 1, 2,
];
const WEEKDAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const LONG_WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const VIEWS = ["Month", "Week"];
const PICKER_WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const YEARS = Array.from({ length: 201 }, (_, index) => 1900 + index);

function dateToValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dateFromValue(value) {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function getPickerDays(viewDate) {
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPreviousMonth = new Date(year, month, 0).getDate();

  return Array.from({ length: 42 }, (_, index) => {
    const day = index - firstWeekday + 1;
    const date = day < 1
      ? new Date(year, month - 1, daysInPreviousMonth + day)
      : day > daysInMonth
        ? new Date(year, month + 1, day - daysInMonth)
        : new Date(year, month, day);

    return { date, isCurrentMonth: date.getMonth() === month };
  });
}

// Keyed by cell index (0-34), not by day number.
const EVENTS = {
  1: [["cyan", "Class One (12 min)"]],
  11: [["orange", "Time: 8 to 12"], ["orange", "Class Two"]],
  28: [["green", "Time: 8 to 12"], ["green", "Class Three"]],
};
const DIMMED = new Set([1]);
const HOLIDAY = 8;

function groupEventsByColor(events) {
  return events.reduce((groups, [color, text]) => {
    const lastGroup = groups[groups.length - 1];
    if (lastGroup?.color === color) {
      lastGroup.texts.push(text);
    } else {
      groups.push({ color, texts: [text] });
    }
    return groups;
  }, []);
}

// Full class names so Tailwind can detect them at build time.
const EVENT_COLORS = {
  cyan: "bg-cyan-500",
  green: "bg-[#12C740]",
  orange: "bg-[#FF8D28]",
};
const SCHEDULE_CARD_COLORS = {
  cyan: "border-cyan-400 bg-cyan-100 text-cyan-900",
  green: "border-green-400 bg-green-100 text-green-900",
  orange: "border-orange-400 bg-orange-100 text-orange-900",
};
const LEGEND = [
  { label: "Präsenz",         dot: "bg-[#0B5BA7]" },
  { label: "Online",          dot: "bg-[#FF8D28]" },
  { label: "First Aid",       dot: "bg-[#12C740]" },
  { label: "Weapons Training", dot: "bg-[#12B5D8]" },
  { label: "Fire Safety",     dot: "bg-[#FF3B44]" },
  { label: "Public",          dot: "bg-[#D4AB2F]" },
];

function getCalendarDateLabel(index) {
  const day = DAYS[index];
  const monthIndex = index < 2 ? 7 : index > 32 ? 9 : 8;
  const month = MONTHS[monthIndex];
  return `${LONG_WEEKDAYS[index % 7]}, ${month} ${day}, 2026`;
}

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

export default function ScheduleCalendar({ tasks }) {
  const [view, setView] = useState("Month");
  const [selected, setSelected] = useState(10);
  const [scheduleIndex, setScheduleIndex] = useState(null);
  const [calendarEvents, setCalendarEvents] = useState(EVENTS);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskTime, setTaskTime] = useState("09:00");

  useEffect(() => {
    if (scheduleIndex === null) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setScheduleIndex(null);
        setIsAddingTask(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [scheduleIndex]);

  return (
    <div className="mx-auto space-y-6 dark:bg-slate-950 dark:text-slate-100">
      {/* Calendar card */}
      <section className="rounded-3xl bg-white p-4 shadow-card dark:bg-slate-900 dark:text-slate-100 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3 px-1 pb-6 pt-1">
          <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100">September 2026</h1>
          
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[640px] border border-slate-200 dark:border-slate-700">
            <div className="grid grid-cols-7 bg-gray-50 text-sm text-slate-500 dark:bg-slate-800 dark:text-slate-300">
              {WEEKDAYS.map((d, i) => (
                <div key={d} className={`px-3 py-2 ${i ? "border-l border-slate-200 dark:border-slate-700" : ""}`}>
                  {d}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7">
              {DAYS.map((day, i) => {
                const isHoliday = i === HOLIDAY;
                const isSelected = i === selected;
                const state = [
                  isHoliday ? "bg-[#D3AF34] text-white" : isSelected ? "bg-blue-50 dark:bg-sky-500/10" : "dark:bg-slate-900",
                  isSelected ? "ring-2 ring-inset ring-blue-600 dark:ring-sky-400" : "",
                ].filter(Boolean).join(" ");

                return (
                  <button
                    key={i}
                    type="button"
                    aria-label={String(day)}
                    aria-pressed={isSelected}
                    onClick={() => {
                      setSelected(i);
                      setScheduleIndex(i);
                      setIsAddingTask(false);
                    }}
                    className={`relative flex h-[170px] cursor-pointer flex-col justify-between border-t border-slate-200 p-3 text-left transition-colors hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:border-slate-700 dark:text-slate-100 ${
                      i % 7 ? "border-l border-slate-200 dark:border-l dark:border-slate-700" : ""
                    } ${state}`}
                  >
                    <span
                      className={`text-2xl font-medium leading-none ${
                        DIMMED.has(i) ? "text-gray-500 dark:text-slate-500" : "dark:text-slate-100"
                      }`}
                    >
                      {day}
                    </span>

                    {isHoliday ? (
                      <span className="text-sm">Holiday</span>
                    ) : (
                      <div className="space-y-1">
                        {groupEventsByColor(calendarEvents[i] || []).map(({ color, texts }, n) => (
                          <div
                            key={n}
                            className={`rounded px-2 py-1 text-sm text-white ${EVENT_COLORS[color]}`}
                          >
                            {texts.map((text, eventIndex) => (
                              <div key={eventIndex} className="truncate">{text}</div>
                            ))}
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
      <div>
        <ul
      aria-label="Course type legend"
      className="flex flex-wrap items-center gap-x-8 gap-y-3 rounded-2xl bg-[#f4f7fd] px-5 py-4 dark:bg-[#121a33]"
    >
      {LEGEND.map(({ label, dot }) => (
        <li key={label} className="flex items-center gap-3">
          <span className={`h-4 w-4 shrink-0 rounded-full ${dot}`} aria-hidden="true" />
          <span className="text-base font-normal text-[#6F82A8] dark:text-slate-300">
            {label}
          </span>
        </li>
      ))}
    </ul>
      </div>
    </div>
  );
}