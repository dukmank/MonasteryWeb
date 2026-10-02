import { useEffect, useState } from "react";
import { updateItem } from "../lib/content.js";
import { loadThread, sendReply } from "../lib/mail.js";

const SIGNATURE = "With best wishes,\nDundul Raptenling Monastery\ncontact@dundulraptenling.org";

const replySubject = (m) =>
  m.subject ? `Re: ${m.subject.replace(/^Re:\s*/i, "")}` : "Re: your message to Dundul Raptenling Monastery";

const fmt = (iso) => {
  const d = iso?.toDate ? iso.toDate() : iso ? new Date(iso) : null;
  return d && !isNaN(d) ? d.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" }) : "";
};

// Fallback links: Gmail compose in a new tab, or the computer's email app (mailto:).
function replyParts(m) {
  let original = String(m.message || "");
  if (original.length > 1500) original = original.slice(0, 1500) + "…"; // keep the URL a safe length
  const quoted = original.split("\n").map((l) => `> ${l}`).join("\n");
  const body = `Dear ${m.name || "friend"},\n\n\n\n${SIGNATURE}\n\n${quoted}`;
  return { to: m.email || "", subject: replySubject(m), body };
}
export function gmailLink(m) {
  const { to, subject, body } = replyParts(m);
  return `https://mail.google.com/mail/?${new URLSearchParams({ view: "cm", fs: "1", to, su: subject, body })}`;
}
export function replyLink(m) {
  const { to, subject, body } = replyParts(m);
  return `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function Bubble({ out, who, when, subject, children }) {
  return (
    <div className={`flex ${out ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-lg px-4 py-3 border ${
          out ? "bg-maroon/5 border-maroon/15" : "bg-cream/60 border-gold/20"
        }`}
      >
        <div className="text-[11px] text-ink-light mb-1">
          <span className="font-medium text-ink-mid">{who}</span> · {when}
          {subject && <span className="block truncate">{subject}</span>}
        </div>
        <div className="whitespace-pre-line text-[14px] leading-relaxed text-ink">{children}</div>
      </div>
    </div>
  );
}

// Contact message: the conversation with the sender, and a reply box that sends
// from contact@dundulraptenling.org without leaving the CMS.
export default function MessageThread({ id, data, set }) {
  const [thread, setThread] = useState(null); // null = loading, [] = none
  const [threadError, setThreadError] = useState("");
  const [subject, setSubject] = useState(replySubject(data));
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  const refresh = () => {
    setThreadError("");
    loadThread(id)
      .then(setThread)
      .catch((e) => {
        setThread([]);
        setThreadError(e.message);
      });
  };
  useEffect(refresh, [id]);
  // Prefill once the message has loaded, unless the admin already started typing.
  const draft = `Dear ${data.name || "friend"},\n\n\n\n${SIGNATURE}`;
  const [lastDraft, setLastDraft] = useState("");
  useEffect(() => {
    setSubject(replySubject(data));
    setText((t) => (!t || t === lastDraft ? draft : t));
    setLastDraft(draft);
  }, [data.subject, data.name]);

  // Replies sent from the CMS are also kept on the message, so the history shows
  // even when the mailbox can't be read.
  const saved = Array.isArray(data.replies) ? data.replies : [];
  const fromMail = thread || [];
  const shown = fromMail.length
    ? fromMail
    : saved.map((r) => ({ id: r.at, date: r.at, direction: "out", from: "Dundul Raptenling Monastery", subject: r.subject, text: r.text }));

  const send = async () => {
    if (!text.trim() || !window.confirm(`Send this reply to ${data.email}?`)) return;
    setSending(true);
    setSendError("");
    try {
      const refs = fromMail.map((m) => m.id).filter((x) => /^<.+>$/.test(x));
      const r = await sendReply(id, subject, text, refs);
      const replies = [...saved, { at: r.sentAt, subject, text, messageId: r.messageId || "" }];
      set("replies", replies);
      set("repliedAt", r.sentAt);
      await updateItem("messages", id, { replies, repliedAt: r.sentAt });
      setText(draft);
      setTimeout(refresh, 2500); // let Gmail file the sent copy
    } catch (e) {
      setSendError(e.message);
    } finally {
      setSending(false);
    }
  };

  const toggleReplied = () => {
    const at = data.repliedAt ? null : new Date().toISOString();
    set("repliedAt", at);
    updateItem("messages", id, { repliedAt: at }).catch(() => {});
  };

  return (
    <div className="m-8 mb-0 max-w-2xl bg-white border border-gold/20 rounded-lg p-5 space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="font-medium text-ink">
            {data.name || "(no name)"} <span className="text-ink-light font-normal">&lt;{data.email}&gt;</span>
          </div>
          <div className="text-sm text-ink-mid">{data.subject || "(no subject)"}</div>
        </div>
        <button
          type="button"
          onClick={toggleReplied}
          className={`shrink-0 text-[10px] uppercase tracking-widest px-2 py-1 rounded ${
            data.repliedAt ? "bg-green-100 text-green-800" : "bg-cream-dark text-ink-light"
          }`}
          title={data.repliedAt ? "Click to mark as not replied" : "Click to mark as replied"}
        >
          {data.repliedAt ? `Replied ${new Date(data.repliedAt).toLocaleDateString()}` : "Not replied"}
        </button>
      </div>

      <div className="space-y-3">
        <Bubble who={`${data.name || data.email} · website form`} when={fmt(data.createdAt)}>
          {data.message}
        </Bubble>
        {thread === null && <p className="text-[12px] text-ink-light">Loading e-mail conversation…</p>}
        {shown.map((m) => (
          <Bubble key={m.id} out={m.direction === "out"} who={m.direction === "out" ? "Monastery" : m.from} when={fmt(m.date)} subject={m.subject}>
            {m.text}
          </Bubble>
        ))}
        {threadError && (
          <p className="text-[12px] text-ink-light">
            E-mail history unavailable: {threadError}
          </p>
        )}
      </div>

      <div className="border-t border-cream-dark pt-4 space-y-2">
        <label className="block text-[11px] uppercase tracking-widest text-ink-light">Reply from contact@dundulraptenling.org</label>
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full border border-cream-dark rounded-sm px-3 py-2 text-[14px] focus:outline-none focus:border-maroon"
        />
        <textarea
          rows={8}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border border-cream-dark rounded-sm px-3 py-2 text-[14px] leading-relaxed focus:outline-none focus:border-maroon"
        />
        {sendError && <p className="text-[13px] text-error">{sendError}</p>}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            disabled={sending || !text.trim()}
            onClick={send}
            className="inline-flex items-center gap-2 bg-maroon text-white px-4 py-2 rounded-sm text-[11px] font-semibold tracking-widest uppercase hover:bg-maroon-mid transition-colors disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-[18px]">send</span>
            {sending ? "Sending…" : "Send reply"}
          </button>
          <button type="button" onClick={refresh} className="text-[12px] text-ink-mid underline hover:text-maroon">
            Refresh conversation
          </button>
          <span className="flex-1" />
          <a href={gmailLink(data)} target="_blank" rel="noopener noreferrer" className="text-[12px] text-ink-light underline hover:text-maroon">
            Open in Gmail
          </a>
        </div>
      </div>
    </div>
  );
}
