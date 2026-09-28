import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../lib/auth.jsx";

export default function ProtectedRoute() {
  const { user, loading, firebaseEnabled } = useAuth();

  if (!firebaseEnabled) {
    return (
      <div className="min-h-screen grid place-items-center bg-cream px-6">
        <div className="max-w-md text-center bg-white rounded-lg shadow-sm border border-gold/15 p-10">
          <span className="material-symbols-outlined text-gold text-5xl">settings</span>
          <h1 className="font-serif text-2xl text-maroon mt-4 mb-2">Firebase Not Configured</h1>
          <p className="text-ink-mid text-sm leading-relaxed">
            Add your Firebase and Cloudinary settings to the <code className="bg-cream px-1 rounded">.env</code> file, then
            restart the server. See the instructions in <code className="bg-cream px-1 rounded">SETUP-ADMIN.md</code>.
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center bg-cream">
        <span className="material-symbols-outlined text-maroon text-4xl animate-spin">progress_activity</span>
      </div>
    );
  }

  if (!user) return <Navigate to="/admin/login" replace />;

  return <Outlet />;
}
