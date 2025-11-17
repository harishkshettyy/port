// Reveal elements on scroll
const observed = document.querySelectorAll(".section, .project-card, .fade-up, .slide-in");

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

observed.forEach(el => observer.observe(el));

console.log("✨ Pro-level animation activated!");