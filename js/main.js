(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var progress = document.getElementById("readingProgress");
  var year = document.getElementById("currentYear");
  var revealItems = document.querySelectorAll(".reveal");
  var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  var collage = document.querySelector(".hero-collage");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  function updateProgress() {
    if (!progress) return;
    var root = document.documentElement;
    var available = root.scrollHeight - root.clientHeight;
    var ratio = available > 0 ? root.scrollTop / available : 0;
    progress.style.width = String(Math.min(100, Math.max(0, ratio * 100))) + "%";
  }

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress, { passive: true });

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  } else {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.08,
      rootMargin: "0px 0px -8% 0px"
    });

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  }

  if ("IntersectionObserver" in window) {
    var sections = Array.from(navLinks)
      .map(function (link) { return document.querySelector(link.getAttribute("href")); })
      .filter(Boolean);

    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          var active = link.getAttribute("href") === "#" + entry.target.id;
          if (active) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      });
    }, {
      rootMargin: "-25% 0px -65% 0px",
      threshold: 0
    });

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  if (collage && !reducedMotion && window.matchMedia("(pointer: fine)").matches) {
    collage.addEventListener("pointermove", function (event) {
      var bounds = collage.getBoundingClientRect();
      var x = (event.clientX - bounds.left) / bounds.width - 0.5;
      var y = (event.clientY - bounds.top) / bounds.height - 0.5;
      collage.style.setProperty("--pointer-x", x.toFixed(3));
      collage.style.setProperty("--pointer-y", y.toFixed(3));
    });

    collage.addEventListener("pointerleave", function () {
      collage.style.setProperty("--pointer-x", "0");
      collage.style.setProperty("--pointer-y", "0");
    });
  }
})();
