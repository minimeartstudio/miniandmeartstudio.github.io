// Nav scroll behavior
const header = document.querySelector(".topnav");

function onScroll() {
  if (window.scrollY > 18) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
