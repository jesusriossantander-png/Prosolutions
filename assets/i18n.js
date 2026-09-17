/* Pro Solutions Industrial — idioma, modal de contacto, filtro de servicios.
   Un solo diccionario para las dos páginas. Español por defecto. */
(function () {
  "use strict";

  var STORAGE_KEY = "prosolutions_lang";
  var DEFAULT_LANG = "es";

  var DICT = {
    es: {
      titleHome: "Pro Solutions Industrial — Mantenimiento y reparaciones industriales",
      titleServices: "Servicios | Pro Solutions Industrial",
      metaHome: "Mantenimiento industrial, reparaciones mecánicas y soporte técnico para equipos y procesos. Pro Solutions Industrial.",
      metaServices: "Catálogo de servicios de Pro Solutions Industrial: mantenimiento programado, reparaciones correctivas, soporte a demanda y proyectos a medida.",

      navServices: "Servicios",
      navContact: "Contactar",
      langToEs: "Ver el sitio en español",
      langToEn: "Ver el sitio en inglés",

      heroEyebrow: "Mantenimiento · Reparación · Ingeniería",
      heroTitle: "Mantenemos tu planta en marcha",
      heroLead: "Mantenimiento, reparaciones mecánicas y soporte técnico para equipos y procesos industriales, con criterio técnico y trazabilidad.",
      specRegime: "Régimen",
      specRegimeVal: "Programado · Correctivo · A demanda · Por proyecto",
      specScope: "Alcance",
      specScopeVal: "Equipos, componentes y procesos industriales",
      specContact: "Contacto",
      ctaContact: "Contactar",
      ctaServices: "Ver servicios",
      ctaHome: "Inicio",

      badgeAlt: "Isotipo de Pro Solutions Industrial: engranaje con llama",
      badgeTag: "Industria · Servicio · Precisión",
      badgeTitle: "Pro Solutions Industrial",
      badgeText: "Soporte técnico para que los equipos sigan produciendo.",

      regimesTitle: "Cómo trabajamos",
      regimesHint: "Cada servicio tiene un régimen. Elegí el tuyo.",
      regimeProgramado: "Programado",
      regimeProgramadoText: "Preventivo con calendario. Menos paradas imprevistas.",
      regimeCorrectivo: "Correctivo",
      regimeCorrectivoText: "Cuando algo falla. Diagnóstico y reparación.",
      regimeDemanda: "A demanda",
      regimeDemandaText: "Asistencia y consultoría según la necesidad.",
      regimeProyecto: "Por proyecto",
      regimeProyectoText: "Soluciones a medida con alcance definido.",
      regimeMore: "Ver servicios →",

      servicesEyebrow: "Catálogo de servicios",
      servicesTitle: "Servicios",
      servicesLead: "Soluciones técnicas para equipos industriales, soporte de mantenimiento y procesos de reparación, orientadas a confiabilidad, seguridad y continuidad operativa.",
      filterLabel: "Filtrar por régimen",
      filterAll: "Todos",
      serviceAsk: "Consultar",

      s1Title: "Mantenimiento industrial",
      s1Text: "Soporte preventivo y correctivo para equipos industriales: menos paradas y producción en marcha.",
      s2Title: "Reparaciones mecánicas",
      s2Text: "Reparación y evaluación de componentes mecánicos con criterio técnico, trazabilidad y atención al detalle.",
      s3Title: "Soluciones técnicas",
      s3Text: "Asistencia industrial adaptada a cada cliente, con soluciones prácticas para equipos, procesos y necesidades operativas.",
      s4Title: "Soporte de procesos",
      s4Text: "Apoyo en inspección, documentación y control para mejorar la organización y el seguimiento técnico.",
      s5Title: "Consultoría industrial",
      s5Text: "Orientación técnica para planificar el mantenimiento, revisar el estado de los equipos y detectar mejoras.",
      s6Title: "Proyectos a medida",
      s6Text: "Desarrollo de soluciones específicas según el requerimiento, alcance y prioridades técnicas de cada proyecto.",

      ctaBandText: "¿Tenés un equipo parado o un mantenimiento por planificar? Contanos qué necesitás.",

      footerCopy: "© 2026 Pro Solutions Industrial",

      modalTitle: "Contacto",
      modalHint: "Respondemos por correo. Contanos el equipo, el problema o el alcance.",
      modalClose: "Cerrar",
      fieldName: "Nombre completo",
      fieldEmail: "Correo electrónico",
      fieldMessage: "Mensaje",
      phName: "Nombre y apellido",
      phEmail: "nombre@empresa.com",
      phMessage: "Equipo, falla o servicio que necesitás",
      submit: "Enviar mensaje",
      askPrefix: "Consulta sobre: ",
      toastSent: "Mensaje enviado"
    },
    en: {
      titleHome: "Pro Solutions Industrial — Industrial maintenance and repairs",
      titleServices: "Services | Pro Solutions Industrial",
      metaHome: "Industrial maintenance, mechanical repairs and technical support for equipment and processes. Pro Solutions Industrial.",
      metaServices: "Pro Solutions Industrial service catalogue: scheduled maintenance, corrective repairs, on-demand support and custom projects.",

      navServices: "Services",
      navContact: "Contact us",
      langToEs: "View the site in Spanish",
      langToEn: "View the site in English",

      heroEyebrow: "Maintenance · Repair · Engineering",
      heroTitle: "We keep your plant running",
      heroLead: "Maintenance, mechanical repairs and technical support for industrial equipment and processes, with sound engineering judgement and traceability.",
      specRegime: "Regime",
      specRegimeVal: "Scheduled · Corrective · On demand · Per project",
      specScope: "Scope",
      specScopeVal: "Industrial equipment, components and processes",
      specContact: "Contact",
      ctaContact: "Contact us",
      ctaServices: "See services",
      ctaHome: "Home",

      badgeAlt: "Pro Solutions Industrial mark: a gear with a flame",
      badgeTag: "Industry · Service · Precision",
      badgeTitle: "Pro Solutions Industrial",
      badgeText: "Technical support that keeps equipment producing.",

      regimesTitle: "How we work",
      regimesHint: "Every service has a regime. Pick yours.",
      regimeProgramado: "Scheduled",
      regimeProgramadoText: "Preventive work on a calendar. Fewer unplanned stops.",
      regimeCorrectivo: "Corrective",
      regimeCorrectivoText: "When something breaks. Diagnosis and repair.",
      regimeDemanda: "On demand",
      regimeDemandaText: "Assistance and consulting as the need arises.",
      regimeProyecto: "Per project",
      regimeProyectoText: "Custom solutions with a defined scope.",
      regimeMore: "See services →",

      servicesEyebrow: "Service catalogue",
      servicesTitle: "Services",
      servicesLead: "Technical solutions for industrial equipment, maintenance support and repair processes, focused on reliability, safety and operational continuity.",
      filterLabel: "Filter by regime",
      filterAll: "All",
      serviceAsk: "Ask about this",

      s1Title: "Industrial maintenance",
      s1Text: "Preventive and corrective support for industrial equipment: fewer stops and production kept moving.",
      s2Title: "Mechanical repairs",
      s2Text: "Repair and evaluation of mechanical components with technical criteria, traceability and attention to detail.",
      s3Title: "Technical solutions",
      s3Text: "Industrial assistance adapted to each client, with practical solutions for equipment, processes and operational needs.",
      s4Title: "Process support",
      s4Text: "Support in inspection, documentation and control tasks to improve organisation and technical follow-up.",
      s5Title: "Industrial consulting",
      s5Text: "Technical guidance to plan maintenance, review equipment condition and find improvements.",
      s6Title: "Custom projects",
      s6Text: "Development of specific solutions according to the requirement, scope and technical priorities of each project.",

      ctaBandText: "Have a machine down or maintenance to plan? Tell us what you need.",

      footerCopy: "© 2026 Pro Solutions Industrial",

      modalTitle: "Contact",
      modalHint: "We reply by email. Tell us the equipment, the problem or the scope.",
      modalClose: "Close",
      fieldName: "Full name",
      fieldEmail: "Email address",
      fieldMessage: "Message",
      phName: "First and last name",
      phEmail: "name@company.com",
      phMessage: "Equipment, fault or service you need",
      submit: "Send message",
      askPrefix: "Enquiry about: ",
      toastSent: "Message sent"
    }
  };

  function storageGet() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function storageSet(v) {
    try { localStorage.setItem(STORAGE_KEY, v); } catch (e) { /* modo privado, sin persistencia */ }
  }

  function currentLang() {
    var saved = storageGet();
    return saved === "en" ? "en" : DEFAULT_LANG;
  }

  function t(key, lang) {
    var d = DICT[lang || currentLang()];
    return d && d[key] !== undefined ? d[key] : key;
  }

  function setLang(lang) {
    lang = lang === "en" ? "en" : "es";
    storageSet(lang);
    document.documentElement.lang = lang;
    var d = DICT[lang];

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (d[key] !== undefined) el.textContent = d[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (d[key] !== undefined) el.innerHTML = d[key];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-ph");
      if (d[key] !== undefined) el.setAttribute("placeholder", d[key]);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (d[key] !== undefined) el.setAttribute("aria-label", d[key]);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (d[key] !== undefined) el.setAttribute("alt", d[key]);
    });

    var titleKey = document.body.getAttribute("data-title-key");
    if (titleKey && d[titleKey]) document.title = d[titleKey];
    var metaKey = document.body.getAttribute("data-meta-key");
    var meta = document.querySelector('meta[name="description"]');
    if (metaKey && meta && d[metaKey]) meta.setAttribute("content", d[metaKey]);

    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });
  }

  /* ---------- modal ---------- */

  var lastFocus = null;

  function modalEl() { return document.getElementById("contactModal"); }

  function focusables(root) {
    return Array.prototype.slice.call(root.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ));
  }

  function openContact(prefill) {
    var modal = modalEl();
    if (!modal) return;
    lastFocus = document.activeElement;
    var message = modal.querySelector('[name="message"]');
    if (message && prefill) {
      message.value = t("askPrefix") + prefill + "\n";
    }
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    var first = modal.querySelector('[name="name"]');
    if (first) first.focus();
  }

  function closeContact() {
    var modal = modalEl();
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
    lastFocus = null;
  }

  function trapTab(event) {
    var modal = modalEl();
    if (!modal || !modal.classList.contains("is-open") || event.key !== "Tab") return;
    var items = focusables(modal.querySelector(".modal__box"));
    if (!items.length) return;
    var first = items[0], last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }

  /* ---------- retorno del formulario + aviso ---------- */

  function returnUrl() {
    var url = new URL(window.location.href);
    url.searchParams.set("mensaje", "enviado");
    url.hash = "";
    return url.toString();
  }

  function setReturnUrls() {
    document.querySelectorAll('input[name="_next"]').forEach(function (input) { input.value = returnUrl(); });
  }

  function showToastIfSent() {
    var params = new URLSearchParams(window.location.search);
    if (params.get("mensaje") !== "enviado") return;
    var toast = document.getElementById("sentToast");
    if (toast) {
      toast.classList.add("is-visible");
      setTimeout(function () { toast.classList.remove("is-visible"); }, 4500);
    }
    var clean = new URL(window.location.href);
    clean.searchParams.delete("mensaje");
    window.history.replaceState({}, document.title, clean.pathname + clean.search + clean.hash);
  }

  /* ---------- filtro por régimen (servicios) ---------- */

  function applyFilter(value) {
    var cards = document.querySelectorAll("[data-regimen]");
    if (!cards.length) return;
    cards.forEach(function (card) {
      var show = value === "all" || card.getAttribute("data-regimen") === value;
      if (show) card.removeAttribute("hidden"); else card.setAttribute("hidden", "");
    });
    document.querySelectorAll("[data-filter]").forEach(function (chip) {
      chip.setAttribute("aria-pressed", chip.getAttribute("data-filter") === value ? "true" : "false");
    });
  }

  function initFilter() {
    var chips = document.querySelectorAll("[data-filter]");
    if (!chips.length) return;
    var valid = ["all", "programado", "correctivo", "demanda", "proyecto"];
    var fromUrl = new URLSearchParams(window.location.search).get("regimen");
    applyFilter(valid.indexOf(fromUrl) > -1 ? fromUrl : "all");
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var v = chip.getAttribute("data-filter");
        applyFilter(v);
        var url = new URL(window.location.href);
        if (v === "all") url.searchParams.delete("regimen"); else url.searchParams.set("regimen", v);
        window.history.replaceState({}, document.title, url.pathname + url.search);
      });
    });
  }

  /* ---------- badge del hero al tacto (pantallas sin hover) ---------- */

  function initTouchBadge() {
    var card = document.querySelector(".hcard--hero");
    if (!card || !window.matchMedia("(hover: none)").matches) return;
    card.setAttribute("role", "button");
    card.setAttribute("aria-expanded", "false");
    function setOpen(open) {
      card.classList.toggle("is-active", open);
      card.setAttribute("aria-expanded", open ? "true" : "false");
    }
    card.addEventListener("click", function (event) {
      if (event.target.closest("button, a")) return; // el botón Contactar hace lo suyo
      setOpen(!card.classList.contains("is-active"));
    });
    card.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setOpen(!card.classList.contains("is-active")); }
    });
    document.addEventListener("click", function (event) {
      if (!card.contains(event.target)) setOpen(false);
    });
  }

  /* ---------- arranque ---------- */

  document.addEventListener("DOMContentLoaded", function () {
    setLang(currentLang());

    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () { setLang(btn.getAttribute("data-lang")); });
    });

    document.querySelectorAll("[data-open-contact]").forEach(function (el) {
      el.addEventListener("click", function (event) {
        event.preventDefault();
        var prefillKey = el.getAttribute("data-open-contact");
        openContact(prefillKey ? t(prefillKey) : "");
      });
    });
    document.querySelectorAll("[data-close-contact]").forEach(function (el) {
      el.addEventListener("click", closeContact);
    });

    var modal = modalEl();
    if (modal) {
      modal.addEventListener("click", function (event) { if (event.target === modal) closeContact(); });
    }
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && modal && modal.classList.contains("is-open")) closeContact();
      trapTab(event);
    });

    setReturnUrls();
    document.querySelectorAll("form.form").forEach(function (form) {
      form.addEventListener("submit", setReturnUrls);
    });
    showToastIfSent();
    initFilter();
    initTouchBadge();
  });

  window.ProSolutions = { setLang: setLang, t: t, openContact: openContact, closeContact: closeContact };
})();
