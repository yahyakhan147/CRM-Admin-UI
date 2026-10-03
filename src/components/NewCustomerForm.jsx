import { useEffect, useRef, useState } from "react";

/* ---------- small building blocks ---------- */

const inputBase =
  "h-11 w-full rounded border border-line bg-white px-4 text-sm text-ink placeholder:text-gray-400 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy";

const ChevronIcon = ({ className = "absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2" }) => (
  <svg
    className={`pointer-events-none text-muted ${className}`}
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

function Field({ label, required, hint, className = "", children }) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-sm text-muted">
        {label}
        {required && " *"}
      </label>
      {children}
      {hint && <p className="mt-1.5 text-[10px] text-muted">{hint}</p>}
    </div>
  );
}

function TextField({ name, label, placeholder, required, type = "text", ...rest }) {
  return (
    <Field label={label} required={required} {...rest}>
      <input id={name} name={name} type={type} placeholder={placeholder} className={inputBase} />
    </Field>
  );
}

function SelectField({ name, label, required, options = [], ...rest }) {
  return (
    <Field label={label} required={required} {...rest}>
      <div className="relative">
        <select
          id={name}
          name={name}
          defaultValue=""
          className={`${inputBase} appearance-none pr-10`}
        >
          <option value="">--Select--</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        <ChevronIcon />
      </div>
    </Field>
  );
}

const pad = (n) => String(n).padStart(2, "0");
const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const sameDay = (a, b) =>
  a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

/* Date picker: click the field to open a month grid (Monday first). */
function DateField({ name, label, required, withTime = false, ...rest }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [time, setTime] = useState("09:00");
  const [view, setView] = useState(() => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });
  const ref = useRef(null);

  // Close on outside click or Escape
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const today = new Date();
  const offset = (new Date(view.getFullYear(), view.getMonth(), 1).getDay() + 6) % 7;
  const cells = Array.from(
    { length: 42 },
    (_, i) => new Date(view.getFullYear(), view.getMonth(), 1 - offset + i)
  );
  const shiftMonth = (n) => setView(new Date(view.getFullYear(), view.getMonth() + n, 1));

  const pick = (d) => {
    setValue(d);
    if (!withTime) setOpen(false);
  };

  const display = value
    ? `${pad(value.getDate())}.${pad(value.getMonth() + 1)}.${value.getFullYear()}${withTime ? ` ${time}` : ""}`
    : "";
  const iso = value
    ? `${value.getFullYear()}-${pad(value.getMonth() + 1)}-${pad(value.getDate())}${withTime ? `T${time}` : ""}`
    : "";

  return (
    <Field label={label} required={required} {...rest}>
      <div className="relative" ref={ref}>
        <input type="hidden" name={name} value={iso} />
        <button
          id={name}
          type="button"
          aria-haspopup="dialog"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className={`${inputBase} pr-11 text-left`}
        >
          {display || <span className="text-gray-400">{withTime ? "Date & time" : "Date"}</span>}
        </button>
        <CalendarIcon />

        {open && (
          <div
            role="dialog"
            aria-label="Choose date"
            className="absolute left-0 z-20 mt-1 w-72 rounded-xl border border-line bg-white p-3 shadow-lg"
          >
            <div className="mb-2 flex items-center justify-between">
              <button
                type="button"
                onClick={() => shiftMonth(-1)}
                aria-label="Previous month"
                className="rounded p-1.5 text-muted hover:bg-gray-100"
              >
                <ChevronIcon className="static h-4 w-4 translate-y-0 rotate-90" />
              </button>
              <span className="text-sm font-semibold">
                {view.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </span>
              <button
                type="button"
                onClick={() => shiftMonth(1)}
                aria-label="Next month"
                className="rounded p-1.5 text-muted hover:bg-gray-100"
              >
                <ChevronIcon className="static h-4 w-4 translate-y-0 -rotate-90" />
              </button>
            </div>

            <div className="grid grid-cols-7 text-center text-xs text-muted">
              {WEEKDAYS.map((d) => (
                <div key={d} className="py-1">{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-y-0.5">
              {cells.map((d) => {
                const inMonth = d.getMonth() === view.getMonth();
                const selected = sameDay(d, value);
                return (
                  <button
                    key={d.toISOString()}
                    type="button"
                    onClick={() => pick(d)}
                    aria-pressed={selected}
                    className={`h-9 rounded text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                      selected
                        ? "bg-blue-600 font-medium text-white"
                        : `hover:bg-blue-50 ${inMonth ? "text-ink" : "text-gray-400"} ${
                            sameDay(d, today) ? "ring-1 ring-inset ring-blue-600" : ""
                          }`
                    }`}
                  >
                    {d.getDate()}
                  </button>
                );
              })}
            </div>

            <div className="mt-2 flex items-center justify-between border-t border-line/70 pt-2">
              <button
                type="button"
                onClick={() => { setValue(null); setOpen(false); }}
                className="text-xs text-muted hover:text-ink"
              >
                Clear
              </button>
              {withTime && (
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  aria-label="Time"
                  className="h-8 rounded border border-line px-2 text-sm focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
                />
              )}
              <button
                type="button"
                onClick={() => (withTime ? setOpen(false) : pick(new Date()))}
                className="text-xs font-medium text-navy hover:underline"
              >
                {withTime ? "Done" : "Today"}
              </button>
            </div>
          </div>
        )}
      </div>
    </Field>
  );
}

function Section({ title, children }) {
  return (
    <section className="pt-4 first:pt-6">
      <h3 className="mb-4 text-sm font-bold text-ink">{title}</h3>
      <div className="grid gap-x-6 gap-y-5 md:grid-cols-2">{children}</div>
    </section>
  );
}

/* ---------- form ---------- */

export default function NewCustomerForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto rounded-3xl bg-white p-6 font-Poppins sm:p-8"
    >
      {/* Header */}
      <header className="border-b border-line/70 pb-4">
        <h2 className="text-base font-bold text-ink">MAB - Initial Contact Form</h2>
        <p className="mt-0.5 text-sm text-muted">We look forward to getting to know you!</p>
      </header>

      <Section title="Personal Information">
        <SelectField name="title" label="Title" options={["Mr.", "Ms.", "Mx.", "Dr."]} />
        <DateField name="dob" label="Date Of Birth" required />
        <TextField name="firstName" label="First Name" placeholder="Name" required />
        <TextField name="lastName" label="Last Name" placeholder="Name" required />
        <TextField name="countryOfBirth" label="Country Of Birth" placeholder="Country" />
        <TextField name="placeOfBirth" label="Place Of Birth" placeholder="City" />
        <TextField
          name="nationality"
          label="Nationality"
          placeholder="Germany"
          className="md:col-span-2"
        />
      </Section>

      <Section title="Contact">
        <TextField name="email" label="Email Address" type="email" placeholder="Address" />
        <TextField name="mobile" label="Mobile Number" type="tel" placeholder="+45 -765789-89" required />
        <SelectField
          name="source"
          label="How did the customer find us ?"
          options={["Website", "Advertisement", "Onsite", "Phone Inquiry", "Email", "Referral", "Social media", "Other"]}
          className="md:col-span-2"
        />
      </Section>

      <Section title="Address">
        {/* Street + House No. use their own row: wide / narrow */}
        <div className="grid gap-x-6 gap-y-5 md:col-span-2 md:grid-cols-[1fr_13rem]">
          <TextField name="street" label="Street" placeholder="Street" />
          <TextField name="houseNo" label="House No." placeholder="A1" />
        </div>
        <TextField name="city" label="City" placeholder="Berlin" />
        <TextField name="postalCode" label="Postal Code" placeholder="101514" />
      </Section>

      <Section title="Funding & Admission">
        <SelectField
          name="fundingAgency"
          label="Funding Agency / Cost Bearer"
          options={["Jobcenter", "Agentur fur Arbeit", "Self Payer", "Rentenversicherung", "Millinery", "Other"]}
          className="md:col-span-2"
        />
        <SelectField
          name="policeCertificate"
          label="Police Certification  of Good Conduct available?"
          options={["Yes", "No", "Will Apply"]}
          className="md:col-span-2"
        />
      </Section>

      <Section title="MAB Internal">
        <DateField name="consultationDate" label="Consultation Date & Time" withTime />
        <SelectField
          name="admissionChecked"
          label="Admission Requirements Checked"
          options={["Yes", "No"]}
        />
        <SelectField
          name="consultationForm"
          label="Consultation Form"
          options={["Phone", "Online / Video", "Email", "In Person"]}
        />
        <SelectField name="location" label="Location" options={["Berlin", "Hamburg", "Munich", "Other"]} />

        <Field label="Status & Comments" className="md:col-span-2">
          <textarea
            name="comments"
            rows={4}
            placeholder="Initial consultation notes, status, remarks..."
            className="w-full resize-none rounded border border-line px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
          />
        </Field>

        <label className="flex items-center gap-4 text-xs text-ink md:col-span-2">
          <input
            type="checkbox"
            name="privacyAccepted"
            className="h-4 w-4 shrink-0 rounded border-line text-navy focus:ring-navy"
          />
          <span className="text-sm text-muted">
            The customer confirmed the agreement to the{" "}
            <a href="#" className="text-navy hover:underline">Privacy Policy</a>{" "}
            (Signature Obtained on paper form)
          </span>
        </label>

        <TextField
          name="customerNumber"
          label="Customer Number"
          placeholder="e.g KN-2026-242"
          hint="Internal reference number (optional)"
          className="md:col-span-2 text-xs"
        />
      </Section>

      {/* Actions */}
      <div className="mt-10 flex justify-end gap-3">
        <button
          type="submit"
          className="rounded-md bg-[#022658] px-8 py-3 text-base font-medium text-[#D3AF34] hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
        >
          Save Customer
        </button>
        <button
          type="button"
          className="rounded border border-line bg-white px-6 py-2.5 text-sm text-navy hover:bg-page focus:outline-none focus-visible:ring-2 focus-visible:ring-navy"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}