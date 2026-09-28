import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../lib/auth.jsx";

export default function Login() {
  const { login, user, firebaseEnabled } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (user) navigate("/admin", { replace: true });
  }, [user, navigate]);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      await login(email, password);
      navigate("/admin", { replace: true });
    } catch (err) {
      setError("Incorrect email or password.");
      console.warn(err?.code);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen grid place-items-center bg-maroon-dark px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-gold rounded-full grid place-items-center mx-auto mb-4">
            <span className="material-symbols-outlined text-maroon-dark">lock</span>
          </div>
          <h1 className="font-serif text-2xl text-white">Content Management</h1>
          <p className="text-white/50 text-xs tracking-widest uppercase mt-1">Dundul Raptenling Monastery</p>
        </div>

        <form onSubmit={submit} className="bg-white rounded-lg shadow-xl p-8 space-y-5">
          {!firebaseEnabled && (
            <p className="text-xs text-error bg-error-container/40 rounded p-3">
              Firebase is not configured — see SETUP-ADMIN.md
            </p>
          )}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-widest text-ink-light mb-2">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b-2 border-cream-dark focus:border-gold outline-none py-2 text-ink bg-transparent"
              placeholder="admin@monastery.org"
            />
          </div>
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-widest text-ink-light mb-2">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b-2 border-cream-dark focus:border-gold outline-none py-2 text-ink bg-transparent"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-error text-sm">{error}</p>}
          <button
            type="submit"
            disabled={busy}
            className="w-full bg-maroon text-white py-3 rounded-sm text-[12px] font-semibold tracking-widest uppercase hover:bg-maroon-mid transition-colors disabled:opacity-50"
          >
            {busy ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
