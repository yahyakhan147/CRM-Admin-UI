import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // hook up your auth logic here
    console.log({ email, password, keepLoggedIn });
  };

  return (
    <div className="min-h-screen w-full flex bg-white dark:bg-slate-950">
      {/* Left: form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 sm:px-16 lg:px-24 bg-white dark:bg-slate-950">
        <div className="w-full max-w-sm">
          <h1 className="text-3xl font-semibold text-[#1B2559] dark:text-white">Sign In</h1>
          <p className="mt-2 text-sm text-slate-400 dark:text-slate-300">
            Enter your email and password to sign in!
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#1B2559] dark:text-slate-200 mb-1.5"
              >
                Email<span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="mail@simmmple.com"
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-sm text-slate-700 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-400 outline-none focus:border-[#1B2559] dark:focus:border-sky-400 focus:ring-1 focus:ring-[#1B2559] dark:focus:ring-sky-400 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#1B2559] dark:text-slate-200 mb-1.5"
              >
                Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 8 characters"
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 pr-11 text-sm text-slate-700 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-400 outline-none focus:border-[#1B2559] dark:focus:border-sky-400 focus:ring-1 focus:ring-[#1B2559] dark:focus:ring-sky-400 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={keepLoggedIn}
                  onChange={(e) => setKeepLoggedIn(e.target.checked)}
                  className="h-4 w-4 rounded accent-[#1B2559] dark:accent-sky-400 cursor-pointer"
                />
                <span className="text-sm font-medium text-[#1B2559] dark:text-slate-200">
                  Keep me logged in
                </span>
              </label>
              <a
                href="#"
                className="text-sm font-medium text-[#1B2559] dark:text-sky-300 hover:underline"
              >
                Forget password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#0F1A44] dark:bg-sky-500 py-3.5 text-sm font-bold text-[#F4B400] dark:text-slate-950 hover:bg-[#1B2559] dark:hover:bg-sky-400 transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>

      {/* Right: brand panel */}
      <div
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#0B1440] bg-cover bg-center bg-no-repeat rounded-bl-10xl"
        style={{
          backgroundImage: "url('/assets/images/login-bg.png')",
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center gap-16 w-full px-12">
          <a href="/" className="block">
          <img src="/assets/images/logo.png" alt="Logo" className="px-10 py-8 text-center w-96 h-auto bg-cover bg-center" />
            </a>

          <div className="border border-white/40 rounded-2xl px-8 py-6 text-center max-w-sm">
            <p className="text-white text-sm">Learn more about MAB system</p>
            <a
              href="https://www.sicherheitsausbildung-berlin.de"
              className="text-white text-sm font-bold underline decoration-1 underline-offset-2 mt-1 inline-block"
            >
              www.sicherheitsausbildung-berlin.de
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
