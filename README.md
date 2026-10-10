# EthicalAI · Taller y Sistema de Presentaciones Interactivas (Perú)

> **Iniciativa:** Proyecto Erasmus+ Capacity Building in Higher Education (CBHE)  
> **Código Oficial de Proyecto:** 101179117  
> **Sede Anfitriona en Perú:** IX Seminario Internacional de Investigación UMCH (Santiago de Surco, Lima, Perú)  
> **Sitio Web en Vivo (GitHub Pages):** [https://agmelendez.github.io/ethical_ai_peru/](https://agmelendez.github.io/ethical_ai_peru/)

---

## 🌟 Descripción General

Este repositorio contiene la plataforma web interactiva y el sistema de presentaciones ejecutivas del proyecto **EthicalAI** (*"Designing an ethical standard for the use of Artificial Intelligence in university education"*), desarrollado para los talleres y sesiones de divulgación académica con universidades socias en Perú (Universidad Marcelino Champagnat y Universidad Femenina del Sagrado Corazón).

El sistema está construido con HTML5 semántico, CSS moderno y JavaScript modular, optimizado para ser visualizado en navegadores modernos, proyectores de aula y dispositivos móviles sin dependencias pesadas ni frameworks de compilación externa.

---

## 🧭 Estructura del Proyecto

Todos los archivos del sitio residen en la raíz del repositorio para su despliegue inmediato en GitHub Pages:

```text
├── index.html              # Portal de entrada principal y selector de presentaciones
├── biblioteca.html         # Biblioteca digital interactiva con 46 recursos clasificados
├── presentacion-1.html     # Diapositivas: Recomendaciones Éticas para la Educación Superior
├── presentacion-2.html     # Diapositivas: Caso de Estudio Perú (Diagnóstico UNIFÉ y UMCH)
├── LogoProjecto.png        # Isotipo / logotipo oficial de EthicalAI
├── LogosProyecto.png       # Tira oficial de logotipos institucionales del consorcio
├── co-funded-eu.png        # Emblema oficial "Co-funded by the European Union"
├── assets/
│   ├── styles.css          # Sistema de diseño, variables CSS, tipografías y componentes
│   ├── app.js             # Motor de renderizado interactivo de diapositivas y controles
│   ├── library.js         # Motor interactivo de búsqueda, filtrado y render de la biblioteca
│   ├── library-data.js    # Base de datos estructurada con 46 recursos y metadatos
│   └── img/
│       └── partners/      # Logos institucionales de las 9 universidades y entidades socias
├── .nojekyll               # Configuración para GitHub Pages
├── README.md               # Documentación del proyecto
└── LICENSE                 # Licencia de código abierto
```

---

## 🚀 Módulos y Funcionalidades

### 1. Portal Principal (`index.html`)
* Acceso directo a las dos presentaciones interactivas.
* Navegación a la Biblioteca Digital de Recursos.
* Visualización institucional del consorcio internacional y pie de página oficial de cofinanciación Erasmus+.

### 2. Presentación 1 (`presentacion-1.html`)
* **Tema:** *Recomendaciones Éticas para la Educación Superior*.
* Cubre los 5 pilares estratégicos de gobernanza ética de IA: Integridad y Autoría, Alfabetización Crítica, Transparencia Algorítmica, Equidad e Inclusión, y Privacidad y Gobernanza de Datos.
* Incluye atajos de teclado (`Flechas`, `Espacio`, `M` para menú, `F` para pantalla completa).

### 3. Presentación 2 (`presentacion-2.html`)
* **Tema:** *Caso de Estudio Perú: Diagnóstico Institucional UNIFÉ y UMCH*.
* Análisis comparativo, brechas de adopción, infraestructura tecnológica y hoja de ruta de implementación 2026-2027.

### 4. Biblioteca Digital Interactiva (`biblioteca.html`)
* Catálogo dinámico con **46 recursos académicos, normativos y técnicos**.
* Motor de búsqueda en tiempo real por título, autor, año y palabras clave.
* Filtros interactivos por pilares éticos, tipo de documento e idioma.
* Visualizador modal de detalles con metadatos completos y enlaces oficiales.

---

## 🏛️ Consorcio Académico Internacional

Iniciativa cofinanciada por la Unión Europea bajo el programa Erasmus+ CBHE N° 101179117. Directorio de socios contractuales:

1. **🇨🇷 Universidad de Costa Rica (UCR) · CIODD** — [ucr.ac.cr](https://www.ucr.ac.cr/) *(Coordinación General)*
2. **🇨🇷 Universidad Estatal a Distancia (UNED)** — [uned.ac.cr](https://www.uned.ac.cr/)
3. **🇨🇷 Universidad Hispanoamericana (UH)** — [uh.ac.cr](https://www.uh.ac.cr/)
4. **🇵🇪 Universidad Marcelino Champagnat (UMCH)** — [umch.edu.pe](https://umch.edu.pe/)
5. **🇵🇪 Universidad Femenina del Sagrado Corazón (UNIFÉ)** — [unife.edu.pe](https://www.unife.edu.pe/)
6. **🇪🇸 Universitat de València (UV)** — [uv.es](https://www.uv.es/)
7. **🇪🇸 Associació Empresarial l’Alqueria Projectes Educatius (ALPE)** — [alqueriaeducatius.org](https://www.alqueriaeducatius.org/)
8. **🇮🇹 Sapienza Università di Roma · Dipartimento PDTA** — [uniroma1.it](https://web.uniroma1.it/pdta/home/)
9. **🇮🇹 Pixel Associazione** — [pixel-online.net](https://www.pixel-online.net/)

> Portal oficial del proyecto: [https://www.ethicalaiucr.info/](https://www.ethicalaiucr.info/)

---

## ⚖️ Licencia y Disclaimer Oficial

* **Licencia de Contenidos Académicos:** Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional ([CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es)).
* **Descargo de Responsabilidad (Unión Europea):**
  > *"Co-funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor the granting authority can be held responsible for them."*
