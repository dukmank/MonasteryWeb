import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { COLLECTIONS } from "./collections.js";
import { listAll, removeItem, updateItem } from "../lib/content.js";
import { addToMailerLite } from "../lib/mailerlite.js";
import { gmailLink } from "./CollectionForm.jsx";

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
          <div className="bg-white rounded-lg border border-gold/15 divide-y divide-cream-dark overflow-hidden">
            {items.map((it) => {
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
                    {sub && <div className="text-xs text-ink-light truncate">{sub}</div>}
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
                    <a
                      href={gmailLink(it)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-ink-light hover:text-maroon transition-colors"
                      title="Reply in Gmail"
                    >
                      <span className="material-symbols-outlined text-[20px]">reply</span>
                    </a>
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
