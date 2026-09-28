import { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate, Link, useLocation } from "react-router-dom";
import { useAuth } from "../lib/auth.jsx";
import { COLLECTION_LIST } from "./collections.js";

export default function AdminLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // close the mobile sidebar whenever the route changes
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  const doLogout = async () => {
    await logout();
    navigate("/admin/login", { replace: true });
  };

  const linkCls = ({ isActive }) =>
    "flex items-center gap-3 px-4 py-2.5 rounded-md text-sm transition-colors " +
    (isActive ? "bg-maroon text-white" : "text-cream/70 hover:bg-white/5 hover:text-white");

  return (
    <div className="min-h-screen flex bg-cream">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-ink/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar (slides in on mobile, fixed on desktop) */}
      <aside
        className={
          "w-64 bg-maroon-dark text-white flex flex-col fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 lg:translate-x-0 " +
          (sidebarOpen ? "translate-x-0" : "-translate-x-full")
        }
      >
        <div className="px-6 h-16 flex items-center gap-3 border-b border-white/10">
          <span className="material-symbols-outlined text-gold">temple_buddhist</span>
          <div className="leading-tight">
            <div className="font-serif text-sm">Monastery CMS</div>
            <div className="text-[9px] uppercase tracking-widest text-white/40">Content Management</div>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          <NavLink to="/admin" end className={linkCls}>
            <span className="material-symbols-outlined text-[20px]">dashboard</span>
            Overview
          </NavLink>
          <div className="px-4 pt-4 pb-1 text-[10px] uppercase tracking-widest text-white/30">Media &amp; News</div>
          {COLLECTION_LIST.map((c) => (
            <NavLink key={c.key} to={`/admin/${c.key}`} className={linkCls}>
              <span className="material-symbols-outlined text-[20px]">{c.icon}</span>
              {c.labelVi}
            </NavLink>
          ))}
        </nav>

        <div className="p-3 border-t border-white/10">
          <Link to="/" target="_blank" className="flex items-center gap-3 px-4 py-2 rounded-md text-sm text-cream/70 hover:bg-white/5 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[20px]">open_in_new</span>
            View website
          </Link>
          <button onClick={doLogout} className="w-full flex items-center gap-3 px-4 py-2 rounded-md text-sm text-cream/70 hover:bg-white/5 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[20px]">logout</span>
            Sign out
          </button>
          <div className="px-4 pt-2 text-[10px] text-white/30 truncate">{user?.email}</div>
        </div>
      </aside>

      {/* Content */}
      <div className="flex-1 lg:ml-64 min-w-0">
        {/* Mobile top bar with hamburger */}
        <div className="lg:hidden sticky top-0 z-30 bg-maroon-dark text-white h-14 flex items-center gap-3 px-4 shadow-sm">
          <button onClick={() => setSidebarOpen(true)} aria-label="Open menu" className="p-1 -ml-1">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <span className="material-symbols-outlined text-gold text-[20px]">temple_buddhist</span>
          <span className="font-serif text-sm">Monastery CMS</span>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
