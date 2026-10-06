import { useState } from "react";
import {
  Users,
  BadgePercent,
  ShieldCheck,
  CalendarCheck,
  ClipboardCheck,
  ClipboardX,
  SquarePen,
  SquareCheck,
  Phone,
  Mail,
  User,
  Clock,
  CircleChevronDown,
  Plus,
  CornerUpRight,
  PencilLine,
} from "lucide-react";

/* ---------- data ---------- */

// Full class strings so Tailwind can detect them.
const STAGES = [
  {
    key: "interested",
    label: "Interested",
    actionLabel: "New Customer",
    count: 14,
    icon: Users,
    card: "bg-blue-100 border-blue-300",
    badge: "bg-blue-100 text-blue-900",
    circle: "bg-blue-600",
  },
  {
    key: "offer",
    label: "Offer",
    actionLabel: "New Offer",
    count: 2,
    icon: BadgePercent,
    card: "bg-red-100 border-red-300",
    badge: "bg-red-100 text-red-900",
    circle: "bg-red-500",
  },
  {
    key: "delivered",
    label: "Offer Delivered",
    actionLabel: "Submitted to Agency",
    count: 6,
    icon: ShieldCheck,
    card: "bg-green-100 border-green-400",
    badge: "bg-green-100 text-green-900",
    circle: "bg-green-600",
  },
  {
    key: "agency",
    label: "Agency Appointment",
    actionLabel: "Appointment at Office",
    count: 8,
    icon: CalendarCheck,
    card: "bg-lime-100 border-lime-300",
    badge: "bg-lime-100 text-lime-900",
    circle: "bg-lime-500",
  },
  {
    key: "bgsConfirmed",
    label: "BGS Confirmed",
    actionLabel: "Add BGS",
    count: 7,
    icon: ClipboardCheck,
    card: "bg-orange-200 border-orange-400",
    badge: "bg-orange-200 text-orange-900",
    circle: "bg-orange-500",
  },
  {
    key: "bgsDeclined",
    label: "BGS Declined",
    actionLabel: "Open Re-negotiation",
    count: 5,
    icon: ClipboardX,
    card: "bg-slate-100 border-slate-400",
    badge: "bg-slate-200 text-slate-900",
    circle: "bg-blue-500",
  },
  {
    key: "enrolled",
    label: "Enrolled",
    actionLabel: "Create Contract",
    count: 9,
    icon: SquarePen,
    card: "bg-teal-100 border-teal-400",
    badge: "bg-teal-100 text-teal-900",
    circle: "bg-emerald-400",
  },
  {
    key: "finished",
    label: "Inerested",
    actionLabel: "Work Completed",
    count: 9,
    icon: SquareCheck,
    card: "bg-fuchsia-100 border-fuchsia-400",
    badge: "bg-fuchsia-100 text-fuchsia-900",
    circle: "bg-fuchsia-500",
  },
];

const LEADS_BY_STAGE = {
  interested: [
    { id: 1, name: "Muhammad Daud", phone: "+49162234956", email: "mohaud512@gmail.com", owner: "Sarah Schmidt", pipeline: "2D in pipeline", avatar: "bg-teal-500", assigned: true },
    { id: 2, name: "Lena Fischer", phone: "+491511827364", email: "lena.fischer@gmail.com", owner: "Sarah Schmidt", pipeline: "2D in pipeline", avatar: "bg-red-500", assigned: false },
  ],
  offer: [
    { id: 3, name: "Jonas Weber", phone: "+491762348190", email: "jonas.weber@gmail.com", owner: "Daniel Klein", pipeline: "Offer prepared", avatar: "bg-blue-500", assigned: true },
    { id: 4, name: "Amina Yilmaz", phone: "+491573846201", email: "amina.yilmaz@gmail.com", owner: "Daniel Klein", pipeline: "Offer requested", avatar: "bg-[#D3AF34]", assigned: false },
  ],
  delivered: [
    { id: 5, name: "Sofia Wagner", phone: "+491609281745", email: "sofia.wagner@gmail.com", owner: "Sarah Schmidt", pipeline: "Offer delivered", avatar: "bg-fuchsia-500", assigned: true },
    { id: 6, name: "Emil Hoffmann", phone: "+491522814763", email: "emil.hoffmann@gmail.com", owner: "Daniel Klein", pipeline: "Awaiting response", avatar: "bg-green-600", assigned: true },
  ],
  agency: [
    { id: 7, name: "Mia Schneider", phone: "+491762098341", email: "mia.schneider@gmail.com", owner: "Sarah Schmidt", pipeline: "Appointment booked", avatar: "bg-lime-600", assigned: true },
    { id: 8, name: "Noah Becker", phone: "+491577120983", email: "noah.becker@gmail.com", owner: "Daniel Klein", pipeline: "Appointment pending", avatar: "bg-cyan-600", assigned: false },
  ],
  bgsConfirmed: [
    { id: 9, name: "Leonie Bauer", phone: "+491523908417", email: "leonie.bauer@gmail.com", owner: "Sarah Schmidt", pipeline: "BGS confirmed", avatar: "bg-orange-500", assigned: true },
    { id: 10, name: "Paul Richter", phone: "+491609347125", email: "paul.richter@gmail.com", owner: "Daniel Klein", pipeline: "BGS confirmed", avatar: "bg-emerald-600", assigned: true },
  ],
  bgsDeclined: [
    { id: 11, name: "Nora Lehmann", phone: "+491764182930", email: "nora.lehmann@gmail.com", owner: "Sarah Schmidt", pipeline: "BGS declined", avatar: "bg-slate-500", assigned: true },
    { id: 12, name: "Leon Kruger", phone: "+491522760184", email: "leon.krueger@gmail.com", owner: "Daniel Klein", pipeline: "Review requested", avatar: "bg-blue-700", assigned: false },
  ],
  enrolled: [
    { id: 13, name: "Clara Neumann", phone: "+491577492013", email: "clara.neumann@gmail.com", owner: "Sarah Schmidt", pipeline: "Enrollment in progress", avatar: "bg-teal-600", assigned: true },
    { id: 14, name: "Felix Braun", phone: "+491609723851", email: "felix.braun@gmail.com", owner: "Daniel Klein", pipeline: "Documents pending", avatar: "bg-amber-600", assigned: false },
  ],
  finished: [
    { id: 15, name: "Amir Hassan", phone: "+491762314087", email: "amir.hassan@gmail.com", owner: "Sarah Schmidt", pipeline: "Successfully finished", avatar: "bg-fuchsia-600", assigned: true },
    { id: 16, name: "Emma Vogel", phone: "+491573648219", email: "emma.vogel@gmail.com", owner: "Daniel Klein", pipeline: "Lead lost", avatar: "bg-rose-600", assigned: false },
  ],
};

const initials = (name) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

/* ---------- pieces ---------- */

function StageCard({ stage, active, onClick }) {
  const Icon = stage.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`min-w-[6rem] flex-1 rounded-xl border p-1.5 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-navy dark:border-slate-700 dark:bg-slate-800/80 ${stage.card} ${
        active ? "border-2 border-blue-500 shadow-[0_0_8px_2px_rgba(14,165,233,0.45)] dark:border-sky-400 dark:shadow-[0_0_10px_2px_rgba(56,189,248,0.35)]" : "hover:brightness-95 dark:hover:brightness-110"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className={`flex h-10 w-10 items-center justify-center rounded-full text-white ${stage.circle}`}>
          <Icon className="h-5 w-5" strokeWidth={2} />
        </span>
        <span className="text-base font-semibold text-ink dark:text-slate-100">{stage.count}</span>
      </div>
      <div className="mt-2 flex items-center justify-between rounded-md bg-white/70 px-2 py-1 text-[10px] text-muted dark:bg-slate-700/60 dark:text-slate-200">
        <span className="truncate">{stage.label}</span>
        <CornerUpRight className="h-3.5 w-3.5 shrink-0 text-ink dark:text-slate-100" />
      </div>
    </button>
  );
}

function LeadCard({ lead, stage }) {
  return (
    <article className="grid items-start gap-4 rounded-lg border border-line bg-white p-5 transition hover:bg-neutral-100 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-800/90 md:grid-cols-[auto_minmax(0,3fr)_minmax(0,2fr)]">
      <div
        className={`flex h-[72px] w-[72px] rounded-lg items-center justify-center text-2xl font-medium text-white ${lead.avatar}`}
        aria-hidden="true"
      >
        {initials(lead.name)}
      </div>

      <div className="min-w-0">
        <h3 className="text-xl font-medium text-ink dark:text-slate-100">{lead.name}</h3>
        <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-[#79747E] dark:text-slate-300">
          <span className="flex items-center gap-1.5">
            <Phone className="h-4 w-4" />
            {lead.phone}
          </span>
          <span className="flex items-center gap-1.5">
            <Mail className="h-4 w-4" />
            {lead.email}
          </span>
          <span className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            {lead.owner}
          </span>
        </div>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-[#79747E] text-muted dark:text-slate-400">
          <CircleChevronDown className="h-4 w-4" />
          {lead.pipeline}
        </p>
      </div>

      {lead.assigned ? (
        <span className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold ${stage.badge}`}>
          <Users className="h-4 w-4 font-bold" />
          {stage.label}
        </span>
      ) : (
        <button
          type="button"
          className="justify-self-start rounded-full border border-dashed border-gray-400 px-5 py-1.5 text-sm text-gray-500 hover:bg-white hover:text-ink dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-slate-100 md:justify-self-end md:self-center"
        >
          Request assignment
        </button>
      )}
    </article>
  );
}

/* ---------- page ---------- */

export default function InterestedLeads() {
  const [activeStage, setActiveStage] = useState("interested");
  const selectedStage = STAGES.find((stage) => stage.key === activeStage);
  const activeLeads = LEADS_BY_STAGE[activeStage];

  return (
    <div className="mx-auto rounded-3xl bg-white lg:p-2 font-sans sm:p-6 dark:bg-slate-900 dark:text-slate-100">
      {/* Stage tabs */}
      <div className="flex gap-2 overflow-x-auto p-1 pb-4" role="tablist" aria-label="Pipeline stages">
        {STAGES.map((s) => (
          <StageCard
            key={s.key}
            stage={s}
            active={activeStage === s.key}
            onClick={() => setActiveStage(s.key)}
          />
        ))}
      </div>
      <hr className="border-line/70 dark:border-slate-700" />

      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 py-5">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted text-[#707EAE] dark:text-slate-300">
          <span className="flex items-center gap-1.5">
            <Users className="h-4 w-4" />
            {activeLeads.length} Leads
          </span>
          <span>|</span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {selectedStage.count} in stage
          </span>
          <span>|</span>
          <span className="flex items-center gap-1.5">
            <PencilLine className="h-4 w-4" />
            Only assigned leads are editable
          </span>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 rounded-md bg-[#022658] px-6 py-3 font-medium text-[#D3AF34] hover:bg-navy/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
        >
          <Plus className="h-5 w-5" />
          {selectedStage.actionLabel}
        </button>
      </div>

      {/* Lead list */}
      <div className="space-y-4 rounded-xl border border-line p-4 sm:p-5 dark:border-slate-700 dark:bg-slate-800/40">
        {activeLeads.map((lead) => (
          <LeadCard key={lead.id} lead={lead} stage={selectedStage} />
        ))}
      </div>
    </div>
  );
}

