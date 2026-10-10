/**
 * EthicalAI Perú — Motor de la Biblioteca Digital e Interactiva
 * Búsqueda reactiva, filtros multifaceta, exportación bibliográfica y accesibilidad
 */

(function () {
  let activeSearch = "";
  let activeCategory = "all";
  let activeType = "all";
  let activeSort = "default";
  let currentLang = localStorage.getItem("ethicalai_lang") || "es";

  const i18nLib = {
    es: {
      navHome: "Menú Principal",
      navPres1: "Presentación 01",
      navPres2: "Presentación 02",
      heroEyebrow: "Proyecto Erasmus+ 101179117 · IX Seminario Internacional UMCH",
      heroTitle: "Biblioteca Digital e Interactiva de Inteligencia Artificial",
      heroLead: "Repositorio integral con los 46 documentos especializados del corpus documental auditado, marcos de decisión internacional, directrices éticas y recursos del consorcio.",
      statDocs: "Documentos Auditados",
      statPages: "Páginas Analizadas",
      statWords: "Palabras Procesadas",
      statPartners: "Instituciones Socias",
      searchPlaceholder: "Buscar por título, autor, organismo, tema o palabras clave...",
      filterAll: "Todos",
      filterAdoption: "Adopción Universitaria",
      filterGovernance: "Gobernanza y Decisión",
      filterRisk: "Gestión de Riesgos",
      filterMaturity: "Madurez y Cultura",
      filterLiteracy: "Alfabetización en IA",
      filterEthics: "Ética y Derechos Humanos",
      filterAgentic: "IA Agéntica y Autonomía",
      filterSovereignty: "Soberanía e Infraestructura",
      filterPolicy: "Políticas y Regulación",
      typeAll: "Todos los tipos",
      typeReport: "Informes y Encuestas",
      typeFramework: "Marcos de Decisión",
      typeToolkit: "Toolkits y Guías",
      typeRegulation: "Regulaciones y Estándares",
      typePaper: "Papers y Artículos",
      sortDefault: "Orden recomendado",
      sortRecent: "Más recientes primero",
      sortPages: "Mayor extensión (páginas)",
      sortAlpha: "Alfabético (A-Z)",
      resultsCount: "Mostrando {n} de {total} recursos documentales",
      noResults: "No se encontraron documentos que coincidan con los filtros seleccionados.",
      btnReset: "Restablecer filtros",
      btnCopyApa: "Copiar APA 7",
      btnDetails: "Ver Ficha Completa",
      btnExportTxt: "Exportar APA 7 (.txt)",
      btnExportBib: "Exportar BibTeX (.bib)",
      copiedToast: "¡Cita copiada al portapapeles!",
      copiedBibToast: "¡BibTeX copiado al portapapeles!",
      tabCorpus: "Corpus Documental (46)",
      tabMultimedia: "Recursos y Presentaciones",
      modalTitle: "Ficha Técnica del Documento",
      modalSource: "Archivo en el corpus:",
      modalPages: "Páginas:",
      modalWords: "Palabras analizadas:",
      modalTakeaway: "Aporte clave para la Educación Superior:",
      modalApaLabel: "Cita en formato APA 7:",
      modalBibLabel: "Entrada BibTeX:",
      closeModal: "Cerrar",
      ccBtn: "Gestionar Licencia CC"
    },
    en: {
      navHome: "Main Hub",
      navPres1: "Presentation 01",
      navPres2: "Presentation 02",
      heroEyebrow: "Erasmus+ Project 101179117 · 9th UMCH International Seminar",
      heroTitle: "Digital & Interactive AI Library",
      heroLead: "Comprehensive repository of 46 audited specialist documents, international decision frameworks, ethical guidelines, and consortium materials.",
      statDocs: "Audited Documents",
      statPages: "Analyzed Pages",
      statWords: "Processed Words",
      statPartners: "Partner Institutions",
      searchPlaceholder: "Search by title, author, entity, topic, or keywords...",
      filterAll: "All",
      filterAdoption: "Higher Ed Adoption",
      filterGovernance: "Governance & Decisions",
      filterRisk: "Risk Management",
      filterMaturity: "Maturity & Culture",
      filterLiteracy: "AI Literacy",
      filterEthics: "Ethics & Human Rights",
      filterAgentic: "Agentic AI & Autonomy",
      filterSovereignty: "Sovereignty & Infra",
      filterPolicy: "Policy & Regulation",
      typeAll: "All types",
      typeReport: "Reports & Surveys",
      typeFramework: "Decision Frameworks",
      typeToolkit: "Toolkits & Guides",
      typeRegulation: "Regulations & Standards",
      typePaper: "Papers & Articles",
      sortDefault: "Recommended order",
      sortRecent: "Newest first",
      sortPages: "Longest documents",
      sortAlpha: "Alphabetical (A-Z)",
      resultsCount: "Showing {n} of {total} document resources",
      noResults: "No documents found matching your filter criteria.",
      btnReset: "Reset filters",
      btnCopyApa: "Copy APA 7",
      btnDetails: "Full Record",
      btnExportTxt: "Export APA 7 (.txt)",
      btnExportBib: "Export BibTeX (.bib)",
      copiedToast: "Citation copied to clipboard!",
      copiedBibToast: "BibTeX copied to clipboard!",
      tabCorpus: "Audited Corpus (46)",
      tabMultimedia: "Consortium Resources",
      modalTitle: "Document Technical Record",
      modalSource: "Corpus source file:",
      modalPages: "Pages:",
      modalWords: "Analyzed words:",
      modalTakeaway: "Key Higher Education Takeaway:",
      modalApaLabel: "APA 7 Citation:",
      modalBibLabel: "BibTeX Entry:",
      closeModal: "Close",
      ccBtn: "Manage CC License"
    }
  };

  function getT() {
    return i18nLib[currentLang] || i18nLib.es;
  }

  function renderLibrary() {
    const grid = document.getElementById("documentsGrid");
    const counter = document.getElementById("resultsCounter");
    if (!grid) return;

    const t = getT();
    const query = activeSearch.trim().toLowerCase();

    let filtered = corpusDocuments.filter((doc) => {
      // Category filter
      if (activeCategory !== "all") {
        if (activeCategory === "adoption" && doc.category !== "adoption") return false;
        if (activeCategory === "governance" && doc.category !== "governance") return false;
        if (activeCategory === "risk" && doc.category !== "risk") return false;
        if (activeCategory === "maturity" && doc.category !== "maturity") return false;
        if (activeCategory === "literacy" && doc.category !== "literacy") return false;
        if (activeCategory === "ethics" && doc.category !== "ethics") return false;
        if (activeCategory === "agentic" && doc.category !== "agentic") return false;
        if (activeCategory === "sovereignty" && doc.category !== "sovereignty") return false;
        if (activeCategory === "policy" && doc.category !== "policy") return false;
      }

      // Type filter
      if (activeType !== "all" && doc.type !== activeType) return false;

      // Text search
      if (query) {
        const fullText = [
          doc.title,
          doc.title_es,
          doc.author,
          doc.summary_es,
          doc.summary_en,
          doc.key_takeaway_es,
          doc.filename
        ].join(" ").toLowerCase();

        return fullText.includes(query);
      }

      return true;
    });

    // Sorting
    if (activeSort === "recent") {
      filtered.sort((a, b) => b.year - a.year);
    } else if (activeSort === "pages") {
      filtered.sort((a, b) => b.pages - a.pages);
    } else if (activeSort === "alpha") {
      filtered.sort((a, b) => {
        const titleA = currentLang === "es" ? a.title_es : a.title;
        const titleB = currentLang === "es" ? b.title_es : b.title;
        return titleA.localeCompare(titleB);
      });
    }

    if (counter) {
      counter.textContent = t.resultsCount
        .replace("{n}", filtered.length)
        .replace("{total}", corpusDocuments.length);
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <span class="empty-icon">🔍</span>
          <h3>${t.noResults}</h3>
          <button id="resetFiltersBtn" class="btn-primary">${t.btnReset}</button>
        </div>
      `;
      const resetBtn = document.getElementById("resetFiltersBtn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          activeSearch = "";
          activeCategory = "all";
          activeType = "all";
          const searchInput = document.getElementById("librarySearchInput");
          if (searchInput) searchInput.value = "";
          updateFilterButtons();
          renderLibrary();
        });
      }
      return;
    }

    grid.innerHTML = filtered.map((doc) => {
      const displayTitle = currentLang === "es" ? (doc.title_es || doc.title) : doc.title;
      const displaySummary = currentLang === "es" ? doc.summary_es : doc.summary_en;
      const catLabel = doc.category_label[currentLang] || doc.category_label.es;
      const typeLabel = doc.type_label[currentLang] || doc.type_label.es;

      return `
        <article class="doc-card" data-id="${doc.id}">
          <div class="doc-card-header">
            <div class="doc-badges">
              <span class="badge cat-badge ${doc.category}">${catLabel}</span>
              <span class="badge type-badge">${typeLabel}</span>
            </div>
            <span class="doc-year">${doc.year}</span>
          </div>

          <h3 class="doc-title">${displayTitle}</h3>
          <p class="doc-author"><strong>${doc.author}</strong></p>

          <p class="doc-summary">${displaySummary}</p>

          <div class="doc-takeaway-box">
            <span class="takeaway-tag">💡 ${currentLang === "es" ? "Aporte Universitario" : "University Insight"}</span>
            <p>${doc.key_takeaway_es}</p>
          </div>

          <div class="doc-card-meta">
            <span>📄 ${doc.pages} ${currentLang === "es" ? "págs." : "pages"}</span>
            <span>📊 ${Number(doc.words).toLocaleString()} ${currentLang === "es" ? "palabras" : "words"}</span>
          </div>

          <div class="doc-actions">
            <button class="btn-card-action btn-copy-apa" data-id="${doc.id}" title="Copiar cita APA 7">
              📋 ${t.btnCopyApa}
            </button>
            <button class="btn-card-action btn-view-doc" data-id="${doc.id}">
              🔍 ${t.btnDetails}
            </button>
          </div>
        </article>
      `;
    }).join("");

    // Wire up buttons
    grid.querySelectorAll(".btn-copy-apa").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const docId = btn.getAttribute("data-id");
        const doc = corpusDocuments.find((d) => d.id === docId);
        if (doc) {
          copyToClipboard(cleanHtml(doc.apa7), t.copiedToast);
        }
      });
    });

    grid.querySelectorAll(".btn-view-doc").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const docId = btn.getAttribute("data-id");
        openDocumentModal(docId);
      });
    });
  }

  function renderMultimediaResources() {
    const container = document.getElementById("multimediaGrid");
    if (!container) return;

    container.innerHTML = projectMultimediaResources.map((res) => {
      const title = currentLang === "es" ? res.title : (res.title_en || res.title);
      return `
        <div class="multimedia-card">
          <div class="mm-header">
            <span class="badge ${res.badge_class || 'badge-deck'}">${res.badge}</span>
            <span class="mm-duration">${res.duration}</span>
          </div>
          <h3>${title}</h3>
          <p class="mm-summary">${res.summary}</p>
          <div class="mm-meta">
            <small><strong>${currentLang === "es" ? "Público:" : "Audience:"}</strong> ${res.audience}</small>
          </div>
          <a href="${res.link}" class="btn-primary mm-action" ${res.link.endsWith('.pdf') ? 'target="_blank" rel="noopener"' : ''}>
            ${res.link.endsWith('.pdf') ? '📥 ' + (currentLang === "es" ? "Abrir Documento PDF" : "Open PDF Document") : '🚀 ' + (currentLang === "es" ? "Iniciar Presentación" : "Launch Presentation")}
          </a>
        </div>
      `;
    }).join("");
  }

  function openDocumentModal(docId) {
    const doc = corpusDocuments.find((d) => d.id === docId);
    if (!doc) return;

    const t = getT();
    const modal = document.getElementById("docDetailDialog");
    if (!modal) return;

    const displayTitle = currentLang === "es" ? (doc.title_es || doc.title) : doc.title;
    const catLabel = doc.category_label[currentLang] || doc.category_label.es;

    document.getElementById("modalDocTitle").textContent = displayTitle;
    document.getElementById("modalDocAuthor").textContent = `${doc.author} (${doc.year})`;
    document.getElementById("modalDocCategory").textContent = catLabel;
    document.getElementById("modalDocPages").textContent = `${doc.pages} ${currentLang === "es" ? "páginas" : "pages"}`;
    document.getElementById("modalDocWords").textContent = `${Number(doc.words).toLocaleString()} ${currentLang === "es" ? "palabras analizadas" : "analyzed words"}`;
    document.getElementById("modalDocSource").textContent = doc.filename;
    document.getElementById("modalDocTakeaway").textContent = doc.key_takeaway_es;
    
    document.getElementById("modalDocApa").innerHTML = doc.apa7;
    document.getElementById("modalDocBibtex").textContent = doc.bibtex;

    const copyApaBtn = document.getElementById("modalCopyApaBtn");
    if (copyApaBtn) {
      copyApaBtn.onclick = () => copyToClipboard(cleanHtml(doc.apa7), t.copiedToast);
    }

    const copyBibBtn = document.getElementById("modalCopyBibBtn");
    if (copyBibBtn) {
      copyBibBtn.onclick = () => copyToClipboard(doc.bibtex, t.copiedBibToast);
    }

    modal.showModal();
  }

  function cleanHtml(html) {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  function copyToClipboard(text, message) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(message || "¡Copiado al portapapeles!");
    }).catch(() => {
      // Fallback
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      showToast(message || "¡Copiado al portapapeles!");
    });
  }

  function showToast(message) {
    let toast = document.getElementById("appToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "appToast";
      toast.className = "app-toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("visible");
    setTimeout(() => {
      toast.classList.remove("visible");
    }, 2800);
  }

  function exportAll(format) {
    if (format === "apa") {
      const text = corpusDocuments.map((doc, idx) => `${idx + 1}. ${cleanHtml(doc.apa7)}`).join("\n\n");
      downloadFile("bibliografia_ethicalai_peru_apa7.txt", text, "text/plain;charset=utf-8");
    } else if (format === "bibtex") {
      const text = corpusDocuments.map((doc) => doc.bibtex).join("\n\n");
      downloadFile("bibliografia_ethicalai_peru.bib", text, "text/plain;charset=utf-8");
    }
  }

  function downloadFile(filename, text, mime) {
    const blob = new Blob([text], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Archivo ${filename} descargado.`);
  }

  function updateFilterButtons() {
    document.querySelectorAll(".filter-pill[data-category]").forEach((pill) => {
      const cat = pill.getAttribute("data-category");
      pill.classList.toggle("active", cat === activeCategory);
    });

    document.querySelectorAll(".filter-pill[data-type]").forEach((pill) => {
      const typ = pill.getAttribute("data-type");
      pill.classList.toggle("active", typ === activeType);
    });
  }

  function applyLanguage() {
    const t = getT();
    const langLabel = document.getElementById("langLabel");
    if (langLabel) langLabel.textContent = currentLang === "es" ? "EN" : "ES";

    // Text bindings
    const bindMap = {
      navHome: t.navHome,
      navPres1: t.navPres1,
      navPres2: t.navPres2,
      heroEyebrow: t.heroEyebrow,
      heroTitle: t.heroTitle,
      heroLead: t.heroLead,
      statDocsLabel: t.statDocs,
      statPagesLabel: t.statPages,
      statWordsLabel: t.statWords,
      statPartnersLabel: t.statPartners,
      tabCorpusLabel: t.tabCorpus,
      tabMultimediaLabel: t.tabMultimedia,
      btnExportTxtLabel: t.btnExportTxt,
      btnExportBibLabel: t.btnExportBib,
      sortDefaultOpt: t.sortDefault,
      sortRecentOpt: t.sortRecent,
      sortPagesOpt: t.sortPages,
      sortAlphaOpt: t.sortAlpha
    };

    Object.keys(bindMap).forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = bindMap[id];
    });

    const searchInput = document.getElementById("librarySearchInput");
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;

    renderLibrary();
    renderMultimediaResources();
  }

  // Initializer
  document.addEventListener("DOMContentLoaded", () => {
    // Search input
    const searchInput = document.getElementById("librarySearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        activeSearch = e.target.value;
        renderLibrary();
      });
    }

    // Category filter pills
    document.querySelectorAll(".filter-pill[data-category]").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.getAttribute("data-category");
        updateFilterButtons();
        renderLibrary();
      });
    });

    // Type filter pills
    document.querySelectorAll(".filter-pill[data-type]").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeType = btn.getAttribute("data-type");
        updateFilterButtons();
        renderLibrary();
      });
    });

    // Sort select
    const sortSelect = document.getElementById("librarySortSelect");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        activeSort = e.target.value;
        renderLibrary();
      });
    }

    // Tabs
    const tabCorpus = document.getElementById("tabCorpus");
    const tabMultimedia = document.getElementById("tabMultimedia");
    const secCorpus = document.getElementById("corpusSection");
    const secMultimedia = document.getElementById("multimediaSection");

    if (tabCorpus && tabMultimedia && secCorpus && secMultimedia) {
      tabCorpus.addEventListener("click", () => {
        tabCorpus.classList.add("active");
        tabMultimedia.classList.remove("active");
        secCorpus.style.display = "block";
        secMultimedia.style.display = "none";
      });
      tabMultimedia.addEventListener("click", () => {
        tabMultimedia.classList.add("active");
        tabCorpus.classList.remove("active");
        secCorpus.style.display = "none";
        secMultimedia.style.display = "block";
      });
    }

    // Export buttons
    const exportTxtBtn = document.getElementById("btnExportTxt");
    if (exportTxtBtn) exportTxtBtn.addEventListener("click", () => exportAll("apa"));

    const exportBibBtn = document.getElementById("btnExportBib");
    if (exportBibBtn) exportBibBtn.addEventListener("click", () => exportAll("bibtex"));

    // Modal close
    const modal = document.getElementById("docDetailDialog");
    const closeModalBtn = document.getElementById("closeDocModal");
    if (modal && closeModalBtn) {
      closeModalBtn.addEventListener("click", () => modal.close());
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.close();
      });
    }

    // CC License Dialog
    const ccBtn = document.getElementById("ccManageBtn");
    const ccDialog = document.getElementById("ccLicenseDialog");
    const closeCcBtn = document.getElementById("closeCcDialog");
    if (ccBtn && ccDialog) {
      ccBtn.addEventListener("click", () => ccDialog.showModal());
    }
    if (closeCcBtn && ccDialog) {
      closeCcBtn.addEventListener("click", () => ccDialog.close());
      ccDialog.addEventListener("click", (e) => {
        if (e.target === ccDialog) ccDialog.close();
      });
    }

    // Copy License Citations
    const copyCcApaBtn = document.getElementById("copyCcApaBtn");
    if (copyCcApaBtn) {
      copyCcApaBtn.addEventListener("click", () => {
        const text = "Proyecto Erasmus+ EthicalAI. (2026). Materiales y presentaciones para la adopción responsable de la inteligencia artificial en la educación superior en el Perú. Consorcio UCR, UNED, UH, UMCH, UNIFÉ, UV, Sapienza, ALPE, Pixel.";
        copyToClipboard(text, "¡Cita de atribución copiada!");
      });
    }

    const copyCcBibBtn = document.getElementById("copyCcBibBtn");
    if (copyCcBibBtn) {
      copyCcBibBtn.addEventListener("click", () => {
        const text = `@misc{ethicalai2026peru,\n  author = {{Consorcio Erasmus+ EthicalAI}},\n  title = {Decisiones Universitarias para una Inteligencia Artificial Responsable: Presentaciones y Biblioteca Digital},\n  year = {2026},\n  howpublished = {Universidad Marcelino Champagnat, Lima, Perú},\n  note = {Licencia Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional (CC BY-NC-SA 4.0)}\n}`;
        copyToClipboard(text, "¡BibTeX de atribución copiado!");
      });
    }

    const copyCcHtmlBtn = document.getElementById("copyCcHtmlBtn");
    if (copyCcHtmlBtn) {
      copyCcHtmlBtn.addEventListener("click", () => {
        const text = `<p xmlns:cc="http://creativecommons.org/ns#">Esta obra de <span property="cc:attributionName">Consorcio Erasmus+ EthicalAI</span> está bajo una <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">Licencia Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional</a>.</p>`;
        copyToClipboard(text, "¡Código HTML de licencia copiado!");
      });
    }

    // Lang toggle
    const langBtn = document.getElementById("langButton");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        currentLang = currentLang === "es" ? "en" : "es";
        localStorage.setItem("ethicalai_lang", currentLang);
        applyLanguage();
      });
    }

    // A11y controls
    const contrastBtn = document.getElementById("contrastToggle");
    if (contrastBtn) {
      contrastBtn.addEventListener("click", () => {
        document.body.classList.toggle("high-contrast");
        const active = document.body.classList.contains("high-contrast");
        contrastBtn.setAttribute("aria-pressed", active);
        contrastBtn.textContent = active ? "Desactivar" : "Activar";
      });
    }

    const fontSizeBtn = document.getElementById("fontSizeToggle");
    if (fontSizeBtn) {
      fontSizeBtn.addEventListener("click", () => {
        document.body.classList.toggle("large-font");
        const active = document.body.classList.contains("large-font");
        fontSizeBtn.setAttribute("aria-pressed", active);
        fontSizeBtn.textContent = active ? "Desactivar" : "Activar";
      });
    }

    const dyslexiaBtn = document.getElementById("dyslexiaToggle");
    if (dyslexiaBtn) {
      dyslexiaBtn.addEventListener("click", () => {
        document.body.classList.toggle("legible-font");
        const active = document.body.classList.contains("legible-font");
        dyslexiaBtn.setAttribute("aria-pressed", active);
        dyslexiaBtn.textContent = active ? "Desactivar" : "Activar";
      });
    }

    const a11yBtn = document.getElementById("a11yButton");
    const a11yDialog = document.getElementById("a11yDialog");
    const closeA11yBtn = document.getElementById("closeA11y");
    if (a11yBtn && a11yDialog) a11yBtn.addEventListener("click", () => a11yDialog.showModal());
    if (closeA11yBtn && a11yDialog) closeA11yBtn.addEventListener("click", () => a11yDialog.close());

    applyLanguage();
  });
})();
