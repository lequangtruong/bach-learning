// js/storage.js - Local-First Storage Adapter (IndexedDB Schema v2 + LocalStorage Fallback)
import { storageKey, DB_NAME, DB_VERSION, DB_STORE, state } from "./core.js";
import { validateDatabasePayload } from "../data/data-core.js";

export const storage = {
  async openDB() {
    if (typeof window === "undefined" || !window.indexedDB) {
      return null;
    }
    return new Promise((resolve) => {
      try {
        const req = window.indexedDB.open(DB_NAME, DB_VERSION);
        req.onupgradeneeded = (e) => {
          const db = e.target.result;
          if (!db.objectStoreNames.contains(DB_STORE)) {
            db.createObjectStore(DB_STORE);
          }
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => resolve(null);
      } catch {
        resolve(null);
      }
    });
  },

  async loadDatabase() {
    try {
      const db = await this.openDB();
      if (db) {
        return new Promise((resolve) => {
          try {
            const tx = db.transaction(DB_STORE, "readonly");
            const store = tx.objectStore(DB_STORE);
            const req = store.get(storageKey);
            req.onsuccess = () => {
              if (req.result && validateDatabasePayload(req.result)) {
                state.storageDriver = "indexeddb";
                resolve(req.result);
              } else {
                resolve(this.loadFallback());
              }
            };
            req.onerror = () => resolve(this.loadFallback());
          } catch {
            resolve(this.loadFallback());
          }
        });
      }
    } catch {
      // IndexedDB mở thất bại
    }
    return this.loadFallback();
  },

  loadFallback() {
    try {
      if (typeof localStorage !== "undefined") {
        const raw = localStorage.getItem(storageKey);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (validateDatabasePayload(parsed)) {
            state.storageDriver = "localstorage";
            return parsed;
          }
        }
      }
    } catch {
      // LocalStorage không khả dụng
    }
    state.storageDriver = "memory";
    return null;
  },

  async saveDatabase(dbPayload) {
    if (!validateDatabasePayload(dbPayload)) {
      throw new Error("INVALID_PAYLOAD_STRUCTURE");
    }

    let savedInIdb = false;
    try {
      const db = await this.openDB();
      if (db) {
        await new Promise((resolve, reject) => {
          const tx = db.transaction(DB_STORE, "readwrite");
          const store = tx.objectStore(DB_STORE);
          const req = store.put(dbPayload, storageKey);
          req.onsuccess = () => resolve();
          req.onerror = () => reject(req.error);
        });
        savedInIdb = true;
        state.storageDriver = "indexeddb";
      }
    } catch (err) {
      console.warn("IndexedDB save failed, falling back to localStorage:", err);
    }

    try {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(storageKey, JSON.stringify(dbPayload));
        if (!savedInIdb) state.storageDriver = "localstorage";
      }
    } catch (e) {
      console.warn("localStorage save failed:", e);
    }
  }
};
