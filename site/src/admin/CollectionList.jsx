import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { COLLECTIONS } from "./collections.js";
import { listAll, removeItem } from "../lib/content.js";

export default function CollectionList() {
  const { coll: collKey } = useParams();
  const coll = COLLECTIONS[collKey];
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    setItems(await listAll(collKey));
    setLoading(false);
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collKey]);

  if (!coll) return <div className="p-8">Section not found.</div>;

  const del = async (id, title) => {
    if (!window.confirm(`Delete "${title || "this item"}"? This cannot be undone.`)) return;
    await removeItem(collKey, id);
    setItems((prev) => prev.filter((x) => x.id !== id));
  };

  return (
    <div>
      <header className="bg-white border-b border-cream-dark px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-maroon">{coll.icon}</span>
          <h1 className="font-serif text-xl text-maroon">{coll.labelVi}</h1>
        </div>
        <Link
          to={`/admin/${collKey}/new`}
          className="inline-flex items-center gap-2 bg-maroon text-white px-4 py-2 rounded-sm text-[11px] font-semibold tracking-widest uppercase hover:bg-maroon-mid transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Add New
        </Link>
      </header>

      <div className="p-8">
        {loading ? (
          <div className="grid place-items-center py-20 text-ink-light">
            <span className="material-symbols-outlined text-3xl animate-spin">progress_activity</span>
          </div>
        ) : items.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-lg border border-dashed border-gold/30">
            <span className="material-symbols-outlined text-gold text-5xl">inbox</span>
            <p className="text-ink-mid mt-3">No items yet. Click "Add New" to get started.</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-gold/15 divide-y divide-cream-dark overflow-hidden">
            {items.map((it) => {
              const title = it[coll.titleField] || "(untitled)";
              const sub = it[coll.subtitleField];
              const img = coll.imageField ? it[coll.imageField] : null;
              return (
                <div key={it.id} className="flex items-center gap-4 px-5 py-3 hover:bg-cream/40 transition-colors">
                  <div className="w-14 h-14 rounded bg-cream-dark overflow-hidden shrink-0 grid place-items-center">
                    {img ? (
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <span className="material-symbols-outlined text-ink-light">image</span>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-ink truncate">{title}</div>
                    {sub && <div className="text-xs text-ink-light truncate">{sub}</div>}
                  </div>
                  {it.published === false && (
                    <span className="text-[10px] uppercase tracking-widest bg-cream-dark text-ink-light px-2 py-1 rounded">Hidden</span>
                  )}
                  <Link
                    to={`/admin/${collKey}/${it.id}`}
                    className="p-2 text-ink-light hover:text-maroon transition-colors"
                    title="Edit"
                  >
                    <span className="material-symbols-outlined text-[20px]">edit</span>
                  </Link>
                  <button
                    onClick={() => del(it.id, title)}
                    className="p-2 text-ink-light hover:text-error transition-colors"
                    title="Delete"
                  >
                    <span className="material-symbols-outlined text-[20px]">delete</span>
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
