// Per-page SEO (title + meta description), from "Website - SEO.xlsx".
// Consumed by <Seo /> (mounted once in Layout) which updates the document
// head on every route change. Canonical/OG URLs use the primary domain.

import { getMaster } from "../data/masters.js";

export const SITE_URL = "https://dundulraptenling.org";

// Default share image (same as index.html).
export const DEFAULT_IMAGE =
  "https://res.cloudinary.com/dvhwombxw/image/upload/v1786318624/monastery/swpytecsk7ftgfwrz3j4.jpg";

export const DEFAULT_SEO = {
  title: "Dundul Raptenling Monastery | Tibetan Buddhist Monastery in Odisha",
  description:
    "Dundul Raptenling Monastery in Odisha preserves the Dudjom Tersar lineage through Dharma practice, monastic education, pujas, and sacred projects.",
};

// Exact-path map (values taken verbatim from the SEO spreadsheet).
export const PAGE_SEO = {
  "/": DEFAULT_SEO,
  "/about": {
    title: "About Dundul Raptenling Monastery | Dudjom Tersar Lineage",
    description:
      "Learn about Dundul Raptenling Monastery, a Tibetan Buddhist monastery in Odisha dedicated to the Dudjom Tersar lineage and Dharma preservation.",
  },
  "/history": {
    title: "History of Dundul Raptenling Monastery",
    description:
      "Explore the history of Dundul Raptenling Monastery and its role in preserving Tibetan Buddhist practice, monastic education, and the Dudjom Tersar lineage.",
  },
  "/dudjom-rinpoche": {
    title: "Dudjom Rinpoche | Dudjom Tersar Lineage",
    description:
      "Learn about Dudjom Rinpoche, the great Nyingma master whose Dudjom Tersar lineage guides the practice and vision of Dundul Raptenling Monastery.",
  },
  "/stupa": {
    title: "The Dundul Chorten Stupa | Sacred Buddhist Stupa in Odisha",
    description:
      "Learn about the Dundul Chorten, a sacred Buddhist stupa connected to prayer, merit, Dharma practice, and the blessings of the Dudjom Tersar lineage.",
  },
  "/presidents": {
    title: "Our Presidents | Dundul Raptenling Monastery Leadership",
    description:
      "Meet the presidents who have guided Dundul Raptenling Monastery’s mission to preserve Dharma, support monks, and serve the Buddhist community.",
  },
  "/presidents/lama-sonam-tashi-rinpoche": {
    title: "Lama Sonam Tashi Rinpoche | Dundul Raptenling Monastery",
    description:
      "Learn about Lama Sonam Tashi Rinpoche, head of Dundul Raptenling Monastery and a dedicated teacher of the Dudjom Tersar lineage.",
  },
  "/vajra-masters": {
    title: "Vajra Masters | Dundul Raptenling Monastery",
    description:
      "Learn about the Vajra Masters connected with Dundul Raptenling Monastery and their role in preserving Tibetan Buddhist teachings, rituals, and practice.",
  },
  "/board-members": {
    title: "Board Members | Dundul Raptenling Monastery",
    description:
      "Meet the board members supporting Dundul Raptenling Monastery’s nonprofit mission, Dharma activities, monastic education, and sacred projects.",
  },
  "/odisha-vihara": {
    title: "Odisha Dudjom Vihara | Dudjom Tersar Buddhist Center",
    description:
      "Odisha Dudjom Vihara supports Dudjom Tersar practice, Buddhist education, pujas, and Dharma activities connected with Dundul Raptenling Monastery.",
  },
  "/shedra": {
    title: "Shenphen Shedrubling Shedra | Monastic Buddhist Education",
    description:
      "Shenphen Shedrubling Shedra provides Tibetan Buddhist monastic education, philosophy study, ritual training, and Dharma learning for monks in Odisha.",
  },
  "/graduate-monks": {
    title: "Graduate Monks | Dundul Raptenling Monastery Shedra",
    description:
      "Meet the graduate monks of Dundul Raptenling Monastery and learn how monastic education supports Dharma preservation and future Buddhist teachers.",
  },
  "/hostel-project": {
    title: "Hostel & Classroom Projects | Support Monastic Education",
    description:
      "Support hostel and classroom projects at Dundul Raptenling Monastery, helping monks receive Buddhist education, housing, study space, and daily care.",
  },
  "/publications": {
    title: "Buddhist Publications | Dundul Raptenling Monastery",
    description:
      "Explore Buddhist publications from Dundul Raptenling Monastery, including Dharma texts, teachings, practice materials, and resources for the community.",
  },
  "/apps": {
    title: "Buddhist Digital Apps | Dharma Practice Resources",
    description:
      "Discover digital Dharma apps and online resources from Dundul Raptenling Monastery supporting Buddhist practice, prayer, study, and community access.",
  },
  "/community-support": {
    title: "Community Support | Dundul Raptenling Monastery",
    description:
      "Learn how Dundul Raptenling Monastery supports monks, local communities, Dharma activities, education, healthcare, food, and compassionate service.",
  },
  "/news": {
    title: "Monastery News | Dundul Raptenling Monastery",
    description:
      "Stay updated with news from Dundul Raptenling Monastery, including Dharma events, pujas, projects, education programs, and community activities.",
  },
  "/magazine": {
    title: "Buddhist Magazine | Dundul Raptenling Monastery",
    description:
      "Read Buddhist magazine articles, Dharma reflections, monastery updates, teachings, project stories, and community news from Dundul Raptenling Monastery.",
  },
  "/gallery": {
    title: "Gallery | Dundul Raptenling Monastery Photos",
    description:
      "View photos from Dundul Raptenling Monastery, including monks, pujas, Dharma events, sacred projects, monastery life, and Buddhist ceremonies.",
  },
  "/contact": {
    title: "Contact Dundul Raptenling Monastery",
    description:
      "Contact Dundul Raptenling Monastery for puja requests, donations, monastery visits, Dharma projects, publications, and general inquiries.",
  },
  "/support": {
    title: "Donate to Dundul Raptenling Monastery | Support Buddhist Monks",
    description:
      "Support Dundul Raptenling Monastery with a donation for monastic education, food, healthcare, pujas, Dharma preservation, and Zangdok Palri.",
  },

  // Live routes not listed in the spreadsheet — sensible defaults so every
  // page has a unique, accurate title/description.
  "/puja": {
    title: "Sacred Puja Requests | Dundul Raptenling Monastery",
    description:
      "Request a sacred puja from Dundul Raptenling Monastery — dedicated prayers and rituals in the Dudjom Tersar lineage for health, protection, and merit.",
  },
  "/prayer-books": {
    title: "Puja Prayer Books | Dundul Raptenling Monastery",
    description:
      "Read and download sacred puja prayer books of the Dudjom Tersar tradition from Dundul Raptenling Monastery for daily practice and offerings.",
  },
  "/offering": {
    title: "Make an Offering | Dundul Raptenling Monastery",
    description:
      "Make an offering to Dundul Raptenling Monastery to support Dharma activities, monastic education, pujas, and sacred projects in Odisha.",
  },
  "/support-young-monks": {
    title: "Support Young Monks | Dundul Raptenling Monastery",
    description:
      "Support young monks at Dundul Raptenling Monastery with education, housing, food, and daily care as they train in the Dudjom Tersar lineage.",
  },
  "/expenditures": {
    title: "Expenditures & Transparency | Dundul Raptenling Monastery",
    description:
      "See how donations to Dundul Raptenling Monastery are used to support monks, education, pujas, and sacred projects with full transparency.",
  },
  "/terms": {
    title: "Terms of Use | Dundul Raptenling Monastery",
    description: "Read the terms of use for the Dundul Raptenling Monastery website.",
  },
  "/privacy": {
    title: "Privacy Policy | Dundul Raptenling Monastery",
    description: "Read the privacy policy for the Dundul Raptenling Monastery website.",
  },
};

// Biography pages: one unique title/description per person. People listed as
// both a President and a Vajra Master have two URLs with the same biography —
// the /presidents/ one is canonical.
export function trimDescription(text, max = 155) {
  if (text.length <= max) return text;
  return text.slice(0, text.lastIndexOf(" ", max - 1)).replace(/[,;:—–-]$/, "") + "…";
}

function masterSeo(pathname) {
  const m = pathname.match(/^\/(vajra-masters|presidents)\/([^/]+)$/);
  const master = m && getMaster(m[2]);
  if (!master) return null;
  const firstPara = master.bio.find((b) => typeof b === "string") || "";
  // "6th Vajra Master · Current" -> "Current 6th Vajra Master"; "A · B" -> "A, B"
  const role = master.role.endsWith(" · Current")
    ? "Current " + master.role.replace(" · Current", "")
    : master.role.replace(" · ", ", ");
  const canonicalGroup = master.groups.includes("president") ? "presidents" : "vajra-masters";
  return {
    title: `${master.name} | Dundul Raptenling Monastery`,
    description: trimDescription(`${role} of Dundul Raptenling Monastery. ${firstPara}`),
    image: master.portrait,
    canonical: `/${canonicalGroup}/${master.slug}`,
  };
}

// Prefix fallbacks for dynamic detail routes (e.g. /news/:id before the
// article has loaded — NewsDetail then sets the article's own title).
const PREFIX_SEO = [
  ["/vajra-masters/", PAGE_SEO["/vajra-masters"]],
  ["/presidents/", PAGE_SEO["/presidents"]],
  ["/news/", PAGE_SEO["/news"]],
];

export function getSeo(pathname) {
  if (PAGE_SEO[pathname]) return PAGE_SEO[pathname];
  const person = masterSeo(pathname);
  if (person) return person;
  for (const [prefix, val] of PREFIX_SEO) {
    if (pathname.startsWith(prefix)) return val;
  }
  return DEFAULT_SEO;
}
