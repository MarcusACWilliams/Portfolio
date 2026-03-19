const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = "\u00A9 " + new Date().getFullYear();
}

const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  // Reveal sections once as they enter the viewport, then stop observing them.
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("visible"));
}

if ("serviceWorker" in navigator) {
  // Wait for the full page load so registration does not compete with initial rendering.
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch((error) => {
      console.error("Service worker registration failed:", error);
    });
  });
}
