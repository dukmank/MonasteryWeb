import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { COLLECTIONS } from "./collections.js";
import { listAll, removeItem, updateItem } from "../lib/content.js";
import { addToMailerLite } from "../lib/mailerlite.js";

const when = (ts) => {
  const d = ts?.toDate ? ts.toDate() : ts ? new Date(ts) : null;
  return d && !isNaN(d) ? d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }) : "";
};

function downloadCsv(rows) {
  const esc = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const csv = ["email,signed_up,in_mailerlite"]
    .concat(rows.map((r) => [r.email, when(r.createdAt), r.mailerliteSyncedAt ? "yes" : ""].map(esc).join(",")))
    .join("\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  a.download = `subscribers-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(a.href);
}

export default function CollectionList() {
  const { coll: collKey } = useParams();
  const coll = COLLECTIONS[collKey];
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(() => new Set());
  const [busy, setBusy] = useState("");
  // Category filter (collections with `filterField`); kept in the URL so it
  // survives opening a post and coming back.
  const [params, setParams] = useSearchParams();
  const filterDef = coll?.filterField ? coll.fields.find((f) => f.name === coll.filterField) : null;
  const memoKey = `cms-filter-${collKey}`;
  const remembered = () => {
    try { return sessionStorage.getItem(memoKey) || ""; } catch { return ""; }
  };
  const filter = filterDef ? (params.has(filterDef.name) ? params.get(filterDef.name) : remembered()) : "";

  const load = async () => {
    setLoading(true);
    setItems(await listAll(collKey));
    setLoading(false);
  };

  useEffect(() => {
    setSelected(new Set());
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collKey]);

  if (!coll) return <div className="p-8">Section not found.</div>;

  const valueOf = (it) => (filterDef ? it[filterDef.name] || filterDef.default || "" : "");
  const filterOptions = filterDef
    ? [...new Set([...(filterDef.options || []), ...items.map(valueOf).filter(Boolean)])]
    : [];
  const shown = filter ? items.filter((it) => valueOf(it) === filter) : items;
  const setFilter = (v) => {
    const next = new URLSearchParams(params);
    if (v) next.set(filterDef.name, v);
    else next.delete(filterDef.name);
    try { sessionStorage.setItem(memoKey, v); } catch { /* private mode: URL still works */ }
    setParams(next, { replace: true });
  };

  const del = async (id, title) => {
    if (!window.confirm(`Delete "${title || "this item"}"? This cannot be undone.`)) return;
    await removeItem(collKey, id);
    setItems((prev) => prev.filter((x) => x.id !== id));
  };

  // ---- bulk actions (messages, subscribers) ----
  const toggle = (id) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  const allSelected = items.length > 0 && selected.size === items.length;
  const targets = () => (selected.size ? items.filter((x) => selected.has(x.id)) : items);

  const bulkDelete = async (all) => {
    const list = all ? items : items.filter((x) => selected.has(x.id));
    if (!list.length) return;
    const what = all ? `ALL ${list.length} ${coll.labelVi.toLowerCase()}` : `${list.length} selected`;
    if (!window.confirm(`Delete ${what}? This cannot be undone.`)) return;
    setBusy(`Deleting ${list.length}…`);
    for (const it of list) await removeItem(collKey, it.id);
    const gone = new Set(list.map((x) => x.id));
    setItems((prev) => prev.filter((x) => !gone.has(x.id)));
    setSelected(new Set());
    setBusy("");
  };

  const syncMailerLite = async () => {
    const list = targets();
    if (!list.length || !window.confirm(`Add ${list.length} subscriber(s) to the MailerLite "Monastery Newsletter" group?`)) return;
    let ok = 0;
    for (const [i, it] of list.entries()) {
      setBusy(`Syncing to MailerLite… ${i + 1}/${list.length}`);
      if (await addToMailerLite({ email: it.email, source: "newsletter" })) {
        const at = new Date().toISOString();
        await updateItem(collKey, it.id, { mailerliteSyncedAt: at }).catch(() => {});
        setItems((prev) => prev.map((x) => (x.id === it.id ? { ...x, mailerliteSyncedAt: at } : x)));
        ok++;
      }
    }
    setBusy("");
    window.alert(`${ok} of ${list.length} added to MailerLite.${ok < list.length ? " Some failed — try again later." : ""}`);
  };

  return (
    <div>
      <header className="bg-white border-b border-cream-dark px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-maroon">{coll.icon}</span>
          <h1 className="font-serif text-xl text-maroon">{coll.labelVi}</h1>
        </div>
        {!coll.inbox && <Link
          to={`/admin/${collKey}/new`}
          className="inline-flex items-center gap-2 bg-maroon text-white px-4 py-2 rounded-sm text-[11px] font-semibold tracking-widest uppercase hover:bg-maroon-mid transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Add New
        </Link>}
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
          <>
          {coll.inbox && (
            <div className="flex flex-wrap items-center gap-3 mb-3 text-[12px]">
              <label className="flex items-center gap-2 text-ink-mid cursor-pointer">
                <input type="checkbox" checked={allSelected} onChange={() => setSelected(allSelected ? new Set() : new Set(items.map((x) => x.id)))} />
                {selected.size ? `${selected.size} selected` : `Select all (${items.length})`}
              </label>
              <span className="flex-1" />
              {busy && <span className="text-ink-light">{busy}</span>}
              {collKey === "subscribers" && (
                <>
                  <button disabled={!!busy} onClick={() => downloadCsv(targets())} className="px-3 py-1.5 border border-cream-dark rounded-sm hover:border-maroon hover:text-maroon disabled:opacity-40">
                    Export CSV {selected.size ? "(selected)" : "(all)"}
                  </button>
                  <button disabled={!!busy} onClick={syncMailerLite} className="px-3 py-1.5 border border-cream-dark rounded-sm hover:border-maroon hover:text-maroon disabled:opacity-40">
                    Sync to MailerLite {selected.size ? "(selected)" : "(all)"}
                  </button>
                </>
              )}
              <button disabled={!!busy || !selected.size} onClick={() => bulkDelete(false)} className="px-3 py-1.5 border border-cream-dark rounded-sm hover:border-error hover:text-error disabled:opacity-40">
                Delete selected
              </button>
              <button disabled={!!busy} onClick={() => bulkDelete(true)} className="px-3 py-1.5 border border-error/40 text-error rounded-sm hover:bg-error hover:text-white disabled:opacity-40">
                Delete all
              </button>
            </div>
          )}
          {filterDef && (
            <div className="flex flex-wrap items-center gap-2 mb-4" role="group" aria-label={`Filter by ${filterDef.label}`}>
              {[["", "All", items.length], ...filterOptions.map((o) => [o, o, items.filter((it) => valueOf(it) === o).length])].map(
                ([val, label, n]) => {
                  const active = filter === val;
                  return (
                    <button
                      key={val || "all"}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setFilter(val)}
                      className={`px-3 py-1.5 rounded-full text-[12px] border transition-colors ${
                        active
                          ? "bg-maroon text-white border-maroon"
                          : n
                            ? "bg-white text-ink-mid border-cream-dark hover:border-maroon hover:text-maroon"
                            : "bg-white text-ink-light/60 border-cream-dark"
                      }`}
                    >
                      {label} <span className={active ? "text-white/70" : "text-ink-light"}>{n}</span>
                    </button>
                  );
                },
              )}
            </div>
          )}
          {shown.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg border border-dashed border-gold/30 text-ink-mid">
              No posts in “{filter}”.{" "}
              <button type="button" onClick={() => setFilter("")} className="text-maroon underline hover:text-gold">Show all</button>
            </div>
          )}
          <div className={`bg-white rounded-lg border border-gold/15 divide-y divide-cream-dark overflow-hidden ${shown.length ? "" : "hidden"}`}>
            {shown.map((it) => {
              const title = it[coll.titleField] || "(untitled)";
              const sub = it[coll.subtitleField];
              const img = coll.imageField ? it[coll.imageField] : null;
              return (
                <div key={it.id} className="flex items-center gap-4 px-5 py-3 hover:bg-cream/40 transition-colors">
                  {coll.inbox && (
                    <input type="checkbox" checked={selected.has(it.id)} onChange={() => toggle(it.id)} aria-label="Select" />
                  )}
                  <div className={`w-14 h-14 rounded bg-cream-dark overflow-hidden shrink-0 grid place-items-center ${coll.inbox ? "hidden" : ""}`}>
                    {img ? (
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <span className="material-symbols-outlined text-ink-light">image</span>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-ink truncate">{title}</div>
                    {(sub || (filterDef && !filter && valueOf(it))) && (
                      <div className="text-xs text-ink-light truncate">
                        {[filterDef && !filter ? valueOf(it) : "", sub].filter(Boolean).join(" · ")}
                      </div>
                    )}
                    {collKey === "messages" && it.subject && <div className="text-xs text-ink-mid truncate">{it.subject}</div>}
                  </div>
                  {coll.inbox && <span className="text-[11px] text-ink-light whitespace-nowrap">{when(it.createdAt)}</span>}
                  {collKey === "messages" && it.repliedAt && (
                    <span className="text-[10px] uppercase tracking-widest bg-green-100 text-green-800 px-2 py-1 rounded">Replied</span>
                  )}
                  {collKey === "subscribers" && it.mailerliteSyncedAt && (
                    <span className="text-[10px] uppercase tracking-widest bg-gold/15 text-gold-dark px-2 py-1 rounded">In MailerLite</span>
                  )}
                  {collKey === "messages" && it.email && (
                    <Link
                      to={`/admin/messages/${it.id}`}
                      className="p-2 text-ink-light hover:text-maroon transition-colors"
                      title="Open conversation and reply"
                    >
                      <span className="material-symbols-outlined text-[20px]">reply</span>
                    </Link>
                  )}
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
          </>
        )}
      </div>
    </div>
  );
}
