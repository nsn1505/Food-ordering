const menuItems = [
  {
    id: "pho-bo-tai",
    name: "Phở bò tái",
    restaurant: "Phở Gánh Cô Mai",
    category: "Phở",
    region: "Miền Bắc",
    city: "Hà Nội",
    moods: ["am", "nong", "nhanh"],
    taste: ["thanh", "dam-da"],
    budget: "normal",
    time: 22,
    price: 55000,
    rating: 4.9,
    tag: "Đang được yêu thích",
    image:
      "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=1100&q=82",
    description: "Nước dùng trong, bò tái mềm, hành thơm và bánh phở dai vừa.",
  },
  {
    id: "bun-bo-hue",
    name: "Bún bò Huế",
    restaurant: "Bếp Huế Thương",
    category: "Bún",
    region: "Miền Trung",
    city: "Huế",
    moods: ["cay", "nong", "dem"],
    taste: ["cay", "dam-da"],
    budget: "normal",
    time: 30,
    price: 65000,
    rating: 4.8,
    tag: "Món cay",
    image:
      "https://images.unsplash.com/photo-1631709497146-a239ef373cf1?auto=format&fit=crop&w=1100&q=82",
    description: "Sả, mắm ruốc Huế, thịt bò, chả cua và nước lèo đậm vị.",
  },
  {
    id: "banh-mi-thit-nuong",
    name: "Bánh mì thịt nướng",
    restaurant: "Bánh Mì Lò Than",
    category: "Bánh mì",
    region: "Miền Nam",
    city: "Sài Gòn",
    moods: ["nhanh", "gion", "tiet-kiem"],
    taste: ["gion", "dam-da"],
    budget: "budget",
    time: 14,
    price: 32000,
    rating: 4.7,
    tag: "Ăn ngon dưới 50K",
    image:
      "https://images.unsplash.com/photo-1600454309261-3dc9b7597637?auto=format&fit=crop&w=1100&q=82",
    description: "Ổ bánh giòn, thịt nướng than, đồ chua, pate và sốt bơ cay nhẹ.",
  },
  {
    id: "com-tam-suon-bi-cha",
    name: "Cơm tấm sườn bì chả",
    restaurant: "Cơm Tấm Ba Tài",
    category: "Cơm",
    region: "Miền Nam",
    city: "Sài Gòn",
    moods: ["no", "tiet-kiem", "pho-bien"],
    taste: ["dam-da", "ngot-man"],
    budget: "normal",
    time: 26,
    price: 59000,
    rating: 4.8,
    tag: "Combo tiết kiệm",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1100&q=82",
    description: "Sườn nướng bóng mật, bì thơm, chả trứng và nước mắm pha chuẩn vị.",
  },
  {
    id: "goi-cuon-tom-thit",
    name: "Gỏi cuốn tôm thịt",
    restaurant: "Cuốn Xanh",
    category: "Món chay",
    region: "Miền Nam",
    city: "Sài Gòn",
    moods: ["thanh", "lanh", "nhe"],
    taste: ["thanh", "tuoi"],
    budget: "budget",
    time: 18,
    price: 42000,
    rating: 4.6,
    tag: "Món thanh đạm",
    image:
      "https://images.unsplash.com/photo-1625938144755-652e08e359b7?auto=format&fit=crop&w=1100&q=82",
    description: "Rau tươi, bún mỏng, tôm thịt cuốn chặt tay với tương đậu phộng.",
  },
  {
    id: "mi-quang-ga",
    name: "Mì Quảng gà",
    restaurant: "Quán Quảng Nắng Vàng",
    category: "Mì / Hủ tiếu",
    region: "Miền Trung",
    city: "Đà Nẵng",
    moods: ["dac-san", "no", "moi"],
    taste: ["dam-da", "beo"],
    budget: "normal",
    time: 28,
    price: 62000,
    rating: 4.7,
    tag: "Đặc sản vùng miền",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1100&q=82",
    description: "Sợi mì vàng, gà ta, đậu phộng rang, bánh tráng và rau sống.",
  },
  {
    id: "banh-xeo-mien-tay",
    name: "Bánh xèo miền Tây",
    restaurant: "Bánh Xèo Cô Út",
    category: "Bánh xèo",
    region: "Miền Tây",
    city: "Cần Thơ",
    moods: ["gion", "chia-se", "moi"],
    taste: ["gion", "beo", "tuoi"],
    budget: "normal",
    time: 35,
    price: 78000,
    rating: 4.6,
    tag: "Quán Việt được yêu thích",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=1100&q=82",
    description: "Vỏ giòn rụm, nhân tôm thịt, giá, rau vườn và nước mắm chua ngọt.",
  },
  {
    id: "ga-chien-nuoc-mam",
    name: "Gà chiên nước mắm",
    restaurant: "Gà Giòn 68",
    category: "Gà",
    region: "Miền Nam",
    city: "Sài Gòn",
    moods: ["gion", "dem", "pho-bien"],
    taste: ["gion", "ngot-man"],
    budget: "normal",
    time: 24,
    price: 69000,
    rating: 4.8,
    tag: "Món ăn đêm",
    image:
      "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=1100&q=82",
    description: "Cánh gà áo mắm tỏi, ngoài giòn trong mọng, ăn kèm dưa leo.",
  },
  {
    id: "lau-thai-hai-san",
    name: "Lẩu Thái hải sản",
    restaurant: "Lẩu Nhà Mình",
    category: "Lẩu",
    region: "Miền Nam",
    city: "Sài Gòn",
    moods: ["chia-se", "cay", "dem"],
    taste: ["cay", "chua", "dam-da"],
    budget: "premium",
    time: 42,
    price: 189000,
    rating: 4.7,
    tag: "Cho nhóm bạn",
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1100&q=82",
    description: "Nước lẩu chua cay, tôm, mực, nghêu, rau nấm và bún tươi.",
  },
  {
    id: "bo-ne",
    name: "Bò né trứng ốp la",
    restaurant: "Bò Né Chảo Nóng",
    category: "Bò",
    region: "Miền Nam",
    city: "Sài Gòn",
    moods: ["no", "nong", "pho-bien"],
    taste: ["dam-da", "beo"],
    budget: "normal",
    time: 20,
    price: 72000,
    rating: 4.5,
    tag: "Giao nhanh dưới 30 phút",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1100&q=82",
    description: "Bò áp chảo, trứng, pate, khoai và bánh mì nóng giòn.",
  },
  {
    id: "ca-phe-sua-da",
    name: "Cà phê sữa đá",
    restaurant: "Cà Phê Hẻm Nhỏ",
    category: "Cà phê",
    region: "Miền Nam",
    city: "Sài Gòn",
    moods: ["nhanh", "ngot", "tinh-tao"],
    taste: ["ngot", "dang"],
    budget: "budget",
    time: 10,
    price: 29000,
    rating: 4.9,
    tag: "Bán chạy buổi sáng",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1100&q=82",
    description: "Cà phê phin đậm, sữa đặc béo và đá viên mát lạnh.",
  },
  {
    id: "che-khuc-bach",
    name: "Chè khúc bạch",
    restaurant: "Chè Mát Lành",
    category: "Chè & Tráng miệng",
    region: "Miền Nam",
    city: "Sài Gòn",
    moods: ["ngot", "lanh", "nhe"],
    taste: ["ngot", "thanh"],
    budget: "budget",
    time: 17,
    price: 38000,
    rating: 4.6,
    tag: "Tráng miệng",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1100&q=82",
    description: "Khúc bạch mềm, nhãn, hạnh nhân rang và nước đường thanh nhẹ.",
  },
];

const moods = [
  { id: "am", label: "Món ấm nóng" },
  { id: "cay", label: "Món cay" },
  { id: "thanh", label: "Thanh đạm" },
  { id: "gion", label: "Giòn rụm" },
  { id: "ngot", label: "Ngọt mát" },
  { id: "nhanh", label: "Giao nhanh" },
];

const state = {
  mood: "am",
  category: "Tất cả",
  region: "Tất cả",
  search: "",
  budget: "all",
  time: "all",
  cart: [],
  notificationsOpen: false,
  chatOpen: false,
  battleQueue: ["pho-bo-tai", "com-tam-suon-bi-cha", "bun-bo-hue", "banh-mi-thit-nuong", "ga-chien-nuoc-mam"],
  battleRound: 0,
  battleWinner: null,
  messages: [
    {
      from: "agent",
      text: "Xin chào, CraveCraft có thể hỗ trợ đơn #VN10245 cho bạn không?",
      time: "18:20",
    },
  ],
};

const searchStopWords = new Set([
  "mon",
  "món",
  "an",
  "ăn",
  "toi",
  "tôi",
  "hom",
  "hôm",
  "nay",
  "cho",
  "nguoi",
  "người",
  "bua",
  "bữa",
  "trua",
  "trưa",
  "toi",
  "tối",
  "sang",
  "sáng",
  "re",
  "rẻ",
]);

const notifications = [
  "Đơn #VN10245 đã được xác nhận",
  "Voucher FREESHIP30 sắp hết hạn",
  "Hỗ trợ viên đã trả lời cuộc trò chuyện",
];

const money = new Intl.NumberFormat("vi-VN");
const $ = (selector) => document.querySelector(selector);

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");
}

function getCurrentUser() {
  const stored = localStorage.getItem("cc_current_user");
  return stored ? JSON.parse(stored) : null;
}

function requireCustomerSession() {
  const user = getCurrentUser();
  if (!user) {
    window.location.href = "login.html?next=index.html";
    return null;
  }
  if (user.role !== "CUSTOMER") {
    window.location.href = user.role === "ADMIN" ? "admin.html" : "support.html";
    return null;
  }
  return user;
}

function logout() {
  localStorage.removeItem("cc_current_user");
  window.location.href = "login.html";
}

function formatPrice(value) {
  return `${money.format(value)} ₫`;
}

function byId(id) {
  return menuItems.find((item) => item.id === id);
}

function itemMatchesSearch(item, query) {
  if (!query) return true;
  const normalized = normalizeText(query);
  const searchable = normalizeText(
    [
      item.name,
      item.restaurant,
      item.category,
      item.region,
      item.city,
      item.description,
      item.budget,
      item.tag,
      ...item.moods,
      ...item.taste,
    ].join(" "),
  );

  const underMatch = normalized.match(/(?:duoi|under)\s?(\d+)/);
  if (underMatch) {
    const ceiling = Number(underMatch[1]) * 1000;
    if (item.price > ceiling) return false;
  }

  if (normalized.includes("4 nguoi") || normalized.includes("nhom")) {
    return ["Lẩu", "Gà", "Bánh xèo", "Cơm"].includes(item.category);
  }

  return normalized
    .replace(/(?:duoi|under)\s?\d+k?/g, "")
    .split(/\s+/)
    .filter((word) => word && !searchStopWords.has(word))
    .every((word) => searchable.includes(word) || word === "cheap" && item.budget === "budget");
}

function getFilteredItems() {
  return menuItems
    .filter((item) => state.category === "Tất cả" || item.category === state.category)
    .filter((item) => state.region === "Tất cả" || item.region === state.region || item.city === state.region)
    .filter((item) => item.moods.includes(state.mood) || state.search)
    .filter((item) => state.budget === "all" || item.budget === state.budget)
    .filter((item) => state.time === "all" || item.time <= Number(state.time))
    .filter((item) => itemMatchesSearch(item, state.search))
    .sort((a, b) => b.rating - a.rating);
}

function showToast(message) {
  const toast = $("[data-toast]");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function renderSession(user) {
  $("[data-user-name]").textContent = user.name;
  $("[data-user-role]").textContent = user.role;
  $("[data-notification-count]").textContent = notifications.length;
}

function renderMoodList() {
  const moodList = $("[data-mood-list]");
  moodList.innerHTML = moods
    .map(
      (mood) => `
        <button class="mood-chip ${state.mood === mood.id ? "is-active" : ""}" type="button" data-mood="${mood.id}">
          ${mood.label}
        </button>
      `,
    )
    .join("");
  $("[data-active-mood-label]").textContent = moods.find((mood) => mood.id === state.mood).label;
}

function renderCategoryList() {
  const categories = ["Tất cả", ...new Set(menuItems.map((item) => item.category))];
  $("[data-category-list]").innerHTML = categories
    .map(
      (category) => `
        <button class="category-chip ${state.category === category ? "is-active" : ""}" type="button" data-category="${category}">
          ${category}
        </button>
      `,
    )
    .join("");
}

function renderRegionList() {
  const regions = ["Tất cả", "Miền Bắc", "Miền Trung", "Miền Nam", "Miền Tây", "Hà Nội", "Huế", "Đà Nẵng", "Sài Gòn"];
  $("[data-region-list]").innerHTML = regions
    .map(
      (region) => `
        <button class="region-chip ${state.region === region ? "is-active" : ""}" type="button" data-region="${region}">
          ${region}
        </button>
      `,
    )
    .join("");
}

function cardTemplate(item, featured = false) {
  return `
    <article class="food-card ${featured ? "featured" : ""}">
      <img src="${item.image}" alt="${item.name}" loading="lazy" />
      <div class="food-card-content">
        <div class="meta-row">
          <span class="pill">${item.tag}</span>
          <span class="pill">${item.time} phút</span>
          <span class="pill">${item.rating.toFixed(1)}</span>
        </div>
        <h3>${item.name}</h3>
        <p>${item.restaurant} - ${item.description}</p>
        <div class="card-footer">
          <strong class="price">${formatPrice(item.price)}</strong>
          <button class="add-button" type="button" data-add="${item.id}">Thêm</button>
        </div>
      </div>
    </article>
  `;
}

function renderSpotlight(items = getFilteredItems()) {
  const spotlight = items[0] || menuItems[0];
  $("[data-spotlight]").innerHTML = `
    <img src="${spotlight.image}" alt="${spotlight.name}" />
    <div class="spotlight-content">
      <div class="meta-row">
        <span class="pill">${spotlight.region}</span>
        <span class="pill">${spotlight.time} phút</span>
      </div>
      <h2>${spotlight.name}</h2>
      <p>${spotlight.description}</p>
      <div class="card-footer">
        <strong>${formatPrice(spotlight.price)}</strong>
        <button class="add-button" type="button" data-add="${spotlight.id}">Thêm vào giỏ</button>
      </div>
    </div>
  `;
}

function renderRecommendations() {
  const items = getFilteredItems();
  const fallback = menuItems.filter((item) => item.moods.includes(state.mood));
  const displayItems = items.length ? items : fallback;
  $("[data-result-count]").textContent = `${displayItems.length} món phù hợp`;
  $("[data-recommendations]").innerHTML = displayItems
    .slice(0, 5)
    .map((item, index) => cardTemplate(item, index === 0))
    .join("");
  renderSpotlight(displayItems);
}

function renderFastList() {
  const fastItems = menuItems.filter((item) => item.time <= 30).slice(0, 4);
  $("[data-fast-list]").innerHTML = fastItems
    .map(
      (item) => `
        <article class="quick-item">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          <div>
            <div class="quick-footer">
              <h3>${item.name}</h3>
              <strong class="price">${formatPrice(item.price)}</strong>
            </div>
            <p>${item.restaurant} - ${item.time} phút - ${item.rating.toFixed(1)} sao</p>
            <button class="add-button" type="button" data-add="${item.id}">Thêm</button>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderExplorerFeed(items = menuItems.slice(0, 6)) {
  $("[data-explorer-feed]").innerHTML = items
    .map(
      (item) => `
        <article class="explorer-card">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          <div class="explorer-content">
            <div class="meta-row">
              <span class="pill">${item.category}</span>
              <span class="pill">${item.region}</span>
            </div>
            <h3>${item.name}</h3>
            <p>${item.restaurant} - ${formatPrice(item.price)}</p>
            <div class="explorer-actions">
              <button type="button" data-save="${item.id}">Lưu</button>
              <button type="button" data-add="${item.id}">Thêm</button>
              <button type="button" data-view="${item.id}">Quán</button>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderBattle() {
  const currentId = state.battleWinner || state.battleQueue[state.battleRound];
  const challengerId = state.battleQueue[state.battleRound + 1];
  const current = byId(currentId);
  const challenger = byId(challengerId);
  const stage = $("[data-battle-stage]");

  if (!challenger) {
    stage.innerHTML = `
      <article class="battle-choice" style="grid-column: 1 / -1">
        <img src="${current.image}" alt="${current.name}" />
        <div class="battle-content">
          <span class="pill">Món thắng cuộc</span>
          <h3>${current.name}</h3>
          <p>${current.restaurant} là lựa chọn hợp gu nhất lúc này.</p>
          <button class="add-button" type="button" data-add="${current.id}">Thêm món thắng</button>
        </div>
      </article>
    `;
    return;
  }

  stage.innerHTML = `
    ${battleChoice(current)}
    <div class="versus">VS</div>
    ${battleChoice(challenger)}
  `;
}

function battleChoice(item) {
  return `
    <button class="battle-choice" type="button" data-battle-choice="${item.id}">
      <img src="${item.image}" alt="${item.name}" />
      <span class="battle-content">
        <span class="pill">${item.category}</span>
        <strong class="battle-title">${item.name}</strong>
        <span>${item.restaurant} - ${formatPrice(item.price)}</span>
      </span>
    </button>
  `;
}

function renderCart() {
  const cartItems = state.cart.map(({ id, qty }) => ({ ...byId(id), qty }));
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const deliveryFee = subtotal >= 180000 || subtotal === 0 ? 0 : 18000;
  const discount = subtotal >= 260000 ? 24000 : 0;
  const total = Math.max(0, subtotal + deliveryFee - discount);

  $("[data-cart-count]").textContent = state.cart.reduce((sum, item) => sum + item.qty, 0);
  $("[data-cart-count-mobile]").textContent = state.cart.reduce((sum, item) => sum + item.qty, 0);

  $("[data-cart-items]").innerHTML = cartItems.length
    ? cartItems
        .map(
          (item) => `
          <article class="cart-item">
            <img src="${item.image}" alt="${item.name}" />
            <div>
              <h3>${item.name}</h3>
              <p>${formatPrice(item.price)}</p>
              <div class="cart-line">
                <span class="quantity">
                  <button class="qty-button" type="button" data-qty="${item.id}" data-delta="-1">-</button>
                  <strong>${item.qty}</strong>
                  <button class="qty-button" type="button" data-qty="${item.id}" data-delta="1">+</button>
                </span>
                <strong>${formatPrice(item.price * item.qty)}</strong>
              </div>
            </div>
          </article>
        `,
        )
        .join("")
    : `<p>Giỏ hàng đang chờ món Việt đầu tiên của bạn.</p>`;

  const gap = 180000 - subtotal;
  $("[data-cart-suggestion]").textContent =
    subtotal === 0
      ? "Gợi ý: thêm món để nhận đề xuất giao hàng và combo phù hợp."
      : gap > 0
        ? `Thêm ${formatPrice(gap)} để được miễn phí giao hàng.`
        : "Bạn đã mở khóa miễn phí giao hàng. Thêm nước hoặc tráng miệng rất hợp.";

  $("[data-cart-summary]").innerHTML = `
    <div class="cart-line"><span>Tạm tính</span><strong>${formatPrice(subtotal)}</strong></div>
    <div class="cart-line"><span>Giao hàng</span><strong>${deliveryFee ? formatPrice(deliveryFee) : "Miễn phí"}</strong></div>
    <div class="cart-line"><span>Giảm giá</span><strong>-${formatPrice(discount)}</strong></div>
    <div class="cart-line"><strong>Tổng cộng</strong><strong>${formatPrice(total)}</strong></div>
  `;
}

function renderNotifications() {
  const panel = $("[data-notification-panel]");
  panel.innerHTML = `
    <div class="notification-head">
      <strong>Thông báo</strong>
      <span>${notifications.length} mới</span>
    </div>
    ${notifications.map((item) => `<p>${item}</p>`).join("")}
  `;
  panel.classList.toggle("is-open", state.notificationsOpen);
}

function renderChat() {
  const panel = $("[data-chat-panel]");
  panel.classList.toggle("is-open", state.chatOpen);
  $("[data-chat-messages]").innerHTML = state.messages
    .map(
      (message) => `
        <div class="chat-message ${message.from === "customer" ? "is-customer" : ""}">
          <p>${message.text}</p>
          <small>${message.time} - ${message.from === "customer" ? "Đã gửi" : "Hỗ trợ"}</small>
        </div>
      `,
    )
    .join("");
  $("[data-chat-unread]").textContent = state.chatOpen ? "0" : "1";
}

function addToCart(id) {
  const existing = state.cart.find((item) => item.id === id);
  if (existing) existing.qty += 1;
  else state.cart.push({ id, qty: 1 });
  renderCart();
  showToast(`Đã thêm ${byId(id).name}`);
}

function updateQty(id, delta) {
  const existing = state.cart.find((item) => item.id === id);
  if (!existing) return;
  existing.qty += delta;
  state.cart = state.cart.filter((item) => item.qty > 0);
  renderCart();
}

function openCart() {
  $("[data-cart-drawer]").classList.add("is-open");
  $("[data-cart-drawer]").setAttribute("aria-hidden", "false");
  $("[data-scrim]").classList.add("is-open");
}

function closeCart() {
  $("[data-cart-drawer]").classList.remove("is-open");
  $("[data-cart-drawer]").setAttribute("aria-hidden", "true");
  $("[data-scrim]").classList.remove("is-open");
}

function revealSurprise() {
  const budget = $("[data-surprise-budget]").value;
  const maxTime = Number($("[data-surprise-time]").value);
  const choices = menuItems.filter((item) => item.budget === budget && item.time <= maxTime);
  const item = (choices.length ? choices : menuItems)[Math.floor(Math.random() * (choices.length || menuItems.length))];
  $("[data-surprise-result]").innerHTML = `
    <article style="background-image: url('${item.image}')">
      <span class="pill">${item.tag}</span>
      <h3>${item.name}</h3>
      <p>${item.restaurant} - ${item.time} phút - ${formatPrice(item.price)}</p>
      <button class="add-button" type="button" data-add="${item.id}">Thêm món này</button>
    </article>
  `;
}

function shuffleFeed() {
  const shuffled = [...menuItems].sort(() => Math.random() - 0.5).slice(0, 6);
  renderExplorerFeed(shuffled);
}

function rerenderDiscovery() {
  renderMoodList();
  renderCategoryList();
  renderRegionList();
  renderRecommendations();
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add]");
    const moodButton = event.target.closest("[data-mood]");
    const categoryButton = event.target.closest("[data-category]");
    const regionButton = event.target.closest("[data-region]");
    const qtyButton = event.target.closest("[data-qty]");
    const battleButton = event.target.closest("[data-battle-choice]");

    if (addButton) addToCart(addButton.dataset.add);
    if (moodButton) {
      state.mood = moodButton.dataset.mood;
      rerenderDiscovery();
    }
    if (categoryButton) {
      state.category = categoryButton.dataset.category;
      rerenderDiscovery();
    }
    if (regionButton) {
      state.region = regionButton.dataset.region;
      rerenderDiscovery();
    }
    if (qtyButton) updateQty(qtyButton.dataset.qty, Number(qtyButton.dataset.delta));
    if (battleButton) {
      state.battleWinner = battleButton.dataset.battleChoice;
      state.battleRound += 1;
      renderBattle();
    }
    if (event.target.closest("[data-open-cart]")) openCart();
    if (event.target.closest("[data-close-cart]") || event.target.closest("[data-scrim]")) closeCart();
    if (event.target.closest("[data-shuffle-feed]")) shuffleFeed();
    if (event.target.closest("[data-reset-battle]")) {
      state.battleRound = 0;
      state.battleWinner = null;
      state.battleQueue = [...state.battleQueue].sort(() => Math.random() - 0.5);
      renderBattle();
    }
    if (event.target.closest("[data-surprise-button]") || event.target.closest("[data-surprise-trigger]")) {
      revealSurprise();
      document.querySelector("#surprise").scrollIntoView({ behavior: "smooth", block: "center" });
    }
    if (event.target.closest("[data-room-code]")) {
      const code = `VIET-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
      $("[data-room-output]").textContent = code;
      showToast(`Phòng đặt nhóm ${code} đã sẵn sàng`);
    }
    if (event.target.closest("[data-save]")) showToast("Đã lưu món ăn");
    if (event.target.closest("[data-view]")) showToast("Trang nhà hàng sẽ được nối API ở giai đoạn sau");
    if (event.target.closest("[data-checkout-button]")) showToast("Thanh toán cần API bảo mật ở phía server");
    if (event.target.closest("[data-logout]")) logout();
    if (event.target.closest("[data-notification-toggle]")) {
      state.notificationsOpen = !state.notificationsOpen;
      renderNotifications();
    }
    if (event.target.closest("[data-chat-toggle]")) {
      state.chatOpen = !state.chatOpen;
      renderChat();
    }
    if (event.target.closest("[data-chat-close]")) {
      state.chatOpen = false;
      renderChat();
    }
    const issue = event.target.closest("[data-chat-issue]");
    if (issue) {
      state.messages.push({ from: "customer", text: issue.dataset.chatIssue, time: "Bây giờ" });
      state.messages.push({ from: "agent", text: "Cảm ơn bạn. Mình đang kiểm tra thông tin đơn hàng liên quan.", time: "Bây giờ" });
      renderChat();
    }
  });

  $("[data-search-input]").addEventListener("input", (event) => {
    state.search = event.target.value.trim();
    renderRecommendations();
  });

  $("[data-budget-filter]").addEventListener("change", (event) => {
    state.budget = event.target.value;
    renderRecommendations();
  });

  $("[data-time-filter]").addEventListener("change", (event) => {
    state.time = event.target.value;
    renderRecommendations();
  });

  $("[data-chat-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = $("[data-chat-input]");
    const text = input.value.trim();
    if (!text) return;
    state.messages.push({ from: "customer", text, time: "Bây giờ" });
    input.value = "";
    renderChat();
    window.setTimeout(() => {
      state.messages.push({ from: "agent", text: "Mình đã ghi nhận và sẽ phản hồi trong ít phút.", time: "Bây giờ" });
      renderChat();
    }, 700);
  });
}

function init() {
  const user = requireCustomerSession();
  if (!user) return;
  renderSession(user);
  renderMoodList();
  renderCategoryList();
  renderRegionList();
  renderRecommendations();
  renderFastList();
  renderExplorerFeed();
  renderBattle();
  renderCart();
  renderNotifications();
  renderChat();
  revealSurprise();
  bindEvents();
}

init();
