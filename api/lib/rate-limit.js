// In-memory rate limiting by IP address

const ipRequests = new Map();

/**
 * Kiểm tra giới hạn tần suất request theo IP
 * @param {string} ip - Địa chỉ IP client
 * @param {number} limit - Số request tối đa trong cửa sổ thời gian (mặc định: 30)
 * @param {number} windowMs - Kích thước cửa sổ tính bằng mili-giây (mặc định: 60.000ms = 1 phút)
 * @returns {boolean} true nếu hợp lệ, false nếu vượt quá giới hạn
 */
export function checkRateLimit(ip = "unknown", limit = 30, windowMs = 60000) {
  const key = String(ip || "unknown").trim();
  const now = Date.now();
  const history = ipRequests.get(key) || [];

  // Lọc các timestamp nằm trong cửa sổ windowMs
  const validTimestamps = history.filter(ts => now - ts < windowMs);

  if (validTimestamps.length >= limit) {
    return false;
  }

  validTimestamps.push(now);
  ipRequests.set(key, validTimestamps);

  // Dọn dẹp cache nếu Map quá lớn
  if (ipRequests.size > 1000) {
    for (const [k, timestamps] of ipRequests.entries()) {
      if (timestamps.every(ts => now - ts >= windowMs)) {
        ipRequests.delete(k);
      }
    }
  }

  return true;
}

/**
 * Xóa dữ liệu rate limit (tiện ích cho unit test)
 */
export function resetRateLimit() {
  ipRequests.clear();
}
