document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const revealItems = document.querySelectorAll(
    "h1, .eyebrow, .lead, .actions, .mini-stats li, .section-heading, .about-card, .timeline-item, .skill-card, .contact-box, .profile-card"
  );

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealItems.forEach((item) => {
    item.classList.add("reveal");
    revealObserver.observe(item);
  });

  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.color = "#b9a7ff";
    });

    link.addEventListener("mouseleave", () => {
      link.style.color = "";
    });
  });
});
