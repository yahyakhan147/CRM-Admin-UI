import { useEffect, useRef, useState } from "react";
import {
  Mail, Phone, Globe, User, Calendar, Clock, FileText, Files, Pencil, Check,
  ChevronDown, ChevronLeft, ChevronRight, Plus, Upload, ArrowRight, Users,
} from "lucide-react";

/* ================= shared pieces ================= */

const inputCls =
  "h-9 w-full rounded border border-line bg-white px-3 text-xs text-ink placeholder:text-gray-400 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy";
const primaryBtn =
  "inline-flex h-9 items-center justify-center gap-2 rounded bg-primary px-5 text-base font-medium text-secondary hover:bg-navy/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2";

function useOutsideClose(ref, open, close) {
  useEffect(() => {
    if (!open) return;
    const down = (e) => ref.current && !ref.current.contains(e.target) && close();
    const key = (e) => e.key === "Escape" && close();
    document.addEventListener("mousedown", down);
    document.addEventListener("keydown", key);
    return () => {
      document.removeEventListener("mousedown", down);
      document.removeEventListener("keydown", key);
    };
  }, [open, ref, close]);
}

function Card({ title, subtitle, action, children, bodyClass = "p-7" }) {
  return (
    <section className="rounded-2xl border-[#CACACA] border border-line bg-white shadow-sm">
      {title && (
        <header className="flex items-center justify-between bg-[#F4F4F4] px-5 py-5">
          <div>
            <h2 className="text-base font-semibold text-ink">{title}</h2>
            {subtitle && <p className="text-sm text-[#82838B]">{subtitle}</p>}
          </div>
          {action}
        </header>
      )}
      <div className={bodyClass}>{children}</div>
    </section>
  );
}

const Label = ({ htmlFor, id, children }) => (
  <label htmlFor={htmlFor} id={id} className="mb-1.5 block text-sm text-ink">{children}</label>
);

/* ================= dropdown ================= */

function Dropdown({ id, label, options, value, onChange, className = "" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOutsideClose(ref, open, () => setOpen(false));

  return (
    <div className={className}>
      <Label id={`${id}-label`}>{label}</Label>
      <div className="relative" ref={ref}>
        <button
          id={id}
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby={`${id}-label ${id}`}
          onClick={() => setOpen((o) => !o)}
          className={`${inputCls} flex items-center justify-between text-left text-sm`}
        >
          <span className={value ? "text-ink" : "text-gray-500 text-sm"}>{value || "--Select--"}</span>
          <ChevronDown className={`h-4 w-4 text-muted transition ${open ? "rotate-180" : ""}`} />
        </button>

        {open && (
          <ul
            role="listbox"
            aria-labelledby={`${id}-label`}
            className="absolute z-20 mt-1 max-h-48 w-full overflow-auto rounded border border-line bg-white py-1 shadow-lg"
          >
            {options.map((o) => (
              <li key={o} role="option" aria-selected={o === value}>
                <button
                  type="button"
                  onClick={() => { onChange(o); setOpen(false); }}
                  className={`flex w-full items-center justify-between px-3 py-2 text-left text-sm hover:bg-blue-50 ${
                    o === value ? "font-medium text-navy" : "text-ink"
                  }`}
                >
                  {o}
                  {o === value && <Check className="h-3.5 w-3.5" />}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

/* ================= date picker ================= */

const pad = (n) => String(n).padStart(2, "0");
const sameDay = (a, b) =>
  a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

function DatePicker({ id, value, onChange, className = "" }) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(() => {
    const d = value || new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });
  const ref = useRef(null);
  useOutsideClose(ref, open, () => setOpen(false));

  const today = new Date();
  const offset = (view.getDay() + 6) % 7; // Monday first
  const cells = Array.from({ length: 42 }, (_, i) => new Date(view.getFullYear(), view.getMonth(), 1 - offset + i));
  const shift = (n) => setView(new Date(view.getFullYear(), view.getMonth() + n, 1));

  return (
    <div className={`relative ${className}`} ref={ref}>
      <button
        id={id}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={`${inputCls} flex items-center justify-between text-left`}
      >
        <span className={value ? "text-ink" : "text-gray-400"}>
          {value ? `${pad(value.getDate())}.${pad(value.getMonth() + 1)}.${value.getFullYear()}` : "Date"}
        </span>
        <Calendar className="h-4 w-4 text-muted" strokeWidth={1.6} />
      </button>

      {open && (
        <div role="dialog" aria-label="Choose date" className="absolute left-0 z-20 mt-1 w-64 rounded-2xl border-[#CACACA] border border-line bg-white p-3 shadow-lg">
          <div className="mb-2 flex items-center justify-between">
            <button type="button" onClick={() => shift(-1)} aria-label="Previous month" className="rounded p-1 text-muted hover:bg-gray-100">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-xs font-semibold">
              {view.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </span>
            <button type="button" onClick={() => shift(1)} aria-label="Next month" className="rounded p-1 text-muted hover:bg-gray-100">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-7 text-center text-[10px] text-muted">
            {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => <div key={d} className="py-1">{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-y-0.5">
            {cells.map((d) => {
              const selected = sameDay(d, value);
              return (
                <button
                  key={d.toISOString()}
                  type="button"
                  onClick={() => { onChange(d); setOpen(false); }}
                  className={`h-8 rounded text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                    selected
                      ? "bg-blue-600 font-medium text-white"
                      : `hover:bg-blue-50 ${d.getMonth() === view.getMonth() ? "text-ink" : "text-gray-400"} ${
                          sameDay(d, today) ? "ring-1 ring-inset ring-blue-600" : ""
                        }`
                  }`}
                >
                  {d.getDate()}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/* ================= pipeline ================= */

const STEPS = ["Interested", "Appointment", "Offer", "Agency Submitted", "BGS Confirmed", "Enrolled"];

function PipelineProgress({ completed }) {
  return (
    <ol className="flex flex-wrap items-start justify-between gap-y-4 sm:flex-nowrap">
      {STEPS.map((s, i) => {
        const done = i < completed;
        return (
          <li key={s} className="relative flex min-w-0 flex-1 flex-col items-center gap-2 text-center">
            {i > 0 && (
              <span
                className={`absolute right-1/2 top-5 hidden h-px w-[calc(100%-0.75rem)] sm:block ${done ? "bg-primary" : "bg-gray-200"}`}
                aria-hidden="true"
              />
            )}
            <span
              className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full text-xs sm:h-11 sm:w-11 sm:text-sm ${
                done ? "bg-primary text-white" : "border border-gray-200 bg-white text-gray-400"
              }`}
            >
              {done ? <Check className="h-4 w-4" strokeWidth={3} /> : i + 1}
            </span>
            <span className="max-w-[88px] text-center text-[10px] leading-tight text-muted sm:max-w-none sm:text-sm">
              {s}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

/* ================= page ================= */

const MODULES = ["Course A", "Course B", "Course C"];
const DOC_TYPES = ["BGS Voucher", "ID Document", "Contract", "Other"];
const HISTORY = [{ at: "08 Sep 2026, 20:09", from: "BGS Confirmed", to: "Enrolled" }];

export default function EnrollmentEntries() {
  const [appointment, setAppointment] = useState(null);
  const [module, setModule] = useState("");
  const [docType, setDocType] = useState("BGS Voucher");
  const [fileName, setFileName] = useState("");

  return (
    <div className="mx-auto space-y-5 bg-page p-4 font-sans">
      {/* Header */}
      <Card bodyClass="p-7">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-ink">Muhammad Khan</h1>
            <p className="mt-1 flex flex-wrap items-center gap-x-4 text-sm text-[#82838B] text-muted">
              <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" />yahyak977@gmail.com</span>
              <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" />+322 4727126</span>
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-green-400 bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
            <Users className="h-3 w-3" /> Enrolled
          </span>
        </div>

        <p className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1 border-b border-line/70 pb-4 text-sm text-[#82838B] text-muted">
          <span className="flex items-center gap-1.5"><Globe className="h-3.5 w-3.5" />Website</span>
          <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" />Sarah Schmidt</span>
          <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />Added 15 Sep 2026</span>
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <button type="button" className="rounded-md bg-primary px-6 py-2 text-base flex justify-center items-center gap-2 font-medium text-secondary hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_131_4348)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.9375 10.875C3.9375 10.5644 4.18934 10.3125 4.5 10.3125H10.5C10.8107 10.3125 11.0625 10.5644 11.0625 10.875C11.0625 11.1857 10.8107 11.4375 10.5 11.4375H4.5C4.18934 11.4375 3.9375 11.1857 3.9375 10.875Z" fill="#D3AF34"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.9375 13.5C3.9375 13.1894 4.18934 12.9375 4.5 12.9375H8.625C8.93566 12.9375 9.1875 13.1894 9.1875 13.5C9.1875 13.8107 8.93566 14.0625 8.625 14.0625H4.5C4.18934 14.0625 3.9375 13.8107 3.9375 13.5Z" fill="#D3AF34"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.1875 2.12566C8.8422 2.06699 8.37148 2.06254 7.52234 2.06254C6.08483 2.06254 5.06306 2.06372 4.28839 2.1674C3.52947 2.26897 3.0934 2.4595 2.77643 2.77647C2.45902 3.09387 2.26877 3.52861 2.16732 4.28317C2.0637 5.05392 2.0625 6.06992 2.0625 7.50004V10.5C2.0625 11.9302 2.0637 12.9462 2.16732 13.7169C2.26877 14.4715 2.45902 14.9062 2.77643 15.2236C3.09384 15.541 3.52857 15.7313 4.28314 15.8327C5.05388 15.9363 6.06988 15.9375 7.5 15.9375H10.5C11.9301 15.9375 12.9461 15.9363 13.7169 15.8327C14.4714 15.7313 14.9062 15.541 15.2236 15.2236C15.541 14.9062 15.7312 14.4715 15.8327 13.7169C15.9363 12.9462 15.9375 11.9302 15.9375 10.5V10.1722C15.9375 9.0202 15.9294 8.47409 15.8071 8.06254H13.4597C12.6101 8.06256 11.9158 8.06257 11.3677 7.98888C10.7947 7.91184 10.2979 7.74513 9.90143 7.34861C9.50491 6.95209 9.3382 6.45534 9.26116 5.88237C9.18747 5.33423 9.18748 4.63993 9.1875 3.7903V2.12566ZM10.3125 2.70713V3.75004C10.3125 4.64982 10.3137 5.26808 10.3761 5.73247C10.4364 6.18068 10.5443 6.40046 10.6969 6.55312C10.8496 6.70577 11.0694 6.81365 11.5176 6.87391C11.982 6.93634 12.6002 6.93754 13.5 6.93754H15.0146C14.7923 6.72188 14.5074 6.46348 14.1375 6.13055L11.1684 3.45838C10.8044 3.13075 10.5334 2.8889 10.3125 2.70713ZM7.63159 0.937519C8.67004 0.937241 9.34095 0.937062 9.95844 1.17402C10.5759 1.41097 11.0724 1.85801 11.8405 2.54966C11.867 2.57354 11.8938 2.59771 11.921 2.62217L14.8901 5.29434C14.9217 5.32279 14.9529 5.35088 14.9838 5.37862C15.8715 6.1771 16.4456 6.69344 16.7543 7.38676C17.0631 8.08009 17.0629 8.85219 17.0625 10.0462C17.0625 10.0877 17.0625 10.1297 17.0625 10.1722V10.5423C17.0625 11.9207 17.0625 13.0124 16.9476 13.8668C16.8294 14.7461 16.5803 15.4578 16.0191 16.0191C15.4578 16.5804 14.7461 16.8295 13.8668 16.9477C13.0124 17.0626 11.9206 17.0625 10.5423 17.0625H7.45769C6.07937 17.0625 4.98764 17.0626 4.13323 16.9477C3.25392 16.8295 2.5422 16.5804 1.98093 16.0191C1.41966 15.4578 1.17057 14.7461 1.05235 13.8668C0.937479 13.0124 0.937488 11.9207 0.9375 10.5424V7.45772C0.937488 6.07941 0.937479 4.98768 1.05235 4.13327C1.17057 3.25395 1.41966 2.54224 1.98093 1.98097C2.54264 1.41926 3.25674 1.17044 4.13915 1.05234C4.99712 0.937517 6.09428 0.937526 7.48014 0.937538L7.52234 0.937538C7.55921 0.937538 7.59562 0.937528 7.63159 0.937519Z" fill="#D3AF34"/>
</g>
<defs>
<clipPath id="clip0_131_4348">
<rect width="18" height="18" fill="white"/>
</clipPath>
</defs>
</svg> Open Formular</button>
          <button type="button" className="rounded border border-line bg-white px-6 py-2 flex justify-center items-center gap-2 text-sm text-primary hover:bg-page focus:outline-none focus-visible:ring-2 focus-visible:ring-navy">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_131_4396)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.1875 2.12566C8.8422 2.06699 8.37148 2.06254 7.52234 2.06254C6.08483 2.06254 5.06306 2.06372 4.28839 2.1674C3.52947 2.26897 3.0934 2.4595 2.77643 2.77647C2.45902 3.09387 2.26877 3.52861 2.16732 4.28317C2.0637 5.05392 2.0625 6.06992 2.0625 7.50004V10.5C2.0625 11.9302 2.0637 12.9462 2.16732 13.7169C2.26877 14.4715 2.45902 14.9062 2.77643 15.2236C3.09384 15.541 3.52857 15.7313 4.28314 15.8327C5.05388 15.9363 6.06988 15.9375 7.5 15.9375H10.5C11.9301 15.9375 12.9461 15.9363 13.7169 15.8327C14.4714 15.7313 14.9062 15.541 15.2236 15.2236C15.541 14.9062 15.7312 14.4715 15.8327 13.7169C15.9363 12.9462 15.9375 11.9302 15.9375 10.5V10.1722C15.9375 9.0202 15.9294 8.47409 15.8071 8.06254H13.4597C12.6101 8.06256 11.9158 8.06257 11.3677 7.98888C10.7947 7.91184 10.2979 7.74513 9.90143 7.34861C9.50491 6.95209 9.3382 6.45534 9.26116 5.88237C9.18747 5.33423 9.18748 4.63993 9.1875 3.7903V2.12566ZM10.3125 2.70713V3.75004C10.3125 4.64982 10.3137 5.26808 10.3761 5.73247C10.4364 6.18068 10.5443 6.40046 10.6969 6.55312C10.8496 6.70577 11.0694 6.81365 11.5176 6.87391C11.982 6.93634 12.6002 6.93754 13.5 6.93754H15.0146C14.7923 6.72188 14.5074 6.46348 14.1375 6.13055L11.1684 3.45838C10.8044 3.13075 10.5334 2.8889 10.3125 2.70713ZM7.63159 0.937519C8.67004 0.937241 9.34095 0.937062 9.95844 1.17402C10.5759 1.41097 11.0724 1.85801 11.8405 2.54966C11.867 2.57354 11.8938 2.59771 11.921 2.62217L14.8901 5.29434C14.9217 5.32279 14.9529 5.35088 14.9838 5.37862C15.8715 6.1771 16.4456 6.69344 16.7543 7.38676C17.0631 8.08009 17.0629 8.85219 17.0625 10.0462C17.0625 10.0877 17.0625 10.1297 17.0625 10.1722V10.5423C17.0625 11.9207 17.0625 13.0124 16.9476 13.8668C16.8294 14.7461 16.5803 15.4578 16.0191 16.0191C15.4578 16.5804 14.7461 16.8295 13.8668 16.9477C13.0124 17.0626 11.9206 17.0625 10.5423 17.0625H7.45769C6.07937 17.0625 4.98764 17.0626 4.13323 16.9477C3.25392 16.8295 2.5422 16.5804 1.98093 16.0191C1.41966 15.4578 1.17057 14.7461 1.05235 13.8668C0.937479 13.0124 0.937488 11.9207 0.9375 10.5424V7.45772C0.937488 6.07941 0.937479 4.98768 1.05235 4.13327C1.17057 3.25395 1.41966 2.54224 1.98093 1.98097C2.54264 1.41926 3.25674 1.17044 4.13915 1.05234C4.99712 0.937517 6.09428 0.937526 7.48014 0.937538L7.52234 0.937538C7.55921 0.937538 7.59562 0.937528 7.63159 0.937519Z" fill="#022658"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.1875 8.62504C3.1875 7.69306 3.94302 6.93754 4.875 6.93754H7.125C8.05698 6.93754 8.8125 7.69306 8.8125 8.62504C8.8125 9.05724 8.65002 9.45149 8.38281 9.75004C8.65002 10.0486 8.8125 10.4428 8.8125 10.875C8.8125 11.807 8.05698 12.5625 7.125 12.5625C6.92777 12.5625 6.73844 12.5287 6.5625 12.4665V13.125C6.5625 14.057 5.80698 14.8125 4.875 14.8125C3.94302 14.8125 3.1875 14.057 3.1875 13.125C3.1875 12.6928 3.34998 12.2986 3.61719 12C3.34998 11.7015 3.1875 11.3072 3.1875 10.875C3.1875 10.4428 3.34998 10.0486 3.61719 9.75004C3.34998 9.45149 3.1875 9.05724 3.1875 8.62504ZM4.875 10.3125C4.56434 10.3125 4.3125 10.5644 4.3125 10.875C4.3125 11.1857 4.56434 11.4375 4.875 11.4375H5.4375V10.3125H4.875ZM5.4375 9.18754H4.875C4.56434 9.18754 4.3125 8.9357 4.3125 8.62504C4.3125 8.31438 4.56434 8.06254 4.875 8.06254H5.4375V9.18754ZM7.125 9.18754C7.43566 9.18754 7.6875 8.9357 7.6875 8.62504C7.6875 8.31438 7.43566 8.06254 7.125 8.06254H6.5625V9.18754H7.125ZM7.125 10.3125C6.81434 10.3125 6.5625 10.5644 6.5625 10.875C6.5625 11.1857 6.81434 11.4375 7.125 11.4375C7.43566 11.4375 7.6875 11.1857 7.6875 10.875C7.6875 10.5644 7.43566 10.3125 7.125 10.3125ZM5.4375 12.5625H4.875C4.56434 12.5625 4.3125 12.8144 4.3125 13.125C4.3125 13.4357 4.56434 13.6875 4.875 13.6875C5.18566 13.6875 5.4375 13.4357 5.4375 13.125V12.5625Z" fill="#022658"/>
</g>
<defs>
<clipPath id="clip0_131_4396">
<rect width="18" height="18" fill="white"/>
</clipPath>
</defs>
</svg> Erstkontaktbogen (PDF)
          </button>
        </div>
      </Card>

      {/* Personal data */}
      <Card
        title="Personal Data"
        action={
          <button type="button" className="flex items-center gap-1.5 text-base font-semibold text-ink hover:text-navy">
            <Pencil className="h-3.5 w-3.5" />Edit
          </button>
        }
      >
        <dl className="grid gap-x-6 gap-y-4 text-base sm:grid-cols-2">
          {[
            ["Date of Birth", "08 Mar 1992"],
            ["Gender", "Female"],
            ["Nationality", "Deutsch"],
            ["Address", "Schillerstraße 7, Berlin 1067"],
            ["Appointment", "15 Aug 2026, 11:00 AM"],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-muted">{k}</dt>
              <dd className="font-semibold text-ink">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-4 border-t border-line/70 pt-3">
          <p className="mb-2 flex items-center gap-1.5 text-xs text-[#82838B] uppercase text-muted">
            <Clock className="h-3 w-3" />Agency appointment (Jobcenter / Agentur für Arbeit / Rentenversicherung)
          </p>
          <div className="flex items-center gap-3">
            <DatePicker id="agency-date" value={appointment} onChange={setAppointment} className="w-44" />
            <button type="button" className={primaryBtn} onClick={() => console.log("save", appointment)}>Save</button>
          </div>
        </div>
      </Card>

      {/* Pipeline */}
      <Card>
        <h2 className="mb-4 text-base font-semibold text-ink">Pipeline Progress</h2>
        <PipelineProgress completed={5} />
      </Card>

      {/* Products & contracts */}
      <Card title="Products & Contracts">
        <p className="text-base text-muted">No Course or contracts Yet.</p>
      </Card>

      {/* Products / offer */}
      <Card title="Products / Offer" subtitle="Modules being offered to this participant">
        <p className="mb-3 text-base font-medium text-[#82838B]">Add Module</p>
        <div className="grid items-end gap-3 md:grid-cols-[1.2fr_1fr_1.6fr_auto]">
          <Dropdown id="module" label="Module / Product" options={MODULES} value={module} onChange={setModule} />
          <div>
            <Label htmlFor="price">Price (£)</Label>
            <input id="price" type="number" min="0" className={inputCls} />
          </div>
          <div>
            <Label htmlFor="notes-opt">Notes Optional</Label>
            <input id="notes-opt" type="text" className={inputCls} />
          </div>
          <button type="button" className={primaryBtn}><Plus className="h-4 w-4" />Add</button>
        </div>
      </Card>

      {/* Documents */}
      <Card title="Documents">
        <div className="flex flex-wrap items-end gap-4">
          <Dropdown id="doc-type" label="Document Type" options={DOC_TYPES} value={docType} onChange={setDocType} className="w-44" />
          <div>
            <span className="mb-1.5 block text-xs text-ink">File</span>
            <div className="flex items-center gap-3">
              <label className="flex h-9 cursor-pointer items-center rounded bg-gray-100 px-4 text-xs text-ink hover:bg-gray-200 focus-within:ring-2 focus-within:ring-navy">
                Choose File
                <input type="file" className="sr-only" onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")} />
              </label>
              <span className="text-xs text-ink">{fileName || "No File Chosen"}</span>
              <button type="button" className={primaryBtn}><Upload className="h-4 w-4" />Upload</button>
            </div>
          </div>
        </div>
      </Card>

      {/* Stage history */}
      <Card title="Stage History">
        <ul className="space-y-3">
          {HISTORY.map((h) => (
            <li key={h.at} className="border-l-2 border-green-500 pl-2 text-sm leading-tight">
              <p className="text-muted">{h.at}</p>
              <p className="mt-0.5 flex items-center gap-2 text-green-700">
                {h.from}<ArrowRight className="h-3 w-3" />{h.to}
              </p>
            </li>
          ))}
        </ul>
      </Card>

      {/* Notes */}
      <Card>
        <h2 className="mb-1 text-base font-medium text-ink">Notes</h2>
        <p className="text-base text-muted">BGS Confirmed, Contracts to be signed.</p>
      </Card>
    </div>
  );
}