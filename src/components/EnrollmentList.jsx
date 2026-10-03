import { Mail, Phone, Calendar, SquareArrowOutUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function EnrollmentList() {
  const navigate = useNavigate();

  const handleRowClick = () => navigate("/EnrollmentLeads");

  return (
    <div className="bg-panel rounded-xl border border-slate-200 shadow-card overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-[#616479] bg-[#F4F4F4] border-b border-slate-200">
            <th className="px-6 py-5 text-base font-medium">Participants</th>
            <th className="px-6 py-5 text-base font-medium">Products / Modules</th>
            <th className="px-6 py-5 text-base font-medium">Sales Person</th>
            <th className="px-6 py-5 text-base font-medium">Total Value</th>
            <th className="px-6 py-5 text-base font-medium">Enrollment On</th>
            <th className="px-6 py-5 text-base font-medium"></th>
          </tr>
        </thead>
        <tbody>
        <tr
          className="cursor-pointer border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors text-[#82838B]"
          onClick={handleRowClick}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              handleRowClick();
            }
          }}
          tabIndex={0}
          role="link"
          aria-label="Open participant details"
        >
          <td className="px-6 py-4 align-middle">
            <div className="text-base font-medium text-ink">Muhammad Khan</div>
            <div className="mt-0.5 flex items-center gap-2 text-muted">
              <Mail className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              <span className="truncate">yahyak977@gmail.com</span>
            </div>
            <div className="mt-1 flex items-center gap-2 text-muted">
              <Phone className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              <span>+322 4727126</span>
            </div>
          </td>
        
          <td className="px-6 py-4 align-middle text-muted">None recorded</td>
          <td className="px-6 py-4 align-middle text-muted">Sarah Schmidt</td>
          <td className="px-6 py-4 text-center align-middle text-muted">---</td>
        
          <td className="px-6 py-4 align-middle text-muted">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              15-9-2026
            </span>
          </td>
        
          <td className="px-6 py-4 text-right align-middle">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded font-medium text-ink hover:text-navy"
              onClick={(event) => {
                event.stopPropagation();
                handleRowClick();
              }}
            >
              <SquareArrowOutUpRight className="h-5 w-5 text-navy" strokeWidth={1.8} />
              View
            </button>
          </td>
        </tr>
        <tr
          className="cursor-pointer border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors text-[#82838B]"
          onClick={handleRowClick}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              handleRowClick();
            }
          }}
          tabIndex={0}
          role="link"
          aria-label="Open participant details"
        >
          <td className="px-6 py-4 align-middle">
            <div className="text-base font-medium text-ink">Muhammad Khan</div>
            <div className="mt-0.5 flex items-center gap-2 text-muted">
              <Mail className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              <span className="truncate">yahyak977@gmail.com</span>
            </div>
            <div className="mt-1 flex items-center gap-2 text-muted">
              <Phone className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              <span>+322 4727126</span>
            </div>
          </td>
        
          <td className="px-6 py-4 align-middle text-muted">None recorded</td>
          <td className="px-6 py-4 align-middle text-muted">Sarah Schmidt</td>
          <td className="px-6 py-4 text-center align-middle text-muted">---</td>
        
          <td className="px-6 py-4 align-middle text-muted">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              15-9-2026
            </span>
          </td>
        
          <td className="px-6 py-4 text-right align-middle">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded font-medium text-ink hover:text-navy"
              onClick={(event) => {
                event.stopPropagation();
                handleRowClick();
              }}
            >
              <SquareArrowOutUpRight className="h-5 w-5 text-navy" strokeWidth={1.8} />
              View
            </button>
          </td>
        </tr>

        </tbody>
      </table>
    </div>
  );
}
