/**
 * LEGACY / REFERENCE ONLY
 * Production bản đầu không dùng Apps Script; frontend gọi Google Drive API
 * trực tiếp bằng GIS OAuth `drive.file`.
 *
 * Google Apps Script Web App backend cho Bach Learning Lab.
 * Lưu trữ một file JSON tiến độ trong một thư mục Drive riêng của người dùng.
 * Sử dụng LockService để ngăn chặn race condition khi ghi đè dữ liệu.
 * TUYỆT ĐỐI không chia sẻ file/thư mục public, không lưu credentials/token.
 */

var APP_FOLDER_NAME = "Bach Learning Lab Private Data";
var PROGRESS_FILE_NAME = "bach-learning-progress.json";

/**
 * Phục vụ HTML giao diện người dùng
 */
function doGet() {
  var template = HtmlService.createTemplateFromFile("Index");
  return template.evaluate()
    .setTitle("Bách Learning Lab")
    .addMetaTag("viewport", "width=device-width, initial-scale=1, viewport-fit=cover")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Include file HTML con vào file chính (chuẩn Google Apps Script templating)
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * Lấy hoặc tạo thư mục Drive riêng tư của ứng dụng
 */
function getOrCreatePrivateFolder_() {
  var folders = DriveApp.getFoldersByName(APP_FOLDER_NAME);
  if (folders.hasNext()) {
    return folders.next();
  }
  return DriveApp.createFolder(APP_FOLDER_NAME);
}

/**
 * Lấy hoặc tạo file JSON lưu tiến độ trong thư mục riêng tư
 */
function getOrCreateProgressFile_() {
  var folder = getOrCreatePrivateFolder_();
  var files = folder.getFilesByName(PROGRESS_FILE_NAME);
  if (files.hasNext()) {
    return files.next();
  }
  return folder.createFile(PROGRESS_FILE_NAME, "{}", MimeType.PLAIN_TEXT);
}

/**
 * Đọc tiến độ từ file JSON trên Google Drive
 * Được gọi từ browser thông qua google.script.run.loadUserProgress()
 */
function loadUserProgress() {
  try {
    var file = getOrCreateProgressFile_();
    var content = file.getBlob().getDataAsString();
    if (!content || !content.trim()) {
      return {};
    }
    return JSON.parse(content);
  } catch (err) {
    Logger.log("Lỗi loadUserProgress: " + err.toString());
    return {};
  }
}

/**
 * Lưu tiến độ vào file JSON trên Google Drive với cơ chế Lock chống ghi đè (LockService)
 * Được gọi từ browser thông qua google.script.run.saveUserProgress(data)
 */
function saveUserProgress(progressData) {
  if (!progressData || typeof progressData !== "object") {
    return { success: false, error: "Dữ liệu không hợp lệ" };
  }

  // Dùng getUserLock để đảm bảo an toàn thao tác trên tài nguyên của chính tài khoản người dùng
  var lock = LockService.getUserLock();
  var hasLock = lock.tryLock(10000); // Đợi tối đa 10 giây

  if (!hasLock) {
    return { success: false, error: "Hệ thống đang bận ghi dữ liệu, vui lòng thử lại sau vài giây." };
  }

  try {
    var file = getOrCreateProgressFile_();
    var jsonString = JSON.stringify(progressData, null, 2);
    file.setContent(jsonString);
    return { success: true, timestamp: new Date().toISOString() };
  } catch (err) {
    Logger.log("Lỗi saveUserProgress: " + err.toString());
    return { success: false, error: err.toString() };
  } finally {
    lock.releaseLock();
  }
}
