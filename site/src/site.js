// Central site map — drives the navigation menu.
// `to` on a group = the group label is itself a link (e.g. "About")
// `href` on an item = external link (opens in new tab)

export const NAV = [
  {
    label: "About",
    to: "/about",
    items: [
      { to: "/history", label: "History" },
      { to: "/dudjom-rinpoche", label: "Dudjom Rinpoche" },
      { to: "/stupa", label: "The Dundul Chorten (Stupa)" },
      { to: "/presidents", label: "Our Presidents" },
      { to: "/vajra-masters", label: "Our Vajra Masters" },
      { to: "/board-members", label: "Board Members" },
      { href: "https://vajralotusfoundation.org", label: "Nonprofit ↗", external: true },
    ],
  },
  {
    label: "The Monastery",
    items: [
      { to: "/odisha-vihara", label: "Odisha Dudjom Vihara" },
      { to: "/shedra", label: "Shenphen Shedrubling Shedra" },
      { to: "/graduate-monks", label: "Graduate Monks" },
    ],
  },
  {
    label: "Projects",
    items: [
      { href: "https://zangdokpalriodisha.com", label: "Zangdok Palri ↗", external: true },
      { to: "/hostel-project", label: "Hostel & Classroom Projects" },
      { to: "/publications", label: "Publications" },
      { to: "/apps", label: "Digital Apps" },
      { to: "/community-support", label: "Community Support" },
    ],
  },
  {
    label: "Media & News",
    items: [
      { to: "/news", label: "News" },
      { to: "/magazine", label: "Magazine" },
      { to: "/gallery", label: "Gallery" },
    ],
  },
];
