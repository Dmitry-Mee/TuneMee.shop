(function () {
  "use strict";

  // HEADER SCROLL EFFECT
  var header = document.getElementById("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 40) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  });

  // BURGER MENU
  var burger = document.getElementById("burger");
  var mobileNav = null;

  function createMobileNav() {
    var nav = document.createElement("div");
    nav.className = "mobile-nav";
    nav.id = "mobileNav";

    var links = [
      { href: "#configurator", text: "Конфигуратор" },
      { href: "#sound", text: "Звук" },
      { href: "#works", text: "Работы" },
      { href: "#faq", text: "FAQ" }
    ];

    links.forEach(function (item) {
      var a = document.createElement("a");
      a.href = item.href;
      a.className = "mobile-nav__link";
      a.textContent = item.text;
      a.addEventListener("click", closeMobileNav);
      nav.appendChild(a);
    });

    var divider = document.createElement("div");
    divider.className = "mobile-nav__divider";
    nav.appendChild(divider);

    var socials = document.createElement("div");
    socials.className = "mobile-nav__socials";

    var ig = document.createElement("a");
    ig.href = "https://instagram.com";
    ig.target = "_blank";
    ig.rel = "noopener noreferrer";
    ig.className = "btn-social btn-social--ig";
    ig.textContent = "Instagram";
    socials.appendChild(ig);

    var tg = document.createElement("a");
    tg.href = "https://t.me/Dmitry_Mee";
    tg.target = "_blank";
    tg.rel = "noopener noreferrer";
    tg.className = "btn-social btn-social--tg";
    tg.textContent = "Telegram";
    socials.appendChild(tg);

    nav.appendChild(socials);

    var callbackWrap = document.createElement("div");
    callbackWrap.className = "mobile-nav__callback";

    var callbackBtn = document.createElement("button");
    callbackBtn.className = "btn btn--outline btn--full";
    callbackBtn.textContent = "Заказать звонок";
    callbackBtn.addEventListener("click", function () {
      closeMobileNav();
      openModal();
    });

    callbackWrap.appendChild(callbackBtn);
    nav.appendChild(callbackWrap);

    document.body.appendChild(nav);
    return nav;
  }

  function openMobileNav() {
    if (!mobileNav) {
      mobileNav = createMobileNav();
    }
    mobileNav.classList.add("open");
    burger.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeMobileNav() {
    if (mobileNav) {
      mobileNav.classList.remove("open");
    }
    burger.classList.remove("open");
    document.body.style.overflow = "";
  }

  burger.addEventListener("click", function () {
    if (mobileNav && mobileNav.classList.contains("open")) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  // CONFIGURATOR PRICE CALCULATOR
  var brandSelect = document.getElementById("carBrand");
  var materialSelect = document.getElementById("material");
  var systemSelect = document.getElementById("systemType");
  var valvesSelect = document.getElementById("valves");
  var totalPriceEl = document.getElementById("totalPrice");
  var bBrand = document.getElementById("b-brand");
  var bMaterial = document.getElementById("b-material");
  var bSystem = document.getElementById("b-system");
  var bValves = document.getElementById("b-valves");
  var orderBtn = document.getElementById("orderBtn");

  var brandPrices = {
    bmw: 85000,
    audi: 90000,
    amg: 95000,
    porsche: 110000
  };

  var brandLabels = {
    bmw: "BMW M",
    audi: "Audi RS",
    amg: "Mercedes-AMG",
    porsche: "Porsche"
  };

  var materialPrices = {
    steel: 0,
    titan: 55000
  };

  var materialLabels = {
    steel: "AISI 304",
    titan: "Титан Grade 1"
  };

  var systemPrices = {
    catback: 0,
    full: 45000
  };

  var systemLabels = {
    catback: "Cat-back",
    full: "Полная трасса + Downpipes"
  };

  var valvesPrices = {
    none: 0,
    valves: 25000
  };

  var valvesLabels = {
    none: "Без заслонок",
    valves: "Управляемые заслонки"
  };

  function formatPrice(num) {
    return num.toLocaleString("ru-RU") + " ₽";
  }

  function calculatePrice() {
    var brand = brandSelect.value;
    var material = materialSelect.value;
    var system = systemSelect.value;
    var valves = valvesSelect.value;

    var total = brandPrices[brand] + materialPrices[material] + systemPrices[system] + valvesPrices[valves];

    totalPriceEl.classList.add("updating");

    setTimeout(function () {
      totalPriceEl.textContent = formatPrice(total);
      totalPriceEl.classList.remove("updating");
    }, 120);

    bBrand.textContent = brandLabels[brand];
    bMaterial.textContent = materialLabels[material];
    bSystem.textContent = systemLabels[system];
    bValves.textContent = valvesLabels[valves];
  }

  brandSelect.addEventListener("change", calculatePrice);
  materialSelect.addEventListener("change", calculatePrice);
  systemSelect.addEventListener("change", calculatePrice);
  valvesSelect.addEventListener("change", calculatePrice);

  calculatePrice();

  // ORDER BUTTON — TELEGRAM LINK WITH PARAMS
  orderBtn.addEventListener("click", function () {
    var brand = brandLabels[brandSelect.value];
    var material = materialLabels[materialSelect.value];
    var system = systemLabels[systemSelect.value];
    var valves = valvesLabels[valvesSelect.value];
    var price = totalPriceEl.textContent;

    var message =
      "Здравствуйте! Хочу заказать выхлопную систему TuneMee.\n\n" +
      "🚗 Марка: " + brand + "\n" +
      "🔩 Материал: " + material + "\n" +
      "🔧 Система: " + system + "\n" +
      "🎛 Заслонки: " + valves + "\n" +
      "💰 Расчётная стоимость: " + price + "\n\n" +
      "Прошу уточнить детали и подтвердить совместимость.";

    var encoded = encodeURIComponent(message);
    var url = "https://t.me/Dmitry_Mee?text=" + encoded;
    window.open(url, "_blank", "noopener,noreferrer");
  });

  // MODAL
  var modalOverlay = document.getElementById("modalOverlay");
  var modalClose = document.getElementById("modalClose");
  var callbackBtn = document.getElementById("callbackBtn");
  var callbackForm = document.getElementById("callbackForm");
  var callbackName = document.getElementById("callbackName");
  var callbackContact = document.getElementById("callbackContact");

  function openModal() {
    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
    setTimeout(function () {
      callbackName.focus();
    }, 300);
  }

  function closeModal() {
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  callbackBtn.addEventListener("click", openModal);

  modalClose.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modalOverlay.classList.contains("open")) {
      closeModal();
    }
  });

  callbackForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = callbackName.value.trim();
    var contact = callbackContact.value.trim();

    if (!name || !contact) {
      if (!name) {
        callbackName.style.borderColor = "#ff4d6d";
      }
      if (!contact) {
        callbackContact.style.borderColor = "#ff4d6d";
      }
      return;
    }

    callbackName.style.borderColor = "";
    callbackContact.style.borderColor = "";

    var message =
      "Заявка на обратный звонок от TuneMee.\n\n" +
      "👤 Имя: " + name + "\n" +
      "📞 Контакт: " + contact;

    var encoded = encodeURIComponent(message);
    var url = "https://t.me/Dmitry_Mee?text=" + encoded;

    window.open(url, "_blank", "noopener,noreferrer");

    callbackForm.reset();
    closeModal();
  });

  // FAQ ACCORDION
  var faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function (item) {
    var question = item.querySelector(".faq-item__question");
    question.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");

      faqItems.forEach(function (el) {
        el.classList.remove("open");
        el.querySelector(".faq-item__question").setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("open");
        question.setAttribute("aria-expanded", "true");
      }
    });
  });

  // SMOOTH SCROLL (fallback for older browsers)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href");
      if (targetId === "#") return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // INTERSECTION OBSERVER — fade-in on scroll
  var observerOptions = {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  };

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  var animTargets = document.querySelectorAll(
    ".work-card, .sound-card, .faq-item, .price-card, .configurator__controls"
  );

  animTargets.forEach(function (el) {
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    el.style.transition = "opacity 0.55s ease, transform 0.55s ease";
    observer.observe(el);
  });

})();