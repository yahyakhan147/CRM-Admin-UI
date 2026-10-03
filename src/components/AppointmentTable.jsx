import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
export default function AppointmentTable() {
  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-[0_10px_40px_-12px_rgba(30,64,175,0.12)] dark:bg-slate-900 dark:shadow-[0_10px_40px_-12px_rgba(2,6,23,0.7)] sm:p-8">
      <div className="flex items-center justify-between">
    <h2 className="font-display text-base font-semibold text-ink mb-2 dark:text-slate-100">Agency Appointment</h2>
    <Link to="#" className="flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-[#0a2258] dark:text-slate-300 dark:hover:text-slate-100">
      View all <ArrowRight size={16} />
    </Link>
  </div>
  <div className="mt-4 overflow-x-auto">
    <table className="w-full min-w-[900px] border-collapse text-left">
      <thead>
        <tr className="border-y-2 border-[#e6e8f5] dark:border-slate-700">
          <th className="px-3 py-4 text-sm font-normal text-slate-500 dark:text-slate-300">Customer</th>
          <th className="px-3 py-4 text-sm font-normal text-slate-500 dark:text-slate-300">Stage</th>
          <th className="px-3 py-4 text-sm font-normal text-slate-500 dark:text-slate-300">Course</th>
          <th className="px-3 py-4 text-sm font-normal text-slate-500 dark:text-slate-300">Assigned</th>
          <th className="px-3 py-4 text-sm font-normal text-slate-500 dark:text-slate-300">Duration</th>
          <th className="px-3 py-4 text-sm font-normal text-slate-500 dark:text-slate-300">Updated</th>
        </tr>
      </thead>

      <tbody>
        {/* Row 1 */}
        <tr className="border-b border-[#e6e8f5] transition-colors hover:bg-[#f7f9ff] dark:border-slate-700 dark:hover:bg-slate-800/80">
          <td className="px-3 py-3">
            <p className="font-medium text-slate-900 dark:text-slate-100">Anna Müller</p>
            <p className="text-xs text-indigo-300 dark:text-slate-400">anna@example.de</p>
          </td>
          <td className="px-3 py-3">
            <span className="inline-block rounded-full border border-lime-400 bg-lime-50 px-4 py-0.5 text-xs text-lime-600 dark:border-lime-500/50 dark:bg-lime-500/10 dark:text-lime-300">
              Agency Appointment
            </span>
          </td>
          <td className="px-3 py-3 text-xs uppercase leading-relaxed text-slate-500 dark:text-slate-300">
            <p>Sachkunde §34a GewO</p>
            <p>Modul 3: Grundkurs</p>
          </td>
          <td className="px-3 py-3 text-sm text-slate-500 dark:text-slate-300">Onur Kabaca</td>
          <td className="px-3 py-3 text-sm text-slate-400 dark:text-slate-400">—</td>
          <td className="px-3 py-3 text-sm text-slate-500 dark:text-slate-300">Today</td>
        </tr>

        {/* Row 2 */}
        <tr className="border-b border-[#e6e8f5] transition-colors hover:bg-[#f7f9ff] dark:border-slate-700 dark:hover:bg-slate-800/80">
          <td className="px-3 py-3">
            <p className="font-medium text-slate-900 dark:text-slate-100">Klaus Bauer</p>
            <p className="text-xs text-indigo-300 dark:text-slate-400">k.bauer@web.de</p>
          </td>
          <td className="px-3 py-3">
            <span className="inline-block rounded-full border border-lime-400 bg-lime-50 px-4 py-0.5 text-xs text-lime-600 dark:border-lime-500/50 dark:bg-lime-500/10 dark:text-lime-300">
              Agency Appointment
            </span>
          </td>
          <td className="px-3 py-3 text-xs uppercase leading-relaxed text-slate-500 dark:text-slate-300">
            <p>Sachkunde §34a GewO</p>
            <p>Modul 2: Erweiterungskurs</p>
            <p>Modul 5: Premium Guard</p>
            <p>Modul 6: Waffensachkunde</p>
          </td>
          <td className="px-3 py-3 text-sm text-slate-500 dark:text-slate-300">Tariq Syed</td>
          <td className="px-3 py-3 text-sm text-slate-400 dark:text-slate-400">—</td>
          <td className="px-3 py-3 text-sm text-slate-500 dark:text-slate-300">Yesterday</td>
        </tr>

        {/* Row 3 */}
        <tr className="border-b border-[#e6e8f5] transition-colors hover:bg-[#f7f9ff] dark:border-slate-700 dark:hover:bg-slate-800/80">
          <td className="px-3 py-3">
            <p className="font-medium text-slate-900 dark:text-slate-100">Petra Wagner</p>
            <p className="text-xs text-indigo-300 dark:text-slate-400">petra.w@mail.de</p>
          </td>
          <td className="px-3 py-3">
            <span className="inline-block rounded-full border border-lime-400 bg-lime-50 px-4 py-0.5 text-xs text-lime-600 dark:border-lime-500/50 dark:bg-lime-500/10 dark:text-lime-300">
              Agency Appointment
            </span>
          </td>
          <td className="px-3 py-3 text-xs uppercase leading-relaxed text-slate-500 dark:text-slate-300">
            <p>Sicherheitskraft mit</p>
            <p>Unterrichtung §34a GewO -</p>
            <p>Allrounder</p>
          </td>
          <td className="px-3 py-3 text-sm text-slate-500 dark:text-slate-300">Tariq Syed</td>
          <td className="px-3 py-3">
            <span className="inline-block rounded-full border border-orange-400 bg-orange-50 px-2.5 py-0.5 text-xs text-orange-500 dark:border-orange-500/50 dark:bg-orange-500/10 dark:text-orange-300">
              8d
            </span>
          </td>
          <td className="px-3 py-3 text-sm text-slate-500 dark:text-slate-300">2 days ago</td>
        </tr>

        {/* Row 4 */}
        <tr className="border-b border-[#e6e8f5] transition-colors hover:bg-[#f7f9ff] dark:border-slate-700 dark:hover:bg-slate-800/80">
          <td className="px-3 py-3">
            <p className="font-medium text-slate-900 dark:text-slate-100">Thomas Klein</p>
            <p className="text-xs text-indigo-300 dark:text-slate-400">t.klein@email.de</p>
          </td>
          <td className="px-3 py-3">
            <span className="inline-block rounded-full border border-lime-400 bg-lime-50 px-4 py-0.5 text-xs text-lime-600 dark:border-lime-500/50 dark:bg-lime-500/10 dark:text-lime-300">
              Agency Appointment
            </span>
          </td>
          <td className="px-3 py-3 text-xs uppercase leading-relaxed text-slate-500 dark:text-slate-300">
            <p>Sachkunde §34a GewO</p>
            <p>Modul 4: Schnellkurs</p>
            <p>Modul 6: Waffensachkunde</p>
          </td>
          <td className="px-3 py-3 text-sm text-slate-500 dark:text-slate-300">Tariq Syed</td>
          <td className="px-3 py-3 text-sm text-slate-400 dark:text-slate-400">—</td>
          <td className="px-3 py-3 text-sm text-slate-500 dark:text-slate-300">3 days ago</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

  );
}
