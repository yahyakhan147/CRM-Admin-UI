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
const SCHEDULE_CARD_COLORS = {
  cyan: "border-cyan-400 bg-cyan-100 text-cyan-900",
  green: "border-green-400 bg-green-100 text-green-900",
  orange: "border-orange-400 bg-orange-100 text-orange-900",
};

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

function DateField({ id, label, borderClass, ringClass }) {
  const [value, setValue] = useState("");
  const [draftValue, setDraftValue] = useState("");
  const [viewDate, setViewDate] = useState(() => new Date());
  const [isOpen, setIsOpen] = useState(false);
  const pickerRef = useRef(null);
  const selectedDate = dateFromValue(draftValue);
  const selectedValue = selectedDate ? dateToValue(selectedDate) : "";

  useEffect(() => {
    if (!isOpen) return undefined;

    function handlePointerDown(event) {
      if (!pickerRef.current?.contains(event.target)) setIsOpen(false);
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function openPicker() {
    const initialDate = dateFromValue(value) || new Date();
    setDraftValue(value);
    setViewDate(initialDate);
    setIsOpen(true);
  }

  const formattedValue = value
    ? new Intl.DateTimeFormat(undefined, { year: "numeric", month: "2-digit", day: "2-digit" }).format(dateFromValue(value))
    : "";

  return (
    <div>
      <label htmlFor={id} className="text-sm text-slate-500 dark:text-slate-300">{label}</label>
      <div ref={pickerRef} className="relative mt-1">
        <button
          id={id}
          type="button"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          onClick={() => isOpen ? setIsOpen(false) : openPicker()}
          className={`relative flex h-10 w-full items-center rounded border bg-white px-4 pr-11 text-left focus:outline-none focus:ring-2 dark:border-slate-700 dark:bg-slate-950 ${borderClass} ${ringClass}`}
        >
          <span className={formattedValue ? "text-slate-900 dark:text-slate-100" : "text-gray-400 dark:text-slate-400"}>
            {formattedValue || "Date"}
          </span>
          <CalendarIcon />
        </button>

        {isOpen && (
          <div
            role="dialog"
            aria-label={`${label} date picker`}
            className="absolute right-0 top-full z-50 mt-1 w-[285px] rounded-md border border-slate-300 bg-white p-4 text-slate-900 shadow-xl dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          >
            <div className="flex gap-2">
              <select
                aria-label="Month"
                value={viewDate.getMonth()}
                onChange={(event) => setViewDate((date) => new Date(date.getFullYear(), Number(event.target.value), 1))}
                className="min-w-0 flex-1 rounded-md border border-slate-300 bg-white px-2 py-1.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-100"
              >
                {MONTHS.map((month, index) => <option key={month} value={index}>{month}</option>)}
              </select>
              <select
                aria-label="Year"
                value={viewDate.getFullYear()}
                onChange={(event) => setViewDate((date) => new Date(Number(event.target.value), date.getMonth(), 1))}
                className="w-[84px] rounded-md border border-slate-300 bg-white px-2 py-1.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-100"
              >
                {YEARS.map((year) => <option key={year} value={year}>{year}</option>)}
              </select>
            </div>

            <div className="mt-3 grid grid-cols-7 text-center text-sm text-slate-500 dark:text-slate-400">
              {PICKER_WEEKDAYS.map((day) => <span key={day} className="py-1">{day}</span>)}
            </div>

            <div className="grid grid-cols-7 gap-y-1 text-center text-sm">
              {getPickerDays(viewDate).map(({ date, isCurrentMonth }) => {
                const dateValue = dateToValue(date);
                const isSelected = dateValue === selectedValue;
                return (
                  <button
                    key={dateValue}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => {
                      setDraftValue(dateValue);
                      setViewDate(date);
                    }}
                    className={`mx-auto flex h-9 w-9 items-center justify-center rounded-md ${
                      isSelected
                        ? "bg-[#022658] text-white"
                        : isCurrentMonth
                          ? "text-slate-900 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800"
                          : "text-slate-400 hover:bg-slate-100 dark:text-slate-500 dark:hover:bg-slate-800"
                    }`}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>

            <div className="mt-3 flex justify-end gap-2 border-t border-slate-200 pt-3 dark:border-slate-700">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-md border border-slate-300 px-2.5 py-1.5 text-sm hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  if (draftValue) setValue(draftValue);
                  setIsOpen(false);
                }}
                className="rounded-md bg-[#022658] px-2.5 py-1.5 text-sm text-white hover:opacity-90"
              >
                Done
              </button>
            </div>
          </div>
        )}
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

export default function CalendarAppointment( ) {
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
          <div
            className="flex rounded-lg bg-gray-100 p-0.5 text-sm dark:bg-slate-800"
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
                    ? "rounded-lg border border-slate-200 bg-white px-4 py-2 font-medium text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                    : "px-4 py-2 text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                }
              >
                {v}
              </button>
            ))}
          </div>
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
                    className={`relative flex h-[125px] cursor-pointer flex-col justify-between border-t border-slate-200 p-3 text-left transition-colors hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:border-slate-700 dark:text-slate-100 ${
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
                        {(calendarEvents[i] || []).map(([color, text], n) => (
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

      {scheduleIndex !== null && (
        <div
          className="fixed inset-0 -top-6 z-[100] flex items-center justify-center bg-slate-900/40 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setScheduleIndex(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="day-schedule-title"
            className="w-full max-w-[450px] rounded-sm bg-white p-5 shadow-xl dark:bg-slate-900 dark:text-slate-100"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 id="day-schedule-title" className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  Day Schedule
                </h2>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{getCalendarDateLabel(scheduleIndex)}</p>
              </div>
              <button
                type="button"
                aria-label="Close day schedule"
                onClick={() => {
                  setScheduleIndex(null);
                  setIsAddingTask(false);
                }}
                className="-mr-1 -mt-1 rounded p-1 text-slate-400 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              >
                <X size={16} />
              </button>
            </div>

            {!isAddingTask ? (
              <>
                <div className="mt-3 space-y-2">
                  {(calendarEvents[scheduleIndex] || []).length ? (
                    calendarEvents[scheduleIndex].map(([color, text], eventIndex) => (
                      <div
                        key={`${scheduleIndex}-${eventIndex}`}
                        className={`rounded-sm border p-3 text-xs ${SCHEDULE_CARD_COLORS[color]}`}
                      >
                        <p className="font-semibold">Appointment</p>
                        <p className="mt-0.5">{text}</p>
                        <span className="mt-2 inline-block rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-medium text-white">
                          Activity
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="rounded-sm border border-slate-200 bg-slate-50 px-3 py-4 text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      No tasks scheduled for this day.
                    </p>
                  )}
                </div>
                <div className="mt-4 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAddingTask(true)}
                    className="rounded-sm bg-[#022658] px-6 py-1 text-sm font-medium text-[#D3AF34] hover:opacity-90"
                  >
                    Agency Appointment
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsAddingTask(true)}
                    className="rounded-sm bg-[#022658] px-6 py-1 text-sm font-medium text-[#D3AF34] hover:opacity-90"
                  >
                    Add Task
                  </button>
                  <button
                    type="button"
                    onClick={() => setScheduleIndex(null)}
                    className="rounded-sm border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    Close
                  </button>
                </div>
              </>
            ) : (
              <form
                className="mt-4 space-y-3"
                onSubmit={(event) => {
                  event.preventDefault();
                  const title = taskTitle.trim();
                  if (!title) return;
                  setCalendarEvents((current) => ({
                    ...current,
                    [scheduleIndex]: [...(current[scheduleIndex] || []), ["green", `${taskTime} (${title})`]],
                  }));
                  setTaskTitle("");
                  setIsAddingTask(false);
                }}
              >
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-300">
                  Task name
                  <input
                    autoFocus
                    required
                    value={taskTitle}
                    onChange={(event) => setTaskTitle(event.target.value)}
                    className="mt-1 h-9 w-full rounded-sm border border-slate-300 bg-white px-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-100"
                  />
                </label>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-300">
                  Time
                  <input
                    type="time"
                    value={taskTime}
                    onChange={(event) => setTaskTime(event.target.value)}
                    className="mt-1 h-9 w-full rounded-sm border border-slate-300 bg-white px-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-100"
                  />
                </label>
                <div className="flex justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setIsAddingTask(false)}
                    className="rounded-sm border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-sm bg-[#022658] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
                  >
                    Save Task
                  </button>
                </div>
              </form>
            )}
          </section>
        </div>
      )}
      <div className="mt-8 flex justify-end">
          <button type="submit" className="rounded-md bg-[#022658] px-8 py-3 text-base font-medium text-[#D3AF34] hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">Save</button>
        </div>
    </div>
  );
}