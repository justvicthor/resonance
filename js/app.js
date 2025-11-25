// ------- i18n dictionary -------
const translations = {
  it: {
    "brand.tagline": "Un visualizzatore molecolare 3D gratuito basato su JSmol",
    "theme.dark": "Tema scuro",
    "theme.light": "Tema chiaro",
    "hero.badge": "Interactive 3D chemistry",
    "hero.title": "Visualizza le tue molecole in 3D",
    "hero.subtitle":
      "Carica un file PDB o incolla il suo contenuto testuale per esplorare struttura, superficie e potenziale elettrostatico in tempo reale.",
    "hero.tag1": "Upload o incolla PDB",
    "hero.tag2": "Spin, superfici, zoom",
    "hero.tag3": "Mappa di potenziale (EPM)",
    "hero.tag4": "Light & dark mode",
    "upload.fileTitle": "Carica un file .pdb",
    "upload.dropTitle": "Trascina qui il file PDB",
    "upload.dropOr": " o clicca per selezionarlo",
    "upload.dropSubtitle":
      "Formati supportati: .pdb, .mol, .mol2.",
    "upload.badgeEmpty": "Nessun file selezionato",
    "upload.badgeSelected": "File selezionato:",
    "upload.textTitle": "Oppure incolla il contenuto PDB",
    "upload.textHint": "Funziona anche con PDB multi-modello",
    "upload.textPlaceholder":
      "Incolla qui l'intero contenuto del file .pdb…",
    "upload.textHintBottom":
      "Premi Ctrl / Cmd + Invio per caricare direttamente il testo.",
    "upload.loadButton": "Carica molecola",
    "upload.footerLegend":
      "JSmol supporta rotazione, zoom e menu contestuale (click destro).",
    "errors.noFile":
      "Seleziona un file .pdb oppure incolla il contenuto PDB prima di continuare.",
    "errors.wrongExtension":
      "Formato non valido: sono supportati solo .pdb, .mol e .mol2.",
    "errors.emptyText": "L'area di testo PDB è vuota.",
    "errors.jmolNotReady":
      "Il viewer JSmol non è ancora pronto. Riprova tra un istante.",
    "errors.noEpmGeneric":
      "Non è stato possibile calcolare un potenziale elettrostatico significativo per questa molecola.",
    "viewer.title": "Viewer 3D",
    "viewer.subtitleEmpty": "In attesa di una molecola PDB…",
    "viewer.subtitleLoaded": "Molecola caricata da sorgente locale",
    "viewer.placeholder":
      "Carica un file .pdb oppure incolla il testo PDB per iniziare a esplorare la molecola in 3D.",
    "viewer.chip1": "Mouse: trascina per ruotare",
    "viewer.chip2": "Scroll: zoom in / out",
    "viewer.legendLabel": "Scala EPM",
    "viewer.legendText":
      "rosso = più elettronegativo, verde ≈ neutro, blu = meno elettronegativo",
    "controls.spinOn": "Spin on",
    "controls.spinOff": "Spin off",
    "controls.surfaceOn": "Surface on",
    "controls.surfaceOff": "Surface off",
    "controls.epmOn": "EPM on",
    "controls.epmOff": "EPM off"
  },
  en: {
    "brand.tagline": "A free 3D molecule visualizer based on JSmol",
    "theme.dark": "Dark theme",
    "theme.light": "Light theme",
    "hero.badge": "Interactive 3D chemistry",
    "hero.title": "Explore your molecules in 3D",
    "hero.subtitle":
      "Upload a PDB file or paste its text to explore structure, surfaces and electrostatic potential in real time.",
    "hero.tag1": "PDB upload & paste",
    "hero.tag2": "Spin, surfaces & zoom",
    "hero.tag3": "Electrostatic potential (EPM)",
    "hero.tag4": "Light & dark mode",
    "upload.fileTitle": "Upload a .pdb file",
    "upload.dropTitle": "Drop your PDB file here",
    "upload.dropOr": " or click to browse",
    "upload.dropSubtitle":
      "Supported formats: .pdb, .mol, .mol2.",
    "upload.badgeEmpty": "No file selected",
    "upload.badgeSelected": "Selected file:",
    "upload.textTitle": "Or paste the PDB contents",
    "upload.textHint": "Works with multi-model PDBs as well",
    "upload.textPlaceholder":
      "Paste the full contents of your .pdb file here…",
    "upload.textHintBottom":
      "Press Ctrl / Cmd + Enter to load the pasted text.",
    "upload.loadButton": "Load molecule",
    "upload.footerLegend":
      "JSmol supports rotation, zooming and a rich context menu (right-click).",
    "errors.noFile":
      "Please select a .pdb file or paste PDB text before continuing.",
    "errors.wrongExtension":
      "Invalid format: only .pdb, .mol and .mol2 files are supported.",
    "errors.emptyText": "The PDB text area is empty.",
    "errors.jmolNotReady":
      "The JSmol viewer is not ready yet. Please try again in a moment.",
    "errors.noEpmGeneric":
      "Could not compute a meaningful electrostatic potential for this molecule.",
    "viewer.title": "3D Viewer",
    "viewer.subtitleEmpty": "Waiting for a PDB molecule…",
    "viewer.subtitleLoaded": "Molecule loaded from local source",
    "viewer.placeholder":
      "Upload a .pdb file or paste PDB text to start exploring the molecule in 3D.",
    "viewer.chip1": "Mouse: drag to rotate",
    "viewer.chip2": "Scroll: zoom in / out",
    "viewer.legendLabel": "EPM scale",
    "viewer.legendText":
      "red = more electronegative, green ≈ neutral, blue = less electronegative",
    "controls.spinOn": "Spin on",
    "controls.spinOff": "Spin off",
    "controls.surfaceOn": "Surface on",
    "controls.surfaceOff": "Surface off",
    "controls.epmOn": "EPM on",
    "controls.epmOff": "EPM off"
  }
};

let currentLang = "it";

function applyTranslations() {
  const dict = translations[currentLang];
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    const themeKey =
      document.body.dataset.theme === "dark" ? "theme.dark" : "theme.light";
    themeToggle.setAttribute("aria-label", dict[themeKey]);
  }

  updateControlLabels();
  updateFileBadge();
  updateViewerSubtitle();
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document
    .querySelectorAll("#lang-switch button")
    .forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
  applyTranslations();
}

// ------- theme handling -------
function initTheme() {
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  document.body.dataset.theme = prefersDark ? "dark" : "light";

  const icon = document.getElementById("theme-icon");
  if (!icon) return;

  if (document.body.dataset.theme === "dark") {
    icon.textContent = "☾";
  } else {
    icon.textContent = "☀";
  }
}

function toggleTheme() {
  const isDark = document.body.dataset.theme === "dark";
  document.body.dataset.theme = isDark ? "light" : "dark";

  const icon = document.getElementById("theme-icon");
  if (!icon) return;

  if (document.body.dataset.theme === "dark") {
    icon.textContent = "☾";
  } else {
    icon.textContent = "☀";
  }
}

// ------- JSmol setup -------
let jmolApplet = null;
let jmolReady = false;
let spinOn = false;
let surfaceOn = false;
let epmOn = false;
let lastFileName = "";

// (non usato ma tienilo se vuoi riutilizzarlo)
const BALL_AND_STICK_SCRIPT = [
  "set autoBond true;",
  "connect;",
  "select all;",
  "wireframe 0.28;",
  "spacefill 23%;",
  "color cpk;"
].join(" ");

function initJmol() {
  if (!window.Jmol) {
    console.error("JSmol non è stato caricato correttamente.");
    return;
  }

  // Evita l'uso di document.write
  Jmol.setDocument(0);

  const Info = {
    width: "100%",
    height: "100%",
    debug: false,
    color: "0x000000",
    addSelectionOptions: false,
    use: "HTML5",
    j2sPath: "https://chemapps.stolaf.edu/jmol/jsmol/j2s",
    serverURL: "https://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php",
    script:
      "set antialiasDisplay true; " +
      "set zoomLarge false; " +
      "background [2,6,23]; " +
      "select *; wireframe 0.15; spacefill 23%;",
    disableInitialConsole: true,
    readyFunction: function () {
      jmolReady = true;
    }
  };

  jmolApplet = Jmol.getApplet("jsmolApplet", Info);

  const container = document.getElementById("jsmol-container");
  if (container) {
    container.innerHTML = Jmol.getAppletHtml(jmolApplet);
  }
}

// ------- UI helpers -------
function showError(key) {
  const banner = document.getElementById("error-banner");
  if (!banner) return;
  const dict = translations[currentLang];
  banner.textContent = dict["errors." + key] || key;
  banner.classList.add("visible");
}

function clearError() {
  const banner = document.getElementById("error-banner");
  if (!banner) return;
  banner.textContent = "";
  banner.classList.remove("visible");
}

function updateFileBadge() {
  const badge = document.getElementById("file-name-badge");
  if (!badge) return;
  const dict = translations[currentLang];
  if (!lastFileName) {
    badge.textContent = dict["upload.badgeEmpty"];
  } else {
    badge.textContent =
      dict["upload.badgeSelected"] + " " + lastFileName;
  }
}

function updateViewerSubtitle() {
  const el = document.getElementById("viewer-subtitle");
  if (!el) return;
  const dict = translations[currentLang];
  const key =
    lastFileName || epmOn || surfaceOn || spinOn
      ? "viewer.subtitleLoaded"
      : "viewer.subtitleEmpty";
  el.textContent = dict[key];
}

function updateControlLabels() {
  const dict = translations[currentLang];
  const spinLabel = document.querySelector("#spin-toggle [data-i18n]");
  const surfLabel = document.querySelector("#surface-toggle [data-i18n]");
  const epmLabel = document.querySelector("#epm-toggle [data-i18n]");
  if (spinLabel) {
    spinLabel.textContent = dict[spinOn ? "controls.spinOn" : "controls.spinOff"];
  }
  if (surfLabel) {
    surfLabel.textContent = dict[surfaceOn ? "controls.surfaceOn" : "controls.surfaceOff"];
  }
  if (epmLabel) {
    epmLabel.textContent = dict[epmOn ? "controls.epmOn" : "controls.epmOff"];
  }
}

function setPlaceholderVisible(visible) {
  const ph = document.getElementById("viewer-placeholder");
  if (!ph) return;
  ph.style.display = visible ? "flex" : "none";
}

// ------- molecule loading -------
function sanitizeForDataBlock(text) {
  // normalizza le newline e rimuove spazi superflui
  return text
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim();
}

function loadPdbFromText(rawText, sourceLabel, formatHint) {
  if (!jmolReady || !jmolApplet) {
    showError("jmolNotReady");
    return;
  }
  if (!rawText || !rawText.trim()) {
    showError("emptyText");
    return;
  }

  clearError();

  const sanitized = sanitizeForDataBlock(rawText);

  const isMol = formatHint === "mol";
  const isPdb = formatHint === "pdb";
  const isMol2 = formatHint === "mol2";

  // Per i .mol aggiungiamo FILTER "2D" per ricostruire una geometria 3D
  const loadCommand = isMol
    ? 'load DATA "inline"\n' + sanitized + '\nEND "inline" FILTER "2D"; '
    : 'load DATA "inline"\n' + sanitized + '\nEND "inline"; ';

  // Per PDB/MOL2 chiediamo autobond + connect; per MOL usiamo i bond espliciti
  const bondCommand = isPdb || isMol2 ? "set autoBond true; connect; " : "";

  const script =
    "reset; set antialiasDisplay true; set zoomLarge false; background [2,6,23]; " +
    loadCommand +
    bondCommand +
    "select all; " +
    "color cpk; " +
    "spacefill 23%; " +
    "wireframe 0.15; " +
    "spin off; dots off; isosurface off;";

  Jmol.script(jmolApplet, script);

  // --- aggiornamento UI ---
  lastFileName = sourceLabel || "";
  setPlaceholderVisible(false);

  spinOn = false;
  surfaceOn = false;
  epmOn = false;
  document
    .querySelectorAll(".toggle-btn")
    .forEach((btn) => btn.classList.remove("active"));
  updateControlLabels();
  updateViewerSubtitle();
}

function handleFileSelected(file) {
  if (!file) return;

  const name = file.name.toLowerCase();
  const isPdb = name.endsWith(".pdb");
  const isMol2 = name.endsWith(".mol2");
  const isMol = name.endsWith(".mol");

  const isAllowed = isPdb || isMol || isMol2;

  if (!isAllowed) {
    showError("wrongExtension");
    lastFileName = "";
    updateFileBadge();
    return;
  }
  clearError();

  const formatHint = isPdb ? "pdb" : isMol2 ? "mol2" : "mol";

  const reader = new FileReader();
  reader.onload = (e) => {
    const text = e.target.result;
    lastFileName = file.name;
    loadPdbFromText(text, file.name, formatHint);
    updateFileBadge();
  };
  reader.readAsText(file);
}

// ------- controls -------
function toggleSpin() {
  if (!jmolReady || !jmolApplet) {
    showError("jmolNotReady");
    return;
  }
  spinOn = !spinOn;
  if (spinOn) {
    Jmol.script(jmolApplet, "spin y 30;");
    document.getElementById("spin-toggle").classList.add("active");
  } else {
    Jmol.script(jmolApplet, "spin off;");
    document.getElementById("spin-toggle").classList.remove("active");
  }
  updateControlLabels();
  updateViewerSubtitle();
}

function toggleSurface() {
  if (!jmolReady || !jmolApplet) {
    showError("jmolNotReady");
    return;
  }
  surfaceOn = !surfaceOn;
  if (surfaceOn) {
    const script =
      "set solvent on; dots on; set dotScale 1.5; color dots yellow;";
    Jmol.script(jmolApplet, script);
    document.getElementById("surface-toggle").classList.add("active");
  } else {
    Jmol.script(jmolApplet, "dots off;");
    document.getElementById("surface-toggle").classList.remove("active");
  }
  updateControlLabels();
  updateViewerSubtitle();
}

function getMaxPartialChargeAbs() {
  let v = parseFloat(
    Jmol.evaluate(jmolApplet, "abs({*}.partialcharge.max)")
  );
  if (isNaN(v)) {
    v = parseFloat(
      Jmol.evaluate(jmolApplet, "abs({*}.partialCharge.max)")
    );
  }
  return v;
}

function toggleEpm() {
  if (!jmolReady || !jmolApplet) {
    showError("jmolNotReady");
    return;
  }

  const btn = document.getElementById("epm-toggle");

  if (!epmOn) {
    clearError();

    // calcola le cariche parziali (MMFF94) se possibile
    Jmol.script(jmolApplet, "select *; calculate partialcharge;");

    const maxAbs = getMaxPartialChargeAbs();
    if (isNaN(maxAbs) || maxAbs < 1e-4) {
      showError("noEpmGeneric");
      epmOn = false;
      btn.classList.remove("active");
      updateControlLabels();
      return;
    }

    const epmScript =
      "isosurface delete; " +
      "isosurface epmSurface resolution 0 vdw " +
      "color range -0.07 0.07 map mep translucent 0.5;";

    Jmol.script(jmolApplet, epmScript);

    epmOn = true;
    btn.classList.add("active");
  } else {
    Jmol.script(jmolApplet, "isosurface epmSurface off;");
    epmOn = false;
    btn.classList.remove("active");
  }

  updateControlLabels();
  updateViewerSubtitle();
}

// ------- wiring events -------
document.addEventListener("DOMContentLoaded", () => {
  // Theme + i18n
  initTheme();
  applyTranslations();

  document
    .getElementById("theme-toggle")
    .addEventListener("click", () => {
      toggleTheme();
      applyTranslations();
    });

  document
    .querySelectorAll("#lang-switch button")
    .forEach((btn) =>
      btn.addEventListener("click", () => setLanguage(btn.dataset.lang))
    );

  // JSmol setup
  initJmol();

  // Upload controls
  const fileInput = document.getElementById("pdb-file-input");
  const dropArea = document.getElementById("file-drop-area");
  const loadButton = document.getElementById("load-button");
  const pdbTextarea = document.getElementById("pdb-textarea");

  dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    if (!e.dataTransfer.files.length) return;
    handleFileSelected(e.dataTransfer.files[0]);
  });

  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    handleFileSelected(file);
  });

  loadButton.addEventListener("click", () => {
    const text = pdbTextarea.value;
    if (text && text.trim()) {
      lastFileName = "";
      // testo incollato: assumiamo PDB
      loadPdbFromText(text, "", "pdb");
    } else if (fileInput.files[0]) {
      handleFileSelected(fileInput.files[0]);
    } else {
      showError("noFile");
    }
  });

  pdbTextarea.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      const text = pdbTextarea.value;
      if (!text || !text.trim()) {
        showError("emptyText");
        return;
      }
      lastFileName = "";
      // anche qui assumiamo PDB per il testo incollato
      loadPdbFromText(text, "", "pdb");
    }
  });

  // Viewer buttons
  document
    .getElementById("spin-toggle")
    .addEventListener("click", toggleSpin);
  document
    .getElementById("surface-toggle")
    .addEventListener("click", toggleSurface);
  document
    .getElementById("epm-toggle")
    .addEventListener("click", toggleEpm);
});
