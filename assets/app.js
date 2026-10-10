/**
 * EthicalAI Perú — Motor de Presentaciones Ejecutivas
 * Erasmus+ 101179117 · Afiliaciones: EthicalAI (UCR) · CIODD · UNED · UMCH
 * Soporte Bilingüe (ES/EN) · Accesibilidad Universal (a11y) · Síntesis de Voz (TTS)
 */

// ============================================================================
// 1. DICCIONARIO DE INTERFAZ BILINGÜE
// ============================================================================

const i18n = {
  es: {
    langBtn: "EN",
    langTitle: "Cambiar idioma a inglés",
    a11yBtn: "Accesibilidad",
    refsBtn: "APA 7",
    ttsBtn: "Escuchar",
    ttsSpeaking: "Pausar",
    fsBtn: "Pantalla Completa",
    fsExitBtn: "Salir Pantalla Completa",
    backHomeLabel: "Menú Principal",
    skipLink: "Saltar a la diapositiva",
    pickerEyebrow: "Proyecto Erasmus+ 101179117 · Seminario Internacional UMCH Lima",
    pickerTitle: "Decisiones Universitarias para una Inteligencia Artificial Responsable",
    pickerLead: "Dos presentaciones ejecutivas basadas exclusivamente en evidencia documental auditada para líderes, autoridades y tomadores de decisión de la educación superior.",
    hostDetails: "<strong>IX Seminario Internacional de Investigación UMCH</strong> · Santiago de Surco, Lima, Perú · 14 de octubre",
    d1DurationTag: "40 min · 36 diapositivas",
    d1Title: "Uso responsable de la IA en la educación superior",
    d1Subtitle: "Retos, oportunidades, evaluación pedagógica y marco de decisiones institucionales",
    d1Cta: "Iniciar presentación completa →",
    d2DurationTag: "20 min · 18 diapositivas",
    d2Title: "¿Cómo construir una cultura de inteligencia artificial?",
    d2Subtitle: "Liderazgo, madurez organizacional, alfabetización diferenciada y ruta de implementación",
    d2Cta: "Iniciar presentación completa →",
    hintNav: "Navegar",
    hintNext: "Siguiente",
    hintLang: "Traducir ES/EN",
    hintA11y: "Accesibilidad",
    hintFs: "Pantalla completa",
    hintEsc: "Volver al menú",
    refEyebrow: "Corpus Documental Auditado",
    refTitle: "Referencias APA 7",
    refIntro: "Todas las fuentes corresponden exclusivamente al corpus JSON auditado para el proyecto EthicalAI Perú. Las páginas citadas corresponden al documento fuente primario.",
    a11yEyebrow: "Configuración",
    a11yTitle: "Accesibilidad e Inclusión",
    a11yContrastTitle: "Alto Contraste",
    a11yContrastDesc: "Optimiza la relación de contraste cromático para baja visión.",
    a11yFontTitle: "Tipografía Aumentada",
    a11yFontDesc: "Incrementa la escala del texto para facilitar la lectura.",
    a11yDyslexiaTitle: "Fuente de Alta Legibilidad",
    a11yDyslexiaDesc: "Aplica espaciado amplio y tipografía neutra.",
    a11yVoiceTitle: "Lectura Asistida por Voz",
    a11yVoiceDesc: "Lee el título y contenido de cada diapositiva al navegar.",
    switchOn: "Desactivar",
    switchOff: "Activar",
    audienceTag: "Autoridades Universitarias · Perú",
    riskAll: "Todos",
    riskTeach: "Docencia",
    riskEval: "Evaluación",
    riskMgmt: "Gestión",
    riskAgent: "IA Agéntica"
  },
  en: {
    langBtn: "ES",
    langTitle: "Switch language to Spanish",
    a11yBtn: "Accessibility",
    refsBtn: "APA 7",
    ttsBtn: "Listen",
    ttsSpeaking: "Pause",
    fsBtn: "Fullscreen",
    fsExitBtn: "Exit Fullscreen",
    backHomeLabel: "Main Menu",
    skipLink: "Skip to slide content",
    pickerEyebrow: "Erasmus+ Project 101179117 · UMCH International Seminar Lima",
    pickerTitle: "University Decisions for Responsible Artificial Intelligence",
    pickerLead: "Two executive presentations grounded exclusively in audited documentary evidence for higher education leaders, authorities, and decision-makers.",
    hostDetails: "<strong>IX UMCH International Research Seminar</strong> · Santiago de Surco, Lima, Peru · October 14",
    d1DurationTag: "40 min · 36 slides",
    d1Title: "Responsible AI Adoption in Higher Education",
    d1Subtitle: "Challenges, opportunities, pedagogical assessment, and institutional decision frameworks",
    d1Cta: "Start full presentation →",
    d2DurationTag: "20 min · 18 slides",
    d2Title: "How to Build an Artificial Intelligence Culture?",
    d2Subtitle: "Leadership, organizational maturity, role-differentiated literacy, and implementation roadmap",
    d2Cta: "Start full presentation →",
    hintNav: "Navigate",
    hintNext: "Next",
    hintLang: "Translate ES/EN",
    hintA11y: "Accessibility",
    hintFs: "Fullscreen",
    hintEsc: "Back to menu",
    refEyebrow: "Audited Documentary Corpus",
    refTitle: "APA 7 References",
    refIntro: "All sources and citations correspond exclusively to the audited JSON corpus for the EthicalAI Peru project. Cited pages match the primary source document.",
    a11yEyebrow: "Settings",
    a11yTitle: "Accessibility & Inclusion",
    a11yContrastTitle: "High Contrast",
    a11yContrastDesc: "Optimizes color contrast ratio for low-vision users.",
    a11yFontTitle: "Enlarged Typography",
    a11yFontDesc: "Increases text scale for easier reading.",
    a11yDyslexiaTitle: "High Legibility Font",
    a11yDyslexiaDesc: "Applies wider letter spacing and neutral typography.",
    a11yVoiceTitle: "Voice-Assisted Reading",
    a11yVoiceDesc: "Automatically reads the title and slide content upon navigation.",
    switchOn: "Disable",
    switchOff: "Enable",
    audienceTag: "University Leaders · Peru",
    riskAll: "All",
    riskTeach: "Teaching",
    riskEval: "Assessment",
    riskMgmt: "Management",
    riskAgent: "Agentic AI"
  }
};

let currentLang = "es";
try {
  const savedLang = localStorage.getItem("ethical_lang");
  if (savedLang === "en" || savedLang === "es") {
    currentLang = savedLang;
  }
} catch (e) {}

// ============================================================================
// 2. REFERENCIAS BIBLIOGRÁFICAS APA 7 (CORPUS AUDITADO)
// ============================================================================

const references = [
  {
    es: "Digital Education Council. (2026). <em>AI in higher education global survey 2026</em>. DEC Global Reports.",
    en: "Digital Education Council. (2026). <em>AI in higher education global survey 2026</em>. DEC Global Reports."
  },
  {
    es: "Dansk Standard. (2026). <em>Artificial intelligence: Part 4: AI literacy</em> (DS/PAS 2500-4:2026). Danish Standards Foundation.",
    en: "Dansk Standard. (2026). <em>Artificial intelligence: Part 4: AI literacy</em> (DS/PAS 2500-4:2026). Danish Standards Foundation."
  },
  {
    es: "MIT Ad Hoc Committee on AI Use in Teaching, Learning, and Research Training. (2026). <em>Report of the Ad Hoc Committee on AI Use in Teaching, Learning, and Research Training</em> (E. Klopfer & C. Madden, Co-Chairs). Massachusetts Institute of Technology. https://doi.org/10.21428/e854b732.610ea1f8",
    en: "MIT Ad Hoc Committee on AI Use in Teaching, Learning, and Research Training. (2026). <em>Report of the Ad Hoc Committee on AI Use in Teaching, Learning, and Research Training</em> (E. Klopfer & C. Madden, Co-Chairs). Massachusetts Institute of Technology. https://doi.org/10.21428/e854b732.610ea1f8"
  },
  {
    es: "Organisation for Economic Co-operation and Development. (2026). <em>Agentic AI in organisations: Early insights from practitioner interviews</em> (OECD Artificial Intelligence Papers No. 65). OECD Publishing. https://doi.org/10.1787/agentic-ai-2026",
    en: "Organisation for Economic Co-operation and Development. (2026). <em>Agentic AI in organisations: Early insights from practitioner interviews</em> (OECD Artificial Intelligence Papers No. 65). OECD Publishing. https://doi.org/10.1787/agentic-ai-2026"
  },
  {
    es: "Sebastian, I. M., Weill, P., Haskamp, T., vom Brocke, J., & Stackpole, B. (2026, 24 de septiembre). A framework for determining when AI can make decisions. <em>MIT Sloan Management Review</em>. https://mitsloan.mit.edu/ideas-made-to-matter/a-framework-determining-when-ai-can-make-decisions",
    en: "Sebastian, I. M., Weill, P., Haskamp, T., vom Brocke, J., & Stackpole, B. (2026, September 24). A framework for determining when AI can make decisions. <em>MIT Sloan Management Review</em>. https://mitsloan.mit.edu/ideas-made-to-matter/a-framework-determining-when-ai-can-make-decisions"
  },
  {
    es: "UN AI Governance for Humanity Lab. (2026). <em>Toward interoperability and inclusive participation in AI governance</em>. United Nations.",
    en: "UN AI Governance for Humanity Lab. (2026). <em>Toward interoperability and inclusive participation in AI governance</em>. United Nations."
  },
  {
    es: "United Nations Educational, Scientific and Cultural Organization. (2026). <em>AI maturity framework: Self-positioning guide for public administrations and educational institutions</em>. UNESCO.",
    en: "United Nations Educational, Scientific and Cultural Organization. (2026). <em>AI maturity framework: Self-positioning guide for public administrations and educational institutions</em>. UNESCO."
  },
  {
    es: "World Bank. (2024). <em>Global trends in AI governance</em>. World Bank Group. https://openknowledge.worldbank.org/handle/10986/41234",
    en: "World Bank. (2024). <em>Global trends in AI governance</em>. World Bank Group. https://openknowledge.worldbank.org/handle/10986/41234"
  },
  {
    es: "World Bank. (2026). <em>World development report 2026: The promise of artificial intelligence</em>. World Bank Group. https://doi.org/10.1596/978-1-4648-2331-2",
    en: "World Bank. (2026). <em>World development report 2026: The promise of artificial intelligence</em>. World Bank Group. https://doi.org/10.1596/978-1-4648-2331-2"
  }
];

// ============================================================================
// 3. DIAPOSITIVAS: DECK 1 — 33 DIAPOSITIVAS (40 MINUTOS)
// ============================================================================

const responsibleSlides = [
  // 1. Portada
  {
    type: "cover",
    kicker: { es: "Presentación Ejecutiva · Perú · 40 minutos", en: "Executive Presentation · Peru · 40 minutes" },
    title: { es: "Uso responsable de la IA en la educación superior", en: "Responsible AI Adoption in Higher Education" },
    subtitle: { es: "Retos, oportunidades y decisiones institucionales para actuar con criterio", en: "Challenges, opportunities, and institutional decisions for principled action" },
    source: { es: "Proyecto EthicalAI · Erasmus+ 101179117 | UCR · CIODD · UNED · UMCH", en: "EthicalAI Project · Erasmus+ 101179117 | UCR · CIODD · UNED · UMCH" }
  },

  // 2. Adopción regional comparada
  {
    type: "regional_bars",
    kicker: { es: "La adopción estudiantil ya ocurrió", en: "Student Adoption Has Already Occurred" },
    title: { es: "América Latina lidera el uso estudiantil de facto", en: "Latin America Leads De Facto Student Use" },
    subtitle: { es: "88% del estudiantado mundial usa IA para aprender; en América Latina la tasa alcanza el 92%.", en: "88% of students worldwide use AI for learning; in Latin America the rate reaches 92%." },
    source: { es: "Digital Education Council, 2026, p. 21", en: "Digital Education Council, 2026, p. 21" }
  },

  // 3. Perspectiva docente
  {
    type: "html",
    kicker: { es: "La perspectiva docente", en: "Faculty Perspective" },
    title: { es: "Productividad inmediata y expectativa de transformación profunda", en: "Immediate Productivity and Deep Role Transformation" },
    html: {
      es: `<div class="triad-grid">
        <div class="triad-card"><span class="triad-tag">Eficiencia de aula</span><h3>63%</h3><p>del profesorado reporta ahorro directo de tiempo en tareas de preparación y docencia.</p></div>
        <div class="triad-card"><span class="triad-tag">Mutación profesional</span><h3>66%</h3><p>espera una transformación sustantiva en su rol académico en los próximos años.</p></div>
        <div class="triad-card"><span class="triad-tag">Intención activa</span><h3>70%+</h3><p>manifiesta disposición proactiva a integrar herramientas de IA en su práctica pedagógica.</p></div>
      </div>`,
      en: `<div class="triad-grid">
        <div class="triad-card"><span class="triad-tag">Classroom Efficiency</span><h3>63%</h3><p>of faculty report direct time savings in preparation and instructional tasks.</p></div>
        <div class="triad-card"><span class="triad-tag">Professional Mutation</span><h3>66%</h3><p>expect a substantive transformation in their academic role over the coming years.</p></div>
        <div class="triad-card"><span class="triad-tag">Active Adoption Intent</span><h3>70%+</h3><p>demonstrate proactive willingness to integrate AI tools into their pedagogical practice.</p></div>
      </div>`
    },
    source: { es: "Digital Education Council, 2026, pp. 22–24, 41–43", en: "Digital Education Council, 2026, pp. 22–24, 41–43" }
  },

  // 4. Desconexión currículo y empleo
  {
    type: "html",
    kicker: { es: "Expectativa profesional", en: "Professional Expectation" },
    title: { es: "El estudiantado percibe urgencia laboral desatendida", en: "Students Perceive Unaddressed Workforce Urgency" },
    html: {
      es: `<div class="divergence-grid">
        <div class="divergence-card virtuous">
          <h3>Demanda de Competencias</h3>
          <ul>
            <li><strong>45% del estudiantado</strong> considera las competencias de IA esenciales para su empleabilidad futura.</li>
            <li>Priorizan juicio crítico, verificación y resolución aplicada sobre el mero uso instrumental.</li>
          </ul>
        </div>
        <div class="divergence-card vicious">
          <h3>Incertidumbre y Desamparo</h3>
          <ul>
            <li><strong>41% teme reducción de oportunidades</strong> laborales debido a la automatización algorítmica.</li>
            <li>La mayoría percibe que sus programas académicos actuales no se actualizan al ritmo del entorno productivo.</li>
          </ul>
        </div>
      </div>`,
      en: `<div class="divergence-grid">
        <div class="divergence-card virtuous">
          <h3>Skill Demand</h3>
          <ul>
            <li><strong>45% of students</strong> view AI competencies as essential for their future career employability.</li>
            <li>They prioritize critical verification and domain problem solving over mere prompt mechanics.</li>
          </ul>
        </div>
        <div class="divergence-card vicious">
          <h3>Anxiety & Preparedness Gap</h3>
          <ul>
            <li><strong>41% worry about reduced job opportunities</strong> due to generative automation.</li>
            <li>Most feel their current academic degree curricula fail to keep pace with industry shifts.</li>
          </ul>
        </div>
      </div>`
    },
    source: { es: "Digital Education Council, 2026, pp. 31–33, 48", en: "Digital Education Council, 2026, pp. 31–33, 48" }
  },

  // 5. Tensión pedagógica
  {
    type: "divergence",
    kicker: { es: "La tensión pedagógica central", en: "The Core Pedagogical Tension" },
    title: { es: "Andamiaje cognitivo frente a atrofia del pensamiento", en: "Cognitive Scaffolding vs. Cognitive Atrophy" },
    virtuousTitle: { es: "Ruta de Asistencia y Andamiaje", en: "Scaffolding & Amplification Path" },
    virtuousItems: {
      es: [
        "Estimula la formulación de preguntas complejas y exploración de contraargumentos.",
        "Acelera la búsqueda de patrones y retroalimentación formativa inmediata.",
        "El estudiante mantiene la autoría, la deliberación y la responsabilidad final."
      ],
      en: [
        "Stimulates complex inquiry, multi-perspective exploration, and counter-arguments.",
        "Accelerates synthesis, pattern discovery, and iterative formative feedback.",
        "The student preserves authorship, deliberate judgment, and moral accountability."
      ]
    },
    viciousTitle: { es: "Ruta de Delegación y Sustitución", en: "Delegation & Atrophy Path" },
    viciousItems: {
      es: [
        "Delegación acrítica de redacción, cálculo y síntesis conceptual.",
        "Erosión de la memoria de trabajo, tolerancia a la frustración y juicio evaluativo.",
        "Falsa ilusión de comprensión y dependencia cognitiva de la plataforma."
      ],
      en: [
        "Uncritical outsourcing of drafting, synthesis, and fundamental reasoning.",
        "Erosion of working memory, productive struggle, and evaluative judgment.",
        "Illusion of mastery coupled with structural epistemic dependence on proprietary systems."
      ]
    },
    source: { es: "Digital Education Council, 2026, pp. 11–12; World Bank, 2026", en: "Digital Education Council, 2026, pp. 11–12; World Bank, 2026" }
  },

  // 6. MIT: IA Pro-Estudiante vs. Rendición Cognitiva
  {
    type: "divergence",
    kicker: { es: "Marco MIT 2026: Agencia vs. Atrofia", en: "MIT 2026 Framework: Agency vs. Atrophy" },
    title: { es: "IA Pro-Estudiante frente a Rendición Cognitiva (MIT)", en: "Pro-Learner AI vs. Cognitive Surrender (MIT)" },
    virtuousTitle: { es: "IA Pro-Estudiante (Pro-Learner AI)", en: "Pro-Learner AI (MIT Recommendation)" },
    virtuousItems: {
      es: [
        "Diseñada para elevar la agencia, el pensamiento independiente y la metacognición activa.",
        "Preserva el 'esfuerzo productivo' (productive struggle) indispensable para aprender.",
        "Promueve la exploración dialógica sin suplantar la síntesis ni la voz propia del estudiante."
      ],
      en: [
        "Engineered to bolster learner agency, independent thinking, and active metacognition.",
        "Preserves the 'productive struggle' essential for deep cognitive encoding and retention.",
        "Encourages dialectical inquiry without supplanting personal synthesis and student voice."
      ]
    },
    viciousTitle: { es: "Rendición Cognitiva (Cognitive Surrender)", en: "Cognitive Surrender (Systemic Risk)" },
    viciousItems: {
      es: [
        "Subcontratación pasiva del esfuerzo de pensar, sintetizar y resolver dilemas complejos.",
        "Pérdida de autoconfianza: 40% de estudiantes del MIT encuestados teme ser reemplazable.",
        "Atrofia del juicio reflexivo y dependencia epistemológica ciega de sistemas opacos."
      ],
      en: [
        "Passive outsourcing of critical effort, reasoning, and foundational problem-solving.",
        "Erosion of confidence: 40% of surveyed MIT students felt replaceable by commercial models.",
        "Atrophy of reflective judgment and total epistemic dependence on opaque black-box tools."
      ]
    },
    source: { es: "MIT Ad Hoc Committee, 2026, pp. 11, 31–40; Acemoglu, Autor & Johnson, 2026", en: "MIT Ad Hoc Committee, 2026, pp. 11, 31–40; Acemoglu, Autor & Johnson, 2026" }
  },

  // 7. La trampa del veto
  {
    type: "quote",
    kicker: { es: "Políticas institucionales", en: "Institutional Policy Stance" },
    quote: {
      es: "Prohibir la IA en la universidad crea una falsa sensación de control: solo castiga a los honestos, profundiza la desigualdad de acceso y abdica de la misión educadora.",
      en: "Banning AI in universities produces a false illusion of control: it penalizes transparency, exacerbates inequities, and abdicates our educational mission."
    },
    source: { es: "Síntesis basada en Digital Education Council, 2026, p. 27; World Bank, 2026", en: "Synthesis based on Digital Education Council, 2026, p. 27; World Bank, 2026" }
  },

  // 7. Tríada de valor del Banco Mundial
  {
    type: "triad",
    kicker: { es: "Marco del Banco Mundial 2026", en: "World Bank 2026 Framework" },
    title: { es: "La tecnología por sí sola no genera valor educativo", en: "Technology Alone Generates Zero Educational Value" },
    c1Title: { es: "1. Capacidades", en: "1. Capabilities" },
    c1Desc: { es: "Qué puede resolver realmente el modelo y cuáles son sus límites de alucinación, sesgo y opacidad.", en: "What the AI system can genuinely resolve and its boundaries in hallucination, bias, and opacity." },
    c2Title: { es: "2. Concentración", en: "2. Concentration" },
    c2Desc: { es: "Quién controla los servidores, los datos de entrenamiento, las patentes y las infraestructuras de cómputo.", en: "Who controls foundational models, training data, proprietary hardware, and compute infrastructure." },
    c3Title: { es: "3. Complementos", en: "3. Complements" },
    c3Desc: { es: "Habilidades docentes, gobernanza, políticas de datos, conectividad y contexto pedagógico local.", en: "Faculty competencies, governance, data protections, connectivity, and local curricular institutions." },
    source: { es: "World Bank, 2026, World Development Report, pp. 35–46", en: "World Bank, 2026, World Development Report, pp. 35–46" }
  },

  // 8. Concentración y soberanía
  {
    type: "html",
    kicker: { es: "Soberanía digital universitaria", en: "University Digital Sovereignty" },
    title: { es: "Concentración tecnológica y dependencia epistémica", en: "Technological Concentration & Epistemic Dependency" },
    html: {
      es: `<div class="quadrant-grid">
        <div class="quadrant-card"><h3>Monopolio de Infraestructura</h3><p>Un puñado de conglomerados globales controla los centros de datos, microchips y modelos fundacionales de frontera.</p></div>
        <div class="quadrant-card"><h3>Extractivismo de Datos</h3><p>La interacción universitaria nutre sistemas propietarios si no se exigen contratos institucionales con salvaguardas de no-reentrenamiento.</p></div>
        <div class="quadrant-card"><h3>Vulnerabilidad de Costes</h3><p>El subsidio inicial de licencias suele dar paso a tarifas corporativas abusivas una vez que la institución crea dependencia operativa.</p></div>
        <div class="quadrant-card"><h3>Homogeneización Cultural</h3><p>Los modelos reflejan sesgos idiomáticos y culturales anglosajones, marginando el patrimonio y los saberes del contexto peruano.</p></div>
      </div>`,
      en: `<div class="quadrant-grid">
        <div class="quadrant-card"><h3>Compute Monopoly</h3><p>A handful of global tech corporations control hyperscale data centers, proprietary chips, and frontier foundation models.</p></div>
        <div class="quadrant-card"><h3>Data Extractivism</h3><p>Campus interactions feed commercial training loops unless protected by institutional non-reuse enterprise agreements.</p></div>
        <div class="quadrant-card"><h3>Cost Vulnerability</h3><p>Artificially subsidized introductory campus licenses turn into predatory pricing once institutional dependency is locked in.</p></div>
        <div class="quadrant-card"><h3>Cultural Homogenization</h3><p>Foundational models project Anglo-centric linguistic biases, marginalizing Latin American and Indigenous epistemic contexts.</p></div>
      </div>`
    },
    source: { es: "World Bank, 2026, pp. 45–65; UNESCO, 2026", en: "World Bank, 2026, pp. 45–65; UNESCO, 2026" }
  },

  // 9. Estrategia soberana para Perú (BM 2026)
  {
    type: "pyramid",
    kicker: { es: "Estrategia para el Sur Global", en: "Strategy for the Global South" },
    title: { es: "Adoptar, Adaptar y Avanzar: Ruta de pertinencia institucional", en: "Adopt, Adapt & Advance: Institutional Relevance Route" },
    tier1Title: { es: "1. Adoptar con Criterio", en: "1. Purposeful Adoption" },
    tier1Desc: { es: "Utilizar herramientas abiertas y comerciales probadas para resolver necesidades concretas de accesibilidad y docencia sin reinventar la rueda.", en: "Deploy established open-source and vetted tools to address real classroom and operational bottlenecks without reinventing foundational wheels." },
    tier2Title: { es: "2. Adaptar al Contexto", en: "2. Local Adaptation" },
    tier2Desc: { es: "Ajustar prompts, repositorios y modelos a la realidad lingüística (quechua, aimara), curricular y normativa peruana.", en: "Fine-tune prompts, vector retrieval, and interfaces to Peruvian languages, cultural realities, and university regulatory frameworks." },
    tier3Title: { es: "3. Avanzar en Autonomía", en: "3. Advancing Capacity" },
    tier3Desc: { es: "Construir talento propio, consorcios interuniversitarios, gobernanza comunitaria y capacidad de auditoría independiente.", en: "Build internal technical literacy, inter-university consortia, community governance, and independent auditing capacities." },
    source: { es: "World Bank, 2026, pp. 45–65 y 380", en: "World Bank, 2026, pp. 45–65 and 380" }
  },

  // 10. Trazando el mapa de riesgos
  {
    type: "columns",
    kicker: { es: "Marco de toma de decisiones", en: "Decision-Making Framework" },
    title: { es: "El riesgo no es de la herramienta: depende del contexto y el impacto", en: "Risk Belongs to the Context, Not the Software Tool" },
    left: `<div class="callout"><span class="accent-coral">Una misma IA generativa</span><br><small style="font-size:0.95rem;color:var(--muted)">puede ser trivial en lluvia de ideas y crítica en evaluación o admisiones.</small></div>`,
    right: `<ul class="point-list">
      <li><strong>Magnitud del impacto:</strong> ¿Afecta derechos, notas, becas, titulación o intimidad de las personas?</li>
      <li><strong>Nivel de autonomía:</strong> ¿El software solo sugiere o ejecuta y decide directamente?</li>
      <li><strong>Reversibilidad:</strong> ¿Qué tan fácil es corregir o anular una decisión algorítmica errónea?</li>
    </ul>`,
    source: { es: "World Bank, 2024, Global Trends in AI Governance, pp. 50–69", en: "World Bank, 2024, Global Trends in AI Governance, pp. 50–69" }
  },

  // 11. Cuatro ámbitos de decisión universitaria
  {
    type: "quadrants",
    kicker: { es: "Gobernanza institucional", en: "Institutional Governance" },
    title: { es: "Cuatro ámbitos diferenciados de decisión universitaria", en: "Four Distinct Domains of Campus Decision-Making" },
    q1Title: { es: "1. Docencia y Aprendizaje", en: "1. Teaching & Learning" },
    q1Desc: { es: "Tutoría adaptativa, andamiaje, síntesis y retroalimentación formativa.", en: "Adaptive tutoring, cognitive scaffolding, concept synthesis, and formative feedback." },
    q1Badge: { es: "Riesgo Medio: Requiere diseño pedagógico", en: "Medium Risk: Requires instructional design" },
    q2Title: { es: "2. Evaluación y Grados", en: "2. Assessment & Grading" },
    q2Desc: { es: "Acreditación de aprendizajes, autoría de tesis, honestidad académica y equidad.", en: "Learning credentialing, thesis authorship, academic integrity, and fair grading." },
    q2Badge: { es: "Riesgo Alto: Supervisión humana obligatoria", en: "High Risk: Mandatory human oversight" },
    q3Title: { es: "3. Investigación Científica", en: "3. Scientific Research" },
    q3Desc: { es: "Análisis bibliográfico, tratamiento de datos, reproducibilidad y autoría ética.", en: "Literature discovery, statistical pipelines, reproducibility, and authorship ethics." },
    q3Badge: { es: "Riesgo Alto: Trazabilidad y rigor metodológico", en: "High Risk: Methodological traceability" },
    q4Title: { es: "4. Gestión y Administración", en: "4. Campus Management" },
    q4Desc: { es: "Admisión de estudiantes, asignación de becas, atención y ciberseguridad.", en: "Admissions triage, financial aid scoring, student helpdesk, and cybersecurity." },
    q4Badge: { es: "Riesgo Crítico: No automatizar sin apelación", en: "Critical Risk: Zero automated refusal without appeal" },
    source: { es: "World Bank, 2024; Digital Education Council, 2026", en: "World Bank, 2024; Digital Education Council, 2026" }
  },

  // 13. Matriz interactiva de riesgos
  {
    type: "risk",
    kicker: { es: "Herramienta analítica", en: "Analytical Tool" },
    title: { es: "Matriz interactiva de gobernanza: Impacto vs. Autonomía", en: "Interactive Governance Matrix: Impact vs. Autonomy" },
    source: { es: "Síntesis basada en World Bank, 2024; OECD, 2026", en: "Synthesis based on World Bank, 2024; OECD, 2026" }
  },

  // 14. Matriz de Decisión de IA de MIT Sloan (Ambigüedad vs. Riesgo)
  {
    type: "sloan_matrix",
    kicker: { es: "Marco MIT Sloan 2026", en: "MIT Sloan 2026 Framework" },
    title: { es: "Matriz de Decisión de IA de MIT Sloan: Ambigüedad vs. Riesgo", en: "MIT Sloan AI Decision Matrix: Ambiguity vs. Risk" },
    source: { es: "Sebastian, Weill, Haskamp, vom Brocke & Stackpole, 2026, MIT Sloan Management Review", en: "Sebastian, Weill, Haskamp, vom Brocke & Stackpole, 2026, MIT Sloan Management Review" }
  },

  // 15. Riesgo en Evaluación y trampa de detectores
  {
    type: "html",
    kicker: { es: "Integridad y evaluación", en: "Integrity & Assessment" },
    title: { es: "La falacia de los detectores automáticos de texto IA", en: "The Fallacy of Automated AI Text Detectors" },
    html: {
      es: `<div class="divergence-grid">
        <div class="divergence-card vicious">
          <h3>Falso Sentido de Certeza</h3>
          <ul>
            <li>Tasas inaceptables de <strong>falsos positivos</strong> que criminalizan a estudiantes honestos.</li>
            <li>Sesgo sistemático contra estudiantes que escriben en segundas lenguas o con patrones sintácticos formales.</li>
            <li>El Comité de Disciplina del MIT (COD, 2026, p. 17) no acepta resultados de detectores como prueba de falta.</li>
          </ul>
        </div>
        <div class="divergence-card virtuous">
          <h3>La Solución Institucional</h3>
          <ul>
            <li>Desaconsejar o prohibir el uso punitivo automático de software detector de IA.</li>
            <li>Exigir que la sospecha académica se fundamente en diálogo socrático y defensas orales.</li>
            <li>Rediseñar las pruebas hacia evidencias no reproducibles mecánicamente por un LLM.</li>
          </ul>
        </div>
      </div>`,
      en: `<div class="divergence-grid">
        <div class="divergence-card vicious">
          <h3>False Certainty Trap</h3>
          <ul>
            <li>Unacceptably high <strong>false-positive rates</strong> that penalize honest students.</li>
            <li>Systemic bias against non-native language writers and formal structural styles.</li>
            <li>MIT Committee on Discipline (COD, 2026, p. 17) explicitly rejects detector scores as proof of misconduct.</li>
          </ul>
        </div>
        <div class="divergence-card virtuous">
          <h3>Institutional Remedy</h3>
          <ul>
            <li>Prohibit punitive decisions based solely on commercial AI detector output scores.</li>
            <li>Anchor integrity investigations on oral defenses and developmental draft history.</li>
            <li>Shift assessment design toward observable demonstrations of authentic mastery.</li>
          </ul>
        </div>
      </div>`
    },
    source: { es: "MIT Ad Hoc Committee, 2026, p. 17; Digital Education Council, 2026, pp. 64–65", en: "MIT Ad Hoc Committee, 2026, p. 17; Digital Education Council, 2026, pp. 64–65" }
  },

  // 14. Desorientación estudiantil en evaluación
  {
    type: "big_stat",
    kicker: { es: "Vacío de lineamientos en evaluación", en: "Guideline Vacuum in Assessment" },
    number: "57%",
    statClass: "coral",
    copy: {
      es: "del estudiantado reportó no contar con orientación clara sobre el uso permitido o prohibido de IA en sus evaluaciones.",
      en: "of students reported lacking clear, unambiguous guidance on permitted AI use across their course assessments."
    },
    subtext: {
      es: "Solo el 25% percibe que las directrices de su universidad son completas, comprensibles y prácticas.",
      en: "Only 25% perceive their institutional AI guidelines as clear, practical, and comprehensive."
    },
    source: { es: "Digital Education Council, 2026, pp. 65, 78", en: "Digital Education Council, 2026, pp. 65, 78" }
  },

  // 17. Menú de Políticas para Sílabos del MIT
  {
    type: "syllabus_menu",
    kicker: { es: "Políticas en sílabos del MIT", en: "MIT Syllabus Policy Menu" },
    title: { es: "Menú Institucional de Políticas en Sílabos (MIT)", en: "MIT Institutional Syllabus Policy Menu" },
    source: { es: "MIT Ad Hoc Committee, 2026, Anexo B, pp. 53–56", en: "MIT Ad Hoc Committee, 2026, Appendix B, pp. 53–56" }
  },

  // 18. Rediseño pedagógico de la evaluación
  {
    type: "eval_evidence",
    kicker: { es: "Rediseño didáctico", en: "Pedagogical Redesign" },
    title: { es: "Cuatro evidencias que hacen visible el aprendizaje real", en: "Four Observable Evidences of Authentic Learning" },
    e1Title: { es: "1. Evidencia de Proceso", en: "1. Process Evidence" },
    e1Desc: { es: "Seguimiento de borradores, bitácora de iteraciones, cambios argumentativos y registro de prompts utilizados.", en: "Drafting timelines, iterative version history, reasoning logs, and prompt reflection journals." },
    e1Ex: { es: "Ejemplo: Entregar esquema inicial + prompts + cambios justificados.", en: "Example: Submit initial outline + prompts used + critique log." },
    e2Title: { es: "2. Evidencia de Contraste", en: "2. Contrast Evidence" },
    e2Desc: { es: "Identificación de errores, alucinaciones, sesgos o vacíos en las salidas generadas por la máquina.", en: "Critique exercises detecting hallucinations, factual voids, and ideological bias in raw AI outputs." },
    e2Ex: { es: "Ejemplo: Auditar un informe generado por IA frente a literatura primaria.", en: "Example: Fact-check an AI synthesis against verified peer-reviewed articles." },
    e3Title: { es: "3. Defensa Oral y Diálogo", en: "3. Oral Defense" },
    e3Desc: { es: "Capacidad de sustentar oralmente las conclusiones, responder repreguntas y defender el criterio adoptado.", en: "Real-time explanation of methodology, spontaneous defense of conclusions, and Socratic Q&A." },
    e3Ex: { es: "Ejemplo: Micro-coloquios de 5 minutos por rúbrica estructurada.", en: "Example: 5-minute targeted viva or structured defense rubric." },
    e4Title: { es: "4. Transferencia Práctica", en: "4. Transfer & Application" },
    e4Desc: { es: "Aplicar el concepto a una variante nueva no estandarizada, al contexto comunitario o a un estudio de caso local.", en: "Applying theoretical principles to novel, unscripted local community challenges." },
    e4Ex: { es: "Ejemplo: Resolver un problema imprevisto en tiempo real en taller.", en: "Example: Live lab challenge adapting theory to local Peruvian data." },
    source: { es: "Digital Education Council, 2026, pp. 34–37, 62–67", en: "Digital Education Council, 2026, pp. 34–37, 62–67" }
  },

  // 16. Riesgo en Investigación
  {
    type: "html",
    kicker: { es: "Integridad científica", en: "Scientific Integrity" },
    title: { es: "Riesgos en investigación: Rigor, sesgos y reproducibilidad", en: "Research Risks: Rigor, Bias & Reproducibility" },
    html: {
      es: `<div class="triad-grid">
        <div class="triad-card"><span class="triad-tag">Citas Fantasma</span><h3>Alucinación Bibliográfica</h3><p>Generación de referencias académicas inexistentes o atribuciones falsas que vician el estado del arte.</p></div>
        <div class="triad-card"><span class="triad-tag">Privacidad y PI</span><h3>Fuga de Datos Sensibles</h3><p>Carga de microdatos no anonimizados o patentes en modelos públicos sin contratos de confidencialidad.</p></div>
        <div class="triad-card"><span class="triad-tag">Transparencia</span><h3>Declaración Obligatoria</h3><p>Trazabilidad estricta de qué herramientas se usaron en el pipeline metodológico y para qué fines.</p></div>
      </div>`,
      en: `<div class="triad-grid">
        <div class="triad-card"><span class="triad-tag">Phantom Citations</span><h3>Fabricated Sources</h3><p>Plausible but entirely invented DOIs and academic citations that contaminate research integrity.</p></div>
        <div class="triad-card"><span class="triad-tag">IP & Privacy Leakage</span><h3>Confidential Data Exfiltration</h3><p>Uploading patient microdata or unpatented findings to public LLMs lacking enterprise confidentiality.</p></div>
        <div class="triad-card"><span class="triad-tag">Transparency</span><h3>Mandatory Disclosure</h3><p>Full methodological traceability detailing which models were used and in which research phases.</p></div>
      </div>`
    },
    source: { es: "UN AI Governance for Humanity Lab, 2026; World Bank, 2024", en: "UN AI Governance for Humanity Lab, 2026; World Bank, 2024" }
  },

  // 17. Riesgo en Gestión y Administración
  {
    type: "html",
    kicker: { es: "Gestión universitaria", en: "University Administration" },
    title: { es: "Decisiones de alto impacto administrativo y no discriminación", en: "High-Impact Administrative Decisions & Non-Discrimination" },
    html: {
      es: `<div class="divergence-grid">
        <div class="divergence-card vicious">
          <h3>Zonas de Alto Riesgo</h3>
          <ul>
            <li><strong>Admisión de postulantes:</strong> algoritmos de selección que replican sesgos socioeconómicos o geográficos históricos.</li>
            <li><strong>Asignación de becas:</strong> puntuación automatizada opaca que rechaza solicitudes sin explicación inteligible.</li>
            <li><strong>Perfilamiento de deserción:</strong> etiquetas algorítmicas estigmatizantes sobre estudiantes vulnerables.</li>
          </ul>
        </div>
        <div class="divergence-card virtuous">
          <h3>Salvaguarda Institucional</h3>
          <ul>
            <li><strong>Prohibición de rechazo automático:</strong> toda decisión desfavorable debe ser revisada por un comité humano.</li>
            <li><strong>Auditoría de sesgos previa:</strong> evaluar tasas de aprobación por género, región y nivel de ingresos.</li>
            <li><strong>Derecho a explicación y apelación:</strong> canales expeditos para solicitar revisión fundamentada.</li>
          </ul>
        </div>
      </div>`,
      en: `<div class="divergence-grid">
        <div class="divergence-card vicious">
          <h3>High-Risk Administrative Zones</h3>
          <ul>
            <li><strong>Student Admissions:</strong> algorithmic scoring perpetuating historic geographic and socio-economic biases.</li>
            <li><strong>Financial Aid & Scholarships:</strong> automated scoring denying assistance without interpretable rationales.</li>
            <li><strong>Dropout Risk Profiling:</strong> stigmatizing algorithmic labels that harm vulnerable student cohorts.</li>
          </ul>
        </div>
        <div class="divergence-card virtuous">
          <h3>Institutional Safeguards</h3>
          <ul>
            <li><strong>Prohibition of Automated Adverse Action:</strong> mandatory human committee sign-off on any refusal.</li>
            <li><strong>Algorithmic Disparity Audits:</strong> pre-deployment fairness checks across gender, region, and income.</li>
            <li><strong>Right to Explanation & Appeal:</strong> accessible recourse channels ensuring administrative due process.</li>
          </ul>
        </div>
      </div>`
    },
    source: { es: "World Bank, 2024, pp. 50–69; UN AI Governance for Humanity Lab, 2026", en: "World Bank, 2024, pp. 50–69; UN AI Governance for Humanity Lab, 2026" }
  },

  // 18. IA Agéntica y riesgos emergentes
  {
    type: "columns",
    kicker: { es: "Frontera tecnológica", en: "Frontier Technology" },
    title: { es: "IA Agéntica: Cuando el sistema deja de sugerir y pasa a actuar", en: "Agentic AI: When Systems Transition from Suggesting to Acting" },
    left: `<div class="callout"><span class="accent-coral">El salto de chatbot a agente autónomo</span><br><small style="font-size:0.95rem;color:var(--muted)">Ejecuta llamadas a bases de datos, envía correos, interactúa con plataformas y toma decisiones encadenadas.</small></div>`,
    right: `<ul class="point-list">
      <li><strong>Pérdida de fricción deliberativa:</strong> las acciones se ejecutan en milisegundos sin pausas humanas.</li>
      <li><strong>Efecto cascada:</strong> un error de interpretación genera acciones secundarias difíciles de revertir.</li>
      <li><strong>Dilución de responsabilidades:</strong> "¿Quién ordenó el pago o la baja del estudiante: el programador, el agente o el usuario?"</li>
    </ul>`,
    source: { es: "OECD, 2026, Agentic AI in Organisations, pp. 1–36", en: "OECD, 2026, Agentic AI in Organisations, pp. 1–36" }
  },

  // 19. Arquitectura de control para agentes (OECD 2026)
  {
    type: "agentic_guardrails",
    kicker: { es: "Salvaguardas técnicas y operativas", en: "Technical & Operational Safeguards" },
    title: { es: "Arquitectura de control tripartita para sistemas autónomos", en: "Tripartite Control Architecture for Autonomous Systems" },
    p1Title: { es: "Antes: Ex-Ante", en: "Before: Ex-Ante" },
    p1Items: {
      es: [
        "Principio de mínimo privilegio de acceso a bases de datos.",
        "Definición estricta de propósitos y acciones autorizadas.",
        "Prohibición de acceso a credenciales administrativas maestras."
      ],
      en: [
        "Strict principle of least privilege across campus databases.",
        "Bounded operational scope and verified intent boundaries.",
        "Explicit prohibition of root or administrative credential access."
      ]
    },
    p2Title: { es: "Durante: In-Situ", en: "During: In-Situ" },
    p2Items: {
      es: [
        "Telemetría en tiempo real de llamadas a herramientas externas.",
        "Mecanismo de parada de emergencia instantánea (Kill Switch).",
        "Pausas obligadas para aprobación humana en acciones críticas."
      ],
      en: [
        "Real-time telemetry and structured logging of API calls.",
        "Instant emergency stop mechanism (Human Kill Switch).",
        "Mandatory human check gates before irreversible execution."
      ]
    },
    p3Title: { es: "Después: Ex-Post", en: "After: Ex-Post" },
    p3Items: {
      es: [
        "Bitácora inmutable de auditoría para peritajes forenses.",
        "Atribución inequívoca de responsabilidad legal a un titular humano.",
        "Revisión periódica de incidentes para actualización de barreras."
      ],
      en: [
        "Immutable audit trails for institutional incident forensics.",
        "Unambiguous legal accountability assigned to designated human owners.",
        "Quarterly post-mortem reviews feeding iterative prompt boundary updates."
      ]
    },
    source: { es: "OECD, 2026, pp. 10–32", en: "OECD, 2026, pp. 10–32" }
  },

  // 20. Supervisión Humana Significativa (BM 2024)
  {
    type: "oversight",
    kicker: { es: "Principio no negociable", en: "Non-Negotiable Principle" },
    title: { es: "Supervisión humana significativa: Cuatro requisitos reales", en: "Meaningful Human Oversight: Four Enforceable Prerequisites" },
    s1Title: { es: "1. Información", en: "1. Information" },
    s1Desc: { es: "El supervisor y el afectado conocen exactamente qué datos procesó la IA y con qué lógica.", en: "Both the reviewer and affected party understand what data was processed and why." },
    s2Title: { es: "2. Competencia", en: "2. Competence" },
    s2Desc: { es: "La persona revisora tiene formación técnica y pedagógica suficiente para cuestionar el modelo.", en: "The human reviewer possesses verified domain expertise to challenge algorithm outputs." },
    s3Title: { es: "3. Intervención", en: "3. Intervention" },
    s3Desc: { es: "Autoridad jerárquica y tiempo real para anular, corregir o vetar la recomendación algorítmica.", en: "Real authority, workload time, and organizational backing to override or veto the system." },
    s4Title: { es: "4. Recurso", en: "4. Recourse" },
    s4Desc: { es: "El estudiante o trabajador tiene derecho a solicitar audiencia humana y apelación documentada.", en: "Transparent procedural rights for affected parties to appeal before an independent human board." },
    source: { es: "World Bank, 2024, Global Trends in AI Governance, pp. 50–69", en: "World Bank, 2024, Global Trends in AI Governance, pp. 50–69" }
  },

  // 21. Gobernanza de datos y compras tecnológicas
  {
    type: "columns",
    kicker: { es: "Contratación y legal", en: "Procurement & Legal" },
    title: { es: "La gobernanza empieza en el pliego de contratación de TI", en: "Governance Begins at the IT Procurement Stage" },
    left: `<div class="callout"><span class="accent-cyan">Cuatro cláusulas contractuales obligatorias</span><br><small style="font-size:0.95rem;color:var(--muted)">Previas a la firma de cualquier licencia de software institucional.</small></div>`,
    right: `<ul class="point-list">
      <li><strong>Cláusula de no-reentrenamiento:</strong> garantía jurídica de que los datos de la universidad no alimentan modelos públicos.</li>
      <li><strong>Soberanía y residencia del dato:</strong> certeza sobre la jurisdicción territorial de los centros de cómputo.</li>
      <li><strong>Transparencia técnica y métricas:</strong> reporte obligatorio de tasas de error, sesgos y caídas de servicio.</li>
      <li><strong>Cláusula de salida e interoperabilidad:</strong> exportación completa de datos en formatos abiertos sin cautiverio comercial.</li>
    </ul>`,
    source: { es: "World Bank, 2024; UNESCO, 2026", en: "World Bank, 2024; UNESCO, 2026" }
  },

  // 22. Ciclo de vida del dato institucional
  {
    type: "html",
    kicker: { es: "Arquitectura de datos", en: "Data Architecture" },
    title: { es: "Ciclo de vida del dato universitario: De la entrada a la salida", en: "Campus Data Lifecycle: From Ingestion to Exit" },
    html: {
      es: `<div class="oversight-flow">
        <div class="oversight-step"><div class="step-num-bubble">1</div><h3>Ingreso</h3><p>Minimización de datos: anonimizar antes de consultar APIs externas.</p></div>
        <div class="oversight-step"><div class="step-num-bubble">2</div><h3>Procesamiento</h3><p>Cifrado en tránsito y en reposo con claves gestionadas por la universidad.</p></div>
        <div class="oversight-step"><div class="step-num-bubble">3</div><h3>Retención</h3><p>Borrado automático periódico de registros de interacción no esenciales.</p></div>
        <div class="oversight-step"><div class="step-num-bubble">4</div><h3>Salida</h3><p>Migración completa sin penalizaciones si el proveedor altera sus términos.</p></div>
      </div>`,
      en: `<div class="oversight-flow">
        <div class="oversight-step"><div class="step-num-bubble">1</div><h3>Ingestion</h3><p>Strict data minimization: anonymize before piping into external APIs.</p></div>
        <div class="oversight-step"><div class="step-num-bubble">2</div><h3>Processing</h3><p>End-to-end encryption with institutionally controlled encryption keys.</p></div>
        <div class="oversight-step"><div class="step-num-bubble">3</div><h3>Retention</h3><p>Automated periodic purging of non-essential interaction telemetry.</p></div>
        <div class="oversight-step"><div class="step-num-bubble">4</div><h3>Portability</h3><p>Frictionless exit protocols if vendors degrade privacy covenants.</p></div>
      </div>`
    },
    source: { es: "World Bank, 2024, pp. 52–68; UNESCO, 2026", en: "World Bank, 2024, pp. 52–68; UNESCO, 2026" }
  },

  // 23. Brecha de implementación de políticas
  {
    type: "big_stat",
    kicker: { es: "La brecha de implementación", en: "The Implementation Chasm" },
    number: "37%",
    statClass: "coral",
    copy: {
      es: "del profesorado consultado estuvo de acuerdo en que los lineamientos de su universidad eran prácticos y fáciles de aplicar.",
      en: "of surveyed faculty agreed that their institutional AI guidelines were practical and easy to apply."
    },
    subtext: {
      es: "El 64% restante no los percibe prácticos (39% neutrales, 25% en desacuerdo; submuestra n = 3 862).",
      en: "The remaining 64% do not experience them as usable (39% neutral, 25% disagree; subsample n = 3,862)."
    },
    source: { es: "Digital Education Council, 2026, p. 74", en: "Digital Education Council, 2026, p. 74" }
  },

  // 24. Mapa de perfiles docentes (DEC 2026 p. 76)
  {
    type: "html",
    kicker: { es: "Comprensión docente", en: "Faculty Awareness Map" },
    title: { es: "Cuatro realidades docentes frente a la reglamentación", en: "Four Faculty Realities Regarding AI Regulation" },
    html: {
      es: `<div class="quadrant-grid">
        <div class="quadrant-card"><h3>Los Desinformados (25%)</h3><p>Desconocen la política institucional y perciben que la universidad no tiene reglas claras.</p><span class="quadrant-risk-badge">Prioridad: Comunicación masiva</span></div>
        <div class="quadrant-card"><h3>Los Inciertos (23%)</h3><p>Saben que existe un reglamento, pero tienen dudas sustanciales sobre su alcance y aplicación.</p><span class="quadrant-risk-badge">Prioridad: Talleres aplicados</span></div>
        <div class="quadrant-card"><h3>"Podemos Mejorar" (17%)</h3><p>Conocen la norma a fondo, pero advierten que carece de profundidad y aplicabilidad didáctica.</p><span class="quadrant-risk-badge">Prioridad: Revisión participativa</span></div>
        <div class="quadrant-card"><h3>Los Bien Informados (21%)</h3><p>Tienen claridad plena y consideran que los lineamientos son exhaustivos y prácticos.</p><span class="quadrant-risk-badge">Prioridad: Red de mentores</span></div>
      </div>`,
      en: `<div class="quadrant-grid">
        <div class="quadrant-card"><h3>The Lost (25%)</h3><p>Unaware of campus policy and believe guidelines are wholly lacking in comprehensiveness.</p><span class="quadrant-risk-badge">Priority: Broad Communication</span></div>
        <div class="quadrant-card"><h3>The Uncertain (23%)</h3><p>Aware of regulations but harbor profound ambiguity regarding operational classroom scope.</p><span class="quadrant-risk-badge">Priority: Applied Case Clinics</span></div>
        <div class="quadrant-card"><h3>The "We Can Do Better" (17%)</h3><p>Familiar with rules but critically point out serious voids in practical pedagogical depth.</p><span class="quadrant-risk-badge">Priority: Policy Iteration</span></div>
        <div class="quadrant-card"><h3>The Well-Informed (21%)</h3><p>Clear comprehension and perceive current institutional guidelines as complete and actionable.</p><span class="quadrant-risk-badge">Priority: Mentorship Champions</span></div>
      </div>`
    },
    source: { es: "Digital Education Council, 2026, p. 76 (n = 11 181)", en: "Digital Education Council, 2026, p. 76 (n = 11,181)" }
  },

  // 25. Exclusión en la formulación de políticas
  {
    type: "big_stat",
    kicker: { es: "Participación docente", en: "Faculty Participation" },
    number: "28%",
    statClass: "coral",
    copy: {
      es: "del profesorado en América Latina percibe que su universidad lo involucra significativamente en el diseño de políticas de IA.",
      en: "of faculty in Latin America agree their institution meaningfully involves them in shaping AI policies."
    },
    subtext: {
      es: "LATAM registra la exclusión percibida más alta del mundo: 20% en fuerte desacuerdo frente a solo 6% en Asia-Pacífico.",
      en: "LATAM reports the highest perceived exclusion globally: 20% strongly disagree vs. only 6% in APAC."
    },
    source: { es: "Digital Education Council, 2026, p. 75", en: "Digital Education Council, 2026, p. 75" }
  },

  // 26. Participación y voz estudiantil
  {
    type: "big_stat",
    kicker: { es: "Legitimidad y voz estudiantil", en: "Legitimacy & Student Voice" },
    number: "34%",
    statClass: "accent",
    copy: {
      es: "del estudiantado percibe que su institución solicita activamente su opinión y retroalimentación sobre IA.",
      en: "of students perceive that their institution actively seeks their feedback and perspective on AI."
    },
    subtext: {
      es: "La cifra está congelada: 34% en 2024 y exactamente 34% en 2026. La adopción explotó, pero la consulta no creció.",
      en: "Stagnant metric: 34% in 2024 and exactly 34% in 2026. Tool usage exploded, yet student participation flatlined."
    },
    source: { es: "Digital Education Council, 2026, p. 77", en: "Digital Education Council, 2026, p. 77" }
  },

  // 27. Ciclo continuo de gobernanza
  {
    type: "html",
    kicker: { es: "Ciclo de gestión", en: "Management Cycle" },
    title: { es: "La gobernanza funciona como un ciclo continuo de aprendizaje", en: "Governance Operates as an Iterative Learning Loop" },
    html: {
      es: `<div class="oversight-flow">
        <div class="oversight-step"><div class="step-num-bubble">1</div><h3>Inventario</h3><p>Mapear qué herramientas se usan, con qué datos y quién responde por ellas.</p></div>
        <div class="oversight-step"><div class="step-num-bubble">2</div><h3>Clasificación</h3><p>Triaje por nivel de riesgo, impacto en derechos y grado de autonomía.</p></div>
        <div class="oversight-step"><div class="step-num-bubble">3</div><h3>Control</h3><p>Contratos con salvaguardas, formación por roles y pruebas controladas.</p></div>
        <div class="oversight-step"><div class="step-num-bubble">4</div><h3>Revisión</h3><p>Monitoreo trimestral de incidentes, retroalimentación y ajuste de reglas.</p></div>
      </div>`,
      en: `<div class="oversight-flow">
        <div class="oversight-step"><div class="step-num-bubble">1</div><h3>Inventory</h3><p>Map which systems are used, which datasets are fed, and assigned owners.</p></div>
        <div class="oversight-step"><div class="step-num-bubble">2</div><h3>Classification</h3><p>Risk triage based on life impact, procedural rights, and autonomy level.</p></div>
        <div class="oversight-step"><div class="step-num-bubble">3</div><h3>Controls</h3><p>Enforceable contracts, role-tailored literacy, and sandbox trials.</p></div>
        <div class="oversight-step"><div class="step-num-bubble">4</div><h3>Review</h3><p>Quarterly incident post-mortems, community feedback, and policy tuning.</p></div>
      </div>`
    },
    source: { es: "UN AI Governance for Humanity Lab, 2026; World Bank, 2024", en: "UN AI Governance for Humanity Lab, 2026; World Bank, 2024" }
  },

  // 28. Toolkit de seis piezas de gobernanza
  {
    type: "toolkit",
    kicker: { es: "Herramientas operativas", en: "Operational Toolkit" },
    title: { es: "Seis instrumentos concretos para operar la gobernanza", en: "Six Concrete Instruments to Operationalize Governance" },
    t1Title: { es: "1. Inventario de Sistemas", en: "1. AI Systems Register" },
    t1Desc: { es: "Catálogo institucional de modelos autorizados, proveedores y áreas usuarias.", en: "Live catalog of sanctioned models, cloud vendors, and departmental owners." },
    t2Title: { es: "2. Matriz de Triaje de Riesgo", en: "2. Risk Triage Matrix" },
    t2Desc: { es: "Filtro rápido previo a cualquier adquisición o piloto institucional.", en: "Rapid impact assessment prior to any department software trial." },
    t3Title: { es: "3. Cláusulas de Compra y Salida", en: "3. Procurement Clauses" },
    t3Desc: { es: "Términos legales de privacidad, propiedad intelectual y portabilidad de datos.", en: "Binding legal terms safeguarding privacy, IP, and data portability." },
    t4Title: { es: "4. Rúbricas por Asignatura", en: "4. Syllabus Rubrics" },
    t4Desc: { es: "Pautas específicas de uso permitido, prohibido y citado en cada sílaba.", en: "Course-level guidelines detailing permitted use and citation methods." },
    t5Title: { es: "5. Canal de Reporte y Apelación", en: "5. Recourse Channel" },
    t5Desc: { es: "Mecanismo ágil para resolver quejas de evaluación y discriminación algorítmica.", en: "Due-process avenue resolving assessment disputes and bias reports." },
    t6Title: { es: "6. Auditoría y Métricas", en: "6. Auditing Scorecard" },
    t6Desc: { es: "Revisión anual con indicadores verificables para el Consejo Universitario.", en: "Annual evidence review presenting verified KPIs to the University Board." },
    source: { es: "World Bank, 2024, pp. 50–69; UN AI Governance for Humanity Lab, 2026", en: "World Bank, 2024, pp. 50–69; UN AI Governance for Humanity Lab, 2026" }
  },

  // 29. Matriz RACI Institucional
  {
    type: "raci",
    kicker: { es: "Responsabilidad institucional", en: "Institutional Accountability" },
    title: { es: "Matriz RACI: Cada decisión tiene dueño y evidencia", en: "RACI Governance Matrix: Every Decision Has an Owner" },
    source: { es: "Dansk Standard, 2026, pp. 14–19; World Bank, 2024", en: "Dansk Standard, 2026, pp. 14–19; World Bank, 2024" }
  },

  // 30. Tablero de 8 KPIs
  {
    type: "kpi",
    kicker: { es: "Monitoreo de alta dirección", en: "Executive Monitoring" },
    title: { es: "Tablero de control: Ocho métricas de gobernanza universitaria", en: "Executive Dashboard: Eight University Governance KPIs" },
    source: { es: "Dansk Standard, 2026; World Bank, 2024", en: "Dansk Standard, 2026; World Bank, 2024" }
  },

  // 31. La trampa de la alfabetización genérica
  {
    type: "html",
    kicker: { es: "Formación de capacidades", en: "Capacity Building" },
    title: { es: "Superar la trampa del 'prompt engineering' superficial", en: "Moving Beyond Superficial 'Prompt Engineering'" },
    html: {
      es: `<div class="divergence-grid">
        <div class="divergence-card vicious">
          <h3>Capacitación Instrumental</h3>
          <ul>
            <li>Talleres aislados de "trucos para redactar prompts rápidos".</li>
            <li>Enfoque consumista: cómo usar herramientas comerciales específicas.</li>
            <li>Se vuelve obsoleta cada vez que la empresa actualiza la interfaz o el modelo.</li>
          </ul>
        </div>
        <div class="divergence-card virtuous">
          <h3>Alfabetización Crítica y Ética</h3>
          <ul>
            <li>Comprensión de arquitectura: probabilidad estadística, sesgos y alucinaciones.</li>
            <li>Criterios de verificación metodológica y evaluación de fuentes primarias.</li>
            <li>Juicio reflexivo para decidir <strong>cuándo NO utilizar IA</strong> por razones éticas o epistémicas.</li>
          </ul>
        </div>
      </div>`,
      en: `<div class="divergence-grid">
        <div class="divergence-card vicious">
          <h3>Instrumental Training Trap</h3>
          <ul>
            <li>One-off workshops focused on superficial prompt crafting recipes.</li>
            <li>Consumer mindset: teaching mechanics of specific commercial tools.</li>
            <li>Becomes instantly obsolete every time software vendors deploy model upgrades.</li>
          </ul>
        </div>
        <div class="divergence-card virtuous">
          <h3>Critical Epistemic Literacy</h3>
          <ul>
            <li>Architectural understanding: probabilistic tokens, synthetic bias, and hallucination bounds.</li>
            <li>Verification discipline: validating machine claims against audited primary sources.</li>
            <li>Reflective judgment deciding <strong>when NOT to use AI</strong> for ethical and developmental reasons.</li>
          </ul>
        </div>
      </div>`
    },
    source: { es: "Digital Education Council, 2026, pp. 51–60; Dansk Standard, 2026", en: "Digital Education Council, 2026, pp. 51–60; Dansk Standard, 2026" }
  },

  // 32. Agenda de 90 días
  {
    type: "gantt",
    kicker: { es: "Plan de acción inmediata", en: "Immediate Action Plan" },
    title: { es: "Agenda de 90 días: Cinco prioridades para universidades peruanas", en: "90-Day Action Agenda: Five Immediate Priorities for Peruvian Campuses" },
    p1Title: { es: "Días 1–30: Mandato y Mapeo", en: "Days 1–30: Mandate & Mapping" },
    p1Desc: { es: "Constituir un comité directivo multiactor (Rectorado, Decanaturas, TI, Estudiantes) e inventariar usos informales.", en: "Establish a multi-stakeholder AI committee (Provost, Deans, IT, Students) and map shadow AI practices." },
    p2Title: { es: "Días 31–60: Reglas Claras", en: "Days 31–60: Assessment Clarity" },
    p2Desc: { es: "Aprobar directriz provisional de evaluación académica y prohibir sanciones basadas exclusivamente en detectores.", en: "Issue syllabus assessment guidance and prohibit sanctions based solely on commercial algorithmic detectors." },
    p3Title: { es: "Días 61–75: Formación y Pilotos", en: "Days 61–75: Targeted Literacy" },
    p3Desc: { es: "Lanzar clínicas de casos por disciplina y abrir un entorno controlado de pruebas de software institucional.", en: "Launch domain-specific case clinics and open vetted sandbox environments for institutional pilots." },
    p4Title: { es: "Días 76–90: Canal y Revisión", en: "Days 76–90: Recourse & Review" },
    p4Desc: { es: "Habilitar canal seguro de reporte de incidentes y presentar el primer informe de línea base al Consejo.", en: "Deploy safe incident recourse channel and present the first baseline readiness report to the University Council." },
    source: { es: "Síntesis de Digital Education Council, 2026; Dansk Standard, 2026; World Bank, 2024", en: "Synthesis of Digital Education Council, 2026; Dansk Standard, 2026; World Bank, 2024" }
  },

  // 33. Cierre y pregunta estratégica
  {
    type: "closing",
    kicker: { es: "Decisión y liderazgo", en: "Leadership & Mandate" },
    title: { es: "¿Qué capacidad institucional debe existir antes del próximo uso de IA de alto impacto?", en: "What Institutional Capacity Must Exist Before the Next High-Impact AI Adoption?" },
    subtitle: { es: "La respuesta de hoy define si la universidad lidera la transformación pedagógica o si traslada riesgos y desigualdades a su comunidad.", en: "Today's institutional choices determine whether universities lead educational transformation or surrender agency and equity." },
    source: { es: "Proyecto EthicalAI · Erasmus+ 101179117 | UCR · CIODD · UNED · UMCH", en: "EthicalAI Project · Erasmus+ 101179117 | UCR · CIODD · UNED · UMCH" }
  }
];

// ============================================================================
// 4. DIAPOSITIVAS: DECK 2 — 16 DIAPOSITIVAS (20 MINUTOS)
// ============================================================================

const cultureSlides = [
  // 1. Portada
  {
    type: "cover",
    kicker: { es: "Presentación Ejecutiva · Perú · 20 minutos", en: "Executive Presentation · Peru · 20 minutes" },
    title: { es: "¿Cómo construir una cultura de inteligencia artificial?", en: "How to Build an Artificial Intelligence Culture?" },
    subtitle: { es: "De iniciativas aisladas a una capacidad universitaria compartida y sostenible", en: "From isolated experiments to a shared, sustainable institutional capability" },
    source: { es: "Proyecto EthicalAI · Erasmus+ 101179117 | UCR · CIODD · UNED · UMCH", en: "EthicalAI Project · Erasmus+ 101179117 | UCR · CIODD · UNED · UMCH" }
  },

  // 2. Definición operativa de cultura
  {
    type: "quote",
    kicker: { es: "Definición operativa", en: "Operational Definition" },
    quote: {
      es: "La cultura de IA no es entusiasmo tecnológico: es el conjunto de hábitos institucionales que permiten decidir qué usar, bajo qué límites, con qué evidencias y quién responde por los resultados.",
      en: "An AI culture is not technology enthusiasm: it is the shared institutional muscle that decides what to adopt, within which boundaries, backed by what evidence, and who answers for outcomes."
    },
    source: { es: "Dansk Standard, 2026, DS/PAS 2500-4:2026, pp. 12–19", en: "Dansk Standard, 2026, DS/PAS 2500-4:2026, pp. 12–19" }
  },

  // 3. Tres brechas que una política no resuelve
  {
    type: "html",
    kicker: { es: "El límite del reglamento", en: "The Policy Paper Ceiling" },
    title: { es: "Tres brechas que un reglamento escrito no resuelve por sí solo", en: "Three Cultural Divides That Written Policies Cannot Solve Alone" },
    html: {
      es: `<div class="triad-grid">
        <div class="triad-card"><span class="triad-tag">Postura Institucional</span><h3>35%</h3><p>del profesorado califica a su universidad de 'reactiva' frente a los cambios tecnológicos.</p></div>
        <div class="triad-card"><span class="triad-tag">Aplicabilidad Real</span><h3>37%</h3><p>considera prácticos los lineamientos vigentes; el resto no sabe cómo aterrizarlos al aula.</p></div>
        <div class="triad-card"><span class="triad-tag">Claridad Percibida</span><h3>25%</h3><p>del estudiantado tiene plena claridad sobre las reglas que rigen sus evaluaciones.</p></div>
      </div>`,
      en: `<div class="triad-grid">
        <div class="triad-card"><span class="triad-tag">Institutional Stance</span><h3>35%</h3><p>of faculty perceive their campus stance as purely 'reactive' to technological disruption.</p></div>
        <div class="triad-card"><span class="triad-tag">Operational Utility</span><h3>37%</h3><p>find existing guidelines practical; the majority struggle to translate them into practice.</p></div>
        <div class="triad-card"><span class="triad-tag">Student Clarity</span><h3>25%</h3><p>of students report having clear, unambiguous understanding of assessment ground rules.</p></div>
      </div>`
    },
    source: { es: "Digital Education Council, 2026, pp. 73–80", en: "Digital Education Council, 2026, pp. 73–80" }
  },

  // 4. Modelo de Madurez Institucional (UNESCO 2026)
  {
    type: "html",
    kicker: { es: "Marco UNESCO 2026", en: "UNESCO 2026 Framework" },
    title: { es: "Las seis dimensiones de la madurez universitaria en IA", en: "Six Dimensions of Higher Education AI Maturity" },
    html: {
      es: `<div class="quadrant-grid">
        <div class="quadrant-card"><h3>1. Estrategia y Visión</h3><p>Propósito formativo explícito, presupuesto asignado y métricas de impacto educativo.</p></div>
        <div class="quadrant-card"><h3>2. Personas y Cultura</h3><p>Alfabetización diferenciada por estamentos, gestión del cambio y estímulos a la innovación.</p></div>
        <div class="quadrant-card"><h3>3. Gobernanza y Ética</h3><p>Comités multiactor, matriz de riesgos, supervisión humana y canales de apelación.</p></div>
        <div class="quadrant-card"><h3>4. Infraestructura y TI</h3><p>Interoperabilidad, conectividad equitativa, licenciamiento seguro y soberanía digital.</p></div>
        <div class="quadrant-card"><h3>5. Procesos y Operaciones</h3><p>Rúbricas de evaluación adaptadas, compras con salvaguardas y pilotos estructurados.</p></div>
        <div class="quadrant-card"><h3>6. Datos y Privacidad</h3><p>Políticas de minimización, protección de datos sensibles y auditoría de sesgos algorítmicos.</p></div>
      </div>`,
      en: `<div class="quadrant-grid">
        <div class="quadrant-card"><h3>1. Strategy & Vision</h3><p>Explicit educational purpose, multi-year funding, and verified student impact goals.</p></div>
        <div class="quadrant-card"><h3>2. People & Culture</h3><p>Role-tailored literacy programs, empathetic change stewardship, and faculty innovation support.</p></div>
        <div class="quadrant-card"><h3>3. Governance & Ethics</h3><p>Multi-stakeholder committees, risk-based triage, human oversight gates, and appeal protocols.</p></div>
        <div class="quadrant-card"><h3>4. Infrastructure & IT</h3><p>Interoperability, equitable high-speed access, secure enterprise licenses, and exit readiness.</p></div>
        <div class="quadrant-card"><h3>5. Operations & Workflows</h3><p>Redesigned assessment rubrics, ethical procurement, and structured sandbox pilots.</p></div>
        <div class="quadrant-card"><h3>6. Data & Privacy</h3><p>Data minimization mandates, student privacy vaults, and proactive algorithmic audits.</p></div>
      </div>`
    },
    source: { es: "UNESCO, 2026, AI Maturity Framework, pp. 20–27", en: "UNESCO, 2026, AI Maturity Framework, pp. 20–27" }
  },

  // 5. Los cuatro niveles de madurez
  {
    type: "maturity",
    kicker: { es: "Evaluación diagnóstica", en: "Diagnostic Assessment" },
    title: { es: "Los cuatro niveles de madurez organizacional en educación", en: "Four Stages of Higher Education Organizational Maturity" },
    source: { es: "UNESCO, 2026, pp. 20–27", en: "UNESCO, 2026, pp. 20–27" }
  },

  // 6. Arquitectura cultural: 5 engranajes
  {
    type: "culture",
    kicker: { es: "Engranajes culturales", en: "Cultural Architecture" },
    title: { es: "Cinco engranajes que sostienen la cultura institucional", en: "Five Interlocking Gears Sustaining Institutional Culture" },
    source: { es: "UNESCO, 2026; Dansk Standard, 2026", en: "UNESCO, 2026; Dansk Standard, 2026" }
  },

  // 7. Ocho Principios Rectores del MIT
  {
    type: "mit_principles",
    kicker: { es: "Principios rectores de MIT 2026", en: "MIT 2026 Guiding Principles" },
    title: { es: "Ocho principios institucionales para la cultura de IA (MIT)", en: "Eight Institutional Principles for AI Culture (MIT)" },
    source: { es: "MIT Ad Hoc Committee, 2026, pp. 7–13", en: "MIT Ad Hoc Committee, 2026, pp. 7–13" }
  },

  // 8. Alfabetización diferenciada por roles
  {
    type: "columns",
    kicker: { es: "Estrategia pedagógica", en: "Pedagogical Strategy" },
    title: { es: "Por qué fracasa el curso único masivo de IA para todos", en: "Why One-Size-Fits-All Campus AI Courses Always Fail" },
    left: `<div class="callout"><span class="accent-coral">El error del curso universal</span><br><small style="font-size:0.95rem;color:var(--muted)">Enseñar los mismos prompts genéricos a un decano, a un estudiante de derecho y al director de compras.</small></div>`,
    right: `<ul class="point-list">
      <li><strong>Necesidades opuestas:</strong> las autoridades necesitan criterio de riesgo; los docentes, diseño didáctico; el equipo técnico, arquitectura de seguridad.</li>
      <li><strong>Pérdida de tracción:</strong> el curso abstracto genera aburrimiento y no modifica el trabajo real de los departamentos.</li>
      <li><strong>Enfoque basado en roles:</strong> capacitar sobre los dilemas específicos que cada estamento debe resolver en su función diaria.</li>
    </ul>`,
    source: { es: "Dansk Standard, 2026, DS/PAS 2500-4:2026, pp. 14–25", en: "Dansk Standard, 2026, DS/PAS 2500-4:2026, pp. 14–25" }
  },

  // 8. Matriz de competencias por estamento
  {
    type: "competencies",
    kicker: { es: "Matriz formativa", en: "Competency Matrix" },
    title: { es: "Competencias diferenciadas para los cuatro estamentos", en: "Differentiated Competency Profiles Across Four Cohorts" },
    source: { es: "Dansk Standard, 2026, pp. 16–28; UNESCO, 2026", en: "Dansk Standard, 2026, pp. 16–28; UNESCO, 2026" }
  },

  // 9. Liderazgo y modelo federado
  {
    type: "divergence",
    kicker: { es: "Estructura organizacional", en: "Organizational Model" },
    title: { es: "Modelo federado: Coherencia central con autonomía disciplinar", en: "Federated Model: Central Coherence with Faculty Autonomy" },
    virtuousTitle: { es: "Núcleo Estratégico Central", en: "Central Strategic Core" },
    virtuousItems: {
      es: [
        "Establece principios rectores, apetito de riesgo y directrices jurídicas generales.",
        "Gestiona contratos institucionales, infraestructura de cómputo y ciberseguridad.",
        "Coordina el monitoreo global y el repositorio común de buenas prácticas."
      ],
      en: [
        "Establishes institutional ethical principles, risk guardrails, and compliance.",
        "Manages enterprise software agreements, compute sovereignty, and cybersecurity.",
        "Curates the institutional repository of validated assessment rubrics and case studies."
      ]
    },
    viciousTitle: { es: "Unidades Académicas y Facultades", en: "Academic Faculties & Departments" },
    viciousItems: {
      es: [
        "Traducen las pautas a las particularidades epistemológicas de cada carrera.",
        "Definen qué competencias disciplinarias no admiten asistencia algorítmica.",
        "Retroalimentan al núcleo central sobre problemas reales observados en el aula."
      ],
      en: [
        "Translate general guidelines into disciplinary pedagogical realities.",
        "Determine which fundamental learning goals strictly forbid algorithmic aids.",
        "Feed real classroom friction and innovation outcomes back into the central loop."
      ]
    },
    source: { es: "UNESCO, 2026, pp. 21–24", en: "UNESCO, 2026, pp. 21–24" }
  },

  // 10. Infraestructura de aprendizaje organizacional
  {
    type: "html",
    kicker: { es: "Capacidad instalada", en: "Organizational Infrastructure" },
    title: { es: "Infraestructura para aprender en la práctica continua", en: "Infrastructure for Continuous Organizational Learning" },
    html: {
      es: `<div class="quadrant-grid">
        <div class="quadrant-card"><h3>Clínicas de Casos Reales</h3><p>Sesiones mensuales de resolución de dilemas éticos y pedagógicos concretos entre docentes.</p></div>
        <div class="quadrant-card"><h3>Red de Referentes en Facultades</h3><p>Docentes y gestores formados como puntos de apoyo cercano en cada departamento.</p></div>
        <div class="quadrant-card"><h3>Repositorio Abierto de Rúbricas</h3><p>Plantillas de consignas, pautas de evaluación y acuerdos de clase reutilizables.</p></div>
        <div class="quadrant-card"><h3>Comunidades de Práctica</h3><p>Espacios horizontales para compartir evidencia de lo que funcionó y lo que fracasó.</p></div>
      </div>`,
      en: `<div class="quadrant-grid">
        <div class="quadrant-card"><h3>Live Case Clinics</h3><p>Monthly cross-faculty sessions solving concrete assessment dilemmas with peer coaching.</p></div>
        <div class="quadrant-card"><h3>Departmental Champions Network</h3><p>Upskilled faculty mentors serving as frontline coaches across academic departments.</p></div>
        <div class="quadrant-card"><h3>Open Rubric Repository</h3><p>Curated campus portal featuring reusable syllabi, rubrics, and assessment templates.</p></div>
        <div class="quadrant-card"><h3>Communities of Practice</h3><p>Horizontal academic circles sharing unvarnished empirical evidence of wins and failures.</p></div>
      </div>`
    },
    source: { es: "UNESCO, 2026; Dansk Standard, 2026, pp. 15–19", en: "UNESCO, 2026; Dansk Standard, 2026, pp. 15–19" }
  },

  // 12. Estructura Institucional de Gobernanza y Habilitación de MIT
  {
    type: "mit_governance",
    kicker: { es: "Estructura organizativa de MIT", en: "MIT Organizational Architecture" },
    title: { es: "Estructura institucional de gobernanza y habilitación (MIT)", en: "Institutional Governance & Enablement Structure (MIT)" },
    source: { es: "MIT Ad Hoc Committee, 2026, pp. 23–26", en: "MIT Ad Hoc Committee, 2026, pp. 23–26" }
  },

  // 13. Sandboxes y pilotos controlados
  {
    type: "columns",
    kicker: { es: "Experimentación responsable", en: "Responsible Experimentation" },
    title: { es: "Entornos seguros de prueba (Sandboxes) con criterio de salida", en: "Safe Sandbox Environments with Rigorous Exit Criteria" },
    left: `<div class="callout"><span class="accent-green">Innovar sin arriesgar al estudiante</span><br><small style="font-size:0.95rem;color:var(--muted)">La experimentación no puede ser un cheque en blanco sin métricas ni plazos.</small></div>`,
    right: `<ul class="point-list">
      <li><strong>Propósito delimitado:</strong> un piloto debe responder una pregunta pedagógica clara antes de comenzar.</li>
      <li><strong>Población y tiempo acotados:</strong> duración máxima de un semestre académico con consentimiento informado.</li>
      <li><strong>Evaluación de impacto:</strong> medir si mejoró el aprendizaje o si solo aumentó la velocidad de entrega.</li>
      <li><strong>Criterio explícito de cierre:</strong> si el piloto no demuestra valor formativo o vulnera la equidad, se cancela formalmente.</li>
    </ul>`,
    source: { es: "UNESCO, 2026; World Bank, 2024", en: "UNESCO, 2026; World Bank, 2024" }
  },

  // 12. Gobernanza participativa
  {
    type: "big_stat",
    kicker: { es: "Legitimidad institucional", en: "Institutional Legitimacy" },
    number: "34%",
    statClass: "accent",
    copy: {
      es: "del estudiantado percibe canales activos para opinar sobre la IA en su universidad.",
      en: "of students perceive active channels to voice their concerns about campus AI decisions."
    },
    subtext: {
      es: "La cultura universitaria se construye con las personas afectadas, no sobre ellas. La legitimidad exige comités con voz estudiantil y docente.",
      en: "University culture is co-constructed WITH affected communities, not imposed UPON them. Legitimacy requires student and faculty governance seats."
    },
    source: { es: "Digital Education Council, 2026, p. 77; UN AI Lab, 2026", en: "Digital Education Council, 2026, p. 77; UN AI Lab, 2026" }
  },

  // 13. Gestión del error sin punitividad
  {
    type: "divergence",
    kicker: { es: "Gestión del cambio", en: "Psychological Safety" },
    title: { es: "Cultura punitiva frente a cultura de seguridad psicológica", en: "Punitive Compliance vs. Psychological Safety Culture" },
    virtuousTitle: { es: "Cultura de Aprendizaje Institucional", en: "Institutional Learning Culture" },
    virtuousItems: {
      es: [
        "Incentiva el reporte inmediato de alucinaciones, fallas y sesgos algorítmicos.",
        "Trata los errores como evidencia diagnóstica para mejorar rúbricas y formación.",
        "Protege la buena fe de estudiantes y docentes en proyectos de innovación."
      ],
      en: [
        "Incentivizes immediate transparency when hallucinations or bias occur.",
        "Treats classroom friction as valuable diagnostic data to refine institutional rubrics.",
        "Guarantees psychological safety for honest experimentation within sandbox rules."
      ]
    },
    viciousTitle: { es: "Cultura del Miedo y la Caza de Brujas", en: "Punitive Witch-Hunt Culture" },
    viciousItems: {
      es: [
        "Empuja el uso de la IA a la clandestinidad y la deshonestidad obligada.",
        "Paraliza a los docentes por temor a ser denunciados o cuestionados.",
        "Oculta las brechas institucionales hasta que explota un escándalo público."
      ],
      en: [
        "Forces student tool usage completely underground into deceptive practices.",
        "Paralyzes well-meaning professors out of dread of public student grievances.",
        "Suppresses visibility into systematic operational flaws until crises erupt."
      ]
    },
    source: { es: "Dansk Standard, 2026, pp. 15–19; World Bank, 2024", en: "Dansk Standard, 2026, pp. 15–19; World Bank, 2024" }
  },

  // 14. Ruta de implementación de 5 pasos
  {
    type: "oversight",
    kicker: { es: "Metodología Dansk Standard", en: "Dansk Standard 5-Step Methodology" },
    title: { es: "Ruta de cinco pasos para convertir formación en capacidad", en: "Five-Step Lifecycle to Turn Training into Enduring Capacity" },
    s1Title: { es: "1. Mapear", en: "1. Map" },
    s1Desc: { es: "Diagnosticar usos reales, niveles de madurez y vacíos en los estamentos.", en: "Survey frontline practices, departmental maturity baselines, and friction points." },
    s2Title: { es: "2. Definir", en: "2. Define" },
    s2Desc: { es: "Establecer objetivos medibles de capacidad pedagógica y gobernanza.", en: "Articulate verifiable learning outcomes and ethical boundaries by degree." },
    s3Title: { es: "3. Probar", en: "3. Pilot" },
    s3Desc: { es: "Ejecutar formación aplicada en talleres disciplinares y sandboxes.", en: "Execute practice-based case clinics and sandbox prototypes in live courses." },
    s4Title: { es: "4. Implementar", en: "4. Implement" },
    s4Desc: { es: "Integrar las prácticas en los sílabos, rúbricas y reglamentos oficiales.", en: "Institutionalize validated rubrics into formal course syllabi and degree reviews." },
    source: { es: "Dansk Standard, 2026, DS/PAS 2500-4:2026, pp. 15–19", en: "Dansk Standard, 2026, DS/PAS 2500-4:2026, pp. 15–19" }
  },

  // 15. Hoja de ruta a 12 meses
  {
    type: "gantt",
    kicker: { es: "Cronograma estratégico", en: "Strategic Transformation Timeline" },
    title: { es: "Hoja de ruta a 12 meses para universidades peruanas", en: "12-Month Transformation Roadmap for Peruvian Universities" },
    p1Title: { es: "Meses 0–3: Cimientos", en: "Months 0–3: Foundations" },
    p1Desc: { es: "Comité multiactor, mapa de usos informales, directriz provisional de evaluación y diagnóstico de madurez.", en: "Multi-stakeholder committee, shadow use audit, provisional assessment guidance, and maturity assessment." },
    p2Title: { es: "Meses 3–6: Capacidades", en: "Months 3–6: Capacity" },
    p2Desc: { es: "Formación diferenciada por roles, red de referentes en facultades y primeros sandboxes controlados.", en: "Role-tailored literacy clinics, departmental champions network, and first vetted sandboxes." },
    p3Title: { es: "Meses 6–9: Integración", en: "Months 6–9: Integration" },
    p3Desc: { es: "Actualización de sílabos por asignaturas, compras institucionales con salvaguardas y tablero de KPIs.", en: "Syllabi updates across core degrees, secure enterprise data agreements, and KPI scorecard launch." },
    p4Title: { es: "Meses 9–12: Sostenibilidad", en: "Months 9–12: Sustainability" },
    p4Desc: { es: "Auditoría anual de incidentes, revisión participativa de normas y aprendizaje institucional continuo.", en: "Annual incident post-mortem audit, participatory policy tuning, and continuous learning review." },
    source: { es: "UNESCO, 2026; Dansk Standard, 2026", en: "UNESCO, 2026; Dansk Standard, 2026" }
  },

  // 16. Cierre y compromiso institucional
  {
    type: "closing",
    kicker: { es: "Compromiso de liderazgo", en: "Leadership Commitment" },
    title: { es: "¿Qué comportamiento deberá ser normal en nuestra universidad en 12 meses?", en: "What Behavior Must Become Everyday Normal on Our Campus in 12 Months?" },
    subtitle: { es: "La cultura cambia cuando esa visión se traduce en acompañamiento real, reglas claras, seguridad psicológica y aprendizaje compartido.", en: "Culture transforms when leadership translates vision into practical mentoring, transparent boundaries, psychological safety, and continuous learning." },
    source: { es: "Proyecto EthicalAI · Erasmus+ 101179117 | UCR · CIODD · UNED · UMCH", en: "EthicalAI Project · Erasmus+ 101179117 | UCR · CIODD · UNED · UMCH" }
  }
];

// ============================================================================
// 5. CASOS DE LA MATRIZ DE RIESGOS (INTERACTIVA)
// ============================================================================

const risks = [
  { label: { es: "Tutoría adaptativa de práctica", en: "Adaptive practice tutoring" }, group: "docencia", row: 0, col: 0 },
  { label: { es: "Lluvia de ideas y materiales", en: "Brainstorming & slide drafts" }, group: "docencia", row: 0, col: 1 },
  { label: { es: "Retroalimentación formativa", en: "Formative writing feedback" }, group: "docencia", row: 1, col: 1 },
  { label: { es: "Detección de similitud de texto", en: "Text similarity screening" }, group: "evaluacion", row: 1, col: 1 },
  { label: { es: "Calificación automatizada de exámenes", en: "Automated exam grading" }, group: "evaluacion", row: 2, col: 2 },
  { label: { es: "Triage en admisión y becas", en: "Admissions & scholarship scoring" }, group: "gestion", row: 2, col: 2 },
  { label: { es: "Chatbot de orientación y matrícula", en: "Campus info & enrollment chatbot" }, group: "gestion", row: 1, col: 0 },
  { label: { es: "Agente que ejecuta compras o bajas", en: "Agent purchasing or dropping courses" }, group: "agentes", row: 2, col: 2 },
  { label: { es: "Agente que consulta bases académicas", en: "Agent querying campus databases" }, group: "agentes", row: 1, col: 2 }
];

// ============================================================================
// 6. ESTADO DE LA APLICACIÓN Y CONTROLADORES
// ============================================================================

const decks = {
  responsible: {
    label: { es: "01 · Uso responsable", en: "01 · Responsible AI" },
    targetMinutes: 40,
    slides: responsibleSlides
  },
  culture: {
    label: { es: "02 · Cultura de IA", en: "02 · AI Culture" },
    targetMinutes: 20,
    slides: cultureSlides
  }
};

let currentDeckKey = null;
let currentIndex = 0;
let startTime = null;
let timerInterval = null;
let isSpeaking = false;
let autoVoiceEnabled = false;

// Selectores del DOM
const $ = (selector) => document.querySelector(selector);
const stage = $("#slide-stage");
const srAnnouncer = $("#srAnnouncer");

// ============================================================================
// 7. RENDERIZADO DE DIAPOSITIVAS Y COMPONENTES
// ============================================================================

function getText(obj) {
  if (!obj) return "";
  if (typeof obj === "string") return obj;
  return obj[currentLang] || obj.es || "";
}

function slideTemplate(slide) {
  const kicker = getText(slide.kicker);
  const title = getText(slide.title);
  const subtitle = getText(slide.subtitle);
  const source = getText(slide.source);

  const baseStart = `<section class="slide ${slide.type}" aria-label="${escapeHtml(title || kicker)}">
    <p class="slide-kicker">${kicker}</p>`;
  const sourceHtml = source ? `<p class="source-line"><span>${source}</span><span>EthicalAI · UCR · UNED · UMCH</span></p></section>` : `</section>`;

  if (slide.type === "cover") {
    return `${baseStart}
      <div class="slide-cover-logo-wrap" style="margin-bottom: 1.2rem;">
        <img src="LogoProjecto.png" alt="EthicalAI" style="height: 52px; width: auto; object-fit: contain; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.2));">
      </div>
      <h2>${title}</h2>
      <p class="subtitle">${subtitle}</p>
      ${sourceHtml}`;
  }

  if (slide.type === "closing") {
    return `${baseStart}
      <h2>${title}</h2>
      <p class="subtitle">${subtitle}</p>
      <div class="slide-closing-consortium" style="margin-top: 1.4rem; background: #f0f7fa; border-radius: var(--radius-md); padding: 0.8rem 1.2rem; border: 1px solid var(--line); display: flex; flex-direction: column; align-items: center; gap: 0.6rem;">
        <img src="LogosProyecto.png" alt="Logos oficiales de los socios del proyecto EthicalAI" style="max-width: 100%; height: auto; max-height: 55px; object-fit: contain;">
        <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-top: 0.2rem;">
          <img src="co-funded-eu.png" alt="Co-funded by the European Union" style="height: 26px; width: auto; object-fit: contain;">
          <div style="font-size: 0.73rem; color: var(--navy); display: flex; flex-wrap: wrap; justify-content: center; gap: 0.6rem; font-weight: 600;">
            <span>Erasmus+ 101179117</span>
            <span>🇨🇷 UCR · UNED · UH</span>
            <span>🇵🇪 UMCH · UNIFÉ</span>
            <span>🇪🇸 UV</span>
            <span>🇮🇹 Sapienza · ALPE · Pixel</span>
            <span>⚖️ CC BY-NC-SA 4.0</span>
          </div>
        </div>
      </div>
      ${sourceHtml}`;
  }

  if (slide.type === "quote") {
    return `${baseStart}
      <div class="quote-box">
        <blockquote>“${getText(slide.quote)}”</blockquote>
      </div>
      ${sourceHtml}`;
  }

  if (slide.type === "big_stat") {
    return `${baseStart}
      <h2>${title || kicker}</h2>
      <div class="big-stat-display">
        <div class="big-stat-num ${slide.statClass || ''}">${slide.number}</div>
        <div class="big-stat-copy">
          <strong>${getText(slide.copy)}</strong>
          ${slide.subtext ? `<p style="margin:0.5rem 0 0;font-size:0.95rem;color:var(--muted)">${getText(slide.subtext)}</p>` : ''}
        </div>
      </div>
      ${sourceHtml}`;
  }

  if (slide.type === "regional_bars") {
    return `${baseStart}
      <h2>${title}</h2>
      <p class="subtitle">${subtitle}</p>
      <div class="chart-bar-group" role="img" aria-label="Comparativa regional: América Latina 92%, Global 88%, EMEA 85%, Estados Unidos y Canadá 65%">
        <div class="bar-row">
          <span class="bar-label">América Latina</span>
          <div class="bar-track"><div class="bar-fill latam" style="width: 92%">92%</div></div>
          <span class="bar-val">92%</span>
        </div>
        <div class="bar-row">
          <span class="bar-label">${currentLang === 'es' ? 'Promedio Global' : 'Global Average'}</span>
          <div class="bar-track"><div class="bar-fill global" style="width: 88%">88%</div></div>
          <span class="bar-val">88%</span>
        </div>
        <div class="bar-row">
          <span class="bar-label">EMEA</span>
          <div class="bar-track"><div class="bar-fill emea" style="width: 85%">85%</div></div>
          <span class="bar-val">85%</span>
        </div>
        <div class="bar-row">
          <span class="bar-label">US & Canadá</span>
          <div class="bar-track"><div class="bar-fill us" style="width: 65%">65%</div></div>
          <span class="bar-val">65%</span>
        </div>
      </div>
      ${sourceHtml}`;
  }

  if (slide.type === "triad") {
    return `${baseStart}
      <h2>${title}</h2>
      <div class="triad-grid">
        <div class="triad-card"><span class="triad-tag">Pilar I</span><h3>${getText(slide.c1Title)}</h3><p>${getText(slide.c1Desc)}</p></div>
        <div class="triad-card"><span class="triad-tag">Pilar II</span><h3>${getText(slide.c2Title)}</h3><p>${getText(slide.c2Desc)}</p></div>
        <div class="triad-card"><span class="triad-tag">Pilar III (Clave)</span><h3>${getText(slide.c3Title)}</h3><p>${getText(slide.c3Desc)}</p></div>
      </div>
      ${sourceHtml}`;
  }

  if (slide.type === "divergence") {
    const vItems = (slide.virtuousItems[currentLang] || slide.virtuousItems.es).map(x => `<li>${x}</li>`).join("");
    const viItems = (slide.viciousItems[currentLang] || slide.viciousItems.es).map(x => `<li>${x}</li>`).join("");
    return `${baseStart}
      <h2>${title}</h2>
      <div class="divergence-grid">
        <div class="divergence-card virtuous">
          <h3>✅ ${getText(slide.virtuousTitle)}</h3>
          <ul>${vItems}</ul>
        </div>
        <div class="divergence-card vicious">
          <h3>⚠️ ${getText(slide.viciousTitle)}</h3>
          <ul>${viItems}</ul>
        </div>
      </div>
      ${sourceHtml}`;
  }

  if (slide.type === "columns") {
    return `${baseStart}
      <h2>${title}</h2>
      <div class="divergence-grid">
        <div>${getText(slide.left)}</div>
        <div>${getText(slide.right)}</div>
      </div>
      ${sourceHtml}`;
  }

  if (slide.type === "quadrants") {
    return `${baseStart}
      <h2>${title}</h2>
      <div class="quadrant-grid">
        <div class="quadrant-card"><h3>${getText(slide.q1Title)}</h3><p>${getText(slide.q1Desc)}</p><span class="quadrant-risk-badge">${getText(slide.q1Badge)}</span></div>
        <div class="quadrant-card"><h3>${getText(slide.q2Title)}</h3><p>${getText(slide.q2Desc)}</p><span class="quadrant-risk-badge">${getText(slide.q2Badge)}</span></div>
        <div class="quadrant-card"><h3>${getText(slide.q3Title)}</h3><p>${getText(slide.q3Desc)}</p><span class="quadrant-risk-badge">${getText(slide.q3Badge)}</span></div>
        <div class="quadrant-card"><h3>${getText(slide.q4Title)}</h3><p>${getText(slide.q4Desc)}</p><span class="quadrant-risk-badge">${getText(slide.q4Badge)}</span></div>
      </div>
      ${sourceHtml}`;
  }

  if (slide.type === "pyramid") {
    return `${baseStart}
      <h2>${title}</h2>
      <div class="sovereign-pyramid">
        <div class="pyramid-tier tier-3">
          <div class="tier-header"><strong>${getText(slide.tier3Title)}</strong><span>Nivel Soberanía</span></div>
          <p class="tier-body">${getText(slide.tier3Desc)}</p>
        </div>
        <div class="pyramid-tier tier-2">
          <div class="tier-header"><strong>${getText(slide.tier2Title)}</strong><span>Nivel Pertinencia</span></div>
          <p class="tier-body">${getText(slide.tier2Desc)}</p>
        </div>
        <div class="pyramid-tier tier-1">
          <div class="tier-header"><strong>${getText(slide.tier1Title)}</strong><span>Nivel Eficiencia</span></div>
          <p class="tier-body">${getText(slide.tier1Desc)}</p>
        </div>
      </div>
      ${sourceHtml}`;
  }

  if (slide.type === "agentic_guardrails") {
    const p1 = (slide.p1Items[currentLang] || slide.p1Items.es).map(x => `<li>${x}</li>`).join("");
    const p2 = (slide.p2Items[currentLang] || slide.p2Items.es).map(x => `<li>${x}</li>`).join("");
    const p3 = (slide.p3Items[currentLang] || slide.p3Items.es).map(x => `<li>${x}</li>`).join("");
    return `${baseStart}
      <h2>${title}</h2>
      <div class="agentic-guardrails">
        <div class="guardrail-card"><h3>🛡️ ${getText(slide.p1Title)}</h3><ul>${p1}</ul></div>
        <div class="guardrail-card during"><h3>⚡ ${getText(slide.p2Title)}</h3><ul>${p2}</ul></div>
        <div class="guardrail-card"><h3>📋 ${getText(slide.p3Title)}</h3><ul>${p3}</ul></div>
      </div>
      ${sourceHtml}`;
  }

  if (slide.type === "oversight") {
    return `${baseStart}
      <h2>${title}</h2>
      <div class="oversight-flow">
        <div class="oversight-step"><div class="step-num-bubble">1</div><h3>${getText(slide.s1Title)}</h3><p>${getText(slide.s1Desc)}</p></div>
        <div class="oversight-step"><div class="step-num-bubble">2</div><h3>${getText(slide.s2Title)}</h3><p>${getText(slide.s2Desc)}</p></div>
        <div class="oversight-step"><div class="step-num-bubble">3</div><h3>${getText(slide.s3Title)}</h3><p>${getText(slide.s3Desc)}</p></div>
        <div class="oversight-step"><div class="step-num-bubble">4</div><h3>${getText(slide.s4Title)}</h3><p>${getText(slide.s4Desc)}</p></div>
      </div>
      ${sourceHtml}`;
  }

  if (slide.type === "eval_evidence") {
    return `${baseStart}
      <h2>${title}</h2>
      <div class="eval-evidence-grid">
        <div class="evidence-card"><strong>${getText(slide.e1Title)}</strong><p>${getText(slide.e1Desc)}</p><span class="evidence-example">${getText(slide.e1Ex)}</span></div>
        <div class="evidence-card"><strong>${getText(slide.e2Title)}</strong><p>${getText(slide.e2Desc)}</p><span class="evidence-example">${getText(slide.e2Ex)}</span></div>
        <div class="evidence-card"><strong>${getText(slide.e3Title)}</strong><p>${getText(slide.e3Desc)}</p><span class="evidence-example">${getText(slide.e3Ex)}</span></div>
        <div class="evidence-card"><strong>${getText(slide.e4Title)}</strong><p>${getText(slide.e4Desc)}</p><span class="evidence-example">${getText(slide.e4Ex)}</span></div>
      </div>
      ${sourceHtml}`;
  }

  if (slide.type === "toolkit") {
    return `${baseStart}
      <h2>${title}</h2>
      <div class="toolkit-grid">
        <div class="toolkit-card"><span class="toolkit-badge">1</span><div><strong>${getText(slide.t1Title)}</strong><p>${getText(slide.t1Desc)}</p></div></div>
        <div class="toolkit-card"><span class="toolkit-badge">2</span><div><strong>${getText(slide.t2Title)}</strong><p>${getText(slide.t2Desc)}</p></div></div>
        <div class="toolkit-card"><span class="toolkit-badge">3</span><div><strong>${getText(slide.t3Title)}</strong><p>${getText(slide.t3Desc)}</p></div></div>
        <div class="toolkit-card"><span class="toolkit-badge">4</span><div><strong>${getText(slide.t4Title)}</strong><p>${getText(slide.t4Desc)}</p></div></div>
        <div class="toolkit-card"><span class="toolkit-badge">5</span><div><strong>${getText(slide.t5Title)}</strong><p>${getText(slide.t5Desc)}</p></div></div>
        <div class="toolkit-card"><span class="toolkit-badge">6</span><div><strong>${getText(slide.t6Title)}</strong><p>${getText(slide.t6Desc)}</p></div></div>
      </div>
      ${sourceHtml}`;
  }

  if (slide.type === "raci") {
    const esTable = `
      <div class="raci-table-wrap">
        <table class="raci-table">
          <thead><tr><th>Estamento / Rol</th><th>Decide y Aprueba (A)</th><th>Implementa (R)</th><th>Demuestra ante Auditoría</th></tr></thead>
          <tbody>
            <tr><td class="raci-role">Consejo y Rectorado</td><td>Apetito de riesgo, compras mayores y presupuesto</td><td>Comisión de IA</td><td>Políticas vigentes e informes anuales</td></tr>
            <tr><td class="raci-role">Decanos y Departamentos</td><td>Directrices por disciplina y reglas de evaluación</td><td>Claustro docente</td><td>Rúbricas en sílabos y defensas orales</td></tr>
            <tr><td class="raci-role">TI, Legal y Compras</td><td>Arquitectura técnica, seguridad y contratos</td><td>Equipos técnicos</td><td>Cláusulas de no-reentrenamiento y logs</td></tr>
            <tr><td class="raci-role">Estudiantado y Comunidad</td><td>Declaración honesta de herramientas utilizadas</td><td>Representación</td><td>Canal activo de apelación y consulta</td></tr>
          </tbody>
        </table>
      </div>`;
    const enTable = `
      <div class="raci-table-wrap">
        <table class="raci-table">
          <thead><tr><th>Role / Stakeholder</th><th>Accountable (A)</th><th>Responsible (R)</th><th>Audit Evidence</th></tr></thead>
          <tbody>
            <tr><td class="raci-role">Provost & Council</td><td>Risk appetite, enterprise budget & mandate</td><td>Steering Committee</td><td>Annual readiness reports & policies</td></tr>
            <tr><td class="raci-role">Deans & Departments</td><td>Disciplinary guidelines & rubric approval</td><td>Faculty Chairs</td><td>Course syllabi & oral exam logs</td></tr>
            <tr><td class="raci-role">IT, Legal & Procurement</td><td>Security architecture & vendor covenants</td><td>Technical Teams</td><td>Non-reuse contracts & telemetry trails</td></tr>
            <tr><td class="raci-role">Students & Campus</td><td>Transparent disclosure of AI usage</td><td>Elected Reps</td><td>Active appeal register & feedback logs</td></tr>
          </tbody>
        </table>
      </div>`;
    return `${baseStart}
      <h2>${title}</h2>
      ${currentLang === 'es' ? esTable : enTable}
      ${sourceHtml}`;
  }

  if (slide.type === "kpi") {
    const esKpi = `
      <div class="kpi-scorecard">
        <div class="kpi-card"><span class="kpi-num">01</span><strong>Sistemas Mapeados</strong><span>% de herramientas con ficha técnica</span></div>
        <div class="kpi-card"><span class="kpi-num">02</span><strong>Dueño Asignado</strong><span>100% de casos con titular humano</span></div>
        <div class="kpi-card"><span class="kpi-num">03</span><strong>Sílabos Claros</strong><span>% de asignaturas con pauta explícita</span></div>
        <div class="kpi-card"><span class="kpi-num">04</span><strong>Docentes Formados</strong><span>Cobertura por área disciplinar</span></div>
        <div class="kpi-card"><span class="kpi-num">05</span><strong>Tiempo Respuesta</strong><span>Días para resolver quejas</span></div>
        <div class="kpi-card"><span class="kpi-num">06</span><strong>Casos Apelados</strong><span>Tasa de decisiones rectificadas</span></div>
        <div class="kpi-card"><span class="kpi-num">07</span><strong>Planes de Salida</strong><span>Contratos con cláusula de portabilidad</span></div>
        <div class="kpi-card"><span class="kpi-num">08</span><strong>Pilotos Evaluados</strong><span>Sandboxes cerrados con informe</span></div>
      </div>`;
    const enKpi = `
      <div class="kpi-scorecard">
        <div class="kpi-card"><span class="kpi-num">01</span><strong>Mapped Systems</strong><span>% of tools with vetted risk sheets</span></div>
        <div class="kpi-card"><span class="kpi-num">02</span><strong>Assigned Owners</strong><span>100% high-impact use with human owners</span></div>
        <div class="kpi-card"><span class="kpi-num">03</span><strong>Syllabi Clarity</strong><span>% of courses with explicit guidelines</span></div>
        <div class="kpi-card"><span class="kpi-num">04</span><strong>Trained Faculty</strong><span>Upskilling reach by department</span></div>
        <div class="kpi-card"><span class="kpi-num">05</span><strong>Turnaround Time</strong><span>Days to resolve academic disputes</span></div>
        <div class="kpi-card"><span class="kpi-num">06</span><strong>Appealed Actions</strong><span>Ratio of revised algorithmic decisions</span></div>
        <div class="kpi-card"><span class="kpi-num">07</span><strong>Exit Covenants</strong><span>Contracts with complete data portability</span></div>
        <div class="kpi-card"><span class="kpi-num">08</span><strong>Evaluated Pilots</strong><span>Sandboxes concluded with formal reports</span></div>
      </div>`;
    return `${baseStart}
      <h2>${title}</h2>
      ${currentLang === 'es' ? esKpi : enKpi}
      ${sourceHtml}`;
  }

  if (slide.type === "gantt") {
    return `${baseStart}
      <h2>${title}</h2>
      <div class="gantt-roadmap">
        <div class="gantt-phase"><strong>${getText(slide.p1Title)}</strong><span>${getText(slide.p1Desc)}</span></div>
        <div class="gantt-phase"><strong>${getText(slide.p2Title)}</strong><span>${getText(slide.p2Desc)}</span></div>
        <div class="gantt-phase"><strong>${getText(slide.p3Title)}</strong><span>${getText(slide.p3Desc)}</span></div>
        <div class="gantt-phase"><strong>${getText(slide.p4Title)}</strong><span>${getText(slide.p4Desc)}</span></div>
      </div>
      ${sourceHtml}`;
  }

  if (slide.type === "competencies") {
    const esComp = `
      <div class="competency-table-wrap">
        <div class="competency-column">
          <h3>Autoridades y Directivos</h3>
          <ul>
            <li>Apetito de riesgo, estrategia y asignación de presupuesto.</li>
            <li>Compras tecnológicas responsables y soberanía de datos.</li>
            <li>Rendición de cuentas ante la sociedad y acreditación.</li>
          </ul>
        </div>
        <div class="competency-column">
          <h3>Claustro Docente</h3>
          <ul>
            <li>Rediseño pedagógico de consignas y rúbricas.</li>
            <li>Verificación crítica y detección de alucinaciones.</li>
            <li>Diálogo formativo con el estudiante sobre autoría.</li>
          </ul>
        </div>
        <div class="competency-column">
          <h3>Equipos TI y Legales</h3>
          <ul>
            <li>Arquitectura de privacidad, seguridad y tokens de API.</li>
            <li>Monitoreo y telemetría de sistemas agénticos (kill switch).</li>
            <li>Auditoría de sesgos algorítmicos y debidos procesos.</li>
          </ul>
        </div>
      </div>`;
    const enComp = `
      <div class="competency-table-wrap">
        <div class="competency-column">
          <h3>Executive Leadership</h3>
          <ul>
            <li>Risk appetite, capital budgeting, and strategic alignment.</li>
            <li>Sovereign data procurement and ethical cloud compliance.</li>
            <li>Public accountability and accreditation reporting.</li>
          </ul>
        </div>
        <div class="competency-column">
          <h3>Faculty & Instructors</h3>
          <ul>
            <li>Instructional design: authentic assessment rubrics.</li>
            <li>Critical fact-checking and bias detection pedagogy.</li>
            <li>Coaching students on intellectual transparency.</li>
          </ul>
        </div>
        <div class="competency-column">
          <h3>IT, Security & Legal Staff</h3>
          <ul>
            <li>Privacy engineering, secure gateways, and API tokens.</li>
            <li>Agent telemetry, logging, and operational kill switches.</li>
            <li>Algorithmic bias audits and institutional compliance.</li>
          </ul>
        </div>
      </div>`;
    return `${baseStart}
      <h2>${title}</h2>
      ${currentLang === 'es' ? esComp : enComp}
      ${sourceHtml}`;
  }

  if (slide.type === "html") {
    return `${baseStart}
      <h2>${title}</h2>
      ${getText(slide.html)}
      ${sourceHtml}`;
  }

  if (slide.type === "risk") {
    return `${baseStart}
      <h2>${title}</h2>
      ${renderRiskMatrix()}
      ${sourceHtml}`;
  }

  if (slide.type === "maturity") {
    return `${baseStart}
      <h2>${title}</h2>
      ${renderMaturityComponent()}
      ${sourceHtml}`;
  }

  if (slide.type === "culture") {
    const esCulture = `
      <div class="quadrant-grid">
        <div class="quadrant-card"><h3>1. Propósito y Liderazgo</h3><p>El Consejo marca la dirección y aporta recursos reales sin abdicar de la visión humanista.</p></div>
        <div class="quadrant-card"><h3>2. Reglas Claras y Prácticas</h3><p>Lineamientos que delimitan qué está permitido y qué no en cada actividad formativa.</p></div>
        <div class="quadrant-card"><h3>3. Práctica Acompañada</h3><p>Clínicas y talleres continuos que convierten los principios en hábitos cotidianos.</p></div>
        <div class="quadrant-card"><h3>4. Participación y Escucha</h3><p>Canales donde estudiantes y docentes señalan vacíos y proponen mejoras sin temor.</p></div>
      </div>`;
    const enCulture = `
      <div class="quadrant-grid">
        <div class="quadrant-card"><h3>1. Purpose & Leadership</h3><p>Executive leadership provides strategic clarity and funding rooted in humanist ideals.</p></div>
        <div class="quadrant-card"><h3>2. Usable Boundaries</h3><p>Actionable, unambiguous rules clarifying permitted use in every course syllabus.</p></div>
        <div class="quadrant-card"><h3>3. Supported Practice</h3><p>Applied case clinics and departmental coaches translating theory into daily habits.</p></div>
        <div class="quadrant-card"><h3>4. Community Voice</h3><p>Safe participatory avenues where students and faculty report flaws without fear.</p></div>
      </div>`;
    return `${baseStart}
      <h2>${title}</h2>
      ${currentLang === 'es' ? esCulture : enCulture}
      ${sourceHtml}`;
  }

  if (slide.type === "sloan_matrix") {
    const esContent = `
      <div class="sloan-matrix-wrap">
        <div class="sloan-axis-y">Riesgo / Costo del Error (Bajo → Alto)</div>
        <div class="sloan-quadrant strategic">
          <span class="sloan-badge" style="background:#fee2e2;color:#991b1b">Alta Ambigüedad · Alto Riesgo</span>
          <h3>Decisión Estratégica Humana</h3>
          <p><strong>Humano lidera con firmeza:</strong> enmarca el problema ético, pondera valores y asume la responsabilidad final. La IA solo aporta insumos analíticos exploratorios.</p>
        </div>
        <div class="sloan-quadrant predictable">
          <span class="sloan-badge" style="background:#fef3c7;color:#92400e">Baja Ambigüedad · Alto Riesgo</span>
          <h3>Recomendación Crítica</h3>
          <p><strong>IA recomienda, Humano valida y decide:</strong> datos estructurados pero consecuencias severas (admisión, graduación, becas). Validación humana obligatoria.</p>
        </div>
        <div class="sloan-quadrant exploratory">
          <span class="sloan-badge" style="background:#e0f2fe;color:#075985">Alta Ambigüedad · Bajo Riesgo</span>
          <h3>Co-creación Exploratoria</h3>
          <p><strong>Colaboración abierta:</strong> ideación curricular, exploración de hipótesis y síntesis divergente donde el costo de equivocarse es mínimo.</p>
        </div>
        <div class="sloan-quadrant routine">
          <span class="sloan-badge" style="background:#dcfce7;color:#166534">Baja Ambigüedad · Bajo Riesgo</span>
          <h3>Automatización de Rutina</h3>
          <p><strong>Delegación y eficiencia:</strong> flujos estandarizados con reglas claras e impacto bajo (transcripción, traducción de formatos, agendas). Control por muestreo.</p>
        </div>
        <div class="sloan-axis-x">Ambigüedad / Incertidumbre de Datos y Consenso (Baja → Alta)</div>
      </div>`;
    const enContent = `
      <div class="sloan-matrix-wrap">
        <div class="sloan-axis-y">Risk / Cost of Error (Low → High)</div>
        <div class="sloan-quadrant strategic">
          <span class="sloan-badge" style="background:#fee2e2;color:#991b1b">High Ambiguity · High Risk</span>
          <h3>Strategic Human Leadership</h3>
          <p><strong>Human strongly leads:</strong> frames the problem, weighs moral tradeoffs, and owns the outcome. AI provides background analytical inputs only.</p>
        </div>
        <div class="sloan-quadrant predictable">
          <span class="sloan-badge" style="background:#fef3c7;color:#92400e">Low Ambiguity · High Risk</span>
          <h3>Critical Recommendation</h3>
          <p><strong>AI recommends, Human validates & decides:</strong> clear data but high stakes (admissions, graduation). Mandatory human sign-off before action.</p>
        </div>
        <div class="sloan-quadrant exploratory">
          <span class="sloan-badge" style="background:#e0f2fe;color:#075985">High Ambiguity · Low Risk</span>
          <h3>Exploratory Co-Creation</h3>
          <p><strong>Open-ended exploration:</strong> hypothesis framing, curriculum ideation, and multi-perspective drafting where error cost is negligible.</p>
        </div>
        <div class="sloan-quadrant routine">
          <span class="sloan-badge" style="background:#dcfce7;color:#166534">Low Ambiguity · Low Risk</span>
          <h3>Routine Automation</h3>
          <p><strong>Delegation & efficiency:</strong> repetitive workflows with clear consensus and minimal harm (formatting, transcripts, scheduling). Sample-based checks.</p>
        </div>
        <div class="sloan-axis-x">Ambiguity / Data Uncertainty & Dissent (Low → High)</div>
      </div>`;
    return `${baseStart}
      <h2>${title}</h2>
      ${currentLang === 'es' ? esContent : enContent}
      ${sourceHtml}`;
  }

  if (slide.type === "syllabus_menu") {
    const esContent = `
      <div class="syllabus-menu-grid">
        <div class="syllabus-policy-card unrestricted">
          <div class="policy-icon">🟢</div>
          <strong>Sin Restricciones</strong>
          <p>Uso amplio y transparente. Se exige declarar herramientas y prompts utilizados.</p>
          <div class="policy-best-for"><strong>Ideal:</strong> Cursos de innovación, análisis de datos y codificación aplicada.</div>
        </div>
        <div class="syllabus-policy-card limited">
          <div class="policy-icon">🟡</div>
          <strong>Herramienta Acotada</strong>
          <p>Permitida solo en fases específicas (búsqueda bibliográfica, revisión gramatical).</p>
          <div class="policy-best-for"><strong>Ideal:</strong> Ensayos críticos, redacción académica y proyectos por etapas.</div>
        </div>
        <div class="syllabus-policy-card required">
          <div class="policy-icon">🔵</div>
          <strong>Uso Requerido</strong>
          <p>Integración obligatoria con propósito pedagógico: comparar, auditar o co-diseñar.</p>
          <div class="policy-best-for"><strong>Ideal:</strong> Análisis de sesgos, evaluación crítica de LLMs y talleres prácticos.</div>
        </div>
        <div class="syllabus-policy-card prohibited">
          <div class="policy-icon">🔴</div>
          <strong>Estrictamente Prohibida</strong>
          <p>Uso vetado para evaluar dominio fundacional autónomo de la competencia.</p>
          <div class="policy-best-for"><strong>Ideal:</strong> Exámenes orales, razonamiento deductivo inicial y pruebas en aula.</div>
        </div>
      </div>`;
    const enContent = `
      <div class="syllabus-menu-grid">
        <div class="syllabus-policy-card unrestricted">
          <div class="policy-icon">🟢</div>
          <strong>Unrestricted Use</strong>
          <p>Broad, transparent adoption. Students must cite tools, workflows, and prompts.</p>
          <div class="policy-best-for"><strong>Best for:</strong> Advanced prototyping, software design, and exploratory analytics.</div>
        </div>
        <div class="syllabus-policy-card limited">
          <div class="policy-icon">🟡</div>
          <strong>Limited Support Tool</strong>
          <p>Permitted strictly for designated stages (literature review, grammar refinement).</p>
          <div class="policy-best-for"><strong>Best for:</strong> Argumentative writing, research proposals, and stage-gate projects.</div>
        </div>
        <div class="syllabus-policy-card required">
          <div class="policy-icon">🔵</div>
          <strong>Required Usage</strong>
          <p>Intentional pedagogical integration: benchmarking, auditing bias, co-creation.</p>
          <div class="policy-best-for"><strong>Best for:</strong> Critical AI literacy, model evaluation, and hands-on ethics labs.</div>
        </div>
        <div class="syllabus-policy-card prohibited">
          <div class="policy-icon">🔴</div>
          <strong>Strictly Prohibited</strong>
          <p>Zero algorithmic assistance allowed to evaluate foundational autonomous mastery.</p>
          <div class="policy-best-for"><strong>Best for:</strong> Oral defenses, foundational math/logic, and in-person reasoning exams.</div>
        </div>
      </div>`;
    return `${baseStart}
      <h2>${title}</h2>
      ${currentLang === 'es' ? esContent : enContent}
      ${sourceHtml}`;
  }

  if (slide.type === "mit_principles") {
    const esContent = `
      <div class="principles-flow">
        <div class="principle-box"><strong>1. Humildad Intelectual</strong><span>Reconocer la velocidad y el alcance de la tecnología sin arrogancia.</span></div>
        <div class="principle-box"><strong>2. Audacia Pedagógica</strong><span>Experimentar con rigor metodológico para repensar la enseñanza.</span></div>
        <div class="principle-box"><strong>3. Humanidad al Centro</strong><span>Priorizar la conexión docente-estudiante sobre cualquier algoritmo.</span></div>
        <div class="principle-box"><strong>4. Inclinarse al Aprendizaje</strong><span>Construir curiosidad activa y juicio crítico en toda la comunidad.</span></div>
        <div class="principle-box"><strong>5. Intencionalidad Didáctica</strong><span>Diseño inverso: definir el logro de aprendizaje antes de elegir la IA.</span></div>
        <div class="principle-box"><strong>6. Sin Talla Única</strong><span>Respetar las diferencias epistemológicas entre disciplinas y carreras.</span></div>
        <div class="principle-box"><strong>7. Aumentar, No Automatizar</strong><span>Impulsar 'IA pro-estudiante' y evitar la 'rendición cognitiva'.</span></div>
        <div class="principle-box"><strong>8. Más Allá del Campus</strong><span>Preparar para un mundo laboral y social éticamente transformado.</span></div>
      </div>`;
    const enContent = `
      <div class="principles-flow">
        <div class="principle-box"><strong>1. Be Humble</strong><span>Recognize technological speed and uncertainty without hubris.</span></div>
        <div class="principle-box"><strong>2. Be Bold</strong><span>Experiment with methodological rigor to reimagine higher education.</span></div>
        <div class="principle-box"><strong>3. Humanity Front & Center</strong><span>Prioritize human relationships and mentorship over algorithms.</span></div>
        <div class="principle-box"><strong>4. Lean into Learning</strong><span>Foster active curiosity and critical judgment across campus.</span></div>
        <div class="principle-box"><strong>5. Teach with Intentionality</strong><span>Backward design: clarify pedagogical goals before choosing tools.</span></div>
        <div class="principle-box"><strong>6. No One Size Fits All</strong><span>Respect epistemological diversity across faculties and fields.</span></div>
        <div class="principle-box"><strong>7. Augment, Don't Automate</strong><span>Champion 'pro-learner AI' while actively preventing 'cognitive surrender'.</span></div>
        <div class="principle-box"><strong>8. Beyond the Campus</strong><span>Prepare graduates for an ethically transformed workplace and society.</span></div>
      </div>`;
    return `${baseStart}
      <h2>${title}</h2>
      ${currentLang === 'es' ? esContent : enContent}
      ${sourceHtml}`;
  }

  if (slide.type === "mit_governance") {
    const esContent = `
      <div class="mit-governance-cards">
        <div class="mit-gov-card">
          <strong>1. Comité Permanente de IA y Educación</strong>
          <p>Órgano institucional multiactor con decanos, docentes y estudiantes para actualización continua de directrices y revisión ética.</p>
        </div>
        <div class="mit-gov-card">
          <strong>2. AI Leads en Escuelas y Facultades</strong>
          <p>Docentes designados como referentes disciplinarios que traducen pautas centrales a las particularidades de cada carrera.</p>
        </div>
        <div class="mit-gov-card">
          <strong>3. AI Fellows & Soporte Curricular</strong>
          <p>Equipo de estudiantes de posgrado y especialistas en tecnología educativa que asisten al profesorado en el rediseño de sílabos.</p>
        </div>
        <div class="mit-gov-card">
          <strong>4. Fondo Piloto y Plataforma Segura</strong>
          <p>Fondo semilla para innovación docente y acceso equitativo a modelos vía plataforma protegida con privacidad de datos garantizada.</p>
        </div>
      </div>`;
    const enContent = `
      <div class="mit-governance-cards">
        <div class="mit-gov-card">
          <strong>1. Ongoing Committee on AI & Education</strong>
          <p>Permanent multi-stakeholder body linking provost, faculty, and students for dynamic policy updates and ethical oversight.</p>
        </div>
        <div class="mit-gov-card">
          <strong>2. School & College AI Leads</strong>
          <p>Faculty liaisons translating general university frameworks into discipline-specific pedagogical practice.</p>
        </div>
        <div class="mit-gov-card">
          <strong>3. AI Fellows & Implementation Team</strong>
          <p>Graduate students and educational technologists coaching instructors in syllabus and assignment redesign.</p>
        </div>
        <div class="mit-gov-card">
          <strong>4. Pilot Innovation Fund & Sandbox Hub</strong>
          <p>Competitive seed funding for faculty pilots paired with institutional access (e.g., Parley) guaranteeing data privacy.</p>
        </div>
      </div>`;
    return `${baseStart}
      <h2>${title}</h2>
      ${currentLang === 'es' ? esContent : enContent}
      ${sourceHtml}`;
  }

  return `${baseStart}<h2>${title}</h2>${sourceHtml}`;
}

// ============================================================================
// 8. GENERADORES DE COMPONENTES INTERACTIVOS
// ============================================================================

function renderRiskMatrix() {
  const t = i18n[currentLang];
  const cells = [];
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const severity = r + c >= 4 ? "high" : r + c >= 2 ? "medium" : "";
      const chips = risks.filter(x => x.row === r && x.col === c)
        .map(x => `<span class="risk-chip" data-group="${x.group}">${getText(x.label)}</span>`)
        .join("");
      cells.push(`<div class="risk-cell ${severity}" style="grid-row:${r + 1};grid-column:${c + 2}">${chips}</div>`);
    }
  }

  return `
    <div class="risk-controls" role="group" aria-label="Filtrar casos de riesgo">
      <button aria-pressed="true" data-risk="all">${t.riskAll}</button>
      <button aria-pressed="false" data-risk="docencia">${t.riskTeach}</button>
      <button aria-pressed="false" data-risk="evaluacion">${t.riskEval}</button>
      <button aria-pressed="false" data-risk="gestion">${t.riskMgmt}</button>
      <button aria-pressed="false" data-risk="agentes">${t.riskAgent}</button>
    </div>
    <div class="risk-matrix-layout">
      <div class="axis-y-label">${currentLang === 'es' ? 'Impacto Potencial en Derechos' : 'Potential Impact on Rights'}</div>
      ${cells.join("")}
      <div class="axis-x-label">${currentLang === 'es' ? 'Autonomía del Sistema de IA' : 'AI System Autonomy Level'}</div>
    </div>`;
}

function renderMaturityComponent() {
  const levels = {
    es: [
      { key: "basic", label: "Nivel 1 · Inicial", title: "Iniciativas Aisladas y Entusiasmo Informal", desc: "Las responsabilidades no están definidas formalmente. La formación es voluntaria y el conocimiento reside únicamente en personas entusiastas sin apoyo institucional estructurado." },
      { key: "ready", label: "Nivel 2 · Coordinación", title: "Comités Emergentes y Diagnóstico", desc: "Existen grupos de trabajo y lineamientos preliminares. La universidad reconoce brechas, pero la respuesta entre facultades sigue siendo fragmentada y desigual." },
      { key: "dynamic", label: "Nivel 3 · Capacidad", title: "Capacidad Institucional Instalada", desc: "Existen funciones explícitas, formación diferenciada por roles, rúbricas integradas en sílabos y compras de TI con salvaguardas de soberanía de datos." },
      { key: "advanced", label: "Nivel 4 · Aprendizaje", title: "Aprendizaje Continuo y Excelencia", desc: "La gobernanza se actualiza con base en evidencias e incidentes reales. La investigación y la docencia lideran la innovación responsable a nivel internacional." }
    ],
    en: [
      { key: "basic", label: "Stage 1 · Initial", title: "Isolated Experiments & Heroic Effort", desc: "Responsibilities are informal. Training is voluntary, and institutional capability relies entirely on scattered passionate faculty without systematic backing." },
      { key: "ready", label: "Stage 2 · Emerging", title: "Coordinated Committees & Discovery", desc: "Working groups and draft policies exist. Campus recognizes regulatory voids, but execution across academic departments remains uneven and ad hoc." },
      { key: "dynamic", label: "Stage 3 · Institutional", title: "Embedded Institutional Capability", desc: "Mandates are formalized, role-differentiated literacy is standard, assessment rubrics are updated, and IT procurement enforces strict data sovereignty." },
      { key: "advanced", label: "Stage 4 · Continuous", title: "Adaptive Continuous Learning", desc: "Governance dynamically tunes based on verified incident audits. Campus faculty and researchers proactively shape international responsible AI practice." }
    ]
  };

  const list = levels[currentLang];
  const buttons = list.map((x, i) => `
    <button class="maturity-btn" aria-pressed="${i === 0 ? 'true' : 'false'}" data-level="${x.key}">
      ${x.label}
    </button>`).join("");

  return `
    <div class="maturity-wrap">
      <div class="maturity-controls" role="group" aria-label="Niveles de Madurez UNESCO">
        ${buttons}
      </div>
      <div class="maturity-panel" id="maturityPanel">
        <h3 id="maturityTitle">${list[0].title}</h3>
        <p id="maturityText">${list[0].desc}</p>
      </div>
    </div>`;
}

// ============================================================================
// 9. NAVEGACIÓN Y CONTROL DEL CICLO DE VIDA
// ============================================================================

function render() {
  if (!currentDeckKey || !stage) return;
  const deck = decks[currentDeckKey];
  const slide = deck.slides[currentIndex];

  stage.innerHTML = slideTemplate(slide);

  // Metadatos y contadores
  const dLabel = $("#deckLabel");
  if (dLabel) dLabel.textContent = `${getText(deck.label)} · ${deck.targetMinutes} min`;
  
  const counter = $("#slideCounter");
  if (counter) counter.textContent = `${currentIndex + 1} / ${deck.slides.length}`;
  
  const prog = $("#progressBar");
  if (prog) prog.style.width = `${((currentIndex + 1) / deck.slides.length) * 100}%`;
  
  const prevBtn = $("#prevButton");
  if (prevBtn) prevBtn.disabled = currentIndex === 0;
  
  const nextBtn = $("#nextButton");
  if (nextBtn) nextBtn.disabled = currentIndex === deck.slides.length - 1;

  // Anunciador para lectores de pantalla
  if (srAnnouncer) {
    const announceText = `${getText(slide.kicker)}: ${getText(slide.title)}. Diapositiva ${currentIndex + 1} de ${deck.slides.length}.`;
    srAnnouncer.textContent = announceText;
  }

  // Enlazar interactividad interna de la diapositiva
  bindSlideInteractions();

  // Lectura por voz automática si está habilitada
  if (autoVoiceEnabled) {
    speakCurrentSlide();
  }

  // Foco accesible
  stage.focus({ preventScroll: true });
}

function bindSlideInteractions() {
  document.querySelectorAll("[data-risk]").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-risk]").forEach(b => b.setAttribute("aria-pressed", String(b === button)));
      const group = button.dataset.risk;
      document.querySelectorAll(".risk-chip").forEach(chip => {
        chip.classList.toggle("dimmed", group !== "all" && chip.dataset.group !== group);
      });
    });
  });

  const maturityData = {
    es: {
      basic: ["Iniciativas Aisladas y Entusiasmo Informal", "Las responsabilidades no están definidas formalmente. La formación es voluntaria y el conocimiento reside únicamente en personas entusiastas sin apoyo institucional estructurado."],
      ready: ["Comités Emergentes y Diagnóstico", "Existen grupos de trabajo y lineamientos preliminares. La universidad reconoce brechas, pero la respuesta entre facultades sigue siendo fragmentada y desigual."],
      dynamic: ["Capacidad Institucional Instalada", "Existen funciones explícitas, formación diferenciada por roles, rúbricas integradas en sílabos y compras de TI con salvaguardas de soberanía de datos."],
      advanced: ["Aprendizaje Continuo y Excelencia", "La gobernanza se actualiza con base en evidencias e incidentes reales. La investigación y la docencia lideran la innovación responsable a nivel internacional."]
    },
    en: {
      basic: ["Isolated Experiments & Heroic Effort", "Responsibilities are informal. Training is voluntary, and institutional capability relies entirely on scattered passionate faculty without systematic backing."],
      ready: ["Coordinated Committees & Discovery", "Working groups and draft policies exist. Campus recognizes regulatory voids, but execution across academic departments remains uneven and ad hoc."],
      dynamic: ["Embedded Institutional Capability", "Mandates are formalized, role-differentiated literacy is standard, assessment rubrics are updated, and IT procurement enforces strict data sovereignty."],
      advanced: ["Adaptive Continuous Learning", "Governance dynamically tunes based on verified incident audits. Campus faculty and researchers proactively shape international responsible AI practice."]
    }
  };

  document.querySelectorAll("[data-level]").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-level]").forEach(b => b.setAttribute("aria-pressed", String(b === button)));
      const [title, desc] = maturityData[currentLang][button.dataset.level];
      const mTitle = $("#maturityTitle");
      const mText = $("#maturityText");
      if (mTitle && mText) {
        mTitle.textContent = title;
        mText.textContent = desc;
      }
    });
  });
}

function navigate(delta) {
  if (!currentDeckKey) return;
  const limit = decks[currentDeckKey].slides.length - 1;
  const newIndex = Math.max(0, Math.min(limit, currentIndex + delta));
  if (newIndex !== currentIndex) {
    currentIndex = newIndex;
    render();
  }
}

function updateTimer() {
  if (!startTime) return;
  const total = Math.floor((Date.now() - startTime) / 1000);
  const minutes = String(Math.floor(total / 60)).padStart(2, "0");
  const seconds = String(total % 60).padStart(2, "0");
  const timerEl = $("#timer");
  if (timerEl) timerEl.textContent = `${minutes}:${seconds}`;
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}

function updateFullscreenUI() {
  const isFs = Boolean(document.fullscreenElement);
  const fsLabel = $("#fsLabel");
  if (fsLabel) {
    fsLabel.textContent = isFs ? i18n[currentLang].fsExitBtn : i18n[currentLang].fsBtn;
  }
}

document.addEventListener("fullscreenchange", updateFullscreenUI);

function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  }[char]));
}

// ============================================================================
// 10. SÍNTESIS DE VOZ ACCESIBLE (TTS PARA PERSONAS CON DISCAPACIDAD VISUAL)
// ============================================================================

function stopSpeech() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    isSpeaking = false;
    const ttsBtn = $("#ttsButton");
    if (ttsBtn) {
      ttsBtn.classList.remove("speaking");
      const ttsLbl = $("#ttsLabel");
      if (ttsLbl) ttsLbl.textContent = i18n[currentLang].ttsBtn;
    }
  }
}

function speakCurrentSlide() {
  if (!('speechSynthesis' in window) || !currentDeckKey) return;
  stopSpeech();

  const deck = decks[currentDeckKey];
  const slide = deck.slides[currentIndex];
  const kicker = getText(slide.kicker);
  const title = getText(slide.title);
  const subtitle = getText(slide.subtitle);
  const quote = getText(slide.quote);

  let speechText = `${kicker}. ${title}. ${subtitle}. ${quote}.`;
  speechText = speechText.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

  const utterance = new SpeechSynthesisUtterance(speechText);
  utterance.lang = currentLang === 'es' ? 'es-ES' : 'en-US';
  utterance.rate = 1.0;

  utterance.onstart = () => {
    isSpeaking = true;
    const ttsBtn = $("#ttsButton");
    if (ttsBtn) {
      ttsBtn.classList.add("speaking");
      const ttsLbl = $("#ttsLabel");
      if (ttsLbl) ttsLbl.textContent = i18n[currentLang].ttsSpeaking;
    }
  };

  utterance.onend = () => {
    isSpeaking = false;
    const ttsBtn = $("#ttsButton");
    if (ttsBtn) {
      ttsBtn.classList.remove("speaking");
      const ttsLbl = $("#ttsLabel");
      if (ttsLbl) ttsLbl.textContent = i18n[currentLang].ttsBtn;
    }
  };

  utterance.onerror = () => {
    isSpeaking = false;
    const ttsBtn = $("#ttsButton");
    if (ttsBtn) {
      ttsBtn.classList.remove("speaking");
      const ttsLbl = $("#ttsLabel");
      if (ttsLbl) ttsLbl.textContent = i18n[currentLang].ttsBtn;
    }
  };

  window.speechSynthesis.speak(utterance);
}

function toggleTTS() {
  if (isSpeaking) {
    stopSpeech();
  } else {
    speakCurrentSlide();
  }
}

// ============================================================================
// 11. CAMBIO DE IDIOMA DINÁMICO (ES / EN)
// ============================================================================

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  try { localStorage.setItem("ethical_lang", lang); } catch (e) {}
  const t = i18n[lang];

  // Actualizar etiquetas comunes
  const langLabel = $("#langLabel");
  if (langLabel) langLabel.textContent = t.langBtn;
  
  const langButton = $("#langButton");
  if (langButton) langButton.setAttribute("title", t.langTitle);
  
  const skipLink = $("#skipLink");
  if (skipLink) skipLink.textContent = t.skipLink;
  
  const a11yBtnLabel = $("#a11yBtnLabel");
  if (a11yBtnLabel) a11yBtnLabel.textContent = t.a11yBtn;
  
  const refsBtnLabel = $("#refsBtnLabel");
  if (refsBtnLabel) refsBtnLabel.textContent = t.refsBtn;
  
  const ttsLabel = $("#ttsLabel");
  if (ttsLabel) ttsLabel.textContent = t.ttsBtn;
  
  const backHomeLabel = $("#backHomeLabel");
  if (backHomeLabel) backHomeLabel.textContent = t.backHomeLabel;

  updateFullscreenUI();

  // Si estamos en la página del lobby (index.html)
  const pickerEyebrow = $("#pickerEyebrow");
  if (pickerEyebrow) pickerEyebrow.textContent = t.pickerEyebrow;
  
  const pickerTitle = $("#pickerTitle");
  if (pickerTitle) pickerTitle.textContent = t.pickerTitle;
  
  const pickerLead = $("#pickerLead");
  if (pickerLead) pickerLead.textContent = t.pickerLead;
  
  const hostDetails = $("#hostDetails");
  if (hostDetails) hostDetails.innerHTML = t.hostDetails;

  const d1DurationTag = $("#d1DurationTag");
  if (d1DurationTag) d1DurationTag.textContent = t.d1DurationTag;
  const d1Title = $("#d1Title");
  if (d1Title) d1Title.textContent = t.d1Title;
  const d1Subtitle = $("#d1Subtitle");
  if (d1Subtitle) d1Subtitle.textContent = t.d1Subtitle;
  const d1Cta = $("#d1Cta");
  if (d1Cta) d1Cta.textContent = t.d1Cta;

  const d2DurationTag = $("#d2DurationTag");
  if (d2DurationTag) d2DurationTag.textContent = t.d2DurationTag;
  const d2Title = $("#d2Title");
  if (d2Title) d2Title.textContent = t.d2Title;
  const d2Subtitle = $("#d2Subtitle");
  if (d2Subtitle) d2Subtitle.textContent = t.d2Subtitle;
  const d2Cta = $("#d2Cta");
  if (d2Cta) d2Cta.textContent = t.d2Cta;

  const hintLang = $("#hintLang");
  if (hintLang) hintLang.textContent = t.hintLang;
  const hintA11y = $("#hintA11y");
  if (hintA11y) hintA11y.textContent = t.hintA11y;

  // Diálogos Modales
  const refEyebrow = $("#refEyebrow");
  if (refEyebrow) refEyebrow.textContent = t.refEyebrow;
  const dialogTitle = $("#dialogTitle");
  if (dialogTitle) dialogTitle.textContent = t.refTitle;
  const refIntro = $("#refIntro");
  if (refIntro) refIntro.textContent = t.refIntro;

  const a11yEyebrow = $("#a11yEyebrow");
  if (a11yEyebrow) a11yEyebrow.textContent = t.a11yEyebrow;
  const a11yTitle = $("#a11yTitle");
  if (a11yTitle) a11yTitle.textContent = t.a11yTitle;
  const a11yContrastTitle = $("#a11yContrastTitle");
  if (a11yContrastTitle) a11yContrastTitle.textContent = t.a11yContrastTitle;
  const a11yContrastDesc = $("#a11yContrastDesc");
  if (a11yContrastDesc) a11yContrastDesc.textContent = t.a11yContrastDesc;
  const a11yFontTitle = $("#a11yFontTitle");
  if (a11yFontTitle) a11yFontTitle.textContent = t.a11yFontTitle;
  const a11yFontDesc = $("#a11yFontDesc");
  if (a11yFontDesc) a11yFontDesc.textContent = t.a11yFontDesc;
  const a11yDyslexiaTitle = $("#a11yDyslexiaTitle");
  if (a11yDyslexiaTitle) a11yDyslexiaTitle.textContent = t.a11yDyslexiaTitle;
  const a11yDyslexiaDesc = $("#a11yDyslexiaDesc");
  if (a11yDyslexiaDesc) a11yDyslexiaDesc.textContent = t.a11yDyslexiaDesc;
  const a11yVoiceTitle = $("#a11yVoiceTitle");
  if (a11yVoiceTitle) a11yVoiceTitle.textContent = t.a11yVoiceTitle;
  const a11yVoiceDesc = $("#a11yVoiceDesc");
  if (a11yVoiceDesc) a11yVoiceDesc.textContent = t.a11yVoiceDesc;

  const slideAudience = $("#slideAudience");
  if (slideAudience) slideAudience.textContent = t.audienceTag;

  renderReferencesList();

  if (currentDeckKey) {
    render();
  }
}

function toggleLanguage() {
  const nextLang = currentLang === "es" ? "en" : "es";
  setLanguage(nextLang);
}

function renderReferencesList() {
  const container = $("#referencesList");
  if (!container) return;
  container.innerHTML = references.map(ref => `
    <div class="reference-item" role="listitem">
      ${ref[currentLang] || ref.es}
    </div>
  `).join("");
}

// ============================================================================
// 12. AJUSTES DE ACCESIBILIDAD Y PERSISTENCIA
// ============================================================================

function initA11yControls() {
  const contrastBtn = $("#contrastToggle");
  const fontBtn = $("#fontSizeToggle");
  const dyslexiaBtn = $("#dyslexiaToggle");
  const voiceBtn = $("#autoVoiceToggle");

  if (contrastBtn) {
    contrastBtn.addEventListener("click", () => {
      const active = document.body.classList.toggle("high-contrast");
      contrastBtn.setAttribute("aria-pressed", String(active));
      contrastBtn.textContent = active ? i18n[currentLang].switchOn : i18n[currentLang].switchOff;
      try { localStorage.setItem("ethical_contrast", String(active)); } catch (e) {}
    });
  }

  if (fontBtn) {
    fontBtn.addEventListener("click", () => {
      const active = document.body.classList.toggle("large-font");
      fontBtn.setAttribute("aria-pressed", String(active));
      fontBtn.textContent = active ? i18n[currentLang].switchOn : i18n[currentLang].switchOff;
      try { localStorage.setItem("ethical_largefont", String(active)); } catch (e) {}
    });
  }

  if (dyslexiaBtn) {
    dyslexiaBtn.addEventListener("click", () => {
      const active = document.body.classList.toggle("legible-font");
      dyslexiaBtn.setAttribute("aria-pressed", String(active));
      dyslexiaBtn.textContent = active ? i18n[currentLang].switchOn : i18n[currentLang].switchOff;
      try { localStorage.setItem("ethical_dyslexia", String(active)); } catch (e) {}
    });
  }

  if (voiceBtn) {
    voiceBtn.addEventListener("click", () => {
      autoVoiceEnabled = !autoVoiceEnabled;
      voiceBtn.setAttribute("aria-pressed", String(autoVoiceEnabled));
      voiceBtn.textContent = autoVoiceEnabled ? i18n[currentLang].switchOn : i18n[currentLang].switchOff;
      if (autoVoiceEnabled && currentDeckKey) speakCurrentSlide();
    });
  }

  try {
    if (localStorage.getItem("ethical_contrast") === "true" && contrastBtn) contrastBtn.click();
    if (localStorage.getItem("ethical_largefont") === "true" && fontBtn) fontBtn.click();
    if (localStorage.getItem("ethical_dyslexia") === "true" && dyslexiaBtn) dyslexiaBtn.click();
  } catch (e) {}
}

// ============================================================================
// 13. SOPORTE TÁCTIL (SWIPE GESTURES PARA CELULARES Y TABLETAS)
// ============================================================================

let touchStartX = 0;
let touchStartY = 0;

function initTouchSwipe() {
  if (!stage) return;
  stage.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  stage.addEventListener("touchend", (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0) {
        navigate(1);
      } else {
        navigate(-1);
      }
    }
  }, { passive: true });
}

// ============================================================================
// 14. EVENTOS GLOBALES Y ATAJOS DE TECLADO
// ============================================================================

const prevBtn = $("#prevButton");
if (prevBtn) prevBtn.addEventListener("click", () => navigate(-1));

const nextBtn = $("#nextButton");
if (nextBtn) nextBtn.addEventListener("click", () => navigate(1));

const ttsBtn = $("#ttsButton");
if (ttsBtn) ttsBtn.addEventListener("click", toggleTTS);

const langBtn = $("#langButton");
if (langBtn) langBtn.addEventListener("click", toggleLanguage);

const fsBtn = $("#fullscreenButton");
if (fsBtn) fsBtn.addEventListener("click", toggleFullscreen);

const fsBottomBtn = $("#fsBottomButton");
if (fsBottomBtn) fsBottomBtn.addEventListener("click", toggleFullscreen);

// Modales
const refsDialog = $("#referencesDialog");
const a11yDialog = $("#a11yDialog");

const refsBtn = $("#refsButton");
if (refsBtn && refsDialog) {
  refsBtn.addEventListener("click", () => {
    renderReferencesList();
    refsDialog.showModal();
  });
}

const closeRefsBtn = $("#closeRefs");
if (closeRefsBtn && refsDialog) {
  closeRefsBtn.addEventListener("click", () => refsDialog.close());
  refsDialog.addEventListener("click", (e) => { if (e.target === refsDialog) refsDialog.close(); });
}

const a11yBtn = $("#a11yButton");
if (a11yBtn && a11yDialog) {
  a11yBtn.addEventListener("click", () => a11yDialog.showModal());
}

const closeA11yBtn = $("#closeA11y");
if (closeA11yBtn && a11yDialog) {
  closeA11yBtn.addEventListener("click", () => a11yDialog.close());
  a11yDialog.addEventListener("click", (e) => { if (e.target === a11yDialog) a11yDialog.close(); });
}

// Teclado
document.addEventListener("keydown", (e) => {
  if ((refsDialog && refsDialog.open) || (a11yDialog && a11yDialog.open)) return;

  if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
    if (currentDeckKey) {
      e.preventDefault();
      navigate(1);
    }
  } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
    if (currentDeckKey) {
      e.preventDefault();
      navigate(-1);
    }
  } else if (e.key.toLowerCase() === "t") {
    e.preventDefault();
    toggleLanguage();
  } else if (e.key.toLowerCase() === "f") {
    e.preventDefault();
    toggleFullscreen();
  } else if (e.key.toLowerCase() === "a") {
    e.preventDefault();
    if (a11yDialog) a11yDialog.showModal();
  } else if (e.key === "Escape") {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else if (document.body.dataset.page === "presentation") {
      window.location.href = "index.html";
    }
  }
});

// Inicialización de la aplicación según la página activa
document.addEventListener("DOMContentLoaded", () => {
  const pageDeck = document.body.dataset.deck;
  if (pageDeck && decks[pageDeck]) {
    currentDeckKey = pageDeck;
    currentIndex = 0;
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
  }

  setLanguage(currentLang);
  initA11yControls();
  initTouchSwipe();
});
