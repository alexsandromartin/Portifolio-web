// Menu Mobile
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Filtro Portfólio
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((b) =>
      b.classList.remove("bg-indigo-600", "text-white")
    );
    filterBtns.forEach((b) => b.classList.add("bg-white", "text-gray-700"));

    // Add active class to clicked button
    btn.classList.remove("bg-white", "text-gray-700");
    btn.classList.add("bg-indigo-600", "text-white");

    const filter = btn.getAttribute("data-filter");

    projectCards.forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Anima barras de habilidades quando a seção é exibida
const skillBars = document.querySelectorAll(".skill-bar");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const width = entry.target.style.width;
        entry.target.style.width = "0";
        setTimeout(() => {
          entry.target.style.width = width;
        }, 100);
      }
    });
  },
  { threshold: 0.5 }
);

skillBars.forEach((bar) => {
  observer.observe(bar);
});
