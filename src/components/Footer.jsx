const links = [
  { label: "Marketplace", href: "/marketplace" },
  { label: "License", href: "/license" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Blog", href: "/blog" },
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-3 bg-[#f3f6ff] px-2 py-6 dark:bg-transparent sm:flex-row sm:px-2">
      <p className="text-sm text-indigo-300 dark:text-slate-300">
        © 2026 MAB. All Rights Reserved. Made with by
        <a href="https://knightsol.com/" className="font-semibold text-[#0a2258] transition-colors hover:text-indigo-500 dark:text-slate-100">
          {" "}KnightSol
        </a>
      </p>

      <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-sm text-indigo-300 transition-colors hover:text-[#0a2258] dark:text-slate-300 dark:hover:text-slate-100"
          >
            {label}
          </a>
        ))}
      </nav>
    </footer>
  );
}