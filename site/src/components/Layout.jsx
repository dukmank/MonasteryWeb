import { Outlet } from "react-router-dom";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import Seo from "./Seo.jsx";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Seo />
      <Nav />
      {/* pt-28 desktop (two-line header) / pt-16 mobile (single line) */}
      <main className="flex-1 pt-16 lg:pt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
