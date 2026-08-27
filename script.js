const links = [...document.querySelectorAll(".toc-link")];
const sections = [...document.querySelectorAll("[data-nav-section]")];

if ("IntersectionObserver" in window && sections.length && links.length) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    links.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  }, { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.2, 0.5] });

  sections.forEach((section) => observer.observe(section));
}
