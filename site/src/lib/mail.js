// E-mail for contact messages: the CMS sends replies and reads the conversation
// through the serverless endpoint (Zangdok Palri 2028 Vercel project), which uses
// the monastery's Google Workspace mailbox. Admin-only: the request carries the
// admin's Firebase ID token.
import { auth } from "./firebase.js";

const ENDPOINT = import.meta.env.VITE_MAIL_ENDPOINT || "https://zangdok-palri-2028.vercel.app/api/monastery-mail";

async function call(payload) {
  const token = await auth?.currentUser?.getIdToken();
  if (!token) throw new Error("Not signed in.");
  const r = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(payload),
  });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) throw Object.assign(new Error(data.error || `E-mail failed (${r.status}).`), { status: r.status });
  return data;
}

// -> { mailbox, messages: [{ id, threadId, date, direction: "in" | "out", from, subject, spam, text }] }
// (messages oldest first). threadIds: Gmail conversations from earlier CMS replies.
export const loadThread = (messageId, threadIds = []) =>
  call({ action: "thread", messageId, threadIds }).then((d) => ({ mailbox: d.mailbox || "", messages: d.messages || [] }));

// -> { ok, sentAt, messageId, threadId }
// text = plain-text version; html = the rich-text reply; quote = { from, when, text }
// of the message being answered (shown under the reply); threadId = Gmail conversation.
export const sendReply = (messageId, { subject, text, html, references, quote, threadId }) =>
  call({ action: "send", messageId, subject, text, references, ...(html ? { html } : {}), ...(quote ? { quote } : {}), ...(threadId ? { threadId } : {}) });
