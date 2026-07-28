/* ============================================================================
   Rapid Pest & Wildlife Solutions — Site JavaScript (vanilla, no libraries)
   ----------------------------------------------------------------------------
   Features:
     1.  Sticky-header shadow on scroll
     2.  Mobile navigation toggle
     3.  Smooth in-page anchor scrolling (with header offset)
     4.  FAQ accordion
     5.  Gallery category filtering
     6.  Scroll-reveal animations (IntersectionObserver)
     7.  Back-to-top button
     8.  Contact-form validation
     9.  Current year in footer
   Everything is wrapped in an IIFE and runs after DOMContentLoaded.
   ========================================================================== */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    stickyHeader();
    mobileNav();
    smoothScroll();
    faqAccordion();
    galleryFilter();
    scrollReveal();
    backToTop();
    contactForm();
    setYear();
  }

  /* ---------------------------------------------------------------- */
  /* 1. Sticky header — add a class once the page scrolls a little     */
  /* ---------------------------------------------------------------- */
  function stickyHeader() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------------------------------------------------------------- */
  /* 2. Mobile navigation                                             */
  /* ---------------------------------------------------------------- */
  function mobileNav() {
    var toggle = document.querySelector(".nav__toggle");
    var menu = document.querySelector(".nav__menu");
    if (!toggle || !menu) return;

    var close = function () {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close the menu when a link is tapped
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", close);
    });

    // Close on Escape and when resizing up to desktop
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 820) close();
    });
  }

  /* ---------------------------------------------------------------- */
  /* 3. Smooth anchor scrolling with sticky-header offset             */
  /*    (native smooth-scroll handles most; this fixes the offset)    */
  /* ---------------------------------------------------------------- */
  function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (e) {
        var id = link.getAttribute("href");
        if (id === "#" || id.length < 2) return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        var headerH =
          parseInt(
            getComputedStyle(document.documentElement).getPropertyValue("--header-h"),
            10
          ) || 74;
        var top = target.getBoundingClientRect().top + window.scrollY - headerH - 8;
        window.scrollTo({ top: top, behavior: "smooth" });
        // Move focus for accessibility without an extra jump
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      });
    });
  }

  /* ---------------------------------------------------------------- */
  /* 4. FAQ accordion — one open at a time                            */
  /* ---------------------------------------------------------------- */
  function faqAccordion() {
    var questions = document.querySelectorAll(".faq__q");
    if (!questions.length) return;

    questions.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var expanded = btn.getAttribute("aria-expanded") === "true";
        // Close all
        questions.forEach(function (other) {
          other.setAttribute("aria-expanded", "false");
          var a = document.getElementById(other.getAttribute("aria-controls"));
          if (a) a.style.maxHeight = null;
        });
        // Open this one if it was closed
        if (!expanded) {
          btn.setAttribute("aria-expanded", "true");
          var panel = document.getElementById(btn.getAttribute("aria-controls"));
          if (panel) panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    });
  }

  /* ---------------------------------------------------------------- */
  /* 5. Gallery category filtering                                    */
  /* ---------------------------------------------------------------- */
  function galleryFilter() {
    var buttons = document.querySelectorAll(".filter-btn");
    var items = document.querySelectorAll(".gallery__item");
    if (!buttons.length || !items.length) return;

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var filter = btn.getAttribute("data-filter");
        buttons.forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");

        items.forEach(function (item) {
          var cat = item.getAttribute("data-category");
          var show = filter === "all" || cat === filter;
          item.classList.toggle("is-hidden", !show);
        });
      });
    });
  }

  /* ---------------------------------------------------------------- */
  /* 6. Scroll-reveal animations                                      */
  /* ---------------------------------------------------------------- */
  function scrollReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!els.length) return;

    // Fallback: if IntersectionObserver is unsupported, just show them.
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var io = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach(function (el, i) {
      // Stagger siblings that opt in
      if (el.parentElement && el.parentElement.classList.contains("reveal-stagger")) {
        el.style.setProperty("--i", i % 6);
      }
      io.observe(el);
    });
  }

  /* ---------------------------------------------------------------- */
  /* 7. Back-to-top button                                            */
  /* ---------------------------------------------------------------- */
  function backToTop() {
    var btn = document.querySelector(".to-top");
    if (!btn) return;
    var onScroll = function () {
      btn.classList.toggle("is-visible", window.scrollY > 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------------------------------------------------------------- */
  /* 8. Contact-form validation                                       */
  /* ---------------------------------------------------------------- */
  function contactForm() {
    var form = document.getElementById("contactForm");
    if (!form) return;

    var success = form.querySelector(".form-success");

    var validators = {
      name: function (v) { return v.trim().length >= 2 || "Please enter your name."; },
      phone: function (v) {
        var digits = v.replace(/\D/g, "");
        return digits.length >= 10 || "Enter a valid phone number.";
      },
      email: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || "Enter a valid email address.";
      },
      service: function (v) { return v.trim() !== "" || "Please choose a service."; },
      message: function (v) { return v.trim().length >= 10 || "Tell us a little more (10+ characters)."; }
    };

    var showError = function (field, msg) {
      var wrap = field.closest(".field");
      if (!wrap) return;
      wrap.classList.add("has-error");
      var el = wrap.querySelector(".field__error");
      if (el && msg) el.textContent = msg;
      field.setAttribute("aria-invalid", "true");
    };
    var clearError = function (field) {
      var wrap = field.closest(".field");
      if (!wrap) return;
      wrap.classList.remove("has-error");
      field.removeAttribute("aria-invalid");
    };

    var validateField = function (field) {
      var fn = validators[field.name];
      if (!fn) return true;
      var result = fn(field.value);
      if (result === true) { clearError(field); return true; }
      showError(field, result);
      return false;
    };

    // Clear an error as the user corrects the field
    form.querySelectorAll("input, select, textarea").forEach(function (field) {
      field.addEventListener("input", function () {
        if (field.closest(".field").classList.contains("has-error")) validateField(field);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      var firstBad = null;

      Object.keys(validators).forEach(function (name) {
        var field = form.elements[name];
        if (!field) return;
        if (!validateField(field)) {
          valid = false;
          if (!firstBad) firstBad = field;
        }
      });

      if (!valid) {
        if (firstBad) firstBad.focus();
        if (success) success.classList.remove("is-visible");
        return;
      }

      // Front-end only demo: no backend wired up. Show a success message.
      form.reset();
      if (success) {
        success.classList.add("is-visible");
        success.setAttribute("tabindex", "-1");
        success.focus();
        success.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }

  /* ---------------------------------------------------------------- */
  /* 9. Footer year                                                   */
  /* ---------------------------------------------------------------- */
  function setYear() {
    var el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }
})();
