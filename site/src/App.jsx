import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import History from "./pages/History.jsx";
import Stupa from "./pages/Stupa.jsx";
import OdishaVihara from "./pages/OdishaVihara.jsx";
import DudjomRinpoche from "./pages/DudjomRinpoche.jsx";
import VajraMasters from "./pages/VajraMasters.jsx";
import Presidents from "./pages/Presidents.jsx";
import MasterDetail from "./pages/MasterDetail.jsx";
import BoardMembers from "./pages/BoardMembers.jsx";
import Shedra from "./pages/Shedra.jsx";
import GraduateMonks from "./pages/GraduateMonks.jsx";
import PujaList from "./pages/PujaList.jsx";
import PrayerBooks from "./pages/PrayerBooks.jsx";
import CommunitySupport from "./pages/CommunitySupport.jsx";
import Support from "./pages/Support.jsx";
import SupportYoungMonks from "./pages/SupportYoungMonks.jsx";
import HostelProject from "./pages/HostelProject.jsx";
import Expenditures from "./pages/Expenditures.jsx";
import News from "./pages/News.jsx";
import NewsDetail from "./pages/NewsDetail.jsx";
import Magazine from "./pages/Magazine.jsx";
import Publications from "./pages/Publications.jsx";
import Gallery from "./pages/Gallery.jsx";
import Apps from "./pages/Apps.jsx";
import Contact from "./pages/Contact.jsx";
import Offering from "./pages/Offering.jsx";
import LamaSonamTashi from "./pages/LamaSonamTashi.jsx";
import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx";
import NotFound from "./pages/NotFound.jsx";

import ProtectedRoute from "./admin/ProtectedRoute.jsx";
import AdminLayout from "./admin/AdminLayout.jsx";
import Login from "./admin/Login.jsx";
import Dashboard from "./admin/Dashboard.jsx";
import CollectionList from "./admin/CollectionList.jsx";
import CollectionForm from "./admin/CollectionForm.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* ---- Admin (no public chrome) ---- */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path=":coll" element={<CollectionList />} />
            <Route path=":coll/new" element={<CollectionForm />} />
            <Route path=":coll/:id" element={<CollectionForm />} />
          </Route>
        </Route>

        {/* ---- Public site ---- */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/stupa" element={<Stupa />} />
          <Route path="/odisha-vihara" element={<OdishaVihara />} />
          <Route path="/dudjom-rinpoche" element={<DudjomRinpoche />} />
          <Route path="/vajra-masters" element={<VajraMasters />} />
          <Route path="/vajra-masters/:slug" element={<MasterDetail />} />
          <Route path="/presidents" element={<Presidents />} />
          <Route path="/presidents/:slug" element={<MasterDetail />} />
          <Route path="/board-members" element={<BoardMembers />} />
          <Route path="/shedra" element={<Shedra />} />
          <Route path="/graduate-monks" element={<GraduateMonks />} />
          <Route path="/puja" element={<PujaList />} />
          <Route path="/prayer-books" element={<PrayerBooks />} />
          <Route path="/community-support" element={<CommunitySupport />} />
          <Route path="/support" element={<Support />} />
          <Route path="/support-young-monks" element={<SupportYoungMonks />} />
          <Route path="/offering" element={<Offering />} />
          <Route path="/hostel-project" element={<HostelProject />} />
          <Route path="/expenditures" element={<Expenditures />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/lama-sonam-tashi" element={<LamaSonamTashi />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
