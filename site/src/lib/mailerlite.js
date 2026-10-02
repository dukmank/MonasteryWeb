// Adds a form sender to MailerLite (Vajra Lotus Foundation account) via the
// serverless endpoint on the Zangdok Palri 2028 Vercel project, which holds the
// MailerLite API key. Best effort: a failure never blocks the form.
const ENDPOINT =
  import.meta.env.VITE_MAILERLITE_ENDPOINT || "https://zangdok-palri-2028.vercel.app/api/monastery-subscribe";

// source: "newsletter" | "contact" | "puja"; newsletter: true when the sender ticked the opt-in box.
// Returns true when MailerLite accepted the contact.
export async function addToMailerLite({ email, name, source, newsletter = false, puja }) {
  if (!email) return false;
  try {
    const r = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ email, name, source, newsletter, puja, language: localStorage.getItem("lang") || "EN" }),
    });
    return r.ok;
  } catch (err) {
    console.warn("mailerlite:", err?.message);
    return false;
  }
}
