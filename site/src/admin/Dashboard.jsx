import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { COLLECTION_LIST } from "./collections.js";
import { listAll } from "../lib/content.js";

export default function Dashboard() {
  const [counts, setCounts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    (async () => {
      const entries = await Promise.all(
        COLLECTION_LIST.map(async (c) => {
          try {
            const items = await listAll(c.key);
            return [c.key, items.length];
          } catch {
            return [c.key, 0];
          }
        })
      );
      if (alive) {
        setCounts(Object.fromEntries(entries));
        setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  return (
    <div>
      <header className="bg-white border-b border-cream-dark px-8 h-16 flex items-center">
        <h1 className="font-serif text-xl text-maroon">Overview</h1>
      </header>

      <div className="p-8">
        <p className="text-ink-mid mb-8 text-sm">Select a section to add or edit content. All changes appear on the website immediately.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLLECTION_LIST.map((c) => (
            <Link
              key={c.key}
              to={`/admin/${c.key}`}
              className="group bg-white rounded-lg border border-gold/15 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="material-symbols-outlined text-maroon text-3xl">{c.icon}</span>
                <span className="text-3xl font-serif text-ink">{loading ? "…" : counts[c.key] ?? 0}</span>
              </div>
              <div className="font-serif text-lg text-ink group-hover:text-maroon transition-colors">{c.labelVi}</div>
              <div className="text-[11px] uppercase tracking-widest text-ink-light mt-1">{c.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
