// English → Tibetan (Uchen) translation dictionary.
// Keys are the EXACT trimmed English strings that appear on the site.
// Missing keys fall back to English automatically.
// NOTE: machine-assisted translations — sacred terms & proper names should be
// reviewed by a Tibetan-literate lama before considering final.

// Per-page translation files are auto-merged from ./translations/*.js.
// BASE (curated nav/footer/common below) wins on any key conflict.
const pageModules = import.meta.glob("./translations/*.js", { eager: true });
const PAGE_TIB = Object.assign(
  {},
  ...Object.values(pageModules).map((m) => m.default || {})
);

const BASE = {
  // ── Brand ─────────────────────────────────────────────
  "Dundul Raptenling Monastery": "བདུད་འདུལ་རབ་བརྟན་གླིང་དགོན་པ།",
  "Nyingma Tradition · Dudjom Tersar": "རྙིང་མ་ལུགས། · བདུད་འཇོམས་གཏེར་གསར།",

  // ── Top navigation ────────────────────────────────────
  "Home": "གཙོ་ངོས།",
  "About": "ངོ་སྤྲོད།",
  "History": "ལོ་རྒྱུས།",
  "Dudjom Rinpoche": "བདུད་འཇོམས་རིན་པོ་ཆེ།",
  "The Dundul Chorten (Stupa)": "བདུད་འདུལ་མཆོད་རྟེན།",
  "Our Presidents": "ང་ཚོའི་འགན་འཛིན།",
  "Our Vajra Masters": "ང་ཚོའི་རྡོ་རྗེ་སློབ་དཔོན།",
  "Board Members": "འཛིན་སྐྱོང་ཚོགས་མི།",
  "Nonprofit ↗": "ཁེ་མེད་ཚོགས་པ། ↗",
  "The Monastery": "དགོན་པ།",
  "Odisha Dudjom Vihara": "ཨོ་ཌི་ཤ་བདུད་འཇོམས་གཙུག་ལག་ཁང་།",
  "Shenphen Shedrubling Shedra": "གཞན་ཕན་བཤད་སྒྲུབ་གླིང་བཤད་གྲྭ།",
  "Graduate Monks": "མཐར་ཕྱིན་གྲྭ་པ།",
  "Projects": "ལས་གཞི།",
  "Zangdok Palri ↗": "ཟངས་མདོག་དཔལ་རི། ↗",
  "Hostel & Classroom Projects": "གཟིམ་ཁང་དང་འཛིན་ཁང་ལས་གཞི།",
  "Publications": "དཔེ་སྐྲུན།",
  "Digital Apps": "ཌིཇི་ཊཱལ་མཉེན་ཆས།",
  "Community Support": "སྤྱི་ཚོགས་རོགས་རམ།",
  "Media & News": "བརྒྱུད་ལམ་དང་གསར་འགྱུར།",
  "News": "གསར་འགྱུར།",
  "Magazine": "དུས་དེབ།",
  "Gallery": "པར་མཛོད།",
  "Contact Us": "འབྲེལ་གཏུགས།",
  "Contact": "འབྲེལ་གཏུགས།",
  "Support / Donate": "རྒྱབ་སྐྱོར། / སྦྱིན་པ།",
  "Full Puja List / Puja Request": "མཆོད་འབུལ་ཐོ་གཞུང་། / ཞབས་བརྟན་ཞུ་བ།",
  "Monastery Expenditures": "དགོན་པའི་འགྲོ་གྲོན།",
  "Overview": "སྤྱི་བཤད།",
  "Menu": "འདེམས་ཐོ།",

  // ── Footer ────────────────────────────────────────────
  "Navigation": "འགྲོ་ལམ།",
  "Monastic Life": "གྲྭ་པའི་འཚོ་བ།",
  "Support": "རྒྱབ་སྐྱོར།",
  "Nonprofit": "ཁེ་མེད་ཚོགས་པ།",
  "Donation": "སྦྱིན་པ།",
  "Puja Request": "ཞབས་བརྟན་ཞུ་བ།",
  "Newsletter": "གསར་འགྱུར་ཡིག་ཆ།",
  "Social Media": "སྤྱི་ཚོགས་བརྒྱུད་ལམ།",
  "Terms of Use": "སྤྱོད་ཆོག་གི་ཆ་རྐྱེན།",
  "Privacy Policy": "གསང་དོན་སྲིད་བྱུས།",
  "Receive teachings, news, and event updates from the monastery.":
    "དགོན་པ་ནས་བཀའ་ཆོས། གསར་འགྱུར། དང་བྱ་གཞག་གི་གསར་འགྱུར་ཐོབ་པར་བྱ།",
  "Your email": "ཁྱེད་ཀྱི་གློག་འཕྲིན།",
  "Join": "ཞུགས།",
  "© 2025 Dundul Raptenling Monastery · All Rights Reserved":
    "© ༢༠༢༥ བདུད་འདུལ་རབ་བརྟན་གླིང་དགོན་པ། · དབང་ཆ་ཡོངས་རྫོགས་སྲུང་སྐྱོབ་བྱས་ཡོད།",

  // ── Common UI / breadcrumbs / buttons ────────────────
  "Media": "བརྒྱུད་ལམ།",
  "Read More": "མང་བ་ཀློག",
  "Learn More": "མང་བ་ཤེས་པར་བྱ།",
  "Read Our Full History": "ང་ཚོའི་ལོ་རྒྱུས་ཡོངས་རྫོགས་ཀློག",
  "READ OUR FULL HISTORY": "ང་ཚོའི་ལོ་རྒྱུས་ཡོངས་རྫོགས་ཀློག",
  "View Archive": "ཡིག་མཛོད་ལ་ལྟ་བ།",
  "VIEW ARCHIVE": "ཡིག་མཛོད་ལ་ལྟ་བ།",
  "Donate Now": "ད་ལྟ་སྦྱིན་པ་གཏོང་།",
  "DONATE NOW": "ད་ལྟ་སྦྱིན་པ་གཏོང་།",
  "Subscribe": "མངགས་ཉོ།",
  "Subscribing...": "མངགས་ཉོ་བཞིན་པ...",
  "Subscribed ✓": "མངགས་ཉོ་ཟིན། ✓",
  "Sending...": "གཏོང་བཞིན་པ...",
  "Send Message": "འཕྲིན་ཡིག་གཏོང་།",
  "Message Sent!": "འཕྲིན་ཡིག་བཏང་ཟིན།",
  "Email Address": "གློག་འཕྲིན་ཁ་བྱང་།",
  "Return Home": "གཙོ་ངོས་ལ་ལོག",
  "Page Not Found": "ཤོག་ངོས་མ་རྙེད།",
  "The page you are looking for does not exist or may have been moved. May your path lead you back to the teachings.":
    "ཁྱེད་ཀྱིས་འཚོལ་བཞིན་པའི་ཤོག་ངོས་དེ་མི་གནས་པའམ་སྤོ་ཟིན་པ་ཡིན་སྲིད། ཁྱེད་ཀྱི་ལམ་གྱིས་བཀའ་ཆོས་ལ་སླར་ཁྲིད་པར་ཤོག",
};

export const TIB = Object.assign({}, PAGE_TIB, BASE);
