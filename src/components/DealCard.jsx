import { currency } from "../data/mockData";

export default function DealCard({ deal }) {
  return (
    <div className="bg-panel rounded-lg border border-slate-200 shadow-card p-3.5 hover:border-signal/40 transition-colors cursor-pointer">
      <p className="text-sm font-medium text-ink leading-snug">{deal.name}</p>
      <p className="text-xs text-slate-500 mt-1">{deal.company}</p>
      <div className="flex items-center justify-between mt-3">
        <span className="font-mono text-sm font-semibold text-ink">
          {currency(deal.value)}
        </span>
        <span className="text-[11px] text-slate-400">{deal.owner}</span>
      </div>
    </div>
  );
}
