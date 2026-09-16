const sessionKey = "cc_current_user";
const adminOrders = [
  ["VN10245", "Minh Anh", "Phở Gánh Cô Mai", "112.000 ₫", "COD", "PREPARING", "16/09/2026 18:02"],
  ["VN10246", "Hoàng Nam", "Cơm Tấm Ba Tài", "89.000 ₫", "MoMo", "DELIVERING", "16/09/2026 18:12"],
  ["VN10247", "Linh Chi", "Bếp Huế Thương", "65.000 ₫", "VNPay", "CONFIRMED", "16/09/2026 18:19"],
  ["VN10248", "Gia Huy", "Lẩu Nhà Mình", "238.000 ₫", "COD", "PENDING", "16/09/2026 18:24"],
];

const restaurants = [
  ["Phở Gánh Cô Mai", "Hà Nội", "Phở", "4.9", "ACTIVE"],
  ["Bếp Huế Thương", "Huế", "Bún", "4.8", "ACTIVE"],
  ["Lẩu Nhà Mình", "Sài Gòn", "Lẩu", "4.7", "ACTIVE"],
  ["Bánh Xèo Cô Út", "Cần Thơ", "Bánh xèo", "4.6", "INACTIVE"],
];

const conversations = [
  ["Minh Anh", "#VN10245", "Giao hàng chậm", "2 phút trước", "HIGH", "WAITING"],
  ["Hoàng Nam", "#VN10246", "Thanh toán", "8 phút trước", "NORMAL", "IN_PROGRESS"],
  ["Linh Chi", "#VN10247", "Thiếu món", "12 phút trước", "URGENT", "OPEN"],
];

function getCurrentUser() {
  const stored = localStorage.getItem(sessionKey);
  return stored ? JSON.parse(stored) : null;
}

function requireRole(allowedRoles) {
  const user = getCurrentUser();
  if (!user) {
    window.location.href = "login.html?next=admin.html";
    return null;
  }
  if (!allowedRoles.includes(user.role)) {
    window.location.href = user.role === "CUSTOMER" ? "index.html" : "support.html";
    return null;
  }
  return user;
}

function logout() {
  localStorage.removeItem(sessionKey);
  window.location.href = "login.html";
}

function renderRows(selector, rows) {
  document.querySelector(selector).innerHTML = rows
    .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
    .join("");
}

function renderAdmin() {
  if (!document.querySelector("[data-admin-name]")) return;
  const user = requireRole(["ADMIN"]);
  if (!user) return;
  document.querySelector("[data-admin-name]").textContent = user.name;
  renderRows("[data-order-rows]", adminOrders);
  renderRows("[data-restaurant-rows]", restaurants);
  renderRows("[data-support-rows]", conversations);
}

function renderSupportDashboard() {
  if (!document.querySelector("[data-support-name]")) return;
  const user = requireRole(["ADMIN", "SUPPORT"]);
  if (!user) return;
  document.querySelector("[data-support-name]").textContent = user.name;
  const list = document.querySelector("[data-conversation-list]");
  if (list) {
    list.innerHTML = conversations
      .map(
        (item, index) => `
          <button class="conversation-card ${index === 0 ? "is-active" : ""}" type="button">
            <strong>${item[0]}</strong>
            <span>${item[2]} - ${item[3]}</span>
            <small>${item[4]} / ${item[5]}</small>
          </button>
        `,
      )
      .join("");
  }
}

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-logout]")) logout();
  if (event.target.closest("[data-confirm-action]")) {
    const ok = window.confirm("Hành động quan trọng sẽ được ghi vào Audit Logs. Bạn muốn tiếp tục?");
    if (ok) alert("Đã ghi nhận thay đổi vào nhật ký demo.");
  }
});

renderAdmin();
renderSupportDashboard();
