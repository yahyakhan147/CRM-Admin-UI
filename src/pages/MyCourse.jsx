import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function MyCourse({ onMenuClick }) {
  return (
    <>
      <Topbar
        title="Welcome, Fatima"
        subtitle="Student! You’re doing great."
        onMenuClick={onMenuClick}
      />

      <main class="mx-auto w-full">

  <section class="rounded-[20px] bg-white p-5 sm:p-8 pb-10 shadow-sm dark:bg-[#121a33] dark:text-slate-100 dark:shadow-none">
    <h1 class="text-2xl sm:text-3xl font-bold text-[#0d0d1f] dark:text-white">Courses</h1>

    <div class="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">

      <Link to="/course-details" class="block rounded-[20px] bg-[#f4f4f4] p-5 sm:p-6 transition duration-200 ease-out hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:scale-[0.99] motion-reduce:transition-none motion-reduce:hover:transform-none dark:bg-[#18213f] dark:hover:shadow-black/40 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 dark:focus-visible:ring-blue-500/60">

        <div class="flex flex-wrap items-start justify-between gap-3">
          <span class="inline-flex max-w-full items-center truncate rounded-full border border-slate-300 bg-[#ebebeb] px-4 py-1.5 text-xs text-[#6F82A8] dark:border-white/15 dark:bg-white/10 dark:text-slate-300">
            Sachkundeprüfung §34a GewO (IHK)
          </span>
          <span class="inline-flex items-center gap-2 rounded-full border border-green-500 bg-[#b7efc7] px-3 py-1 text-xs font-medium text-green-700 dark:border-green-400/60 dark:bg-green-500/20 dark:text-green-300">
            <span class="h-3 w-3 rounded-full bg-green-600 dark:bg-green-400"></span>
            Active
          </span>
        </div>

        <h2 class="mt-4 px-1 text-base sm:text-base font-semibold leading-snug text-navy dark:text-white">Sachkundeprüfung §34a GewO (IHK-Vorbereitung)</h2>
        <p class="mt-1 px-1 text-xs text-[#9E9E9E] dark:text-slate-400">3.8.2026 – 25.9.2026</p>

        <div class="mt-6 px-1">
          <div class="flex items-baseline justify-between gap-3 text-xs text-[#9E9E9E] dark:text-slate-400">
            <span>Courses Progress</span>
            <span>4 days Remaining</span>
          </div>

          <div class="mt-2 h-2.5 rounded-full bg-[#e6ecf8] dark:bg-white/10" role="progressbar" aria-label="Course progress" aria-valuemin="0" aria-valuemax="100" ariavaluenow="67">
            <div class="h-full w-[67%] rounded-full bg-gradient-to-r from-[#0a2a66] to-[#053a82] shadow-[0_6px_10px_-4px_rgba(5,58,130,0.45)] dark:from-[#3b82f6] dark:to-[#60a5fa] dark:shadow-none"></div>
          </div>

          <p class="mt-4 text-right text-xs text-[#9E9E9E] dark:text-slate-400">67%</p>
        </div>

        <p class="mt-8 px-1 text-xs text-[#9E9E9E] dark:text-slate-400">5 modules · 12 lessons</p>
      </Link>

    </div>
  </section>

</main>

      <section className="mt-8">
        <Footer />
      </section>
    </>
  );
}
