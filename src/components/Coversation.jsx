import { useEffect, useMemo, useRef, useState } from "react";
import { Plus, Search, Paperclip, Shirt } from "lucide-react";

/* ---------- sample data ---------- */

const CONVERSATIONS = [
  { id: 1, name: "Tom Anderson", unread: 8, time: "12:24 AM", preview: "Hello, I'm interested in this item...", online: true, color: "bg-amber-700" },
  { id: 2, name: "Luis Pittman", unread: 5, time: "10:50 AM", preview: "Hi, can I ask if there is anything...", online: true, color: "bg-slate-600" },
  { id: 3, name: "Barry George", unread: 0, time: "09:54 AM", preview: "Is there any chance to get a refu...", online: false, color: "bg-stone-600" },
  { id: 4, name: "Alisson Mack", unread: 0, time: "Yesterday", preview: "I want to complain about item", online: false, color: "bg-orange-500" },
  { id: 5, name: "Jenny Lloyd", unread: 0, time: "Yesterday", preview: "I'm not sure if this is what I want", online: false, color: "bg-teal-600" },
  { id: 6, name: "Andrew Larson", unread: 0, time: "Yesterday", preview: "Can you help me choose from t...", online: false, color: "bg-rose-400" },
];

// from: "them" | "me". `images` entries can carry a real `src`; without one a placeholder tile is shown.
const MESSAGES = {
  2: [
    { id: 1, from: "them", text: "Hi, I wonder when if there is going to be anything new for spring?", time: "12:24 AM" },
    { id: 2, from: "me", text: "Hi Luis, can you please be more specific?", time: "12:31 AM" },
    { id: 3, from: "them", text: "Sure, I want to know when the new spring collection for men is coming", time: "12:35 AM" },
    { id: 4, from: "me", text: "Thank you for taking interest in our upcoming products. You can have a look at the upcoming colection in our blog post.", time: "12:45 AM" },
    { id: 5, from: "me", images: [{ alt: "Dark sweater", bg: "bg-slate-400" }, { alt: "Cream t-shirt", bg: "bg-stone-300" }], time: "12:59 AM" },
  ],
};

const nowLabel = () =>
  new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

/* ---------- pieces ---------- */

function Avatar({ name, color, size = "h-10 w-10", online }) {
  const initials = name.split(" ").map((p) => p[0]).join("").slice(0, 2);
  return (
    <span className={`relative inline-flex shrink-0 items-center justify-center rounded-full text-xs font-medium text-white ${size} ${color}`}>
      {initials}
      {online && <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-400" />}
    </span>
  );
}

function Bubble({ msg, sender }) {
  const mine = msg.from === "me";
  return (
    <div className={`flex items-start gap-3 ${mine ? "flex-row-reverse" : ""}`}>
      {mine ? <Avatar name="You" color="bg-amber-400" size="h-8 w-8" /> : <Avatar name={sender.name} color={sender.color} size="h-8 w-8" />}
      <div className={`flex max-w-[70%] flex-col ${mine ? "items-end" : "items-start"}`}>
        {msg.text && (
          <p
            className={`rounded px-3 py-2 text-sm leading-relaxed ${
              mine
                ? "bg-indigo-100/70 text-ink dark:bg-slate-800 dark:text-slate-100"
                : "bg-primary text-white dark:bg-sky-600 dark:text-slate-50"
            }`}
          >
            {msg.text}
          </p>
        )}
        {msg.images && (
          <div className="flex gap-2">
            {msg.images.map((img) =>
              img.src ? (
                <img key={img.alt} src={img.src} alt={img.alt} className="h-20 w-20 rounded object-cover" />
              ) : (
                <div key={img.alt} role="img" aria-label={img.alt} className={`flex h-20 w-20 items-center justify-center rounded text-white/80 ${img.bg}`}>
                  <Shirt className="h-8 w-8" />
                </div>
              )
            )}
          </div>
        )}
        <span className="mt-1 text-[10px] text-muted dark:text-slate-400">{msg.time}</span>
      </div>
    </div>
  );
}

/* ---------- page ---------- */

export default function Conversation() {
  const [activeId, setActiveId] = useState(2);
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useState("");
  const [threads, setThreads] = useState(MESSAGES);
  const endRef = useRef(null);

  const active = CONVERSATIONS.find((c) => c.id === activeId);
  const messages = threads[activeId] ?? [];

  const list = useMemo(
    () => CONVERSATIONS.filter((c) => c.name.toLowerCase().includes(query.trim().toLowerCase())),
    [query]
  );

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [messages.length, activeId]);

  const send = (e) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setThreads((t) => ({
      ...t,
      [activeId]: [...(t[activeId] ?? []), { id: Date.now(), from: "me", text, time: nowLabel() }],
    }));
    setDraft("");
  };

  return (
    <div className="mx-auto bg-page p-4 font-sans dark:bg-slate-950 dark:text-slate-100 sm:p-6">
      {/* Page header */}
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-ink dark:text-slate-100">Inbox</h1>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded bg-primary px-6 py-2.5 text-base font-medium text-secondary hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:text-slate-100"
        >
          <Plus className="h-4 w-4" />
          New Message
        </button>
      </div>

      <div className="grid h-[640px] overflow-hidden rounded-3xl bg-white shadow-sm dark:bg-slate-900 dark:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.85)] md:grid-cols-[300px_1fr]">
        {/* Conversations */}
        <aside className="flex min-h-0 flex-col border-r border-line/70 dark:border-slate-700">
          <div className="p-6 pb-0">
            <h2 className="text-base font-bold text-ink dark:text-slate-100">Conversations</h2>
            <div className="relative mt-8">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted dark:text-slate-400" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                aria-label="Search conversations"
                className="h-9 w-full rounded border border-line bg-white pl-10 pr-3 text-sm text-slate-700 placeholder:text-gray-400 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-400"
              />
            </div>
          </div>

          <ul className="mt-3 min-h-0 flex-1 overflow-y-auto">
            {list.map((c) => (
              <li key={c.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(c.id)}
                  aria-current={c.id === activeId}
                  className={`flex w-full items-center gap-3 px-6 py-4 text-left transition hover:bg-blue-50/60 focus:outline-none focus-visible:bg-blue-50 dark:hover:bg-slate-800/80 dark:focus-visible:bg-slate-800 ${
                    c.id === activeId ? "bg-blue-50 dark:bg-slate-800" : ""
                  }`}
                >
                  <Avatar name={c.name} color={c.color} size="h-11 w-11" online={c.online} />
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-2">
                      <span className="flex min-w-0 items-center gap-2">
                        <span className={`truncate text-sm font-bold ${c.unread ? "font-semibold text-ink dark:text-slate-100" : "text-ink dark:text-slate-100"}`}>{c.name}</span>
                        {c.unread > 0 && (
                          <span className="rounded-full bg-blue-600 px-1.5 text-[10px] font-medium leading-4 text-white">{c.unread}</span>
                        )}
                      </span>
                      <span className="shrink-0 text-sm text-muted text-gray-500 dark:text-slate-400">{c.time}</span>
                    </span>
                    <span className="mt-1 block truncate text-sm text-muted dark:text-slate-400">{c.preview}</span>
                  </span>
                </button>
              </li>
            ))}
            {list.length === 0 && <li className="px-6 py-4 text-sm text-muted dark:text-slate-400">No conversations found.</li>}
          </ul>
        </aside>

        {/* Thread */}
        <section className="flex min-h-0 flex-col">
          <header className="mx-6 flex items-center gap-2 border-b border-line/70 py-5 md:mx-6 dark:border-slate-700">
            <h2 className="text-base font-bold text-ink dark:text-slate-100">{active.name}</h2>
            {active.online && <span className="h-2 w-2 rounded-full bg-emerald-400" aria-label="Online" />}
          </header>

          <div className="min-h-0 flex-1 space-y-5 overflow-y-auto px-6 py-5 dark:bg-slate-900">
            {messages.length ? (
              messages.map((m) => <Bubble key={m.id} msg={m} sender={active} />)
            ) : (
              <p className="pt-10 text-center text-xs text-muted dark:text-slate-400">No messages yet. Say hello!</p>
            )}
            <div ref={endRef} />
          </div>

          <form onSubmit={send} className="flex items-center gap-4 border-t border-line/70 px-6 py-4 dark:border-slate-700">
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Your message..."
              aria-label="Your message"
              className="h-9 min-w-0 flex-1 bg-transparent text-sm text-slate-700 placeholder:text-gray-400 focus:outline-none dark:text-slate-100 dark:placeholder:text-slate-400"
            />
            <button type="button" aria-label="Attach file" className="rounded p-1 text-muted hover:text-ink dark:text-slate-400 dark:hover:text-slate-200">
              <Paperclip className="h-5 w-5" />
            </button>
            <button
              type="submit"
              className="rounded bg-primary px-6 py-2 text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-sky-400"
            >
              Send
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}