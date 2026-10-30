import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

export default function ExamSimulationBoard({ }) {
  return (
    <>
    <main class="mx-auto space-y-5">

  <section class="rounded-3xl bg-white p-5 sm:p-6 shadow-sm dark:bg-[#121a33] dark:shadow-none">
    <h1 class="text-xl sm:text-2xl font-bold text-[#0d0d1f] dark:text-white">Exam Simulation</h1>
    <p class="mt-0.5 text-xs sm:text-sm text-slate2 dark:text-slate-400">Practice, track your progress, and get ready for the real exam.</p>

    <div class="mt-5 flex items-start gap-4 rounded-2xl border border-yellow-300 bg-yellow-50 p-4 sm:p-5 text-yellow-900 dark:border-yellow-400/30 dark:bg-yellow-400/10 dark:text-yellow-200" role="note">
      <span class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-yellow-200 text-lg font-bold text-yellow-700 dark:bg-yellow-400/20 dark:text-yellow-300" aria-hidden="true">!</span>
      <div class="text-xs sm:text-sm leading-relaxed">
        <p class="text-sm font-semibold">Exam conditions apply</p>
        <p class="mt-1">Once started, the 120-minute timer runs continuously. Navigate between questions freely and submit at any time.</p>
        <p>The exam submits automatically when time expires.</p>
      </div>
    </div>
  </section>

  <section class="rounded-3xl bg-white p-5 sm:p-6 shadow-sm dark:bg-[#121a33] dark:shadow-none">
    <div class="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
      <div class="flex gap-4 min-w-0">
        <span class="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#e3ebff] text-blue-600 dark:bg-blue-500/15 dark:text-blue-400">
          <svg class="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2c.6 4.800 3.200 7.400 8 8-4.800.6-7.400 3.200-8 8-.6-4.800-3.200-7.400-8-8 4.800-.6 7.400-3.200 8-8z"/></svg>
        </span>
        <div class="min-w-0">
          <h2 class="text-xl sm:text-2xl font-bold leading-tight text-navy dark:text-white">§34a IHK Übungsprüfung</h2>
          <p class="mt-1 text-sm sm:text-base text-slate2 dark:text-slate-400">Sachkundeprüfung §34a GewO &nbsp;·&nbsp; IHK-Vorbereitung</p>
          <span class="mt-3 inline-block rounded-full bg-[#e3ebff] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-600 dark:bg-blue-500/15 dark:text-blue-300">Full mock exam</span>
        </div>
      </div>

      <a href="/exam-simulation-run" class="inline-flex w-full items-center justify-between gap-6 rounded-lg bg-[#0a2358] px-5 py-3.5 text-sm font-semibold text-secondary shadow-sm transition duration-150 ease-out hover:-translate-y-0.5 hover:bg-[#12306f] hover:shadow-lg active:translate-y-0 active:scale-95 active:bg-[#06173d] sm:w-auto sm:shrink-0 dark:bg-[#1c3a85] dark:hover:bg-[#2748a3] dark:active:bg-[#14295f] motion-reduce:transition-none focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 dark:focus-visible:ring-blue-500/60">
        Start Simulation
        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
      </a>
    </div>

    <ul class="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-slate2 sm:flex sm:flex-wrap sm:gap-x-10 dark:text-slate-400">
      <li class="flex items-center gap-2"><svg class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.500" fill="currentColor"/></svg>82 questions</li>
      <li class="flex items-center gap-2"><svg class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 10 10-10 10L2 12z"/></svg>120 pts max</li>
      <li class="flex items-center gap-2"><svg class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>120 minutes</li>
      <li class="flex items-center gap-2"><svg class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.500-5.800M20 4v4h-4"/></svg>7 attempts taken</li>
    </ul>

    <div class="mt-6 flex flex-col gap-3 lg:flex-row lg:items-center">
      <div class="flex flex-1 items-center gap-3 rounded-2xl border border-green-300 bg-[#e6f8ec] px-4 py-3 dark:border-green-400/30 dark:bg-green-500/10">
        <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-green-200 text-green-700 dark:bg-green-500/20 dark:text-green-300">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg>
        </span>
        <div class="min-w-0 flex-1">
          <p class="text-[10px] font-bold uppercase tracking-wide text-green-700 dark:text-green-300">Personal best</p>
          <p class="text-base font-semibold text-navy dark:text-white">90 / 120 pts &nbsp;·&nbsp; 75%</p>
        </div>
        <span class="rounded-full bg-green-200 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-green-800 dark:bg-green-500/25 dark:text-green-200">Passed</span>
      </div>
      <p class="flex items-center gap-2 text-sm text-slate2 lg:px-2 dark:text-slate-400">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>61m 0s
      </p>
    </div>
  </section>

  <section class="overflow-hidden rounded-3xl border border-slate-300 bg-white shadow-sm dark:border-white/10 dark:bg-[#121a33] dark:shadow-none">
    <header class="border-b border-slate-200 px-5 py-4 sm:px-7 dark:border-white/10">
      <h2 class="text-sm font-semibold text-navy dark:text-white">Previous Attempts</h2>
      <p class="text-xs text-slate2 dark:text-slate-400">Your recent results and time spent on each attempt</p>
    </header>

    <ul class="divide-y divide-slate-100 px-3 py-2 sm:px-5 dark:divide-white/5">
      
      <li class="grid grid-cols-2 items-center gap-x-4 gap-y-2 rounded-xl px-2 py-3 transition-colors hover:bg-slate-50 md:grid-cols-[1.1fr_1.2fr_1fr_0.9fr_auto] dark:hover:bg-white/5">
        <time class="text-sm text-slate2 dark:text-slate-400" datetime="2026-09-22">Sep 22, 2026</time>
        <span class="justify-self-end md:order-none md:justify-self-start"><span class="inline-block rounded-full bg-[#d9f8e4] px-5 py-1 text-xs font-semibold text-green-700 dark:bg-green-500/20 dark:text-green-300">Passed</span></span>
        <span class="text-sm font-medium md:order-[-1] md:col-start-2 md:row-start-1">90 / 120 pts &nbsp;·&nbsp; 75%</span>
        <span class="text-sm text-slate2 justify-self-end md:justify-self-start dark:text-slate-400">61m 0s</span>
        <a href="#" class="col-span-2 text-sm font-semibold text-blue-600 hover:underline md:col-span-1 md:justify-self-end dark:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">View details →</a>
      </li>
      <li class="grid grid-cols-2 items-center gap-x-4 gap-y-2 rounded-xl px-2 py-3 transition-colors hover:bg-slate-50 md:grid-cols-[1.1fr_1.2fr_1fr_0.9fr_auto] dark:hover:bg-white/5">
        <time class="text-sm text-slate2 dark:text-slate-400" datetime="2026-09-22">Sep 22, 2026</time>
        <span class="justify-self-end md:justify-self-start"><span class="inline-block rounded-full bg-[#fdd5d5] px-4 py-1 text-xs font-semibold text-red-800 dark:bg-red-500/20 dark:text-red-300">Not Passed</span></span>
        <span class="text-sm font-medium md:order-[-1] md:col-start-2 md:row-start-1">34 / 120 pts &nbsp;·&nbsp; 28%</span>
        <span class="text-sm text-slate2 justify-self-end md:justify-self-start dark:text-slate-400">61m 0s</span>
        <a href="#" class="col-span-2 text-sm font-semibold text-blue-600 hover:underline md:col-span-1 md:justify-self-end dark:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">View details →</a>
      </li>
      <li class="grid grid-cols-2 items-center gap-x-4 gap-y-2 rounded-xl px-2 py-3 transition-colors hover:bg-slate-50 md:grid-cols-[1.1fr_1.2fr_1fr_0.9fr_auto] dark:hover:bg-white/5">
        <time class="text-sm text-slate2 dark:text-slate-400" datetime="2026-09-22">Sep 22, 2026</time>
        <span class="justify-self-end md:justify-self-start"><span class="inline-block rounded-full bg-[#fdd5d5] px-4 py-1 text-xs font-semibold text-red-800 dark:bg-red-500/20 dark:text-red-300">Not Passed</span></span>
        <span class="text-sm font-medium md:order-[-1] md:col-start-2 md:row-start-1">44 / 120 pts &nbsp;·&nbsp; 37%</span>
        <span class="text-sm text-slate2 justify-self-end md:justify-self-start dark:text-slate-400">61m 0s</span>
        <a href="#" class="col-span-2 text-sm font-semibold text-blue-600 hover:underline md:col-span-1 md:justify-self-end dark:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">View details →</a>
      </li>
      <li class="grid grid-cols-2 items-center gap-x-4 gap-y-2 rounded-xl px-2 py-3 transition-colors hover:bg-slate-50 md:grid-cols-[1.1fr_1.2fr_1fr_0.9fr_auto] dark:hover:bg-white/5">
        <time class="text-sm text-slate2 dark:text-slate-400" datetime="2026-09-22">Sep 22, 2026</time>
        <span class="justify-self-end md:justify-self-start"><span class="inline-block rounded-full bg-[#fdd5d5] px-4 py-1 text-xs font-semibold text-red-800 dark:bg-red-500/20 dark:text-red-300">Not Passed</span></span>
        <span class="text-sm font-medium md:order-[-1] md:col-start-2 md:row-start-1">49 / 120 pts &nbsp;·&nbsp; 41%</span>
        <span class="text-sm text-slate2 justify-self-end md:justify-self-start dark:text-slate-400">61m 0s</span>
        <a href="#" class="col-span-2 text-sm font-semibold text-blue-600 hover:underline md:col-span-1 md:justify-self-end dark:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">View details →</a>
      </li>
    </ul>
  </section>

</main>
    </>
  );};
