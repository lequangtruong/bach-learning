// js/drive-sync.js - Google Drive Online Sync Adapter (GIS Token Client Model, drive.file scope)
import { DRIVE_DB_FILENAME, validateDatabasePayload, mergeDatabases } from "../data/data-core.js";
import { getGoogleClientId, state } from "./core.js";
import { storage } from "./storage.js";

let _render = () => {};

export function setDriveRenderHandler(fn) {
  if (typeof fn === "function") _render = fn;
}

export const driveSync = {
  tokenClient: null,
  syncDebounceTimer: null,

  setRenderHandler(fn) {
    if (typeof fn === "function") _render = fn;
  },

  initGIS() {
    if (typeof window === "undefined" || !window.google || !window.google.accounts) {
      return false;
    }
    const clientId = getGoogleClientId();
    if (!clientId || clientId.startsWith("PLACEHOLDER")) {
      return false;
    }

    // 1. Khởi tạo GIS Token Client cho Google Drive (drive.file scope)
    if (window.google.accounts.oauth2) {
      try {
        this.tokenClient = window.google.accounts.oauth2.initTokenClient({
          client_id: clientId,
          scope: "https://www.googleapis.com/auth/drive.file",
          callback: async (tokenResponse) => {
            if (tokenResponse.error) {
              state.drive.syncStatus = `Lỗi cấp quyền Drive: ${tokenResponse.error}`;
              _render();
              return;
            }
            state.drive.token = tokenResponse.access_token;
            state.drive.hasSessionExpired = false;
            state.drive.syncStatus = "Đã kết nối Drive, đang đồng bộ…";
            _render();
            await this.syncWithDrive();
          }
        });
      } catch (err) {
        console.warn("Không khởi tạo được Google Drive Token Client:", err);
      }
    }

    // 2. Khởi tạo Google One-Tap / ID Client cho Sign-In ID Token (xác thực /api/tutor)
    if (window.google.accounts.id) {
      try {
        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: (response) => {
            if (response && response.credential) {
              state.drive.idToken = response.credential;
              try {
                // Giải mã payload ID Token để lấy email hiển thị
                const parts = response.credential.split(".");
                if (parts[1]) {
                  const payload = JSON.parse(atob(parts[1].replace(/-/g, "+").replace(/_/g, "/")));
                  state.drive.userEmail = payload.email || null;
                }
              } catch {}
              _render();
            }
          }
        });
      } catch (idErr) {
        console.warn("Không khởi tạo được Google ID Client:", idErr);
      }
    }

    return true;
  },

  requestLogin() {
    const clientId = getGoogleClientId();
    if (!clientId || clientId.startsWith("PLACEHOLDER")) {
      state.drive.syncStatus = "Google Drive chưa được cấu hình cho bản triển khai này";
      _render();
      alert("Ứng dụng chưa được cấu hình Google OAuth. Khi deployment đã có Client ID, nút này sẽ mở cửa sổ đăng nhập Google; người dùng không cần nhập mã.");
      return;
    }

    if (!this.tokenClient && !this.initGIS()) {
      alert("Chưa nạp được Google Identity Services SDK. Vui lòng kiểm tra kết nối Internet.");
      return;
    }

    // Yêu cầu Sign-In ID Token nếu chưa có
    if (window.google?.accounts?.id && !state.drive.idToken) {
      try {
        window.google.accounts.id.prompt();
      } catch {}
    }

    this.tokenClient.requestAccessToken({ prompt: "consent" });
  },

  requestTutorLogin() {
    const clientId = getGoogleClientId();
    if (!clientId || clientId.startsWith("PLACEHOLDER")) {
      alert("Cần cấu hình Google OAuth Web Client ID trước khi dùng Gemini trực tuyến.");
      return;
    }
    if (!this.tokenClient && !this.initGIS()) {
      alert("Chưa nạp được Google Identity Services SDK. Vui lòng kiểm tra kết nối Internet.");
      return;
    }
    if (!window.google?.accounts?.id) {
      alert("Google Sign-In chưa sẵn sàng. Vui lòng tải lại trang rồi thử lại.");
      return;
    }
    renderGoogleTutorButton();
    window.google.accounts.id.prompt();
  },

  logout() {
    state.drive.token = null;
    state.drive.idToken = null;
    state.drive.userEmail = null;
    state.drive.hasSessionExpired = false;
    state.drive.syncStatus = "Đã đăng xuất Google Drive";
    _render();
  },

  // Tìm file visible trên Drive có tên DRIVE_DB_FILENAME
  // Ưu tiên chọn fileId đã lưu trước đó nếu có nhiều file cùng tên
  async findDatabaseFile(token, existingFileId = null) {
    if (existingFileId) {
      try {
        const checkResp = await fetch(`https://www.googleapis.com/drive/v3/files/${existingFileId}?fields=id,name,trashed`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (checkResp.status === 401 || checkResp.status === 403) {
          const err = new Error("DRIVE_AUTH_EXPIRED");
          err.status = checkResp.status;
          throw err;
        }
        if (checkResp.ok) {
          const fileData = await checkResp.json();
          if (!fileData.trashed && fileData.name === DRIVE_DB_FILENAME) {
            return fileData;
          }
        } else if (checkResp.status !== 404) {
          throw new Error(`Drive file check HTTP ${checkResp.status}`);
        }
      } catch (checkErr) {
        if (checkErr?.message === "DRIVE_AUTH_EXPIRED") throw checkErr;
        throw new Error(`Không thể kiểm tra file Drive đã lưu: ${checkErr.message}`);
      }
    }

    const query = encodeURIComponent(`name = '${DRIVE_DB_FILENAME}' and trashed = false`);
    const resp = await fetch(`https://www.googleapis.com/drive/v3/files?q=${query}&fields=files(id,name,modifiedTime)&spaces=drive`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (resp.status === 401 || resp.status === 403) {
      const err = new Error("DRIVE_AUTH_EXPIRED");
      err.status = resp.status;
      throw err;
    }
    if (!resp.ok) throw new Error(`Drive list HTTP ${resp.status}`);
    const data = await resp.json();
    return data.files && data.files.length > 0 ? data.files[0] : null;
  },

  // Tải nội dung file từ Drive
  async downloadDatabaseFile(token, fileId) {
    const resp = await fetch(`https://www.googleapis.com/drive/v3/files/${encodeURIComponent(fileId)}?alt=media`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (resp.status === 401 || resp.status === 403) {
      const err = new Error("DRIVE_AUTH_EXPIRED");
      err.status = resp.status;
      throw err;
    }
    if (!resp.ok) throw new Error(`Drive download HTTP ${resp.status}`);
    try {
      return await resp.json();
    } catch {
      const err = new Error("DRIVE_INVALID_DATA");
      err.code = "DRIVE_INVALID_DATA";
      throw err;
    }
  },

  // Lưu file lên Drive (Tạo mới multipart hoặc Cập nhật file hiện có)
  async uploadDatabaseFile(token, dbData, fileId = null) {
    const jsonStr = JSON.stringify(dbData, null, 2);
    if (fileId) {
      const resp = await fetch(`https://www.googleapis.com/upload/drive/v3/files/${encodeURIComponent(fileId)}?uploadType=media`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json; charset=UTF-8"
        },
        body: jsonStr
      });
      if (resp.status === 401 || resp.status === 403) {
        const err = new Error("DRIVE_AUTH_EXPIRED");
        err.status = resp.status;
        throw err;
      }
      if (!resp.ok) throw new Error(`Drive update HTTP ${resp.status}`);
      return await resp.json();
    } else {
      const boundary = "-------314159265358979323846";
      const delimiter = `\r\n--${boundary}\r\n`;
      const closeDelimiter = `\r\n--${boundary}--`;

      const metadata = {
        name: DRIVE_DB_FILENAME,
        mimeType: "application/json",
        description: "Dữ liệu học tập và tiến độ của Bách trên Bach Learning Lab"
      };

      const multipartBody =
        delimiter +
        "Content-Type: application/json; charset=UTF-8\r\n\r\n" +
        JSON.stringify(metadata) +
        delimiter +
        "Content-Type: application/json; charset=UTF-8\r\n\r\n" +
        jsonStr +
        closeDelimiter;

      const resp = await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": `multipart/related; boundary=${boundary}`
        },
        body: multipartBody
      });
      if (resp.status === 401 || resp.status === 403) {
        const err = new Error("DRIVE_AUTH_EXPIRED");
        err.status = resp.status;
        throw err;
      }
      if (!resp.ok) throw new Error(`Drive create HTTP ${resp.status}`);
      return await resp.json();
    }
  },

  // Serialization & Debounced Sync với Revision tracking
  scheduleSync(delayMs = 1200, isRetry = false) {
    if (!isRetry) state.drive.retryAttempt = 0;
    state.drive.pendingRevision += 1;
    if (this.syncDebounceTimer) {
      clearTimeout(this.syncDebounceTimer);
    }
    this.syncDebounceTimer = setTimeout(() => {
      this.syncWithDrive().catch(() => {});
    }, delayMs);
  },

  async syncWithDrive() {
    if (!state.drive.token) {
      this.requestLogin();
      return;
    }

    if (state.drive.isSyncing) {
      // Đã có luồng sync đang chạy; đánh dấu revision pending để chạy tiếp vòng sau
      state.drive.pendingRevision += 1;
      return;
    }

    state.drive.isSyncing = true;
    state.drive.syncStatus = "Đang đồng bộ Google Drive…";
    const currentSyncRev = state.drive.pendingRevision;
    _render();

    try {
      // Lấy fileId đã lưu từ state hoặc IndexedDB syncMeta
      const savedFileId = state.drive.fileId || state.db.syncMeta?.fileId || null;
      const fileInfo = await this.findDatabaseFile(state.drive.token, savedFileId);
      let mergedDb = state.db;

      if (fileInfo && fileInfo.id) {
        state.drive.fileId = fileInfo.id;
        try {
          const remoteData = await this.downloadDatabaseFile(state.drive.token, fileInfo.id);
          if (!validateDatabasePayload(remoteData)) {
            const invalidErr = new Error("DRIVE_INVALID_DATA");
            invalidErr.code = "DRIVE_INVALID_DATA";
            throw invalidErr;
          }
          mergedDb = mergeDatabases(state.db, remoteData);
        } catch (downErr) {
          if (downErr.message === "DRIVE_AUTH_EXPIRED") throw downErr;
          const readErr = new Error(`Không thể đọc dữ liệu Drive an toàn: ${downErr.message}`);
          readErr.code = downErr.code || "DRIVE_READ_FAILED";
          throw readErr;
        }
      } else {
        // Sau khi findDatabaseFile() không tìm thấy file hợp lệ, không được PATCH bằng fileId cũ.
        // Xóa state.drive.fileId; lần sync đó được phép tạo đúng một file mới tên Bach Learning DB.json qua luồng create.
        state.drive.fileId = null;
        if (mergedDb.syncMeta?.fileId) {
          delete mergedDb.syncMeta.fileId;
        }
      }

      // Đảm bảo lưu fileId vào syncMeta trong IndexedDB
      if (state.drive.fileId) {
        mergedDb.syncMeta = {
          ...(mergedDb.syncMeta || {}),
          fileId: state.drive.fileId
        };
      }

      // Ngay trước uploadDatabaseFile(), mergedDb phải qua validateDatabasePayload().
      // Dữ liệu không hợp lệ phải dừng đồng bộ, không ghi local/remote.
      if (!validateDatabasePayload(mergedDb)) {
        const invalidPayloadErr = new Error("DRIVE_INVALID_PAYLOAD");
        invalidPayloadErr.code = "DRIVE_INVALID_PAYLOAD";
        throw invalidPayloadErr;
      }

      // Lưu mergedDb vào local (IndexedDB)
      state.db = mergedDb;
      await storage.saveDatabase(mergedDb);

      // Upload bản merged mới nhất lên Drive
      const uploadRes = await this.uploadDatabaseFile(state.drive.token, mergedDb, state.drive.fileId);
      if (uploadRes && uploadRes.id) {
        state.drive.fileId = uploadRes.id;
        state.db.syncMeta = {
          ...(state.db.syncMeta || {}),
          fileId: uploadRes.id
        };
        await storage.saveDatabase(state.db);
      }

      const syncTime = new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
      state.drive.lastSyncedAt = syncTime;
      state.drive.syncStatus = `Đồng bộ thành công lúc ${syncTime}`;
      state.drive.syncRevision = currentSyncRev;
      state.drive.retryAttempt = 0;
    } catch (err) {
      if (err.message === "DRIVE_AUTH_EXPIRED" || err.status === 401 || err.status === 403) {
        state.drive.token = null;
        state.drive.hasSessionExpired = true;
        state.drive.syncStatus = "Phiên Drive hết hạn — kết nối lại";
      } else {
        console.error("Lỗi đồng bộ Google Drive:", err);
        state.drive.syncStatus = `Đồng bộ thất bại: ${err.message}`;
      }
    } finally {
      state.drive.isSyncing = false;
      _render();

      // Nếu có edit mới xảy ra trong lúc upload (pendingRevision > syncRevision), chạy vòng sync tiếp theo
      if (state.drive.token && state.drive.pendingRevision > state.drive.syncRevision) {
        const failed = state.drive.syncStatus.startsWith("Đồng bộ thất bại");
        if (!failed) {
          this.scheduleSync(500);
        } else if (state.drive.retryAttempt < 5) {
          const retryDelay = Math.min(30000, 1000 * (2 ** state.drive.retryAttempt));
          state.drive.retryAttempt += 1;
          this.scheduleSync(retryDelay, true);
        } else {
          state.drive.syncStatus += " · Đã tạm dừng thử lại, hãy bấm đồng bộ ngay.";
        }
      }
    }
  }
};

// One Tap có thể bị trình duyệt chặn; luôn có nút Google Sign-In chính thức làm đường lui.
export function renderGoogleTutorButton() {
  const host = document.querySelector("#googleTutorButton");
  if (!host || !window.google?.accounts?.id?.renderButton) return;
  try {
    host.hidden = false;
    host.replaceChildren();
    window.google.accounts.id.renderButton(host, {
      type: "standard",
      theme: "outline",
      size: "large",
      text: "signin_with",
      shape: "rectangular",
      logo_alignment: "left"
    });
  } catch (err) {
    console.warn("Không hiển thị được nút Google Sign-In dự phòng:", err);
  }
}
