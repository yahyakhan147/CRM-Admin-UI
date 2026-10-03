export default function LeadTable({ leads }) {
  return (
    <div className="bg-panel rounded-xl border border-slate-200 shadow-card overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-xs font-semibold uppercase tracking-wide text-slate-500 bg-slate-50 border-b border-slate-200">
            <th className="px-5 py-3">Lead</th>
            <th className="px-5 py-3">Company</th>
            <th className="px-5 py-3">Source</th>
            <th className="px-5 py-3">Score</th>
            <th className="px-5 py-3">Stage</th>
            <th className="px-5 py-3">Assigned</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((l) => (
            <tr
              key={l.id}
              className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors"
            >
              <td className="px-5 py-3 font-medium text-ink">{l.name}</td>
              <td className="px-5 py-3 text-slate-600">{l.company}</td>
              <td className="px-5 py-3 text-slate-600">{l.source}</td>
              <td className="px-5 py-3">
                <div className="flex items-center gap-2">
                  <div className="w-16 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        l.score >= 75 ? "bg-signal" : l.score >= 50 ? "bg-amber" : "bg-coral"
                      }`}
                      style={{ width: `${l.score}%` }}
                    />
                  </div>
                  <span className="font-mono text-xs text-slate-500">{l.score}</span>
                </div>
              </td>
              <td className="px-5 py-3">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                  {l.stage}
                </span>
              </td>
              <td className="px-5 py-3 text-slate-600">{l.assignedTo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
