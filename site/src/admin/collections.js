// Schema-driven config. Adding a field here adds it to the admin form,
// the list view, and the saved document — no other code changes needed.
//
// field types: text | textarea | select | image | images | pdf | url | bool | date

export const COLLECTIONS = {
  news: {
    key: "news",
    label: "News & Events",
    labelVi: "News & Events",
    icon: "newspaper",
    titleField: "title",
    subtitleField: "date",
    imageField: "coverImage",
    fields: [
      { name: "title", label: "Title", type: "text", required: true, bilingual: true },
      {
        name: "category",
        label: "Category",
        type: "select",
        options: ["Announcement", "Event", "Publication", "Ritual", "Community", "Institutional", "Zangdok Palri"],
        default: "Announcement",
      },
      { name: "date", label: "Date (e.g. March 2025)", type: "text", required: true, bilingual: true },
      { name: "excerpt", label: "Excerpt", type: "textarea", rows: 3, bilingual: true },
      { name: "body", label: "Full content", type: "textarea", rows: 10, bilingual: true },
      { name: "coverImage", label: "Cover image", type: "image" },
      { name: "images", label: "Additional images (multiple allowed)", type: "images" },
      { name: "published", label: "Publicly visible", type: "bool", default: true },
      { name: "consecration2028", label: "Show on Consecration 2028 page", type: "bool", default: false },
    ],
  },

  gallery: {
    key: "gallery",
    label: "Photo Gallery",
    labelVi: "Photo Gallery",
    icon: "photo_library",
    titleField: "caption",
    subtitleField: "category",
    imageField: "image",
    fields: [
      { name: "image", label: "Image", type: "image", required: true },
      { name: "caption", label: "Caption", type: "text", bilingual: true },
      {
        name: "category",
        label: "Category",
        type: "select",
        options: ["General", "Monastery", "Lingdro", "Zangdok Palri", "3D Mandala"],
        default: "General",
      },
      { name: "published", label: "Publicly visible", type: "bool", default: true },
    ],
  },

  magazine: {
    key: "magazine",
    label: "Magazine",
    labelVi: "Magazine",
    icon: "menu_book",
    titleField: "title",
    subtitleField: "year",
    imageField: "coverImage",
    fields: [
      { name: "title", label: "Issue name (e.g. Volume V)", type: "text", required: true, bilingual: true },
      { name: "year", label: "Year", type: "text", required: true },
      { name: "coverImage", label: "Cover image", type: "image" },
      { name: "description", label: "Description", type: "textarea", rows: 4, bilingual: true },
      { name: "pdfUrl", label: "PDF file (upload or paste link)", type: "pdf" },
      { name: "featured", label: "Featured issue (show at top)", type: "bool", default: false },
      { name: "published", label: "Publicly visible", type: "bool", default: true },
    ],
  },

  publications: {
    key: "publications",
    label: "Publications",
    labelVi: "Publications",
    icon: "auto_stories",
    titleField: "title",
    subtitleField: "author",
    imageField: "coverImage",
    fields: [
      { name: "title", label: "Publication name", type: "text", required: true, bilingual: true },
      { name: "category", label: "Category / Tag (small text above the title — e.g. Ritual Texts)", type: "text" },
      { name: "badge", label: "Corner badge (Collection / Digital PDF / New Release)", type: "text" },
      { name: "author", label: "Author (“Author:” line)", type: "text", bilingual: true },
      { name: "format", label: "Format (“Format:” line — e.g. Tibetan and English)", type: "text" },
      { name: "compiledBy", label: "Compiled by (“Compiled by:” line)", type: "text", bilingual: true },
      { name: "editions", label: "Edition / Release (italic — e.g. Release: 2026)", type: "text" },
      { name: "coverImage", label: "Cover image", type: "image" },
      { name: "description", label: "Description (shown only when Author/Format are empty)", type: "textarea", rows: 3, bilingual: true },
      { name: "buyLink", label: "“Buy Online” link", type: "url" },
      { name: "readLink", label: "“Digital Reading” link", type: "url" },
      { name: "published", label: "Publicly visible", type: "bool", default: true },
    ],
  },

  prayerbooks: {
    key: "prayerbooks",
    label: "Puja Books",
    labelVi: "Puja Books",
    icon: "menu_book",
    titleField: "title",
    subtitleField: "badge",
    imageField: "coverImage",
    fields: [
      { name: "title", label: "Book title", type: "text", required: true, bilingual: true },
      { name: "badge", label: "Badge / Tag (e.g. Foundational, Daily Practice)", type: "text" },
      { name: "coverImage", label: "Cover image", type: "image" },
      { name: "description", label: "Description", type: "textarea", rows: 3, bilingual: true },
      { name: "pdfUrl", label: "PDF file (upload or paste link)", type: "pdf" },
      { name: "onlineUrl", label: "Read online link", type: "url" },
      { name: "order", label: "Sort order (number — lower shows first)", type: "text" },
      { name: "published", label: "Publicly visible", type: "bool", default: true },
    ],
  },

  messages: {
    key: "messages",
    label: "Messages",
    labelVi: "Contact Messages",
    icon: "mail",
    titleField: "name",
    subtitleField: "email",
    imageField: null,
    fields: [
      { name: "name", label: "Full name", type: "text" },
      { name: "email", label: "Email", type: "text" },
      { name: "subject", label: "Subject", type: "text" },
      { name: "message", label: "Message", type: "textarea", rows: 6 },
    ],
  },

  subscribers: {
    key: "subscribers",
    label: "Subscribers",
    labelVi: "Subscribers",
    icon: "alternate_email",
    titleField: "email",
    subtitleField: null,
    imageField: null,
    fields: [
      { name: "email", label: "Email", type: "text" },
    ],
  },
};

export const COLLECTION_LIST = Object.values(COLLECTIONS);

export function emptyDoc(coll) {
  const out = {};
  for (const f of coll.fields) {
    if (f.type === "bool") out[f.name] = f.default ?? false;
    else if (f.type === "images") out[f.name] = [];
    else out[f.name] = f.default ?? "";
    if (f.bilingual) out[`${f.name}_bo`] = "";
  }
  return out;
}
