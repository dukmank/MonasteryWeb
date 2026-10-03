import { useEffect, useRef } from "react";
import { normalizeRichText, toSafeHtml } from "../lib/richtext.js";

// Small WYSIWYG box for "richtext" fields: bold, italic, underline, bullet and
// numbered lists, links, clear formatting. Output is cleaned by lib/richtext.js,
// and pasted text from Word/Google Docs keeps only that basic formatting.
const TOOLS = [
  { cmd: "bold", icon: "format_bold", title: "Bold (Ctrl/Cmd+B)" },
  { cmd: "italic", icon: "format_italic", title: "Italic (Ctrl/Cmd+I)" },
  { cmd: "underline", icon: "format_underlined", title: "Underline (Ctrl/Cmd+U)" },
  { cmd: "insertUnorderedList", icon: "format_list_bulleted", title: "Bullet list" },
  { cmd: "insertOrderedList", icon: "format_list_numbered", title: "Numbered list" },
  { cmd: "link", icon: "link", title: "Add a link to the selected text" },
  { cmd: "unlink", icon: "link_off", title: "Remove link" },
  { cmd: "clear", icon: "format_clear", title: "Clear formatting" },
];

export default function RichTextEditor({ value, onChange, lang, placeholder, minRows = 4 }) {
  const ref = useRef(null);
  const lastEmitted = useRef(null);

  // Load the value into the box, but don't reset it while the user is typing
  // (that would move the cursor to the start).
  useEffect(() => {
    const el = ref.current;
    if (!el || value === lastEmitted.current) return;
    el.innerHTML = toSafeHtml(value);
  }, [value]);

  const emit = () => {
    const next = normalizeRichText(ref.current.innerHTML);
    lastEmitted.current = next;
    onChange(next);
  };

  const run = (cmd) => {
    ref.current.focus();
    if (cmd === "link") {
      const url = window.prompt("Link address (https://… or mailto:…)", "https://");
      if (!url || url === "https://") return;
      document.execCommand("createLink", false, url.trim());
    } else if (cmd === "clear") {
      document.execCommand("removeFormat");
      document.execCommand("unlink");
    } else {
      document.execCommand(cmd);
    }
    emit();
  };

  const onPaste = (e) => {
    e.preventDefault();
    const cd = e.clipboardData;
    const html = cd.getData("text/html");
    const clean = html ? toSafeHtml(html) : toSafeHtml(cd.getData("text/plain"));
    document.execCommand("insertHTML", false, clean);
    emit();
  };

  return (
    <div className="border border-cream-dark rounded-sm bg-white focus-within:border-gold">
      <div className="flex flex-wrap gap-0.5 border-b border-cream-dark px-1.5 py-1 bg-cream/40">
        {TOOLS.map((t) => (
          <button
            key={t.cmd}
            type="button"
            title={t.title}
            aria-label={t.title}
            onMouseDown={(e) => e.preventDefault() /* keep the text selection */}
            onClick={() => run(t.cmd)}
            className="w-8 h-8 grid place-items-center rounded text-ink-mid hover:bg-gold-light hover:text-maroon"
          >
            <span className="material-symbols-outlined text-[20px]">{t.icon}</span>
          </button>
        ))}
      </div>
      <div
        ref={ref}
        contentEditable
        suppressContentEditableWarning
        role="textbox"
        aria-multiline="true"
        lang={lang}
        data-placeholder={placeholder || ""}
        onInput={emit}
        onBlur={emit}
        onPaste={onPaste}
        style={{ minHeight: `${minRows * 1.75}em` }}
        className="rich-text rich-text-editor px-3 py-2 text-ink outline-none leading-relaxed"
      />
    </div>
  );
}
