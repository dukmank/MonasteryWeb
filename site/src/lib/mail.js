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

// -> [{ id, date, direction: "in" | "out", from, subject, text }], oldest first
export const loadThread = (messageId) => call({ action: "thread", messageId }).then((d) => d.messages || []);

// -> { ok, sentAt, messageId }
export const sendReply = (messageId, subject, text, references) =>
  call({ action: "send", messageId, subject, text, references });
