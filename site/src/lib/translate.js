// Machine translation for the CMS: sends English fields to the serverless
// endpoint (Zangdok Palri 2028 Vercel project, which holds the Claude API key).
// Only signed-in admins can use it: the request carries their Firebase ID token.
import { auth } from "./firebase.js";

const ENDPOINT =
  import.meta.env.VITE_TRANSLATE_ENDPOINT || "https://zangdok-palri-2028.vercel.app/api/monastery-translate";

// fields: { name: "English" }, jobs: { langCode: [name, ...] }
// -> { langCode: { name: "translation" } }; throws with a readable message.
export async function translateFields(fields, jobs) {
  const token = await auth?.currentUser?.getIdToken();
  if (!token) throw new Error("Not signed in.");
  const r = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ fields, jobs }),
  });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(data.error || `Translation failed (${r.status}).`);
  return data.translations || {};
}
