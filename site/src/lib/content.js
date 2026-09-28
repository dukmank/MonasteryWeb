import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db, firebaseEnabled } from "./firebase.js";

export { firebaseEnabled };

// --- Admin CRUD -------------------------------------------------------------

export async function listAll(collKey) {
  if (!firebaseEnabled) return [];
  const q = query(collection(db, collKey), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function getOne(collKey, id) {
  if (!firebaseEnabled) return null;
  const snap = await getDoc(doc(db, collKey, id));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function createItem(collKey, data) {
  const ref = await addDoc(collection(db, collKey), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

export async function updateItem(collKey, id, data) {
  await updateDoc(doc(db, collKey, id), { ...data, updatedAt: serverTimestamp() });
}

export async function removeItem(collKey, id) {
  await deleteDoc(doc(db, collKey, id));
}

// --- Public read (published only, newest first) -----------------------------
// Returns null when Firebase is not configured OR has no documents yet, so the
// public page can fall back to its built-in static content.

export async function listPublished(collKey) {
  if (!firebaseEnabled) return null;
  try {
    const q = query(collection(db, collKey), orderBy("createdAt", "desc"));
    const snap = await getDocs(q);
    const items = snap.docs
      .map((d) => ({ id: d.id, ...d.data() }))
      .filter((x) => x.published !== false);
    return items.length ? items : null;
  } catch (e) {
    console.warn(`[content] không đọc được "${collKey}":`, e?.message);
    return null;
  }
}
