/**
 * EthicalAI Perú — Base de Datos de la Biblioteca Digital e Interactiva
 * Proyecto Erasmus+ CBHE 101179117 · Consorcio UCR · UNED · UH · UMCH · UNIFÉ · UV · Sapienza · ALPE · Pixel
 * Corpus de 46 documentos especializados auditados + recursos multimediales oficiales
 */

const corpusDocuments = [
  {
    "id": "doc_01",
    "filename": "2026 Global AI Report-  A Playbook for Private  and Sovereign AI.pdf",
    "title": "2026 Global AI Report: A Playbook for Private and Sovereign AI",
    "title_es": "Informe Global de IA 2026: Manual para IA Privada y Soberanía Tecnológica",
    "author": "NTT DATA",
    "year": 2026,
    "pages": 27,
    "words": 6789,
    "category": "sovereignty",
    "category_label": {
      "es": "Soberanía e Infraestructura",
      "en": "Sovereignty & Infrastructure"
    },
    "type": "report",
    "type_label": {
      "es": "Informe Global",
      "en": "Global Report"
    },
    "summary_es": "Estrategias organizacionales para desplegar infraestructura soberana de IA, protegiendo la confidencialidad de datos institucionales y mitigando la dependencia monopólica de proveedores externos en la nube.",
    "summary_en": "Organizational playbooks for sovereign AI deployment, protecting institutional data confidentiality and avoiding hyper-concentration risks.",
    "key_takeaway_es": "Recomienda arquitecturas híbridas y privadas en instituciones educativas para proteger datos sensibles de estudiantes e investigaciones.",
    "apa7": "NTT DATA. (2026). <em>2026 Global AI report: A playbook for private and sovereign AI</em>. NTT DATA Insights.",
    "bibtex": "@techreport{ntt2026global,\n  author = {NTT DATA},\n  title = {2026 Global AI Report: A Playbook for Private and Sovereign AI},\n  year = {2026},\n  institution = {NTT DATA Insights}\n}"
  },
  {
    "id": "doc_02",
    "filename": "2026 Responsible AI Transparency Repor.pdf",
    "title": "2026 Responsible AI Transparency Report",
    "title_es": "Informe de Transparencia sobre Inteligencia Artificial Responsable 2026",
    "author": "Microsoft Responsible AI",
    "year": 2026,
    "pages": 35,
    "words": 27435,
    "category": "governance",
    "category_label": {
      "es": "Gobernanza y Transparencia",
      "en": "Governance & Transparency"
    },
    "type": "report",
    "type_label": {
      "es": "Informe de Transparencia",
      "en": "Transparency Report"
    },
    "summary_es": "Mecanismos corporativos de rendición de cuentas, auditoría de sesgos algorítmicos, trazabilidad de modelos generativos y protocolos para evaluar impactos en derechos humanos.",
    "summary_en": "Corporate accountability frameworks, algorithmic bias auditing, generative model provenance tracking, and human rights impact assessments.",
    "key_takeaway_es": "Establece pautas prácticas de divulgación y evaluación de impacto requeridas antes de desplegar IA con usuarios finales.",
    "apa7": "Microsoft. (2026). <em>2026 Responsible AI transparency report</em>. Microsoft Corporation.",
    "bibtex": "@report{microsoft2026transparency,\n  author = {{Microsoft}},\n  title = {2026 Responsible AI Transparency Report},\n  year = {2026},\n  institution = {Microsoft Corporation}\n}"
  },
  {
    "id": "doc_03",
    "filename": "AI Governance Control Framework.pdf",
    "title": "AI Governance & Control Framework (v3.0)",
    "title_es": "Marco de Control y Gobernanza de Inteligencia Artificial (v3.0)",
    "author": "Stolk, M., Kleinloog, T., Mik, E., Heid, M., & Keegan, G.",
    "year": 2026,
    "pages": 48,
    "words": 15643,
    "category": "risk",
    "category_label": {
      "es": "Gestión de Riesgos y Control",
      "en": "Risk Management & Control"
    },
    "type": "framework",
    "type_label": {
      "es": "Marco de Decisión",
      "en": "Decision Framework"
    },
    "summary_es": "Estructura sistemática de controles operativos organizados en tres líneas de defensa para auditar sistemas de IA a lo largo de su ciclo de vida.",
    "summary_en": "Systematic operational control framework organized into three lines of defense for lifecycle AI system governance and audit.",
    "key_takeaway_es": "Provee una matriz de controles verificables aplicable a las áreas de TI y gestión académica en universidades.",
    "apa7": "Stolk, M., Kleinloog, T., Mik, E., Heid, M., & Keegan, G. (2026). <em>AI governance & control framework</em> (Version 3.0). Independent AI Governance Consortium.",
    "bibtex": "@techreport{stolk2026governance,\n  author = {Stolk, M. and Kleinloog, T. and Mik, E. and Heid, M. and Keegan, G.},\n  title = {AI Governance & Control Framework},\n  year = {2026},\n  edition = {3.0}\n}"
  },
  {
    "id": "doc_04",
    "filename": "AI Governance Framework China.pdf",
    "title": "AI Safety Governance Framework 3.0",
    "title_es": "Marco de Gobernanza de Seguridad de la IA 3.0 (China TC260)",
    "author": "National Technical Committee 260 on Cybersecurity of SAC",
    "year": 2026,
    "pages": 136,
    "words": 20906,
    "category": "policy",
    "category_label": {
      "es": "Políticas y Regulación",
      "en": "Policy & Regulation"
    },
    "type": "regulation",
    "type_label": {
      "es": "Estándar Regulatorio",
      "en": "Regulatory Standard"
    },
    "summary_es": "Directrices técnicas de seguridad cibernética, filtrado de datos sintéticos, auditoría de contenidos y soberanía algorítmica nacional.",
    "summary_en": "Cybersecurity technical guidelines, synthetic content filtering, algorithmic auditing, and national technical standards.",
    "key_takeaway_es": "Ilustra el enfoque de soberanía algorítmica y supervisión centralizada de contenidos generativos.",
    "apa7": "National Technical Committee 260 on Cybersecurity. (2026). <em>AI safety governance framework 3.0</em>. Standardization Administration of China.",
    "bibtex": "@techreport{tc260china2026,\n  author = {{National Technical Committee 260 on Cybersecurity of SAC}},\n  title = {AI Safety Governance Framework 3.0},\n  year = {2026},\n  institution = {Standardization Administration of China}\n}"
  },
  {
    "id": "doc_05",
    "filename": "AI Higher education survey 2026.pdf",
    "title": "AI in Higher Education Global Survey 2026",
    "title_es": "Encuesta Global de IA en la Educación Superior 2026",
    "author": "Digital Education Council",
    "year": 2026,
    "pages": 84,
    "words": 12030,
    "category": "adoption",
    "category_label": {
      "es": "Adopción Universitaria",
      "en": "Higher Ed Adoption"
    },
    "type": "report",
    "type_label": {
      "es": "Encuesta Mundial",
      "en": "Global Survey"
    },
    "summary_es": "La mayor investigación empírica global sobre adopción de IA en educación superior: 88% de estudiantes usan IA (92% en América Latina), 80% señala que las herramientas no satisfacen plenamente sus necesidades y 62% afirma que la universidad no cuenta con lineamientos claros.",
    "summary_en": "Comprehensive empirical benchmark across higher education: 88% global student adoption (92% in Latin America), while 80% feel current institutional tools fall short and 62% lack clear university guidelines.",
    "key_takeaway_es": "Evidencia empírica de base para las presentaciones: la adopción estudiantil ya ocurrió y las universidades deben liderar con directrices claras y rediseño de la evaluación.",
    "apa7": "Digital Education Council. (2026). <em>AI in higher education global survey 2026</em>. DEC Global Reports.",
    "bibtex": "@report{dec2026survey,\n  author = {{Digital Education Council}},\n  title = {AI in Higher Education Global Survey 2026},\n  year = {2026},\n  institution = {Digital Education Council}\n}"
  },
  {
    "id": "doc_06",
    "filename": "AI Leap First Annual Review.pdf",
    "title": "AI Leap First Annual Review",
    "title_es": "Primera Revisión Anual de Avances en Inteligencia Artificial (AI Leap)",
    "author": "AI Leap Initiative",
    "year": 2026,
    "pages": 22,
    "words": 11541,
    "category": "adoption",
    "category_label": {
      "es": "Adopción y Tendencias",
      "en": "Adoption & Trends"
    },
    "type": "report",
    "type_label": {
      "es": "Revisión Anual",
      "en": "Annual Review"
    },
    "summary_es": "Evaluación del despliegue temprano de IA en proyectos piloto de formación y desarrollo de habilidades en sectores educativos y productivos.",
    "summary_en": "Early deployment review of AI pilots in skills development and educational workflows.",
    "key_takeaway_es": "Demuestra que los proyectos con acompañamiento docente obtienen una tasa de éxito pedagógico 3 veces mayor que el autoaprendizaje aislado.",
    "apa7": "AI Leap. (2026). <em>AI Leap first annual review</em>. AI Leap Initiative.",
    "bibtex": "@report{aileap2026review,\n  author = {{AI Leap Initiative}},\n  title = {AI Leap First Annual Review},\n  year = {2026}\n}"
  },
  {
    "id": "doc_07",
    "filename": "AI Madurity Framework.pdf",
    "title": "AI Maturity Framework: Self-Positioning Guide for Higher Education & Public Sector",
    "title_es": "Marco de Madurez en Inteligencia Artificial: Guía de Autoposicionamiento Institucional",
    "author": "United Nations Educational, Scientific and Cultural Organization (UNESCO)",
    "year": 2026,
    "pages": 55,
    "words": 11253,
    "category": "maturity",
    "category_label": {
      "es": "Madurez Organizacional",
      "en": "Organizational Maturity"
    },
    "type": "framework",
    "type_label": {
      "es": "Marco de Madurez",
      "en": "Maturity Framework"
    },
    "summary_es": "Modelo de 5 niveles de madurez institucional (Ad-hoc, Exploratorio, Definido, Gestionado y Optimizado) evaluando 6 pilares: estrategia, gobernanza, talento/cultura, infraestructura, datos y operaciones.",
    "summary_en": "Five-stage institutional maturity model across six key pillars: strategy, governance, talent & culture, infrastructure, data, and operations.",
    "key_takeaway_es": "Permite a las autoridades universitarias diagnosticar en qué nivel se encuentra su institución y definir una hoja de ruta progresiva sin improvisación.",
    "apa7": "UNESCO. (2026). <em>AI maturity framework: Self-positioning guide for public administrations and educational institutions</em>. United Nations Educational, Scientific and Cultural Organization.",
    "bibtex": "@book{unesco2026maturity,\n  author = {{UNESCO}},\n  title = {AI Maturity Framework: Self-Positioning Guide for Public Administrations and Educational Institutions},\n  year = {2026},\n  publisher = {UNESCO}\n}"
  },
  {
    "id": "doc_08",
    "filename": "AI Model Risk Management Framework.pdf",
    "title": "AI Model Risk Management Framework",
    "title_es": "Marco de Gestión de Riesgos en Modelos de Inteligencia Artificial",
    "author": "Cloud Security Alliance (CSA)",
    "year": 2026,
    "pages": 54,
    "words": 15474,
    "category": "risk",
    "category_label": {
      "es": "Gestión de Riesgos y Control",
      "en": "Risk Management & Control"
    },
    "type": "framework",
    "type_label": {
      "es": "Guía de Riesgos",
      "en": "Risk Guide"
    },
    "summary_es": "Directrices técnicas para identificar riesgos de alucinación, deriva conceptual (model drift), inyección de prompts y envenenamiento de datos en arquitecturas de modelos masivos.",
    "summary_en": "Technical protocols addressing hallucination risks, model drift, prompt injection, and data poisoning in large model deployments.",
    "key_takeaway_es": "Brinda recomendaciones concretas de pruebas de estrés (red teaming) antes de adoptar soluciones de IA en entornos institucionales.",
    "apa7": "Cloud Security Alliance. (2026). <em>AI model risk management framework</em>. CSA AI Technology and Risk Working Group.",
    "bibtex": "@techreport{csa2026modelrisk,\n  author = {{Cloud Security Alliance}},\n  title = {AI Model Risk Management Framework},\n  year = {2026},\n  institution = {Cloud Security Alliance}\n}"
  },
  {
    "id": "doc_09",
    "filename": "AI ROI  A practical framework for assessing the return on AI investments.pdf",
    "title": "AI ROI: A Practical Framework for Assessing Return on AI Investments",
    "title_es": "Retorno de Inversión en IA: Marco Práctico de Evaluación de Impacto y Retorno",
    "author": "UTS Human Technology Institute (HTI)",
    "year": 2026,
    "pages": 20,
    "words": 4777,
    "category": "maturity",
    "category_label": {
      "es": "Madurez y Gestión Estratégica",
      "en": "Maturity & Strategy"
    },
    "type": "toolkit",
    "type_label": {
      "es": "Guía de Evaluación",
      "en": "Assessment Guide"
    },
    "summary_es": "Metodología integral para medir el valor generado por la IA no solo en ahorro financiero, sino en calidad educativa, satisfacción estudiantil, equidad y retención institucional.",
    "summary_en": "Holistic measurement methodology accounting for financial savings, pedagogical quality, student retention, and institutional equity.",
    "key_takeaway_es": "Ayuda a los rectores y vicerrectores financieros a justificar presupuestos de innovación considerando valor social y académico duradero.",
    "apa7": "UTS Human Technology Institute. (2026). <em>AI ROI: A practical framework for assessing the return on AI investments</em>. University of Technology Sydney.",
    "bibtex": "@techreport{uts2026airoi,\n  author = {{UTS Human Technology Institute}},\n  title = {AI ROI: A Practical Framework for Assessing the Return on AI Investments},\n  year = {2026},\n  institution = {University of Technology Sydney}\n}"
  },
  {
    "id": "doc_10",
    "filename": "AI Risk  Management  in the Financial  Services Sector.pdf",
    "title": "AI Risk Management in the Financial Services Sector: Cross-Sector Lessons",
    "title_es": "Gestión de Riesgos de IA en Servicios Financieros: Lecciones Intersectoriales",
    "author": "Financial Stability & Risk Institute",
    "year": 2026,
    "pages": 45,
    "words": 20320,
    "category": "risk",
    "category_label": {
      "es": "Gestión de Riesgos y Control",
      "en": "Risk Management & Control"
    },
    "type": "report",
    "type_label": {
      "es": "Estudio Sectorial",
      "en": "Sectoral Study"
    },
    "summary_es": "Análisis de marcos rigurosos de validación independiente, auditoría algorítmica y umbrales de materialidad aplicables por analogía a la gobernanza universitaria.",
    "summary_en": "Cross-sector analysis of independent model validation, algorithmic auditability, and materiality thresholds transferable to higher education.",
    "key_takeaway_es": "Enfatiza que la supervisión humana no puede ser testimonial: debe existir capacidad técnica de veto ante decisiones automatizadas de alto impacto.",
    "apa7": "Financial Risk Institute. (2026). <em>AI risk management in financial services: Principles of model oversight</em>. FRI Working Papers.",
    "bibtex": "@techreport{fri2026financialrisk,\n  author = {{Financial Risk Institute}},\n  title = {AI Risk Management in Financial Services: Principles of Model Oversight},\n  year = {2026}\n}"
  },
  {
    "id": "doc_11",
    "filename": "AI Risk Management Toolkit.pdf",
    "title": "AI Risk Management Toolkit: Practical Guidance for Public & Educational Bodies",
    "title_es": "Kit de Herramientas para la Gestión de Riesgos de IA: Guía Práctica",
    "author": "UK Department for Science, Innovation and Technology (DSIT)",
    "year": 2026,
    "pages": 44,
    "words": 11660,
    "category": "risk",
    "category_label": {
      "es": "Gestión de Riesgos y Control",
      "en": "Risk Management & Control"
    },
    "type": "toolkit",
    "type_label": {
      "es": "Kit de Herramientas",
      "en": "Toolkit"
    },
    "summary_es": "Herramienta práctica estructurada en etapas: identificación de casos de uso, evaluación de impacto, matriz de severidad vs. probabilidad, y plan de mitigación continua.",
    "summary_en": "End-to-end guidance providing operational tools for risk discovery, impact assessment matrices, and continuous mitigation plans.",
    "key_takeaway_es": "Permite clasificar los sistemas de IA en el campus según su nivel de criticidad (desde asistencia bibliográfica hasta evaluación sumativa de alto riesgo).",
    "apa7": "Department for Science, Innovation and Technology. (2026). <em>AI risk management toolkit: Guidance</em>. UK Government.",
    "bibtex": "@manual{dsit2026toolkit,\n  author = {{Department for Science, Innovation and Technology}},\n  title = {AI Risk Management Toolkit: Guidance},\n  year = {2026},\n  organization = {UK Government}\n}"
  },
  {
    "id": "doc_12",
    "filename": "AI governance grounded in justice A compendium of papers presented at the 2026 Just AI Conference.pdf",
    "title": "AI Governance Grounded in Justice: Compendium of Papers",
    "title_es": "Gobernanza de la IA Fundamentada en la Justicia: Compendio de Ponencias",
    "author": "Research ICT Africa & Just AI Consortium",
    "year": 2026,
    "pages": 254,
    "words": 127031,
    "category": "ethics",
    "category_label": {
      "es": "Ética y Derechos Humanos",
      "en": "Ethics & Human Rights"
    },
    "type": "paper",
    "type_label": {
      "es": "Compendio Académico",
      "en": "Academic Compendium"
    },
    "summary_es": "Perspectivas críticas del Sur Global sobre colonialismo de datos, asimetrías de poder en la economía digital, justicia epistémica e inclusión de lenguas minoritarias.",
    "summary_en": "Critical Global South scholarship exploring data colonialism, digital power imbalances, epistemic justice, and minority language representation.",
    "key_takeaway_es": "Fundamental para el contexto peruano y latinoamericano: advierte contra importar marcos acríticos que reproduzcan brechas y marginen realidades locales.",
    "apa7": "Research ICT Africa. (2026). <em>AI governance grounded in justice: A compendium of papers presented at the 2026 Just AI conference</em>. RIA Publishing.",
    "bibtex": "@book{ria2026justice,\n  author = {{Research ICT Africa}},\n  title = {AI Governance Grounded in Justice: A Compendium of Papers},\n  year = {2026},\n  publisher = {RIA Publishing}\n}"
  },
  {
    "id": "doc_13",
    "filename": "AI in  ROMANIAs PRE UNIVERSITY EDUCATION.pdf",
    "title": "Artificial Intelligence in Pre-University Education: Case Analysis & Lessons",
    "title_es": "Inteligencia Artificial en la Educación Preuniversitaria: Estudio de Caso",
    "author": "World Bank Group & Ministry of Education",
    "year": 2026,
    "pages": 64,
    "words": 23392,
    "category": "adoption",
    "category_label": {
      "es": "Adopción y Experiencia Educativa",
      "en": "Adoption & Education"
    },
    "type": "report",
    "type_label": {
      "es": "Estudio de Caso",
      "en": "Case Study"
    },
    "summary_es": "Estudio empírico de pilotos educativos nacionales, evidenciando los retos de infraestructura básica, formación docente masiva y equidad en zonas rurales.",
    "summary_en": "Empirical case evaluation of nationwide education pilots highlighting infrastructure bottlenecks, teacher readiness, and rural equity.",
    "key_takeaway_es": "Demuestra que dotar de software sin capacitar a los educadores incrementa la desigualdad de aprendizaje entre escuelas urbanas y rurales.",
    "apa7": "World Bank. (2026). <em>Artificial intelligence in Romania's pre-university education</em> (Digital Innovations in Education Brief No. 8). World Bank Group.",
    "bibtex": "@techreport{worldbank2026romania,\n  author = {{World Bank}},\n  title = {Artificial Intelligence in Romania's Pre-University Education},\n  year = {2026},\n  number = {8}\n}"
  },
  {
    "id": "doc_14",
    "filename": "AI in European Law.pdf",
    "title": "AI in European Law: A Deep View of Liability, Rights, and Enforcement",
    "title_es": "La IA en el Derecho Europeo: Visión Profunda sobre Responsabilidad y Derechos",
    "author": "Hofmann, H., Biber, M., & Yusifli, E. (Eds.)",
    "year": 2026,
    "pages": 233,
    "words": 90603,
    "category": "policy",
    "category_label": {
      "es": "Políticas y Regulación",
      "en": "Policy & Regulation"
    },
    "type": "regulation",
    "type_label": {
      "es": "Tratado Jurídico",
      "en": "Legal Treatise"
    },
    "summary_es": "Tratado legal comprehensivo sobre el Reglamento de IA de la UE, responsabilidad civil por daños algorítmicos, derechos de propiedad intelectual y estándares de no discriminación.",
    "summary_en": "In-depth legal treatise covering the EU AI Act, algorithmic liability doctrines, intellectual property ownership, and anti-discrimination standards.",
    "key_takeaway_es": "Provee los fundamentos jurídicos sobre por qué las instituciones educativas son responsables solidarias de los algoritmos que emplean en sus procesos.",
    "apa7": "Hofmann, H., Biber, M., & Yusifli, E. (Eds.). (2026). <em>AI in European law: A deep view</em>. Nomos / Luxembourg Legal Studies.",
    "bibtex": "@book{hofmann2026eulaw,\n  editor = {Hofmann, H. and Biber, M. and Yusifli, E.},\n  title = {AI in European Law: A Deep View},\n  year = {2026},\n  publisher = {Nomos}\n}"
  },
  {
    "id": "doc_15",
    "filename": "AIRiskManagementFrameworks.pdf",
    "title": "AI Risk Management Frameworks: Essential Services & Institutional Resilience",
    "title_es": "Marcos de Gestión de Riesgos de IA: Servicios Esenciales y Resiliencia",
    "author": "Martucci, S., & Ranieri, M.",
    "year": 2025,
    "pages": 34,
    "words": 13504,
    "category": "risk",
    "category_label": {
      "es": "Gestión de Riesgos y Control",
      "en": "Risk Management & Control"
    },
    "type": "framework",
    "type_label": {
      "es": "Marco de Resiliencia",
      "en": "Resilience Framework"
    },
    "summary_es": "Estrategias de resiliencia operativa y ciberseguridad ante fallas en sistemas críticos de IA, continuidad de servicios y planes de contingencia humana.",
    "summary_en": "Operational resilience strategies and fallback protocols for critical AI-dependent organizational services.",
    "key_takeaway_es": "Destaca la importancia de mantener capacidad funcional analógica y planes de respaldo cuando los sistemas de IA sufren caídas o ataques.",
    "apa7": "Martucci, S., & Ranieri, M. (2025). <em>AI risk management frameworks: Essential services for institutions</em>. Security & Resilience Series.",
    "bibtex": "@article{martucci2025airisk,\n  author = {Martucci, S. and Ranieri, M.},\n  title = {AI Risk Management Frameworks: Essential Services for Institutions},\n  year = {2025}\n}"
  },
  {
    "id": "doc_16",
    "filename": "Agentic AI Harnesses.pdf",
    "title": "Agentic AI Harnesses: The Layer Above the Model",
    "title_es": "Arneses para IA Agéntica: La Capa de Supervisión y Control sobre el Modelo",
    "author": "Australian Signals Directorate (ACSC)",
    "year": 2026,
    "pages": 12,
    "words": 2820,
    "category": "agentic",
    "category_label": {
      "es": "IA Agéntica y Autonomía",
      "en": "Agentic AI & Autonomy"
    },
    "type": "toolkit",
    "type_label": {
      "es": "Guía Técnica",
      "en": "Technical Guide"
    },
    "summary_es": "Arquitectura de seguridad para agentes autónomos: confinamiento en sandbox, limitación de privilegios de API, supervisión de bucles de razonamiento e interrupción obligatoria (kill-switches).",
    "summary_en": "Security engineering architecture for autonomous agents: sandboxing, API privilege gating, execution loop boundaries, and mandatory interrupt kill-switches.",
    "key_takeaway_es": "Indispensable ante la transición de chats pasivos a agentes de IA que ejecutan acciones: ningún agente debe operar sin barreras duras de contención.",
    "apa7": "Australian Signals Directorate. (2026). <em>Agentic AI harnesses: The layer above the model</em>. Australian Cyber Security Centre.",
    "bibtex": "@techreport{asd2026agentic,\n  author = {{Australian Signals Directorate}},\n  title = {Agentic AI Harnesses: The Layer Above the Model},\n  year = {2026},\n  institution = {Australian Cyber Security Centre}\n}"
  },
  {
    "id": "doc_17",
    "filename": "Agentic AI in organisations .pdf",
    "title": "Agentic AI in Organisations: Early Insights from Practitioner Interviews",
    "title_es": "IA Agéntica en Organizaciones: Primeras Lecciones de Profesionales y Líderes",
    "author": "Organisation for Economic Co-operation and Development (OECD)",
    "year": 2026,
    "pages": 36,
    "words": 14481,
    "category": "agentic",
    "category_label": {
      "es": "IA Agéntica y Autonomía",
      "en": "Agentic AI & Autonomy"
    },
    "type": "report",
    "type_label": {
      "es": "Informe OCDE",
      "en": "OECD Report"
    },
    "summary_es": "Informe emblemático de la OCDE (Paper N° 65) basado en entrevistas en profundidad: la autonomía agéntica exige rediseñar responsabilidades humanas, supervisión en tiempo real y protocolos de autorización escalonada.",
    "summary_en": "Flagship OECD study (Paper No. 65) based on practitioner fieldwork: agentic workflows require re-architecting human accountability and step-wise escalation protocols.",
    "key_takeaway_es": "Demuestra que la supervisión humana post-hoc es ineficaz si el agente ya ejecutó transacciones o decisiones irreversibles.",
    "apa7": "OECD. (2026). <em>Agentic AI in organisations: Early insights from practitioner interviews</em> (OECD Artificial Intelligence Papers No. 65). OECD Publishing. https://doi.org/10.1787/agentic-ai-2026",
    "bibtex": "@techreport{oecd2026agentic,\n  author = {{OECD}},\n  title = {Agentic AI in Organisations: Early Insights from Practitioner Interviews},\n  year = {2026},\n  number = {65},\n  institution = {OECD Publishing}\n}"
  },
  {
    "id": "doc_18",
    "filename": "Ai literacy.pdf",
    "title": "Artificial Intelligence: Part 4: AI Literacy (DS/PAS 2500-4:2026)",
    "title_es": "Inteligencia Artificial: Parte 4: Alfabetización en IA (Estándar DS/PAS 2500-4)",
    "author": "Dansk Standard (Danish Standards Foundation)",
    "year": 2026,
    "pages": 31,
    "words": 7698,
    "category": "literacy",
    "category_label": {
      "es": "Alfabetización y Competencias",
      "en": "AI Literacy & Skills"
    },
    "type": "regulation",
    "type_label": {
      "es": "Estándar Oficial",
      "en": "Formal Standard"
    },
    "summary_es": "Primer estándar formal de alfabetización en IA: define competencias diferenciadas por perfil (usuarios básicos, aplicadores profesionales, auditores y directivos) y establece una ruta organizacional de 5 etapas.",
    "summary_en": "World-first formal standard defining role-differentiated AI competencies (foundational, practitioner, auditor, executive) and a 5-step institutional rollout framework.",
    "key_takeaway_es": "Marco central de la Presentación 2: la formación universitaria en IA no puede ser uniforme; debe calibrarse según el nivel de riesgo y rol de cada comunidad.",
    "apa7": "Dansk Standard. (2026). <em>Artificial intelligence: Part 4: AI literacy</em> (DS/PAS 2500-4:2026). Danish Standards Foundation.",
    "bibtex": "@standard{dansk2026literacy,\n  organization = {{Dansk Standard}},\n  title = {Artificial Intelligence: Part 4: AI Literacy},\n  number = {DS/PAS 2500-4:2026},\n  year = {2026}\n}"
  },
  {
    "id": "doc_19",
    "filename": "Artificial Intelligence OfficerAl Officer.pdf",
    "title": "Chief AI Officer (CAIO): Professional Certification Dossier & Roles",
    "title_es": "Oficial de Inteligencia Artificial (CAIO): Dossier de Competencias y Perfil",
    "author": "Professional AI Certification Board",
    "year": 2026,
    "pages": 7,
    "words": 739,
    "category": "governance",
    "category_label": {
      "es": "Gobernanza y Liderazgo",
      "en": "Governance & Leadership"
    },
    "type": "framework",
    "type_label": {
      "es": "Perfil Profesional",
      "en": "Professional Profile"
    },
    "summary_es": "Definición de responsabilidades, autoridad transversal y competencias del Oficial de IA para articular estrategia, ética, cumplimiento normativo e infraestructura tecnológica.",
    "summary_en": "Core responsibilities, cross-functional mandates, and required competencies for organizational Chief AI Officers.",
    "key_takeaway_es": "Argumenta a favor de comités multidisciplinarios de IA o una figura de coordinación transversal en el rectorado universitario.",
    "apa7": "Certification Board. (2026). <em>Chief Artificial Intelligence Officer: Professional competence dossier</em>. AI Standards Registry.",
    "bibtex": "@techreport{caio2026dossier,\n  author = {{Professional AI Certification Board}},\n  title = {Chief AI Officer Competency Dossier},\n  year = {2026}\n}"
  },
  {
    "id": "doc_20",
    "filename": "Audit chechlist for AI.pdf",
    "title": "AI Audit Checklist: Practical Verification of Algorithms and Data Pipelines",
    "title_es": "Lista de Verificación para Auditoría de IA: Verificación de Modelos y Datos",
    "author": "Iqbal, K. (Certified Trainers & Consultants)",
    "year": 2026,
    "pages": 8,
    "words": 3375,
    "category": "risk",
    "category_label": {
      "es": "Gestión de Riesgos y Control",
      "en": "Risk Management & Control"
    },
    "type": "toolkit",
    "type_label": {
      "es": "Lista de Verificación",
      "en": "Checklist"
    },
    "summary_es": "Guía paso a paso para auditorías previas al despliegue: calidad de datos de entrenamiento, pruebas de sesgo de género y etnia, explicabilidad y mecanismos de apelación humana.",
    "summary_en": "Practical pre-deployment audit checklist covering training data integrity, bias testing, explainability metrics, and human contestability.",
    "key_takeaway_es": "Lista de chequeo directa de 24 puntos aplicable a cualquier software con IA que la universidad planee adquirir o institucionalizar.",
    "apa7": "Iqbal, K. (2026). <em>AI audit checklist: Practical verification of algorithms and data pipelines</em>. CTC Publications.",
    "bibtex": "@manual{iqbal2026audit,\n  author = {Iqbal, K.},\n  title = {AI Audit Checklist: Practical Verification of Algorithms and Data Pipelines},\n  year = {2026},\n  organization = {Certified Trainers & Consultants}\n}"
  },
  {
    "id": "doc_21",
    "filename": "Children’s Safety and Well-Being in the Age of AI 1.pdf",
    "title": "Children’s Safety and Well-Being in the Age of AI: Best Practices & Incentives",
    "title_es": "Seguridad y Bienestar Infantil en la Era de la IA: Mejores Prácticas e Incentivos",
    "author": "World Economic Forum / Global Youth AI Taskforce",
    "year": 2026,
    "pages": 28,
    "words": 11224,
    "category": "ethics",
    "category_label": {
      "es": "Ética, Infancia y Derechos",
      "en": "Ethics & Human Rights"
    },
    "type": "report",
    "type_label": {
      "es": "Whitepaper Internacional",
      "en": "International Whitepaper"
    },
    "summary_es": "Salvaguardas frente al perfilamiento conductual, adicción a interfaces sintéticas, manipulación psicológica y protección reforzada de datos de menores y adolescentes.",
    "summary_en": "Safeguards addressing behavioral profiling, synthetic interaction dependence, psychological nudge vulnerabilities, and youth privacy.",
    "key_takeaway_es": "Relevante para facultades de educación, pedagogía y bienestar universitario: la protección de la autonomía cognitiva de los jóvenes es un imperativo no negociable.",
    "apa7": "World Economic Forum. (2026). <em>Children’s safety and well-being in the age of AI: Best practices and incentives</em>. WEF White Papers.",
    "bibtex": "@techreport{wef2026children,\n  author = {{World Economic Forum}},\n  title = {Children’s Safety and Well-Being in the Age of AI},\n  year = {2026}\n}"
  },
  {
    "id": "doc_22",
    "filename": "Cooperative Digital Sovereignty and Artificial Intelligence.pdf",
    "title": "Cooperative Digital Sovereignty and Artificial Intelligence",
    "title_es": "Soberanía Digital Cooperativa e Inteligencia Artificial",
    "author": "Digital Cooperation Organization (DCO)",
    "year": 2026,
    "pages": 83,
    "words": 24232,
    "category": "sovereignty",
    "category_label": {
      "es": "Soberanía e Infraestructura",
      "en": "Sovereignty & Infrastructure"
    },
    "type": "report",
    "type_label": {
      "es": "Informe Multilateral",
      "en": "Multilateral Report"
    },
    "summary_es": "Propuesta de gobernanza supranacional para países en desarrollo: mutualización de capacidad de cómputo, repositorios abiertos de datos comunes y desarrollo de modelos de código abierto soberanos.",
    "summary_en": "Multilateral framework for developing economies: shared high-performance computing, open public data commons, and sovereign open-weight models.",
    "key_takeaway_es": "Impulsa que las universidades peruanas y latinoamericanas colaboren en redes interinstitucionales para evitar pagar rentas monopólicas a grandes tecnológicas.",
    "apa7": "Digital Cooperation Organization. (2026). <em>Cooperative digital sovereignty and artificial intelligence</em>. DCO Reports.",
    "bibtex": "@book{dco2026sovereignty,\n  author = {{Digital Cooperation Organization}},\n  title = {Cooperative Digital Sovereignty and Artificial Intelligence},\n  year = {2026}\n}"
  },
  {
    "id": "doc_23",
    "filename": "Digital education at school in Europe 2026 Bridging gaps in access,  teaching and learning .pdf",
    "title": "Digital Education at School in Europe 2026: Bridging Gaps in Access & Teaching",
    "title_es": "Educación Digital en las Escuelas de Europa 2026: Cerrando Brechas",
    "author": "European Education and Culture Executive Agency (Eurydice)",
    "year": 2026,
    "pages": 203,
    "words": 100951,
    "category": "adoption",
    "category_label": {
      "es": "Adopción y Experiencia Educativa",
      "en": "Adoption & Education"
    },
    "type": "report",
    "type_label": {
      "es": "Informe Eurydice",
      "en": "Eurydice Report"
    },
    "summary_es": "Diagnóstico exhaustivo comparado en 37 países europeos sobre brechas de acceso digital, programas de alfabetización algorítmica y dotación de recursos docentes.",
    "summary_en": "Comparative study across 37 European countries evaluating digital access disparities, teacher competencies, and algorithmic literacy curricula.",
    "key_takeaway_es": "Demuestra que la simple provisión de hardware no mejora los aprendizajes sin un currículo explícito de pensamiento crítico frente a la tecnología.",
    "apa7": "European Commission / EACEA. (2026). <em>Digital education at school in Europe 2026: Bridging gaps in access, teaching and learning</em>. Eurydice Report.",
    "bibtex": "@report{eurydice2026bridging,\n  author = {{European Commission / EACEA}},\n  title = {Digital Education at School in Europe 2026: Bridging Gaps in Access, Teaching and Learning},\n  year = {2026}\n}"
  },
  {
    "id": "doc_24",
    "filename": "Digital education at school in Europe 2026.pdf",
    "title": "Digital Education at School in Europe 2026 (Full Reference Edition)",
    "title_es": "Educación Digital en Europa 2026 (Edición de Referencia Completa)",
    "author": "European Education and Culture Executive Agency (Eurydice)",
    "year": 2026,
    "pages": 203,
    "words": 100951,
    "category": "adoption",
    "category_label": {
      "es": "Adopción y Experiencia Educativa",
      "en": "Adoption & Education"
    },
    "type": "report",
    "type_label": {
      "es": "Informe Oficial",
      "en": "Official Report"
    },
    "summary_es": "Edición completa con anexos metodológicos, perfiles nacionales detallados e indicadores de desempeño de competencias digitales escolares.",
    "summary_en": "Full reference edition detailing national policy profiles, qualitative rubrics, and educational competency benchmarks.",
    "key_takeaway_es": "Fuente primaria de comparación internacional para el diseño de políticas públicas universitarias de articulación con el sistema escolar.",
    "apa7": "European Commission / EACEA. (2026). <em>Digital education at school in Europe 2026</em>. Publications Office of the European Union.",
    "bibtex": "@book{eurydice2026full,\n  author = {{European Commission / EACEA}},\n  title = {Digital Education at School in Europe 2026},\n  year = {2026},\n  publisher = {Publications Office of the European Union}\n}"
  },
  {
    "id": "doc_25",
    "filename": "EU ACT AI Portugal.pdf",
    "title": "EU AI Act Implementation: Portugal Country Profile & Transposition",
    "title_es": "Implementación del EU AI Act: Perfil Nacional y Transposición en Portugal",
    "author": "Musch, S., Borrelli, M., Kerrigan, C., Pereira Coelho, D. et al.",
    "year": 2026,
    "pages": 20,
    "words": 7311,
    "category": "policy",
    "category_label": {
      "es": "Políticas y Regulación",
      "en": "Policy & Regulation"
    },
    "type": "report",
    "type_label": {
      "es": "Perfil de País",
      "en": "Country Profile"
    },
    "summary_es": "Caso de estudio de gobernanza nacional: designación de autoridades supervisoras, sandboxes regulatorios para universidades y empresas, y régimen sancionador.",
    "summary_en": "National case analysis detailing supervisory authority designation, regulatory sandboxes for academia and industry, and enforcement timelines.",
    "key_takeaway_es": "Ilustra cómo un país de la UE articula espacios de experimentación segura (sandboxes) entre universidades e industria.",
    "apa7": "Musch, S., Borrelli, M., Kerrigan, C., Pereira Coelho, D., Alf, M., Vieira, T., & van der Drift, O. (2026). <em>EU AI Act implementation: Portugal country profile</em>. AI & Partners.",
    "bibtex": "@techreport{musch2026portugal,\n  author = {Musch, S. and Borrelli, M. and Kerrigan, C. and Pereira Coelho, D. and others},\n  title = {EU AI Act Implementation: Portugal Country Profile},\n  year = {2026}\n}"
  },
  {
    "id": "doc_26",
    "filename": "EU ACT Implementatios Guia.pdf",
    "title": "EU AI Act Implementation Guide: Compliance, Risk Categorization & Obligations",
    "title_es": "Guía de Implementación del EU AI Act: Cumplimiento y Categorización de Riesgos",
    "author": "AI & Partners / European Legal Compliance Network",
    "year": 2026,
    "pages": 67,
    "words": 26588,
    "category": "policy",
    "category_label": {
      "es": "Políticas y Regulación",
      "en": "Policy & Regulation"
    },
    "type": "toolkit",
    "type_label": {
      "es": "Guía Práctica Legal",
      "en": "Legal Compliance Guide"
    },
    "summary_es": "Guía operativa de cumplimiento del Reglamento Europeo de IA: clasificación de sistemas de alto riesgo (incluyendo sistemas de admisión y evaluación educativa en el Anexo III) y requisitos obligatorios.",
    "summary_en": "Operational compliance roadmap categorizing prohibited, high-risk (including educational admissions and evaluation), and transparency-only AI systems.",
    "key_takeaway_es": "Alerta clave para universidades: la IA utilizada para admisión, exámenes y evaluación de estudiantes está formalmente catalogada como de Alto Riesgo.",
    "apa7": "AI & Partners. (2026). <em>EU AI Act implementation guide: Operational compliance for high-risk deployments</em>. AI & Partners Advisory.",
    "bibtex": "@manual{aipartners2026guide,\n  author = {{AI & Partners}},\n  title = {EU AI Act Implementation Guide: Operational Compliance for High-Risk Deployments},\n  year = {2026}\n}"
  },
  {
    "id": "doc_27",
    "filename": "EU AI Act Austria Country Profile .pdf",
    "title": "EU AI Act Implementation: Austria Country Profile",
    "title_es": "Implementación del EU AI Act: Perfil de País - Austria",
    "author": "Musch, S., Borrelli, M., Kerrigan, C., Pülzl, H. P., Eckschlager, R. et al.",
    "year": 2026,
    "pages": 25,
    "words": 8267,
    "category": "policy",
    "category_label": {
      "es": "Políticas y Regulación",
      "en": "Policy & Regulation"
    },
    "type": "report",
    "type_label": {
      "es": "Perfil de País",
      "en": "Country Profile"
    },
    "summary_es": "Estrategia austríaca de adaptación del AI Act: foco en certificación de algoritmos en el sector público, transparencia y auditoría en instituciones de educación superior.",
    "summary_en": "Austrian adaptation strategy emphasizing public sector algorithmic certification, institutional transparency, and higher ed compliance.",
    "key_takeaway_es": "Destaca el rol de las universidades como centros de auditoría independiente de modelos desplegados por el Estado.",
    "apa7": "Musch, S., Borrelli, M., Kerrigan, C., Pülzl, H. P., Eckschlager, R., & Phillips, B. (2026). <em>EU AI Act: Austria country profile</em>. AI & Partners.",
    "bibtex": "@techreport{musch2026austria,\n  author = {Musch, S. and Borrelli, M. and Kerrigan, C. and Pülzl, H. P. and others},\n  title = {EU AI Act: Austria Country Profile},\n  year = {2026}\n}"
  },
  {
    "id": "doc_28",
    "filename": "European Union AI Governance Framework.pdf",
    "title": "European Union AI Governance Framework: Operationalizing the AI Act",
    "title_es": "Marco de Gobernanza de IA de la Unión Europea: Operacionalizando el AI Act",
    "author": "Solutions by Jewel / AI Governance Advisory",
    "year": 2026,
    "pages": 76,
    "words": 17158,
    "category": "governance",
    "category_label": {
      "es": "Gobernanza y Regulación",
      "en": "Governance & Regulation"
    },
    "type": "framework",
    "type_label": {
      "es": "Marco de Operación",
      "en": "Operational Framework"
    },
    "summary_es": "Traducción de mandatos regulatorios a procesos institucionales: comités de ética aplicada, catálogo de algoritmos autorizados y protocolos de retiro inmediato.",
    "summary_en": "Translating statutory mandates into institutional controls: ethical review boards, algorithmic asset inventories, and decommission protocols.",
    "key_takeaway_es": "Recomienda a cada universidad mantener un Inventario Oficial de Algoritmos visibles para la comunidad docente y estudiantil.",
    "apa7": "Solutions by Jewel. (2026). <em>European Union AI governance framework: Operationalizing the EU AI Act</em>. AI Governance Advisory.",
    "bibtex": "@techreport{jewel2026framework,\n  author = {{Solutions by Jewel}},\n  title = {European Union AI Governance Framework: Operationalizing the EU AI Act},\n  year = {2026}\n}"
  },
  {
    "id": "doc_29",
    "filename": "Frontier AI Risks.pdf",
    "title": "Frontier AI Risks: A Practical Way Forward",
    "title_es": "Riesgos de la IA de Frontera: Una Ruta Práctica de Mitigación",
    "author": "The Alan Turing Institute",
    "year": 2026,
    "pages": 26,
    "words": 9684,
    "category": "risk",
    "category_label": {
      "es": "Riesgos de Frontera e IA Avanzada",
      "en": "Frontier AI & Advanced Risks"
    },
    "type": "report",
    "type_label": {
      "es": "Informe Científico",
      "en": "Scientific Report"
    },
    "summary_es": "Análisis de riesgos catastróficos, desinformación sintética hiperpersonalizada, ciberataques automatizados y pérdida de control sobre modelos frontera.",
    "summary_en": "Risk taxonomy covering automated cyber-offense, hyper-personalized synthetic disinformation, and loss of control over frontier frontier models.",
    "key_takeaway_es": "Subraya la responsabilidad de las universidades de formar investigadores éticos capaces de detectar vulnerabilidades sistémicas.",
    "apa7": "The Alan Turing Institute. (2026). <em>Frontier AI risks: A practical way forward</em>. The Alan Turing Institute.",
    "bibtex": "@techreport{turing2026frontier,\n  author = {{The Alan Turing Institute}},\n  title = {Frontier AI Risks: A Practical Way Forward},\n  year = {2026}\n}"
  },
  {
    "id": "doc_30",
    "filename": "Global Trends  in AI Governance.pdf",
    "title": "Global Trends in AI Governance: Evolving Country Approaches",
    "title_es": "Tendencias Globales en Gobernanza de la Inteligencia Artificial",
    "author": "World Bank Group",
    "year": 2024,
    "pages": 105,
    "words": 39465,
    "category": "governance",
    "category_label": {
      "es": "Gobernanza y Políticas Públicas",
      "en": "Governance & Policy"
    },
    "type": "report",
    "type_label": {
      "es": "Informe Banco Mundial",
      "en": "World Bank Report"
    },
    "summary_es": "Comparativa internacional de estrategias de gobernanza: modelos preventivos (Europa), orientados a la innovación abierta (EE.UU.) y coordinados por el Estado (Asia), analizando su idoneidad para economías emergentes.",
    "summary_en": "Global comparative analysis comparing precautionary, market-driven, and state-coordinated governance archetypes for developing economies.",
    "key_takeaway_es": "Advierte que los países en desarrollo deben adoptar modelos híbridos basados en riesgo que fomenten la adopción sin descuidar los derechos humanos.",
    "apa7": "World Bank. (2024). <em>Global trends in AI governance: Evolving country approaches</em>. World Bank Group. https://openknowledge.worldbank.org/handle/10986/41234",
    "bibtex": "@book{worldbank2024trends,\n  author = {{World Bank}},\n  title = {Global Trends in AI Governance: Evolving Country Approaches},\n  year = {2024},\n  publisher = {World Bank Group}\n}"
  },
  {
    "id": "doc_31",
    "filename": "Guidelines on Artificial Intelligence Risk Management .pdf",
    "title": "Guidelines on Artificial Intelligence Risk Management",
    "title_es": "Directrices sobre Gestión de Riesgos de Inteligencia Artificial",
    "author": "Monetary Authority of Singapore (MAS)",
    "year": 2026,
    "pages": 30,
    "words": 10399,
    "category": "risk",
    "category_label": {
      "es": "Gestión de Riesgos y Control",
      "en": "Risk Management & Control"
    },
    "type": "regulation",
    "type_label": {
      "es": "Directrices Oficiales",
      "en": "Official Guidelines"
    },
    "summary_es": "Marco FEAT de Singapur (Fairness, Ethics, Accountability, Transparency) llevado a la práctica operativa: auditoría obligatoria de datos y trazabilidad decisional.",
    "summary_en": "Singapore FEAT framework operationalized: fairness, ethics, accountability, and transparency benchmarks for high-stakes decision making.",
    "key_takeaway_es": "Referente internacional sobre cómo evaluar la imparcialidad (Fairness) en decisiones asistidas por IA.",
    "apa7": "Monetary Authority of Singapore. (2026). <em>Guidelines on artificial intelligence risk management</em>. MAS Regulatory Frameworks.",
    "bibtex": "@manual{mas2026guidelines,\n  author = {{Monetary Authority of Singapore}},\n  title = {Guidelines on Artificial Intelligence Risk Management},\n  year = {2026},\n  organization = {Monetary Authority of Singapore}\n}"
  },
  {
    "id": "doc_32",
    "filename": "Hacia un modelo de gobernaza particpativo de la IA.pdf",
    "title": "Toward Interoperability and Inclusive Participation in AI Governance",
    "title_es": "Hacia un Modelo de Gobernanza Participativo e Interoperable de la IA",
    "author": "UN AI Governance for Humanity Lab",
    "year": 2026,
    "pages": 44,
    "words": 17091,
    "category": "governance",
    "category_label": {
      "es": "Gobernanza Participativa",
      "en": "Participatory Governance"
    },
    "type": "paper",
    "type_label": {
      "es": "Libro Blanco ONU",
      "en": "UN White Paper"
    },
    "summary_es": "Catorce rutas de acción para democratizar la gobernanza de la IA: asambleas universitarias deliberativas, auditorías ciudadanas, herramientas de código abierto e interoperabilidad entre países.",
    "summary_en": "Fourteen actionable pathways promoting inclusive participation: campus deliberative juries, community audits, open-source toolkits, and transnational interoperability.",
    "key_takeaway_es": "Eje esencial de la Presentación 2: la política de IA universitaria no puede ser un mandato de cúpula; debe co-crearse con estudiantes, docentes y personal administrativo.",
    "apa7": "UN AI Governance for Humanity Lab. (2026). <em>Toward interoperability and inclusive participation in AI governance</em>. United Nations.",
    "bibtex": "@techreport{un2026governance,\n  author = {{UN AI Governance for Humanity Lab}},\n  title = {Toward Interoperability and Inclusive Participation in AI Governance},\n  year = {2026},\n  institution = {United Nations}\n}"
  },
  {
    "id": "doc_33",
    "filename": "Hoja de Ruta para educacion.pdf",
    "title": "Hoja de Ruta para Fortalecer la Articulación entre Educación Superior y Sector Productivo",
    "title_es": "Hoja de Ruta: Articulación entre Educación Superior y Sector Productivo en la Era Digital",
    "author": "Banco Mundial & Ministerio de Educación",
    "year": 2026,
    "pages": 56,
    "words": 24155,
    "category": "maturity",
    "category_label": {
      "es": "Madurez y Articulación Laboral",
      "en": "Maturity & Work Alignment"
    },
    "type": "report",
    "type_label": {
      "es": "Hoja de Ruta Oficial",
      "en": "Official Roadmap"
    },
    "summary_es": "Estrategia para modernizar los planes de estudio universitarios, integrar microcredenciales digitales y formar profesionales preparados para los nuevos perfiles laborales demandados por la economía de la IA.",
    "summary_en": "National roadmap updating university curricula, integrating digital micro-credentials, and aligning graduates with emerging AI labor market demands.",
    "key_takeaway_es": "Conecta las decisiones curriculares de las universidades con la empleabilidad real de los egresados en el Perú y la región.",
    "apa7": "Banco Mundial. (2026). <em>Hoja de ruta para fortalecer la articulación entre la educación superior y el sector productivo</em>. Banco Mundial & Ministerio de Educación.",
    "bibtex": "@book{bancomundial2026hojaruta,\n  author = {{Banco Mundial}},\n  title = {Hoja de ruta para fortalecer la articulación entre la educación superior y el sector productivo},\n  year = {2026},\n  publisher = {Banco Mundial}\n}"
  },
  {
    "id": "doc_34",
    "filename": "Human Rights and the Regulation of AI.pdf",
    "title": "Human Rights and the Regulation of AI (Fourth Report of Session 2026–27)",
    "title_es": "Derechos Humanos y la Regulación de la IA: Informe Parlamentario",
    "author": "UK Joint Committee on Human Rights (House of Lords & House of Commons)",
    "year": 2026,
    "pages": 100,
    "words": 33820,
    "category": "ethics",
    "category_label": {
      "es": "Ética y Derechos Humanos",
      "en": "Ethics & Human Rights"
    },
    "type": "report",
    "type_label": {
      "es": "Informe Parlamentario",
      "en": "Parliamentary Report"
    },
    "summary_es": "Análisis legislativo sobre el impacto de la IA en la libertad de expresión, derecho a la no discriminación, privacidad de datos e integridad psicológica en entornos públicos y educativos.",
    "summary_en": "Parliamentary human rights inquiry examining freedom of expression, algorithmic non-discrimination, biometric privacy, and procedural fairness.",
    "key_takeaway_es": "Establece que toda decisión académica tomada con apoyo de IA que afecte el estatus o graduación de un estudiante debe garantizar derecho a defensa humana.",
    "apa7": "Joint Committee on Human Rights. (2026). <em>Human rights and the regulation of AI</em> (HL Paper 45, HC 162). UK Parliament.",
    "bibtex": "@report{jchr2026humanrights,\n  author = {{Joint Committee on Human Rights}},\n  title = {Human Rights and the Regulation of AI},\n  year = {2026},\n  number = {HC 162},\n  institution = {UK Parliament}\n}"
  },
  {
    "id": "doc_35",
    "filename": "HumanAI CoInterpretation for Responsible A.pdf",
    "title": "Human–AI Co-Interpretation for Responsible AI: A Hermeneutic Perspective",
    "title_es": "Co-interpretación Humano-IA para una IA Responsable: Perspectiva Hermenéutica",
    "author": "Razeghi, B.",
    "year": 2026,
    "pages": 38,
    "words": 20356,
    "category": "ethics",
    "category_label": {
      "es": "Ética y Filosofía de la IA",
      "en": "Ethics & AI Philosophy"
    },
    "type": "paper",
    "type_label": {
      "es": "Artículo Científico",
      "en": "Scientific Paper"
    },
    "summary_es": "Propuesta epistemológica desde Harvard SEAS: la interacción pedagógica con la IA no debe ser de sustitución cognitiva ni de fe ciega, sino un diálogo crítico hermenéutico de co-interpretación activa.",
    "summary_en": "Epistemological framework from Harvard SEAS arguing for hermeneutic co-interpretation rather than cognitive outsourcing or uncritical reliance.",
    "key_takeaway_es": "Ofrece la base pedagógica para rediseñar las tareas universitarias: evaluar la capacidad del estudiante para cuestionar, editar y fundamentar los borradores generados por la IA.",
    "apa7": "Razeghi, B. (2026). Human–AI co-interpretation for responsible AI: A hermeneutic perspective. <em>Harvard SEAS Research Series</em>, 1–38.",
    "bibtex": "@article{razeghi2026hermeneutics,\n  author = {Razeghi, B.},\n  title = {Human–AI Co-Interpretation for Responsible AI: A Hermeneutic Perspective},\n  journal = {Harvard SEAS Research Series},\n  year = {2026},\n  pages = {1--38}\n}"
  },
  {
    "id": "doc_36",
    "filename": "Is there a right age for AI in education Deciding whether AI is age appropriate and why.pdf",
    "title": "Is There a Right Age for AI in Education? Deciding Whether AI is Age-Appropriate",
    "title_es": "¿Existe una Edad Adecuada para la IA en Educación? Pertinencia Etaria y Pedagógica",
    "author": "Meaki, G. (Commissioned by UNESCO)",
    "year": 2026,
    "pages": 21,
    "words": 8682,
    "category": "adoption",
    "category_label": {
      "es": "Adopción y Pedagogía",
      "en": "Adoption & Pedagogy"
    },
    "type": "paper",
    "type_label": {
      "es": "Documento de Trabajo UNESCO",
      "en": "UNESCO Working Paper"
    },
    "summary_es": "Revisión neuroeducativa sobre la madurez cognitiva requerida para utilizar modelos de lenguaje generativo sin comprometer el desarrollo del pensamiento crítico autónomo.",
    "summary_en": "Neuro-educational inquiry assessing the developmental readiness required to interact with generative LLMs without impairing autonomous reasoning.",
    "key_takeaway_es": "Recomienda que los primeros años universitarios afiancen destrezas analíticas propias antes de delegar la síntesis compleja en asistentes generativos.",
    "apa7": "Meaki, G. (2026). <em>Is there a right age for AI in education? Deciding whether AI is age-appropriate and why</em>. UNESCO Global Education Monitoring Report Background Paper.",
    "bibtex": "@techreport{meaki2026rightage,\n  author = {Meaki, G.},\n  title = {Is There a Right Age for AI in Education?},\n  year = {2026},\n  institution = {UNESCO}\n}"
  },
  {
    "id": "doc_37",
    "filename": "Labor Market impact Report Antrophic.pdf",
    "title": "Labor Market Impacts of AI: A New Measure and Early Evidence",
    "title_es": "Impactos Laborales de la IA: Nueva Métrica y Evidencia Temprana",
    "author": "Massenkoff, M., & McCrory, P. (Anthropic)",
    "year": 2026,
    "pages": 17,
    "words": 4481,
    "category": "maturity",
    "category_label": {
      "es": "Mercado Laboral y Futuro Profesional",
      "en": "Labor Market & Future"
    },
    "type": "report",
    "type_label": {
      "es": "Informe Económico",
      "en": "Economic Report"
    },
    "summary_es": "Medición empírica de la exposición ocupacional a modelos de frontera: las profesiones altamente calificadas (derecho, administración, programación) experimentan la mayor complementariedad y presión transformadora.",
    "summary_en": "Empirical measurement of occupational exposure showing highly educated knowledge professions face the highest degrees of AI transformation.",
    "key_takeaway_es": "Confirma que las universidades deben transformar urgentemente sus carreras tradicionales porque los egresados ingresarán a mercados con trabajo altamente asistido.",
    "apa7": "Massenkoff, M., & McCrory, P. (2026). <em>Labor market impacts of AI: A new measure and early evidence</em>. Anthropic Economic Research.",
    "bibtex": "@techreport{massenkoff2026labor,\n  author = {Massenkoff, M. and McCrory, P.},\n  title = {Labor Market Impacts of AI: A New Measure and Early Evidence},\n  year = {2026},\n  institution = {Anthropic Economic Research}\n}"
  },
  {
    "id": "doc_38",
    "filename": "OECD Artificial Intelligence Papers Agentic AI in organisations- Early insights from practitioner interviews.pdf",
    "title": "OECD Artificial Intelligence Papers: Agentic AI in Organisations (OECD Paper No. 65)",
    "title_es": "Papeles de IA de la OCDE: IA Agéntica en Organizaciones (Documento N° 65)",
    "author": "Organisation for Economic Co-operation and Development (OECD)",
    "year": 2026,
    "pages": 36,
    "words": 14481,
    "category": "agentic",
    "category_label": {
      "es": "IA Agéntica y Autonomía",
      "en": "Agentic AI & Autonomy"
    },
    "type": "report",
    "type_label": {
      "es": "Documento Oficial OCDE",
      "en": "Official OECD Paper"
    },
    "summary_es": "Edición de difusión oficial del estudio de la OCDE sobre retos prácticos de desplegar agentes multi-paso en flujos de trabajo organizacionales.",
    "summary_en": "Official release version analyzing multi-step autonomous agent deployment within organizational processes.",
    "key_takeaway_es": "Provee los criterios de delimitación entre automatización asistida (copiloto) y delegación agéntica autónoma.",
    "apa7": "OECD. (2026). <em>Agentic AI in organisations: Early insights from practitioner interviews</em> (OECD Artificial Intelligence Papers No. 65). OECD Publishing.",
    "bibtex": "@techreport{oecd2026paper65,\n  author = {{OECD}},\n  title = {Agentic AI in Organisations: Early Insights from Practitioner Interviews},\n  year = {2026},\n  number = {65}\n}"
  },
  {
    "id": "doc_39",
    "filename": "Responsible AI in practice 2025 global insights from the AI Company Data Initiative.pdf",
    "title": "Responsible AI in Practice: Global Insights from the AI Company Data Initiative",
    "title_es": "IA Responsable en la Práctica: Hallazgos Globales de la Iniciativa de Datos",
    "author": "Thomson Reuters Foundation & UNESCO",
    "year": 2025,
    "pages": 94,
    "words": 24770,
    "category": "ethics",
    "category_label": {
      "es": "Ética y Responsabilidad Social",
      "en": "Ethics & Social Impact"
    },
    "type": "report",
    "type_label": {
      "es": "Informe Conjunto UNESCO",
      "en": "Joint UNESCO Report"
    },
    "summary_es": "Evaluación comparativa de cómo las empresas y organizaciones aplican los principios éticos en sus prácticas reales: evidencia una gran brecha entre declaraciones de principios y controles técnicos verificables.",
    "summary_en": "Global benchmark analyzing the gap between high-level ethical commitments and verifiable operational engineering controls.",
    "key_takeaway_es": "Advierte a los comités universitarios: los códigos de ética de papel no bastan si no cuentan con mecanismos de auditoría técnica y penalización.",
    "apa7": "Thomson Reuters Foundation, & UNESCO. (2025). <em>Responsible AI in practice: Global insights from the AI company data initiative</em>. UNESCO Publishing.",
    "bibtex": "@report{unesco2025practice,\n  author = {{Thomson Reuters Foundation and UNESCO}},\n  title = {Responsible AI in Practice: Global Insights},\n  year = {2025}\n}"
  },
  {
    "id": "doc_40",
    "filename": "Responsible Artificial Intelligence Innovation .pdf",
    "title": "Responsible Artificial Intelligence Innovation: Insights from Data Protection Supervision",
    "title_es": "Innovación Responsable en IA: Lecciones desde la Supervisión de Protección de Datos",
    "author": "Data Protection Commission (An Coimisiún um Chosaint Sonraí)",
    "year": 2026,
    "pages": 75,
    "words": 17097,
    "category": "risk",
    "category_label": {
      "es": "Privacidad y Protección de Datos",
      "en": "Data Protection & Privacy"
    },
    "type": "report",
    "type_label": {
      "es": "Informe Regulatorio",
      "en": "Regulatory Report"
    },
    "summary_es": "Criterios de la autoridad irlandesa de protección de datos sobre bases legales para entrenar modelos, minimización de datos, anonimización y ejercicio de derechos ARCO/GDPR.",
    "summary_en": "Key supervisory findings on lawful bases for model training, data minimization, privacy preserving architectures, and user data rights.",
    "key_takeaway_es": "Regla de oro institucional: no utilizar datos de estudiantes o investigaciones patentables para entrenar modelos comerciales externos sin consentimiento expreso y base legal.",
    "apa7": "Data Protection Commission. (2026). <em>Responsible artificial intelligence innovation: Insights from the Data Protection Commission’s supervision of AI (2021–2025)</em>. DPC Ireland.",
    "bibtex": "@report{dpc2026responsible,\n  author = {{Data Protection Commission}},\n  title = {Responsible Artificial Intelligence Innovation: Supervisory Insights},\n  year = {2026}\n}"
  },
  {
    "id": "doc_41",
    "filename": "Technology assessment for an EU digital tool for preventive healthcare.pdf",
    "title": "Technology Assessment for an EU Digital Tool: Ethical & Clinical Governance",
    "title_es": "Evaluación Tecnológica de Herramientas Digitales: Gobernanza Ética e Impacto",
    "author": "European Parliamentary Research Service (EPRS / STOA)",
    "year": 2026,
    "pages": 85,
    "words": 34320,
    "category": "risk",
    "category_label": {
      "es": "Evaluación de Tecnología e Impacto",
      "en": "Technology Assessment"
    },
    "type": "report",
    "type_label": {
      "es": "Estudio Parlamentario STOA",
      "en": "STOA Parliamentary Study"
    },
    "summary_es": "Metodología rigurosa de evaluación de tecnología aplicada a herramientas de alto impacto: ponderación de costo-efectividad, seguridad clínica, aceptabilidad social y soberanía de datos.",
    "summary_en": "Technology assessment methodology evaluating cost-benefit ratios, safety metrics, social trust, and health data sovereignty.",
    "key_takeaway_es": "Provee un modelo de evaluación previa multidisciplinaria para comités de bioética y comités institucionales universitarios.",
    "apa7": "European Parliament. (2026). <em>Technology assessment for an EU digital tool</em> (EPRS / STOA Study). Publications Office of the European Union.",
    "bibtex": "@techreport{eprs2026assessment,\n  author = {{European Parliamentary Research Service}},\n  title = {Technology Assessment for an EU Digital Tool},\n  year = {2026}\n}"
  },
  {
    "id": "doc_42",
    "filename": "The AI Compass.pdf",
    "title": "The AI Compass: Tokenomics and Enterprise Value Creation",
    "title_es": "La Brújula de la IA: Tokenomics y Creación de Valor Estratégico",
    "author": "Enterprise AI Yield Group",
    "year": 2026,
    "pages": 60,
    "words": 9334,
    "category": "maturity",
    "category_label": {
      "es": "Madurez y Estrategia Tecnológica",
      "en": "Maturity & Strategy"
    },
    "type": "report",
    "type_label": {
      "es": "Informe Estratégico",
      "en": "Strategic Report"
    },
    "summary_es": "Economía de consumo de tokens, optimización de inferencia, costo total de propiedad (TCO) y criterios para elegir entre modelos propietarios vía API o modelos abiertos auto-alojados.",
    "summary_en": "Tokenomics economics, inference latency optimization, total cost of ownership (TCO), and open-weight vs proprietary API tradeoffs.",
    "key_takeaway_es": "Guía económica para directores de finanzas y tecnología en universidades para presupuestar licencias e infraestructura de IA de forma sostenible.",
    "apa7": "AI Yield Group. (2026). <em>The AI compass: Mastering tokenomics to maximize enterprise value</em> (Issue 01). Enterprise AI Insights.",
    "bibtex": "@report{aiyield2026compass,\n  author = {{Enterprise AI Yield Group}},\n  title = {The AI Compass: Mastering Tokenomics to Maximize Enterprise Value},\n  year = {2026}\n}"
  },
  {
    "id": "doc_43",
    "filename": "The AI Readiness Objectives Towards Sufficiency in National AI Security Strategies.pdf",
    "title": "The AI Readiness Objectives: Towards Sufficiency in National AI Security",
    "title_es": "Objetivos de Preparación en IA: Hacia la Suficiencia en Seguridad y Resiliencia",
    "author": "Glasser, G., & McKernon, E.",
    "year": 2026,
    "pages": 23,
    "words": 5796,
    "category": "sovereignty",
    "category_label": {
      "es": "Soberanía y Seguridad",
      "en": "Sovereignty & Security"
    },
    "type": "paper",
    "type_label": {
      "es": "Documento Estratégico",
      "en": "Strategic Paper"
    },
    "summary_es": "Marco de 7 objetivos fundamentales de preparación institucional: soberanía de infraestructura, capacidades forenses, defensa contra agentes maliciosos y talento nacional.",
    "summary_en": "Seven core organizational readiness objectives: infrastructure autonomy, forensic capabilities, defense against autonomous threats, and indigenous talent development.",
    "key_takeaway_es": "Enfatiza que la resiliencia tecnológica nacional depende del talento que forman las universidades públicas y privadas.",
    "apa7": "Glasser, G., & McKernon, E. (2026). <em>The AI readiness objectives: Towards sufficiency in national AI security strategies</em>. Security Studies Series.",
    "bibtex": "@article{glasser2026readiness,\n  author = {Glasser, G. and McKernon, E.},\n  title = {The AI Readiness Objectives: Towards Sufficiency in National AI Security Strategies},\n  year = {2026}\n}"
  },
  {
    "id": "doc_44",
    "filename": "The State of AI Readiness in Financial Services.pdf",
    "title": "The State of AI Readiness: Scaled Integration and Organizational Alignment",
    "title_es": "Estado de la Preparación de IA: Integración a Escala y Alineamiento Organizacional",
    "author": "Financial CX Research Group",
    "year": 2026,
    "pages": 24,
    "words": 4198,
    "category": "maturity",
    "category_label": {
      "es": "Madurez Organizacional",
      "en": "Organizational Maturity"
    },
    "type": "report",
    "type_label": {
      "es": "Informe de Preparación",
      "en": "Readiness Report"
    },
    "summary_es": "Estudio sobre barreras culturales en la adopción tecnológica: el principal obstáculo para escalar la IA no es la tecnología, sino la resistencia al cambio, la falta de incentivos y los silos departamentales.",
    "summary_en": "Empirical study on organizational barriers: cultural resistance, siloed structures, and incentive misalignment outweigh technical bottlenecks.",
    "key_takeaway_es": "Refuerza la tesis de la Presentación 2: construir cultura de IA es un desafío de liderazgo, incentivos y gestión humana del cambio.",
    "apa7": "Financial CX Research. (2026). <em>The state of AI readiness: Scaling AI across customer experience and management</em>. Financial CX Insights.",
    "bibtex": "@report{fcx2026readiness,\n  author = {{Financial CX Research}},\n  title = {The State of AI Readiness},\n  year = {2026}\n}"
  },
  {
    "id": "doc_45",
    "filename": "The Work AI Index Global.pdf",
    "title": "The Work AI Index Global: Botsitting, Botshitting, and Hidden Human Labor",
    "title_es": "The Work AI Index Global: Trabajo Humano Oculto y Supervisión de la IA",
    "author": "Work AI Institute",
    "year": 2026,
    "pages": 18,
    "words": 5266,
    "category": "adoption",
    "category_label": {
      "es": "Trabajo, Productividad y Adopción",
      "en": "Work & Productivity"
    },
    "type": "report",
    "type_label": {
      "es": "Informe Crítico de Trabajo",
      "en": "Work Labor Report"
    },
    "summary_es": "Investigación crítica sobre el fenómeno del botsitting: los profesionales pasan horas corrigiendo, depurando y vigilando salidas mediocres de la IA, lo que puede incrementar la fatiga cognitiva en lugar de ahorrar tiempo.",
    "summary_en": "Critical inquiry into botsitting and hidden labor: workers spend extensive hours verifying and repairing degraded automated outputs.",
    "key_takeaway_es": "Advierte a los directivos universitarios contra asumir que la IA produce ahorros inmediatos de tiempo sin considerar la carga cognitiva de revisión.",
    "apa7": "Work AI Institute. (2026). <em>The work AI index global: Botsitting, botshitting, and the hidden human labor of AI at work</em>. Work AI Institute Reports.",
    "bibtex": "@report{workai2026index,\n  author = {{Work AI Institute}},\n  title = {The Work AI Index Global: Botsitting, Botshitting, and the Hidden Human Labor of AI at Work},\n  year = {2026}\n}"
  },
  {
    "id": "doc_46",
    "filename": "World Development Report 2026 The Promise of Artificial Intelligence.pdf",
    "title": "World Development Report 2026: The Promise of Artificial Intelligence",
    "title_es": "Informe sobre el Desarrollo Mundial 2026: La Promesa de la Inteligencia Artificial",
    "author": "World Bank Group",
    "year": 2026,
    "pages": 380,
    "words": 190414,
    "category": "policy",
    "category_label": {
      "es": "Desarrollo Global y Políticas",
      "en": "Global Development & Policy"
    },
    "type": "report",
    "type_label": {
      "es": "Informe Insignia Banco Mundial",
      "en": "Flagship World Bank Report"
    },
    "summary_es": "El informe insignia mundial más trascendente sobre IA y desarrollo: analiza el potencial transformador de la productividad y alerta sobre riesgos de concentración extrema de capital tecnológico, ensanchamiento de brechas entre países y necesidad de complementos institucionales fuertes.",
    "summary_en": "Flagship World Bank global analysis evaluating AI’s productivity dividend alongside extreme capital concentration risks and institutional prerequisites in emerging economies.",
    "key_takeaway_es": "Pilar documental central de ambas presentaciones: la tecnología sola no genera desarrollo; sin instituciones fuertes, complementos pedagógicos y marcos éticos, la IA amplifica las desigualdades preexistentes.",
    "apa7": "World Bank. (2026). <em>World development report 2026: The promise of artificial intelligence</em>. World Bank Group. https://doi.org/10.1596/978-1-4648-2331-2",
    "bibtex": "@book{worldbank2026promise,\n  author = {{World Bank}},\n  title = {World Development Report 2026: The Promise of Artificial Intelligence},\n  year = {2026},\n  publisher = {World Bank Group},\n  doi = {10.1596/978-1-4648-2331-2}\n}"
  }
];

const projectMultimediaResources = [
  {
    "id": "res_p1",
    "title": "Presentación Ejecutiva 01: Uso Responsable de la IA en la Educación Superior",
    "title_en": "Executive Presentation 01: Responsible AI Adoption in Higher Education",
    "format": "HTML5 Interactivo + Diapositivas + TTS",
    "duration": "40 minutos · 36 diapositivas auditadas",
    "audience": "Autoridades y líderes universitarios (Perú y América Latina)",
    "link": "presentacion-1.html",
    "badge": "Diapositivas Ejecutivas",
    "badge_class": "badge-deck",
    "summary": "Diagnóstico empírico, adopción estudiantil y docente, riesgos pedagógicos y marco institucional de decisiones para actuar con criterio."
  },
  {
    "id": "res_p2",
    "title": "Presentación Ejecutiva 02: ¿Cómo Construir una Cultura de Inteligencia Artificial?",
    "title_en": "Executive Presentation 02: How to Build an AI Culture in Higher Education",
    "format": "HTML5 Interactivo + Diapositivas + TTS",
    "duration": "20 minutos · 18 diapositivas auditadas",
    "audience": "Líderes de transformación, decanos y comités de innovación",
    "link": "presentacion-2.html",
    "badge": "Diapositivas Ejecutivas",
    "badge_class": "badge-deck",
    "summary": "Liderazgo directivo, marco de madurez organizacional en 5 etapas, alfabetización diferenciada por rol y ruta de implementación institucional."
  },
  {
    "id": "res_syllabus",
    "title": "EthicalAI — Syllabus de Recomendaciones para la Educación Superior",
    "title_en": "EthicalAI — Syllabus of Recommendations for Higher Education",
    "format": "Documento Oficial de Recomendaciones y Políticas (PDF)",
    "duration": "Consorcio Erasmus+ EthicalAI",
    "audience": "Comunidades universitarias y comités de acreditación",
    "link": "../EthicalAI%20-%20Syllabus%20of%20Recommendations%20for%20Higher%20Education%20.pdf",
    "badge": "Syllabus Oficial",
    "badge_class": "badge-doc",
    "summary": "Marco exhaustivo de directrices éticas, pedagógicas e institucionales consensuadas por las universidades de Costa Rica, Perú, España e Italia."
  },
  {
    "id": "res_informe_wp4",
    "title": "EthicalAI — Informe Técnico WP4 D4.1: Validación de Hallazgos y Datos",
    "title_en": "EthicalAI — Technical Report WP4 D4.1: Validation of Findings and Evidence",
    "format": "Informe Técnico de Investigación (PDF)",
    "duration": "WP4 D4.1 v2 (Septiembre 2026)",
    "audience": "Investigadores y coordinadores de proyectos internacionales",
    "link": "../EthicalAI%20%E2%80%94%20Informe%20WP4%20D4.1%20v2%20(sept.%202026).pdf",
    "badge": "Informe Técnico WP4",
    "badge_class": "badge-doc",
    "summary": "Reporte detallado de auditoría empírica, metodología, validación de instrumentos y resultados de encuestas aplicadas en universidades del consorcio."
  },
  {
    "id": "res_brochure",
    "title": "Brochure Oficial del IX Seminario Internacional de Investigación UMCH Lima",
    "title_en": "Official Brochure of the 9th UMCH International Research Seminar",
    "format": "Brochure Informativo y Programa Oficial (PDF)",
    "duration": "Santiago de Surco, Lima, Perú · 14 de octubre de 2026",
    "audience": "Participantes y ponentes del seminario",
    "link": "../Charla%20Peru%CC%81/02%20Brochure%20Seminario%20Internacional%20Ethical%20IA%202026%20(1).pdf",
    "badge": "Programa del Evento",
    "badge_class": "badge-event",
    "summary": "Programa oficial, temáticas de las ponencias, ponentes internacionales y cronograma de sesiones de trabajo en la Universidad Marcelino Champagnat."
  }
];
