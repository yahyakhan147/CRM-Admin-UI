export default function PipelineDistribution({
  items = [
    { label: "Interested", value: 8, max: 12, color: "#0091ff" },
    { label: "Offers Created", value: 5, max: 12, color: "#b621c9" },
    { label: "Offers Delivered", value: 3, max: 12, color: "#f4c11a" },
    { label: "Agency Appointment", value: 6, max: 12, color: "#f5811f" },
    { label: "BGS Confirmed", value: 11, max: 12, color: "#2fb350" },
  ],
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_-12px_rgba(30,64,175,0.12)] dark:bg-slate-900 dark:shadow-[0_10px_40px_-12px_rgba(2,6,23,0.7)] sm:p-8">
      <h2 className="text-base font-semibold text-[#0a2258] dark:text-slate-100">Pipeline Distribution</h2>

      <div className="mt-6 space-y-4">
        {items.map(({ label, value, max, color }) => (
          <div key={label} className="flex items-center gap-4">
            {/* Label */}
            <span className="w-36 shrink-0 text-right text-sm text-slate-500 dark:text-slate-300 sm:w-40">
              {label}
            </span>

            {/* Track + fill */}
            <div className="h-2.5 flex-1 rounded-full bg-[#dbe6f9] dark:bg-slate-700">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${Math.min((value / max) * 100, 100)}%`,
                  backgroundColor: color,
                }}
              />
            </div>

            {/* Value badge */}
            <span
              className="w-14 shrink-0 rounded-full border bg-sky-50 py-1 text-center text-sm font-semibold dark:border-sky-500/40 dark:bg-sky-500/10"
              style={{ borderColor: "#bfe0ff", color: "#0a2258" }}
            >
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}