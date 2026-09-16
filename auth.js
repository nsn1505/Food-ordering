const authUsers = [
  {
    id: "cus-1001",
    name: "Minh Anh",
    email: "customer@cravecraft.vn",
    phone: "0901234567",
    role: "CUSTOMER",
    passwordHash: hashCredential("customer123"),
  },
  {
    id: "adm-9001",
    name: "Quản trị viên",
    email: "admin@cravecraft.vn",
    phone: "0912345678",
    role: "ADMIN",
    passwordHash: hashCredential("admin123"),
  },
  {
    id: "sup-7001",
    name: "Nhân viên hỗ trợ",
    email: "support@cravecraft.vn",
    phone: "0987654321",
    role: "SUPPORT",
    passwordHash: hashCredential("support123"),
  },
];

const storedUsersKey = "cc_registered_users";
const sessionKey = "cc_current_user";

function getRegisteredUsers() {
  const stored = localStorage.getItem(storedUsersKey);
  return stored ? JSON.parse(stored) : [];
}

function hashCredential(password) {
  return `demo:${btoa(unescape(encodeURIComponent(password))).split("").reverse().join("")}`;
}

function getAllUsers() {
  return [...authUsers, ...getRegisteredUsers()];
}

function setSession(user) {
  const safeUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.role,
  };
  localStorage.setItem(sessionKey, JSON.stringify(safeUser));
}

function redirectForRole(user, fallback = "index.html") {
  if (user.role === "ADMIN") return "admin.html";
  if (user.role === "SUPPORT") return "support.html";
  return fallback;
}

function showAuthMessage(message, type = "error") {
  const target = document.querySelector("[data-auth-message]");
  if (!target) return;
  target.textContent = message;
  target.className = `auth-message ${type}`;
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateVietnamPhone(phone) {
  return /^(0|\+84)(3|5|7|8|9)\d{8}$/.test(phone.replace(/\s/g, ""));
}

function bindLogin() {
  const form = document.querySelector("[data-login-form]");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const email = String(formData.get("email")).trim().toLowerCase();
    const password = String(formData.get("password"));
    const next = new URLSearchParams(window.location.search).get("next") || "index.html";
    const passwordHash = hashCredential(password);
    const user = getAllUsers().find((item) => item.email.toLowerCase() === email && item.passwordHash === passwordHash);

    if (!validateEmail(email)) {
      showAuthMessage("Email chưa đúng định dạng.");
      return;
    }
    if (!user) {
      showAuthMessage("Email hoặc mật khẩu không đúng.");
      return;
    }

    setSession(user);
    window.location.href = redirectForRole(user, next);
  });

  document.querySelector("[data-toggle-password]")?.addEventListener("click", () => {
    const input = document.querySelector("#password");
    input.type = input.type === "password" ? "text" : "password";
  });
}

function bindSignup() {
  const form = document.querySelector("[data-signup-form]");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = String(formData.get("name")).trim();
    const email = String(formData.get("email")).trim().toLowerCase();
    const phone = String(formData.get("phone")).trim();
    const password = String(formData.get("password"));
    const confirmPassword = String(formData.get("confirmPassword"));
    const terms = formData.get("terms");

    if (name.length < 2) {
      showAuthMessage("Vui lòng nhập họ và tên.");
      return;
    }
    if (!validateEmail(email)) {
      showAuthMessage("Email chưa đúng định dạng.");
      return;
    }
    if (!validateVietnamPhone(phone)) {
      showAuthMessage("Số điện thoại Việt Nam chưa hợp lệ.");
      return;
    }
    if (password.length < 8 || !/[A-Za-z]/.test(password) || !/\d/.test(password)) {
      showAuthMessage("Mật khẩu cần ít nhất 8 ký tự, gồm chữ và số.");
      return;
    }
    if (password !== confirmPassword) {
      showAuthMessage("Mật khẩu xác nhận chưa khớp.");
      return;
    }
    if (!terms) {
      showAuthMessage("Bạn cần đồng ý điều khoản và chính sách bảo mật.");
      return;
    }
    if (getAllUsers().some((user) => user.email.toLowerCase() === email)) {
      showAuthMessage("Email này đã có tài khoản.");
      return;
    }

    const user = {
      id: `cus-${Date.now()}`,
      name,
      email,
      phone,
      role: "CUSTOMER",
      passwordHash: hashCredential(password),
    };
    const users = getRegisteredUsers();
    users.push(user);
    localStorage.setItem(storedUsersKey, JSON.stringify(users));
    setSession(user);
    window.location.href = "index.html";
  });
}

function bindForgotPassword() {
  const form = document.querySelector("[data-forgot-form]");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = String(new FormData(form).get("email")).trim().toLowerCase();
    if (!validateEmail(email)) {
      showAuthMessage("Email chưa đúng định dạng.");
      return;
    }
    showAuthMessage("Nếu email tồn tại, hướng dẫn đặt lại mật khẩu sẽ được gửi. Bản tĩnh này chưa gửi email thật.", "success");
  });
}

bindLogin();
bindSignup();
bindForgotPassword();
