export default function ActiveLeads() {
  return (
    <div className="group relative isolate flex cursor-pointer items-center justify-between gap-6 overflow-hidden rounded-[20px] bg-white p-4 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_-12px_rgba(10,34,88,0.45)] dark:bg-slate-900 dark:shadow-[0_18px_40px_-12px_rgba(2,6,23,0.75)]">
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[#022658] via-[#174686] to-sky-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      {/* Left: label, value, trend */}
      <div>
        <p className="w-40 text-sm font-normal text-indigo-300 group-hover:text-white dark:text-slate-300">Active Leads</p>
        <p className="mt-1 font-display text-2xl font-bold text-slate-900 group-hover:text-white dark:text-slate-100">
          24
          <div className=" text-sm font-bold justify-center items-center text-balck">14  </div>
        </p>
            
        <p className="mt-1 flex items-center gap-1 text-xs font-semibold group-hover:text-white">
          <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 h-4 w-4 text-orange-500 group-hover:text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
</svg>
</span>
          <span className="text-orange-500 text-xs font-semibold group-hover:text-white">3 this week</span>
        </p>
      </div>

      {/* Right: icon */}
      <div className="flex h-20 w-24 items-center justify-center text-[#0a2258] group-hover:fill-white dark:text-slate-200" aria-hidden="true">
          <svg width="64" height="46" viewBox="0 0 64 46" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<rect x="58.0737" y="45.5705" width="45.5705" height="5.33286" rx="2.66643" transform="rotate(-90 58.0737 45.5705)" fill="#E9EDF7"/>
<rect x="58.0737" y="45.5705" width="10.8668" height="5.33286" rx="2.66643" transform="rotate(-90 58.0737 45.5705)" fill="#022658"/>
<rect x="43.5549" y="45.5705" width="45.5705" height="5.33281" rx="2.66641" transform="rotate(-90 43.5549 45.5705)" fill="#E9EDF7"/>
<rect x="43.5549" y="45.5705" width="41.364" height="5.33287" rx="2.66643" transform="rotate(-90 43.5549 45.5705)" fill="#022658"/>
<rect x="29.0369" y="45.5705" width="45.5705" height="5.33286" rx="2.66643" transform="rotate(-90 29.0369 45.5705)" fill="#E9EDF7"/>
<rect x="29.0369" y="45.5705" width="31.5488" height="5.33287" rx="2.66643" transform="rotate(-90 29.0369 45.5705)" fill="#022658"/>
<rect x="14.5188" y="45.5705" width="45.5705" height="5.33287" rx="2.66644" transform="rotate(-90 14.5188 45.5705)" fill="#E9EDF7"/>
<rect x="14.5188" y="45.5705" width="23.4863" height="5.33287" rx="2.66643" transform="rotate(-90 14.5188 45.5705)" fill="#022658"/>
<rect y="45.5705" width="45.5705" height="5.33287" rx="2.66644" transform="rotate(-90 0 45.5705)" fill="#E9EDF7"/>
<rect y="45.5705" width="37.508" height="5.33288" rx="2.66644" transform="rotate(-90 0 45.5705)" fill="#022658"/>
</svg>
      </div>
    </div>
  );
}