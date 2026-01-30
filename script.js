const toggle = document.querySelector(".menu-toggle");
const overlay = document.querySelector(".menu-overlay");

function openMenu() {
  overlay.hidden = false;
  toggle.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  overlay.hidden = true;
  toggle.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

toggle?.addEventListener("click", () => {
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  isOpen ? closeMenu() : openMenu();
});

overlay?.addEventListener("click", (e) => {
  if (e.target.matches("[data-close]")) closeMenu();
});

overlay?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay && !overlay.hidden) closeMenu();
});
