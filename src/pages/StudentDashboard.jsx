import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import SubjectAreaProgress from "../components/SubjectAreaProgress";
import { Link } from "react-router-dom";

export default function MyCourse({ onMenuClick }) {
  return (
    <>
      <Topbar
        title="Welcome, Fatima"
        subtitle="Student! You’re doing great."
        onMenuClick={onMenuClick}
      />

<main class="mx-auto space-y-5">

  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

    <a href="#" class="group relative overflow-hidden rounded-[28px] p-6 text-white bg-gradient-to-br from-[#1a8cff] via-[#2563f5] to-[#4338ee] min-h-[210px] flex flex-col transition duration-200 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/40 active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:transform-none focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60">
      <svg className="absolute -right-4 -top-4 h-48 w-48 text-black/10" width="162" height="158" viewBox="0 0 162 158" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.45" clip-path="url(#clip0_147_917)">
<g opacity="0.16">
<path d="M97.3108 102.662C91.6151 105.081 87.1138 109.664 84.7973 115.403C82.4808 121.141 82.5387 127.565 84.9584 133.261L41.9484 32.0177C39.5287 26.3219 39.4708 19.8983 41.7873 14.1598C44.1039 8.42139 48.6051 3.83821 54.3008 1.41855L103.388 -19.4348L155.522 103.284L106.434 124.137L97.3108 102.662Z" stroke-width="7.66667" stroke-linecap="round" stroke-linejoin="round" stroke="black"/>
<path d="M103.388 -19.4348L112.592 -23.3448C118.288 -25.7644 124.712 -25.8224 130.45 -23.5058C136.189 -21.1893 140.772 -16.688 143.191 -10.9923L186.201 90.2507C183.782 84.5549 179.199 80.0537 173.46 77.7371C167.722 75.4206 161.298 75.4786 155.602 77.8982L146.398 81.8082" stroke-width="7.66667" stroke-linecap="round" stroke-linejoin="round" stroke="black"/>
</g>
</g>
<defs>
<clipPath id="clip0_147_917">
<rect width="160" height="160" fill="white" transform="translate(0 10) rotate(-23.0167)"/>
</clipPath>
</defs>
</svg>
      <span class="relative grid h-14 w-14 place-items-center rounded-2xl bg-[#1ba6ff] shadow-lg shadow-blue-900/20">
        <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.25 1.91626C9.29138 0.661724 7.01345 -0.00343167 4.6875 1.33142e-05C3.30374 -0.00140113 1.92987 0.233213 0.625 0.693763C0.442239 0.758379 0.284002 0.878059 0.172073 1.03633C0.060144 1.19459 2.75997e-05 1.38367 0 1.57751V19.39C2.13515e-05 19.54 0.0360211 19.6878 0.104977 19.8209C0.173933 19.9541 0.273832 20.0688 0.396289 20.1554C0.518745 20.242 0.660185 20.2979 0.808734 20.3185C0.957283 20.3391 1.10861 20.3238 1.25 20.2738C2.35417 19.8843 3.51667 19.6861 4.6875 19.6875C7.18125 19.6875 9.46625 20.5713 11.25 22.045V1.91626ZM13.125 22.045C14.9705 20.5177 17.292 19.6837 19.6875 19.6875C20.895 19.6875 22.05 19.895 23.125 20.275C23.2665 20.325 23.4179 20.3404 23.5666 20.3197C23.7152 20.299 23.8567 20.243 23.9792 20.1563C24.1017 20.0696 24.2016 19.9547 24.2705 19.8214C24.3393 19.688 24.3752 19.5401 24.375 19.39V1.57751C24.375 1.38367 24.3149 1.19459 24.2029 1.03633C24.091 0.878059 23.9328 0.758379 23.75 0.693763C22.4451 0.233213 21.0713 -0.00140113 19.6875 1.33142e-05C17.3615 -0.00343167 15.0836 0.661724 13.125 1.91626V22.045Z" fill="white"/>
</svg>
      </span>
      <div class="relative mt-auto flex items-end justify-between">
        <div>
          <p class="text-base font-bold leading-tight">My Courses</p>
          <p class="text-3xl font-bold leading-none mt-1">1</p>
          <p class="text-xs mt-1 text-white/90">Active Courses</p>
        </div>
        <span class="grid h-[36px] w-[36px] place-items-center rounded-full bg-[#2f6bf0] shadow-md">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>
        </span>
      </div>
    </a>

    <a href="#" class="group relative overflow-hidden rounded-[28px] p-6 text-white bg-gradient-to-br from-[#c24bff] via-[#a23cf5] to-[#7c3aed] min-h-[210px] flex flex-col transition duration-200 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-500/40 active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:transform-none focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60">
      <svg className="absolute -right-4 -top-4 h-48 w-48 text-black/10" width="112" height="132" viewBox="0 0 112 132" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.08">
<path d="M17.4856 16.294L78.8435 -9.77612C82.0981 -11.159 85.7688 -11.1923 89.048 -9.86874C92.3272 -8.54519 94.9463 -5.9732 96.3291 -2.71857L132.827 83.1825C134.21 86.4371 134.244 90.1078 132.92 93.3869C131.596 96.6661 129.024 99.2852 125.77 100.668L64.4119 126.738C61.1573 128.121 57.4866 128.154 54.2074 126.831C50.9283 125.507 48.3092 122.935 46.9263 119.681L10.4281 33.7797C9.04524 30.525 9.01192 26.8544 10.3355 23.5752C11.659 20.296 14.231 17.6769 17.4856 16.294Z" stroke-width="7.66667" stroke-linecap="round" stroke-linejoin="round" stroke="black"/>
<path d="M24.5432 -1.19157L61.3579 -16.8337M45.3993 47.8947L67.2563 56.7167L83.1358 17.3741M63.6484 90.8453L100.463 75.2032" stroke-width="7.66667" stroke-linecap="round" stroke-linejoin="round" stroke="black"/>
</g>
</svg>
      <span class="relative grid h-14 w-14 place-items-center rounded-2xl bg-[#d57cff] shadow-lg shadow-purple-900/20">
        <svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.6275 5.625H14.5375C15.6553 5.62666 16.7268 6.07186 17.5166 6.86285C18.3064 7.65384 18.75 8.72595 18.75 9.84375V21.5625C19.7446 21.5625 20.6984 21.1674 21.4017 20.4642C22.1049 19.7609 22.5 18.8071 22.5 17.8125V5.76C22.5 3.87875 21.0938 2.24625 19.17 2.085C18.8897 2.06223 18.6093 2.0414 18.3288 2.0225C18.0123 1.41286 17.5346 0.901832 16.9476 0.545176C16.3606 0.18852 15.6869 -6.41665e-05 15 1.63776e-08H13.125C12.4381 -6.41665e-05 11.7645 0.18852 11.1774 0.545176C10.5904 0.901832 10.1127 1.41286 9.79625 2.0225C9.515 2.04125 9.23375 2.0625 8.955 2.085C7.0775 2.24375 5.6925 3.8025 5.6275 5.625ZM13.125 1.875C12.6277 1.875 12.1508 2.07254 11.7992 2.42417C11.4475 2.77581 11.25 3.25272 11.25 3.75H16.875C16.875 3.25272 16.6775 2.77581 16.3258 2.42417C15.9742 2.07254 15.4973 1.875 15 1.875H13.125Z" fill-rule="evenodd" clip-rule="evenodd" fill="white"/>
<path d="M0 9.84375C0 8.54875 1.05 7.5 2.34375 7.5H14.5312C15.8263 7.5 16.875 8.55 16.875 9.84375V23.9062C16.875 25.2 15.825 26.25 14.5312 26.25H2.34375C1.72215 26.25 1.12601 26.0031 0.686468 25.5635C0.24693 25.124 0 24.5279 0 23.9062V9.84375ZM11.9825 15.5863C12.138 15.392 12.2099 15.1439 12.1825 14.8966C12.1551 14.6493 12.0305 14.423 11.8363 14.2675C11.642 14.112 11.3939 14.0401 11.1466 14.0675C10.8993 14.0949 10.673 14.2195 10.5175 14.4138L7.4225 18.2838L6.2875 17.15C6.10978 16.9844 5.87472 16.8942 5.63185 16.8985C5.38897 16.9028 5.15724 17.0012 4.98547 17.173C4.81371 17.3447 4.71532 17.5765 4.71103 17.8193C4.70675 18.0622 4.7969 18.2973 4.9625 18.475L6.8375 20.35C6.93075 20.4432 7.04261 20.5157 7.16578 20.5628C7.28896 20.6098 7.42067 20.6304 7.55232 20.623C7.68397 20.6157 7.8126 20.5807 7.9298 20.5203C8.04701 20.4599 8.15015 20.3755 8.2325 20.2725L11.9825 15.5863Z" fill-rule="evenodd" clip-rule="evenodd" fill="white"/>
</svg>
      </span>
      <div class="relative mt-auto flex items-end justify-between">
        <div>
          <p class="text-base font-bold leading-tight">Completed Lessons</p>
          <p class="text-3xl font-bold leading-none mt-1">8</p>
          <p class="text-xs mt-1 text-white/90">Total Lessons</p>
        </div>
        <span class="grid h-[36px] w-[36px] place-items-center rounded-full bg-[#a643f0] shadow-md">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>
        </span>
      </div>
    </a>

    <a href="#" class="group relative overflow-hidden rounded-[28px] p-6 text-white bg-gradient-to-br from-[#05d49b] via-[#02b08c] to-[#018a80] min-h-[210px] flex flex-col transition duration-200 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/40 active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:transform-none focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60">
    <svg class="absolute -right-4 -top-4 h-48 w-48 text-black/10" width="144" height="140" viewBox="0 0 144 140" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.08">
<path d="M61.3579 -9.01262C77.631 -15.9269 95.9843 -16.0934 112.38 -9.4757C128.776 -2.85796 141.872 10.002 148.786 26.2751C155.7 42.5482 155.867 60.9015 149.249 77.2975C142.631 93.6934 129.771 106.789 113.498 113.703C97.2251 120.617 78.8718 120.784 62.4759 114.166C46.0799 107.549 32.9844 94.6886 26.0702 78.4154C19.1559 62.1423 18.9894 43.789 25.6071 27.3931C32.2248 10.9971 45.0848 -2.09838 61.3579 -9.01262Z" stroke-width="7.66667" stroke-linecap="round" stroke-linejoin="round" stroke="black"/>
<path d="M50.6924 42.6016L105.915 19.1384M59.817 64.0768L115.039 40.6137M68.9416 85.5521L105.756 69.91" stroke-width="7.66667" stroke-linecap="round" stroke-linejoin="round" stroke="black"/>
</g>
</svg>
      <span class="relative grid h-14 w-14 place-items-center rounded-2xl bg-[#10e0a6] shadow-lg shadow-emerald-900/20">
        <svg width="21" height="27" viewBox="0 0 21 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.34375 0C1.04875 0 0 1.05 0 2.34375V23.9062C0 25.2 1.05 26.25 2.34375 26.25H18.2812C19.575 26.25 20.625 25.2 20.625 23.9062V14.0625C20.625 12.8193 20.1311 11.627 19.2521 10.7479C18.373 9.86886 17.1807 9.375 15.9375 9.375H13.5938C12.9721 9.375 12.376 9.12807 11.9365 8.68853C11.4969 8.24899 11.25 7.65285 11.25 7.03125V4.6875C11.25 3.4443 10.7561 2.25201 9.87706 1.37294C8.99799 0.49386 7.8057 0 6.5625 0H2.34375ZM4.6875 16.875C4.6875 16.6264 4.78627 16.3879 4.96209 16.2121C5.1379 16.0363 5.37636 15.9375 5.625 15.9375H15C15.2486 15.9375 15.4871 16.0363 15.6629 16.2121C15.8387 16.3879 15.9375 16.6264 15.9375 16.875C15.9375 17.1236 15.8387 17.3621 15.6629 17.5379C15.4871 17.7137 15.2486 17.8125 15 17.8125H5.625C5.37636 17.8125 5.1379 17.7137 4.96209 17.5379C4.78627 17.3621 4.6875 17.1236 4.6875 16.875ZM5.625 19.6875C5.37636 19.6875 5.1379 19.7863 4.96209 19.9621C4.78627 20.1379 4.6875 20.3764 4.6875 20.625C4.6875 20.8736 4.78627 21.1121 4.96209 21.2879C5.1379 21.4637 5.37636 21.5625 5.625 21.5625H10.3125C10.5611 21.5625 10.7996 21.4637 10.9754 21.2879C11.1512 21.1121 11.25 20.8736 11.25 20.625C11.25 20.3764 11.1512 20.1379 10.9754 19.9621C10.7996 19.7863 10.5611 19.6875 10.3125 19.6875H5.625Z" fill-rule="evenodd" clip-rule="evenodd" fill="white"/>
<path d="M11.5262 0.395004C12.5594 1.58621 13.1272 3.11069 13.125 4.6875V7.03125C13.125 7.29 13.335 7.5 13.5937 7.5H15.9375C17.5143 7.49782 19.0388 8.06561 20.23 9.09875C19.68 7.00714 18.5844 5.09913 17.0551 3.56986C15.5259 2.0406 13.6179 0.944959 11.5262 0.395004Z" fill="white"/>
</svg>
      </span>
      <div class="relative mt-auto flex items-end justify-between">
        <div>
          <p class="text-base font-bold leading-tight">Practice Exams</p>
          <p class="text-3xl font-bold leading-none mt-1">16</p>
          <p class="text-xs mt-1 text-white/90">Attempted</p>
        </div>
        <span class="grid h-[36px] w-[36px] place-items-center rounded-full bg-[#04a284] shadow-md">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>
        </span>
      </div>
    </a>

    <a href="#" class="group relative overflow-hidden rounded-[28px] p-6 text-white bg-gradient-to-br from-[#ff8468] via-[#fa5a6a] to-[#e8355f] min-h-[210px] flex flex-col transition duration-200 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-red-500/40 active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:transform-none focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60">
      <svg className="absolute -right-4 -top-4 h-48 w-48 text-black/10" width="117" height="139" viewBox="0 0 117 139" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.08">
<path d="M58.9036 -5.94471L79.6414 -3.16639L98.141 -12.4753L113.417 1.31579L132.928 4.61551L136.454 24.8478L148.57 41.4302L137.402 57.765L136.725 78.3344L117.182 85.189L104.526 101.432L84.0492 99.2669L65.5497 108.576L50.2735 94.7847L30.7628 91.485L27.2368 71.2527L15.1207 54.6702L26.2889 38.3354L26.9658 17.7661L46.5082 10.9115L58.9036 -5.94471Z" stroke-width="7.66667" stroke-linecap="round" stroke-linejoin="round" stroke="black"/>
<path d="M89.1869 107.949L94.401 120.221L105.83 104.5L125.08 107.186L119.866 94.9141M60.0489 47.8948L77.5345 54.9523L91.6496 19.9811" stroke-width="7.66667" stroke-linecap="round" stroke-linejoin="round" stroke="black"/>
</g>
</svg>
      <span class="relative grid h-14 w-14 place-items-center rounded-2xl bg-[#ff9a73] shadow-lg shadow-red-900/20">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 9.6875V22.5C5 24.5601 7.35191 25.7361 9 24.5L13.5 21.125C14.3889 20.4583 15.6111 20.4583 16.5 21.125L21 24.5C22.6481 25.7361 25 24.5601 25 22.5V9.6875H5ZM5 7.8125H25V5C25 3.61929 23.8807 2.5 22.5 2.5H7.5C6.11929 2.5 5 3.61929 5 5V7.8125Z" fill-rule="evenodd" clip-rule="evenodd" fill="white"/>
</svg>
      </span>
      <div class="relative mt-auto flex items-end justify-between">
        <div>
          <p class="text-base font-bold leading-tight">Certificates</p>
          <p class="text-3xl font-bold leading-none mt-1">1</p>
          <p class="text-xs mt-1 text-white/90">Earned</p>
        </div>
        <span class="grid h-[36px] w-[36px] place-items-center rounded-full bg-[#fb6a6c] shadow-md">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>
        </span>
      </div>
    </a>
  </section>

  <section class="rounded-[28px] bg-gradient-to-r from-[#161d6b] via-[#3a1fa0] to-[#1d3fc0] p-3 sm:px-6 sm:py-4 text-white flex flex-col md:flex-row md:items-center gap-6">
    <div class="grid h-[76px] w-[76px] shrink-0 place-items-center rounded-3xl bg-white">
      <svg class="h-11 w-11 text-[#1d3fc0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 2.500V7M16 2.500V7M3 10h18"/><path d="m8.500 15.500 2.500 2.500 4.500-5"/></svg>
    </div>

    <div class="flex-1 min-w-0">
      <p class="text-sm font-semibold uppercase tracking-wide text-[#6fe7ee]">Homework due</p>
      <p class="text-lg sm:text-lg font-bold leading-snug mt-1 max-w-md">No Home Work Pending / Please Complete 1 to 50 Question From BGB</p>
      <p class="mt-2 text-white/90 text-sm">By Klaus Weber &bull; Due 10/3/2026</p>
    </div>

    <div class="hidden lg:flex items-center gap-3 pr-4" aria-hidden="true">
      <img src="/assets/images/books.png" alt="books" className="h-auto" />
    </div>

    <Link to="/homework" class="self-start md:self-auto shrink-0 inline-flex items-center gap-3 rounded-full bg-white px-9 py-4 text-lg font-semibold text-[#0f1a5c] transition hover:bg-slate-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60">
      Submit
      <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
    </Link>
  </section>

</main>
    <SubjectAreaProgress />


      <section>
        <Footer />
      </section>
    </>
  );
}
