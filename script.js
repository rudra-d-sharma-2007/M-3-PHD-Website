/* ============================================================
   The Attention Ledger — shared behaviours
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Reading progress bar ---------- */
  const bar = document.getElementById("progress-bar");
  function updateProgress() {
    if (!bar) return;
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    bar.style.width = pct + "%";
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }

  /* ---------- Animate horizontal bar fills when visible ---------- */
  const barFills = document.querySelectorAll(".b-fill");
  function animateBar(fill) {
    const target = fill.getAttribute("data-w");
    if (target) {
      requestAnimationFrame(() => { fill.style.width = target + "%"; });
    }
  }
  if ("IntersectionObserver" in window && barFills.length) {
    const barIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animateBar(e.target);
            barIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    barFills.forEach((el) => barIO.observe(el));
  } else {
    barFills.forEach(animateBar);
  }

  /* ---------- Active nav highlighting ---------- */
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".topnav a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === here || (here === "" && href === "index.html")) a.classList.add("active");
  });

  /* ---------- Counter animation for hero stats ---------- */
  const counters = document.querySelectorAll("[data-count]");
  function runCounter(el) {
    const end = parseFloat(el.getAttribute("data-count"));
    const decimals = (el.getAttribute("data-decimals") || "0").length > 0 ? parseInt(el.getAttribute("data-decimals"), 10) : 0;
    const suffix = el.getAttribute("data-suffix") || "";
    const prefix = el.getAttribute("data-prefix") || "";
    const dur = 1100;
    const t0 = performance.now();
    function tick(t) {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = end * eased;
      el.textContent = prefix + val.toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if ("IntersectionObserver" in window && counters.length) {
    const cIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            runCounter(e.target);
            cIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => cIO.observe(el));
  } else {
    counters.forEach(runCounter);
  }
})();
