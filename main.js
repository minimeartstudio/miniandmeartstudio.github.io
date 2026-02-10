// Nav shrink on scroll (same behavior you had)
(function () {
  const header = document.querySelector(".topnav");
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 18) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

(function () {
  const backToTop = document.querySelector(".back-to-top");
  if (!backToTop) return;

  const toggleButton = () => {
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  };

  window.addEventListener("scroll", toggleButton, { passive: true });
  toggleButton();
})();
