import { toSafeHtml } from "../lib/richtext.js";

// Renders a CMS "richtext" value (sanitized HTML, or older plain text).
// Uses a <div>: lists are not allowed inside <p>.
export default function RichText({ value, className = "" }) {
  const html = toSafeHtml(value);
  if (!html) return null;
  return <div className={`rich-text ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
}
