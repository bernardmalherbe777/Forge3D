const demoProducts = [
  {
    id: "creality-hyper-pla-black",
    category: "filament",
    name: "Creality Hyper PLA",
    material: "PLA",
    color: "Matte Black",
    price: 18.99,
    stock: 18,
    description: "Fast-flow 1.75mm PLA for clean prototypes and everyday prints.",
    swatch: "#111827"
  },
  {
    id: "creality-ender-pla-white",
    category: "filament",
    name: "Creality Ender PLA",
    material: "PLA",
    color: "Classic White",
    price: 16.49,
    stock: 24,
    description: "Reliable 1kg spool with smooth feeding and low warping.",
    swatch: "#f8fafc"
  },
  {
    id: "creality-petg-blue",
    category: "filament",
    name: "Creality CR-PETG",
    material: "PETG",
    color: "Ocean Blue",
    price: 21.99,
    stock: 10,
    description: "Durable PETG for functional parts that need extra toughness.",
    swatch: "#2563eb"
  },
  {
    id: "creality-abs-grey",
    category: "filament",
    name: "Creality ABS",
    material: "ABS",
    color: "Machine Grey",
    price: 19.99,
    stock: 8,
    description: "Heat-resistant filament for stronger parts and workshop fixtures.",
    swatch: "#64748b"
  },
  {
    id: "creality-tpu-red",
    category: "filament",
    name: "Creality TPU",
    material: "TPU",
    color: "Forge Red",
    price: 25.99,
    stock: 7,
    description: "Flexible filament for grips, bumpers, cases, and soft components.",
    swatch: "#dc2626"
  },
  {
    id: "creality-silk-pla-gold",
    category: "filament",
    name: "Creality Silk PLA",
    material: "PLA",
    color: "Polished Gold",
    price: 22.49,
    stock: 12,
    description: "Glossy silk finish for display models, gifts, and decorative prints.",
    swatch: "#d99c22"
  },
  {
    id: "creality-k1c-printer",
    category: "printers",
    name: "Creality K1C 3D Printer",
    material: "CoreXY",
    color: "Carbon Black",
    price: 459.00,
    stock: 4,
    description: "Fast enclosed CoreXY printer built for carbon-fibre-ready projects.",
    swatch: "#0f172a"
  },
  {
    id: "creality-ender-3-v3-ke",
    category: "printers",
    name: "Creality Ender-3 V3 KE",
    material: "Bed Slinger",
    color: "Graphite",
    price: 249.00,
    stock: 6,
    description: "Compact high-speed printer with auto levelling for everyday makers.",
    swatch: "#334155"
  },
  {
    id: "creality-build-plate-kit",
    category: "accessories",
    name: "Creality PEI Build Plate",
    material: "Accessory",
    color: "Textured Gold",
    price: 24.99,
    stock: 14,
    description: "Flexible textured PEI plate for stronger first-layer grip and cleaner release.",
    swatch: "#d99c22"
  },
  {
    id: "creality-nozzle-kit",
    category: "accessories",
    name: "Creality Nozzle Kit",
    material: "Accessory",
    color: "Brass",
    price: 12.99,
    stock: 28,
    description: "Replacement nozzle pack for keeping extrusion smooth and accurate.",
    swatch: "#f59e0b"
  }
];

const productGrid = document.querySelector("#productGrid");
const productCount = document.querySelector("#productCount");
const productForm = document.querySelector("#productForm");
const searchInput = document.querySelector("#searchInput");
const materialFilter = document.querySelector("#materialFilter");
const cartItems = document.querySelector("#cartItems");
const cartTotal = document.querySelector("#cartTotal");
const clearCartBtn = document.querySelector("#clearCartBtn");
const shippingForm = document.querySelector("#shippingForm");
const orderMessage = document.querySelector("#orderMessage");
const themeToggle = document.querySelector("#themeToggle");
const themeIcon = themeToggle.querySelector(".theme-icon");
const themeLabel = themeToggle.querySelector(".theme-label");
const backgroundMusic = document.querySelector("#backgroundMusic");
const musicToggle = document.querySelector("#musicToggle");
const musicIcon = musicToggle.querySelector(".music-icon");
const musicLabel = musicToggle.querySelector(".music-label");
const categoryHero = document.querySelector(".category-hero");
const categoryTitle = document.querySelector("#categoryTitle");
const categoryDescription = document.querySelector("#categoryDescription");
const categoryCta = document.querySelector("#categoryCta");
const categoryAddCta = document.querySelector("#categoryAddCta");
const categoryIcon = document.querySelector("#categoryIcon");
const categoryPrev = document.querySelector("#categoryPrev");
const categoryNext = document.querySelector("#categoryNext");
const categoryDots = document.querySelector("#categoryDots");
const shopTitle = document.querySelector("#shopTitle");
const backToCategories = document.querySelector("#backToCategories");
const storeTransition = document.querySelector("#storeTransition");

const buttonSoundPaths = [
  "Sounds/Smooth%20Button%202.mp3",
  "Sounds/Smooth%20Button%203.mp3",
  "Sounds/Smooth%20Button%204.mp3"
];
const buttonSounds = buttonSoundPaths.map((path) => new Audio(path));
const swipeSound = new Audio("Sounds/Swipe%2007.mp3");

const categories = [
  {
    title: "3D Printers",
    category: "printers",
    description: "Start with the machines that turn filament into finished ideas. Browse printers, upgrades, and print-ready essentials.",
    cta: "Explore printers",
    href: "#shop",
    iconClass: "printer-icon",
    iconHtml: `
      <span class="printer-frame"></span>
      <span class="printer-gantry"></span>
      <span class="printer-bed"></span>
      <span class="printer-head"></span>
      <span class="printer-cube"></span>
    `
  },
  {
    title: "3D Printer Accessories",
    category: "accessories",
    description: "Dial in your workshop with nozzles, tools, build plates, spares, and smart upgrades for cleaner prints.",
    cta: "View accessories",
    href: "#add-product",
    iconClass: "accessory-icon",
    iconHtml: `
      <span class="tool-disc"></span>
      <span class="wrench-handle"></span>
      <span class="wrench-head"></span>
      <span class="nozzle"></span>
    `
  },
  {
    title: "3D Filament",
    category: "filament",
    description: "Shop Creality PLA, PETG, ABS, TPU, and specialty colors for strong, smooth, reliable prints.",
    cta: "Shop filament",
    href: "#shop",
    iconClass: "filament-icon",
    iconHtml: `
      <span class="spool-outer"></span>
      <span class="spool-inner"></span>
      <span class="filament-strand"></span>
    `
  }
];

let products = loadProducts();
let cart = loadCart();
let activeCategory = 0;
let categoryLocked = false;
let activeStoreCategory = null;
let transitionLocked = false;
let musicMuted = localStorage.getItem("forge3d-music-muted") === "true";
let musicStarted = false;

buttonSounds.forEach((sound) => {
  sound.preload = "auto";
  sound.volume = 0.45;
});
swipeSound.preload = "auto";
swipeSound.volume = 0.5;
backgroundMusic.volume = 0.32;

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeIcon.textContent = theme === "dark" ? "D" : "L";
  themeLabel.textContent = theme === "dark" ? "Dark" : "Light";
  themeToggle.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
  localStorage.setItem("forge3d-theme", theme);
}

function updateMusicButton() {
  musicToggle.classList.toggle("muted", musicMuted);
  musicIcon.textContent = musicMuted ? "X" : "M";
  musicLabel.textContent = musicMuted ? "Music Off" : "Music On";
  musicToggle.setAttribute("aria-label", musicMuted ? "Unmute music" : "Mute music");
}

function playBackgroundMusic() {
  if (musicMuted) return;

  backgroundMusic.muted = false;
  backgroundMusic.play()
    .then(() => {
      musicStarted = true;
    })
    .catch(() => {
      musicStarted = false;
    });
}

function setMusicMuted(isMuted) {
  musicMuted = isMuted;
  localStorage.setItem("forge3d-music-muted", String(musicMuted));

  if (musicMuted) {
    backgroundMusic.pause();
  } else {
    playBackgroundMusic();
  }

  updateMusicButton();
}

function playButtonSound() {
  const sound = buttonSounds[Math.floor(Math.random() * buttonSounds.length)];
  sound.currentTime = 0;
  sound.play().catch(() => {});
}

function playSwipeSound() {
  swipeSound.currentTime = 0;
  swipeSound.play().catch(() => {});
}

function renderCategoryDots() {
  categoryDots.innerHTML = categories.map((category, index) => `
    <button class="category-dot${index === activeCategory ? " active" : ""}" type="button" data-category="${index}" aria-label="Show ${category.title}"></button>
  `).join("");
}

function setCategory(index, direction = 1) {
  if (categoryLocked || index === activeCategory) return;

  categoryLocked = true;
  categoryHero.style.setProperty("--slide-out", direction > 0 ? "-110px" : "110px");
  categoryHero.style.setProperty("--slide-in", direction > 0 ? "120px" : "-120px");
  categoryHero.style.setProperty("--slide-rotate", direction > 0 ? "22deg" : "-22deg");
  categoryHero.classList.add("is-switching");

  window.setTimeout(() => {
    activeCategory = (index + categories.length) % categories.length;
    const category = categories[activeCategory];

    categoryTitle.textContent = category.title;
    categoryDescription.textContent = category.description;
    categoryCta.textContent = category.cta;
    categoryCta.href = category.href;
    categoryIcon.className = `floating-icon ${category.iconClass}`;
    categoryIcon.innerHTML = category.iconHtml;
    renderCategoryDots();

    categoryHero.classList.remove("is-switching");
    categoryHero.classList.add("is-entering");

    window.setTimeout(() => {
      categoryHero.classList.remove("is-entering");
      categoryLocked = false;
    }, 460);
  }, 260);
}

function moveCategory(direction) {
  setCategory(activeCategory + direction, direction);
}

function loadProducts() {
  const savedProducts = localStorage.getItem("forge3d-products");
  if (!savedProducts) return demoProducts;

  const saved = JSON.parse(savedProducts).map((product) => ({
    category: "filament",
    ...product
  }));
  const savedIds = new Set(saved.map((product) => product.id));
  const missingDemos = demoProducts.filter((product) => !savedIds.has(product.id));
  return [...saved, ...missingDemos];
}

function saveProducts() {
  localStorage.setItem("forge3d-products", JSON.stringify(products));
}

function loadCart() {
  const savedCart = localStorage.getItem("forge3d-cart");
  return savedCart ? JSON.parse(savedCart) : [];
}

function saveCart() {
  localStorage.setItem("forge3d-cart", JSON.stringify(cart));
}

function formatPrice(value) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  }).format(value);
}

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function swatchFromColor(color) {
  const lookup = {
    black: "#111827",
    white: "#f8fafc",
    blue: "#2563eb",
    red: "#dc2626",
    grey: "#64748b",
    gray: "#64748b",
    gold: "#d99c22",
    green: "#16a34a",
    yellow: "#facc15",
    orange: "#f97316",
    purple: "#7c3aed",
    pink: "#ec4899"
  };

  const key = Object.keys(lookup).find((name) => color.toLowerCase().includes(name));
  return key ? lookup[key] : "#10a37f";
}

function filteredProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const material = materialFilter.value;

  return products.filter((product) => {
    const searchable = `${product.name} ${product.material} ${product.color} ${product.description}`.toLowerCase();
    const matchesSearch = !query || searchable.includes(query);
    const matchesMaterial = material === "all" || product.material === material;
    const matchesCategory = !activeStoreCategory || product.category === activeStoreCategory;
    return matchesSearch && matchesMaterial && matchesCategory;
  });
}

function renderProducts() {
  const visibleProducts = filteredProducts();
  const activeCategoryData = categories.find((category) => category.category === activeStoreCategory);
  shopTitle.textContent = activeCategoryData ? activeCategoryData.title : "Forge3D stock";
  productCount.textContent = `${visibleProducts.length} item${visibleProducts.length === 1 ? "" : "s"} shown`;

  if (!visibleProducts.length) {
    productGrid.innerHTML = `<div class="empty-state">No products match your filters.</div>`;
    return;
  }

  productGrid.innerHTML = visibleProducts.map((product) => `
    <article class="product-card">
      <div class="spool-art" style="--swatch: ${product.swatch}" aria-hidden="true"></div>
      <div>
        <div class="product-meta">
          <span class="pill">Creality</span>
          <span class="pill">${categoryLabel(product.category)}</span>
          <span class="pill">${product.material}</span>
          <span class="pill">${product.color}</span>
        </div>
        <h3>${product.name}</h3>
        <p class="muted">${product.description || "Official Creality filament listing."}</p>
      </div>
      <div class="price-line">
        <div>
          <strong>${formatPrice(product.price)}</strong>
          <p class="muted">${product.stock} in stock</p>
        </div>
        <button class="button primary" type="button" data-add="${product.id}" ${product.stock === 0 ? "disabled" : ""}>Add</button>
      </div>
    </article>
  `).join("");
}

function categoryLabel(categoryValue) {
  const category = categories.find((item) => item.category === categoryValue);
  return category ? category.title : "3D Filament";
}

function enterStore(target = "shop") {
  if (transitionLocked) return;

  const category = categories[activeCategory];
  transitionLocked = true;
  document.body.classList.add("transitioning");
  storeTransition.classList.add("active");

  window.setTimeout(() => {
    activeStoreCategory = category.category;
    document.body.classList.remove("landing-mode");
    document.body.classList.add("store-mode");
    document.body.classList.remove("transitioning");
    searchInput.value = "";
    materialFilter.value = "all";
    renderProducts();
    document.querySelector(`#${target}`).scrollIntoView({ behavior: "auto", block: "start" });

    window.setTimeout(() => {
      storeTransition.classList.remove("active");
      transitionLocked = false;
    }, 520);
  }, 3000);
}

function enterLanding() {
  document.body.classList.remove("store-mode");
  document.body.classList.add("landing-mode");
  activeStoreCategory = null;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderCart() {
  if (!cart.length) {
    cartItems.innerHTML = `<div class="empty-state">Your cart is empty. Add an item from the shop above.</div>`;
    cartTotal.textContent = formatPrice(0);
    return;
  }

  cartItems.innerHTML = cart.map((item) => `
    <article class="cart-item">
      <div>
        <h3>${item.name}</h3>
        <p class="muted">${item.material} · ${item.color} · ${formatPrice(item.price)} each</p>
      </div>
      <div class="cart-actions">
        <div class="quantity-control" aria-label="Quantity controls for ${item.name}">
          <button type="button" data-decrease="${item.id}">-</button>
          <strong>${item.quantity}</strong>
          <button type="button" data-increase="${item.id}">+</button>
        </div>
        <button class="button danger" type="button" data-remove="${item.id}">Remove</button>
      </div>
    </article>
  `).join("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = formatPrice(total);
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  renderCart();
  document.querySelector("#cart").scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateQuantity(productId, change) {
  const cartItem = cart.find((item) => item.id === productId);
  if (!cartItem) return;

  cartItem.quantity += change;
  if (cartItem.quantity <= 0) {
    cart = cart.filter((item) => item.id !== productId);
  }

  saveCart();
  renderCart();
}

function addProduct(event) {
  event.preventDefault();

  const formData = new FormData(productForm);
  const name = formData.get("name").trim();
  const color = formData.get("color").trim();
  const category = formData.get("category");
  const material = formData.get("material");
  const price = Number(formData.get("price"));
  const stock = Number(formData.get("stock"));
  const description = formData.get("description").trim();

  products.unshift({
    id: `${slugify(name)}-${slugify(color)}-${Date.now()}`,
    category,
    name,
    material,
    color,
    price,
    stock,
    description,
    swatch: swatchFromColor(color)
  });

  saveProducts();
  productForm.reset();
  renderProducts();
  document.querySelector("#shop").scrollIntoView({ behavior: "smooth", block: "start" });
}

function submitOrder(event) {
  event.preventDefault();

  if (!cart.length) {
    orderMessage.textContent = "Add at least one item to the cart before submitting shipping details.";
    return;
  }

  const formData = new FormData(shippingForm);
  const order = {
    customer: Object.fromEntries(formData.entries()),
    items: cart,
    total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    createdAt: new Date().toISOString()
  };

  localStorage.setItem("forge3d-last-order", JSON.stringify(order));
  orderMessage.textContent = `Order request saved for ${order.customer.fullName}. Payment setup can be connected next.`;
  cart = [];
  saveCart();
  renderCart();
  shippingForm.reset();
}

productGrid.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  if (addButton) addToCart(addButton.dataset.add);
});

cartItems.addEventListener("click", (event) => {
  const increaseButton = event.target.closest("[data-increase]");
  const decreaseButton = event.target.closest("[data-decrease]");
  const removeButton = event.target.closest("[data-remove]");

  if (increaseButton) updateQuantity(increaseButton.dataset.increase, 1);
  if (decreaseButton) updateQuantity(decreaseButton.dataset.decrease, -1);
  if (removeButton) {
    cart = cart.filter((item) => item.id !== removeButton.dataset.remove);
    saveCart();
    renderCart();
  }
});

clearCartBtn.addEventListener("click", () => {
  cart = [];
  saveCart();
  renderCart();
});

productForm.addEventListener("submit", addProduct);
shippingForm.addEventListener("submit", submitOrder);
searchInput.addEventListener("input", renderProducts);
materialFilter.addEventListener("change", renderProducts);
themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
});
document.addEventListener("click", (event) => {
  const clickedArrow = event.target.closest(".category-arrow");
  const clickedButton = event.target.closest("button, .button");

  if (clickedArrow) {
    playSwipeSound();
    return;
  }

  if (clickedButton) playButtonSound();
});
document.addEventListener("pointerdown", () => {
  if (!musicStarted) playBackgroundMusic();
}, { once: true });
musicToggle.addEventListener("click", () => setMusicMuted(!musicMuted));
categoryPrev.addEventListener("click", () => moveCategory(-1));
categoryNext.addEventListener("click", () => moveCategory(1));
categoryDots.addEventListener("click", (event) => {
  const dot = event.target.closest("[data-category]");
  if (!dot) return;

  const nextIndex = Number(dot.dataset.category);
  const direction = nextIndex > activeCategory ? 1 : -1;
  setCategory(nextIndex, direction);
});
categoryCta.addEventListener("click", (event) => {
  event.preventDefault();
  enterStore("shop");
});
categoryAddCta.addEventListener("click", (event) => {
  event.preventDefault();
  enterStore("add-product");
});
categoryIcon.addEventListener("click", () => enterStore("shop"));
backToCategories.addEventListener("click", (event) => {
  event.preventDefault();
  enterLanding();
});

applyTheme(localStorage.getItem("forge3d-theme") || "dark");
setMusicMuted(musicMuted);
playBackgroundMusic();
renderCategoryDots();
renderProducts();
renderCart();
