// ------- i18n dictionary -------
const translations = {
  it: {
    "brand.tagline": "Un visualizzatore molecolare 3D gratuito basato su JSmol",
    "theme.dark": "Tema scuro",
    "theme.light": "Tema chiaro",
    "hero.badge": "Interactive 3D chemistry",
    "hero.title": "Visualizza le tue molecole in 3D",
    "hero.subtitle":
      "Carica un file o incolla il suo contenuto testuale per esplorarne struttura, superficie e potenziale elettrostatico in tempo reale.",
    "hero.tag1": "Upload o incolla PDB",
    "hero.tag2": "Spin, superfici, zoom",
    "hero.tag3": "Mappa di potenziale (EPM)",
    "hero.tag4": "Light & dark mode",
    "upload.fileTitle": "Carica un file",
    "upload.dropTitle": "Trascina qui il file",
    "upload.dropOr": " o clicca per selezionarlo",
    "upload.dropSubtitle":
      "Formati supportati: .pdb, .mol, .mol2.",
    "upload.badgeEmpty": "Nessun file selezionato",
    "upload.badgeSelected": "File selezionato:",
    "upload.textTitle": "Oppure incolla il contenuto del file",
    "upload.textHint": "Funziona anche con PDB multi-modello",
    "upload.textPlaceholder":
      "Incolla qui l'intero contenuto del file...",
    "upload.textHintBottom":
      "Premi Ctrl / Cmd + Invio per caricare direttamente il testo.",
    "upload.loadButton": "Carica molecola",
    "upload.footerLegend":
      "JSmol supporta rotazione, zoom e menu contestuale (click destro).",
    "errors.noFile":
      "Seleziona un file oppure incollane il contenuto prima di continuare.",
    "errors.wrongExtension":
      "Formato non valido: sono supportati solo .pdb, .mol e .mol2.",
    "errors.emptyText": "L'area di testo del file è vuota.",
    "errors.jmolNotReady":
      "Il viewer JSmol non è ancora pronto. Riprova tra un istante.",
    "errors.noEpmGeneric":
      "Non è stato possibile calcolare un potenziale elettrostatico significativo per questa molecola.",
    "viewer.title": "Viewer 3D",
    "viewer.subtitleEmpty": "In attesa di una molecola…",
    "viewer.subtitleLoaded": "Molecola caricata da sorgente locale",
    "viewer.placeholder":
      "Carica un file oppure incollane il testo per iniziare a esplorare la molecola in 3D.",
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
    "controls.epmOff": "EPM off",

    // --- AI translations (IT) ---
    "ai.title": "Ask Resonance AI",
    "ai.subtitle":
      "Fai domande sulla molecola caricata: legami, geometria, proprietà, farmacologia…",
    "ai.contextOn": "Usa il file caricato come contesto",
    "ai.placeholder":
      "Fai una domanda su questa molecola",
    "ai.send": "Invia",
    "ai.welcome":
      "Carica una molecola e chiedimi qualsiasi cosa su legami, geometria, proprietà fisico-chimiche o farmacologia.",
    "ai.disclaimer":
      "Le risposte sono a puro scopo informativo e non sostituiscono il parere di un esperto o le norme di sicurezza di laboratorio.",
    "ai.error":
      "C'è stato un errore nel contattare Resonance AI. Controlla la connessione o la chiave API e riprova.",
    "ai.thinking": "Sto pensando…"
  },
  en: {
    "brand.tagline": "A free 3D molecule visualizer based on JSmol",
    "theme.dark": "Dark theme",
    "theme.light": "Light theme",
    "hero.badge": "Interactive 3D chemistry",
    "hero.title": "Explore your molecules in 3D",
    "hero.subtitle":
      "Upload a file or paste its text to explore structure, surfaces and electrostatic potential in real time.",
    "hero.tag1": "File upload & paste",
    "hero.tag2": "Spin, surfaces & zoom",
    "hero.tag3": "Electrostatic potential (EPM)",
    "hero.tag4": "Light & dark mode",
    "upload.fileTitle": "Upload a file",
    "upload.dropTitle": "Drop your file here",
    "upload.dropOr": " or click to browse",
    "upload.dropSubtitle":
      "Supported formats: .pdb, .mol, .mol2.",
    "upload.badgeEmpty": "No file selected",
    "upload.badgeSelected": "Selected file:",
    "upload.textTitle": "Or paste the file contents",
    "upload.textHint": "Works with multi-model PDBs as well",
    "upload.textPlaceholder":
      "Paste the full contents of your file here…",
    "upload.textHintBottom":
      "Press Ctrl / Cmd + Enter to load the pasted text.",
    "upload.loadButton": "Load molecule",
    "upload.footerLegend":
      "JSmol supports rotation, zooming and a rich context menu (right-click).",
    "errors.noFile":
      "Please select a file or paste its text content before continuing.",
    "errors.wrongExtension":
      "Invalid format: only .pdb, .mol and .mol2 files are supported.",
    "errors.emptyText": "The file text area is empty.",
    "errors.jmolNotReady":
      "The JSmol viewer is not ready yet. Please try again in a moment.",
    "errors.noEpmGeneric":
      "Could not compute a meaningful electrostatic potential for this molecule.",
    "viewer.title": "3D Viewer",
    "viewer.subtitleEmpty": "Waiting for a molecule…",
    "viewer.subtitleLoaded": "Molecule loaded from local source",
    "viewer.placeholder":
      "Upload a file or paste its text content to start exploring the molecule in 3D.",
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
    "controls.epmOff": "EPM off",

    // --- AI translations (EN) ---
    "ai.title": "Ask Resonance AI",
    "ai.subtitle":
      "Ask questions about the loaded molecule: bonds, geometry, properties, pharmacology…",
    "ai.contextOn": "Uses the loaded file as context",
    "ai.placeholder":
      "Ask a question about this molecule",
    "ai.send": "Send",
    "ai.welcome":
      "Load a molecule and ask me anything about bonds, geometry, physico-chemical properties or pharmacology.",
    "ai.disclaimer":
      "Answers are for informational purposes only and do not replace experts advice or lab safety guidelines.",
    "ai.error":
      "There was an error contacting Resonance AI. Please check your connection or the API key and try again.",
    "ai.thinking": "Thinking…"
  }
};

let currentLang = "it";

// ------- Gemini / Resonance AI config -------
const MODEL = "gemini-2.5-flash-lite";
const API_BASE = "https://generativelanguage.googleapis.com/v1beta";
const API_KEY = "AIzaSyAoLnf8v6LiP4LwJUCZvIUd5fkHrP3_O58";

const SYSTEM_PROMPT = `
You are an AI assistant integrated into a 3D molecular visualization application.
Your role is to act as a top-level expert in:
- general, organic, inorganic, and physical chemistry
- computational chemistry and molecular modeling
- biochemistry and molecular biology
- pharmacology, pharmacokinetics, and pharmacodynamics
- drug design and medicinal chemistry
- structural biology: bonding, non-covalent interactions, protein/DNA structure, molecular dynamics

Your goal is to help the user understand what is “behind” the 3D structures they are viewing, including:
- the meaning of bonds, geometries, charges
- non-covalent interactions (hydrogen bonds, van der Waals, π–π stacking, electrostatics, hydrophobic effects, etc.)
- physico-chemical properties (pKa, logP, polarity, solubility, dipole moments, etc.)
- structure–activity relationships (SAR), mechanisms of action, biological targets, pharmacological effects
- connections to biology, physiology, and pathology when relevant

Input context from the app

The application lets the user upload or paste molecular structure files, including:
- .pdb files (e.g. proteins, nucleic acids, complexes)
- .mol and .mol2 files (small molecules, ligands, fragments, etc.)
- or the full text content of these files

You may receive:
- raw file text (PDB/MOL/MOL2 content)
- parsed information such as: atoms, bonds, residues, chains, coordinates, charges, connectivity, etc.
- optional metadata (molecule name, SMILES, formula, biological role, target, etc.)

Always use these data coherently and never invent structural details that cannot be inferred from the provided input.

Behaviour Rules
1. Expert role
- Answer as a very knowledgeable researcher/lecturer, but pedagogical and clear.
- Maintain scientific rigor while keeping explanations understandable.

2. Adapt the level of detail
- If the question is simple or basic, answer briefly and intuitively.
- If the question is advanced, you may use formalism, equations, and technical terms, explaining them when helpful.
- When useful, provide two layers of explanation: an intuitive/short one first, then a more detailed/technical one.

3. Always connect to the molecule/structure
- When the app provides a structure (PDB/MOL/MOL2 text or parsed data), use it to give specific, structure-based explanations.
- Explain how properties arise from:
  - bonding patterns, hybridization, geometry
  - functional groups and substituents
  - residue–residue or ligand–receptor interactions
  - non-covalent interactions visible or implied in the structure

4. Clarity and structure
- Organize answers with short paragraphs and bullet points where appropriate.
- Avoid unnecessary jargon; when you use technical terms, briefly explain them.
- For complex topics, end with a 2–3 sentence summary of the key idea.

5. Honesty and limits
- If you lack specific information (e.g. exact experimental values, precise pKa, IC50, rate constants), say so explicitly.
- Clearly distinguish between well-established facts, theoretical models, estimates, and hypotheses.

6. Safety and responsibility
- Do not provide step-by-step instructions for synthesizing dangerous, explosive, highly toxic, or illegal substances.
- Do not provide full experimental protocols for risky laboratory procedures.
- You may explain theoretical concepts and underlying chemistry/biology, but you must not guide the user in practical, hazardous experimentation.
- Do not provide personalized medical advice. You may explain mechanisms of action and general pharmacology, but refer users to a medical professional for clinical decisions.

7. Language
- Always reply in the same language used by the user (Italian, English, etc.), unless they clearly switch language.

8. Style
- Use a professional but friendly tone.
- Avoid being overly verbose unless the user explicitly asks for a very detailed explanation.
- Use concrete examples tied to the actual structure or file the user is working with whenever possible.
`;

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
let lastStructureText = ""; // testo del file caricato, usato come contesto per l'AI

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
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

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
  lastStructureText = sanitized; // aggiorna contesto per Resonance AI

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

// ------- Resonance AI: helpers -------
function setAiLoading(isLoading) {
  const btn = document.getElementById("ai-send-btn");
  const input = document.getElementById("ai-input");
  if (btn) btn.disabled = isLoading;
  if (input) input.disabled = isLoading;
  if (btn) {
    btn.classList.toggle("loading", isLoading);
  }
}

function appendAiMessage(role, text, options = {}) {
  const { markdown = false } = options;
  const container = document.getElementById("ai-messages");
  if (!container || !text) return;

  const wrapper = document.createElement("div");
  wrapper.className =
    "ai-message " + (role === "user" ? "ai-message-user" : "ai-message-model");

  const bubble = document.createElement("div");
  bubble.className = "ai-message-bubble";

  if (markdown && window.marked) {
    // Risposta del modello → renderizza markdown
    bubble.innerHTML = marked.parse(text);
  } else {
    // Messaggi utente o fallback → plain text
    bubble.textContent = text;
  }

  wrapper.appendChild(bubble);
  container.appendChild(wrapper);
  container.scrollTop = container.scrollHeight;

  return bubble;
}

async function sendAiMessage(rawText) {
  const text = (rawText || "").trim();
  if (!text) return;

  const dict = translations[currentLang];

  const input = document.getElementById("ai-input");
  if (input) input.value = "";

  // mostra il messaggio dell'utente
  appendAiMessage("user", text);

  // bubble temporanea "sto pensando..."
  const thinkingText = dict["ai.thinking"] || "Thinking…";
  const thinkingBubble = appendAiMessage("model", thinkingText);

  setAiLoading(true);

  const MAX_CONTEXT_CHARS = 15000;
  let structureSnippet = "";
  let contextIntro = "";

  if (lastStructureText && lastStructureText.trim()) {
    structureSnippet =
      lastStructureText.length > MAX_CONTEXT_CHARS
        ? lastStructureText.slice(0, MAX_CONTEXT_CHARS) +
          "\n\n[Context truncated for length]"
        : lastStructureText;

    contextIntro =
      currentLang === "it"
        ? "Di seguito trovi il testo della struttura molecolare caricata dall'app (PDB/MOL/MOL2). Usalo come contesto, senza inventare dettagli che non sono presenti nei dati:\n\n"
        : "Below is the molecular structure text loaded in the app (PDB/MOL/MOL2). Use it as context and do not invent structural details that are not supported by the data:\n\n";
  } else {
    contextIntro =
      currentLang === "it"
        ? "Al momento l'app non ti ha fornito nessun file o testo strutturale. Rispondi solo in base alla domanda e alla tua conoscenza generale.\n\n"
        : "Right now the app has not provided any structure file or text. Answer using only the question and your general knowledge.\n\n";
  }

  const langHint =
    currentLang === "it"
      ? "The user is interacting in Italian. Always answer in Italian unless the user clearly switches language."
      : "The user is interacting in English. Always answer in English unless the user clearly switches language.";

  const userPrompt =
    langHint +
    "\n\nUser question:\n" +
    text +
    "\n\n" +
    contextIntro +
    structureSnippet;

  try {
    const body = {
      systemInstruction: {
        role: "system",
        parts: [{ text: SYSTEM_PROMPT }]
      },
      contents: [
        {
          role: "user",
          parts: [{ text: userPrompt }]
        }
      ],
      generationConfig: {
        temperature: 0.5,
        top_p: 0.9,
        top_k: 40,
        maxOutputTokens: 1024
      }
    };

    const response = await fetch(
      `${API_BASE}/models/${MODEL}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": API_KEY
        },
        body: JSON.stringify(body)
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini API error:", response.status, data);
      const msg =
        (data && data.error && data.error.message) ||
        (data && data.promptFeedback && data.promptFeedback.blockReason) ||
        `HTTP ${response.status}`;
      throw new Error(msg);
    }

    let aiText = "";
    if (
      data.candidates &&
      data.candidates[0] &&
      data.candidates[0].content &&
      Array.isArray(data.candidates[0].content.parts)
    ) {
      aiText = data.candidates[0].content.parts
        .map((p) => p.text || "")
        .join("\n")
        .trim();
    }

    if (!aiText) {
      aiText =
        currentLang === "it"
          ? "Non sono riuscito a generare una risposta. Riprova tra qualche istante."
          : "I couldn’t generate a response. Please try again in a moment.";
    }

    if (thinkingBubble) {
      if (window.marked) {
        thinkingBubble.innerHTML = marked.parse(aiText);
      } else {
        thinkingBubble.textContent = aiText;
      }
    }
  } catch (err) {
    console.error("Resonance AI error:", err);
    if (thinkingBubble) {
      thinkingBubble.textContent =
        dict["ai.error"] ||
        (currentLang === "it"
          ? "C'è stato un errore nel contattare Resonance AI."
          : "There was an error contacting Resonance AI.");
    }
  } finally {
    setAiLoading(false);
    const container = document.getElementById("ai-messages");
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }
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
      updateFileBadge();
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
      updateFileBadge();
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

  // Resonance AI form
  const aiForm = document.getElementById("ai-form");
  const aiInput = document.getElementById("ai-input");

  if (aiForm && aiInput) {
    aiForm.addEventListener("submit", (e) => {
      e.preventDefault();
      sendAiMessage(aiInput.value);
    });

    aiInput.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        e.preventDefault();
        sendAiMessage(aiInput.value);
      }
    });
  }
});