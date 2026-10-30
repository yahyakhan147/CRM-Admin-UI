import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

export default function AttendanceBoard({ }) {
  return (
    <>
    <main class="mx-auto space-y-6">


  <section class="rounded-3xl bg-white p-4 sm:p-5 shadow-sm dark:bg-[#121a33] dark:shadow-none">
    <h1 class="text-xl font-bold text-[#0d0d1f] dark:text-white">Attendance</h1>

    <div class="mt-4 grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">


      <div class=" group relative flex min-h-[130px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-[#2f5bff] to-[#6a3be0] p-4 text-white ring-1 ring-white/20 transition duration-200 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/40 active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:transform-none focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60 cursor-pointer">
        <span class="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full border border-white/20"></span>
        <span class="pointer-events-none absolute -bottom-6 -right-6 h-20 w-20 rounded-full border border-white/20"></span>
        <div class="relative flex items-center gap-3">
          <span class="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/40 bg-white/20">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5h5"/></svg>
          </span>
          <p class="text-base font-medium leading-tight">Total hours</p>
        </div>
        <p class="relative text-4xl font-bold leading-none">24h</p>
      </div>


      <div class=" group relative flex min-h-[130px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-[#08a98a] to-[#007a93] p-4 text-white ring-1 ring-white/20 transition duration-200 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-green-500/40 active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:transform-none focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60 cursor-pointer">
        <span class="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full border border-white/20"></span>
        <span class="pointer-events-none absolute -bottom-6 -right-6 h-20 w-20 rounded-full border border-white/20"></span>
        <div class="relative flex items-center gap-3">
          <span class="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/40 bg-white/20">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg>
          </span>
          <p class="text-base font-medium leading-tight">Present</p>
        </div>
        <p class="relative text-4xl font-bold leading-none">2</p>
      </div>

      <div class=" group relative flex min-h-[130px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-[#ff4d6a] to-[#c9206a] p-4 text-white ring-1 ring-white/20 transition duration-200 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-pink-500/40 active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:transform-none focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60 cursor-pointer">
        <span class="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full border border-white/20"></span>
        <span class="pointer-events-none absolute -bottom-6 -right-6 h-20 w-20 rounded-full border border-white/20"></span>
        <div class="relative flex items-center gap-3">
          <span class="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/40 bg-white/20">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>
          </span>
          <p class="text-base font-medium leading-tight">Absent</p>
        </div>
        <p class="relative text-4xl font-bold leading-none">0</p>
      </div>

      <div class=" group relative flex min-h-[130px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-[#ff9a1f] to-[#ee4a17] p-4 text-white ring-1 ring-white/20 transition duration-200 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-orange-500/40 active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:transform-none focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60 cursor-pointer">
        <span class="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full border border-white/20"></span>
        <span class="pointer-events-none absolute -bottom-6 -right-6 h-20 w-20 rounded-full border border-white/20"></span>
        <div class="relative flex items-center gap-3">
          <span class="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/40 bg-white/20">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M19 5 5 19"/><circle cx="7" cy="7" r="2"/><circle cx="17" cy="17" r="2"/></svg>
          </span>
          <p class="text-base font-medium leading-tight">Attendance rate</p>
        </div>
        <p class="relative text-4xl font-bold leading-none">67%</p>
      </div>
    </div>

    <div class="mt-8 flex flex-wrap gap-2">
      <span class="rounded-full bg-[#d9f8e4] px-4 py-1.5 text-xs font-medium text-green-700 dark:bg-green-500/20 dark:text-green-300">Present: 2</span>
      <span class="rounded-full bg-[#ffe1e4] px-4 py-1.5 text-xs font-medium text-red-600 dark:bg-red-500/20 dark:text-red-300">Absent: 0</span>
      <span class="rounded-full bg-[#eef0f6] px-4 py-1.5 text-xs font-medium text-slate-600 dark:bg-white/10 dark:text-slate-300">Excused: 1</span>
      <span class="rounded-full bg-[#ffd3c0] px-4 py-1.5 text-xs font-medium text-orange-700 dark:bg-orange-500/20 dark:text-orange-300">Unexcused: 0</span>
    </div>
  </section>


  <section class="overflow-hidden rounded-3xl border border-slate-300 bg-white shadow-sm dark:border-white/10 dark:bg-[#121a33] dark:shadow-none">
    <div class="overflow-x-auto">
      <table class="w-full min-w-[720px] text-left text-sm">
        <thead class="bg-[#f4f4f4] dark:bg-[#18213f]">
          <tr class="text-slate2 dark:text-slate-400">
            <th scope="col" class="px-6 py-5 text-center font-semibold">Date</th>
            <th scope="col" class="px-6 py-5 text-center font-semibold">Course</th>
            <th scope="col" class="px-6 py-5 text-center font-semibold">Topic</th>
            <th scope="col" class="px-6 py-5 text-center font-semibold">Hours</th>
            <th scope="col" class="px-6 py-5 text-center font-semibold">Status</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-white/5">
          <tr class="transition-colors hover:bg-slate-50 dark:hover:bg-white/5">
            <td class="px-6 py-4 font-medium whitespace-nowrap"><span class="mr-3 inline-block h-1.5 w-1.5 rounded-full bg-slate-400 align-middle"></span>Aug 24, 2026</td>
            <td class="max-w-[200px] truncate px-6 py-4 text-slate2 dark:text-slate-400">Sachkundeprüfung §34a Ge...</td>
            <td class="px-6 py-4 font-medium">Prüfungsvorbereitung – Online Q&amp;A</td>
            <td class="px-6 py-4 text-center font-medium">0h</td>
            <td class="px-6 py-4 text-center"><span class="inline-block rounded-full bg-[#eef0f6] px-5 py-1.5 text-sm font-medium text-slate-600 dark:bg-white/10 dark:text-slate-300">Excused</span></td>
          </tr>
          <tr class="transition-colors hover:bg-slate-50 dark:hover:bg-white/5">
            <td class="px-6 py-4 font-medium whitespace-nowrap"><span class="mr-3 inline-block h-1.5 w-1.5 rounded-full bg-green-500 align-middle"></span>Aug 10, 2026</td>
            <td class="max-w-[200px] truncate px-6 py-4 text-slate2 dark:text-slate-400">Sachkundeprüfung §34a Ge...</td>
            <td class="px-6 py-4 font-medium">Datenschutzrecht &amp; DSGVO – Online</td>
            <td class="px-6 py-4 text-center font-medium">8h</td>
            <td class="px-6 py-4 text-center"><span class="inline-block rounded-full bg-[#d9f8e4] px-5 py-1.5 text-sm font-medium text-green-700 dark:bg-green-500/20 dark:text-green-300">Present</span></td>
          </tr>
          <tr class="transition-colors hover:bg-slate-50 dark:hover:bg-white/5">
            <td class="px-6 py-4 font-medium whitespace-nowrap"><span class="mr-3 inline-block h-1.5 w-1.5 rounded-full bg-green-500 align-middle"></span>Aug 03, 2026</td>
            <td class="max-w-[200px] truncate px-6 py-4 text-slate2 dark:text-slate-400">Sachkundeprüfung §34a Ge...</td>
            <td class="px-6 py-4 font-medium">Einführung Gewerberecht §34a</td>
            <td class="px-6 py-4 text-center font-medium">8h</td>
            <td class="px-6 py-4 text-center"><span class="inline-block rounded-full bg-[#d9f8e4] px-5 py-1.5 text-sm font-medium text-green-700 dark:bg-green-500/20 dark:text-green-300">Present</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

</main>
    </>
  );};
