
"use strict";

/*
  Asma ul Husna
  Verify the complete list and translations with reliable Islamic references
  before publishing this educational website.
*/

const names = [
  ["الرَّحْمَٰنُ", "Ar-Rahman", "The Most Merciful"],
  ["الرَّحِيمُ", "Ar-Raheem", "The Especially Merciful"],
  ["الْمَلِكُ", "Al-Malik", "The King"],
  ["الْقُدُّوسُ", "Al-Quddus", "The Most Holy"],
  ["السَّلَامُ", "As-Salam", "The Source of Peace"],
  ["الْمُؤْمِنُ", "Al-Mu'min", "The Giver of Security"],
  ["الْمُهَيْمِنُ", "Al-Muhaymin", "The Guardian"],
  ["الْعَزِيزُ", "Al-Aziz", "The Almighty"],
  ["الْجَبَّارُ", "Al-Jabbar", "The Compeller"],
  ["الْمُتَكَبِّرُ", "Al-Mutakabbir", "The Supremely Great"],
  ["الْخَالِقُ", "Al-Khaliq", "The Creator"],
  ["الْبَارِئُ", "Al-Bari", "The Originator"],
  ["الْمُصَوِّرُ", "Al-Musawwir", "The Fashioner"],
  ["الْغَفَّارُ", "Al-Ghaffar", "The Constant Forgiver"],
  ["الْقَهَّارُ", "Al-Qahhar", "The All-Prevailing"],
  ["الْوَهَّابُ", "Al-Wahhab", "The Bestower"],
  ["الرَّزَّاقُ", "Ar-Razzaq", "The Provider"],
  ["الْفَتَّاحُ", "Al-Fattah", "The Opener"],
  ["الْعَلِيمُ", "Al-Alim", "The All-Knowing"],
  ["الْقَابِضُ", "Al-Qabid", "The Withholder"],
  ["الْبَاسِطُ", "Al-Basit", "The Expander"],
  ["الْخَافِضُ", "Al-Khafid", "The One Who Lowers"],
  ["الرَّافِعُ", "Ar-Rafi", "The One Who Raises"],
  ["الْمُعِزُّ", "Al-Mu'izz", "The Giver of Honour"],
  ["الْمُذِلُّ", "Al-Mudhill", "The One Who Humbles"],
  ["السَّمِيعُ", "As-Sami", "The All-Hearing"],
  ["الْبَصِيرُ", "Al-Basir", "The All-Seeing"],
  ["الْحَكَمُ", "Al-Hakam", "The Judge"],
  ["الْعَدْلُ", "Al-Adl", "The Utterly Just"],
  ["اللَّطِيفُ", "Al-Latif", "The Most Subtle and Kind"],
  ["الْخَبِيرُ", "Al-Khabir", "The All-Aware"],
  ["الْحَلِيمُ", "Al-Halim", "The Most Forbearing"],
  ["الْعَظِيمُ", "Al-Azim", "The Magnificent"],
  ["الْغَفُورُ", "Al-Ghafur", "The Most Forgiving"],
  ["الشَّكُورُ", "Ash-Shakur", "The Most Appreciative"],
  ["الْعَلِيُّ", "Al-Aliyy", "The Most High"],
  ["الْكَبِيرُ", "Al-Kabir", "The Most Great"],
  ["الْحَفِيظُ", "Al-Hafiz", "The Preserver"],
  ["الْمُقِيتُ", "Al-Muqit", "The Sustainer"],
  ["الْحَسِيبُ", "Al-Hasib", "The Reckoner"],
  ["الْجَلِيلُ", "Al-Jalil", "The Majestic"],
  ["الْكَرِيمُ", "Al-Karim", "The Most Generous"],
  ["الرَّقِيبُ", "Ar-Raqib", "The Watchful"],
  ["الْمُجِيبُ", "Al-Mujib", "The One Who Responds"],
  ["الْوَاسِعُ", "Al-Wasi", "The All-Encompassing"],
  ["الْحَكِيمُ", "Al-Hakim", "The All-Wise"],
  ["الْوَدُودُ", "Al-Wadud", "The Most Loving"],
  ["الْمَجِيدُ", "Al-Majid", "The Most Glorious"],
  ["الْبَاعِثُ", "Al-Ba'ith", "The Resurrector"],
  ["الشَّهِيدُ", "Ash-Shahid", "The Witness"],
  ["الْحَقُّ", "Al-Haqq", "The Absolute Truth"],
  ["الْوَكِيلُ", "Al-Wakil", "The Trustee"],
  ["الْقَوِيُّ", "Al-Qawiyy", "The All-Strong"],
  ["الْمَتِينُ", "Al-Matin", "The Firm"],
  ["الْوَلِيُّ", "Al-Waliyy", "The Protecting Friend"],
  ["الْحَمِيدُ", "Al-Hamid", "The Praiseworthy"],
  ["الْمُحْصِي", "Al-Muhsi", "The One Who Counts All"],
  ["الْمُبْدِئُ", "Al-Mubdi", "The Initiator"],
  ["الْمُعِيدُ", "Al-Mu'id", "The Restorer"],
  ["الْمُحْيِي", "Al-Muhyi", "The Giver of Life"],
  ["الْمُمِيتُ", "Al-Mumit", "The Bringer of Death"],
  ["الْحَيُّ", "Al-Hayy", "The Ever-Living"],
  ["الْقَيُّومُ", "Al-Qayyum", "The Self-Subsisting Sustainer"],
  ["الْوَاجِدُ", "Al-Wajid", "The Finder"],
  ["الْمَاجِدُ", "Al-Maajid", "The Noble and Glorious"],
  ["الْوَاحِدُ", "Al-Wahid", "The One"],
  ["الْأَحَدُ", "Al-Ahad", "The One and Only"],
  ["الصَّمَدُ", "As-Samad", "The Eternal Refuge"],
  ["الْقَادِرُ", "Al-Qadir", "The All-Powerful"],
  ["الْمُقْتَدِرُ", "Al-Muqtadir", "The Omnipotent"],
  ["الْمُقَدِّمُ", "Al-Muqaddim", "The One Who Brings Forward"],
  ["الْمُؤَخِّرُ", "Al-Mu'akhkhir", "The One Who Puts Back"],
  ["الْأَوَّلُ", "Al-Awwal", "The First"],
  ["الْآخِرُ", "Al-Akhir", "The Last"],
  ["الظَّاهِرُ", "Az-Zahir", "The Manifest"],
  ["الْبَاطِنُ", "Al-Batin", "The Most Hidden"],
  ["الْوَالِي", "Al-Wali", "The Governor"],
  ["الْمُتَعَالِي", "Al-Muta'ali", "The Most Exalted"],
  ["الْبَرُّ", "Al-Barr", "The Source of Goodness"],
  ["التَّوَّابُ", "At-Tawwab", "The Accepter of Repentance"],
  ["الْمُنْتَقِمُ", "Al-Muntaqim", "The Just Requiter"],
  ["الْعَفُوُّ", "Al-Afuww", "The Pardoner"],
  ["الرَّؤُوفُ", "Ar-Ra'uf", "The Most Kind"],
  ["مَالِكُ الْمُلْكِ", "Malik-ul-Mulk", "The Owner of All Sovereignty"],
  ["ذُو الْجَلَالِ وَالْإِكْرَامِ", "Dhul-Jalali wal-Ikram", "The Lord of Majesty and Honour"],
  ["الْمُقْسِطُ", "Al-Muqsit", "The Equitable"],
  ["الْجَامِعُ", "Al-Jami", "The Gatherer"],
  ["الْغَنِيُّ", "Al-Ghaniyy", "The Self-Sufficient"],
  ["الْمُغْنِي", "Al-Mughni", "The Enricher"],
  ["الْمَانِعُ", "Al-Mani", "The Withholder"],
  ["الضَّارُّ", "Ad-Darr", "The One Who Allows Adversity"],
  ["النَّافِعُ", "An-Nafi", "The Giver of Benefit"],
  ["النُّورُ", "An-Nur", "The Light"],
  ["الْهَادِي", "Al-Hadi", "The Guide"],
  ["الْبَدِيعُ", "Al-Badi", "The Incomparable Originator"],
  ["الْبَاقِي", "Al-Baqi", "The Everlasting"],
  ["الْوَارِثُ", "Al-Warith", "The Inheritor"],
  ["الرَّشِيدُ", "Ar-Rashid", "The Guide to the Right Path"],
  ["الصَّبُورُ", "As-Sabur", "The Most Patient"]
];

const palettes = [
  ["#f5dfe7", "#783b55"],
  ["#e7def5", "#594178"],
  ["#dceaf8", "#315b82"],
  ["#f8e6c9", "#80551e"],
  ["#f8ded9", "#88463e"],
  ["#e0eee3", "#37694c"],
  ["#f1e1ee", "#79486d"],
  ["#e2e5fa", "#454f8c"],
  ["#f5e8d7", "#805a37"],
  ["#e4edf0", "#3e626d"],
  ["#f6dfe0", "#853e52"],
  ["#e9e0d2", "#765d3e"]
];

const STORAGE_KEYS = {
  favourites: "asmaUlHusna.favourites.v1",
  learned: "asmaUlHusna.learned.v1",
  theme: "asmaUlHusna.theme.v1"
};

const $ = selector => document.querySelector(selector);

const grid = $("#namesGrid");
const searchInput = $("#searchInput");
const resultsCount = $("#resultsCount");
const noResults = $("#noResults");
const toast = $("#toast");

let activeFilter = "all";
let meaningsHidden = false;
let toastTimer;
let toastVersion = 0;

function loadSet(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return new Set(
      Array.isArray(value)
        ? value.filter(n => Number.isInteger(n) && n >= 1 && n <= names.length)
        : []
    );
  } catch {
    return new Set();
  }
}

let favourites = loadSet(STORAGE_KEYS.favourites);
let learned = loadSet(STORAGE_KEYS.learned);

function saveSet(key, set) {
  try {
    localStorage.setItem(key, JSON.stringify([...set]));
  } catch {
    showToast("Your browser could not save this preference.");
  }
}

function showToast(message) {
  const version = ++toastVersion;
  clearTimeout(toastTimer);

  toast.textContent = message;
  toast.classList.add("visible");

  toastTimer = setTimeout(() => {
    if (version === toastVersion) {
      toast.classList.remove("visible");
    }
  }, 2200);
}

function createCard(name, index) {
  const [arabic, transliteration, meaning] = name;
  const number = index + 1;
  const [background, foreground] = palettes[index % palettes.length];

  const column = document.createElement("div");
  column.className = "col-6 col-lg-4 col-xl-3 name-card-wrap";
  column.style.animationDelay = `${Math.min(index % 8, 7) * 35}ms`;

  const card = document.createElement("article");
  card.className = "name-card";
  card.style.setProperty("--card-bg", background);
  card.style.setProperty("--card-ink", foreground);

  const numberLabel = document.createElement("span");
  numberLabel.className = "name-number";
  numberLabel.textContent = String(number).padStart(2, "0");

  const arabicLabel = document.createElement("p");
  arabicLabel.className = "arabic-name";
  arabicLabel.lang = "ar";
  arabicLabel.dir = "rtl";
  arabicLabel.textContent = arabic;

  const nameLabel = document.createElement("h3");
  nameLabel.className = "transliteration";
  nameLabel.textContent = transliteration;

  const meaningLabel = document.createElement("p");
  meaningLabel.className = "name-meaning";
  meaningLabel.textContent = meaning;

  if (meaningsHidden) {
    meaningLabel.classList.add("hidden-meaning");
  }

  const reveal = document.createElement("button");
  reveal.className = "meaning-toggle";
  reveal.type = "button";
  reveal.textContent = meaningsHidden ? "Reveal meaning" : "Hide meaning";
  reveal.setAttribute("aria-expanded", String(!meaningsHidden));

  reveal.addEventListener("click", () => {
    const hidden = meaningLabel.classList.toggle("hidden-meaning");
    reveal.textContent = hidden ? "Reveal meaning" : "Hide meaning";
    reveal.setAttribute("aria-expanded", String(!hidden));
  });

  const actions = document.createElement("div");
  actions.className = "card-actions";

  const favouriteButton = document.createElement("button");
  favouriteButton.type = "button";
  favouriteButton.className = "card-action";
  favouriteButton.dataset.action = "favourite";
  favouriteButton.dataset.id = String(number);
  favouriteButton.setAttribute("aria-pressed", String(favourites.has(number)));
  favouriteButton.setAttribute(
    "aria-label",
    `${favourites.has(number) ? "Remove" : "Add"} ${transliteration} ${favourites.has(number) ? "from" : "to"} favourites`
  );
  favouriteButton.textContent = favourites.has(number) ? "♥ Saved" : "♡ Save";

  if (favourites.has(number)) {
    favouriteButton.classList.add("is-active");
  }

  const learnedButton = document.createElement("button");
  learnedButton.type = "button";
  learnedButton.className = "card-action";
  learnedButton.dataset.action = "learned";
  learnedButton.dataset.id = String(number);
  learnedButton.setAttribute("aria-pressed", String(learned.has(number)));
  learnedButton.textContent = learned.has(number) ? "✓ Learned" : "○ Learned";

  if (learned.has(number)) {
    learnedButton.classList.add("is-active");
  }

  actions.append(favouriteButton, learnedButton);
  card.append(numberLabel, arabicLabel, nameLabel, meaningLabel, reveal, actions);
  column.appendChild(card);

  return column;
}



function renderNames() {
  const query = searchInput.value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");

  const fragment = document.createDocumentFragment();
  let visibleCount = 0;

  names.forEach((name, index) => {
    const [arabic, transliteration, meaning] = name;

    // Keep the original numbering: 1, 2, 3 ... 99
    const id = index + 1;

    if (activeFilter === "favourites" && !favourites.has(id)) return;
    if (activeFilter === "learned" && !learned.has(id)) return;

    const searchText =
      `${arabic} ${transliteration} ${meaning}`.toLowerCase();

    const matchesNumber = String(id) === query;
    const matchesName = searchText.includes(query);

    if (query && !matchesNumber && !matchesName) return;

    fragment.appendChild(createCard(name, index));
    visibleCount++;
  });

  grid.replaceChildren(fragment);

  resultsCount.textContent =
    `Showing ${visibleCount} of ${names.length} names`;

  noResults.hidden = visibleCount !== 0;
}


function updateDailyName() {
  const dayIndex = Math.floor(Date.now() / 86400000) % names.length;
  const [arabic, transliteration, meaning] = names[dayIndex];

  $("#dailyName").textContent = `${arabic} — ${transliteration}`;
  $("#dailyName").lang = "ar";
  $("#dailyMeaning").textContent = meaning;

  $("#showDaily").onclick = () => {
    searchInput.value = transliteration;
    activeFilter = "all";

    document.querySelectorAll(".filter-button").forEach(button => {
      const active = button.dataset.filter === "all";
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    renderNames();
    $("#names").scrollIntoView({ behavior: "smooth" });
  };
}

searchInput.addEventListener("input", renderNames);

$("#clearSearch").addEventListener("click", () => {
  searchInput.value = "";
  renderNames();
  searchInput.focus();
});

document.querySelectorAll(".filter-button").forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;

    document.querySelectorAll(".filter-button").forEach(item => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    renderNames();
  });
});

grid.addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const id = Number(button.dataset.id);
  if (!Number.isInteger(id) || id < 1 || id > names.length) return;

  if (button.dataset.action === "favourite") {
    if (favourites.has(id)) {
      favourites.delete(id);
      showToast("Removed from favourites");
    } else {
      favourites.add(id);
      showToast("Added to favourites ♡");
    }

    saveSet(STORAGE_KEYS.favourites, favourites);
    renderNames();
  }

  if (button.dataset.action === "learned") {
    if (learned.has(id)) {
      learned.delete(id);
      showToast("Moved back to your learning list");
    } else {
      learned.add(id);
      showToast("Marked as learned ✓");
    }

    saveSet(STORAGE_KEYS.learned, learned);
    renderNames();
  }
});

$("#memorizeToggle").addEventListener("click", event => {
  meaningsHidden = !meaningsHidden;
  event.currentTarget.textContent = meaningsHidden
    ? "Reveal meanings"
    : "Hide meanings";

  renderNames();
});

function setTheme(theme) {
  const isDark = theme === "dark";

  document.body.classList.toggle("dark-theme", isDark);
  $("#themeToggle").textContent = isDark ? "☀ Light theme" : "☾ Dark theme";
  $("#themeToggle").setAttribute("aria-pressed", String(isDark));

  try {
    localStorage.setItem(STORAGE_KEYS.theme, theme);
  } catch {
    // The theme still works for this page view.
  }
}

$("#themeToggle").addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark-theme");
  setTheme(isDark ? "light" : "dark");
});

let savedTheme = "light";

try {
  savedTheme = localStorage.getItem(STORAGE_KEYS.theme) || "light";
} catch {
  // Use the light theme if storage is unavailable.
}

setTheme(savedTheme === "dark" ? "dark" : "light");

const backToTop = $("#backToTop");

function updateBackToTop() {
  backToTop.classList.toggle("visible", window.scrollY > 450);
}

window.addEventListener("scroll", updateBackToTop, { passive: true });

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

updateBackToTop();
updateDailyName();
renderNames();

console.log("Total Names:", names.length);

if (names.length !== 99) {
  console.error(`Expected 99 names, but found ${names.length}.`);
}
