import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const cfg = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// The app works WITHOUT Firebase configured: public pages fall back to their
// built-in static content, and /admin shows a friendly "not configured" notice.
export const firebaseEnabled = Boolean(cfg.apiKey && cfg.projectId);

let app = null;
let db = null;
let auth = null;

if (firebaseEnabled) {
  app = initializeApp(cfg);
  db = getFirestore(app);
  auth = getAuth(app);
}

export { app, db, auth };
