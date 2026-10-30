import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

export default function LearningAreaPage({ title, onMenuClick }) {
  return (
    <>
      <Topbar
        title={title}
        subtitle="Learning Area"
        onMenuClick={onMenuClick}
      />

      <section className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {title}
        </h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          This section is coming soon.
        </p>
      </section>

      <section className="mt-8">
        <Footer />
      </section>
    </>
  );
}
