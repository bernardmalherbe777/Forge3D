const demoProducts = [
  {
    id: "creality-hyper-pla-black",
    category: "filament",
    subcategory: "latest",
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
    subcategory: "pla",
    name: "Creality Ender PLA",
    material: "PLA",
    color: "Classic White",
    price: 16.49,
    stock: 24,
    description: "Reliable 1kg spool with smooth feeding and low warping.",
    swatch: "#f8fafc"
  },
  {
    id: "creality-pla-glow-green",
    category: "filament",
    subcategory: "pla",
    name: "Creality PLA Glow",
    material: "PLA",
    color: "Glow Green",
    price: 24.99,
    stock: 9,
    popularity: 3,
    description: "Glow-in-the-dark PLA for signs, props, and display models.",
    swatch: "#a3e635"
  },
  {
    id: "creality-petg-blue",
    category: "filament",
    subcategory: "petg",
    name: "Creality CR-PETG",
    material: "PETG",
    color: "Ocean Blue",
    price: 21.99,
    stock: 10,
    description: "Durable PETG for functional parts that need extra toughness.",
    swatch: "#2563eb"
  },
  {
    id: "creality-petg-black",
    category: "filament",
    subcategory: "petg",
    name: "Creality CR-PETG",
    material: "PETG",
    color: "Top Seller Black",
    price: 21.99,
    stock: 15,
    popularity: 1,
    description: "Popular black PETG for strong brackets, fixtures, and practical parts.",
    swatch: "#111827"
  },
  {
    id: "creality-petg-white",
    category: "filament",
    subcategory: "petg",
    name: "Creality CR-PETG",
    material: "PETG",
    color: "Top Seller White",
    price: 21.99,
    stock: 12,
    popularity: 2,
    description: "Clean white PETG for visible functional parts and workshop builds.",
    swatch: "#f8fafc"
  },
  {
    id: "creality-abs-grey",
    category: "filament",
    subcategory: "abs-asa",
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
    subcategory: "tpu",
    name: "Creality TPU",
    material: "TPU",
    color: "Forge Red",
    price: 25.99,
    stock: 7,
    description: "Flexible filament for grips, bumpers, cases, and soft components.",
    swatch: "#dc2626"
  },
  {
    id: "creality-tpu-black",
    category: "filament",
    subcategory: "tpu",
    name: "Creality TPU",
    material: "TPU",
    color: "Top Seller Black",
    price: 25.99,
    stock: 11,
    popularity: 1,
    description: "Best-selling flexible black TPU for grips, feet, cases, and bumpers.",
    swatch: "#111827"
  },
  {
    id: "creality-silk-pla-gold",
    category: "filament",
    subcategory: "specialty",
    name: "Creality Silk PLA",
    material: "PLA",
    color: "Polished Gold",
    price: 22.49,
    stock: 12,
    description: "Glossy silk finish for display models, gifts, and decorative prints.",
    swatch: "#d99c22"
  },
  {
    id: "creality-pa-cf-black",
    category: "filament",
    subcategory: "composite",
    name: "Creality PA-CF",
    material: "Composite",
    color: "Carbon Black",
    price: 48.99,
    stock: 5,
    description: "Carbon-fibre-reinforced nylon for stiff, strong functional components.",
    swatch: "#0f172a"
  },
  {
    id: "creality-hyper-abs-engineering",
    category: "filament",
    subcategory: "engineering",
    name: "Creality Hyper ABS",
    material: "Engineering",
    color: "Industrial Grey",
    price: 31.99,
    stock: 8,
    description: "Engineering-grade filament for tougher parts with improved thermal resistance.",
    swatch: "#64748b"
  },
  {
    id: "creality-k1c-printer",
    category: "printers",
    subcategory: "closed",
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
    subcategory: "open",
    name: "Creality Ender-3 V3 KE",
    material: "Bed Slinger",
    color: "Graphite",
    price: 249.00,
    stock: 6,
    description: "Compact high-speed printer with auto levelling for everyday makers.",
    swatch: "#334155"
  },
  {
    id: "creality-k2-plus-printer",
    category: "printers",
    subcategory: "latest",
    name: "Creality K2 Plus Combo",
    material: "Latest Release",
    color: "Obsidian Black",
    price: 899.00,
    stock: 3,
    description: "Latest flagship CoreXY system for fast multi-material production.",
    swatch: "#111827"
  },
  {
    id: "creality-k1-max-printer",
    category: "printers",
    subcategory: "premium",
    name: "Creality K1 Max",
    material: "Premium Printer",
    color: "Graphite Grey",
    price: 699.00,
    stock: 5,
    description: "Premium enclosed printer with a larger chamber and high-speed motion.",
    swatch: "#475569"
  },
  {
    id: "creality-cr-m4-printer",
    category: "printers",
    subcategory: "xxl",
    name: "Creality CR-M4",
    material: "XXL Printer",
    color: "Workshop Black",
    price: 759.00,
    stock: 2,
    description: "Large-format printer for bigger prototypes, cosplay parts, and fixtures.",
    swatch: "#1f2937"
  },
  {
    id: "creality-halot-mage-resin",
    category: "printers",
    subcategory: "resin",
    name: "Creality HALOT-MAGE",
    material: "Resin Printer",
    color: "UV Amber",
    price: 289.00,
    stock: 6,
    description: "High-resolution resin printer for miniatures, dental models, and fine detail.",
    swatch: "#f59e0b"
  },
  {
    id: "creality-build-plate-kit",
    category: "accessories",
    subcategory: "upgrades",
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
    subcategory: "nozzles",
    name: "Creality Nozzle Kit",
    material: "Accessory",
    color: "Brass",
    price: 12.99,
    stock: 28,
    description: "Replacement nozzle pack for keeping extrusion smooth and accurate.",
    swatch: "#f59e0b"
  },
  {
    id: "creality-cfs-system",
    category: "accessories",
    subcategory: "cfs",
    name: "Creality CFS System",
    material: "CFS System",
    color: "Carbon Black",
    price: 259.00,
    stock: 5,
    description: "Multi-filament management system for cleaner colour and material changes.",
    swatch: "#111827"
  },
  {
    id: "creality-printer-enclosure",
    category: "accessories",
    subcategory: "enclosures",
    name: "Creality Printer Enclosure",
    material: "Printer Enclosure",
    color: "Slate Black",
    price: 84.99,
    stock: 9,
    description: "Temperature-stable enclosure for ABS, ASA, and workshop dust protection.",
    swatch: "#334155"
  },
  {
    id: "creality-space-pi-plus",
    category: "accessories",
    subcategory: "latest",
    name: "Creality Space Pi Plus",
    material: "Latest Release",
    color: "Signal White",
    price: 89.99,
    stock: 7,
    description: "Latest dual-spool filament dryer for stable, dry material feeding.",
    swatch: "#f8fafc"
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
const themeIcon = themeToggle?.querySelector(".theme-icon");
const themeLabel = themeToggle?.querySelector(".theme-label");
const backgroundMusic = document.querySelector("#backgroundMusic");
const musicToggle = document.querySelector("#musicToggle");
const musicIcon = musicToggle?.querySelector(".music-icon");
const musicLabel = musicToggle?.querySelector(".music-label");
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
const printerSubcategoryPanel = document.querySelector("#printerSubcategories");
const printerSubcategoryGrid = document.querySelector("#printerSubcategoryGrid");
const printerSubcategoryLabel = document.querySelector("#printerSubcategoryLabel");
const subcategoryDeckTitle = document.querySelector("#subcategoryDeckTitle");
const subcategoryPrev = document.querySelector("#subcategoryPrev");
const subcategoryNext = document.querySelector("#subcategoryNext");
const selectSubcategory = document.querySelector("#selectSubcategory");

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
    iconClass: "printer-image-icon",
    iconHtml: `
      <img class="category-image" src="3D%20Printers/3D%20Printers%20%20Catogory%20Logo.png" alt="">
    `
  },
  {
    title: "3D Printer Accessories",
    category: "accessories",
    description: "Dial in your workshop with nozzles, tools, build plates, spares, and smart upgrades for cleaner prints.",
    cta: "View accessories",
    href: "#add-product",
    iconClass: "category-image-icon accessory-image-icon",
    iconHtml: `
      <img class="category-image" src="3D%20Printers/3D%20Printer%20Accessories%20Logo.png" alt="">
    `
  },
  {
    title: "3D Filament",
    category: "filament",
    description: "Shop Creality PLA, PETG, ABS, TPU, and specialty colors for strong, smooth, reliable prints.",
    cta: "Shop filament",
    href: "#shop",
    iconClass: "category-image-icon filament-image-icon",
    iconHtml: `
      <img class="category-image" src="3D%20Printers/3D%20Filament%20Logo.png" alt="">
    `
  }
];

const subcategoryGroups = {
  printers: [
    { key: "latest", title: "Latest Release", icon: "printer latest", description: "Newest Creality printer launches and flagship bundles." },
    { key: "open", title: "Open Printers", icon: "printer open", description: "Open-frame machines for fast access and everyday printing." },
    { key: "closed", title: "Closed Printers", icon: "printer closed", description: "Enclosed printers for stable temperatures and stronger materials." },
    { key: "premium", title: "Premium Printers", icon: "printer premium", description: "Higher-end printers for speed, automation, and larger workflows." },
    { key: "xxl", title: "XXL Printers", icon: "printer xxl", description: "Large-format machines for bigger parts and production jobs." },
    { key: "resin", title: "Resin Printers", icon: "printer resin", description: "High-detail resin systems for models, miniatures, and precision parts." }
  ],
  accessories: [
    { key: "latest", title: "Latest Releases", icon: "accessory latest", description: "Newest upgrades and workshop accessories from Creality." },
    { key: "nozzles", title: "Nozzles", icon: "accessory nozzle", description: "Replacement and specialty nozzles for different materials." },
    { key: "upgrades", title: "Upgrades", icon: "accessory upgrade", description: "Build plates, hardware, and tuning parts for better results." },
    { key: "cfs", title: "CFS Systems", icon: "accessory cfs", description: "Multi-material systems and filament management gear." },
    { key: "enclosures", title: "Printer Enclosures", icon: "accessory enclosure", description: "Enclosures for temperature control, safety, and cleaner workspaces." }
  ],
  filament: [
    { key: "latest", title: "Latest Releases", icon: "filament latest", description: "Newest Creality filament colours, blends, and high-speed materials." },
    { key: "pla", title: "PLA", icon: "filament pla", description: "Easy-print everyday filament for prototypes, models, and clean parts." },
    { key: "petg", title: "PETG", icon: "filament petg", description: "Durable filament for functional parts with extra toughness and low warp." },
    { key: "abs-asa", title: "ABS & ASA", icon: "filament abs", description: "Heat-resistant materials for stronger workshop and outdoor-use parts." },
    { key: "tpu", title: "TPU", icon: "filament tpu", description: "Flexible filament for grips, bumpers, cases, and soft components." },
    { key: "engineering", title: "Engineering Materials", icon: "filament engineering", description: "Performance materials for stronger, more technical prints." },
    { key: "composite", title: "Composite", icon: "filament composite", description: "Filled filaments for stiffness, texture, and specialist finishes." },
    { key: "specialty", title: "Specialty Filaments", icon: "filament specialty", description: "Silk, matte, decorative, and effect filaments for standout prints." }
  ]
};

let products = loadProducts();
let cart = loadCart();
let activeCategory = 0;
let categoryLocked = false;
let activeStoreCategory = null;
let activeStoreSubcategory = null;
let activeSubcategoryIndex = 0;
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
  if (themeIcon) themeIcon.textContent = theme === "dark" ? "D" : "L";
  if (themeLabel) themeLabel.textContent = theme === "dark" ? "Dark" : "Light";
  themeToggle?.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
  localStorage.setItem("forge3d-theme", theme);
}

function updateMusicButton() {
  if (!musicToggle) return;
  musicToggle.classList.toggle("muted", musicMuted);
  if (musicIcon) musicIcon.textContent = musicMuted ? "X" : "M";
  if (musicLabel) musicLabel.textContent = musicMuted ? "Music Off" : "Music On";
  musicToggle.setAttribute("aria-label", musicMuted ? "Unmute music" : "Mute music");
}

function playBackgroundMusic() {
  if (musicMuted || !backgroundMusic) return;

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

  if (!backgroundMusic) {
    updateMusicButton();
    return;
  }

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
  if (!categoryDots) return;
  categoryDots.innerHTML = categories.map((category, index) => `
    <button class="category-dot${index === activeCategory ? " active" : ""}" type="button" data-category="${index}" aria-label="Show ${category.title}"></button>
  `).join("");
}

function setCategory(index, direction = 1) {
  if (!categoryHero || categoryLocked || index === activeCategory) return;

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
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const material = materialFilter ? materialFilter.value : "all";

  return products.filter((product) => {
    const searchable = `${product.name} ${product.material} ${product.color} ${product.description}`.toLowerCase();
    const matchesSearch = !query || searchable.includes(query);
    const matchesMaterial = material === "all" || product.material === material;
    const matchesCategory = !activeStoreCategory || product.category === activeStoreCategory;
    const matchesSubcategory = !activeStoreSubcategory || product.subcategory === activeStoreSubcategory;
    return matchesSearch && matchesMaterial && matchesCategory && matchesSubcategory;
  });
}

function subcategoryIconHtml(subcategory) {
  const [type, variant] = subcategory.icon.split(" ");

  if (type === "filament") {
    return `
      <div class="subsection-logo filament-subsection-logo ${variant}">
        <span class="roll-outer"></span>
        <span class="roll-inner"></span>
        <span class="roll-label">${subcategory.title.replace(" Filaments", "")}</span>
      </div>
    `;
  }

  if (type === "accessory") {
    return `
      <div class="subsection-logo accessory-subsection-logo ${variant}">
        <span class="accessory-disc"></span>
        <span class="accessory-stem"></span>
        <span class="accessory-label">${subcategory.title}</span>
      </div>
    `;
  }

  return `
    <div class="subsection-logo printer-subsection-logo ${variant}">
      <span class="printer-shell"></span>
      <span class="printer-window"></span>
      <span class="printer-model"></span>
      <span class="printer-label">${subcategory.title}</span>
    </div>
  `;
}

function setSubcategory(index, direction = 1) {
  const subcategories = subcategoryGroups[activeStoreCategory] || [];
  if (!subcategories.length) return;

  activeSubcategoryIndex = (index + subcategories.length) % subcategories.length;
  activeStoreSubcategory = null;
  renderSubcategories(direction);
}

function moveSubcategory(direction) {
  setSubcategory(activeSubcategoryIndex + direction, direction);
}

function renderSubcategories(direction = 1) {
  if (!printerSubcategoryPanel || !printerSubcategoryGrid) return;

  const subcategories = subcategoryGroups[activeStoreCategory] || [];
  printerSubcategoryPanel.hidden = !subcategories.length;

  if (!subcategories.length) {
    activeStoreSubcategory = null;
    return;
  }

  const activeSubcategory = subcategories[activeSubcategoryIndex];
  if (printerSubcategoryLabel) {
    printerSubcategoryLabel.textContent = `${activeSubcategoryIndex + 1} of ${subcategories.length}`;
  }
  if (subcategoryDeckTitle) subcategoryDeckTitle.textContent = `${categoryLabel(activeStoreCategory)} sections`;
  if (selectSubcategory) selectSubcategory.textContent = `View ${activeSubcategory.title}`;

  printerSubcategoryGrid.style.setProperty("--slide-in", direction > 0 ? "120px" : "-120px");
  printerSubcategoryGrid.innerHTML = `
    <div class="subcategory-copy">
      <p class="eyebrow">${categoryLabel(activeStoreCategory)}</p>
      <h3>${activeSubcategory.title}</h3>
      <p class="muted">${activeSubcategory.description}</p>
    </div>
    <div class="subcategory-floating-icon" aria-hidden="true">
      ${subcategoryIconHtml(activeSubcategory)}
    </div>
  `;
}

function renderProducts() {
  if (!productGrid || !productCount || !shopTitle) return;

  const activeCategoryData = categories.find((category) => category.category === activeStoreCategory);
  const activeSubcategoryData = (subcategoryGroups[activeStoreCategory] || []).find((subcategory) => subcategory.key === activeStoreSubcategory);
  shopTitle.textContent = activeSubcategoryData ? activeSubcategoryData.title : activeCategoryData ? activeCategoryData.title : "Forge3D stock";
  renderSubcategories();

  if ((subcategoryGroups[activeStoreCategory] || []).length && !activeStoreSubcategory) {
    productCount.textContent = "Choose a section first";
    productGrid.innerHTML = `<div class="empty-state">Select a ${activeCategoryData.title.toLowerCase()} section above to view available products.</div>`;
    return;
  }

  const visibleProducts = filteredProducts().sort((a, b) => (a.popularity || 99) - (b.popularity || 99));
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
  if (transitionLocked || !storeTransition) return;

  const category = categories[activeCategory];
  transitionLocked = true;
  document.body.classList.add("transitioning");
  storeTransition.classList.add("active");

  window.setTimeout(() => {
    activeStoreCategory = category.category;
    activeStoreSubcategory = null;
    activeSubcategoryIndex = 0;
    document.body.classList.remove("landing-mode");
    document.body.classList.add("store-mode");
    document.body.classList.remove("transitioning");
    if (searchInput) searchInput.value = "";
    if (materialFilter) materialFilter.value = "all";
    renderProducts();
    document.querySelector(`#${target}`)?.scrollIntoView({ behavior: "auto", block: "start" });

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
  activeStoreSubcategory = null;
  activeSubcategoryIndex = 0;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openStoreDirect(target = "shop") {
  document.body.classList.remove("landing-mode");
  document.body.classList.add("store-mode");
  activeStoreCategory = null;
  activeStoreSubcategory = null;
  activeSubcategoryIndex = 0;
  renderProducts();
  document.querySelector(`#${target}`)?.scrollIntoView({ behavior: "auto", block: "start" });
}

function renderCart() {
  if (!cartItems && !cartTotal) return;

  if (!cart.length) {
    if (cartItems) cartItems.innerHTML = `<div class="empty-state">Your cart is empty. Add an item from the shop above.</div>`;
    if (cartTotal) cartTotal.textContent = formatPrice(0);
    return;
  }

  if (cartItems) cartItems.innerHTML = cart.map((item) => `
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
  if (cartTotal) cartTotal.textContent = formatPrice(total);
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

productGrid?.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  if (addButton) addToCart(addButton.dataset.add);
});

selectSubcategory?.addEventListener("click", () => {
  const subcategories = subcategoryGroups[activeStoreCategory] || [];
  const selected = subcategories[activeSubcategoryIndex];
  if (!selected) return;

  activeStoreSubcategory = selected.key;
  renderProducts();
  document.querySelector("#shop")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

subcategoryPrev?.addEventListener("click", () => moveSubcategory(-1));
subcategoryNext?.addEventListener("click", () => moveSubcategory(1));

cartItems?.addEventListener("click", (event) => {
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

clearCartBtn?.addEventListener("click", () => {
  cart = [];
  saveCart();
  renderCart();
});

productForm?.addEventListener("submit", addProduct);
shippingForm?.addEventListener("submit", submitOrder);
searchInput?.addEventListener("input", renderProducts);
materialFilter?.addEventListener("change", renderProducts);
themeToggle?.addEventListener("click", () => {
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
musicToggle?.addEventListener("click", () => setMusicMuted(!musicMuted));
categoryPrev?.addEventListener("click", () => moveCategory(-1));
categoryNext?.addEventListener("click", () => moveCategory(1));
categoryDots?.addEventListener("click", (event) => {
  const dot = event.target.closest("[data-category]");
  if (!dot) return;

  const nextIndex = Number(dot.dataset.category);
  const direction = nextIndex > activeCategory ? 1 : -1;
  setCategory(nextIndex, direction);
});
categoryCta?.addEventListener("click", (event) => {
  event.preventDefault();
  enterStore("shop");
});
categoryAddCta?.addEventListener("click", (event) => {
  event.preventDefault();
  enterStore("add-product");
});
categoryIcon?.addEventListener("click", () => enterStore("shop"));
backToCategories?.addEventListener("click", (event) => {
  event.preventDefault();
  enterLanding();
});

applyTheme(localStorage.getItem("forge3d-theme") || "dark");
setMusicMuted(musicMuted);
playBackgroundMusic();
renderCategoryDots();
renderProducts();
renderCart();

if (categoryHero && ["#shop", "#add-product"].includes(window.location.hash)) {
  openStoreDirect(window.location.hash.slice(1));
}
